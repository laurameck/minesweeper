define(['dart_sdk', 'packages/react/react_client/zone', 'packages/react/react_client/js_interop_helpers', 'packages/react/src/ddc_emulated_function_name_bug'], (function load__packages__react__hooks(dart_sdk, packages__react__react_client__zone, packages__react__react_client__js_interop_helpers, packages__react__src__ddc_emulated_function_name_bug) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const js = dart_sdk.js;
  const js_util = dart_sdk.js_util;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const zone = packages__react__react_client__zone.react_client__zone;
  const js_interop_helpers = packages__react__react_client__js_interop_helpers.react_client__js_interop_helpers;
  const ddc_emulated_function_name_bug = packages__react__src__ddc_emulated_function_name_bug.src__ddc_emulated_function_name_bug;
  const prop_validator = packages__react__src__ddc_emulated_function_name_bug.src__prop_validator;
  var dart2_interop_workaround_bindings = Object.create(dart.library);
  var react_interop = Object.create(dart.library);
  var js_interop_util = Object.create(dart.library);
  var js_backed_map = Object.create(dart.library);
  var private_utils = Object.create(dart.library);
  var component_factory = Object.create(dart.library);
  var factory_util = Object.create(dart.library);
  var typedefs = Object.create(dart.library);
  var react = Object.create(dart.library);
  var context$ = Object.create(dart.library);
  var component_registration = Object.create(dart.library);
  var dart_interop_statics = Object.create(dart.library);
  var bridge = Object.create(dart.library);
  var react_client = Object.create(dart.library);
  var chain_refs = Object.create(dart.library);
  var hooks = Object.create(dart.library);
  var $forEach = dartx.forEach;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $addAll = dartx.addAll;
  var $contains = dartx.contains;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $remove = dartx.remove;
  var $clear = dartx.clear;
  var $containsKey = dartx.containsKey;
  var $values = dartx.values;
  var $containsValue = dartx.containsValue;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $takeWhile = dartx.takeWhile;
  var $isEmpty = dartx.isEmpty;
  var $length = dartx.length;
  var $single = dartx.single;
  var $add = dartx.add;
  var $console = dartx.console;
  var $toString = dartx.toString;
  var $where = dartx.where;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    ElementL: () => (T$.ElementL = dart.constFn(dart.legacy(html.Element)))(),
    ComponentL: () => (T$.ComponentL = dart.constFn(dart.legacy(react.Component)))(),
    FunctionL: () => (T$.FunctionL = dart.constFn(dart.legacy(core.Function)))(),
    StringL: () => (T$.StringL = dart.constFn(dart.legacy(core.String)))(),
    JsMapLAndJsRefLTodynamic: () => (T$.JsMapLAndJsRefLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsRef"))])))(),
    JsMapLAndJsRefLToLdynamic: () => (T$.JsMapLAndJsRefLToLdynamic = dart.constFn(dart.legacy(T$.JsMapLAndJsRefLTodynamic())))(),
    VoidTodynamic: () => (T$.VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))(),
    JsMapLAnddynamicTodynamic: () => (T$.JsMapLAnddynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("JsMap")), dart.dynamic])))(),
    JsMapLAnddynamicToLdynamic: () => (T$.JsMapLAnddynamicToLdynamic = dart.constFn(dart.legacy(T$.JsMapLAnddynamicTodynamic())))(),
    boolL: () => (T$.boolL = dart.constFn(dart.legacy(core.bool)))(),
    JsMapLAndJsMapLToboolL: () => (T$.JsMapLAndJsMapLToboolL = dart.constFn(dart.fnType(T$.boolL(), [dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    JsMapLAndJsMapLToLboolL: () => (T$.JsMapLAndJsMapLToLboolL = dart.constFn(dart.legacy(T$.JsMapLAndJsMapLToboolL())))(),
    dynamicToNull: () => (T$.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    dynamicTodynamic: () => (T$.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    MapL: () => (T$.MapL = dart.constFn(dart.legacy(core.Map)))(),
    JsBackedMapL: () => (T$.JsBackedMapL = dart.constFn(dart.legacy(js_backed_map.JsBackedMap)))(),
    DartValueWrapperL: () => (T$.DartValueWrapperL = dart.constFn(dart.legacy(private_utils.DartValueWrapper)))(),
    StringLAnddynamicToNull: () => (T$.StringLAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [T$.StringL(), dart.dynamic])))(),
    LinkedHashMapOfStringL$dynamic: () => (T$.LinkedHashMapOfStringL$dynamic = dart.constFn(collection.LinkedHashMap$(T$.StringL(), dart.dynamic)))(),
    ReactDartContextInternalL: () => (T$.ReactDartContextInternalL = dart.constFn(dart.legacy(react_interop.ReactDartContextInternal)))(),
    NoSuchMethodErrorL: () => (T$.NoSuchMethodErrorL = dart.constFn(dart.legacy(core.NoSuchMethodError)))(),
    dynamicToboolL: () => (T$.dynamicToboolL = dart.constFn(dart.fnType(T$.boolL(), [dart.dynamic])))(),
    IterableL: () => (T$.IterableL = dart.constFn(dart.legacy(core.Iterable)))(),
    NullTodynamic: () => (T$.NullTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Null])))(),
    NullToLdynamic: () => (T$.NullToLdynamic = dart.constFn(dart.legacy(T$.NullTodynamic())))(),
    dynamicToLdynamic: () => (T$.dynamicToLdynamic = dart.constFn(dart.legacy(T$.dynamicTodynamic())))(),
    RefL: () => (T$.RefL = dart.constFn(dart.legacy(react_interop.Ref)))(),
    ListL: () => (T$.ListL = dart.constFn(dart.legacy(core.List)))(),
    ReactDartComponentInternalL: () => (T$.ReactDartComponentInternalL = dart.constFn(dart.legacy(react_interop.ReactDartComponentInternal)))(),
    JsMapLAndJsMapLTodynamic: () => (T$.JsMapLAndJsMapLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("JsMap"))], [dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    JsMapLAndJsMapLToLdynamic: () => (T$.JsMapLAndJsMapLToLdynamic = dart.constFn(dart.legacy(T$.JsMapLAndJsMapLTodynamic())))(),
    JSArrayOfStringL: () => (T$.JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(T$.StringL())))(),
    VoidToLdynamic: () => (T$.VoidToLdynamic = dart.constFn(dart.legacy(T$.VoidTodynamic())))(),
    JSArrayOfVoidToLdynamic: () => (T$.JSArrayOfVoidToLdynamic = dart.constFn(_interceptors.JSArray$(T$.VoidToLdynamic())))(),
    MapLAndMapLToMapL: () => (T$.MapLAndMapLToMapL = dart.constFn(dart.fnType(T$.MapL(), [T$.MapL(), T$.MapL()])))(),
    MapLAndMapLToLMapL: () => (T$.MapLAndMapLToLMapL = dart.constFn(dart.legacy(T$.MapLAndMapLToMapL())))(),
    JSArrayOfMapLAndMapLToLMapL: () => (T$.JSArrayOfMapLAndMapLToLMapL = dart.constFn(_interceptors.JSArray$(T$.MapLAndMapLToLMapL())))(),
    VoidToboolL: () => (T$.VoidToboolL = dart.constFn(dart.fnType(T$.boolL(), [])))(),
    ErrorL: () => (T$.ErrorL = dart.constFn(dart.legacy(core.Error)))(),
    PropValidatorInfoL: () => (T$.PropValidatorInfoL = dart.constFn(dart.legacy(prop_validator.PropValidatorInfo)))(),
    NullAndPropValidatorInfoLToErrorL: () => (T$.NullAndPropValidatorInfoLToErrorL = dart.constFn(dart.fnType(T$.ErrorL(), [core.Null, T$.PropValidatorInfoL()])))(),
    NullAndPropValidatorInfoLToLErrorL: () => (T$.NullAndPropValidatorInfoLToLErrorL = dart.constFn(dart.legacy(T$.NullAndPropValidatorInfoLToErrorL())))(),
    IdentityMapOfStringL$NullAndPropValidatorInfoLToLErrorL: () => (T$.IdentityMapOfStringL$NullAndPropValidatorInfoLToLErrorL = dart.constFn(_js_helper.IdentityMap$(T$.StringL(), T$.NullAndPropValidatorInfoLToLErrorL())))(),
    ReactDartComponentFactoryProxyOfComponentL: () => (T$.ReactDartComponentFactoryProxyOfComponentL = dart.constFn(component_factory.ReactDartComponentFactoryProxy$(T$.ComponentL())))(),
    ReactDartComponentFactoryProxyLOfComponentL: () => (T$.ReactDartComponentFactoryProxyLOfComponentL = dart.constFn(dart.legacy(T$.ReactDartComponentFactoryProxyOfComponentL())))(),
    VoidToComponentL: () => (T$.VoidToComponentL = dart.constFn(dart.fnType(T$.ComponentL(), [])))(),
    VoidToLComponentL: () => (T$.VoidToLComponentL = dart.constFn(dart.legacy(T$.VoidToComponentL())))(),
    IterableOfStringL: () => (T$.IterableOfStringL = dart.constFn(core.Iterable$(T$.StringL())))(),
    IterableLOfStringL: () => (T$.IterableLOfStringL = dart.constFn(dart.legacy(T$.IterableOfStringL())))(),
    FnAndIterableLOfStringLToReactDartComponentFactoryProxyLOfComponentL: () => (T$.FnAndIterableLOfStringLToReactDartComponentFactoryProxyLOfComponentL = dart.constFn(dart.fnType(T$.ReactDartComponentFactoryProxyLOfComponentL(), [T$.VoidToLComponentL()], [T$.IterableLOfStringL()])))(),
    FnAndIterableLOfStringLToLReactDartComponentFactoryProxyLOfComponentL: () => (T$.FnAndIterableLOfStringLToLReactDartComponentFactoryProxyLOfComponentL = dart.constFn(dart.legacy(T$.FnAndIterableLOfStringLToReactDartComponentFactoryProxyLOfComponentL())))(),
    VoidToFn: () => (T$.VoidToFn = dart.constFn(dart.fnType(T$.FnAndIterableLOfStringLToLReactDartComponentFactoryProxyLOfComponentL(), [])))(),
    Component2L: () => (T$.Component2L = dart.constFn(dart.legacy(react.Component2)))(),
    ReactDartComponentFactoryProxy2OfComponent2L: () => (T$.ReactDartComponentFactoryProxy2OfComponent2L = dart.constFn(component_factory.ReactDartComponentFactoryProxy2$(T$.Component2L())))(),
    ReactDartComponentFactoryProxy2LOfComponent2L: () => (T$.ReactDartComponentFactoryProxy2LOfComponent2L = dart.constFn(dart.legacy(T$.ReactDartComponentFactoryProxy2OfComponent2L())))(),
    VoidToComponent2L: () => (T$.VoidToComponent2L = dart.constFn(dart.fnType(T$.Component2L(), [])))(),
    VoidToLComponent2L: () => (T$.VoidToLComponent2L = dart.constFn(dart.legacy(T$.VoidToComponent2L())))(),
    Component2BridgeL: () => (T$.Component2BridgeL = dart.constFn(dart.legacy(bridge.Component2Bridge)))(),
    Component2LToComponent2BridgeL: () => (T$.Component2LToComponent2BridgeL = dart.constFn(dart.fnType(T$.Component2BridgeL(), [T$.Component2L()])))(),
    Component2LToLComponent2BridgeL: () => (T$.Component2LToLComponent2BridgeL = dart.constFn(dart.legacy(T$.Component2LToComponent2BridgeL())))(),
    Fn__ToReactDartComponentFactoryProxy2LOfComponent2L: () => (T$.Fn__ToReactDartComponentFactoryProxy2LOfComponent2L = dart.constFn(dart.fnType(T$.ReactDartComponentFactoryProxy2LOfComponent2L(), [T$.VoidToLComponent2L()], {bridgeFactory: T$.Component2LToLComponent2BridgeL(), skipMethods: T$.IterableLOfStringL()}, {})))(),
    Fn__ToLReactDartComponentFactoryProxy2LOfComponent2L: () => (T$.Fn__ToLReactDartComponentFactoryProxy2LOfComponent2L = dart.constFn(dart.legacy(T$.Fn__ToReactDartComponentFactoryProxy2LOfComponent2L())))(),
    VoidToFn$1: () => (T$.VoidToFn$1 = dart.constFn(dart.fnType(T$.Fn__ToLReactDartComponentFactoryProxy2LOfComponent2L(), [])))(),
    ReactDartFunctionComponentFactoryProxyL: () => (T$.ReactDartFunctionComponentFactoryProxyL = dart.constFn(dart.legacy(component_factory.ReactDartFunctionComponentFactoryProxy)))(),
    JsBackedMapLTodynamic: () => (T$.JsBackedMapLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.JsBackedMapL()])))(),
    JsBackedMapLToLdynamic: () => (T$.JsBackedMapLToLdynamic = dart.constFn(dart.legacy(T$.JsBackedMapLTodynamic())))(),
    Fn__ToReactDartFunctionComponentFactoryProxyL: () => (T$.Fn__ToReactDartFunctionComponentFactoryProxyL = dart.constFn(dart.fnType(T$.ReactDartFunctionComponentFactoryProxyL(), [T$.JsBackedMapLToLdynamic()], {displayName: T$.StringL()}, {})))(),
    Fn__ToLReactDartFunctionComponentFactoryProxyL: () => (T$.Fn__ToLReactDartFunctionComponentFactoryProxyL = dart.constFn(dart.legacy(T$.Fn__ToReactDartFunctionComponentFactoryProxyL())))(),
    VoidToFn$2: () => (T$.VoidToFn$2 = dart.constFn(dart.fnType(T$.Fn__ToLReactDartFunctionComponentFactoryProxyL(), [])))(),
    ReactDomComponentFactoryProxyL: () => (T$.ReactDomComponentFactoryProxyL = dart.constFn(dart.legacy(component_factory.ReactDomComponentFactoryProxy)))(),
    VoidToReactDomComponentFactoryProxyL: () => (T$.VoidToReactDomComponentFactoryProxyL = dart.constFn(dart.fnType(T$.ReactDomComponentFactoryProxyL(), [])))(),
    intL: () => (T$.intL = dart.constFn(dart.legacy(core.int)))(),
    dynamicAnddynamicTointL: () => (T$.dynamicAnddynamicTointL = dart.constFn(dart.fnType(T$.intL(), [dart.dynamic, dart.dynamic])))(),
    dynamicAnddynamicToLintL: () => (T$.dynamicAnddynamicToLintL = dart.constFn(dart.legacy(T$.dynamicAnddynamicTointL())))(),
    ListOfStringL: () => (T$.ListOfStringL = dart.constFn(core.List$(T$.StringL())))(),
    Component2BridgeImplL: () => (T$.Component2BridgeImplL = dart.constFn(dart.legacy(bridge.Component2BridgeImpl)))(),
    Component2LToComponent2BridgeImplL: () => (T$.Component2LToComponent2BridgeImplL = dart.constFn(dart.fnType(T$.Component2BridgeImplL(), [T$.Component2L()])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    VoidToJsMapL: () => (T$.VoidToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [])))(),
    ComponentStatics2L: () => (T$.ComponentStatics2L = dart.constFn(dart.legacy(react_interop.ComponentStatics2)))(),
    ReactComponentLAndComponentStatics2LToComponent2L: () => (T$.ReactComponentLAndComponentStatics2LToComponent2L = dart.constFn(dart.fnType(T$.Component2L(), [dart.legacy(dart.anonymousJSType("ReactComponent")), T$.ComponentStatics2L()])))(),
    Component2LTovoid: () => (T$.Component2LTovoid = dart.constFn(dart.fnType(dart.void, [T$.Component2L()])))(),
    ComponentStatics2LAndJsMapLAndJsMapLToJsMapL: () => (T$.ComponentStatics2LAndJsMapLAndJsMapLToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [T$.ComponentStatics2L(), dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    Component2LAndJsMapLAndJsMapLToboolL: () => (T$.Component2LAndJsMapLAndJsMapLToboolL = dart.constFn(dart.fnType(T$.boolL(), [T$.Component2L(), dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    Component2LAndJsMapLAndJsMapLTodynamic: () => (T$.Component2LAndJsMapLAndJsMapLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.Component2L(), dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))])))(),
    Component2LAndReactComponentLAndJsMapL__Tovoid: () => (T$.Component2LAndReactComponentLAndJsMapL__Tovoid = dart.constFn(dart.fnType(dart.void, [T$.Component2L(), dart.legacy(dart.anonymousJSType("ReactComponent")), dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))], [dart.dynamic])))(),
    Component2LAnddynamicAndReactErrorInfoLTovoid: () => (T$.Component2LAnddynamicAndReactErrorInfoLTovoid = dart.constFn(dart.fnType(dart.void, [T$.Component2L(), dart.dynamic, dart.legacy(dart.anonymousJSType("ReactErrorInfo"))])))(),
    ComponentStatics2LAnddynamicToJsMapL: () => (T$.ComponentStatics2LAnddynamicToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [T$.ComponentStatics2L(), dart.dynamic])))(),
    Component2LAndJsMapLAndJsMapL__Todynamic: () => (T$.Component2LAndJsMapLAndJsMapL__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.Component2L(), dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap")), dart.dynamic])))(),
    IdentityMapOfStringL$FunctionL: () => (T$.IdentityMapOfStringL$FunctionL = dart.constFn(_js_helper.IdentityMap$(T$.StringL(), T$.FunctionL())))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    StringLTodynamic: () => (T$.StringLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.StringL()])))(),
    ComponentStaticsL: () => (T$.ComponentStaticsL = dart.constFn(dart.legacy(react_interop.ComponentStatics)))(),
    ReactComponentLAndReactDartComponentInternalLAndInteropContextValueL__ToComponentL: () => (T$.ReactComponentLAndReactDartComponentInternalLAndInteropContextValueL__ToComponentL = dart.constFn(dart.fnType(T$.ComponentL(), [dart.legacy(dart.anonymousJSType("ReactComponent")), T$.ReactDartComponentInternalL(), dart.legacy(dart.anonymousJSType("InteropContextValue")), T$.ComponentStaticsL()])))(),
    VoidToInteropContextValueL: () => (T$.VoidToInteropContextValueL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("InteropContextValue")), [])))(),
    ComponentLToInteropContextValueL: () => (T$.ComponentLToInteropContextValueL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("InteropContextValue")), [T$.ComponentL()])))(),
    ComponentLTovoid: () => (T$.ComponentLTovoid = dart.constFn(dart.fnType(dart.void, [T$.ComponentL()])))(),
    ComponentLAndReactDartComponentInternalLToMapL: () => (T$.ComponentLAndReactDartComponentInternalLToMapL = dart.constFn(dart.fnType(T$.MapL(), [T$.ComponentL(), T$.ReactDartComponentInternalL()])))(),
    ComponentLAndInteropContextValueLTovoid: () => (T$.ComponentLAndInteropContextValueLTovoid = dart.constFn(dart.fnType(dart.void, [T$.ComponentL(), dart.legacy(dart.anonymousJSType("InteropContextValue"))])))(),
    ComponentLAndReactDartComponentInternalLAndInteropContextValueLTovoid: () => (T$.ComponentLAndReactDartComponentInternalLAndInteropContextValueLTovoid = dart.constFn(dart.fnType(dart.void, [T$.ComponentL(), T$.ReactDartComponentInternalL(), dart.legacy(dart.anonymousJSType("InteropContextValue"))])))(),
    ComponentLAndInteropContextValueLToboolL: () => (T$.ComponentLAndInteropContextValueLToboolL = dart.constFn(dart.fnType(T$.boolL(), [T$.ComponentL(), dart.legacy(dart.anonymousJSType("InteropContextValue"))])))(),
    ComponentLAndReactDartComponentInternalLTovoid: () => (T$.ComponentLAndReactDartComponentInternalLTovoid = dart.constFn(dart.fnType(dart.void, [T$.ComponentL(), T$.ReactDartComponentInternalL()])))(),
    ComponentLTodynamic: () => (T$.ComponentLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.ComponentL()])))(),
    ReactComponentLAndReactDartComponentInternalLAndInteropContextValueL__ToLComponentL: () => (T$.ReactComponentLAndReactDartComponentInternalLAndInteropContextValueL__ToLComponentL = dart.constFn(dart.legacy(T$.ReactComponentLAndReactDartComponentInternalLAndInteropContextValueL__ToComponentL())))(),
    ComponentLToLInteropContextValueL: () => (T$.ComponentLToLInteropContextValueL = dart.constFn(dart.legacy(T$.ComponentLToInteropContextValueL())))(),
    ComponentLToLvoid: () => (T$.ComponentLToLvoid = dart.constFn(dart.legacy(T$.ComponentLTovoid())))(),
    ComponentLAndReactDartComponentInternalLAndInteropContextValueLToLvoid: () => (T$.ComponentLAndReactDartComponentInternalLAndInteropContextValueLToLvoid = dart.constFn(dart.legacy(T$.ComponentLAndReactDartComponentInternalLAndInteropContextValueLTovoid())))(),
    ComponentLAndInteropContextValueLToLboolL: () => (T$.ComponentLAndInteropContextValueLToLboolL = dart.constFn(dart.legacy(T$.ComponentLAndInteropContextValueLToboolL())))(),
    ComponentLAndInteropContextValueLToLvoid: () => (T$.ComponentLAndInteropContextValueLToLvoid = dart.constFn(dart.legacy(T$.ComponentLAndInteropContextValueLTovoid())))(),
    ComponentLAndReactDartComponentInternalLToLvoid: () => (T$.ComponentLAndReactDartComponentInternalLToLvoid = dart.constFn(dart.legacy(T$.ComponentLAndReactDartComponentInternalLTovoid())))(),
    ComponentLToLdynamic: () => (T$.ComponentLToLdynamic = dart.constFn(dart.legacy(T$.ComponentLTodynamic())))(),
    VoidToReactDartInteropStaticsL: () => (T$.VoidToReactDartInteropStaticsL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("ReactDartInteropStatics")), [])))(),
    ExpandoOfComponent2BridgeL: () => (T$.ExpandoOfComponent2BridgeL = dart.constFn(core.Expando$(T$.Component2BridgeL())))(),
    dynamicToNull$1: () => (T$.dynamicToNull$1 = dart.constFn(dart.fnType(core.Null, [], [dart.dynamic])))(),
    dynamicToLNull: () => (T$.dynamicToLNull = dart.constFn(dart.legacy(T$.dynamicToNull$1())))(),
    JsMapLAndJsMapLAnddynamicToJsMapL: () => (T$.JsMapLAndJsMapLAnddynamicToJsMapL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [dart.legacy(dart.anonymousJSType("JsMap")), dart.legacy(dart.anonymousJSType("JsMap"))], [dart.dynamic])))(),
    JsMapLAndJsMapLAnddynamicToLJsMapL: () => (T$.JsMapLAndJsMapLAnddynamicToLJsMapL = dart.constFn(dart.legacy(T$.JsMapLAndJsMapLAnddynamicToJsMapL())))(),
    MapOfStringL$FunctionL: () => (T$.MapOfStringL$FunctionL = dart.constFn(core.Map$(T$.StringL(), T$.FunctionL())))(),
    MapLOfStringL$FunctionL: () => (T$.MapLOfStringL$FunctionL = dart.constFn(dart.legacy(T$.MapOfStringL$FunctionL())))(),
    JsMapLAndStringLAndStringL__Todynamic: () => (T$.JsMapLAndStringLAndStringL__Todynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("JsMap")), T$.StringL(), T$.StringL(), T$.StringL(), T$.StringL(), T$.StringL()])))(),
    JsMapLAndStringLAndStringL__ToLdynamic: () => (T$.JsMapLAndStringLAndStringL__ToLdynamic = dart.constFn(dart.legacy(T$.JsMapLAndStringLAndStringL__Todynamic())))(),
    MapEntryL: () => (T$.MapEntryL = dart.constFn(dart.legacy(core.MapEntry)))(),
    StringLAndFunctionLToMapEntryL: () => (T$.StringLAndFunctionLToMapEntryL = dart.constFn(dart.fnType(T$.MapEntryL(), [T$.StringL(), T$.FunctionL()])))(),
    dynamicTovoid: () => (T$.dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))(),
    dynamicToLvoid: () => (T$.dynamicToLvoid = dart.constFn(dart.legacy(T$.dynamicTovoid())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], dart.dynamic);
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: react.NotSpecified.prototype
      });
    },
    get C2() {
      return C[2] = dart.constList([], T$.StringL());
    },
    get C3() {
      return C[3] = dart.fn(component_factory.listifyChildren, T$.dynamicTodynamic());
    },
    get C4() {
      return C[4] = dart.constMap(dart.dynamic, dart.dynamic, []);
    },
    get C5() {
      return C[5] = dart.constMap(T$.StringL(), dart.dynamic, []);
    },
    get C6() {
      return C[6] = dart.fn(component_registration.registerComponent, T$.FnAndIterableLOfStringLToReactDartComponentFactoryProxyLOfComponentL());
    },
    get C7() {
      return C[7] = dart.fn(component_registration.registerComponent2, T$.Fn__ToReactDartComponentFactoryProxy2LOfComponent2L());
    },
    get C8() {
      return C[8] = dart.fn(component_registration.registerFunctionComponent, T$.Fn__ToReactDartFunctionComponentFactoryProxyL());
    },
    get C9() {
      return C[9] = dart.constList(["getDerivedStateFromError", "componentDidCatch"], T$.StringL());
    },
    get C10() {
      return C[10] = dart.fn(bridge.Component2BridgeImpl.bridgeFactory, T$.Component2LToComponent2BridgeImplL());
    },
    get C11() {
      return C[11] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.initComponent, T$.ReactComponentLAndComponentStatics2LToComponent2L());
    },
    get C12() {
      return C[12] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleComponentDidMount, T$.Component2LTovoid());
    },
    get C13() {
      return C[13] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleGetDerivedStateFromProps, T$.ComponentStatics2LAndJsMapLAndJsMapLToJsMapL());
    },
    get C14() {
      return C[14] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleShouldComponentUpdate, T$.Component2LAndJsMapLAndJsMapLToboolL());
    },
    get C15() {
      return C[15] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleGetSnapshotBeforeUpdate, T$.Component2LAndJsMapLAndJsMapLTodynamic());
    },
    get C16() {
      return C[16] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleComponentDidUpdate, T$.Component2LAndReactComponentLAndJsMapL__Tovoid());
    },
    get C17() {
      return C[17] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleComponentWillUnmount, T$.Component2LTovoid());
    },
    get C18() {
      return C[18] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleComponentDidCatch, T$.Component2LAnddynamicAndReactErrorInfoLTovoid());
    },
    get C19() {
      return C[19] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleGetDerivedStateFromError, T$.ComponentStatics2LAnddynamicToJsMapL());
    },
    get C20() {
      return C[20] = dart.fn(dart_interop_statics.ReactDartInteropStatics2.handleRender, T$.Component2LAndJsMapLAndJsMapL__Todynamic());
    },
    get C21() {
      return C[21] = dart.const({
        __proto__: bridge.Component2BridgeImpl.prototype
      });
    },
    get C22() {
      return C[22] = dart.fn(chain_refs._validateChainRefsArg, T$.dynamicTovoid());
    }
  }, false);
  var C = Array(23).fill(void 0);
  var I = [
    "package:react/react_client/react_interop.dart",
    "package:react/react_client/js_backed_map.dart",
    "package:react/src/react_client/private_utils.dart",
    "package:react/react.dart",
    "package:react/react_client/component_factory.dart",
    "org-dartlang-app:///packages/react/react.dart",
    "package:react/src/context.dart",
    "org-dartlang-app:///packages/react/src/react_client/component_registration.dart",
    "package:react/src/react_client/dart_interop_statics.dart",
    "package:react/react_client/bridge.dart",
    "org-dartlang-app:///packages/react/src/react_client/chain_refs.dart",
    "package:react/hooks.dart"
  ];
  var jsRef$ = dart.privateName(react_interop, "Ref.jsRef");
  const _is_Ref_default = Symbol('_is_Ref_default');
  react_interop.Ref$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class Ref extends core.Object {
      get jsRef() {
        return this[jsRef$];
      }
      set jsRef(value) {
        super.jsRef = value;
      }
      get current() {
        let jsCurrent = this.jsRef.current;
        if (!T$.ElementL().is(jsCurrent) && dart.legacy(dart.anonymousJSType("ReactComponent")).is(jsCurrent)) {
          let dartCurrent = jsCurrent.dartComponent;
          if (dartCurrent != null) {
            return TL().as(dartCurrent);
          }
        }
        return TL().as(jsCurrent);
      }
      set current(value) {
        TL().as(value);
        if (T$.ComponentL().is(value)) {
          this.jsRef.current = value.jsThis;
        } else {
          this.jsRef.current = value;
        }
      }
    }
    (Ref.new = function() {
      this[jsRef$] = dart.global.React.createRef();
      ;
    }).prototype = Ref.prototype;
    (Ref.useRefInit = function(initialValue) {
      this[jsRef$] = dart.global.React.useRef(initialValue);
      ;
    }).prototype = Ref.prototype;
    (Ref.fromJs = function(jsRef) {
      this[jsRef$] = jsRef;
      ;
    }).prototype = Ref.prototype;
    dart.addTypeTests(Ref);
    Ref.prototype[_is_Ref_default] = true;
    dart.addTypeCaches(Ref);
    dart.setGetterSignature(Ref, () => ({
      __proto__: dart.getGetters(Ref.__proto__),
      current: dart.legacy(T)
    }));
    dart.setSetterSignature(Ref, () => ({
      __proto__: dart.getSetters(Ref.__proto__),
      current: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(Ref, I[0]);
    dart.setFieldSignature(Ref, () => ({
      __proto__: dart.getFields(Ref.__proto__),
      jsRef: dart.finalFieldType(dart.legacy(dart.anonymousJSType("JsRef")))
    }));
    return Ref;
  });
  react_interop.Ref = react_interop.Ref$();
  dart.addTypeTests(react_interop.Ref, _is_Ref_default);
  react_interop.ReactDom = class ReactDom extends core.Object {
    static findDOMNode(object) {
      return dart.global.ReactDOM.findDOMNode(object);
    }
    static render(component, element) {
      return dart.global.ReactDOM.render(component, element);
    }
    static unmountComponentAtNode(element) {
      return dart.global.ReactDOM.unmountComponentAtNode(element);
    }
    static createPortal(children, container) {
      return dart.global.ReactDOM.createPortal(children, container);
    }
  };
  (react_interop.ReactDom.new = function() {
    ;
  }).prototype = react_interop.ReactDom.prototype;
  dart.addTypeTests(react_interop.ReactDom);
  dart.addTypeCaches(react_interop.ReactDom);
  dart.setLibraryUri(react_interop.ReactDom, I[0]);
  react_interop.ReactDartComponentVersion = class ReactDartComponentVersion extends core.Object {
    static fromType(type) {
      if (dart.legacy(dart.anonymousJSType("ReactClass")).is(type)) {
        return type.dartComponentVersion;
      }
      if (T$.FunctionL().is(type)) {
        return T$.StringL().as(type.dartComponentVersion);
      }
      return null;
    }
  };
  (react_interop.ReactDartComponentVersion.new = function() {
    ;
  }).prototype = react_interop.ReactDartComponentVersion.prototype;
  dart.addTypeTests(react_interop.ReactDartComponentVersion);
  dart.addTypeCaches(react_interop.ReactDartComponentVersion);
  dart.setLibraryUri(react_interop.ReactDartComponentVersion, I[0]);
  dart.defineLazy(react_interop.ReactDartComponentVersion, {
    /*react_interop.ReactDartComponentVersion.component*/get component() {
      return "1";
    },
    /*react_interop.ReactDartComponentVersion.component2*/get component2() {
      return "2";
    }
  }, true);
  var props = dart.privateName(react_interop, "ReactDartComponentInternal.props");
  react_interop.ReactDartComponentInternal = class ReactDartComponentInternal extends core.Object {
    get props() {
      return this[props];
    }
    set props(value) {
      this[props] = value;
    }
  };
  (react_interop.ReactDartComponentInternal.new = function() {
    this[props] = null;
    ;
  }).prototype = react_interop.ReactDartComponentInternal.prototype;
  dart.addTypeTests(react_interop.ReactDartComponentInternal);
  dart.addTypeCaches(react_interop.ReactDartComponentInternal);
  dart.setLibraryUri(react_interop.ReactDartComponentInternal, I[0]);
  dart.setFieldSignature(react_interop.ReactDartComponentInternal, () => ({
    __proto__: dart.getFields(react_interop.ReactDartComponentInternal.__proto__),
    props: dart.fieldType(dart.legacy(core.Map))
  }));
  var value$ = dart.privateName(react_interop, "ReactDartContextInternal.value");
  react_interop.ReactDartContextInternal = class ReactDartContextInternal extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
  };
  (react_interop.ReactDartContextInternal.new = function(value) {
    this[value$] = value;
    ;
  }).prototype = react_interop.ReactDartContextInternal.prototype;
  dart.addTypeTests(react_interop.ReactDartContextInternal);
  dart.addTypeCaches(react_interop.ReactDartContextInternal);
  dart.setLibraryUri(react_interop.ReactDartContextInternal, I[0]);
  dart.setFieldSignature(react_interop.ReactDartContextInternal, () => ({
    __proto__: dart.getFields(react_interop.ReactDartContextInternal.__proto__),
    value: dart.finalFieldType(dart.dynamic)
  }));
  var componentFactory$ = dart.privateName(react_interop, "ComponentStatics.componentFactory");
  react_interop.ComponentStatics = class ComponentStatics extends core.Object {
    get componentFactory() {
      return this[componentFactory$];
    }
    set componentFactory(value) {
      super.componentFactory = value;
    }
  };
  (react_interop.ComponentStatics.new = function(componentFactory) {
    this[componentFactory$] = componentFactory;
    ;
  }).prototype = react_interop.ComponentStatics.prototype;
  dart.addTypeTests(react_interop.ComponentStatics);
  dart.addTypeCaches(react_interop.ComponentStatics);
  dart.setLibraryUri(react_interop.ComponentStatics, I[0]);
  dart.setFieldSignature(react_interop.ComponentStatics, () => ({
    __proto__: dart.getFields(react_interop.ComponentStatics.__proto__),
    componentFactory: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(react.Component), [])))
  }));
  var componentFactory$0 = dart.privateName(react_interop, "ComponentStatics2.componentFactory");
  var instanceForStaticMethods$ = dart.privateName(react_interop, "ComponentStatics2.instanceForStaticMethods");
  var bridgeFactory$ = dart.privateName(react_interop, "ComponentStatics2.bridgeFactory");
  react_interop.ComponentStatics2 = class ComponentStatics2 extends core.Object {
    get componentFactory() {
      return this[componentFactory$0];
    }
    set componentFactory(value) {
      super.componentFactory = value;
    }
    get instanceForStaticMethods() {
      return this[instanceForStaticMethods$];
    }
    set instanceForStaticMethods(value) {
      super.instanceForStaticMethods = value;
    }
    get bridgeFactory() {
      return this[bridgeFactory$];
    }
    set bridgeFactory(value) {
      super.bridgeFactory = value;
    }
  };
  (react_interop.ComponentStatics2.new = function(opts) {
    let componentFactory = opts && 'componentFactory' in opts ? opts.componentFactory : null;
    let instanceForStaticMethods = opts && 'instanceForStaticMethods' in opts ? opts.instanceForStaticMethods : null;
    let bridgeFactory = opts && 'bridgeFactory' in opts ? opts.bridgeFactory : null;
    this[componentFactory$0] = componentFactory;
    this[instanceForStaticMethods$] = instanceForStaticMethods;
    this[bridgeFactory$] = bridgeFactory;
    ;
  }).prototype = react_interop.ComponentStatics2.prototype;
  dart.addTypeTests(react_interop.ComponentStatics2);
  dart.addTypeCaches(react_interop.ComponentStatics2);
  dart.setLibraryUri(react_interop.ComponentStatics2, I[0]);
  dart.setFieldSignature(react_interop.ComponentStatics2, () => ({
    __proto__: dart.getFields(react_interop.ComponentStatics2.__proto__),
    componentFactory: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(react.Component2), []))),
    instanceForStaticMethods: dart.finalFieldType(dart.legacy(react.Component2)),
    bridgeFactory: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(bridge.Component2Bridge), [dart.legacy(react.Component2)])))
  }));
  react_interop.createRef = function createRef(T) {
    return new (react_interop.Ref$(dart.legacy(T))).new();
  };
  react_interop.forwardRef2 = function forwardRef2(wrapperFunction, opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    return new component_factory.ReactDartWrappedComponentFactoryProxy.forwardRef(wrapperFunction, {displayName: displayName});
  };
  react_interop.forwardRef = function forwardRef(wrapperFunction, opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : "Anonymous";
    let wrappedComponent = js.allowInterop(T$.JsMapLAndJsRefLToLdynamic(), dart.fn((props, ref) => zone.componentZone.run(dart.dynamic, dart.fn(() => {
      let dartProps = new js_backed_map.JsBackedMap.backedBy(props);
      for (let value of dartProps.values) {
        if (T$.FunctionL().is(value)) {
          js_interop_helpers.isRawJsFunctionFromProps._set(value, true);
        }
      }
      let dartRef = new react_interop.Ref.fromJs(ref);
      return wrapperFunction(dartProps, dartRef);
    }, T$.VoidTodynamic())), T$.JsMapLAndJsRefLTodynamic()));
    dart.global.Object.defineProperty(dart.assertInterop(wrappedComponent), "displayName", {value: displayName});
    let hoc = dart.global.React.forwardRef(dart.assertInterop(T$.JsMapLAnddynamicToLdynamic().as(wrappedComponent)));
    js_util.setProperty(hoc, "dartComponentVersion", "2");
    return new component_factory.ReactJsComponentFactoryProxy.new(hoc, {alwaysReturnChildrenAsList: true});
  };
  react_interop.memo2 = function memo2(factory, opts) {
    let areEqual = opts && 'areEqual' in opts ? opts.areEqual : null;
    let _areEqual = areEqual == null ? null : js.allowInterop(T$.JsMapLAndJsMapLToLboolL(), dart.fn((prevProps, nextProps) => {
      let dartPrevProps = new js_backed_map.JsBackedMap.backedBy(prevProps);
      let dartNextProps = new js_backed_map.JsBackedMap.backedBy(nextProps);
      return areEqual(dartPrevProps, dartNextProps);
    }, T$.JsMapLAndJsMapLToboolL()));
    let hoc = dart.global.React.memo(factory.type, dart.assertInterop(_areEqual));
    js_util.setProperty(hoc, "dartComponentVersion", "2");
    return new component_factory.ReactDartWrappedComponentFactoryProxy.new(hoc);
  };
  react_interop.memo = function memo(factory, opts) {
    let areEqual = opts && 'areEqual' in opts ? opts.areEqual : null;
    let _areEqual = areEqual == null ? null : js.allowInterop(T$.JsMapLAndJsMapLToLboolL(), dart.fn((prevProps, nextProps) => {
      let dartPrevProps = new js_backed_map.JsBackedMap.backedBy(prevProps);
      let dartNextProps = new js_backed_map.JsBackedMap.backedBy(nextProps);
      return areEqual(dartPrevProps, dartNextProps);
    }, T$.JsMapLAndJsMapLToboolL()));
    let hoc = dart.global.React.memo(dart.assertInterop(factory.type), dart.assertInterop(_areEqual));
    js_util.setProperty(hoc, "dartComponentVersion", "2");
    return new component_factory.ReactJsComponentFactoryProxy.new(hoc, {alwaysReturnChildrenAsList: true});
  };
  react_interop.markChildrenValidated = function markChildrenValidated(children) {
    children[$forEach](dart.fn(child => {
      if (dart.test(dart.global.React.isValidElement(child))) {
        dart.global._markChildValidated(child);
      }
    }, T$.dynamicToNull()));
  };
  dart.copyProperties(react_interop, {
    get inReactDevMode() {
      return dart.global.React.__isDevelopment;
    }
  });
  js_interop_util.getJsFunctionName = function getJsFunctionName(object) {
    let t0;
    return T$.StringL().as((t0 = object.name, t0 == null ? object.$static_name : t0));
  };
  var jsObject$ = dart.privateName(js_backed_map, "JsBackedMap.jsObject");
  var _keys = dart.privateName(js_backed_map, "_keys");
  var _values = dart.privateName(js_backed_map, "_values");
  js_backed_map.JsBackedMap = class JsBackedMap extends collection.MapBase {
    get jsObject() {
      return this[jsObject$];
    }
    set jsObject(value) {
      super.jsObject = value;
    }
    static from(other) {
      let t0;
      t0 = new js_backed_map.JsBackedMap.new();
      return (() => {
        t0.addAll(other);
        return t0;
      })();
    }
    static fromJs(jsOther) {
      let t0;
      t0 = new js_backed_map.JsBackedMap.new();
      return (() => {
        t0.addAllFromJs(jsOther);
        return t0;
      })();
    }
    get [_keys]() {
      return dart.global.Object.keys(this.jsObject);
    }
    get [_values]() {
      return this[_keys][$map](dart.dynamic, dart.fn(key => this._get(key), T$.dynamicTodynamic()))[$toList]();
    }
    addAllFromJs(jsOther) {
      dart.global.Object.assign(this.jsObject, jsOther);
    }
    _get(key) {
      return private_utils.DartValueWrapper.unwrapIfNeeded(this.jsObject[key]);
    }
    _set(key, value$) {
      let value = value$;
      js_util.setProperty(this.jsObject, key, private_utils.DartValueWrapper.wrapIfNeeded(value));
      return value$;
    }
    get keys() {
      return this[_keys];
    }
    remove(key) {
      let value = this._get(key);
      dart.global.Reflect.deleteProperty(this.jsObject, key);
      return value;
    }
    clear() {
      for (let key of this[_keys]) {
        dart.global.Reflect.deleteProperty(this.jsObject, key);
      }
    }
    addAll(other) {
      T$.MapL().as(other);
      if (T$.JsBackedMapL().is(other)) {
        this.addAllFromJs(other.jsObject);
      } else {
        super[$addAll](other);
      }
    }
    containsKey(key) {
      return js_util.hasProperty(this.jsObject, key);
    }
    get values() {
      return this[_values];
    }
    containsValue(value) {
      return this[_values][$contains](value);
    }
    _equals(other) {
      if (other == null) return false;
      return T$.JsBackedMapL().is(other) && dart.equals(other.jsObject, this.jsObject);
    }
    get hashCode() {
      try {
        return dart.hashCode(this.jsObject);
      } catch (e) {
        let _ = dart.getThrown(e);
      }
      return 0;
    }
  };
  (js_backed_map.JsBackedMap.new = function() {
    this[jsObject$] = {};
    ;
  }).prototype = js_backed_map.JsBackedMap.prototype;
  (js_backed_map.JsBackedMap.backedBy = function(jsObject) {
    this[jsObject$] = jsObject;
    ;
  }).prototype = js_backed_map.JsBackedMap.prototype;
  dart.addTypeTests(js_backed_map.JsBackedMap);
  dart.addTypeCaches(js_backed_map.JsBackedMap);
  dart.setMethodSignature(js_backed_map.JsBackedMap, () => ({
    __proto__: dart.getMethods(js_backed_map.JsBackedMap.__proto__),
    addAllFromJs: dart.fnType(dart.void, [dart.legacy(dart.anonymousJSType("JsMap"))]),
    _get: dart.fnType(dart.dynamic, [dart.legacy(core.Object)]),
    [$_get]: dart.fnType(dart.dynamic, [dart.legacy(core.Object)]),
    _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
    [$_set]: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.Object)]),
    remove: dart.fnType(dart.dynamic, [dart.legacy(core.Object)]),
    [$remove]: dart.fnType(dart.dynamic, [dart.legacy(core.Object)]),
    clear: dart.fnType(dart.void, []),
    [$clear]: dart.fnType(dart.void, []),
    addAll: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    [$addAll]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    containsKey: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$containsKey]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    containsValue: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    [$containsValue]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic])
  }));
  dart.setGetterSignature(js_backed_map.JsBackedMap, () => ({
    __proto__: dart.getGetters(js_backed_map.JsBackedMap.__proto__),
    [_keys]: dart.legacy(core.List),
    [_values]: dart.legacy(core.List),
    keys: dart.legacy(core.Iterable),
    [$keys]: dart.legacy(core.Iterable),
    values: dart.legacy(core.Iterable),
    [$values]: dart.legacy(core.Iterable),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(js_backed_map.JsBackedMap, I[1]);
  dart.setFieldSignature(js_backed_map.JsBackedMap, () => ({
    __proto__: dart.getFields(js_backed_map.JsBackedMap.__proto__),
    jsObject: dart.finalFieldType(dart.legacy(dart.anonymousJSType("JsMap")))
  }));
  dart.defineExtensionMethods(js_backed_map.JsBackedMap, [
    '_get',
    '_set',
    'remove',
    'clear',
    'addAll',
    'containsKey',
    'containsValue',
    '_equals'
  ]);
  dart.defineExtensionAccessors(js_backed_map.JsBackedMap, ['keys', 'values', 'hashCode']);
  js_backed_map.jsBackingMapOrJsCopy = function jsBackingMapOrJsCopy(map) {
    if (T$.JsBackedMapL().is(map)) {
      return map.jsObject;
    } else {
      return js_backed_map.JsBackedMap.from(map).jsObject;
    }
  };
  var value$0 = dart.privateName(private_utils, "DartValueWrapper.value");
  private_utils.DartValueWrapper = class DartValueWrapper extends core.Object {
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    static wrapIfNeeded(value) {
      if (T$.FunctionL().is(value) && js.allowInterop(T$.FunctionL(), value) != value) {
        return new private_utils.DartValueWrapper.new(value);
      }
      return value;
    }
    static unwrapIfNeeded(value) {
      if (T$.DartValueWrapperL().is(value)) {
        return value.value;
      }
      return value;
    }
  };
  (private_utils.DartValueWrapper.new = function(value) {
    this[value$0] = value;
    ;
  }).prototype = private_utils.DartValueWrapper.prototype;
  dart.addTypeTests(private_utils.DartValueWrapper);
  dart.addTypeCaches(private_utils.DartValueWrapper);
  dart.setLibraryUri(private_utils.DartValueWrapper, I[2]);
  dart.setFieldSignature(private_utils.DartValueWrapper, () => ({
    __proto__: dart.getFields(private_utils.DartValueWrapper.__proto__),
    value: dart.finalFieldType(dart.dynamic)
  }));
  private_utils.jsifyContext = function jsifyContext(context) {
    let interopContext = {};
    context[$forEach](dart.fn((key, value) => {
      js_util.setProperty(interopContext, key, new react_interop.ReactDartContextInternal.new(value));
    }, T$.StringLAnddynamicToNull()));
    return interopContext;
  };
  private_utils.validateJsApiThenReturn = function validateJsApiThenReturn(T, computeReturn) {
    private_utils.validateJsApi();
    return computeReturn();
  };
  private_utils.unjsifyContext = function unjsifyContext(interopContext) {
    return T$.LinkedHashMapOfStringL$dynamic().fromIterable(dart.global.Object.keys(interopContext), {value: dart.fn(key => {
        let t1;
        let internal = T$.ReactDartContextInternalL().as(interopContext[key]);
        t1 = internal;
        return t1 == null ? null : t1.value;
      }, T$.dynamicTodynamic())});
  };
  private_utils.validateJsApi = function validateJsApi() {
    if (dart.test(private_utils._isJsApiValid)) return;
    try {
      dart.global.React.isValidElement(null);
      react_interop.ReactDom.findDOMNode(null);
      dart.global._createReactDartComponentClass(null, null, null);
      dart.global._createReactDartComponentClass2(null, null, null);
      private_utils._isJsApiValid = true;
    } catch (e) {
      let ex = dart.getThrown(e);
      if (T$.NoSuchMethodErrorL().is(ex)) {
        let _ = ex;
        dart.throw(core.Exception.new("react.js and react_dom.js must be loaded."));
      } else {
        let _ = ex;
        dart.throw(core.Exception.new("Loaded react.js must include react-dart JS interop helpers."));
      }
    }
  };
  dart.defineLazy(private_utils, {
    /*private_utils._isJsApiValid*/get _isJsApiValid() {
      return false;
    },
    set _isJsApiValid(_) {}
  }, true);
  react.ReactComponentFactoryProxy = class ReactComponentFactoryProxy extends core.Object {
    call(props, c1 = C[1] || CT.C1, c2 = C[1] || CT.C1, c3 = C[1] || CT.C1, c4 = C[1] || CT.C1, c5 = C[1] || CT.C1, c6 = C[1] || CT.C1, c7 = C[1] || CT.C1, c8 = C[1] || CT.C1, c9 = C[1] || CT.C1, c10 = C[1] || CT.C1, c11 = C[1] || CT.C1, c12 = C[1] || CT.C1, c13 = C[1] || CT.C1, c14 = C[1] || CT.C1, c15 = C[1] || CT.C1, c16 = C[1] || CT.C1, c17 = C[1] || CT.C1, c18 = C[1] || CT.C1, c19 = C[1] || CT.C1, c20 = C[1] || CT.C1, c21 = C[1] || CT.C1, c22 = C[1] || CT.C1, c23 = C[1] || CT.C1, c24 = C[1] || CT.C1, c25 = C[1] || CT.C1, c26 = C[1] || CT.C1, c27 = C[1] || CT.C1, c28 = C[1] || CT.C1, c29 = C[1] || CT.C1, c30 = C[1] || CT.C1, c31 = C[1] || CT.C1, c32 = C[1] || CT.C1, c33 = C[1] || CT.C1, c34 = C[1] || CT.C1, c35 = C[1] || CT.C1, c36 = C[1] || CT.C1, c37 = C[1] || CT.C1, c38 = C[1] || CT.C1, c39 = C[1] || CT.C1, c40 = C[1] || CT.C1) {
      let childArguments = null;
      if (core.identical(c1, react._notSpecified)) {
        childArguments = C[0] || CT.C0;
      } else if (core.identical(c2, react._notSpecified)) {
        childArguments = [c1];
      } else if (core.identical(c3, react._notSpecified)) {
        childArguments = [c1, c2];
      } else if (core.identical(c4, react._notSpecified)) {
        childArguments = [c1, c2, c3];
      } else if (core.identical(c5, react._notSpecified)) {
        childArguments = [c1, c2, c3, c4];
      } else if (core.identical(c6, react._notSpecified)) {
        childArguments = [c1, c2, c3, c4, c5];
      } else if (core.identical(c7, react._notSpecified)) {
        childArguments = [c1, c2, c3, c4, c5, c6];
      } else {
        childArguments = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40][$takeWhile](dart.fn(child => !core.identical(child, react._notSpecified), T$.dynamicToboolL()))[$toList]();
      }
      return this.build(props, childArguments);
    }
  };
  (react.ReactComponentFactoryProxy.new = function() {
    ;
  }).prototype = react.ReactComponentFactoryProxy.prototype;
  dart.addTypeTests(react.ReactComponentFactoryProxy);
  dart.addTypeCaches(react.ReactComponentFactoryProxy);
  dart.setMethodSignature(react.ReactComponentFactoryProxy, () => ({
    __proto__: dart.getMethods(react.ReactComponentFactoryProxy.__proto__),
    call: dart.fnType(dart.dynamic, [dart.legacy(core.Map)], [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(react.ReactComponentFactoryProxy, I[3]);
  component_factory.JsBackedMapComponentFactoryMixin = class JsBackedMapComponentFactoryMixin extends react.ReactComponentFactoryProxy {
    static generateExtendedJsProps(props) {
      return factory_util.generateJsProps(props, {wrapWithJsify: false});
    }
  };
  component_factory.JsBackedMapComponentFactoryMixin[dart.mixinOn] = ReactComponentFactoryProxy => class JsBackedMapComponentFactoryMixin extends ReactComponentFactoryProxy {
    build(props, childrenArgs = C[0] || CT.C0) {
      let children = factory_util.generateChildren(childrenArgs, {shouldAlwaysBeList: true});
      let convertedProps = component_factory.JsBackedMapComponentFactoryMixin.generateExtendedJsProps(props);
      return dart.global.React.createElement(this.type, convertedProps, children);
    }
  };
  dart.addTypeTests(component_factory.JsBackedMapComponentFactoryMixin);
  dart.addTypeCaches(component_factory.JsBackedMapComponentFactoryMixin);
  component_factory.JsBackedMapComponentFactoryMixin[dart.implements] = () => [react.ReactComponentFactoryProxy];
  dart.setMethodSignature(component_factory.JsBackedMapComponentFactoryMixin, () => ({
    __proto__: dart.getMethods(component_factory.JsBackedMapComponentFactoryMixin.__proto__),
    build: dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [dart.legacy(core.Map)], [dart.legacy(core.List)])
  }));
  dart.setLibraryUri(component_factory.JsBackedMapComponentFactoryMixin, I[4]);
  var reactClass$ = dart.privateName(component_factory, "ReactDartComponentFactoryProxy.reactClass");
  var defaultProps = dart.privateName(component_factory, "ReactDartComponentFactoryProxy.defaultProps");
  const _is_ReactDartComponentFactoryProxy_default = Symbol('_is_ReactDartComponentFactoryProxy_default');
  component_factory.ReactDartComponentFactoryProxy$ = dart.generic(TComponent => {
    class ReactDartComponentFactoryProxy extends react.ReactComponentFactoryProxy {
      get reactClass() {
        return this[reactClass$];
      }
      set reactClass(value) {
        super.reactClass = value;
      }
      get defaultProps() {
        return this[defaultProps];
      }
      set defaultProps(value) {
        super.defaultProps = value;
      }
      get type() {
        return this.reactClass;
      }
      build(props, childrenArgs = C[0] || CT.C0) {
        let children = factory_util.convertArgsToChildren(childrenArgs);
        children = component_factory.listifyChildren(children);
        return dart.global.React.createElement(this.type, component_factory.ReactDartComponentFactoryProxy.generateExtendedJsProps(props, children, {defaultProps: this.defaultProps}), children);
      }
      static generateExtendedJsProps(props, children, opts) {
        let t3, t3$;
        let defaultProps = opts && 'defaultProps' in opts ? opts.defaultProps : null;
        if (children == null) {
          children = [];
        } else if (!T$.IterableL().is(children)) {
          children = [children];
        }
        let extendedProps = (t3 = defaultProps != null ? collection.LinkedHashMap.from(defaultProps) : new _js_helper.LinkedMap.new(), (() => {
          t3[$addAll](props);
          t3[$_set]("children", children);
          t3[$remove]("key");
          t3[$remove]("ref");
          return t3;
        })());
        let internal = (t3$ = new react_interop.ReactDartComponentInternal.new(), (() => {
          t3$.props = extendedProps;
          return t3$;
        })());
        let interopProps = {internal: internal};
        if (dart.test(props[$containsKey]("key"))) {
          interopProps.key = props[$_get]("key");
        }
        if (dart.test(props[$containsKey]("ref"))) {
          let ref = props[$_get]("ref");
          if (T$.NullToLdynamic().is(ref)) {
            interopProps.ref = js.allowInterop(T$.dynamicToLdynamic(), dart.fn(instance => {
              if (dart.legacy(dart.anonymousJSType("ReactComponent")).is(instance) && instance.dartComponent != null) {
                return dart.dcall(ref, [instance.dartComponent]);
              }
              return dart.dcall(ref, [instance]);
            }, T$.dynamicTodynamic()));
          } else if (T$.RefL().is(ref)) {
            interopProps.ref = ref.jsRef;
          } else {
            interopProps.ref = ref;
          }
        }
        return interopProps;
      }
    }
    (ReactDartComponentFactoryProxy.new = function(reactClass) {
      this[reactClass$] = reactClass;
      this[defaultProps] = reactClass.dartDefaultProps;
      ;
    }).prototype = ReactDartComponentFactoryProxy.prototype;
    dart.addTypeTests(ReactDartComponentFactoryProxy);
    ReactDartComponentFactoryProxy.prototype[_is_ReactDartComponentFactoryProxy_default] = true;
    dart.addTypeCaches(ReactDartComponentFactoryProxy);
    dart.setMethodSignature(ReactDartComponentFactoryProxy, () => ({
      __proto__: dart.getMethods(ReactDartComponentFactoryProxy.__proto__),
      build: dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [dart.legacy(core.Map)], [dart.legacy(core.List)])
    }));
    dart.setGetterSignature(ReactDartComponentFactoryProxy, () => ({
      __proto__: dart.getGetters(ReactDartComponentFactoryProxy.__proto__),
      type: dart.legacy(dart.anonymousJSType("ReactClass"))
    }));
    dart.setLibraryUri(ReactDartComponentFactoryProxy, I[4]);
    dart.setFieldSignature(ReactDartComponentFactoryProxy, () => ({
      __proto__: dart.getFields(ReactDartComponentFactoryProxy.__proto__),
      reactClass: dart.finalFieldType(dart.legacy(dart.anonymousJSType("ReactClass"))),
      defaultProps: dart.finalFieldType(dart.legacy(core.Map))
    }));
    return ReactDartComponentFactoryProxy;
  });
  component_factory.ReactDartComponentFactoryProxy = component_factory.ReactDartComponentFactoryProxy$();
  dart.addTypeTests(component_factory.ReactDartComponentFactoryProxy, _is_ReactDartComponentFactoryProxy_default);
  var reactClass$0 = dart.privateName(component_factory, "ReactDartComponentFactoryProxy2.reactClass");
  var defaultProps$ = dart.privateName(component_factory, "ReactDartComponentFactoryProxy2.defaultProps");
  const _is_ReactDartComponentFactoryProxy2_default = Symbol('_is_ReactDartComponentFactoryProxy2_default');
  component_factory.ReactDartComponentFactoryProxy2$ = dart.generic(TComponent => {
    const ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36 = class ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin extends react.ReactComponentFactoryProxy {};
    (ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36.new = function() {
    }).prototype = ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36.prototype;
    dart.applyMixin(ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36, component_factory.JsBackedMapComponentFactoryMixin);
    class ReactDartComponentFactoryProxy2 extends ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36 {
      get reactClass() {
        return this[reactClass$0];
      }
      set reactClass(value) {
        super.reactClass = value;
      }
      get defaultProps() {
        return this[defaultProps$];
      }
      set defaultProps(value) {
        super.defaultProps = value;
      }
      get type() {
        return this.reactClass;
      }
      static generateExtendedJsProps(props) {
        return factory_util.generateJsProps(props, {wrapWithJsify: false});
      }
    }
    (ReactDartComponentFactoryProxy2.new = function(reactClass) {
      this[reactClass$0] = reactClass;
      this[defaultProps$] = js_backed_map.JsBackedMap.fromJs(reactClass.defaultProps);
      ;
    }).prototype = ReactDartComponentFactoryProxy2.prototype;
    dart.addTypeTests(ReactDartComponentFactoryProxy2);
    ReactDartComponentFactoryProxy2.prototype[_is_ReactDartComponentFactoryProxy2_default] = true;
    dart.addTypeCaches(ReactDartComponentFactoryProxy2);
    ReactDartComponentFactoryProxy2[dart.implements] = () => [component_factory.ReactDartComponentFactoryProxy$(dart.legacy(react.Component))];
    dart.setGetterSignature(ReactDartComponentFactoryProxy2, () => ({
      __proto__: dart.getGetters(ReactDartComponentFactoryProxy2.__proto__),
      type: dart.legacy(dart.anonymousJSType("ReactClass"))
    }));
    dart.setLibraryUri(ReactDartComponentFactoryProxy2, I[4]);
    dart.setFieldSignature(ReactDartComponentFactoryProxy2, () => ({
      __proto__: dart.getFields(ReactDartComponentFactoryProxy2.__proto__),
      reactClass: dart.finalFieldType(dart.legacy(dart.anonymousJSType("ReactClass"))),
      defaultProps: dart.finalFieldType(dart.legacy(core.Map))
    }));
    return ReactDartComponentFactoryProxy2;
  });
  component_factory.ReactDartComponentFactoryProxy2 = component_factory.ReactDartComponentFactoryProxy2$();
  dart.addTypeTests(component_factory.ReactDartComponentFactoryProxy2, _is_ReactDartComponentFactoryProxy2_default);
  var type = dart.privateName(component_factory, "ReactJsContextComponentFactoryProxy.type");
  var isConsumer$ = dart.privateName(component_factory, "ReactJsContextComponentFactoryProxy.isConsumer");
  var isProvider$ = dart.privateName(component_factory, "ReactJsContextComponentFactoryProxy.isProvider");
  var shouldConvertDomProps$ = dart.privateName(component_factory, "ReactJsContextComponentFactoryProxy.shouldConvertDomProps");
  var type$ = dart.privateName(component_factory, "ReactJsComponentFactoryProxy.type");
  var shouldConvertDomProps$0 = dart.privateName(component_factory, "ReactJsComponentFactoryProxy.shouldConvertDomProps");
  var alwaysReturnChildrenAsList$ = dart.privateName(component_factory, "ReactJsComponentFactoryProxy.alwaysReturnChildrenAsList");
  var _additionalRefPropKeys = dart.privateName(component_factory, "_additionalRefPropKeys");
  component_factory.ReactJsComponentFactoryProxy = class ReactJsComponentFactoryProxy extends react.ReactComponentFactoryProxy {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get shouldConvertDomProps() {
      return this[shouldConvertDomProps$0];
    }
    set shouldConvertDomProps(value) {
      super.shouldConvertDomProps = value;
    }
    get alwaysReturnChildrenAsList() {
      return this[alwaysReturnChildrenAsList$];
    }
    set alwaysReturnChildrenAsList(value) {
      super.alwaysReturnChildrenAsList = value;
    }
    build(props, childrenArgs = null) {
      let children = factory_util.generateChildren(childrenArgs, {shouldAlwaysBeList: this.alwaysReturnChildrenAsList});
      let convertedProps = factory_util.generateJsProps(props, {convertCallbackRefValue: false, additionalRefPropKeys: this[_additionalRefPropKeys]});
      return dart.global.React.createElement(this.type, convertedProps, children);
    }
  };
  (component_factory.ReactJsComponentFactoryProxy.new = function(jsClass, opts) {
    let shouldConvertDomProps = opts && 'shouldConvertDomProps' in opts ? opts.shouldConvertDomProps : true;
    let alwaysReturnChildrenAsList = opts && 'alwaysReturnChildrenAsList' in opts ? opts.alwaysReturnChildrenAsList : false;
    let additionalRefPropKeys = opts && 'additionalRefPropKeys' in opts ? opts.additionalRefPropKeys : C[2] || CT.C2;
    this[shouldConvertDomProps$0] = shouldConvertDomProps;
    this[alwaysReturnChildrenAsList$] = alwaysReturnChildrenAsList;
    this[type$] = jsClass;
    this[_additionalRefPropKeys] = additionalRefPropKeys;
    if (jsClass == null) {
      dart.throw(new core.ArgumentError.new("`jsClass` must not be null. " + "Ensure that the JS component class you're referencing is available and being accessed correctly."));
    }
  }).prototype = component_factory.ReactJsComponentFactoryProxy.prototype;
  dart.addTypeTests(component_factory.ReactJsComponentFactoryProxy);
  dart.addTypeCaches(component_factory.ReactJsComponentFactoryProxy);
  dart.setMethodSignature(component_factory.ReactJsComponentFactoryProxy, () => ({
    __proto__: dart.getMethods(component_factory.ReactJsComponentFactoryProxy.__proto__),
    build: dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [dart.legacy(core.Map)], [dart.legacy(core.List)])
  }));
  dart.setLibraryUri(component_factory.ReactJsComponentFactoryProxy, I[4]);
  dart.setFieldSignature(component_factory.ReactJsComponentFactoryProxy, () => ({
    __proto__: dart.getFields(component_factory.ReactJsComponentFactoryProxy.__proto__),
    type: dart.finalFieldType(dart.legacy(dart.anonymousJSType("ReactClass"))),
    shouldConvertDomProps: dart.finalFieldType(dart.legacy(core.bool)),
    alwaysReturnChildrenAsList: dart.finalFieldType(dart.legacy(core.bool)),
    [_additionalRefPropKeys]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  component_factory.ReactJsContextComponentFactoryProxy = class ReactJsContextComponentFactoryProxy extends component_factory.ReactJsComponentFactoryProxy {
    get type() {
      return this[type];
    }
    set type(value) {
      super.type = value;
    }
    get isConsumer() {
      return this[isConsumer$];
    }
    set isConsumer(value) {
      super.isConsumer = value;
    }
    get isProvider() {
      return this[isProvider$];
    }
    set isProvider(value) {
      super.isProvider = value;
    }
    get shouldConvertDomProps() {
      return this[shouldConvertDomProps$];
    }
    set shouldConvertDomProps(value) {
      super.shouldConvertDomProps = value;
    }
    build(props, childrenArgs = null) {
      let children = factory_util.generateChildren(childrenArgs);
      if (dart.test(this.isConsumer)) {
        if (T$.FunctionL().is(children)) {
          let contextCallback = T$.FunctionL().as(children);
          children = js.allowInterop(T$.dynamicToLdynamic(), dart.fn(args => dart.dcall(contextCallback, [context$.ContextHelpers.unjsifyNewContext(args)]), T$.dynamicTodynamic()));
        }
      }
      return dart.global.React.createElement(this.type, this.generateExtendedJsProps(props), children);
    }
    generateExtendedJsProps(props) {
      let propsForJs = js_backed_map.JsBackedMap.from(props);
      if (dart.test(this.isProvider)) {
        propsForJs._set("value", context$.ContextHelpers.jsifyNewContext(propsForJs._get("value")));
      }
      return propsForJs.jsObject;
    }
  };
  (component_factory.ReactJsContextComponentFactoryProxy.new = function(jsClass, opts) {
    let shouldConvertDomProps = opts && 'shouldConvertDomProps' in opts ? opts.shouldConvertDomProps : true;
    let isConsumer = opts && 'isConsumer' in opts ? opts.isConsumer : false;
    let isProvider = opts && 'isProvider' in opts ? opts.isProvider : false;
    this[shouldConvertDomProps$] = shouldConvertDomProps;
    this[isConsumer$] = isConsumer;
    this[isProvider$] = isProvider;
    this[type] = jsClass;
    component_factory.ReactJsContextComponentFactoryProxy.__proto__.new.call(this, jsClass, {shouldConvertDomProps: shouldConvertDomProps});
    ;
  }).prototype = component_factory.ReactJsContextComponentFactoryProxy.prototype;
  dart.addTypeTests(component_factory.ReactJsContextComponentFactoryProxy);
  dart.addTypeCaches(component_factory.ReactJsContextComponentFactoryProxy);
  dart.setMethodSignature(component_factory.ReactJsContextComponentFactoryProxy, () => ({
    __proto__: dart.getMethods(component_factory.ReactJsContextComponentFactoryProxy.__proto__),
    generateExtendedJsProps: dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [dart.legacy(core.Map)])
  }));
  dart.setLibraryUri(component_factory.ReactJsContextComponentFactoryProxy, I[4]);
  dart.setFieldSignature(component_factory.ReactJsContextComponentFactoryProxy, () => ({
    __proto__: dart.getFields(component_factory.ReactJsContextComponentFactoryProxy.__proto__),
    type: dart.finalFieldType(dart.legacy(dart.anonymousJSType("ReactClass"))),
    isConsumer: dart.finalFieldType(dart.legacy(core.bool)),
    isProvider: dart.finalFieldType(dart.legacy(core.bool)),
    shouldConvertDomProps: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var name$ = dart.privateName(component_factory, "ReactDomComponentFactoryProxy.name");
  component_factory.ReactDomComponentFactoryProxy = class ReactDomComponentFactoryProxy extends react.ReactComponentFactoryProxy {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get type() {
      return this.name;
    }
    build(props, childrenArgs = C[0] || CT.C0) {
      let children = factory_util.generateChildren(childrenArgs);
      let convertedProps = factory_util.generateJsProps(props, {convertCallbackRefValue: false, wrapWithJsify: true});
      return dart.global.React.createElement(this.type, convertedProps, children);
    }
    static convertProps(props) {
      factory_util.convertRefValue(props);
    }
  };
  (component_factory.ReactDomComponentFactoryProxy.new = function(name) {
    this[name$] = name;
    if (dart.test(ddc_emulated_function_name_bug.isBugPresent)) {
      ddc_emulated_function_name_bug.patchName(this);
    }
  }).prototype = component_factory.ReactDomComponentFactoryProxy.prototype;
  dart.addTypeTests(component_factory.ReactDomComponentFactoryProxy);
  dart.addTypeCaches(component_factory.ReactDomComponentFactoryProxy);
  dart.setMethodSignature(component_factory.ReactDomComponentFactoryProxy, () => ({
    __proto__: dart.getMethods(component_factory.ReactDomComponentFactoryProxy.__proto__),
    build: dart.fnType(dart.legacy(dart.anonymousJSType("ReactElement")), [dart.legacy(core.Map)], [dart.legacy(core.List)])
  }));
  dart.setGetterSignature(component_factory.ReactDomComponentFactoryProxy, () => ({
    __proto__: dart.getGetters(component_factory.ReactDomComponentFactoryProxy.__proto__),
    type: dart.legacy(core.String)
  }));
  dart.setLibraryUri(component_factory.ReactDomComponentFactoryProxy, I[4]);
  dart.setFieldSignature(component_factory.ReactDomComponentFactoryProxy, () => ({
    __proto__: dart.getFields(component_factory.ReactDomComponentFactoryProxy.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String))
  }));
  var displayName$ = dart.privateName(component_factory, "ReactDartFunctionComponentFactoryProxy.displayName");
  var reactFunction = dart.privateName(component_factory, "ReactDartFunctionComponentFactoryProxy.reactFunction");
  const ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36 = class ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin extends react.ReactComponentFactoryProxy {};
  (ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36.new = function() {
  }).prototype = ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36.prototype;
  dart.applyMixin(ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36, component_factory.JsBackedMapComponentFactoryMixin);
  component_factory.ReactDartFunctionComponentFactoryProxy = class ReactDartFunctionComponentFactoryProxy extends ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36 {
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get reactFunction() {
      return this[reactFunction];
    }
    set reactFunction(value) {
      super.reactFunction = value;
    }
    get type() {
      return this.reactFunction;
    }
  };
  (component_factory.ReactDartFunctionComponentFactoryProxy.new = function(dartFunctionComponent, opts) {
    let t3, t3$;
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    this[displayName$] = (t3 = displayName, t3 == null ? component_factory._getJsFunctionName(dartFunctionComponent) : t3);
    this[reactFunction] = component_factory._wrapFunctionComponent(dartFunctionComponent, {displayName: (t3$ = displayName, t3$ == null ? component_factory._getJsFunctionName(dartFunctionComponent) : t3$)});
    ;
  }).prototype = component_factory.ReactDartFunctionComponentFactoryProxy.prototype;
  dart.addTypeTests(component_factory.ReactDartFunctionComponentFactoryProxy);
  dart.addTypeCaches(component_factory.ReactDartFunctionComponentFactoryProxy);
  dart.setGetterSignature(component_factory.ReactDartFunctionComponentFactoryProxy, () => ({
    __proto__: dart.getGetters(component_factory.ReactDartFunctionComponentFactoryProxy.__proto__),
    type: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("JsMap"))], [dart.legacy(dart.anonymousJSType("JsMap"))]))
  }));
  dart.setLibraryUri(component_factory.ReactDartFunctionComponentFactoryProxy, I[4]);
  dart.setFieldSignature(component_factory.ReactDartFunctionComponentFactoryProxy, () => ({
    __proto__: dart.getFields(component_factory.ReactDartFunctionComponentFactoryProxy.__proto__),
    displayName: dart.finalFieldType(dart.legacy(core.String)),
    reactFunction: dart.finalFieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(dart.anonymousJSType("JsMap"))], [dart.legacy(dart.anonymousJSType("JsMap"))])))
  }));
  var type$0 = dart.privateName(component_factory, "ReactDartWrappedComponentFactoryProxy.type");
  const ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36$ = class ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin extends react.ReactComponentFactoryProxy {};
  (ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36$.new = function() {
  }).prototype = ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36$.prototype;
  dart.applyMixin(ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36$, component_factory.JsBackedMapComponentFactoryMixin);
  component_factory.ReactDartWrappedComponentFactoryProxy = class ReactDartWrappedComponentFactoryProxy extends ReactComponentFactoryProxy_JsBackedMapComponentFactoryMixin$36$ {
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
  };
  (component_factory.ReactDartWrappedComponentFactoryProxy.new = function(type) {
    this[type$0] = type;
    ;
  }).prototype = component_factory.ReactDartWrappedComponentFactoryProxy.prototype;
  (component_factory.ReactDartWrappedComponentFactoryProxy.forwardRef = function(dartFunctionComponent, opts) {
    let t3;
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    this[type$0] = component_factory._wrapForwardRefFunctionComponent(dartFunctionComponent, {displayName: (t3 = displayName, t3 == null ? component_factory._getJsFunctionName(dartFunctionComponent) : t3)});
    ;
  }).prototype = component_factory.ReactDartWrappedComponentFactoryProxy.prototype;
  dart.addTypeTests(component_factory.ReactDartWrappedComponentFactoryProxy);
  dart.addTypeCaches(component_factory.ReactDartWrappedComponentFactoryProxy);
  dart.setLibraryUri(component_factory.ReactDartWrappedComponentFactoryProxy, I[4]);
  dart.setFieldSignature(component_factory.ReactDartWrappedComponentFactoryProxy, () => ({
    __proto__: dart.getFields(component_factory.ReactDartWrappedComponentFactoryProxy.__proto__),
    type: dart.finalFieldType(dart.legacy(dart.anonymousJSType("ReactClass")))
  }));
  component_factory.listifyChildren = function listifyChildren(children) {
    if (dart.test(dart.global.React.isValidElement(children))) {
      return children;
    } else if (T$.IterableL().is(children) && !T$.ListL().is(children)) {
      return children[$toList]({growable: false});
    } else {
      return children;
    }
  };
  component_factory.unconvertJsProps = function unconvertJsProps(instance) {
    let props = collection.LinkedHashMap.from(new js_backed_map.JsBackedMap.backedBy(dart.legacy(dart.anonymousJSType("JsMap")).as(dart.dload(instance, 'props'))));
    if (T$.ReactDartComponentInternalL().is(props[$_get]("internal")) || props[$_get]("style") != null && T$.MapL().is(props[$_get]("style"))) {
      dart.throw(new core.ArgumentError.new("A Dart Component cannot be passed into unconvertJsProps."));
    }
    let style = props[$_get]("style");
    if (style != null) {
      props[$_set]("style", T$.LinkedHashMapOfStringL$dynamic().from(new js_backed_map.JsBackedMap.backedBy(dart.legacy(dart.anonymousJSType("JsMap")).as(style))));
    }
    return props;
  };
  component_factory._getJsFunctionName = function _getJsFunctionName(object) {
    let t3;
    return T$.StringL().as((t3 = object.name, t3 == null ? object.$static_name : t3));
  };
  component_factory._wrapFunctionComponent = function _wrapFunctionComponent(dartFunctionComponent, opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    function jsFunctionComponent(jsProps, _legacyContext = null) {
      return zone.componentZone.run(dart.dynamic, dart.fn(() => {
        let t3;
        t3 = dartFunctionComponent(new js_backed_map.JsBackedMap.backedBy(jsProps));
        return t3 == null ? dart.global._jsNull : t3;
      }, T$.VoidTodynamic()));
    }
    dart.fn(jsFunctionComponent, T$.JsMapLAndJsMapLTodynamic());
    let interopFunction = js.allowInterop(T$.JsMapLAndJsMapLToLdynamic(), jsFunctionComponent);
    if (displayName != null) {
      dart.global.Object.defineProperty(dart.assertInterop(interopFunction), "name", {value: displayName});
    }
    js_util.setProperty(interopFunction, "dartComponentVersion", "2");
    return interopFunction;
  };
  component_factory._wrapForwardRefFunctionComponent = function _wrapForwardRefFunctionComponent(dartFunctionComponent, opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    function jsFunctionComponent(props, ref) {
      return zone.componentZone.run(dart.dynamic, dart.fn(() => {
        let t3;
        t3 = dartFunctionComponent(new js_backed_map.JsBackedMap.backedBy(props), ref);
        return t3 == null ? dart.global._jsNull : t3;
      }, T$.VoidTodynamic()));
    }
    dart.fn(jsFunctionComponent, T$.JsMapLAnddynamicTodynamic());
    let interopFunction = js.allowInterop(T$.JsMapLAnddynamicToLdynamic(), jsFunctionComponent);
    if (displayName != null) {
      dart.global.Object.defineProperty(dart.assertInterop(interopFunction), "name", {value: displayName});
    }
    let jsForwardRefFunction = dart.global.React.forwardRef(dart.assertInterop(interopFunction));
    js_util.setProperty(jsForwardRefFunction, "dartComponentVersion", "2");
    return jsForwardRefFunction;
  };
  factory_util.convertArgsToChildren = function convertArgsToChildren(childrenArgs) {
    if (dart.test(childrenArgs[$isEmpty])) {
      return null;
    } else if (childrenArgs[$length] === 1) {
      return childrenArgs[$single];
    } else {
      react_interop.markChildrenValidated(childrenArgs);
      return childrenArgs;
    }
  };
  factory_util.unconvertJsEventHandler = function unconvertJsEventHandler(jsConvertedEventHandler) {
    return null;
  };
  factory_util.convertRefValue = function convertRefValue(args) {
    let ref = args[$_get]("ref");
    if (T$.RefL().is(ref)) {
      args[$_set]("ref", ref.jsRef);
    }
  };
  factory_util.convertRefValue2 = function convertRefValue2(args, opts) {
    let convertCallbackRefValue = opts && 'convertCallbackRefValue' in opts ? opts.convertCallbackRefValue : true;
    let additionalRefPropKeys = opts && 'additionalRefPropKeys' in opts ? opts.additionalRefPropKeys : C[2] || CT.C2;
    let refKeys = (() => {
      let t3 = T$.JSArrayOfStringL().of(["ref"]);
      t3[$addAll](additionalRefPropKeys);
      return t3;
    })();
    for (let refKey of refKeys) {
      let ref = args[$_get](refKey);
      if (T$.RefL().is(ref)) {
        args[$_set](refKey, ref.jsRef);
      } else if (T$.NullToLdynamic().is(ref) && dart.test(convertCallbackRefValue)) {
        args[$_set](refKey, js.allowInterop(T$.dynamicToLdynamic(), dart.fn(instance => {
          if (dart.legacy(dart.anonymousJSType("ReactComponent")).is(instance) && instance.dartComponent != null) {
            return dart.dcall(ref, [instance.dartComponent]);
          }
          return dart.dcall(ref, [instance]);
        }, T$.dynamicTodynamic())));
      }
    }
  };
  factory_util.generateChildren = function generateChildren(childrenArgs, opts) {
    let shouldAlwaysBeList = opts && 'shouldAlwaysBeList' in opts ? opts.shouldAlwaysBeList : false;
    let children = null;
    if (dart.test(childrenArgs[$isEmpty])) {
      if (!dart.test(shouldAlwaysBeList)) return null;
      children = childrenArgs;
    } else if (childrenArgs[$length] === 1) {
      if (dart.test(shouldAlwaysBeList)) {
        let singleChild = component_factory.listifyChildren(childrenArgs[$single]);
        if (T$.ListL().is(singleChild)) {
          children = singleChild;
        }
      } else {
        children = childrenArgs[$single];
      }
    }
    if (T$.IterableL().is(children) && !T$.ListL().is(children)) {
      children = dart.dsend(children, 'toList', [], {growable: false});
    }
    if (children == null) {
      children = dart.test(shouldAlwaysBeList) ? childrenArgs[$map](dart.dynamic, C[3] || CT.C3)[$toList]() : childrenArgs;
      react_interop.markChildrenValidated(T$.ListL().as(children));
    }
    return children;
  };
  factory_util.generateJsProps = function generateJsProps(props, opts) {
    let convertRefValue = opts && 'convertRefValue' in opts ? opts.convertRefValue : true;
    let convertCallbackRefValue = opts && 'convertCallbackRefValue' in opts ? opts.convertCallbackRefValue : true;
    let additionalRefPropKeys = opts && 'additionalRefPropKeys' in opts ? opts.additionalRefPropKeys : C[2] || CT.C2;
    let wrapWithJsify = opts && 'wrapWithJsify' in opts ? opts.wrapWithJsify : true;
    let propsForJs = js_backed_map.JsBackedMap.from(props);
    if (dart.test(convertRefValue)) {
      factory_util.convertRefValue2(propsForJs, {convertCallbackRefValue: convertCallbackRefValue, additionalRefPropKeys: additionalRefPropKeys});
    }
    return dart.legacy(dart.anonymousJSType("JsMap")).as(dart.test(wrapWithJsify) ? js_interop_helpers.jsifyAndAllowInterop(propsForJs) : propsForJs.jsObject);
  };
  var nextContext = dart.privateName(react, "Component.nextContext");
  var prevContext = dart.privateName(react, "Component.prevContext");
  var prevState = dart.privateName(react, "Component.prevState");
  var nextProps = dart.privateName(react, "Component.nextProps");
  var _context = dart.privateName(react, "_context");
  var _props = dart.privateName(react, "_props");
  var _state = dart.privateName(react, "_state");
  var _ref = dart.privateName(react, "_ref");
  var _jsRedraw$ = dart.privateName(react, "_jsRedraw");
  var _jsThis$ = dart.privateName(react, "_jsThis");
  var _setStateCallbacks = dart.privateName(react, "_setStateCallbacks");
  var _transactionalSetStateCallbacks = dart.privateName(react, "_transactionalSetStateCallbacks");
  var _nextState = dart.privateName(react, "_nextState");
  var _initContext = dart.privateName(react, "_initContext");
  var _initProps = dart.privateName(react, "_initProps");
  react.Component = class Component extends core.Object {
    get nextContext() {
      return this[nextContext];
    }
    set nextContext(value) {
      this[nextContext] = value;
    }
    get prevContext() {
      return this[prevContext];
    }
    set prevContext(value) {
      this[prevContext] = value;
    }
    get prevState() {
      return this[prevState];
    }
    set prevState(value) {
      this[prevState] = value;
    }
    get nextProps() {
      return this[nextProps];
    }
    set nextProps(value) {
      this[nextProps] = value;
    }
    get context() {
      return this[_context];
    }
    set context(value) {
      return this[_context] = T$.MapL().as(value);
    }
    get props() {
      return this[_props];
    }
    set props(value) {
      return this[_props] = value;
    }
    get state() {
      return this[_state];
    }
    set state(value) {
      return this[_state] = value;
    }
    get ref() {
      return this[_ref];
    }
    set ref(value) {
      return this[_ref] = value;
    }
    get setStateCallbacks() {
      return this[_setStateCallbacks];
    }
    get transactionalSetStateCallbacks() {
      return this[_transactionalSetStateCallbacks];
    }
    get jsThis() {
      return this[_jsThis$];
    }
    get displayName() {
      return dart.toString(this.runtimeType);
    }
    initComponentInternal(props, _jsRedraw, ref = null, _jsThis = null, context = null) {
      this[_jsRedraw$] = _jsRedraw;
      this.ref = ref;
      this[_jsThis$] = _jsThis;
      this[_initContext](context);
      this[_initProps](props);
    }
    [_initContext](context) {
      let t4, t4$;
      this.context = collection.LinkedHashMap.from(core.Map.as((t4 = context, t4 == null ? C[4] || CT.C4 : t4)));
      this.nextContext = collection.LinkedHashMap.from(core.Map.as((t4$ = this.context, t4$ == null ? C[4] || CT.C4 : t4$)));
    }
    [_initProps](props) {
      this.props = collection.LinkedHashMap.from(core.Map.as(props));
      this.nextProps = this.props;
    }
    initStateInternal() {
      this.state = collection.LinkedHashMap.from(this.getInitialState());
      this.transferComponentState();
    }
    get nextState() {
      return this[_nextState] == null ? this.state : this[_nextState];
    }
    transferComponentState() {
      this.prevState = this.state;
      if (this[_nextState] != null) {
        this.state = this[_nextState];
      }
      this[_nextState] = collection.LinkedHashMap.from(this.state);
    }
    redraw(callback = null) {
      this.setState(new _js_helper.LinkedMap.new(), callback);
    }
    setState(newState, callback = null) {
      if (T$.MapL().is(newState)) {
        this[_nextState][$addAll](newState);
      } else if (T$.MapLAndMapLToLMapL().is(newState)) {
        this[_transactionalSetStateCallbacks][$add](newState);
      } else if (newState != null) {
        dart.throw(new core.ArgumentError.new("setState expects its first parameter to either be a Map or a `TransactionalSetStateCallback`."));
      }
      if (callback != null) this[_setStateCallbacks][$add](callback);
      dart.dsend(this, _jsRedraw$, []);
    }
    replaceState(newState, callback = null) {
      let nextState = newState == null ? new _js_helper.LinkedMap.new() : collection.LinkedHashMap.from(newState);
      this[_nextState] = nextState;
      if (callback != null) this[_setStateCallbacks][$add](callback);
      dart.dsend(this, _jsRedraw$, []);
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillReceiveProps(newProps) {
    }
    componentWillReceivePropsWithContext(newProps, nextContext) {
    }
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    shouldComponentUpdateWithContext(nextProps, nextState, nextContext) {
      return null;
    }
    componentWillUpdate(nextProps, nextState) {
    }
    componentWillUpdateWithContext(nextProps, nextState, nextContext) {
    }
    componentDidUpdate(prevProps, prevState) {
    }
    componentWillUnmount() {
    }
    getChildContext() {
      return C[5] || CT.C5;
    }
    get childContextKeys() {
      return C[2] || CT.C2;
    }
    get contextKeys() {
      return C[2] || CT.C2;
    }
    getInitialState() {
      return new _js_helper.LinkedMap.new();
    }
    getDefaultProps() {
      return new _js_helper.LinkedMap.new();
    }
  };
  (react.Component.new = function() {
    this[_context] = null;
    this[_props] = null;
    this[_state] = new _js_helper.LinkedMap.new();
    this[_ref] = null;
    this[_jsRedraw$] = null;
    this[_jsThis$] = null;
    this[_setStateCallbacks] = T$.JSArrayOfVoidToLdynamic().of([]);
    this[_transactionalSetStateCallbacks] = T$.JSArrayOfMapLAndMapLToLMapL().of([]);
    this[nextContext] = null;
    this[_nextState] = null;
    this[prevContext] = null;
    this[prevState] = null;
    this[nextProps] = null;
    ;
  }).prototype = react.Component.prototype;
  dart.addTypeTests(react.Component);
  dart.addTypeCaches(react.Component);
  dart.setMethodSignature(react.Component, () => ({
    __proto__: dart.getMethods(react.Component.__proto__),
    initComponentInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic], [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)])), dart.dynamic, dart.dynamic]),
    [_initContext]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_initProps]: dart.fnType(dart.dynamic, [dart.dynamic]),
    initStateInternal: dart.fnType(dart.dynamic, []),
    transferComponentState: dart.fnType(dart.void, []),
    redraw: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    setState: dart.fnType(dart.void, [dart.legacy(core.Object)], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    replaceState: dart.fnType(dart.void, [dart.legacy(core.Map)], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    componentWillMount: dart.fnType(dart.void, []),
    componentDidMount: dart.fnType(dart.void, []),
    componentWillReceiveProps: dart.fnType(dart.void, [dart.legacy(core.Map)]),
    componentWillReceivePropsWithContext: dart.fnType(dart.void, [dart.legacy(core.Map), dart.dynamic]),
    shouldComponentUpdate: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Map), dart.legacy(core.Map)]),
    shouldComponentUpdateWithContext: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Map), dart.legacy(core.Map), dart.legacy(core.Map)]),
    componentWillUpdate: dart.fnType(dart.void, [dart.legacy(core.Map), dart.legacy(core.Map)]),
    componentWillUpdateWithContext: dart.fnType(dart.void, [dart.legacy(core.Map), dart.legacy(core.Map), dart.legacy(core.Map)]),
    componentDidUpdate: dart.fnType(dart.void, [dart.legacy(core.Map), dart.legacy(core.Map)]),
    componentWillUnmount: dart.fnType(dart.void, []),
    getChildContext: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    getInitialState: dart.fnType(dart.legacy(core.Map), []),
    getDefaultProps: dart.fnType(dart.legacy(core.Map), [])
  }));
  dart.setGetterSignature(react.Component, () => ({
    __proto__: dart.getGetters(react.Component.__proto__),
    context: dart.dynamic,
    props: dart.legacy(core.Map),
    state: dart.legacy(core.Map),
    ref: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)])),
    setStateCallbacks: dart.legacy(core.List),
    transactionalSetStateCallbacks: dart.legacy(core.List),
    jsThis: dart.dynamic,
    displayName: dart.legacy(core.String),
    nextState: dart.legacy(core.Map),
    childContextKeys: dart.legacy(core.Iterable$(dart.legacy(core.String))),
    contextKeys: dart.legacy(core.Iterable$(dart.legacy(core.String)))
  }));
  dart.setSetterSignature(react.Component, () => ({
    __proto__: dart.getSetters(react.Component.__proto__),
    context: dart.dynamic,
    props: dart.legacy(core.Map),
    state: dart.legacy(core.Map),
    ref: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)]))
  }));
  dart.setLibraryUri(react.Component, I[3]);
  dart.setFieldSignature(react.Component, () => ({
    __proto__: dart.getFields(react.Component.__proto__),
    [_context]: dart.fieldType(dart.legacy(core.Map)),
    [_props]: dart.fieldType(dart.legacy(core.Map)),
    [_state]: dart.fieldType(dart.legacy(core.Map)),
    [_ref]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)]))),
    [_jsRedraw$]: dart.fieldType(dart.dynamic),
    [_jsThis$]: dart.fieldType(dart.dynamic),
    [_setStateCallbacks]: dart.fieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, []))))),
    [_transactionalSetStateCallbacks]: dart.fieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.legacy(core.Map), [dart.legacy(core.Map), dart.legacy(core.Map)]))))),
    nextContext: dart.fieldType(dart.legacy(core.Map)),
    [_nextState]: dart.fieldType(dart.legacy(core.Map)),
    prevContext: dart.fieldType(dart.legacy(core.Map)),
    prevState: dart.fieldType(dart.legacy(core.Map)),
    nextProps: dart.fieldType(dart.legacy(core.Map))
  }));
  var context = dart.privateName(react, "Component2.context");
  var props$ = dart.privateName(react, "Component2.props");
  var state = dart.privateName(react, "Component2.state");
  var jsThis = dart.privateName(react, "Component2.jsThis");
  var _unsupportedError = dart.privateName(react, "_unsupportedError");
  var _bridge = dart.privateName(react, "_bridge");
  var _unsupportedLifecycleError = dart.privateName(react, "_unsupportedLifecycleError");
  react.Component2 = class Component2 extends core.Object {
    get context() {
      return this[context];
    }
    set context(value) {
      this[context] = value;
    }
    get props() {
      return this[props$];
    }
    set props(value) {
      this[props$] = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get jsThis() {
      return this[jsThis];
    }
    set jsThis(value) {
      this[jsThis] = value;
    }
    get contextType() {
      return null;
    }
    get defaultProps() {
      return C[4] || CT.C4;
    }
    get initialState() {
      return C[4] || CT.C4;
    }
    get [_jsThis$]() {
      return dart.throw(this[_unsupportedError]("_jsThis"));
    }
    set [_jsThis$](_) {
      return dart.throw(this[_unsupportedError]("_jsThis"));
    }
    get displayName() {
      let value = null;
      if (!dart.test(dart.fn(() => {
        value = dart.toString(this.runtimeType);
        return true;
      }, T$.VoidToboolL())())) dart.assertFailed(null, I[5], 650, 12, "() {\n      value = runtimeType.toString();\n      return true;\n    }()");
      return T$.StringL().as(value);
    }
    get [_bridge]() {
      return bridge.Component2Bridge.forComponent(this);
    }
    setState(newState, callback = null) {
      T$.MapL().as(newState);
      this[_bridge].setState(this, newState, callback);
    }
    setStateWithUpdater(updater, callback = null) {
      this[_bridge].setStateWithUpdater(this, updater, callback);
    }
    forceUpdate(callback = null) {
      this[_bridge].forceUpdate(this, callback);
    }
    componentDidMount() {
    }
    getDerivedStateFromProps(nextProps, prevState) {
      return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
    }
    componentDidUpdate(prevProps, prevState, snapshot = null) {
    }
    componentWillUnmount() {
    }
    componentDidCatch(error, info) {
    }
    getDerivedStateFromError(error) {
      return null;
    }
    get propTypes() {
      return new (T$.IdentityMapOfStringL$NullAndPropValidatorInfoLToLErrorL()).new();
    }
    redraw(callback = null) {
      this.setState(new _js_helper.LinkedMap.new(), callback);
    }
    [_unsupportedLifecycleError](memberName) {
      return new core.UnsupportedError.new("Component2 drops support for the lifecycle method " + dart.str(memberName) + "." + " See doc comment on Component2." + dart.str(memberName) + " for migration instructions.");
    }
    getInitialState() {
      return dart.throw(this[_unsupportedLifecycleError]("getInitialState"));
    }
    getDefaultProps() {
      return dart.throw(this[_unsupportedLifecycleError]("getDefaultProps"));
    }
    componentWillMount() {
      return dart.throw(this[_unsupportedLifecycleError]("componentWillMount"));
    }
    componentWillReceiveProps(nextProps) {
      return dart.throw(this[_unsupportedLifecycleError]("componentWillReceiveProps"));
    }
    componentWillUpdate(nextProps, nextState) {
      return dart.throw(this[_unsupportedLifecycleError]("componentWillUpdate"));
    }
    getChildContext() {
      return dart.throw(this[_unsupportedLifecycleError]("getChildContext"));
    }
    shouldComponentUpdateWithContext(nextProps, nextState, nextContext) {
      return dart.throw(this[_unsupportedLifecycleError]("shouldComponentUpdateWithContext"));
    }
    componentWillUpdateWithContext(nextProps, nextState, nextContext) {
      return dart.throw(this[_unsupportedLifecycleError]("componentWillUpdateWithContext"));
    }
    componentWillReceivePropsWithContext(newProps, nextContext) {
      return dart.throw(this[_unsupportedLifecycleError]("componentWillReceivePropsWithContext"));
    }
    [_unsupportedError](memberName) {
      return new core.UnsupportedError.new("Component2 drops support for " + dart.str(memberName));
    }
    replaceState(newState, callback = null) {
      return dart.throw(this[_unsupportedError]("replaceState"));
    }
    get childContextKeys() {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [childContextKeys]"));
    }
    get contextKeys() {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [contextKeys]"));
    }
    initComponentInternal(props, _jsRedraw, ref = null, _jsThis = null, context = null) {
      return dart.throw(this[_unsupportedError]("initComponentInternal"));
    }
    initStateInternal() {
      return dart.throw(this[_unsupportedError]("initStateInternal"));
    }
    get nextContext() {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [nextContext]"));
    }
    set nextContext(_) {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [nextContext]"));
    }
    get prevContext() {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [prevContext]"));
    }
    set prevContext(_) {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [prevContext]"));
    }
    get prevState() {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [prevContext]"));
    }
    set prevState(_) {
      return dart.throw(this[_unsupportedError]("\"Legacy\" Context [prevContext]"));
    }
    get nextState() {
      return dart.throw(this[_unsupportedError]("nextState"));
    }
    get nextProps() {
      return dart.throw(this[_unsupportedError]("nextProps"));
    }
    set nextProps(_) {
      return dart.throw(this[_unsupportedError]("nextProps"));
    }
    transferComponentState() {
      return dart.throw(this[_unsupportedError]("transferComponentState"));
    }
    get ref() {
      return dart.throw(this[_unsupportedError]("ref"));
    }
    set ref(_) {
      return dart.throw(this[_unsupportedError]("ref"));
    }
    get setStateCallbacks() {
      return dart.throw(this[_unsupportedError]("setStateCallbacks"));
    }
    get transactionalSetStateCallbacks() {
      return dart.throw(this[_unsupportedError]("transactionalSetStateCallbacks"));
    }
    [_initContext](context) {
    }
    [_initProps](props) {
    }
  };
  (react.Component2.new = function() {
    this[context] = null;
    this[props$] = null;
    this[state] = null;
    this[jsThis] = null;
    this[_context] = null;
    this[_jsRedraw$] = null;
    this[_nextState] = null;
    this[_props] = null;
    this[_ref] = null;
    this[_setStateCallbacks] = null;
    this[_state] = null;
    this[_transactionalSetStateCallbacks] = null;
    ;
  }).prototype = react.Component2.prototype;
  dart.addTypeTests(react.Component2);
  dart.addTypeCaches(react.Component2);
  react.Component2[dart.implements] = () => [react.Component];
  dart.setMethodSignature(react.Component2, () => ({
    __proto__: dart.getMethods(react.Component2.__proto__),
    setState: dart.fnType(dart.void, [dart.legacy(core.Object)], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    setStateWithUpdater: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(core.Map), [dart.legacy(core.Map), dart.legacy(core.Map)]))], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    forceUpdate: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    componentDidMount: dart.fnType(dart.void, []),
    getDerivedStateFromProps: dart.fnType(dart.legacy(core.Map), [dart.legacy(core.Map), dart.legacy(core.Map)]),
    shouldComponentUpdate: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Map), dart.legacy(core.Map)]),
    getSnapshotBeforeUpdate: dart.fnType(dart.dynamic, [dart.legacy(core.Map), dart.legacy(core.Map)]),
    componentDidUpdate: dart.fnType(dart.void, [dart.legacy(core.Map), dart.legacy(core.Map)], [dart.dynamic]),
    componentWillUnmount: dart.fnType(dart.void, []),
    componentDidCatch: dart.fnType(dart.void, [dart.dynamic, dart.legacy(dart.anonymousJSType("ReactErrorInfo"))]),
    getDerivedStateFromError: dart.fnType(dart.legacy(core.Map), [dart.dynamic]),
    redraw: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    [_unsupportedLifecycleError]: dart.fnType(dart.legacy(core.UnsupportedError), [dart.legacy(core.String)]),
    getInitialState: dart.fnType(dart.legacy(core.Map), []),
    getDefaultProps: dart.fnType(dart.legacy(core.Map), []),
    componentWillMount: dart.fnType(dart.void, []),
    componentWillReceiveProps: dart.fnType(dart.void, [dart.legacy(core.Map)]),
    componentWillUpdate: dart.fnType(dart.void, [dart.legacy(core.Map), dart.legacy(core.Map)]),
    getChildContext: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), []),
    shouldComponentUpdateWithContext: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Map), dart.legacy(core.Map), dart.dynamic]),
    componentWillUpdateWithContext: dart.fnType(dart.void, [dart.legacy(core.Map), dart.legacy(core.Map), dart.dynamic]),
    componentWillReceivePropsWithContext: dart.fnType(dart.void, [dart.legacy(core.Map), dart.dynamic]),
    [_unsupportedError]: dart.fnType(dart.legacy(core.UnsupportedError), [dart.legacy(core.String)]),
    replaceState: dart.fnType(dart.void, [dart.legacy(core.Map)], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    initComponentInternal: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic], [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)])), dart.dynamic, dart.dynamic]),
    initStateInternal: dart.fnType(dart.dynamic, []),
    transferComponentState: dart.fnType(dart.void, []),
    [_initContext]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_initProps]: dart.fnType(dart.dynamic, [dart.dynamic])
  }));
  dart.setGetterSignature(react.Component2, () => ({
    __proto__: dart.getGetters(react.Component2.__proto__),
    contextType: dart.legacy(context$.Context),
    defaultProps: dart.legacy(core.Map),
    initialState: dart.legacy(core.Map),
    [_jsThis$]: dart.dynamic,
    displayName: dart.legacy(core.String),
    [_bridge]: dart.legacy(bridge.Component2Bridge),
    propTypes: dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.legacy(core.Error), [core.Null, dart.legacy(prop_validator.PropValidatorInfo)])))),
    childContextKeys: dart.legacy(core.Iterable$(dart.legacy(core.String))),
    contextKeys: dart.legacy(core.Iterable$(dart.legacy(core.String))),
    nextContext: dart.legacy(core.Map),
    prevContext: dart.legacy(core.Map),
    prevState: dart.legacy(core.Map),
    nextState: dart.legacy(core.Map),
    nextProps: dart.legacy(core.Map),
    ref: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)])),
    setStateCallbacks: dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, [])))),
    transactionalSetStateCallbacks: dart.legacy(core.List$(dart.legacy(dart.fnType(dart.legacy(core.Map), [dart.legacy(core.Map), dart.legacy(core.Map)]))))
  }));
  dart.setSetterSignature(react.Component2, () => ({
    __proto__: dart.getSetters(react.Component2.__proto__),
    [_jsThis$]: dart.dynamic,
    nextContext: dart.legacy(core.Map),
    prevContext: dart.legacy(core.Map),
    prevState: dart.legacy(core.Map),
    nextProps: dart.legacy(core.Map),
    ref: dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)]))
  }));
  dart.setLibraryUri(react.Component2, I[3]);
  dart.setFieldSignature(react.Component2, () => ({
    __proto__: dart.getFields(react.Component2.__proto__),
    context: dart.fieldType(dart.dynamic),
    props: dart.fieldType(dart.legacy(core.Map)),
    state: dart.fieldType(dart.legacy(core.Map)),
    jsThis: dart.fieldType(dart.legacy(dart.anonymousJSType("ReactComponent"))),
    [_context]: dart.fieldType(dart.legacy(core.Map)),
    [_jsRedraw$]: dart.fieldType(dart.dynamic),
    [_nextState]: dart.fieldType(dart.legacy(core.Map)),
    [_props]: dart.fieldType(dart.legacy(core.Map)),
    [_ref]: dart.fieldType(dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(core.String)]))),
    [_setStateCallbacks]: dart.fieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.dynamic, []))))),
    [_state]: dart.fieldType(dart.legacy(core.Map)),
    [_transactionalSetStateCallbacks]: dart.fieldType(dart.legacy(core.List$(dart.legacy(dart.fnType(dart.legacy(core.Map), [dart.legacy(core.Map), dart.legacy(core.Map)])))))
  }));
  const _is_TypedSnapshot_default = Symbol('_is_TypedSnapshot_default');
  react.TypedSnapshot$ = dart.generic(TSnapshot => {
    class TypedSnapshot extends core.Object {}
    TypedSnapshot[dart.mixinOn] = Object => class TypedSnapshot extends Object {};
    (TypedSnapshot[dart.mixinNew] = function() {
    }).prototype = TypedSnapshot.prototype;
    dart.addTypeTests(TypedSnapshot);
    TypedSnapshot.prototype[_is_TypedSnapshot_default] = true;
    dart.addTypeCaches(TypedSnapshot);
    TypedSnapshot[dart.implements] = () => [core.Object];
    dart.setLibraryUri(TypedSnapshot, I[3]);
    return TypedSnapshot;
  });
  react.TypedSnapshot = react.TypedSnapshot$();
  dart.addTypeTests(react.TypedSnapshot, _is_TypedSnapshot_default);
  react.NotSpecified = class NotSpecified extends core.Object {};
  (react.NotSpecified.new = function() {
    ;
  }).prototype = react.NotSpecified.prototype;
  dart.addTypeTests(react.NotSpecified);
  dart.addTypeCaches(react.NotSpecified);
  dart.setLibraryUri(react.NotSpecified, I[3]);
  react._createDOMComponents = function _createDOMComponents(creator) {
    react.a = dart.dcall(creator, ["a"]);
    react.abbr = dart.dcall(creator, ["abbr"]);
    react.address = dart.dcall(creator, ["address"]);
    react.area = dart.dcall(creator, ["area"]);
    react.article = dart.dcall(creator, ["article"]);
    react.aside = dart.dcall(creator, ["aside"]);
    react.audio = dart.dcall(creator, ["audio"]);
    react.b = dart.dcall(creator, ["b"]);
    react.base = dart.dcall(creator, ["base"]);
    react.bdi = dart.dcall(creator, ["bdi"]);
    react.bdo = dart.dcall(creator, ["bdo"]);
    react.big = dart.dcall(creator, ["big"]);
    react.blockquote = dart.dcall(creator, ["blockquote"]);
    react.body = dart.dcall(creator, ["body"]);
    react.br = dart.dcall(creator, ["br"]);
    react.button = dart.dcall(creator, ["button"]);
    react.canvas = dart.dcall(creator, ["canvas"]);
    react.caption = dart.dcall(creator, ["caption"]);
    react.cite = dart.dcall(creator, ["cite"]);
    react.code = dart.dcall(creator, ["code"]);
    react.col = dart.dcall(creator, ["col"]);
    react.colgroup = dart.dcall(creator, ["colgroup"]);
    react.data = dart.dcall(creator, ["data"]);
    react.datalist = dart.dcall(creator, ["datalist"]);
    react.dd = dart.dcall(creator, ["dd"]);
    react.del = dart.dcall(creator, ["del"]);
    react.details = dart.dcall(creator, ["details"]);
    react.dfn = dart.dcall(creator, ["dfn"]);
    react.dialog = dart.dcall(creator, ["dialog"]);
    react.div = dart.dcall(creator, ["div"]);
    react.dl = dart.dcall(creator, ["dl"]);
    react.dt = dart.dcall(creator, ["dt"]);
    react.em = dart.dcall(creator, ["em"]);
    react.embed = dart.dcall(creator, ["embed"]);
    react.fieldset = dart.dcall(creator, ["fieldset"]);
    react.figcaption = dart.dcall(creator, ["figcaption"]);
    react.figure = dart.dcall(creator, ["figure"]);
    react.footer = dart.dcall(creator, ["footer"]);
    react.form = dart.dcall(creator, ["form"]);
    react.h1 = dart.dcall(creator, ["h1"]);
    react.h2 = dart.dcall(creator, ["h2"]);
    react.h3 = dart.dcall(creator, ["h3"]);
    react.h4 = dart.dcall(creator, ["h4"]);
    react.h5 = dart.dcall(creator, ["h5"]);
    react.h6 = dart.dcall(creator, ["h6"]);
    react.head = dart.dcall(creator, ["head"]);
    react.header = dart.dcall(creator, ["header"]);
    react.hr = dart.dcall(creator, ["hr"]);
    react.html = dart.dcall(creator, ["html"]);
    react.i = dart.dcall(creator, ["i"]);
    react.iframe = dart.dcall(creator, ["iframe"]);
    react.img = dart.dcall(creator, ["img"]);
    react.input = dart.dcall(creator, ["input"]);
    react.ins = dart.dcall(creator, ["ins"]);
    react.kbd = dart.dcall(creator, ["kbd"]);
    react.keygen = dart.dcall(creator, ["keygen"]);
    react.label = dart.dcall(creator, ["label"]);
    react.legend = dart.dcall(creator, ["legend"]);
    react.li = dart.dcall(creator, ["li"]);
    react.link = dart.dcall(creator, ["link"]);
    react.main = dart.dcall(creator, ["main"]);
    react.map = dart.dcall(creator, ["map"]);
    react.mark = dart.dcall(creator, ["mark"]);
    react.menu = dart.dcall(creator, ["menu"]);
    react.menuitem = dart.dcall(creator, ["menuitem"]);
    react.meta = dart.dcall(creator, ["meta"]);
    react.meter = dart.dcall(creator, ["meter"]);
    react.nav = dart.dcall(creator, ["nav"]);
    react.noscript = dart.dcall(creator, ["noscript"]);
    react.object = dart.dcall(creator, ["object"]);
    react.ol = dart.dcall(creator, ["ol"]);
    react.optgroup = dart.dcall(creator, ["optgroup"]);
    react.option = dart.dcall(creator, ["option"]);
    react.output = dart.dcall(creator, ["output"]);
    react.p = dart.dcall(creator, ["p"]);
    react.param = dart.dcall(creator, ["param"]);
    react.picture = dart.dcall(creator, ["picture"]);
    react.pre = dart.dcall(creator, ["pre"]);
    react.progress = dart.dcall(creator, ["progress"]);
    react.q = dart.dcall(creator, ["q"]);
    react.rp = dart.dcall(creator, ["rp"]);
    react.rt = dart.dcall(creator, ["rt"]);
    react.ruby = dart.dcall(creator, ["ruby"]);
    react.s = dart.dcall(creator, ["s"]);
    react.samp = dart.dcall(creator, ["samp"]);
    react.script = dart.dcall(creator, ["script"]);
    react.section = dart.dcall(creator, ["section"]);
    react.select = dart.dcall(creator, ["select"]);
    react.small = dart.dcall(creator, ["small"]);
    react.source = dart.dcall(creator, ["source"]);
    react.span = dart.dcall(creator, ["span"]);
    react.strong = dart.dcall(creator, ["strong"]);
    react.style = dart.dcall(creator, ["style"]);
    react.sub = dart.dcall(creator, ["sub"]);
    react.summary = dart.dcall(creator, ["summary"]);
    react.sup = dart.dcall(creator, ["sup"]);
    react.table = dart.dcall(creator, ["table"]);
    react.tbody = dart.dcall(creator, ["tbody"]);
    react.td = dart.dcall(creator, ["td"]);
    react.textarea = dart.dcall(creator, ["textarea"]);
    react.tfoot = dart.dcall(creator, ["tfoot"]);
    react.th = dart.dcall(creator, ["th"]);
    react.thead = dart.dcall(creator, ["thead"]);
    react.time = dart.dcall(creator, ["time"]);
    react.title = dart.dcall(creator, ["title"]);
    react.tr = dart.dcall(creator, ["tr"]);
    react.track = dart.dcall(creator, ["track"]);
    react.u = dart.dcall(creator, ["u"]);
    react.ul = dart.dcall(creator, ["ul"]);
    react.variable = dart.dcall(creator, ["var"]);
    react.video = dart.dcall(creator, ["video"]);
    react.wbr = dart.dcall(creator, ["wbr"]);
    react.altGlyph = dart.dcall(creator, ["altGlyph"]);
    react.altGlyphDef = dart.dcall(creator, ["altGlyphDef"]);
    react.altGlyphItem = dart.dcall(creator, ["altGlyphItem"]);
    react.animate = dart.dcall(creator, ["animate"]);
    react.animateColor = dart.dcall(creator, ["animateColor"]);
    react.animateMotion = dart.dcall(creator, ["animateMotion"]);
    react.animateTransform = dart.dcall(creator, ["animateTransform"]);
    react.circle = dart.dcall(creator, ["circle"]);
    react.clipPath = dart.dcall(creator, ["clipPath"]);
    react.colorProfile = dart.dcall(creator, ["color-profile"]);
    react.cursor = dart.dcall(creator, ["cursor"]);
    react.defs = dart.dcall(creator, ["defs"]);
    react.desc = dart.dcall(creator, ["desc"]);
    react.discard = dart.dcall(creator, ["discard"]);
    react.ellipse = dart.dcall(creator, ["ellipse"]);
    react.feBlend = dart.dcall(creator, ["feBlend"]);
    react.feColorMatrix = dart.dcall(creator, ["feColorMatrix"]);
    react.feComponentTransfer = dart.dcall(creator, ["feComponentTransfer"]);
    react.feComposite = dart.dcall(creator, ["feComposite"]);
    react.feConvolveMatrix = dart.dcall(creator, ["feConvolveMatrix"]);
    react.feDiffuseLighting = dart.dcall(creator, ["feDiffuseLighting"]);
    react.feDisplacementMap = dart.dcall(creator, ["feDisplacementMap"]);
    react.feDistantLight = dart.dcall(creator, ["feDistantLight"]);
    react.feDropShadow = dart.dcall(creator, ["feDropShadow"]);
    react.feFlood = dart.dcall(creator, ["feFlood"]);
    react.feFuncA = dart.dcall(creator, ["feFuncA"]);
    react.feFuncB = dart.dcall(creator, ["feFuncB"]);
    react.feFuncG = dart.dcall(creator, ["feFuncG"]);
    react.feFuncR = dart.dcall(creator, ["feFuncR"]);
    react.feGaussianBlur = dart.dcall(creator, ["feGaussianBlur"]);
    react.feImage = dart.dcall(creator, ["feImage"]);
    react.feMerge = dart.dcall(creator, ["feMerge"]);
    react.feMergeNode = dart.dcall(creator, ["feMergeNode"]);
    react.feMorphology = dart.dcall(creator, ["feMorphology"]);
    react.feOffset = dart.dcall(creator, ["feOffset"]);
    react.fePointLight = dart.dcall(creator, ["fePointLight"]);
    react.feSpecularLighting = dart.dcall(creator, ["feSpecularLighting"]);
    react.feSpotLight = dart.dcall(creator, ["feSpotLight"]);
    react.feTile = dart.dcall(creator, ["feTile"]);
    react.feTurbulence = dart.dcall(creator, ["feTurbulence"]);
    react.filter = dart.dcall(creator, ["filter"]);
    react.font = dart.dcall(creator, ["font"]);
    react.fontFace = dart.dcall(creator, ["font-face"]);
    react.fontFaceFormat = dart.dcall(creator, ["font-face-format"]);
    react.fontFaceName = dart.dcall(creator, ["font-face-name"]);
    react.fontFaceSrc = dart.dcall(creator, ["font-face-src"]);
    react.fontFaceUri = dart.dcall(creator, ["font-face-uri"]);
    react.foreignObject = dart.dcall(creator, ["foreignObject"]);
    react.g = dart.dcall(creator, ["g"]);
    react.glyph = dart.dcall(creator, ["glyph"]);
    react.glyphRef = dart.dcall(creator, ["glyphRef"]);
    react.hatch = dart.dcall(creator, ["hatch"]);
    react.hatchpath = dart.dcall(creator, ["hatchpath"]);
    react.hkern = dart.dcall(creator, ["hkern"]);
    react.image = dart.dcall(creator, ["image"]);
    react.line = dart.dcall(creator, ["line"]);
    react.linearGradient = dart.dcall(creator, ["linearGradient"]);
    react.marker = dart.dcall(creator, ["marker"]);
    react.mask = dart.dcall(creator, ["mask"]);
    react.mesh = dart.dcall(creator, ["mesh"]);
    react.meshgradient = dart.dcall(creator, ["meshgradient"]);
    react.meshpatch = dart.dcall(creator, ["meshpatch"]);
    react.meshrow = dart.dcall(creator, ["meshrow"]);
    react.metadata = dart.dcall(creator, ["metadata"]);
    react.missingGlyph = dart.dcall(creator, ["missing-glyph"]);
    react.mpath = dart.dcall(creator, ["mpath"]);
    react.path = dart.dcall(creator, ["path"]);
    react.pattern = dart.dcall(creator, ["pattern"]);
    react.polygon = dart.dcall(creator, ["polygon"]);
    react.polyline = dart.dcall(creator, ["polyline"]);
    react.radialGradient = dart.dcall(creator, ["radialGradient"]);
    react.rect = dart.dcall(creator, ["rect"]);
    react.svgSet = dart.dcall(creator, ["set"]);
    react.solidcolor = dart.dcall(creator, ["solidcolor"]);
    react.stop = dart.dcall(creator, ["stop"]);
    react.svg = dart.dcall(creator, ["svg"]);
    react.svgSwitch = dart.dcall(creator, ["switch"]);
    react.symbol = dart.dcall(creator, ["symbol"]);
    react.text = dart.dcall(creator, ["text"]);
    react.textPath = dart.dcall(creator, ["textPath"]);
    react.tref = dart.dcall(creator, ["tref"]);
    react.tspan = dart.dcall(creator, ["tspan"]);
    react.unknown = dart.dcall(creator, ["unknown"]);
    react.use = dart.dcall(creator, ["use"]);
    react.view = dart.dcall(creator, ["view"]);
    react.vkern = dart.dcall(creator, ["vkern"]);
  };
  dart.defineLazy(react, {
    /*react.Fragment*/get Fragment() {
      return new component_factory.ReactJsComponentFactoryProxy.new(dart.global.React.Fragment);
    },
    set Fragment(_) {},
    /*react.StrictMode*/get StrictMode() {
      return new component_factory.ReactJsComponentFactoryProxy.new(dart.global.React.StrictMode);
    },
    set StrictMode(_) {},
    /*react._notSpecified*/get _notSpecified() {
      return C[1] || CT.C1;
    },
    /*react.registerComponent*/get registerComponent() {
      return private_utils.validateJsApiThenReturn(T$.FunctionL(), dart.fn(() => C[6] || CT.C6, T$.VoidToFn()));
    },
    set registerComponent(_) {},
    /*react.registerComponent2*/get registerComponent2() {
      return private_utils.validateJsApiThenReturn(T$.Fn__ToLReactDartComponentFactoryProxy2LOfComponent2L(), dart.fn(() => C[7] || CT.C7, T$.VoidToFn$1()));
    },
    set registerComponent2(_) {},
    /*react.registerFunctionComponent*/get registerFunctionComponent() {
      return private_utils.validateJsApiThenReturn(T$.Fn__ToLReactDartFunctionComponentFactoryProxyL(), dart.fn(() => C[8] || CT.C8, T$.VoidToFn$2()));
    },
    set registerFunctionComponent(_) {},
    /*react.a*/get a() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("a"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set a(_) {},
    /*react.abbr*/get abbr() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("abbr"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set abbr(_) {},
    /*react.address*/get address() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("address"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set address(_) {},
    /*react.area*/get area() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("area"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set area(_) {},
    /*react.article*/get article() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("article"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set article(_) {},
    /*react.aside*/get aside() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("aside"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set aside(_) {},
    /*react.audio*/get audio() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("audio"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set audio(_) {},
    /*react.b*/get b() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("b"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set b(_) {},
    /*react.base*/get base() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("base"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set base(_) {},
    /*react.bdi*/get bdi() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("bdi"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set bdi(_) {},
    /*react.bdo*/get bdo() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("bdo"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set bdo(_) {},
    /*react.big*/get big() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("big"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set big(_) {},
    /*react.blockquote*/get blockquote() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("blockquote"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set blockquote(_) {},
    /*react.body*/get body() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("body"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set body(_) {},
    /*react.br*/get br() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("br"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set br(_) {},
    /*react.button*/get button() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("button"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set button(_) {},
    /*react.canvas*/get canvas() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("canvas"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set canvas(_) {},
    /*react.caption*/get caption() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("caption"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set caption(_) {},
    /*react.cite*/get cite() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("cite"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set cite(_) {},
    /*react.code*/get code() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("code"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set code(_) {},
    /*react.col*/get col() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("col"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set col(_) {},
    /*react.colgroup*/get colgroup() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("colgroup"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set colgroup(_) {},
    /*react.data*/get data() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("data"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set data(_) {},
    /*react.datalist*/get datalist() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("datalist"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set datalist(_) {},
    /*react.dd*/get dd() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("dd"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set dd(_) {},
    /*react.del*/get del() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("del"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set del(_) {},
    /*react.details*/get details() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("details"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set details(_) {},
    /*react.dfn*/get dfn() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("dfn"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set dfn(_) {},
    /*react.dialog*/get dialog() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("dialog"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set dialog(_) {},
    /*react.div*/get div() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("div"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set div(_) {},
    /*react.dl*/get dl() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("dl"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set dl(_) {},
    /*react.dt*/get dt() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("dt"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set dt(_) {},
    /*react.em*/get em() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("em"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set em(_) {},
    /*react.embed*/get embed() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("embed"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set embed(_) {},
    /*react.fieldset*/get fieldset() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("fieldset"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set fieldset(_) {},
    /*react.figcaption*/get figcaption() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("figcaption"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set figcaption(_) {},
    /*react.figure*/get figure() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("figure"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set figure(_) {},
    /*react.footer*/get footer() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("footer"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set footer(_) {},
    /*react.form*/get form() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("form"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set form(_) {},
    /*react.h1*/get h1() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("h1"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set h1(_) {},
    /*react.h2*/get h2() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("h2"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set h2(_) {},
    /*react.h3*/get h3() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("h3"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set h3(_) {},
    /*react.h4*/get h4() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("h4"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set h4(_) {},
    /*react.h5*/get h5() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("h5"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set h5(_) {},
    /*react.h6*/get h6() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("h6"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set h6(_) {},
    /*react.head*/get head() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("head"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set head(_) {},
    /*react.header*/get header() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("header"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set header(_) {},
    /*react.hr*/get hr() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("hr"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set hr(_) {},
    /*react.html*/get html() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("html"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set html(_) {},
    /*react.i*/get i() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("i"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set i(_) {},
    /*react.iframe*/get iframe() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("iframe"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set iframe(_) {},
    /*react.img*/get img() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("img"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set img(_) {},
    /*react.input*/get input() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("input"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set input(_) {},
    /*react.ins*/get ins() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("ins"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set ins(_) {},
    /*react.kbd*/get kbd() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("kbd"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set kbd(_) {},
    /*react.keygen*/get keygen() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("keygen"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set keygen(_) {},
    /*react.label*/get label() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("label"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set label(_) {},
    /*react.legend*/get legend() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("legend"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set legend(_) {},
    /*react.li*/get li() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("li"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set li(_) {},
    /*react.link*/get link() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("link"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set link(_) {},
    /*react.main*/get main() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("main"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set main(_) {},
    /*react.map*/get map() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("map"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set map(_) {},
    /*react.mark*/get mark() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("mark"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set mark(_) {},
    /*react.menu*/get menu() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("menu"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set menu(_) {},
    /*react.menuitem*/get menuitem() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("menuitem"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set menuitem(_) {},
    /*react.meta*/get meta() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("meta"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set meta(_) {},
    /*react.meter*/get meter() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("meter"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set meter(_) {},
    /*react.nav*/get nav() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("nav"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set nav(_) {},
    /*react.noscript*/get noscript() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("noscript"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set noscript(_) {},
    /*react.object*/get object() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("object"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set object(_) {},
    /*react.ol*/get ol() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("ol"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set ol(_) {},
    /*react.optgroup*/get optgroup() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("optgroup"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set optgroup(_) {},
    /*react.option*/get option() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("option"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set option(_) {},
    /*react.output*/get output() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("output"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set output(_) {},
    /*react.p*/get p() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("p"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set p(_) {},
    /*react.param*/get param() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("param"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set param(_) {},
    /*react.picture*/get picture() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("picture"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set picture(_) {},
    /*react.pre*/get pre() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("pre"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set pre(_) {},
    /*react.progress*/get progress() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("progress"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set progress(_) {},
    /*react.q*/get q() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("q"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set q(_) {},
    /*react.rp*/get rp() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("rp"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set rp(_) {},
    /*react.rt*/get rt() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("rt"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set rt(_) {},
    /*react.ruby*/get ruby() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("ruby"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set ruby(_) {},
    /*react.s*/get s() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("s"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set s(_) {},
    /*react.samp*/get samp() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("samp"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set samp(_) {},
    /*react.script*/get script() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("script"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set script(_) {},
    /*react.section*/get section() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("section"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set section(_) {},
    /*react.select*/get select() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("select"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set select(_) {},
    /*react.small*/get small() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("small"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set small(_) {},
    /*react.source*/get source() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("source"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set source(_) {},
    /*react.span*/get span() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("span"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set span(_) {},
    /*react.strong*/get strong() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("strong"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set strong(_) {},
    /*react.style*/get style() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("style"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set style(_) {},
    /*react.sub*/get sub() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("sub"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set sub(_) {},
    /*react.summary*/get summary() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("summary"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set summary(_) {},
    /*react.sup*/get sup() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("sup"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set sup(_) {},
    /*react.table*/get table() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("table"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set table(_) {},
    /*react.tbody*/get tbody() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("tbody"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set tbody(_) {},
    /*react.td*/get td() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("td"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set td(_) {},
    /*react.textarea*/get textarea() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("textarea"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set textarea(_) {},
    /*react.tfoot*/get tfoot() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("tfoot"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set tfoot(_) {},
    /*react.th*/get th() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("th"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set th(_) {},
    /*react.thead*/get thead() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("thead"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set thead(_) {},
    /*react.time*/get time() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("time"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set time(_) {},
    /*react.title*/get title() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("title"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set title(_) {},
    /*react.tr*/get tr() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("tr"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set tr(_) {},
    /*react.track*/get track() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("track"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set track(_) {},
    /*react.u*/get u() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("u"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set u(_) {},
    /*react.ul*/get ul() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("ul"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set ul(_) {},
    /*react.variable*/get variable() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("var"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set variable(_) {},
    /*react.video*/get video() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("video"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set video(_) {},
    /*react.wbr*/get wbr() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("wbr"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set wbr(_) {},
    /*react.altGlyph*/get altGlyph() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("altGlyph"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set altGlyph(_) {},
    /*react.altGlyphDef*/get altGlyphDef() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("altGlyphDef"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set altGlyphDef(_) {},
    /*react.altGlyphItem*/get altGlyphItem() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("altGlyphItem"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set altGlyphItem(_) {},
    /*react.animate*/get animate() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("animate"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set animate(_) {},
    /*react.animateColor*/get animateColor() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("animateColor"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set animateColor(_) {},
    /*react.animateMotion*/get animateMotion() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("animateMotion"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set animateMotion(_) {},
    /*react.animateTransform*/get animateTransform() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("animateTransform"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set animateTransform(_) {},
    /*react.circle*/get circle() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("circle"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set circle(_) {},
    /*react.clipPath*/get clipPath() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("clipPath"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set clipPath(_) {},
    /*react.colorProfile*/get colorProfile() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("color-profile"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set colorProfile(_) {},
    /*react.cursor*/get cursor() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("cursor"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set cursor(_) {},
    /*react.defs*/get defs() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("defs"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set defs(_) {},
    /*react.desc*/get desc() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("desc"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set desc(_) {},
    /*react.discard*/get discard() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("discard"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set discard(_) {},
    /*react.ellipse*/get ellipse() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("ellipse"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set ellipse(_) {},
    /*react.feBlend*/get feBlend() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feBlend"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feBlend(_) {},
    /*react.feColorMatrix*/get feColorMatrix() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feColorMatrix"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feColorMatrix(_) {},
    /*react.feComponentTransfer*/get feComponentTransfer() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feComponentTransfer"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feComponentTransfer(_) {},
    /*react.feComposite*/get feComposite() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feComposite"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feComposite(_) {},
    /*react.feConvolveMatrix*/get feConvolveMatrix() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feConvolveMatrix"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feConvolveMatrix(_) {},
    /*react.feDiffuseLighting*/get feDiffuseLighting() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feDiffuseLighting"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feDiffuseLighting(_) {},
    /*react.feDisplacementMap*/get feDisplacementMap() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feDisplacementMap"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feDisplacementMap(_) {},
    /*react.feDistantLight*/get feDistantLight() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feDistantLight"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feDistantLight(_) {},
    /*react.feDropShadow*/get feDropShadow() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feDropShadow"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feDropShadow(_) {},
    /*react.feFlood*/get feFlood() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feFlood"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feFlood(_) {},
    /*react.feFuncA*/get feFuncA() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feFuncA"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feFuncA(_) {},
    /*react.feFuncB*/get feFuncB() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feFuncB"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feFuncB(_) {},
    /*react.feFuncG*/get feFuncG() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feFuncG"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feFuncG(_) {},
    /*react.feFuncR*/get feFuncR() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feFuncR"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feFuncR(_) {},
    /*react.feGaussianBlur*/get feGaussianBlur() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feGaussianBlur"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feGaussianBlur(_) {},
    /*react.feImage*/get feImage() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feImage"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feImage(_) {},
    /*react.feMerge*/get feMerge() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feMerge"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feMerge(_) {},
    /*react.feMergeNode*/get feMergeNode() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feMergeNode"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feMergeNode(_) {},
    /*react.feMorphology*/get feMorphology() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feMorphology"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feMorphology(_) {},
    /*react.feOffset*/get feOffset() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feOffset"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feOffset(_) {},
    /*react.fePointLight*/get fePointLight() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("fePointLight"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set fePointLight(_) {},
    /*react.feSpecularLighting*/get feSpecularLighting() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feSpecularLighting"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feSpecularLighting(_) {},
    /*react.feSpotLight*/get feSpotLight() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feSpotLight"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feSpotLight(_) {},
    /*react.feTile*/get feTile() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feTile"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feTile(_) {},
    /*react.feTurbulence*/get feTurbulence() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("feTurbulence"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set feTurbulence(_) {},
    /*react.filter*/get filter() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("filter"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set filter(_) {},
    /*react.font*/get font() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("font"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set font(_) {},
    /*react.fontFace*/get fontFace() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("font-face"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set fontFace(_) {},
    /*react.fontFaceFormat*/get fontFaceFormat() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("font-face-format"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set fontFaceFormat(_) {},
    /*react.fontFaceName*/get fontFaceName() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("font-face-name"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set fontFaceName(_) {},
    /*react.fontFaceSrc*/get fontFaceSrc() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("font-face-src"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set fontFaceSrc(_) {},
    /*react.fontFaceUri*/get fontFaceUri() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("font-face-uri"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set fontFaceUri(_) {},
    /*react.foreignObject*/get foreignObject() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("foreignObject"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set foreignObject(_) {},
    /*react.g*/get g() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("g"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set g(_) {},
    /*react.glyph*/get glyph() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("glyph"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set glyph(_) {},
    /*react.glyphRef*/get glyphRef() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("glyphRef"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set glyphRef(_) {},
    /*react.hatch*/get hatch() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("hatch"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set hatch(_) {},
    /*react.hatchpath*/get hatchpath() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("hatchpath"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set hatchpath(_) {},
    /*react.hkern*/get hkern() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("hkern"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set hkern(_) {},
    /*react.image*/get image() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("image"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set image(_) {},
    /*react.line*/get line() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("line"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set line(_) {},
    /*react.linearGradient*/get linearGradient() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("linearGradient"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set linearGradient(_) {},
    /*react.marker*/get marker() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("marker"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set marker(_) {},
    /*react.mask*/get mask() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("mask"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set mask(_) {},
    /*react.mesh*/get mesh() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("mesh"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set mesh(_) {},
    /*react.meshgradient*/get meshgradient() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("meshgradient"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set meshgradient(_) {},
    /*react.meshpatch*/get meshpatch() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("meshpatch"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set meshpatch(_) {},
    /*react.meshrow*/get meshrow() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("meshrow"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set meshrow(_) {},
    /*react.metadata*/get metadata() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("metadata"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set metadata(_) {},
    /*react.missingGlyph*/get missingGlyph() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("missing-glyph"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set missingGlyph(_) {},
    /*react.mpath*/get mpath() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("mpath"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set mpath(_) {},
    /*react.path*/get path() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("path"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set path(_) {},
    /*react.pattern*/get pattern() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("pattern"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set pattern(_) {},
    /*react.polygon*/get polygon() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("polygon"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set polygon(_) {},
    /*react.polyline*/get polyline() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("polyline"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set polyline(_) {},
    /*react.radialGradient*/get radialGradient() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("radialGradient"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set radialGradient(_) {},
    /*react.rect*/get rect() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("rect"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set rect(_) {},
    /*react.svgSet*/get svgSet() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("set"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set svgSet(_) {},
    /*react.solidcolor*/get solidcolor() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("solidcolor"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set solidcolor(_) {},
    /*react.stop*/get stop() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("stop"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set stop(_) {},
    /*react.svg*/get svg() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("svg"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set svg(_) {},
    /*react.svgSwitch*/get svgSwitch() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("switch"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set svgSwitch(_) {},
    /*react.symbol*/get symbol() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("symbol"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set symbol(_) {},
    /*react.text*/get text() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("text"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set text(_) {},
    /*react.textPath*/get textPath() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("textPath"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set textPath(_) {},
    /*react.tref*/get tref() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("tref"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set tref(_) {},
    /*react.tspan*/get tspan() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("tspan"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set tspan(_) {},
    /*react.unknown*/get unknown() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("unknown"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set unknown(_) {},
    /*react.use*/get use() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("use"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set use(_) {},
    /*react.view*/get view() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("view"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set view(_) {},
    /*react.vkern*/get vkern() {
      return private_utils.validateJsApiThenReturn(T$.ReactDomComponentFactoryProxyL(), dart.fn(() => new component_factory.ReactDomComponentFactoryProxy.new("vkern"), T$.VoidToReactDomComponentFactoryProxyL()));
    },
    set vkern(_) {}
  }, true);
  var Provider$ = dart.privateName(context$, "Context.Provider");
  var Consumer$ = dart.privateName(context$, "Context.Consumer");
  var _jsThis$0 = dart.privateName(context$, "_jsThis");
  const _is_Context_default = Symbol('_is_Context_default');
  context$.Context$ = dart.generic(T => {
    class Context extends core.Object {
      get Provider() {
        return this[Provider$];
      }
      set Provider(value) {
        super.Provider = value;
      }
      get Consumer() {
        return this[Consumer$];
      }
      set Consumer(value) {
        super.Consumer = value;
      }
      get jsThis() {
        return this[_jsThis$0];
      }
    }
    (Context.new = function(Provider, Consumer, _jsThis) {
      this[Provider$] = Provider;
      this[Consumer$] = Consumer;
      this[_jsThis$0] = _jsThis;
      ;
    }).prototype = Context.prototype;
    dart.addTypeTests(Context);
    Context.prototype[_is_Context_default] = true;
    dart.addTypeCaches(Context);
    dart.setGetterSignature(Context, () => ({
      __proto__: dart.getGetters(Context.__proto__),
      jsThis: dart.legacy(dart.anonymousJSType("ReactContext"))
    }));
    dart.setLibraryUri(Context, I[6]);
    dart.setFieldSignature(Context, () => ({
      __proto__: dart.getFields(Context.__proto__),
      [_jsThis$0]: dart.finalFieldType(dart.legacy(dart.anonymousJSType("ReactContext"))),
      Provider: dart.finalFieldType(dart.legacy(component_factory.ReactJsContextComponentFactoryProxy)),
      Consumer: dart.finalFieldType(dart.legacy(component_factory.ReactJsContextComponentFactoryProxy))
    }));
    return Context;
  });
  context$.Context = context$.Context$();
  dart.addTypeTests(context$.Context, _is_Context_default);
  context$.ContextHelpers = class ContextHelpers extends core.Object {
    static jsifyNewContext(context) {
      let jsContextHolder = js_util.newObject();
      js_util.setProperty(jsContextHolder, dart.global._reactDartContextSymbol, private_utils.DartValueWrapper.wrapIfNeeded(context));
      return jsContextHolder;
    }
    static unjsifyNewContext(interopContext) {
      if (interopContext != null && dart.test(js_util.hasProperty(interopContext, dart.global._reactDartContextSymbol))) {
        return private_utils.DartValueWrapper.unwrapIfNeeded(interopContext[dart.global._reactDartContextSymbol]);
      }
      return interopContext;
    }
  };
  (context$.ContextHelpers.new = function() {
    ;
  }).prototype = context$.ContextHelpers.prototype;
  dart.addTypeTests(context$.ContextHelpers);
  dart.addTypeCaches(context$.ContextHelpers);
  dart.setLibraryUri(context$.ContextHelpers, I[6]);
  context$.createContext = function createContext(TValue, defaultValue = null, calculateChangedBits = null) {
    function jsifyCalculateChangedBitsArgs(currentValue, nextValue) {
      return calculateChangedBits(dart.legacy(TValue).as(context$.ContextHelpers.unjsifyNewContext(currentValue)), dart.legacy(TValue).as(context$.ContextHelpers.unjsifyNewContext(nextValue)));
    }
    dart.fn(jsifyCalculateChangedBitsArgs, T$.dynamicAnddynamicTointL());
    let JSContext = dart.global.React.createContext(context$.ContextHelpers.jsifyNewContext(defaultValue), dart.assertInterop(calculateChangedBits != null ? js.allowInterop(T$.dynamicAnddynamicToLintL(), jsifyCalculateChangedBitsArgs) : null));
    return new (context$.Context$(dart.legacy(TValue))).new(new component_factory.ReactJsContextComponentFactoryProxy.new(JSContext.Provider, {isProvider: true}), new component_factory.ReactJsContextComponentFactoryProxy.new(JSContext.Consumer, {isConsumer: true}), JSContext);
  };
  component_registration._filterSkipMethods = function _filterSkipMethods(methods) {
    let finalList = T$.ListOfStringL().from(methods);
    let shouldWarn = false;
    if (dart.test(finalList[$contains]("shouldComponentUpdate"))) {
      finalList[$remove]("shouldComponentUpdate");
      shouldWarn = true;
    }
    if (dart.test(finalList[$contains]("componentDidUpdate"))) {
      finalList[$remove]("componentDidUpdate");
      shouldWarn = true;
    }
    if (dart.test(finalList[$contains]("render"))) {
      finalList[$remove]("render");
      shouldWarn = true;
    }
    if (shouldWarn) {
      html.window[$console].warn("WARNING: Crucial lifecycle methods passed into " + "skipMethods. shouldComponentUpdate, componentDidUpdate, and render " + "cannot be skipped and will still be added to the new component. Please " + "remove them from skipMethods.");
    }
    return finalList;
  };
  component_registration.registerComponent = function registerComponent(componentFactory, skipMethods = C[9] || CT.C9) {
    let t4;
    try {
      let componentInstance = componentFactory();
      if (T$.Component2L().is(componentInstance)) {
        return component_registration.registerComponent2(T$.VoidToLComponent2L().as(componentFactory), {skipMethods: skipMethods});
      }
      let componentStatics = new react_interop.ComponentStatics.new(componentFactory);
      let jsConfig = {childContextKeys: componentInstance.childContextKeys, contextKeys: componentInstance.contextKeys};
      let displayName = componentInstance.displayName;
      let reactComponentClass = (t4 = dart.global._createReactDartComponentClass(dart_interop_statics.dartInteropStatics, componentStatics, jsConfig), (() => {
        t4.dartComponentVersion = "1";
        t4.displayName = displayName;
        return t4;
      })());
      dart.global.Object.defineProperty(reactComponentClass, "name", {value: displayName});
      let defaultProps = core.Map.unmodifiable(componentInstance.getDefaultProps());
      reactComponentClass.dartDefaultProps = defaultProps;
      return new (T$.ReactDartComponentFactoryProxyOfComponentL()).new(reactComponentClass);
    } catch (e$) {
      let e = dart.getThrown(e$);
      let stack = dart.stackTrace(e$);
      core.print("Error when registering Component: " + dart.str(e) + "\n" + dart.str(stack));
      dart.rethrow(e$);
    }
  };
  component_registration.registerComponent2 = function registerComponent2(componentFactory, opts) {
    let t7, t7$, t7$0;
    let skipMethods = opts && 'skipMethods' in opts ? opts.skipMethods : C[9] || CT.C9;
    let bridgeFactory = opts && 'bridgeFactory' in opts ? opts.bridgeFactory : null;
    let errorPrinted = false;
    try {
      bridgeFactory == null ? bridgeFactory = C[10] || CT.C10 : null;
      let componentInstance = componentFactory();
      let componentStatics = new react_interop.ComponentStatics2.new({componentFactory: componentFactory, instanceForStaticMethods: componentInstance, bridgeFactory: bridgeFactory});
      let filteredSkipMethods = component_registration._filterSkipMethods(skipMethods);
      let defaultProps = null;
      try {
        defaultProps = js_backed_map.JsBackedMap.from(componentInstance.defaultProps);
      } catch (e$) {
        let e = dart.getThrown(e$);
        let stack = dart.stackTrace(e$);
        core.print("Error when registering Component2 when getting defaultProps: " + dart.str(e) + "\n" + dart.str(stack));
        errorPrinted = true;
        dart.rethrow(e$);
      }
      let jsPropTypes = null;
      try {
        if (!dart.test(dart.fn(() => {
          jsPropTypes = bridgeFactory(componentInstance).jsifyPropTypes(componentInstance, componentInstance.propTypes);
          return true;
        }, T$.VoidToboolL())())) dart.assertFailed(null, I[7], 132, 14, "() {\n        jsPropTypes = bridgeFactory(componentInstance).jsifyPropTypes(componentInstance, componentInstance.propTypes);\n        return true;\n      }()");
      } catch (e$0) {
        let e = dart.getThrown(e$0);
        let stack = dart.stackTrace(e$0);
        core.print("Error when registering Component2 when getting propTypes: " + dart.str(e) + "\n" + dart.str(stack));
        errorPrinted = true;
        dart.rethrow(e$0);
      }
      let jsConfig2 = {defaultProps: defaultProps.jsObject, contextType: (t7 = componentInstance.contextType, t7 == null ? null : t7.jsThis), skipMethods: filteredSkipMethods, propTypes: (t7$ = jsPropTypes, t7$ == null ? new js_backed_map.JsBackedMap.new().jsObject : t7$)};
      let displayName = componentInstance.displayName;
      let reactComponentClass = (t7$0 = dart.global._createReactDartComponentClass2(dart_interop_statics.ReactDartInteropStatics2.staticsForJs, componentStatics, jsConfig2), (() => {
        t7$0.displayName = displayName;
        return t7$0;
      })());
      dart.global.Object.defineProperty(reactComponentClass, "name", {value: displayName});
      reactComponentClass.dartComponentVersion = "2";
      return new (T$.ReactDartComponentFactoryProxy2OfComponent2L()).new(reactComponentClass);
    } catch (e$1) {
      let e = dart.getThrown(e$1);
      let stack = dart.stackTrace(e$1);
      if (!errorPrinted) core.print("Error when registering Component2: " + dart.str(e) + "\n" + dart.str(stack));
      dart.rethrow(e$1);
    }
  };
  component_registration.registerFunctionComponent = function registerFunctionComponent(dartFunctionComponent, opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    return new component_factory.ReactDartFunctionComponentFactoryProxy.new(dartFunctionComponent, {displayName: displayName});
  };
  dart_interop_statics.ReactDartInteropStatics2 = class ReactDartInteropStatics2 extends core.Object {
    static _updatePropsAndStateWithJs(component, props, state) {
      let t8;
      t8 = component;
      (() => {
        t8.props = new js_backed_map.JsBackedMap.backedBy(props);
        t8.state = new js_backed_map.JsBackedMap.backedBy(state);
        return t8;
      })();
    }
    static _updateContextWithJs(component, jsContext) {
      component.context = context$.ContextHelpers.unjsifyNewContext(jsContext);
    }
    static initComponent(jsThis, componentStatics) {
      return zone.componentZone.run(T$.Component2L(), dart.fn(() => {
        let t8, t9, t8$;
        let component = componentStatics.componentFactory();
        t8 = component;
        (() => {
          t8.jsThis = jsThis;
          t8.props = new js_backed_map.JsBackedMap.backedBy(jsThis.props);
          t8.context = context$.ContextHelpers.unjsifyNewContext(jsThis.context);
          return t8;
        })();
        jsThis.state = js_backed_map.jsBackingMapOrJsCopy(component.initialState);
        component.state = new js_backed_map.JsBackedMap.backedBy(jsThis.state);
        bridge.Component2Bridge.bridgeForComponent._set(component, (t8$ = componentStatics, t9 = component, t8$.bridgeFactory(t9)));
        return component;
      }, T$.VoidToComponent2L()));
    }
    static handleComponentDidMount(component) {
      return zone.componentZone.run(dart.void, dart.fn(() => {
        component.componentDidMount();
      }, T$.VoidToNull()));
    }
    static handleShouldComponentUpdate(component, jsNextProps, jsNextState) {
      return zone.componentZone.run(T$.boolL(), dart.fn(() => {
        let value = component.shouldComponentUpdate(new js_backed_map.JsBackedMap.backedBy(jsNextProps), new js_backed_map.JsBackedMap.backedBy(jsNextState));
        if (!dart.test(value)) {
          dart_interop_statics.ReactDartInteropStatics2._updatePropsAndStateWithJs(component, jsNextProps, jsNextState);
        }
        return value;
      }, T$.VoidToboolL()));
    }
    static handleGetDerivedStateFromProps(componentStatics, jsNextProps, jsPrevState) {
      return zone.componentZone.run(dart.legacy(dart.anonymousJSType("JsMap")), dart.fn(() => {
        let derivedState = componentStatics.instanceForStaticMethods.getDerivedStateFromProps(new js_backed_map.JsBackedMap.backedBy(jsNextProps), new js_backed_map.JsBackedMap.backedBy(jsPrevState));
        if (derivedState != null) {
          return js_backed_map.jsBackingMapOrJsCopy(derivedState);
        }
        return null;
      }, T$.VoidToJsMapL()));
    }
    static handleGetSnapshotBeforeUpdate(component, jsPrevProps, jsPrevState) {
      return zone.componentZone.run(dart.dynamic, dart.fn(() => {
        let snapshotValue = component.getSnapshotBeforeUpdate(new js_backed_map.JsBackedMap.backedBy(jsPrevProps), new js_backed_map.JsBackedMap.backedBy(jsPrevState));
        return snapshotValue;
      }, T$.VoidTodynamic()));
    }
    static handleComponentDidUpdate(component, jsThis, jsPrevProps, jsPrevState, snapshot = null) {
      return zone.componentZone.run(dart.void, dart.fn(() => {
        component.componentDidUpdate(new js_backed_map.JsBackedMap.backedBy(jsPrevProps), new js_backed_map.JsBackedMap.backedBy(jsPrevState), snapshot);
      }, T$.VoidToNull()));
    }
    static handleComponentWillUnmount(component) {
      return zone.componentZone.run(dart.void, dart.fn(() => {
        component.componentWillUnmount();
      }, T$.VoidToNull()));
    }
    static handleComponentDidCatch(component, error, info) {
      return zone.componentZone.run(dart.void, dart.fn(() => {
        try {
          dart.global._throwErrorFromJS(error);
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          info.dartStackTrace = stack;
          component.componentDidCatch(e, info);
        }
      }, T$.VoidToNull()));
    }
    static handleGetDerivedStateFromError(componentStatics, error) {
      return zone.componentZone.run(dart.legacy(dart.anonymousJSType("JsMap")), dart.fn(() => {
        try {
          dart.global._throwErrorFromJS(error);
        } catch (e$) {
          let e = dart.getThrown(e$);
          let result = componentStatics.instanceForStaticMethods.getDerivedStateFromError(e);
          if (result != null) return js_backed_map.jsBackingMapOrJsCopy(result);
          return null;
        }
      }, T$.VoidToJsMapL()));
    }
    static handleRender(component, jsProps, jsState, jsContext) {
      return zone.componentZone.run(dart.dynamic, dart.fn(() => {
        dart_interop_statics.ReactDartInteropStatics2._updatePropsAndStateWithJs(component, jsProps, jsState);
        dart_interop_statics.ReactDartInteropStatics2._updateContextWithJs(component, jsContext);
        return component.render();
      }, T$.VoidTodynamic()));
    }
  };
  (dart_interop_statics.ReactDartInteropStatics2.new = function() {
    ;
  }).prototype = dart_interop_statics.ReactDartInteropStatics2.prototype;
  dart.addTypeTests(dart_interop_statics.ReactDartInteropStatics2);
  dart.addTypeCaches(dart_interop_statics.ReactDartInteropStatics2);
  dart.setLibraryUri(dart_interop_statics.ReactDartInteropStatics2, I[8]);
  dart.defineLazy(dart_interop_statics.ReactDartInteropStatics2, {
    /*dart_interop_statics.ReactDartInteropStatics2.staticsForJs*/get staticsForJs() {
      return dart.legacy(dart.anonymousJSType("JsMap")).as(js_interop_helpers.jsifyAndAllowInterop(new (T$.IdentityMapOfStringL$FunctionL()).from(["initComponent", C[11] || CT.C11, "handleComponentDidMount", C[12] || CT.C12, "handleGetDerivedStateFromProps", C[13] || CT.C13, "handleShouldComponentUpdate", C[14] || CT.C14, "handleGetSnapshotBeforeUpdate", C[15] || CT.C15, "handleComponentDidUpdate", C[16] || CT.C16, "handleComponentWillUnmount", C[17] || CT.C17, "handleComponentDidCatch", C[18] || CT.C18, "handleGetDerivedStateFromError", C[19] || CT.C19, "handleRender", C[20] || CT.C20])));
    }
  }, true);
  dart.defineLazy(dart_interop_statics, {
    /*dart_interop_statics.dartInteropStatics*/get dartInteropStatics() {
      return dart.fn(() => {
        let zone = async.Zone.current;
        function initComponent(jsThis, internal, context, componentStatics) {
          return zone.run(T$.ComponentL(), dart.fn(() => {
            let t10;
            function jsRedraw() {
              jsThis.setState(js_util.newObject());
            }
            dart.fn(jsRedraw, T$.VoidTovoid());
            let getRef = dart.fn(name => {
              let t10;
              let ref = jsThis.refs[name];
              if (ref == null) return null;
              if (T$.ElementL().is(ref)) return ref;
              if (dart.legacy(dart.anonymousJSType("ReactComponent")).is(ref)) {
                t10 = ref.dartComponent;
                return t10 == null ? ref : t10;
              }
              return ref;
            }, T$.StringLTodynamic());
            let component = (t10 = componentStatics.componentFactory(), (() => {
              t10.initComponentInternal(internal.props, jsRedraw, getRef, jsThis, private_utils.unjsifyContext(context));
              t10.initStateInternal();
              return t10;
            })());
            return component;
          }, T$.VoidToComponentL()));
        }
        dart.fn(initComponent, T$.ReactComponentLAndReactDartComponentInternalLAndInteropContextValueL__ToComponentL());
        function handleGetChildContext(component) {
          return zone.run(dart.legacy(dart.anonymousJSType("InteropContextValue")), dart.fn(() => private_utils.jsifyContext(component.getChildContext()), T$.VoidToInteropContextValueL()));
        }
        dart.fn(handleGetChildContext, T$.ComponentLToInteropContextValueL());
        function handleComponentWillMount(component) {
          return zone.run(dart.void, dart.fn(() => {
            let t10;
            t10 = component;
            (() => {
              t10.componentWillMount();
              t10.transferComponentState();
              return t10;
            })();
          }, T$.VoidToNull()));
        }
        dart.fn(handleComponentWillMount, T$.ComponentLTovoid());
        function handleComponentDidMount(component) {
          return zone.run(dart.void, dart.fn(() => {
            component.componentDidMount();
          }, T$.VoidToNull()));
        }
        dart.fn(handleComponentDidMount, T$.ComponentLTovoid());
        function _getNextProps(component, nextInternal) {
          let newProps = nextInternal.props;
          return newProps != null ? collection.LinkedHashMap.from(newProps) : new _js_helper.LinkedMap.new();
        }
        dart.fn(_getNextProps, T$.ComponentLAndReactDartComponentInternalLToMapL());
        function _afterPropsChange(component, nextContext) {
          let t10;
          t10 = component;
          (() => {
            t10.props = component.nextProps;
            t10.context = component.nextContext;
            t10.transferComponentState();
            return t10;
          })();
        }
        dart.fn(_afterPropsChange, T$.ComponentLAndInteropContextValueLTovoid());
        function _clearPrevState(component) {
          component.prevState = null;
        }
        dart.fn(_clearPrevState, T$.ComponentLTovoid());
        function _callSetStateCallbacks(component) {
          let callbacks = component.setStateCallbacks[$toList]();
          component.setStateCallbacks[$clear]();
          callbacks[$forEach](dart.fn(callback => {
            dart.dcall(callback, []);
          }, T$.dynamicToNull()));
        }
        dart.fn(_callSetStateCallbacks, T$.ComponentLTovoid());
        function _callSetStateTransactionalCallbacks(component) {
          let nextState = component.nextState;
          let props = new collection.UnmodifiableMapView.new(component.props);
          component.transactionalSetStateCallbacks[$forEach](dart.fn(callback => {
            let stateUpdates = dart.dcall(callback, [nextState, props]);
            if (stateUpdates != null) nextState[$addAll](T$.MapL().as(stateUpdates));
          }, T$.dynamicToNull()));
          component.transactionalSetStateCallbacks[$clear]();
        }
        dart.fn(_callSetStateTransactionalCallbacks, T$.ComponentLTovoid());
        function handleComponentWillReceiveProps(component, nextInternal, nextContext) {
          return zone.run(dart.void, dart.fn(() => {
            let t10;
            let nextProps = _getNextProps(component, nextInternal);
            let newContext = private_utils.unjsifyContext(nextContext);
            t10 = component;
            (() => {
              t10.nextProps = nextProps;
              t10.nextContext = newContext;
              t10.componentWillReceiveProps(nextProps);
              t10.componentWillReceivePropsWithContext(nextProps, newContext);
              return t10;
            })();
          }, T$.VoidToNull()));
        }
        dart.fn(handleComponentWillReceiveProps, T$.ComponentLAndReactDartComponentInternalLAndInteropContextValueLTovoid());
        function handleShouldComponentUpdate(component, nextContext) {
          return zone.run(T$.boolL(), dart.fn(() => {
            _callSetStateTransactionalCallbacks(component);
            let shouldUpdate = component.shouldComponentUpdateWithContext(component.nextProps, component.nextState, component.nextContext);
            if (shouldUpdate == null) {
              shouldUpdate = component.shouldComponentUpdate(component.nextProps, component.nextState);
            }
            if (dart.test(shouldUpdate)) {
              return true;
            } else {
              _afterPropsChange(component, nextContext);
              _callSetStateCallbacks(component);
              _clearPrevState(component);
              return false;
            }
          }, T$.VoidToboolL()));
        }
        dart.fn(handleShouldComponentUpdate, T$.ComponentLAndInteropContextValueLToboolL());
        function handleComponentWillUpdate(component, nextContext) {
          return zone.run(dart.void, dart.fn(() => {
            let t10;
            t10 = component;
            (() => {
              t10.componentWillUpdate(component.nextProps, component.nextState);
              t10.componentWillUpdateWithContext(component.nextProps, component.nextState, component.nextContext);
              return t10;
            })();
            _afterPropsChange(component, nextContext);
          }, T$.VoidToNull()));
        }
        dart.fn(handleComponentWillUpdate, T$.ComponentLAndInteropContextValueLTovoid());
        function handleComponentDidUpdate(component, prevInternal) {
          return zone.run(dart.void, dart.fn(() => {
            let prevInternalProps = prevInternal.props;
            component.componentDidUpdate(prevInternalProps, component.prevState);
            _callSetStateCallbacks(component);
            _clearPrevState(component);
          }, T$.VoidToNull()));
        }
        dart.fn(handleComponentDidUpdate, T$.ComponentLAndReactDartComponentInternalLTovoid());
        function handleComponentWillUnmount(component) {
          return zone.run(dart.void, dart.fn(() => {
            component.componentWillUnmount();
            component.setStateCallbacks[$clear]();
            component.transactionalSetStateCallbacks[$clear]();
          }, T$.VoidToNull()));
        }
        dart.fn(handleComponentWillUnmount, T$.ComponentLTovoid());
        function handleRender(component) {
          return zone.run(dart.dynamic, dart.fn(() => component.render(), T$.VoidTodynamic()));
        }
        dart.fn(handleRender, T$.ComponentLTodynamic());
        return {initComponent: js.allowInterop(T$.ReactComponentLAndReactDartComponentInternalLAndInteropContextValueL__ToLComponentL(), initComponent), handleGetChildContext: js.allowInterop(T$.ComponentLToLInteropContextValueL(), handleGetChildContext), handleComponentWillMount: js.allowInterop(T$.ComponentLToLvoid(), handleComponentWillMount), handleComponentDidMount: js.allowInterop(T$.ComponentLToLvoid(), handleComponentDidMount), handleComponentWillReceiveProps: js.allowInterop(T$.ComponentLAndReactDartComponentInternalLAndInteropContextValueLToLvoid(), handleComponentWillReceiveProps), handleShouldComponentUpdate: js.allowInterop(T$.ComponentLAndInteropContextValueLToLboolL(), handleShouldComponentUpdate), handleComponentWillUpdate: js.allowInterop(T$.ComponentLAndInteropContextValueLToLvoid(), handleComponentWillUpdate), handleComponentDidUpdate: js.allowInterop(T$.ComponentLAndReactDartComponentInternalLToLvoid(), handleComponentDidUpdate), handleComponentWillUnmount: js.allowInterop(T$.ComponentLToLvoid(), handleComponentWillUnmount), handleRender: js.allowInterop(T$.ComponentLToLdynamic(), handleRender)};
      }, T$.VoidToReactDartInteropStaticsL())();
    }
  }, true);
  bridge.Component2Bridge = class Component2Bridge extends core.Object {
    static forComponent(component) {
      return bridge.Component2Bridge.bridgeForComponent._get(component);
    }
  };
  (bridge.Component2Bridge.new = function() {
    ;
  }).prototype = bridge.Component2Bridge.prototype;
  dart.addTypeTests(bridge.Component2Bridge);
  dart.addTypeCaches(bridge.Component2Bridge);
  dart.setLibraryUri(bridge.Component2Bridge, I[9]);
  dart.defineLazy(bridge.Component2Bridge, {
    /*bridge.Component2Bridge.bridgeForComponent*/get bridgeForComponent() {
      return new (T$.ExpandoOfComponent2BridgeL()).new();
    }
  }, true);
  bridge.Component2BridgeImpl = class Component2BridgeImpl extends bridge.Component2Bridge {
    static bridgeFactory(_) {
      return C[21] || CT.C21;
    }
    forceUpdate(component, callback) {
      if (callback == null) {
        component.jsThis.forceUpdate();
      } else {
        component.jsThis.forceUpdate(js.allowInterop(T$.VoidToLdynamic(), callback));
      }
    }
    setState(component, newState, callback) {
      if (newState == null) return;
      let firstArg = js_backed_map.jsBackingMapOrJsCopy(newState);
      if (callback == null) {
        component.jsThis.setState(firstArg);
      } else {
        component.jsThis.setState(firstArg, js.allowInterop(T$.dynamicToLNull(), dart.fn((_ = null) => {
          callback();
        }, T$.dynamicToNull$1())));
      }
    }
    setStateWithUpdater(component, stateUpdater, callback) {
      let firstArg = js.allowInterop(T$.JsMapLAndJsMapLAnddynamicToLJsMapL(), dart.fn((jsPrevState, jsProps, _ = null) => {
        let value = stateUpdater(new js_backed_map.JsBackedMap.backedBy(jsPrevState), new js_backed_map.JsBackedMap.backedBy(jsProps));
        if (value == null) return null;
        return js_backed_map.jsBackingMapOrJsCopy(value);
      }, T$.JsMapLAndJsMapLAnddynamicToJsMapL()));
      if (callback == null) {
        component.jsThis.setState(dart.assertInterop(firstArg));
      } else {
        component.jsThis.setState(dart.assertInterop(firstArg), js.allowInterop(T$.dynamicToLNull(), dart.fn((_ = null) => {
          callback();
        }, T$.dynamicToNull$1())));
      }
    }
    jsifyPropTypes(component, propTypes) {
      T$.Component2L().as(component);
      T$.MapLOfStringL$FunctionL().as(propTypes);
      return js_backed_map.JsBackedMap.from(propTypes[$map](dart.dynamic, dart.dynamic, dart.fn((propKey, validator) => {
        function handlePropValidator(props, propName, componentName, location, propFullName, secret) {
          let convertedProps = js_backed_map.JsBackedMap.fromJs(props);
          let error = dart.dcall(validator, [convertedProps, new prop_validator.PropValidatorInfo.new({propName: propName, componentName: componentName, location: location, propFullName: propFullName})]);
          return error == null ? null : new dart.global.Error(dart.toString(error));
        }
        dart.fn(handlePropValidator, T$.JsMapLAndStringLAndStringL__Todynamic());
        return new core.MapEntry.__(propKey, js.allowInterop(T$.JsMapLAndStringLAndStringL__ToLdynamic(), handlePropValidator));
      }, T$.StringLAndFunctionLToMapEntryL()))).jsObject;
    }
  };
  (bridge.Component2BridgeImpl.new = function() {
    bridge.Component2BridgeImpl.__proto__.new.call(this);
    ;
  }).prototype = bridge.Component2BridgeImpl.prototype;
  dart.addTypeTests(bridge.Component2BridgeImpl);
  dart.addTypeCaches(bridge.Component2BridgeImpl);
  dart.setMethodSignature(bridge.Component2BridgeImpl, () => ({
    __proto__: dart.getMethods(bridge.Component2BridgeImpl.__proto__),
    forceUpdate: dart.fnType(dart.void, [dart.legacy(react.Component2), dart.legacy(dart.fnType(dart.dynamic, []))]),
    setState: dart.fnType(dart.void, [dart.legacy(react.Component2), dart.legacy(core.Map), dart.legacy(dart.fnType(dart.dynamic, []))]),
    setStateWithUpdater: dart.fnType(dart.void, [dart.legacy(react.Component2), dart.legacy(dart.fnType(dart.legacy(core.Map), [dart.legacy(core.Map), dart.legacy(core.Map)])), dart.legacy(dart.fnType(dart.dynamic, []))]),
    jsifyPropTypes: dart.fnType(dart.legacy(dart.anonymousJSType("JsMap")), [dart.legacy(core.Object), dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(bridge.Component2BridgeImpl, I[9]);
  react_client.setClientConfiguration = function setClientConfiguration() {
  };
  chain_refs.chainRefs = function chainRefs(ref1, ref2) {
    return chain_refs.chainRefList([ref1, ref2]);
  };
  chain_refs.chainRefList = function chainRefList(refs) {
    let nonNullRefs = refs[$where](dart.fn(ref => ref != null, T$.dynamicToboolL()))[$toList]({growable: false});
    if (!dart.test(dart.fn(() => {
      nonNullRefs[$forEach](C[22] || CT.C22);
      return true;
    }, T$.VoidToboolL())())) dart.assertFailed(null, I[10], 37, 10, "() {\n    nonNullRefs.forEach(_validateChainRefsArg);\n    return true;\n  }()");
    if (dart.test(nonNullRefs[$isEmpty])) return null;
    if (nonNullRefs[$length] === 1) return nonNullRefs[$_get](0);
    function _chainedRef(value) {
      for (let ref of nonNullRefs) {
        if (T$.FunctionL().is(ref)) {
          dart.dcall(ref, [value]);
        } else if (T$.RefL().is(ref)) {
          ref.current = value;
        } else {
          dart.legacy(dart.anonymousJSType("JsRef")).as(ref).current = T$.ComponentL().is(value) ? value.jsThis : value;
        }
      }
    }
    dart.fn(_chainedRef, T$.dynamicTovoid());
    return _chainedRef;
  };
  chain_refs._validateChainRefsArg = function _validateChainRefsArg(ref) {
    if (T$.NullToLdynamic().is(ref) || T$.RefL().is(ref) || dart.legacy(dart.anonymousJSType("JsRef")).is(ref) && dart.test(js_util.hasProperty(ref, "current"))) {
      return;
    }
    if (T$.StringL().is(ref)) dart.throw(new core.AssertionError.new("String refs cannot be chained"));
    if (T$.FunctionL().is(ref)) dart.throw(new core.AssertionError.new("callback refs must take a single argument"));
    dart.throw(new core.AssertionError.new("Invalid ref type: " + dart.str(ref)));
  };
  var _value = dart.privateName(hooks, "_value");
  var _setValue = dart.privateName(hooks, "_setValue");
  const _is_StateHook_default = Symbol('_is_StateHook_default');
  hooks.StateHook$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var VoidToTL = () => (VoidToTL = dart.constFn(dart.fnType(TL(), [])))();
    var VoidToLTL = () => (VoidToLTL = dart.constFn(dart.legacy(VoidToTL())))();
    var TLToTL = () => (TLToTL = dart.constFn(dart.fnType(TL(), [TL()])))();
    var TLToLTL = () => (TLToLTL = dart.constFn(dart.legacy(TLToTL())))();
    class StateHook extends core.Object {
      get value() {
        return this[_value];
      }
      set(newValue) {
        let t10;
        TL().as(newValue);
        t10 = newValue;
        return this[_setValue](t10);
      }
      setWithUpdater(computeNewValue) {
        let t10;
        TLToLTL().as(computeNewValue);
        t10 = js.allowInterop(TLToLTL(), computeNewValue);
        return this[_setValue](t10);
      }
    }
    (StateHook.new = function(initialValue) {
      this[_value] = null;
      this[_setValue] = null;
      let result = dart.global.React.useState(initialValue);
      this[_value] = TL().as(result[$_get](0));
      this[_setValue] = T$.dynamicToLvoid().as(result[$_get](1));
    }).prototype = StateHook.prototype;
    (StateHook.lazy = function(init) {
      this[_value] = null;
      this[_setValue] = null;
      let result = dart.global.React.useState(js.allowInterop(VoidToLTL(), init));
      this[_value] = TL().as(result[$_get](0));
      this[_setValue] = T$.dynamicToLvoid().as(result[$_get](1));
    }).prototype = StateHook.prototype;
    dart.addTypeTests(StateHook);
    StateHook.prototype[_is_StateHook_default] = true;
    dart.addTypeCaches(StateHook);
    dart.setMethodSignature(StateHook, () => ({
      __proto__: dart.getMethods(StateHook.__proto__),
      set: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      setWithUpdater: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(StateHook, () => ({
      __proto__: dart.getGetters(StateHook.__proto__),
      value: dart.legacy(T)
    }));
    dart.setLibraryUri(StateHook, I[11]);
    dart.setFieldSignature(StateHook, () => ({
      __proto__: dart.getFields(StateHook.__proto__),
      [_value]: dart.fieldType(dart.legacy(T)),
      [_setValue]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.dynamic])))
    }));
    return StateHook;
  });
  hooks.StateHook = hooks.StateHook$();
  dart.addTypeTests(hooks.StateHook, _is_StateHook_default);
  var _state$ = dart.privateName(hooks, "_state");
  var _dispatch = dart.privateName(hooks, "_dispatch");
  const _is_ReducerHook_default = Symbol('_is_ReducerHook_default');
  hooks.ReducerHook$ = dart.generic((TState, TAction, TInit) => {
    var TStateL = () => (TStateL = dart.constFn(dart.legacy(TState)))();
    var TActionL = () => (TActionL = dart.constFn(dart.legacy(TAction)))();
    var TActionLTovoid = () => (TActionLTovoid = dart.constFn(dart.fnType(dart.void, [TActionL()])))();
    var TActionLToLvoid = () => (TActionLToLvoid = dart.constFn(dart.legacy(TActionLTovoid())))();
    class ReducerHook extends core.Object {
      get state() {
        return this[_state$];
      }
      dispatch(action) {
        let t10;
        TActionL().as(action);
        t10 = action;
        return this[_dispatch](t10);
      }
    }
    (ReducerHook.new = function(reducer, initialState) {
      this[_state$] = null;
      this[_dispatch] = null;
      let result = dart.global.React.useReducer(js.allowInterop(T$.FunctionL(), reducer), initialState);
      this[_state$] = TStateL().as(result[$_get](0));
      this[_dispatch] = TActionLToLvoid().as(result[$_get](1));
    }).prototype = ReducerHook.prototype;
    (ReducerHook.lazy = function(reducer, initialArg, init) {
      this[_state$] = null;
      this[_dispatch] = null;
      let result = dart.global.React.useReducer(js.allowInterop(T$.FunctionL(), reducer), initialArg, js.allowInterop(T$.FunctionL(), init));
      this[_state$] = TStateL().as(result[$_get](0));
      this[_dispatch] = TActionLToLvoid().as(result[$_get](1));
    }).prototype = ReducerHook.prototype;
    dart.addTypeTests(ReducerHook);
    ReducerHook.prototype[_is_ReducerHook_default] = true;
    dart.addTypeCaches(ReducerHook);
    dart.setMethodSignature(ReducerHook, () => ({
      __proto__: dart.getMethods(ReducerHook.__proto__),
      dispatch: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(ReducerHook, () => ({
      __proto__: dart.getGetters(ReducerHook.__proto__),
      state: dart.legacy(TState)
    }));
    dart.setLibraryUri(ReducerHook, I[11]);
    dart.setFieldSignature(ReducerHook, () => ({
      __proto__: dart.getFields(ReducerHook.__proto__),
      [_state$]: dart.fieldType(dart.legacy(TState)),
      [_dispatch]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(TAction)])))
    }));
    return ReducerHook;
  });
  hooks.ReducerHook = hooks.ReducerHook$();
  dart.addTypeTests(hooks.ReducerHook, _is_ReducerHook_default);
  hooks.useState = function useState(T, initialValue) {
    return new (hooks.StateHook$(dart.legacy(T))).new(initialValue);
  };
  hooks.useStateLazy = function useStateLazy(T, init) {
    return new (hooks.StateHook$(dart.legacy(T))).lazy(init);
  };
  hooks.useEffect = function useEffect(sideEffect, dependencies = null) {
    let wrappedSideEffect = js.allowInterop(T$.VoidToLdynamic(), dart.fn(() => {
      let result = sideEffect();
      if (T$.FunctionL().is(result)) {
        return js.allowInterop(T$.FunctionL(), result);
      }
      return dart.global._jsUndefined;
    }, T$.VoidTodynamic()));
    return dart.global.React.useEffect(dart.assertInterop(wrappedSideEffect), dependencies);
  };
  hooks.useReducer = function useReducer(TState, TAction, TInit, reducer, initialState) {
    return new (hooks.ReducerHook$(dart.legacy(TState), dart.legacy(TAction), dart.legacy(TInit))).new(reducer, initialState);
  };
  hooks.useReducerLazy = function useReducerLazy(TState, TAction, TInit, reducer, initialArg, init) {
    return new (hooks.ReducerHook$(dart.legacy(TState), dart.legacy(TAction), dart.legacy(TInit))).lazy(reducer, initialArg, init);
  };
  hooks.useCallback = function useCallback(T, callback, dependencies) {
    return dart.legacy(T).as(dart.global.React.useCallback(js.allowInterop(T$.FunctionL(), callback), dependencies));
  };
  hooks.useContext = function useContext(T, context) {
    return dart.legacy(T).as(context$.ContextHelpers.unjsifyNewContext(dart.global.React.useContext(context.jsThis)));
  };
  hooks.useRef = function useRef(T, initialValue = null) {
    return new (react_interop.Ref$(dart.legacy(T))).useRefInit(initialValue);
  };
  hooks.useMemo = function useMemo(T, createFunction, dependencies = null) {
    return dart.legacy(T).as(dart.global.React.useMemo(js.allowInterop(T$.VoidToLdynamic(), createFunction), dependencies));
  };
  hooks.useLayoutEffect = function useLayoutEffect(sideEffect, dependencies = null) {
    let wrappedSideEffect = js.allowInterop(T$.VoidToLdynamic(), dart.fn(() => {
      let result = sideEffect();
      if (T$.FunctionL().is(result)) {
        return js.allowInterop(T$.FunctionL(), result);
      }
      return dart.global._jsUndefined;
    }, T$.VoidTodynamic()));
    return dart.global.React.useLayoutEffect(dart.assertInterop(wrappedSideEffect), dependencies);
  };
  hooks.useImperativeHandle = function useImperativeHandle(ref, createHandle, dependencies = null) {
    return dart.global.React.useImperativeHandle(T$.RefL().is(ref) ? ref.jsRef : ref, js.allowInterop(T$.VoidToLdynamic(), createHandle), dependencies);
  };
  hooks.useDebugValue = function useDebugValue(T, value, format = null) {
    if (format == null) {
      return dart.global.React.useDebugValue(value);
    }
    return dart.global.React.useDebugValue(value, js.allowInterop(T$.FunctionL(), format));
  };
  dart.trackLibraries("packages/react/hooks", {
    "package:react/src/react_client/dart2_interop_workaround_bindings.dart": dart2_interop_workaround_bindings,
    "package:react/react_client/react_interop.dart": react_interop,
    "package:react/src/js_interop_util.dart": js_interop_util,
    "package:react/react_client/js_backed_map.dart": js_backed_map,
    "package:react/src/react_client/private_utils.dart": private_utils,
    "package:react/react_client/component_factory.dart": component_factory,
    "package:react/src/react_client/factory_util.dart": factory_util,
    "package:react/src/typedefs.dart": typedefs,
    "package:react/react.dart": react,
    "package:react/src/context.dart": context$,
    "package:react/src/react_client/component_registration.dart": component_registration,
    "package:react/src/react_client/dart_interop_statics.dart": dart_interop_statics,
    "package:react/react_client/bridge.dart": bridge,
    "package:react/react_client.dart": react_client,
    "package:react/src/react_client/chain_refs.dart": chain_refs,
    "package:react/hooks.dart": hooks
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["react_client/react_interop.dart","src/js_interop_util.dart","react_client/js_backed_map.dart","src/react_client/private_utils.dart","react.dart","react_client/component_factory.dart","src/react_client/factory_util.dart","src/context.dart","src/react_client/component_registration.dart","src/react_client/dart_interop_statics.dart","react_client/bridge.dart","react_client.dart","src/react_client/chain_refs.dart","hooks.dart"],"names":[],"mappings":"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","file":"hooks.unsound.ddc.js"}');
  // Exports:
  return {
    src__react_client__dart2_interop_workaround_bindings: dart2_interop_workaround_bindings,
    react_client__react_interop: react_interop,
    src__js_interop_util: js_interop_util,
    react_client__js_backed_map: js_backed_map,
    src__react_client__private_utils: private_utils,
    react_client__component_factory: component_factory,
    src__react_client__factory_util: factory_util,
    src__typedefs: typedefs,
    react: react,
    src__context: context$,
    src__react_client__component_registration: component_registration,
    src__react_client__dart_interop_statics: dart_interop_statics,
    react_client__bridge: bridge,
    react_client: react_client,
    src__react_client__chain_refs: chain_refs,
    hooks: hooks
  };
}));

//# sourceMappingURL=hooks.unsound.ddc.js.map
