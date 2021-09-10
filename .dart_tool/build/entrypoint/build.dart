// Ensure that the build script itself is not opted in to null safety,
// instead of taking the language version from the current package.
//
// @dart=2.9
//
// ignore_for_file: directives_ordering

import 'package:build_runner_core/build_runner_core.dart' as _i1;
import 'package:over_react/builder.dart' as _i2;
import 'package:built_redux/builder.dart' as _i3;
import 'package:source_gen/builder.dart' as _i4;
import 'package:build_modules/builders.dart' as _i5;
import 'package:build_web_compilers/builders.dart' as _i6;
import 'package:build_config/build_config.dart' as _i7;
import 'package:build/build.dart' as _i8;
import 'package:sass_builder/sass_builder.dart' as _i9;
import 'dart:isolate' as _i10;
import 'package:build_runner/build_runner.dart' as _i11;
import 'dart:io' as _i12;

final _builders = <_i1.BuilderApplication>[
  _i1.apply(r'over_react:_over_react_local_builder', [_i2.overReactBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false),
  _i1.apply(r'over_react:overReactBuilder', [_i2.overReactBuilder],
      _i1.toDependentsOf(r'over_react'),
      hideOutput: true),
  _i1.apply(r'built_redux:built_redux', [_i3.builtRedux],
      _i1.toDependentsOf(r'built_redux'),
      hideOutput: true,
      appliesBuilders: const [r'source_gen:combining_builder']),
  _i1.apply(r'source_gen:combining_builder', [_i4.combiningBuilder],
      _i1.toNoneByDefault(),
      hideOutput: false, appliesBuilders: const [r'source_gen:part_cleanup']),
  _i1.apply(r'build_modules:module_library', [_i5.moduleLibraryBuilder],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [r'build_modules:module_cleanup']),
  _i1.apply(
      r'build_web_compilers:dart2js_modules',
      [
        _i6.dart2jsMetaModuleBuilder,
        _i6.dart2jsMetaModuleCleanBuilder,
        _i6.dart2jsModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [r'build_modules:module_cleanup']),
  _i1.apply(
      r'build_web_compilers:ddc_modules',
      [
        _i6.ddcMetaModuleBuilder,
        _i6.ddcMetaModuleCleanBuilder,
        _i6.ddcModuleBuilder
      ],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [r'build_modules:module_cleanup']),
  _i1.apply(
      r'build_web_compilers:ddc',
      [
        _i6.ddcKernelBuilderUnsound,
        _i6.ddcBuilderUnsound,
        _i6.ddcKernelBuilderSound,
        _i6.ddcBuilderSound
      ],
      _i1.toAllPackages(),
      isOptional: true,
      hideOutput: true,
      appliesBuilders: const [
        r'build_web_compilers:ddc_modules',
        r'build_web_compilers:dart2js_modules',
        r'build_web_compilers:dart_source_cleanup'
      ]),
  _i1.apply(
      r'build_web_compilers:sdk_js',
      [_i6.sdkJsCompileUnsound, _i6.sdkJsCompileSound, _i6.sdkJsCopyRequirejs],
      _i1.toNoneByDefault(),
      isOptional: true,
      hideOutput: true),
  _i1.apply(r'build_web_compilers:entrypoint', [_i6.webEntrypointBuilder],
      _i1.toRoot(),
      hideOutput: true,
      defaultGenerateFor: const _i7.InputSet(include: [
        r'web/**',
        r'test/**.dart.browser_test.dart',
        r'example/**',
        r'benchmark/**'
      ], exclude: [
        r'test/**.node_test.dart',
        r'test/**.vm_test.dart'
      ]),
      defaultOptions: _i8.BuilderOptions({
        'dart2js_args': ['--minify']
      }),
      defaultDevOptions: _i8.BuilderOptions({
        'dart2js_args': ['--enable-asserts']
      }),
      defaultReleaseOptions: _i8.BuilderOptions({'compiler': 'dart2js'}),
      appliesBuilders: const [
        r'build_web_compilers:dart2js_archive_extractor'
      ]),
  _i1.apply(r'sass_builder:sass_builder', [_i9.sassBuilder],
      _i1.toDependentsOf(r'sass_builder'),
      hideOutput: true,
      defaultReleaseOptions: _i8.BuilderOptions({'outputStyle': 'compressed'}),
      appliesBuilders: const [r'sass_builder:sass_source_cleanup']),
  _i1.applyPostProcess(r'build_modules:module_cleanup', _i5.moduleCleanup),
  _i1.applyPostProcess(r'build_web_compilers:dart2js_archive_extractor',
      _i6.dart2jsArchiveExtractor,
      defaultReleaseOptions: _i8.BuilderOptions({'filter_outputs': true})),
  _i1.applyPostProcess(
      r'build_web_compilers:dart_source_cleanup', _i6.dartSourceCleanup,
      defaultReleaseOptions: _i8.BuilderOptions({'enabled': true})),
  _i1.applyPostProcess(r'source_gen:part_cleanup', _i4.partCleanup),
  _i1.applyPostProcess(
      r'sass_builder:sass_source_cleanup', _i9.sassSourceCleanup,
      defaultReleaseOptions: _i8.BuilderOptions({'enabled': true}))
];
void main(List<String> args, [_i10.SendPort sendPort]) async {
  var result = await _i11.run(args, _builders);
  sendPort?.send(result);
  _i12.exitCode = result;
}
