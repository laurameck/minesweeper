// GENERATED CODE - DO NOT MODIFY BY HAND

// ignore_for_file: deprecated_member_use_from_same_package, unnecessary_null_in_if_null_operators, prefer_null_aware_operators
part of 'board.dart';

// **************************************************************************
// OverReactBuilder (package:over_react/src/builder.dart)
// **************************************************************************

@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.'
    ' EXCEPTION: this may be used in legacy boilerplate until'
    ' it is transitioned to the new mixin-based boilerplate.')
mixin $BoardProps on BoardProps {
  static const PropsMeta meta = _$metaForBoardProps;
  /* GENERATED CONSTANTS */

  static const List<PropDescriptor> $props = [];
  static const List<String> $propKeys = [];
}

@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
const PropsMeta _$metaForBoardProps = PropsMeta(
  fields: $BoardProps.$props,
  keys: $BoardProps.$propKeys,
);

final UiFactoryConfig<_$$BoardProps> _$BoardConfig = UiFactoryConfig(
    propsFactory: PropsFactory(
      map: (map) => _$$BoardProps(map),
      jsMap: (map) => _$$BoardProps$JsMap(map),
    ),
    displayName: 'Board');

@Deprecated(r'Use the private variable, _$BoardConfig, instead '
    'and update the `over_react` lower bound to version 4.1.0. '
    'For information on why this is deprecated, see https://github.com/Workiva/over_react/pull/650')
final UiFactoryConfig<_$$BoardProps> $BoardConfig = _$BoardConfig;

// Concrete props implementation.
//
// Implements constructor and backing map, and links up to generated component factory.
@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
abstract class _$$BoardProps extends UiProps
    with
        BoardProps,
        $BoardProps // If this generated mixin is undefined, it's likely because BoardProps is not a valid `mixin`-based props mixin, or because it is but the generated mixin was not imported. Check the declaration of BoardProps, and check that $BoardProps is exported/imported properly.
{
  _$$BoardProps._();

  factory _$$BoardProps(Map backingMap) {
    if (backingMap == null || backingMap is JsBackedMap) {
      return _$$BoardProps$JsMap(backingMap as JsBackedMap);
    } else {
      return _$$BoardProps$PlainMap(backingMap);
    }
  }

  /// Let `UiProps` internals know that this class has been generated.
  @override
  bool get $isClassGenerated => true;

  /// The default namespace for the prop getters/setters generated for this class.
  @override
  String get propKeyNamespace => '';

  @override
  PropsMetaCollection get staticMeta => const PropsMetaCollection({
        // If this generated mixin is undefined, it's likely because BoardProps is not a valid `mixin`-based props mixin, or because it is but the generated mixin was not imported. Check the declaration of BoardProps, and check that $BoardProps is exported/imported properly.
        BoardProps: $BoardProps.meta,
      });
}

// Concrete props implementation that can be backed by any [Map].
@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
class _$$BoardProps$PlainMap extends _$$BoardProps {
  // This initializer of `_props` to an empty map, as well as the reassignment
  // of `_props` in the constructor body is necessary to work around a DDC bug: https://github.com/dart-lang/sdk/issues/36217
  _$$BoardProps$PlainMap(Map backingMap)
      : this._props = {},
        super._() {
    this._props = backingMap ?? {};
  }

  /// The backing props map proxied by this class.
  @override
  Map get props => _props;
  Map _props;
}

// Concrete props implementation that can only be backed by [JsMap],
// allowing dart2js to compile more optimal code for key-value pair reads/writes.
@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
class _$$BoardProps$JsMap extends _$$BoardProps {
  // This initializer of `_props` to an empty map, as well as the reassignment
  // of `_props` in the constructor body is necessary to work around a DDC bug: https://github.com/dart-lang/sdk/issues/36217
  _$$BoardProps$JsMap(JsBackedMap backingMap)
      : this._props = JsBackedMap(),
        super._() {
    this._props = backingMap ?? JsBackedMap();
  }

  /// The backing props map proxied by this class.
  @override
  JsBackedMap get props => _props;
  JsBackedMap _props;
}
