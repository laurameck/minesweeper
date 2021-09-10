// GENERATED CODE - DO NOT MODIFY BY HAND

// ignore_for_file: deprecated_member_use_from_same_package, unnecessary_null_in_if_null_operators, prefer_null_aware_operators
part of 'cell.dart';

// **************************************************************************
// OverReactBuilder (package:over_react/src/builder.dart)
// **************************************************************************

@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.'
    ' EXCEPTION: this may be used in legacy boilerplate until'
    ' it is transitioned to the new mixin-based boilerplate.')
mixin $CellProps on CellProps {
  static const PropsMeta meta = _$metaForCellProps;
  @override
  String get value => (props[_$key__value__CellProps] ?? null) as String;
  @override
  set value(String value) => props[_$key__value__CellProps] = value;
  @override
  String get adjacentBombs =>
      (props[_$key__adjacentBombs__CellProps] ?? null) as String;
  @override
  set adjacentBombs(String value) =>
      props[_$key__adjacentBombs__CellProps] = value;
  @override
  bool get isMine => (props[_$key__isMine__CellProps] ?? null) as bool;
  @override
  set isMine(bool value) => props[_$key__isMine__CellProps] = value;
  /* GENERATED CONSTANTS */
  static const PropDescriptor _$prop__value__CellProps =
      PropDescriptor(_$key__value__CellProps);
  static const PropDescriptor _$prop__adjacentBombs__CellProps =
      PropDescriptor(_$key__adjacentBombs__CellProps);
  static const PropDescriptor _$prop__isMine__CellProps =
      PropDescriptor(_$key__isMine__CellProps);
  static const String _$key__value__CellProps = 'CellProps.value';
  static const String _$key__adjacentBombs__CellProps =
      'CellProps.adjacentBombs';
  static const String _$key__isMine__CellProps = 'CellProps.isMine';

  static const List<PropDescriptor> $props = [
    _$prop__value__CellProps,
    _$prop__adjacentBombs__CellProps,
    _$prop__isMine__CellProps
  ];
  static const List<String> $propKeys = [
    _$key__value__CellProps,
    _$key__adjacentBombs__CellProps,
    _$key__isMine__CellProps
  ];
}

@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
const PropsMeta _$metaForCellProps = PropsMeta(
  fields: $CellProps.$props,
  keys: $CellProps.$propKeys,
);

final UiFactoryConfig<_$$CellProps> _$CellConfig = UiFactoryConfig(
    propsFactory: PropsFactory(
      map: (map) => _$$CellProps(map),
      jsMap: (map) => _$$CellProps$JsMap(map),
    ),
    displayName: 'Cell');

@Deprecated(r'Use the private variable, _$CellConfig, instead '
    'and update the `over_react` lower bound to version 4.1.0. '
    'For information on why this is deprecated, see https://github.com/Workiva/over_react/pull/650')
final UiFactoryConfig<_$$CellProps> $CellConfig = _$CellConfig;

// Concrete props implementation.
//
// Implements constructor and backing map, and links up to generated component factory.
@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
abstract class _$$CellProps extends UiProps
    with
        CellProps,
        $CellProps // If this generated mixin is undefined, it's likely because CellProps is not a valid `mixin`-based props mixin, or because it is but the generated mixin was not imported. Check the declaration of CellProps, and check that $CellProps is exported/imported properly.
{
  _$$CellProps._();

  factory _$$CellProps(Map backingMap) {
    if (backingMap == null || backingMap is JsBackedMap) {
      return _$$CellProps$JsMap(backingMap as JsBackedMap);
    } else {
      return _$$CellProps$PlainMap(backingMap);
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
        // If this generated mixin is undefined, it's likely because CellProps is not a valid `mixin`-based props mixin, or because it is but the generated mixin was not imported. Check the declaration of CellProps, and check that $CellProps is exported/imported properly.
        CellProps: $CellProps.meta,
      });
}

// Concrete props implementation that can be backed by any [Map].
@Deprecated('This API is for use only within generated code.'
    ' Do not reference it in your code, as it may change at any time.')
class _$$CellProps$PlainMap extends _$$CellProps {
  // This initializer of `_props` to an empty map, as well as the reassignment
  // of `_props` in the constructor body is necessary to work around a DDC bug: https://github.com/dart-lang/sdk/issues/36217
  _$$CellProps$PlainMap(Map backingMap)
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
class _$$CellProps$JsMap extends _$$CellProps {
  // This initializer of `_props` to an empty map, as well as the reassignment
  // of `_props` in the constructor body is necessary to work around a DDC bug: https://github.com/dart-lang/sdk/issues/36217
  _$$CellProps$JsMap(JsBackedMap backingMap)
      : this._props = JsBackedMap(),
        super._() {
    this._props = backingMap ?? JsBackedMap();
  }

  /// The backing props map proxied by this class.
  @override
  JsBackedMap get props => _props;
  JsBackedMap _props;
}
