define(['dart_sdk'], (function load__packages__react__react_client__js_interop_helpers(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const js_util = dart_sdk.js_util;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var js_interop_helpers = Object.create(dart.library);
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $keys = dartx.keys;
  var $map = dartx.map;
  var $addAll = dartx.addAll;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    MapL: () => (T.MapL = dart.constFn(dart.legacy(core.Map)))(),
    IterableL: () => (T.IterableL = dart.constFn(dart.legacy(core.Iterable)))(),
    FunctionL: () => (T.FunctionL = dart.constFn(dart.legacy(core.Function)))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    ExpandoOfboolL: () => (T.ExpandoOfboolL = dart.constFn(core.Expando$(T.boolL())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  js_interop_helpers.jsifyAndAllowInterop = function jsifyAndAllowInterop(object) {
    if (!T.MapL().is(object) && !T.IterableL().is(object)) {
      dart.throw(new core.ArgumentError.value(object, "object", "must be a Map or Iterable"));
    }
    return js_interop_helpers._convertDataTree(object);
  };
  js_interop_helpers._convertDataTree = function _convertDataTree(data) {
    let _convertedObjects = new _js_helper.IdentityMap.new();
    function _convert(o) {
      if (dart.test(_convertedObjects[$containsKey](o))) {
        return _convertedObjects[$_get](o);
      }
      if (T.MapL().is(o)) {
        let convertedMap = js_util.newObject();
        _convertedObjects[$_set](o, convertedMap);
        for (let key of o[$keys]) {
          js_util.setProperty(convertedMap, key, _convert(o[$_get](key)));
        }
        return convertedMap;
      } else if (T.IterableL().is(o)) {
        let convertedList = [];
        _convertedObjects[$_set](o, convertedList);
        convertedList[$addAll](o[$map](dart.dynamic, _convert));
        return convertedList;
      } else if (T.FunctionL().is(o)) {
        let convertedFunction = js.allowInterop(T.FunctionL(), o);
        _convertedObjects[$_set](o, convertedFunction);
        return convertedFunction;
      } else {
        return o;
      }
    }
    dart.fn(_convert, T.dynamicTodynamic());
    return _convert(data);
  };
  dart.defineLazy(js_interop_helpers, {
    /*js_interop_helpers.isRawJsFunctionFromProps*/get isRawJsFunctionFromProps() {
      return new (T.ExpandoOfboolL()).new();
    }
  }, true);
  dart.trackLibraries("packages/react/react_client/js_interop_helpers", {
    "package:react/react_client/js_interop_helpers.dart": js_interop_helpers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js_interop_helpers.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;0EAqD6B;AAC3B,SAAW,YAAP,MAAM,MAAmB,iBAAP,MAAM;AACkD,MAA5E,WAAU,6BAAoB,MAAM,EAAE,UAAU;;AAElD,UAAO,qCAAiB,MAAM;EAChC;kEAEiB;AACT,4BAAwB;AAE9B,sBAAS;AACP,oBAAI,AAAkB,iBAAD,eAAa,CAAC;AACjC,cAAO,AAAiB,kBAAA,QAAC,CAAC;;AAE5B,UAAM,YAAF,CAAC;AACG,2BAAe;AACc,QAAnC,AAAiB,iBAAA,QAAC,CAAC,EAAI,YAAY;AACnC,iBAAS,MAAO,AAAE,EAAD;AACiC,UAAhD,oBAAY,YAAY,EAAE,GAAG,EAAE,QAAQ,CAAC,AAAC,CAAA,QAAC,GAAG;;AAE/C,cAAO,aAAY;YACd,KAAM,iBAAF,CAAC;AACJ,4BAAgB;AACc,QAApC,AAAiB,iBAAA,QAAC,CAAC,EAAI,aAAa;AACC,QAArC,AAAc,aAAD,UAAQ,AAAE,CAAD,qBAAK,QAAQ;AACnC,cAAO,cAAa;YACf,KAAM,iBAAF,CAAC;AACJ,gCAAoB,+BAAa,CAAC;AACA,QAAxC,AAAiB,iBAAA,QAAC,CAAC,EAAI,iBAAiB;AACxC,cAAO,kBAAiB;;AAExB,cAAO,EAAC;;;;AAIZ,UAAO,SAAQ,CAAC,IAAI;EACtB;;MAKM,2CAAwB;YAAG","file":"js_interop_helpers.unsound.ddc.js"}');
  // Exports:
  return {
    react_client__js_interop_helpers: js_interop_helpers
  };
}));

//# sourceMappingURL=js_interop_helpers.unsound.ddc.js.map
