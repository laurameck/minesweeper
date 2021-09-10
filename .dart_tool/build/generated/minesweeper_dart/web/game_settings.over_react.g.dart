// GENERATED CODE - DO NOT MODIFY BY HAND

// ignore_for_file: deprecated_member_use_from_same_package, unnecessary_null_in_if_null_operators, prefer_null_aware_operators
part of 'game_settings.dart';

// **************************************************************************
// OverReactBuilder (package:over_react/src/builder.dart)
// **************************************************************************

@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.'
    ' EXCEPTION: this may be used in legacy boilerplate until'
    ' it is transitioned to the new mixin-based boilerplate.')
mixin $GameSettingsProps on GameSettingsProps {
  static const PropsMeta meta = _$metaForGameSettingsProps;
  /* GENERATED CONSTANTS */

  static const List<PropDescriptor> $props = [];
  static const List<String> $propKeys = [];
}

@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
const PropsMeta _$metaForGameSettingsProps = PropsMeta(
  fields: $GameSettingsProps.$props,
  keys: $GameSettingsProps.$propKeys,
);

final UiFactoryConfig<_$$GameSettingsProps> _$GameSettingsConfig =
    UiFactoryConfig(
        propsFactory: PropsFactory(
          map: (map) => _$$GameSettingsProps(map),
          jsMap: (map) => _$$GameSettingsProps$JsMap(map),
        ),
        displayName: 'GameSettings');

@Deprecated(r'Use the private variable, _$GameSettingsConfig, instead '
    'and update the `over_react` lower bound to version 4.1.0. '
    'For information on why this is deprecated, see https://github.com/Workiva/over_react/pull/650')
final UiFactoryConfig<_$$GameSettingsProps> $GameSettingsConfig =
    _$GameSettingsConfig;

// Concrete props implementation.
//
// Implements constructor and backing map, and links up to generated component factory.
@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
abstract class _$$GameSettingsProps extends UiProps
    with
        GameSettingsProps,
        $GameSettingsProps // If this generated mixin is undefined, it's likely because GameSettingsProps is not a valid `mixin`-based props mixin, or because it is but the generated mixin was not imported. Check the declaration of GameSettingsProps, and check that $GameSettingsProps is exported/imported properly.
{
  _$$GameSettingsProps._();

  factory _$$GameSettingsProps(Map backingMap) {
    if (backingMap == null || backingMap is JsBackedMap) {
      return _$$GameSettingsProps$JsMap(backingMap as JsBackedMap);
    } else {
      return _$$GameSettingsProps$PlainMap(backingMap);
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
        // If this generated mixin is undefined, it's likely because GameSettingsProps is not a valid `mixin`-based props mixin, or because it is but the generated mixin was not imported. Check the declaration of GameSettingsProps, and check that $GameSettingsProps is exported/imported properly.
        GameSettingsProps: $GameSettingsProps.meta,
      });
}

// Concrete props implementation that can be backed by any [Map].
@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
class _$$GameSettingsProps$PlainMap extends _$$GameSettingsProps {
  // This initializer of `_props` to an empty map, as well as the reassignment
  // of `_props` in the constructor body is necessary to work around a DDC bug: https://github.com/dart-lang/sdk/issues/36217
  _$$GameSettingsProps$PlainMap(Map backingMap)
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
class _$$GameSettingsProps$JsMap extends _$$GameSettingsProps {
  // This initializer of `_props` to an empty map, as well as the reassignment
  // of `_props` in the constructor body is necessary to work around a DDC bug: https://github.com/dart-lang/sdk/issues/36217
  _$$GameSettingsProps$JsMap(JsBackedMap backingMap)
      : this._props = JsBackedMap(),
        super._() {
    this._props = backingMap ?? JsBackedMap();
  }

  /// The backing props map proxied by this class.
  @override
  JsBackedMap get props => _props;
  JsBackedMap _props;
}
