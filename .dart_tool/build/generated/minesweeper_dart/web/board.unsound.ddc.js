define(['dart_sdk', 'packages/over_react/component_base', 'packages/react/hooks'], (function load__web__board(dart_sdk, packages__over_react__component_base, packages__react__hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const builder_helpers = packages__over_react__component_base.src__component_declaration__builder_helpers;
  const component_base = packages__over_react__component_base.src__component_declaration__component_base;
  const function_component = packages__over_react__component_base.src__component_declaration__function_component;
  const hooks = packages__over_react__component_base.src__component__hooks;
  const dom_components = packages__over_react__component_base.src__component__dom_components;
  const fragment_component = packages__over_react__component_base.src__component__fragment_component;
  const context = packages__over_react__component_base.src__util__context;
  const react_dom = packages__over_react__component_base.react_dom;
  const js_backed_map = packages__react__hooks.react_client__js_backed_map;
  var cell = Object.create(dart.library);
  var board$ = Object.create(dart.library);
  var game_settings = Object.create(dart.library);
  var game = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $length = dartx.length;
  var $add = dartx.add;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    PropDescriptorL: () => (T.PropDescriptorL = dart.constFn(dart.legacy(component_base.PropDescriptor)))(),
    JsBackedMapL: () => (T.JsBackedMapL = dart.constFn(dart.legacy(js_backed_map.JsBackedMap)))(),
    TypeL: () => (T.TypeL = dart.constFn(dart.legacy(core.Type)))(),
    PropsMetaL: () => (T.PropsMetaL = dart.constFn(dart.legacy(component_base.PropsMeta)))(),
    CellPropsL: () => (T.CellPropsL = dart.constFn(dart.legacy(cell.CellProps)))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectL: () => (T.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    JSArrayOfObjectL: () => (T.JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(T.ObjectL())))(),
    boolLToboolL: () => (T.boolLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.boolL()])))(),
    dynamicTovoid: () => (T.dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))(),
    SyntheticMouseEventLTovoid: () => (T.SyntheticMouseEventLTovoid = dart.constFn(dart.fnType(dart.void, [dart.legacy(dart.lazyJSType(() => dart.global.SyntheticMouseEvent, "SyntheticMouseEvent"))])))(),
    CellPropsLToReactElementL: () => (T.CellPropsLToReactElementL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [T.CellPropsL()])))(),
    _$$CellPropsL: () => (T._$$CellPropsL = dart.constFn(dart.legacy(cell._$$CellProps)))(),
    UiFactoryConfigOf_$$CellPropsL: () => (T.UiFactoryConfigOf_$$CellPropsL = dart.constFn(function_component.UiFactoryConfig$(T._$$CellPropsL())))(),
    PropsFactoryOf_$$CellPropsL: () => (T.PropsFactoryOf_$$CellPropsL = dart.constFn(function_component.PropsFactory$(T._$$CellPropsL())))(),
    MapL: () => (T.MapL = dart.constFn(dart.legacy(core.Map)))(),
    MapLTo_$$CellPropsL: () => (T.MapLTo_$$CellPropsL = dart.constFn(dart.fnType(T._$$CellPropsL(), [T.MapL()])))(),
    _$$CellProps$JsMapL: () => (T._$$CellProps$JsMapL = dart.constFn(dart.legacy(cell._$$CellProps$JsMap)))(),
    JsBackedMapLTo_$$CellProps$JsMapL: () => (T.JsBackedMapLTo_$$CellProps$JsMapL = dart.constFn(dart.fnType(T._$$CellProps$JsMapL(), [T.JsBackedMapL()])))(),
    JSArrayOfReactElementL: () => (T.JSArrayOfReactElementL = dart.constFn(_interceptors.JSArray$(dart.legacy(dart.anonymousJSType("ReactElement")))))(),
    MapOfStringL$StringL: () => (T.MapOfStringL$StringL = dart.constFn(core.Map$(T.StringL(), T.StringL())))(),
    MapLOfStringL$StringL: () => (T.MapLOfStringL$StringL = dart.constFn(dart.legacy(T.MapOfStringL$StringL())))(),
    ListOfMapLOfStringL$StringL: () => (T.ListOfMapLOfStringL$StringL = dart.constFn(core.List$(T.MapLOfStringL$StringL())))(),
    ListLOfMapLOfStringL$StringL: () => (T.ListLOfMapLOfStringL$StringL = dart.constFn(dart.legacy(T.ListOfMapLOfStringL$StringL())))(),
    ListOfListLOfMapLOfStringL$StringL: () => (T.ListOfListLOfMapLOfStringL$StringL = dart.constFn(core.List$(T.ListLOfMapLOfStringL$StringL())))(),
    IdentityMapOfStringL$StringL: () => (T.IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(T.StringL(), T.StringL())))(),
    intL: () => (T.intL = dart.constFn(dart.legacy(core.int)))(),
    intLToMapLOfStringL$StringL: () => (T.intLToMapLOfStringL$StringL = dart.constFn(dart.fnType(T.MapLOfStringL$StringL(), [T.intL()])))(),
    intLToListLOfMapLOfStringL$StringL: () => (T.intLToListLOfMapLOfStringL$StringL = dart.constFn(dart.fnType(T.ListLOfMapLOfStringL$StringL(), [T.intL()])))(),
    BoardPropsL: () => (T.BoardPropsL = dart.constFn(dart.legacy(board$.BoardProps)))(),
    numL: () => (T.numL = dart.constFn(dart.legacy(core.num)))(),
    BoardPropsLToReactElementL: () => (T.BoardPropsLToReactElementL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [T.BoardPropsL()])))(),
    JSArrayOfintL: () => (T.JSArrayOfintL = dart.constFn(_interceptors.JSArray$(T.intL())))(),
    _$$BoardPropsL: () => (T._$$BoardPropsL = dart.constFn(dart.legacy(board$._$$BoardProps)))(),
    UiFactoryConfigOf_$$BoardPropsL: () => (T.UiFactoryConfigOf_$$BoardPropsL = dart.constFn(function_component.UiFactoryConfig$(T._$$BoardPropsL())))(),
    PropsFactoryOf_$$BoardPropsL: () => (T.PropsFactoryOf_$$BoardPropsL = dart.constFn(function_component.PropsFactory$(T._$$BoardPropsL())))(),
    MapLTo_$$BoardPropsL: () => (T.MapLTo_$$BoardPropsL = dart.constFn(dart.fnType(T._$$BoardPropsL(), [T.MapL()])))(),
    _$$BoardProps$JsMapL: () => (T._$$BoardProps$JsMapL = dart.constFn(dart.legacy(board$._$$BoardProps$JsMap)))(),
    JsBackedMapLTo_$$BoardProps$JsMapL: () => (T.JsBackedMapLTo_$$BoardProps$JsMapL = dart.constFn(dart.fnType(T._$$BoardProps$JsMapL(), [T.JsBackedMapL()])))(),
    DifficultyLevelL: () => (T.DifficultyLevelL = dart.constFn(dart.legacy(game.DifficultyLevel)))(),
    VoidToDifficultyLevelL: () => (T.VoidToDifficultyLevelL = dart.constFn(dart.fnType(T.DifficultyLevelL(), [])))(),
    GameSettingsPropsL: () => (T.GameSettingsPropsL = dart.constFn(dart.legacy(game_settings.GameSettingsProps)))(),
    IdentityMapOfStringL$ObjectL: () => (T.IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(T.StringL(), T.ObjectL())))(),
    SyntheticFormEventLTovoid: () => (T.SyntheticFormEventLTovoid = dart.constFn(dart.fnType(dart.void, [dart.legacy(dart.lazyJSType(() => dart.global.SyntheticFormEvent, "SyntheticFormEvent"))])))(),
    GameSettingsPropsLToReactElementL: () => (T.GameSettingsPropsLToReactElementL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [T.GameSettingsPropsL()])))(),
    _$$GameSettingsPropsL: () => (T._$$GameSettingsPropsL = dart.constFn(dart.legacy(game_settings._$$GameSettingsProps)))(),
    UiFactoryConfigOf_$$GameSettingsPropsL: () => (T.UiFactoryConfigOf_$$GameSettingsPropsL = dart.constFn(function_component.UiFactoryConfig$(T._$$GameSettingsPropsL())))(),
    PropsFactoryOf_$$GameSettingsPropsL: () => (T.PropsFactoryOf_$$GameSettingsPropsL = dart.constFn(function_component.PropsFactory$(T._$$GameSettingsPropsL())))(),
    MapLTo_$$GameSettingsPropsL: () => (T.MapLTo_$$GameSettingsPropsL = dart.constFn(dart.fnType(T._$$GameSettingsPropsL(), [T.MapL()])))(),
    _$$GameSettingsProps$JsMapL: () => (T._$$GameSettingsProps$JsMapL = dart.constFn(dart.legacy(game_settings._$$GameSettingsProps$JsMap)))(),
    JsBackedMapLTo_$$GameSettingsProps$JsMapL: () => (T.JsBackedMapLTo_$$GameSettingsProps$JsMapL = dart.constFn(dart.fnType(T._$$GameSettingsProps$JsMapL(), [T.JsBackedMapL()])))(),
    GamePropsL: () => (T.GamePropsL = dart.constFn(dart.legacy(game.GameProps)))(),
    GamePropsLToReactElementL: () => (T.GamePropsLToReactElementL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [T.GamePropsL()])))(),
    _$$GamePropsL: () => (T._$$GamePropsL = dart.constFn(dart.legacy(game._$$GameProps)))(),
    UiFactoryConfigOf_$$GamePropsL: () => (T.UiFactoryConfigOf_$$GamePropsL = dart.constFn(function_component.UiFactoryConfig$(T._$$GamePropsL())))(),
    PropsFactoryOf_$$GamePropsL: () => (T.PropsFactoryOf_$$GamePropsL = dart.constFn(function_component.PropsFactory$(T._$$GamePropsL())))(),
    MapLTo_$$GamePropsL: () => (T.MapLTo_$$GamePropsL = dart.constFn(dart.fnType(T._$$GamePropsL(), [T.MapL()])))(),
    _$$GameProps$JsMapL: () => (T._$$GameProps$JsMapL = dart.constFn(dart.legacy(game._$$GameProps$JsMap)))(),
    JsBackedMapLTo_$$GameProps$JsMapL: () => (T.JsBackedMapLTo_$$GameProps$JsMapL = dart.constFn(dart.fnType(T._$$GameProps$JsMapL(), [T.JsBackedMapL()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.constList(["CellProps.value", "CellProps.adjacentBombs", "CellProps.isMine"], T.StringL());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: component_base.PropDescriptor.prototype,
        [PropDescriptor_errorMessage]: "",
        [PropDescriptor_isNullable]: false,
        [PropDescriptor_isRequired]: false,
        [PropDescriptor_key]: "CellProps.value"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: component_base.PropDescriptor.prototype,
        [PropDescriptor_errorMessage]: "",
        [PropDescriptor_isNullable]: false,
        [PropDescriptor_isRequired]: false,
        [PropDescriptor_key]: "CellProps.adjacentBombs"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: component_base.PropDescriptor.prototype,
        [PropDescriptor_errorMessage]: "",
        [PropDescriptor_isNullable]: false,
        [PropDescriptor_isRequired]: false,
        [PropDescriptor_key]: "CellProps.isMine"
      });
    },
    get C2() {
      return C[2] = dart.constList([C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5], T.PropDescriptorL());
    },
    get C0() {
      return C[0] = dart.const({
        __proto__: component_base.PropsMeta.prototype,
        [PropsMeta_keys]: C[1] || CT.C1,
        [PropsMeta_fields]: C[2] || CT.C2
      });
    },
    get C7() {
      return C[7] = dart.constMap(T.TypeL(), T.PropsMetaL(), [dart.wrapType(cell.CellProps), C[0] || CT.C0]);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: component_base.PropsMetaCollection.prototype,
        [_AccessorMetaCollection__metaByMixin]: C[7] || CT.C7
      });
    },
    get C9() {
      return C[9] = dart.constList([], T.StringL());
    },
    get C10() {
      return C[10] = dart.constList([], T.PropDescriptorL());
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: component_base.PropsMeta.prototype,
        [PropsMeta_keys]: C[9] || CT.C9,
        [PropsMeta_fields]: C[10] || CT.C10
      });
    },
    get C12() {
      return C[12] = dart.constMap(T.TypeL(), T.PropsMetaL(), [dart.wrapType(board$.BoardProps), C[8] || CT.C8]);
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: component_base.PropsMetaCollection.prototype,
        [_AccessorMetaCollection__metaByMixin]: C[12] || CT.C12
      });
    },
    get C14() {
      return C[14] = dart.constMap(T.TypeL(), T.PropsMetaL(), [dart.wrapType(game_settings.GameSettingsProps), C[8] || CT.C8]);
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: component_base.PropsMetaCollection.prototype,
        [_AccessorMetaCollection__metaByMixin]: C[14] || CT.C14
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: game.DifficultyLevel.prototype,
        [_name$]: "DifficultyLevel.easy",
        index: 0
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: game.DifficultyLevel.prototype,
        [_name$]: "DifficultyLevel.medium",
        index: 1
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: game.DifficultyLevel.prototype,
        [_name$]: "DifficultyLevel.hard",
        index: 2
      });
    },
    get C18() {
      return C[18] = dart.constList([C[15] || CT.C15, C[16] || CT.C16, C[17] || CT.C17], T.DifficultyLevelL());
    },
    get C20() {
      return C[20] = dart.constMap(T.TypeL(), T.PropsMetaL(), [dart.wrapType(game.GameProps), C[8] || CT.C8]);
    },
    get C19() {
      return C[19] = dart.const({
        __proto__: component_base.PropsMetaCollection.prototype,
        [_AccessorMetaCollection__metaByMixin]: C[20] || CT.C20
      });
    }
  }, false);
  var C = Array(21).fill(void 0);
  var I = [
    "org-dartlang-app:///web/cell.dart",
    "org-dartlang-app:///web/board.dart",
    "org-dartlang-app:///web/game_settings.dart",
    "org-dartlang-app:///web/game.dart"
  ];
  var value$ = dart.privateName(cell, "CellProps.value");
  var adjacentBombs = dart.privateName(cell, "CellProps.adjacentBombs");
  var isMine = dart.privateName(cell, "CellProps.isMine");
  cell.CellProps = class CellProps extends builder_helpers.UiProps {};
  cell.CellProps[dart.mixinOn] = UiProps => class CellProps extends UiProps {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
    get adjacentBombs() {
      return this[adjacentBombs];
    }
    set adjacentBombs(value) {
      this[adjacentBombs] = value;
    }
    get isMine() {
      return this[isMine];
    }
    set isMine(value) {
      this[isMine] = value;
    }
  };
  (cell.CellProps[dart.mixinNew] = function() {
    this[value$] = null;
    this[adjacentBombs] = null;
    this[isMine] = null;
  }).prototype = cell.CellProps.prototype;
  dart.addTypeTests(cell.CellProps);
  dart.addTypeCaches(cell.CellProps);
  cell.CellProps[dart.implements] = () => [builder_helpers.UiProps];
  dart.setLibraryUri(cell.CellProps, I[0]);
  dart.setFieldSignature(cell.CellProps, () => ({
    __proto__: dart.getFields(cell.CellProps.__proto__),
    value: dart.fieldType(dart.legacy(core.String)),
    adjacentBombs: dart.fieldType(dart.legacy(core.String)),
    isMine: dart.fieldType(dart.legacy(core.bool))
  }));
  var PropsMeta_keys = dart.privateName(component_base, "PropsMeta.keys");
  var PropDescriptor_errorMessage = dart.privateName(component_base, "PropDescriptor.errorMessage");
  var PropDescriptor_isNullable = dart.privateName(component_base, "PropDescriptor.isNullable");
  var PropDescriptor_isRequired = dart.privateName(component_base, "PropDescriptor.isRequired");
  var PropDescriptor_key = dart.privateName(component_base, "PropDescriptor.key");
  var PropsMeta_fields = dart.privateName(component_base, "PropsMeta.fields");
  cell.$CellProps = class $36CellProps extends cell.CellProps {};
  cell.$CellProps[dart.mixinOn] = CellProps => class $36CellProps extends CellProps {
    get value() {
      let t0;
      return T.StringL().as((t0 = this.props[$_get]("CellProps.value"), t0 == null ? null : t0));
    }
    set value(value) {
      let t2, t1, t0;
      t0 = this.props;
      t1 = "CellProps.value";
      t2 = value;
      t0[$_set](t1, t2);
      return t2;
    }
    get adjacentBombs() {
      let t0;
      return T.StringL().as((t0 = this.props[$_get]("CellProps.adjacentBombs"), t0 == null ? null : t0));
    }
    set adjacentBombs(value) {
      let t2, t1, t0;
      t0 = this.props;
      t1 = "CellProps.adjacentBombs";
      t2 = value;
      t0[$_set](t1, t2);
      return t2;
    }
    get isMine() {
      let t0;
      return T.boolL().as((t0 = this.props[$_get]("CellProps.isMine"), t0 == null ? null : t0));
    }
    set isMine(value) {
      let t2, t1, t0;
      t0 = this.props;
      t1 = "CellProps.isMine";
      t2 = value;
      t0[$_set](t1, t2);
      return t2;
    }
  };
  dart.addTypeTests(cell.$CellProps);
  dart.addTypeCaches(cell.$CellProps);
  cell.$CellProps[dart.implements] = () => [cell.CellProps];
  dart.setGetterSignature(cell.$CellProps, () => ({
    __proto__: dart.getGetters(cell.$CellProps.__proto__),
    value: dart.legacy(core.String),
    adjacentBombs: dart.legacy(core.String),
    isMine: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(cell.$CellProps, () => ({
    __proto__: dart.getSetters(cell.$CellProps.__proto__),
    value: dart.legacy(core.String),
    adjacentBombs: dart.legacy(core.String),
    isMine: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(cell.$CellProps, I[0]);
  dart.defineLazy(cell.$CellProps, {
    /*cell.$CellProps.meta*/get meta() {
      return C[0] || CT.C0;
    },
    /*cell.$CellProps._$prop__value__CellProps*/get _$prop__value__CellProps() {
      return C[3] || CT.C3;
    },
    /*cell.$CellProps._$prop__adjacentBombs__CellProps*/get _$prop__adjacentBombs__CellProps() {
      return C[4] || CT.C4;
    },
    /*cell.$CellProps._$prop__isMine__CellProps*/get _$prop__isMine__CellProps() {
      return C[5] || CT.C5;
    },
    /*cell.$CellProps._$key__value__CellProps*/get _$key__value__CellProps() {
      return "CellProps.value";
    },
    /*cell.$CellProps._$key__adjacentBombs__CellProps*/get _$key__adjacentBombs__CellProps() {
      return "CellProps.adjacentBombs";
    },
    /*cell.$CellProps._$key__isMine__CellProps*/get _$key__isMine__CellProps() {
      return "CellProps.isMine";
    },
    /*cell.$CellProps.$props*/get $props() {
      return C[2] || CT.C2;
    },
    /*cell.$CellProps.$propKeys*/get $propKeys() {
      return C[1] || CT.C1;
    }
  }, true);
  var _AccessorMetaCollection__metaByMixin = dart.privateName(component_base, "_AccessorMetaCollection._metaByMixin");
  const UiProps_CellProps$36 = class UiProps_CellProps extends builder_helpers.UiProps {};
  (UiProps_CellProps$36.new = function() {
    cell.CellProps[dart.mixinNew].call(this);
    UiProps_CellProps$36.__proto__.new.call(this);
  }).prototype = UiProps_CellProps$36.prototype;
  dart.applyMixin(UiProps_CellProps$36, cell.CellProps);
  const UiProps_$36CellProps$36 = class UiProps_$36CellProps extends UiProps_CellProps$36 {};
  (UiProps_$36CellProps$36.new = function() {
    UiProps_$36CellProps$36.__proto__.new.call(this);
  }).prototype = UiProps_$36CellProps$36.prototype;
  dart.applyMixin(UiProps_$36CellProps$36, cell.$CellProps);
  cell._$$CellProps = class _$36$36CellProps extends UiProps_$36CellProps$36 {
    static new(backingMap) {
      if (backingMap == null || T.JsBackedMapL().is(backingMap)) {
        return new cell._$$CellProps$JsMap.new(T.JsBackedMapL().as(backingMap));
      } else {
        return new cell._$$CellProps$PlainMap.new(backingMap);
      }
    }
    get $isClassGenerated() {
      return true;
    }
    get propKeyNamespace() {
      return "";
    }
    get staticMeta() {
      return C[6] || CT.C6;
    }
  };
  (cell._$$CellProps.__ = function() {
    cell._$$CellProps.__proto__.new.call(this);
    ;
  }).prototype = cell._$$CellProps.prototype;
  dart.addTypeTests(cell._$$CellProps);
  dart.addTypeCaches(cell._$$CellProps);
  dart.setLibraryUri(cell._$$CellProps, I[0]);
  var _props = dart.privateName(cell, "_props");
  cell._$$CellProps$PlainMap = class _$36$36CellProps$36PlainMap extends cell._$$CellProps {
    get props() {
      return this[_props];
    }
  };
  (cell._$$CellProps$PlainMap.new = function(backingMap) {
    let t0;
    this[_props] = new _js_helper.LinkedMap.new();
    cell._$$CellProps$PlainMap.__proto__.__.call(this);
    this[_props] = (t0 = backingMap, t0 == null ? new _js_helper.LinkedMap.new() : t0);
  }).prototype = cell._$$CellProps$PlainMap.prototype;
  dart.addTypeTests(cell._$$CellProps$PlainMap);
  dart.addTypeCaches(cell._$$CellProps$PlainMap);
  dart.setLibraryUri(cell._$$CellProps$PlainMap, I[0]);
  dart.setFieldSignature(cell._$$CellProps$PlainMap, () => ({
    __proto__: dart.getFields(cell._$$CellProps$PlainMap.__proto__),
    [_props]: dart.fieldType(dart.legacy(core.Map))
  }));
  cell._$$CellProps$JsMap = class _$36$36CellProps$36JsMap extends cell._$$CellProps {
    get props() {
      return this[_props];
    }
  };
  (cell._$$CellProps$JsMap.new = function(backingMap) {
    let t0;
    this[_props] = new js_backed_map.JsBackedMap.new();
    cell._$$CellProps$JsMap.__proto__.__.call(this);
    this[_props] = (t0 = backingMap, t0 == null ? new js_backed_map.JsBackedMap.new() : t0);
  }).prototype = cell._$$CellProps$JsMap.prototype;
  dart.addTypeTests(cell._$$CellProps$JsMap);
  dart.addTypeCaches(cell._$$CellProps$JsMap);
  dart.setGetterSignature(cell._$$CellProps$JsMap, () => ({
    __proto__: dart.getGetters(cell._$$CellProps$JsMap.__proto__),
    props: dart.legacy(js_backed_map.JsBackedMap)
  }));
  dart.setLibraryUri(cell._$$CellProps$JsMap, I[0]);
  dart.setFieldSignature(cell._$$CellProps$JsMap, () => ({
    __proto__: dart.getFields(cell._$$CellProps$JsMap.__proto__),
    [_props]: dart.fieldType(dart.legacy(js_backed_map.JsBackedMap))
  }));
  cell.isFlaggedValue = function isFlaggedValue(value) {
    return value === "⛳️";
  };
  dart.defineLazy(cell, {
    /*cell.Cell*/get Cell() {
      return function_component.uiFunction(T.CellPropsL(), dart.fn(props => {
        let t0;
        let isFlagged = hooks.useState(T.boolL(), false);
        let cellValue = hooks.useState(T.StringL(), props.value);
        function _handleFlaggedToggled() {
          if (dart.test(isFlagged.value)) {
            cellValue.set("⛳️");
          } else if (dart.test(cell.isFlaggedValue(cellValue.value)) && !dart.test(isFlagged.value)) {
            cellValue.set(props.value);
          }
        }
        dart.fn(_handleFlaggedToggled, T.VoidTovoid());
        hooks.useEffect(dart.fn(() => {
          _handleFlaggedToggled();
        }, T.VoidToNull()), T.JSArrayOfObjectL().of([isFlagged]));
        function _onRightClick(e) {
          isFlagged.setWithUpdater(dart.fn(oldValue => !dart.test(oldValue), T.boolLToboolL()));
          dart.dsend(e, 'preventDefault', []);
        }
        dart.fn(_onRightClick, T.dynamicTovoid());
        function _loseGame() {
          isFlagged.set(false);
          cellValue.set("💥");
        }
        dart.fn(_loseGame, T.VoidTovoid());
        function _onClick(e) {
          isFlagged.set(false);
          if (dart.test(props.isMine)) {
            _loseGame();
            dart.dsend(e, 'preventDefault', []);
          } else {
            cellValue.set(props.adjacentBombs);
          }
        }
        dart.fn(_onClick, T.dynamicTovoid());
        return (t0 = dom_components.Dom.button(), (() => {
          t0.className = "cell";
          t0.onClick = dart.fn(e => _onClick(e), T.SyntheticMouseEventLTovoid());
          t0.onContextMenu = dart.fn(e => _onRightClick(e), T.SyntheticMouseEventLTovoid());
          return t0;
        })()).call(cellValue.value);
      }, T.CellPropsLToReactElementL()), cell._$CellConfig);
    },
    set Cell(_) {},
    /*cell._$metaForCellProps*/get _$metaForCellProps() {
      return C[0] || CT.C0;
    },
    /*cell._$CellConfig*/get _$CellConfig() {
      return new (T.UiFactoryConfigOf_$$CellPropsL()).new({propsFactory: new (T.PropsFactoryOf_$$CellPropsL()).new({map: dart.fn(map => cell._$$CellProps.new(map), T.MapLTo_$$CellPropsL()), jsMap: dart.fn(map => new cell._$$CellProps$JsMap.new(map), T.JsBackedMapLTo_$$CellProps$JsMapL())}), displayName: "Cell"});
    },
    /*cell.$CellConfig*/get $CellConfig() {
      return cell._$CellConfig;
    }
  }, true);
  board$.BoardProps = class BoardProps extends builder_helpers.UiProps {};
  board$.BoardProps[dart.mixinOn] = UiProps => class BoardProps extends UiProps {};
  dart.addTypeTests(board$.BoardProps);
  dart.addTypeCaches(board$.BoardProps);
  board$.BoardProps[dart.implements] = () => [builder_helpers.UiProps];
  dart.setLibraryUri(board$.BoardProps, I[1]);
  board$.$BoardProps = class $36BoardProps extends board$.BoardProps {};
  board$.$BoardProps[dart.mixinOn] = BoardProps => class $36BoardProps extends BoardProps {};
  dart.addTypeTests(board$.$BoardProps);
  dart.addTypeCaches(board$.$BoardProps);
  board$.$BoardProps[dart.implements] = () => [board$.BoardProps];
  dart.setLibraryUri(board$.$BoardProps, I[1]);
  dart.defineLazy(board$.$BoardProps, {
    /*board$.$BoardProps.meta*/get meta() {
      return C[8] || CT.C8;
    },
    /*board$.$BoardProps.$props*/get $props() {
      return C[10] || CT.C10;
    },
    /*board$.$BoardProps.$propKeys*/get $propKeys() {
      return C[9] || CT.C9;
    }
  }, true);
  const UiProps_BoardProps$36 = class UiProps_BoardProps extends builder_helpers.UiProps {};
  (UiProps_BoardProps$36.new = function() {
    UiProps_BoardProps$36.__proto__.new.call(this);
  }).prototype = UiProps_BoardProps$36.prototype;
  dart.applyMixin(UiProps_BoardProps$36, board$.BoardProps);
  const UiProps_$36BoardProps$36 = class UiProps_$36BoardProps extends UiProps_BoardProps$36 {};
  (UiProps_$36BoardProps$36.new = function() {
    UiProps_$36BoardProps$36.__proto__.new.call(this);
  }).prototype = UiProps_$36BoardProps$36.prototype;
  dart.applyMixin(UiProps_$36BoardProps$36, board$.$BoardProps);
  board$._$$BoardProps = class _$36$36BoardProps extends UiProps_$36BoardProps$36 {
    static new(backingMap) {
      if (backingMap == null || T.JsBackedMapL().is(backingMap)) {
        return new board$._$$BoardProps$JsMap.new(T.JsBackedMapL().as(backingMap));
      } else {
        return new board$._$$BoardProps$PlainMap.new(backingMap);
      }
    }
    get $isClassGenerated() {
      return true;
    }
    get propKeyNamespace() {
      return "";
    }
    get staticMeta() {
      return C[11] || CT.C11;
    }
  };
  (board$._$$BoardProps.__ = function() {
    board$._$$BoardProps.__proto__.new.call(this);
    ;
  }).prototype = board$._$$BoardProps.prototype;
  dart.addTypeTests(board$._$$BoardProps);
  dart.addTypeCaches(board$._$$BoardProps);
  dart.setLibraryUri(board$._$$BoardProps, I[1]);
  var _props$ = dart.privateName(board$, "_props");
  board$._$$BoardProps$PlainMap = class _$36$36BoardProps$36PlainMap extends board$._$$BoardProps {
    get props() {
      return this[_props$];
    }
  };
  (board$._$$BoardProps$PlainMap.new = function(backingMap) {
    let t0;
    this[_props$] = new _js_helper.LinkedMap.new();
    board$._$$BoardProps$PlainMap.__proto__.__.call(this);
    this[_props$] = (t0 = backingMap, t0 == null ? new _js_helper.LinkedMap.new() : t0);
  }).prototype = board$._$$BoardProps$PlainMap.prototype;
  dart.addTypeTests(board$._$$BoardProps$PlainMap);
  dart.addTypeCaches(board$._$$BoardProps$PlainMap);
  dart.setLibraryUri(board$._$$BoardProps$PlainMap, I[1]);
  dart.setFieldSignature(board$._$$BoardProps$PlainMap, () => ({
    __proto__: dart.getFields(board$._$$BoardProps$PlainMap.__proto__),
    [_props$]: dart.fieldType(dart.legacy(core.Map))
  }));
  board$._$$BoardProps$JsMap = class _$36$36BoardProps$36JsMap extends board$._$$BoardProps {
    get props() {
      return this[_props$];
    }
  };
  (board$._$$BoardProps$JsMap.new = function(backingMap) {
    let t0;
    this[_props$] = new js_backed_map.JsBackedMap.new();
    board$._$$BoardProps$JsMap.__proto__.__.call(this);
    this[_props$] = (t0 = backingMap, t0 == null ? new js_backed_map.JsBackedMap.new() : t0);
  }).prototype = board$._$$BoardProps$JsMap.prototype;
  dart.addTypeTests(board$._$$BoardProps$JsMap);
  dart.addTypeCaches(board$._$$BoardProps$JsMap);
  dart.setGetterSignature(board$._$$BoardProps$JsMap, () => ({
    __proto__: dart.getGetters(board$._$$BoardProps$JsMap.__proto__),
    props: dart.legacy(js_backed_map.JsBackedMap)
  }));
  dart.setLibraryUri(board$._$$BoardProps$JsMap, I[1]);
  dart.setFieldSignature(board$._$$BoardProps$JsMap, () => ({
    __proto__: dart.getFields(board$._$$BoardProps$JsMap.__proto__),
    [_props$]: dart.fieldType(dart.legacy(js_backed_map.JsBackedMap))
  }));
  board$.isMine = function isMine$(cell) {
    return cell[$_get](board$.cellMineKey) === "true";
  };
  board$._getCells = function _getCells(board, row) {
    let t0;
    let cellList = T.JSArrayOfReactElementL().of([]);
    for (let col = 0; col < dart.notNull(board[$_get](row)[$length]); col = col + 1) {
      let currentCell = board[$_get](row)[$_get](col);
      let cellVal = currentCell[$_get](board$.cellValKey);
      let neighborCount = currentCell[$_get](board$.cellNeighborCountKey);
      cellList[$add]((t0 = cell.Cell(), (() => {
        t0.key = "row" + dart.str(row) + "-col" + dart.str(col);
        t0.className = "row" + dart.str(row) + "-col" + dart.str(col);
        t0.value = cellVal;
        t0.isMine = board$.isMine(currentCell);
        t0.adjacentBombs = neighborCount;
        return t0;
      })()).call());
    }
    return cellList;
  };
  board$._generateBoardContent = function _generateBoardContent(context) {
    let rowCount = null;
    let columnCount = null;
    if (dart.equals(dart.dsend(context, '_get', ["difficulty"]), game.DifficultyLevel.easy)) {
      rowCount = 9;
      columnCount = rowCount;
    } else if (dart.equals(dart.dsend(context, '_get', ["difficulty"]), game.DifficultyLevel.medium)) {
      rowCount = 16;
      columnCount = rowCount;
    } else if (dart.equals(dart.dsend(context, '_get', ["difficulty"]), game.DifficultyLevel.hard)) {
      rowCount = 16;
      columnCount = 30;
    }
    board$.boardSize = dart.notNull(rowCount) * dart.notNull(columnCount);
    let board = T.ListOfListLOfMapLOfStringL$StringL().generate(rowCount, dart.fn(_ => T.ListOfMapLOfStringL$StringL().generate(columnCount, dart.fn(_ => new (T.IdentityMapOfStringL$StringL()).from([board$.cellValKey, "🤷‍♀️", board$.cellMineKey, "false"]), T.intLToMapLOfStringL$StringL())), T.intLToListLOfMapLOfStringL$StringL()));
    board = board$._plantMines(T.intL().as(dart.dload(dart.dsend(context, '_get', ["bombCount"]), 'value')), board, rowCount, columnCount);
    return board$._countNeighboringMines(board);
  };
  board$._plantMines = function _plantMines(numBombs, board, rowCount, colCount) {
    let minesAdded = 0;
    while (minesAdded < dart.notNull(numBombs)) {
      let randomNumber = math.Random.new().nextInt(15);
      let randomX = math.Random.new().nextInt(dart.notNull(rowCount) - 1);
      let randomY = math.Random.new().nextInt(dart.notNull(colCount) - 1);
      if (dart.notNull(randomNumber) < 10 && !dart.test(board$.isMine(board[$_get](randomX)[$_get](randomY)))) {
        minesAdded = minesAdded + 1;
        board[$_get](randomX)[$_get](randomY)[$_set](board$.cellMineKey, "true");
      }
    }
    return board;
  };
  board$._countNeighboringMines = function _countNeighboringMines(board) {
    for (let i = 0; i < dart.notNull(board[$length]); i = i + 1) {
      for (let j = 0; j < dart.notNull(board[$_get](i)[$length]); j = j + 1) {
        if (dart.test(board$.isMine(board[$_get](i)[$_get](j)))) continue;
        board$._getMineCount(board, i, j);
      }
    }
    return board;
  };
  board$._getMineCount = function _getMineCount(board, row, col) {
    let bombCount = 0;
    for (let i = 0; i < 8; i = i + 1) {
      let x = dart.notNull(row) + dart.notNull(board$.xDirection[$_get](i));
      let y = dart.notNull(col) + dart.notNull(board$.yDirection[$_get](i));
      if (x < 0 || y < 0 || x >= dart.notNull(board[$length]) || y >= dart.notNull(board[$_get](0)[$length])) continue;
      let currentCell = board[$_get](x)[$_get](y);
      if (dart.test(board$.isMine(currentCell))) {
        bombCount = bombCount + 1;
      }
    }
    board[$_get](row)[$_get](col)[$_set](board$.cellNeighborCountKey, dart.str(bombCount));
    return board[$_get](row)[$_get](col);
  };
  dart.defineLazy(board$, {
    /*board$.boardSize*/get boardSize() {
      return 0;
    },
    set boardSize(_) {},
    /*board$.Board*/get Board() {
      return function_component.uiFunction(T.BoardPropsL(), dart.fn(props => {
        let t0, t0$;
        let context = hooks.useContext(T.MapL(), game_settings.GameContext);
        let board = board$._generateBoardContent(context);
        let numBombs = dart.dload(context[$_get]("bombCount"), 'value');
        let safeCellsRemaining = hooks.useState(T.numL(), dart.notNull(board$.boardSize) - dart.notNull(T.numL().as(numBombs)));
        hooks.useEffect(dart.fn(() => {
          safeCellsRemaining.set(dart.notNull(board$.boardSize) - dart.notNull(T.numL().as(numBombs)));
        }, T.VoidToNull()), T.JSArrayOfObjectL().of([numBombs]));
        let boardRows = [];
        for (let row = 0; row < dart.notNull(board[$length]); row = row + 1) {
          boardRows[$add]((t0 = dom_components.Dom.div(), (() => {
            t0.className = "row";
            t0.key = "row" + dart.str(row);
            return t0;
          })()).call(board$._getCells(board, row)));
        }
        return (t0$ = dom_components.Dom.div(), (() => {
          t0$.className = "board";
          return t0$;
        })()).call(boardRows);
      }, T.BoardPropsLToReactElementL()), board$._$BoardConfig);
    },
    set Board(_) {},
    /*board$.cellValKey*/get cellValKey() {
      return "cellValue";
    },
    /*board$.cellMineKey*/get cellMineKey() {
      return "isMine";
    },
    /*board$.cellNeighborCountKey*/get cellNeighborCountKey() {
      return "neighborCount";
    },
    /*board$.xDirection*/get xDirection() {
      return T.JSArrayOfintL().of([1, -1, 1, -1, 0, 0, 1, -1]);
    },
    set xDirection(_) {},
    /*board$.yDirection*/get yDirection() {
      return T.JSArrayOfintL().of([1, -1, -1, 1, 1, -1, 0, 0]);
    },
    set yDirection(_) {},
    /*board$._$metaForBoardProps*/get _$metaForBoardProps() {
      return C[8] || CT.C8;
    },
    /*board$._$BoardConfig*/get _$BoardConfig() {
      return new (T.UiFactoryConfigOf_$$BoardPropsL()).new({propsFactory: new (T.PropsFactoryOf_$$BoardPropsL()).new({map: dart.fn(map => board$._$$BoardProps.new(map), T.MapLTo_$$BoardPropsL()), jsMap: dart.fn(map => new board$._$$BoardProps$JsMap.new(map), T.JsBackedMapLTo_$$BoardProps$JsMapL())}), displayName: "Board"});
    },
    /*board$.$BoardConfig*/get $BoardConfig() {
      return board$._$BoardConfig;
    }
  }, true);
  game_settings.GameSettingsProps = class GameSettingsProps extends builder_helpers.UiProps {};
  game_settings.GameSettingsProps[dart.mixinOn] = UiProps => class GameSettingsProps extends UiProps {};
  dart.addTypeTests(game_settings.GameSettingsProps);
  dart.addTypeCaches(game_settings.GameSettingsProps);
  game_settings.GameSettingsProps[dart.implements] = () => [builder_helpers.UiProps];
  dart.setLibraryUri(game_settings.GameSettingsProps, I[2]);
  game_settings.$GameSettingsProps = class $36GameSettingsProps extends game_settings.GameSettingsProps {};
  game_settings.$GameSettingsProps[dart.mixinOn] = GameSettingsProps => class $36GameSettingsProps extends GameSettingsProps {};
  dart.addTypeTests(game_settings.$GameSettingsProps);
  dart.addTypeCaches(game_settings.$GameSettingsProps);
  game_settings.$GameSettingsProps[dart.implements] = () => [game_settings.GameSettingsProps];
  dart.setLibraryUri(game_settings.$GameSettingsProps, I[2]);
  dart.defineLazy(game_settings.$GameSettingsProps, {
    /*game_settings.$GameSettingsProps.meta*/get meta() {
      return C[8] || CT.C8;
    },
    /*game_settings.$GameSettingsProps.$props*/get $props() {
      return C[10] || CT.C10;
    },
    /*game_settings.$GameSettingsProps.$propKeys*/get $propKeys() {
      return C[9] || CT.C9;
    }
  }, true);
  const UiProps_GameSettingsProps$36 = class UiProps_GameSettingsProps extends builder_helpers.UiProps {};
  (UiProps_GameSettingsProps$36.new = function() {
    UiProps_GameSettingsProps$36.__proto__.new.call(this);
  }).prototype = UiProps_GameSettingsProps$36.prototype;
  dart.applyMixin(UiProps_GameSettingsProps$36, game_settings.GameSettingsProps);
  const UiProps_$36GameSettingsProps$36 = class UiProps_$36GameSettingsProps extends UiProps_GameSettingsProps$36 {};
  (UiProps_$36GameSettingsProps$36.new = function() {
    UiProps_$36GameSettingsProps$36.__proto__.new.call(this);
  }).prototype = UiProps_$36GameSettingsProps$36.prototype;
  dart.applyMixin(UiProps_$36GameSettingsProps$36, game_settings.$GameSettingsProps);
  game_settings._$$GameSettingsProps = class _$36$36GameSettingsProps extends UiProps_$36GameSettingsProps$36 {
    static new(backingMap) {
      if (backingMap == null || T.JsBackedMapL().is(backingMap)) {
        return new game_settings._$$GameSettingsProps$JsMap.new(T.JsBackedMapL().as(backingMap));
      } else {
        return new game_settings._$$GameSettingsProps$PlainMap.new(backingMap);
      }
    }
    get $isClassGenerated() {
      return true;
    }
    get propKeyNamespace() {
      return "";
    }
    get staticMeta() {
      return C[13] || CT.C13;
    }
  };
  (game_settings._$$GameSettingsProps.__ = function() {
    game_settings._$$GameSettingsProps.__proto__.new.call(this);
    ;
  }).prototype = game_settings._$$GameSettingsProps.prototype;
  dart.addTypeTests(game_settings._$$GameSettingsProps);
  dart.addTypeCaches(game_settings._$$GameSettingsProps);
  dart.setLibraryUri(game_settings._$$GameSettingsProps, I[2]);
  var _props$0 = dart.privateName(game_settings, "_props");
  game_settings._$$GameSettingsProps$PlainMap = class _$36$36GameSettingsProps$36PlainMap extends game_settings._$$GameSettingsProps {
    get props() {
      return this[_props$0];
    }
  };
  (game_settings._$$GameSettingsProps$PlainMap.new = function(backingMap) {
    let t0;
    this[_props$0] = new _js_helper.LinkedMap.new();
    game_settings._$$GameSettingsProps$PlainMap.__proto__.__.call(this);
    this[_props$0] = (t0 = backingMap, t0 == null ? new _js_helper.LinkedMap.new() : t0);
  }).prototype = game_settings._$$GameSettingsProps$PlainMap.prototype;
  dart.addTypeTests(game_settings._$$GameSettingsProps$PlainMap);
  dart.addTypeCaches(game_settings._$$GameSettingsProps$PlainMap);
  dart.setLibraryUri(game_settings._$$GameSettingsProps$PlainMap, I[2]);
  dart.setFieldSignature(game_settings._$$GameSettingsProps$PlainMap, () => ({
    __proto__: dart.getFields(game_settings._$$GameSettingsProps$PlainMap.__proto__),
    [_props$0]: dart.fieldType(dart.legacy(core.Map))
  }));
  game_settings._$$GameSettingsProps$JsMap = class _$36$36GameSettingsProps$36JsMap extends game_settings._$$GameSettingsProps {
    get props() {
      return this[_props$0];
    }
  };
  (game_settings._$$GameSettingsProps$JsMap.new = function(backingMap) {
    let t0;
    this[_props$0] = new js_backed_map.JsBackedMap.new();
    game_settings._$$GameSettingsProps$JsMap.__proto__.__.call(this);
    this[_props$0] = (t0 = backingMap, t0 == null ? new js_backed_map.JsBackedMap.new() : t0);
  }).prototype = game_settings._$$GameSettingsProps$JsMap.prototype;
  dart.addTypeTests(game_settings._$$GameSettingsProps$JsMap);
  dart.addTypeCaches(game_settings._$$GameSettingsProps$JsMap);
  dart.setGetterSignature(game_settings._$$GameSettingsProps$JsMap, () => ({
    __proto__: dart.getGetters(game_settings._$$GameSettingsProps$JsMap.__proto__),
    props: dart.legacy(js_backed_map.JsBackedMap)
  }));
  dart.setLibraryUri(game_settings._$$GameSettingsProps$JsMap, I[2]);
  dart.setFieldSignature(game_settings._$$GameSettingsProps$JsMap, () => ({
    __proto__: dart.getFields(game_settings._$$GameSettingsProps$JsMap.__proto__),
    [_props$0]: dart.fieldType(dart.legacy(js_backed_map.JsBackedMap))
  }));
  game_settings['EnumParsing|parseFromString'] = function EnumParsing$124parseFromString($this) {
    if ($this === "Easy") {
      return game.DifficultyLevel.easy;
    }
    if ($this === "Medium") {
      return game.DifficultyLevel.medium;
    }
    if ($this === "Difficult") {
      return game.DifficultyLevel.hard;
    }
    dart.throw(dart.wrapType(core.UnimplementedError));
  };
  game_settings['EnumParsing|get#parseFromString'] = function EnumParsing$124get$35parseFromString($this) {
    return dart.fn(() => game_settings['EnumParsing|parseFromString']($this), T.VoidToDifficultyLevelL());
  };
  game_settings._getDifficultyOptions = function _getDifficultyOptions() {
    let t2, t2$, t2$0;
    return fragment_component.Fragment().call((t2 = dom_components.Dom.option(), (() => {
      t2.value = "Easy";
      t2.key = "Easy";
      return t2;
    })()).call("🙂"), (t2$ = dom_components.Dom.option(), (() => {
      t2$.value = "Medium";
      t2$.key = "Medium";
      return t2$;
    })()).call("🤨"), (t2$0 = dom_components.Dom.option(), (() => {
      t2$0.value = "Difficult";
      t2$0.key = "Difficult";
      return t2$0;
    })()).call("🤬"));
  };
  game_settings._showBombCount = function _showBombCount(numBombs) {
    let t2;
    return (t2 = dom_components.Dom.span(), (() => {
      t2.className = "game-settings__bombs";
      return t2;
    })()).call("💣 " + dart.str(numBombs));
  };
  game_settings._getBombCount = function _getBombCount(level) {
    if (level == game.DifficultyLevel.easy) {
      return 10;
    } else if (level == game.DifficultyLevel.medium) {
      return 40;
    } else if (level == game.DifficultyLevel.hard) {
      return 99;
    }
    return 0;
  };
  dart.defineLazy(game_settings, {
    /*game_settings.difficultyKey*/get difficultyKey() {
      return "difficulty";
    },
    /*game_settings.bombCountKey*/get bombCountKey() {
      return "bombCount";
    },
    /*game_settings.GameContext*/get GameContext() {
      return context.createContext(T.MapL(), new _js_helper.LinkedMap.from(["difficulty", game.DifficultyLevel.easy, "bombCount", 0]));
    },
    /*game_settings.GameSettings*/get GameSettings() {
      return function_component.uiFunction(T.GameSettingsPropsL(), dart.fn(props => {
        let t2, t2$, t2$0, t2$1, t2$2;
        let level = hooks.useState(T.DifficultyLevelL(), game.DifficultyLevel.easy);
        let numBombs = hooks.useState(T.intL(), game_settings._getBombCount(level.value));
        hooks.useEffect(dart.fn(() => {
          numBombs.set(game_settings._getBombCount(level.value));
        }, T.VoidToNull()), T.JSArrayOfObjectL().of([level.value]));
        let providerMap = new (T.IdentityMapOfStringL$ObjectL()).from(["difficulty", level.value, "bombCount", numBombs]);
        function _changeDifficulty(event) {
          let value = T.StringL().as(dart.dload(dart.dload(event, 'target'), 'value'));
          let difficultyLevel = game_settings['EnumParsing|parseFromString'](value);
          level.set(difficultyLevel);
        }
        dart.fn(_changeDifficulty, T.dynamicTovoid());
        function _resetGame() {
        }
        dart.fn(_resetGame, T.VoidTovoid());
        return (t2 = dom_components.Dom.div(), (() => {
          t2.className = "game-settings";
          return t2;
        })()).call((t2$ = dom_components.Dom.label(), (() => {
          t2$.className = "game-settings__difficulty";
          return t2$;
        })()).call("Difficulty"), (t2$0 = dom_components.Dom.select(), (() => {
          t2$0.name = "difficulty";
          t2$0.onChange = dart.fn(e => _changeDifficulty(e), T.SyntheticFormEventLTovoid());
          return t2$0;
        })()).call(game_settings._getDifficultyOptions()), (t2$1 = dom_components.Dom.button(), (() => {
          t2$1.className = "game-settings__reset";
          t2$1.onClick = dart.fn(_ => _resetGame(), T.SyntheticMouseEventLTovoid());
          return t2$1;
        })()).call("😋"), game_settings._showBombCount(numBombs.value), (t2$2 = game_settings.GameContext.Provider(), (() => {
          t2$2.value = providerMap;
          return t2$2;
        })()).call(props.children));
      }, T.GameSettingsPropsLToReactElementL()), game_settings._$GameSettingsConfig);
    },
    set GameSettings(_) {},
    /*game_settings._$metaForGameSettingsProps*/get _$metaForGameSettingsProps() {
      return C[8] || CT.C8;
    },
    /*game_settings._$GameSettingsConfig*/get _$GameSettingsConfig() {
      return new (T.UiFactoryConfigOf_$$GameSettingsPropsL()).new({propsFactory: new (T.PropsFactoryOf_$$GameSettingsPropsL()).new({map: dart.fn(map => game_settings._$$GameSettingsProps.new(map), T.MapLTo_$$GameSettingsPropsL()), jsMap: dart.fn(map => new game_settings._$$GameSettingsProps$JsMap.new(map), T.JsBackedMapLTo_$$GameSettingsProps$JsMapL())}), displayName: "GameSettings"});
    },
    /*game_settings.$GameSettingsConfig*/get $GameSettingsConfig() {
      return game_settings._$GameSettingsConfig;
    }
  }, true);
  var _name$ = dart.privateName(game, "_name");
  game.DifficultyLevel = class DifficultyLevel extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (game.DifficultyLevel.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = game.DifficultyLevel.prototype;
  dart.addTypeTests(game.DifficultyLevel);
  dart.addTypeCaches(game.DifficultyLevel);
  dart.setMethodSignature(game.DifficultyLevel, () => ({
    __proto__: dart.getMethods(game.DifficultyLevel.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(game.DifficultyLevel, I[3]);
  dart.setFieldSignature(game.DifficultyLevel, () => ({
    __proto__: dart.getFields(game.DifficultyLevel.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(game.DifficultyLevel, ['toString']);
  game.DifficultyLevel.easy = C[15] || CT.C15;
  game.DifficultyLevel.medium = C[16] || CT.C16;
  game.DifficultyLevel.hard = C[17] || CT.C17;
  game.DifficultyLevel.values = C[18] || CT.C18;
  game.GameProps = class GameProps extends builder_helpers.UiProps {};
  game.GameProps[dart.mixinOn] = UiProps => class GameProps extends UiProps {};
  dart.addTypeTests(game.GameProps);
  dart.addTypeCaches(game.GameProps);
  game.GameProps[dart.implements] = () => [builder_helpers.UiProps];
  dart.setLibraryUri(game.GameProps, I[3]);
  game.$GameProps = class $36GameProps extends game.GameProps {};
  game.$GameProps[dart.mixinOn] = GameProps => class $36GameProps extends GameProps {};
  dart.addTypeTests(game.$GameProps);
  dart.addTypeCaches(game.$GameProps);
  game.$GameProps[dart.implements] = () => [game.GameProps];
  dart.setLibraryUri(game.$GameProps, I[3]);
  dart.defineLazy(game.$GameProps, {
    /*game.$GameProps.meta*/get meta() {
      return C[8] || CT.C8;
    },
    /*game.$GameProps.$props*/get $props() {
      return C[10] || CT.C10;
    },
    /*game.$GameProps.$propKeys*/get $propKeys() {
      return C[9] || CT.C9;
    }
  }, true);
  const UiProps_GameProps$36 = class UiProps_GameProps extends builder_helpers.UiProps {};
  (UiProps_GameProps$36.new = function() {
    UiProps_GameProps$36.__proto__.new.call(this);
  }).prototype = UiProps_GameProps$36.prototype;
  dart.applyMixin(UiProps_GameProps$36, game.GameProps);
  const UiProps_$36GameProps$36 = class UiProps_$36GameProps extends UiProps_GameProps$36 {};
  (UiProps_$36GameProps$36.new = function() {
    UiProps_$36GameProps$36.__proto__.new.call(this);
  }).prototype = UiProps_$36GameProps$36.prototype;
  dart.applyMixin(UiProps_$36GameProps$36, game.$GameProps);
  game._$$GameProps = class _$36$36GameProps extends UiProps_$36GameProps$36 {
    static new(backingMap) {
      if (backingMap == null || T.JsBackedMapL().is(backingMap)) {
        return new game._$$GameProps$JsMap.new(T.JsBackedMapL().as(backingMap));
      } else {
        return new game._$$GameProps$PlainMap.new(backingMap);
      }
    }
    get $isClassGenerated() {
      return true;
    }
    get propKeyNamespace() {
      return "";
    }
    get staticMeta() {
      return C[19] || CT.C19;
    }
  };
  (game._$$GameProps.__ = function() {
    game._$$GameProps.__proto__.new.call(this);
    ;
  }).prototype = game._$$GameProps.prototype;
  dart.addTypeTests(game._$$GameProps);
  dart.addTypeCaches(game._$$GameProps);
  dart.setLibraryUri(game._$$GameProps, I[3]);
  var _props$1 = dart.privateName(game, "_props");
  game._$$GameProps$PlainMap = class _$36$36GameProps$36PlainMap extends game._$$GameProps {
    get props() {
      return this[_props$1];
    }
  };
  (game._$$GameProps$PlainMap.new = function(backingMap) {
    let t2;
    this[_props$1] = new _js_helper.LinkedMap.new();
    game._$$GameProps$PlainMap.__proto__.__.call(this);
    this[_props$1] = (t2 = backingMap, t2 == null ? new _js_helper.LinkedMap.new() : t2);
  }).prototype = game._$$GameProps$PlainMap.prototype;
  dart.addTypeTests(game._$$GameProps$PlainMap);
  dart.addTypeCaches(game._$$GameProps$PlainMap);
  dart.setLibraryUri(game._$$GameProps$PlainMap, I[3]);
  dart.setFieldSignature(game._$$GameProps$PlainMap, () => ({
    __proto__: dart.getFields(game._$$GameProps$PlainMap.__proto__),
    [_props$1]: dart.fieldType(dart.legacy(core.Map))
  }));
  game._$$GameProps$JsMap = class _$36$36GameProps$36JsMap extends game._$$GameProps {
    get props() {
      return this[_props$1];
    }
  };
  (game._$$GameProps$JsMap.new = function(backingMap) {
    let t2;
    this[_props$1] = new js_backed_map.JsBackedMap.new();
    game._$$GameProps$JsMap.__proto__.__.call(this);
    this[_props$1] = (t2 = backingMap, t2 == null ? new js_backed_map.JsBackedMap.new() : t2);
  }).prototype = game._$$GameProps$JsMap.prototype;
  dart.addTypeTests(game._$$GameProps$JsMap);
  dart.addTypeCaches(game._$$GameProps$JsMap);
  dart.setGetterSignature(game._$$GameProps$JsMap, () => ({
    __proto__: dart.getGetters(game._$$GameProps$JsMap.__proto__),
    props: dart.legacy(js_backed_map.JsBackedMap)
  }));
  dart.setLibraryUri(game._$$GameProps$JsMap, I[3]);
  dart.setFieldSignature(game._$$GameProps$JsMap, () => ({
    __proto__: dart.getFields(game._$$GameProps$JsMap.__proto__),
    [_props$1]: dart.fieldType(dart.legacy(js_backed_map.JsBackedMap))
  }));
  dart.defineLazy(game, {
    /*game.Game*/get Game() {
      return function_component.uiFunction(T.GamePropsL(), dart.fn(props => {
        let t2;
        return (t2 = dom_components.Dom.div(), (() => {
          t2.className = "game";
          return t2;
        })()).call(game_settings.GameSettings().call(board$.Board().call()));
      }, T.GamePropsLToReactElementL()), game._$GameConfig);
    },
    set Game(_) {},
    /*game._$metaForGameProps*/get _$metaForGameProps() {
      return C[8] || CT.C8;
    },
    /*game._$GameConfig*/get _$GameConfig() {
      return new (T.UiFactoryConfigOf_$$GamePropsL()).new({propsFactory: new (T.PropsFactoryOf_$$GamePropsL()).new({map: dart.fn(map => game._$$GameProps.new(map), T.MapLTo_$$GamePropsL()), jsMap: dart.fn(map => new game._$$GameProps$JsMap.new(map), T.JsBackedMapLTo_$$GameProps$JsMapL())}), displayName: "Game"});
    },
    /*game.$GameConfig*/get $GameConfig() {
      return game._$GameConfig;
    }
  }, true);
  main.main = function main$() {
    react_dom.render(game.Game().call(), html.querySelector("#react_mount_point"));
  };
  dart.trackLibraries("web/board", {
    "org-dartlang-app:///web/cell.dart": cell,
    "org-dartlang-app:///web/board.dart": board$,
    "org-dartlang-app:///web/game_settings.dart": game_settings,
    "org-dartlang-app:///web/game.dart": game,
    "org-dartlang-app:///web/main.dart": main
  }, {
    "org-dartlang-app:///web/cell.dart": ["cell.over_react.g.dart"],
    "org-dartlang-app:///web/board.dart": ["board.over_react.g.dart"],
    "org-dartlang-app:///web/game_settings.dart": ["game_settings.over_react.g.dart"],
    "org-dartlang-app:///web/game.dart": ["game.over_react.g.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["cell.dart","cell.over_react.g.dart","board.over_react.g.dart","board.dart","game_settings.over_react.g.dart","game_settings.dart","game.dart","game.over_react.g.dart","main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IAAO;;;;;;IACT;;;;;;;;IADE;IAAO;IACT;;;;;;;;;;;;;;;;;;;;;;ACWe,YAAyC,iBAAT,KAA/B,AAAK,sCAAA,aAA6B;IAAe;cAErD;;AAAU;;WAAiC,KAAK;MAAjC;;IAAiC;;;AAG7D,YAAiD,iBAAT,KAAvC,AAAK,8CAAA,aAAqC;IAAe;sBAErC;;AACrB;;WAAyC,KAAK;MAAzC;;IAAyC;;;AAE/B,YAA0C,eAAT,KAAhC,AAAK,uCAAA,aAA8B;IAAa;eAEpD;;AAAU;;WAAkC,KAAK;MAAlC;;IAAkC;;;;;;;;;;;;;;;;;;;MAd1C,oBAAI;;;MAgBC,wCAAwB;;;MAExB,gDAAgC;;;MAEhC,yCAAyB;;;MAEjC,uCAAuB;;;MACvB,+CAA+B;;;MAE/B,wCAAwB;;;MAEV,sBAAM;;;MAKd,yBAAS;;;;;;;;;;;;;;;;;eAsCV;AACvB,UAAI,AAAW,UAAD,YAAuB,oBAAX,UAAU;AAClC,cAAO,iCAA8B,oBAAX,UAAU;;AAEpC,cAAO,oCAAsB,UAAU;;IAE3C;;AAI8B;IAAI;;AAIH;IAAE;;AAGK;IAGhC;;;AAtBN;;EAAgB;;;;;;;AAuCC;IAAM;;6CARG;;IACR,eAAE;AACR;AACoB,IAAzB,gBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;AAuByB;IAAM;;0CARA;;IACb,eAAE;AACR;AAC+B,IAApC,gBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;;;gDDhIyB;AAC1B,UAAO,AAAM,MAAD,KAAI;EACjB;;MAEqB,SAAI;YAAG,+CAC1B,QAAC;;AACO,wBAAY,0BAAS;AACrB,wBAAY,4BAAS,AAAM,KAAD;AAEhC,iBAAK;AACH,wBAAI,AAAU,SAAD;AACQ,YAAnB,AAAU,SAAD,KAAK;gBACT,eAAI,oBAAe,AAAU,SAAD,uBAAY,AAAU,SAAD;AAC5B,YAA1B,AAAU,SAAD,KAAK,AAAM,KAAD;;;;AAMR,QAFf,gBAAU;AACe,UAAvB,qBAAqB;4BACpB,yBAAC,SAAS;AAEb,iBAAK,cAAc;AACgC,UAAjD,AAAU,SAAD,gBAAgB,QAAC,YAAa,WAAC,QAAQ;AAC9B,UAAhB,WAAF,CAAC;;;AAGH,iBAAK;AACiB,UAApB,AAAU,SAAD,KAAK;AACK,UAAnB,AAAU,SAAD,KAAK;;;AAGhB,iBAAK,SAAS;AACQ,UAApB,AAAU,SAAD,KAAK;AACd,wBAAI,AAAM,KAAD;AACI,YAAX,SAAS;AACS,YAAhB,WAAF,CAAC;;AAEiC,YAAlC,AAAU,SAAD,KAAK,AAAM,KAAD;;;;AAIvB,cAKG,oCAJG;AACA,yBAAY;AACZ,uBAAW,QAAC,KAAM,QAAQ,CAAC,CAAC;AAC5B,6BAAiB,QAAC,KAAM,aAAa,CAAC,CAAC;;mBACzC,AAAU,SAAD;yCAGf;;;MCFc,uBAAkB;;;MAKE,iBAAY;YAAG,6DACjC,gDACP,QAAC,OAAQ,sBAAa,GAAG,oCACvB,QAAC,OAAQ,gCAAmB,GAAG,0DAE3B;;MAKmB,gBAAW;YAAG;;;;;;;;;;;;;;;;MCxDzB,uBAAI;;;MAGO,yBAAM;;;MACd,4BAAS;;;;;;;;;;;;;;;eAkCT;AACxB,UAAI,AAAW,UAAD,YAAuB,oBAAX,UAAU;AAClC,cAAO,oCAA+B,oBAAX,UAAU;;AAErC,cAAO,uCAAuB,UAAU;;IAE5C;;AAI8B;IAAI;;AAIH;IAAE;;AAGK;IAGhC;;;AAtBN;;EAAiB;;;;;;;AAuCA;IAAM;;gDARI;;IACT,gBAAE;AACR;AACoB,IAAzB,iBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;AAuByB;IAAM;;6CARC;;IACd,gBAAE;AACR;AAC+B,IAApC,iBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;;;mCC3D8B;AAC9B,UAAO,AAAI,AAAc,KAAd,QAAC,wBAAgB;EAC9B;wCAG+C,OAAW;;AAClD,mBAAyB;AAC7B,aAAS,MAAM,GAAG,AAAI,GAAD,gBAAG,AAAK,AAAM,KAAN,QAAC,GAAG,aAAU,MAAA,AAAG,GAAA;AACtC,wBAAc,AAAK,AAAK,KAAL,QAAC,GAAG,SAAE,GAAG;AAC5B,oBAAU,AAAW,WAAA,QAAC;AACtB,0BAAgB,AAAW,WAAA,QAAC;AAUjC,MARD,AAAS,QAAD,OAOL,MANA,AAAI,aAAA;AACD,iBAAM,AACR,iBADa,GAAG,sBAAK,GAAG;AACtB,uBAAW,AACb,iBADkB,GAAG,sBAAK,GAAG;AAC3B,mBAAQ,OAAO;AACf,oBAAS,cAAO,WAAW;AAC3B,2BAAgB,aAAa;;;;AAIvC,UAAO,SAAQ;EACjB;gEAGsD;AAChD;AAAU;AACd,QAA2B,YAAhB,WAAP,OAAO,2BAAmC;AAChC,MAAZ,WAAW;AACW,MAAtB,cAAc,QAAQ;UACjB,KAA2B,YAAhB,WAAP,OAAO,2BAAmC;AACtC,MAAb,WAAW;AACW,MAAtB,cAAc,QAAQ;UACjB,KAA2B,YAAhB,WAAP,OAAO,2BAAmC;AACtC,MAAb,WAAW;AACK,MAAhB,cAAc;;AAEkB,IAAlC,mBAAqB,aAAT,QAAQ,iBAAG,WAAW;AAE9B,gBAAa,gDAAS,QAAQ,EAAE,QAAC,KAAW,yCAAS,WAAW,EAAE,QAAC,KAAM,6CAAC,mBAAY,QAAS,oBAAa;AAClC,IAA9E,QAAQ,+BAAkC,WAAf,WAAP,OAAO,qCAAsB,KAAK,EAAE,QAAQ,EAAE,WAAW;AAC7E,UAAO,+BAAuB,KAAK;EACrC;4CAGgD,UAA0C,OAAW,UAAc;AAC7G,qBAAa;AAEjB,WAAM,AAAW,UAAD,gBAAG,QAAQ;AACnB,yBAAe,AAAS,0BAAQ;AAChC,oBAAU,AAAS,0BAAgB,aAAR,QAAQ,IAAC;AAAI,oBAAU,AAAS,0BAAgB,aAAR,QAAQ,IAAC;AAClF,UAAiB,aAAb,YAAY,IAAG,iBAAO,cAAO,AAAK,AAAS,KAAT,QAAC,OAAO,SAAE,OAAO;AACzC,QAAZ,aAAA,AAAU,UAAA;AACmC,QAA7C,AAAK,AAAS,AAAS,KAAlB,QAAC,OAAO,SAAE,OAAO,SAAE,oBAAe;;;AAI3C,UAAO,MAAK;EACd;kEAGuF;AACnF,aAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAM,KAAD,YAAS,IAAA,AAAC,CAAA;AACjC,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAK,AAAI,KAAJ,QAAC,CAAC,aAAU,IAAA,AAAC,CAAA;AACpC,sBAAI,cAAO,AAAK,AAAG,KAAH,QAAC,CAAC,SAAE,CAAC,KAAI;AAEC,QAA1B,qBAAc,KAAK,EAAE,CAAC,EAAE,CAAC;;;AAI/B,UAAO,MAAK;EACd;gDAMkE,OAAW,KAAS;AAwB9E,oBAAY;AAEhB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AAChB,cAAQ,aAAJ,GAAG,iBAAG,AAAU,yBAAC,CAAC;AACtB,cAAQ,aAAJ,GAAG,iBAAG,AAAU,yBAAC,CAAC;AAC5B,UAAG,AAAE,CAAD,GAAG,KAAK,AAAE,CAAD,GAAG,KAAK,AAAE,CAAD,iBAAI,AAAM,KAAD,cAAW,AAAE,CAAD,iBAAI,AAAK,AAAI,KAAJ,QAAC,cAAW;AAC1D,wBAAc,AAAK,AAAG,KAAH,QAAC,CAAC,SAAE,CAAC;AAE9B,oBAAI,cAAO,WAAW;AACT,QAAX,YAAA,AAAS,SAAA;;;AAIuC,IAApD,AAAK,AAAK,AAAK,KAAV,QAAC,GAAG,SAAE,GAAG,SAAE,6BAAoC,SAAV,SAAS;AACnD,UAAO,AAAK,AAAK,MAAL,QAAC,GAAG,SAAE,GAAG;EACzB;;MAtJI,gBAAS;YAAG;;;MACM,YAAK;YAAG,gDAC5B,QAAC;;AACO,sBAAU,2BAAW;AACrB,oBAAQ,6BAAsB,OAAO;AAErC,uBAAiC,WAAtB,AAAO,OAAA;AAClB,iCAAqB,yBAAmB,aAAV,6CAAY,QAAQ;AAG1C,QAFd,gBAAU;AACoC,UAA5C,AAAmB,kBAAD,KAAe,aAAV,6CAAY,QAAQ;4BAC1C,yBAAC,QAAQ;AAGN,wBAAY;AAClB,iBAAS,MAAM,GAAG,AAAI,GAAD,gBAAG,AAAM,KAAD,YAAS,MAAA,AAAG,GAAA;AAMtC,UALD,AAAU,SAAD,OAIN,gCAHI;AACD,2BAAY;AACZ,qBAAI,AACR,iBADa,GAAG;;qBACd,iBAAU,KAAK,EAAE,GAAG;;AAI1B,cAAuC,kCAA3B;AAAO,0BAAY;;mBAAS,SAAS;0CAGnD;;;MAGI,iBAAU;YAAG;;MACb,kBAAW;YAAG;;MACd,2BAAoB;YAAG;;MA4EnB,iBAAU;YAAG,uBAAC,GAAG,CAAC,GAAG,GAAG,CAAC,GAAG,GAAG,GAAG,GAAG,CAAC;;;MACtC,iBAAU;YAAG,uBAAC,GAAG,CAAC,GAAG,CAAC,GAAG,GAAG,GAAG,CAAC,GAAG,GAAG;;;MDjGhC,0BAAmB;;;MAKE,oBAAa;YAAG,8DACnC,iDACP,QAAC,OAAQ,yBAAc,GAAG,qCACxB,QAAC,OAAQ,mCAAoB,GAAG,2DAE5B;;MAKoB,mBAAY;YAAG;;;;;;;;;;;;;;;;MExB3B,qCAAI;;;MAGO,uCAAM;;;MACd,0CAAS;;;;;;;;;;;;;;;eAoCF;AAC/B,UAAI,AAAW,UAAD,YAAuB,oBAAX,UAAU;AAClC,cAAO,kDAAsC,oBAAX,UAAU;;AAE5C,cAAO,qDAA8B,UAAU;;IAEnD;;AAI8B;IAAI;;AAIH;IAAE;;AAGK;IAGhC;;;AAtBN;;EAAwB;;;;;;;AAuCP;IAAM;;8DARW;;IAChB,iBAAE;AACR;AACoB,IAAzB,kBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;AAuByB;IAAM;;2DARQ;;IACrB,iBAAE;AACR;AAC+B,IAApC,kBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;;;;AC/FE,QAAS,UAAG;AACV,YAAuB;;AAEzB,QAAS,UAAG;AACV,YAAuB;;AAEzB,QAAS,UAAG;AACV,YAAuB;;AAGD,IAAxB;EACF;;AAZgB;EAYhB;;;AA2DE,UAAO,AAAU,oCAIZ,mCAHI;AACD,iBAAQ;AACR,eAAM;;eACR,MAID,oCAHI;AACD,kBAAQ;AACR,gBAAM;;eACR,MAID,qCAHI;AACD,mBAAQ;AACR,iBAAM;;eACR;EAEV;yDAEgC;;AAC9B,UAEO,kCAFK;AACF,qBAAY;;eACd,AAAc,gBAAT,QAAQ;EACvB;uDAEkC;AAChC,QAAI,AAAM,KAAD,IAAoB;AAC3B,YAAO;UACF,KAAI,AAAM,KAAD,IAAoB;AAClC,YAAO;UACF,KAAI,AAAM,KAAD,IAAoB;AAClC,YAAO;;AAET,UAAO;EACT;;MA1GM,2BAAa;;;MACb,0BAAY;;;MAkBZ,yBAAW;YAAG,iCAAmB,6CAAgC,wCAAoB;;MAI9D,0BAAY;YAAG,uDAC1C,QAAC;;AACO,oBAAQ,qCAAyB;AACjC,uBAAW,yBAAS,4BAAc,AAAM,KAAD;AAI5B,QAFjB,gBAAU;AACgC,UAAxC,AAAS,QAAD,KAAK,4BAAc,AAAM,KAAD;4BAC/B,yBAAC,AAAM,KAAD;AAGH,0BAAc,2DAAgB,AAAM,KAAD,qBAAsB,QAAQ;AAEvE,iBAAK,kBAAkB;AAEd,qCAAqB,WAAP,WAAN,KAAK;AACd,gCAAwB,6CAAN,KAAK;AAEH,UAA1B,AAAM,KAAD,KAAK,eAAe;;;AAG3B,iBAAK;;;AAIL,cAGG,iCAFI;AACD,yBAAY;;mBAIb,mCAFI;AACD,0BAAY;;mBACd,eAID,qCAHI;AACD,sBAAO;AACP,0BAAW,QAAC,KAAM,iBAAiB,CAAC,CAAC;;mBAEvC,wCAKD,qCAHI;AACH,2BAAY;AACZ,yBAAU,QAAC,KAAM,UAAU;;mBAC3B,MACF,6BAAe,AAAS,QAAD,SACsB,CAAhC,OAAZ,AAAoB,sCAAR;AAAY,uBAAQ,WAAW;;mBAAE,AAAM,KAAD;iDAMzD;;;MDtDc,wCAA0B;;;MAKE,kCAAoB;YAC5D,qEACkB,wDACP,QAAC,OAAQ,uCAAqB,GAAG,4CAC/B,QAAC,OAAQ,iDAA2B,GAAG,kEAEnC;;MAKuB,iCAAmB;YAC3D;;;;;;;IE9BJ;;8CAJK;;;;EAIL;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCIyB,oBAAI;;;MAGO,sBAAM;;;MACd,yBAAS;;;;;;;;;;;;;;;eAkCV;AACvB,UAAI,AAAW,UAAD,YAAuB,oBAAX,UAAU;AAClC,cAAO,iCAA8B,oBAAX,UAAU;;AAEpC,cAAO,oCAAsB,UAAU;;IAE3C;;AAI8B;IAAI;;AAIH;IAAE;;AAGK;IAGhC;;;AAtBN;;EAAgB;;;;;;;AAuCC;IAAM;;6CARG;;IACR,iBAAE;AACR;AACoB,IAAzB,kBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;AAuByB;IAAM;;0CARA;;IACb,iBAAE;AACR;AAC+B,IAApC,kBAAoB,KAAX,UAAU,EAAV,aAAc;EAC9B;;;;;;;;;;;;;MDzFmB,SAAI;YAAG,+CAC1B,QAAC;;AACC,cAGG,iCAFG;AACA,yBAAY;;mBAEd,AAAY,AAAE,kCACZ,AAAK,AAAE;yCAKf;;;MCJc,uBAAkB;;;MAKE,iBAAY;YAAG,6DACjC,gDACP,QAAC,OAAQ,sBAAa,GAAG,oCACvB,QAAC,OAAQ,gCAAmB,GAAG,0DAE3B;;MAKmB,gBAAW;YAAG;;;;AC7B/C,IAHH,iBACI,AAAI,AAAE,oBACN,mBAAc;EAElB","file":"board.unsound.ddc.js"}');
  // Exports:
  return {
    web__cell: cell,
    web__board: board$,
    web__game_settings: game_settings,
    web__game: game,
    web__main: main
  };
}));

//# sourceMappingURL=board.unsound.ddc.js.map
