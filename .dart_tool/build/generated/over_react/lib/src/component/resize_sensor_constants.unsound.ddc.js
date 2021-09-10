define(['dart_sdk', 'packages/platform_detect/platform_detect', 'packages/quiver/core', 'packages/w_common/src/common/disposable', 'packages/react/hooks'], (function load__packages__over_react__src__component__resize_sensor_constants(dart_sdk, packages__platform_detect__platform_detect, packages__quiver__core, packages__w_common__src__common__disposable, packages__react__hooks) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const detect = packages__platform_detect__platform_detect.src__detect;
  const hash = packages__quiver__core.src__core__hash;
  const disposable = packages__w_common__src__common__disposable.src__common__disposable;
  const disposable_manager = packages__w_common__src__common__disposable.src__common__disposable_manager;
  const react = packages__react__hooks.react;
  var resize_sensor_constants = Object.create(dart.library);
  var constants_base = Object.create(dart.library);
  var character_constants = Object.create(dart.library);
  var hoc = Object.create(dart.library);
  var equality = Object.create(dart.library);
  var prop_key_util = Object.create(dart.library);
  var guid_util = Object.create(dart.library);
  var css_value_util = Object.create(dart.library);
  var util = Object.create(dart.library);
  var disposable_manager_proxy = Object.create(dart.library);
  var $toString = dartx.toString;
  var $reduce = dartx.reduce;
  var $length = dartx.length;
  var $keys = dartx.keys;
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $isFinite = dartx.isFinite;
  var $modulo = dartx['%'];
  var $compareTo = dartx.compareTo;
  var $truncate = dartx.truncate;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    StringL: () => (T$.StringL = dart.constFn(dart.legacy(core.String)))(),
    IdentityMapOfStringL$dynamic: () => (T$.IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(T$.StringL(), dart.dynamic)))(),
    VoidToStringL: () => (T$.VoidToStringL = dart.constFn(dart.fnType(T$.StringL(), [])))(),
    FunctionL: () => (T$.FunctionL = dart.constFn(dart.legacy(core.Function)))(),
    MapL: () => (T$.MapL = dart.constFn(dart.legacy(core.Map)))(),
    MapLTovoid: () => (T$.MapLTovoid = dart.constFn(dart.fnType(dart.void, [T$.MapL()])))(),
    numL: () => (T$.numL = dart.constFn(dart.legacy(core.num)))(),
    CssValueL: () => (T$.CssValueL = dart.constFn(dart.legacy(css_value_util.CssValue)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constMap(T$.StringL(), dart.dynamic, ["position", "absolute", "top", "-100px", "right", "-100px", "bottom", "-100px", "left", "-100px", "overflow", "scroll", "zIndex", "-1", "visibility", "hidden", "opacity", "0"]);
    },
    get C1() {
      return C[1] = dart.constMap(T$.StringL(), dart.dynamic, ["position", "absolute", "top", "0", "right", "0", "bottom", "0", "left", "0", "overflow", "scroll", "zIndex", "-1", "visibility", "hidden", "opacity", "0"]);
    },
    get C2() {
      return C[2] = dart.constMap(T$.StringL(), dart.dynamic, ["position", "absolute", "top", "0", "left", "0", "visibility", "hidden", "width", 100000, "height", 100000, "opacity", "0"]);
    },
    get C3() {
      return C[3] = dart.constMap(T$.StringL(), dart.dynamic, ["position", "absolute", "top", "0", "left", "0", "width", "200%", "height", "200%", "visibility", "hidden", "opacity", "0"]);
    },
    get C4() {
      return C[4] = dart.constMap(T$.StringL(), dart.dynamic, ["position", "relative", "height", "100%", "width", "100%"]);
    },
    get C5() {
      return C[5] = dart.constMap(T$.StringL(), dart.dynamic, ["position", "relative", "flex", "1 1 0%", "msFlex", "1 1 0%", "display", "block", "minHeight", "0"]);
    },
    get C6() {
      return C[6] = dart.constMap(dart.dynamic, dart.dynamic, []);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: util.NotSpecified.prototype
      });
    }
  }, false);
  var C = Array(8).fill(void 0);
  var I = [
    "package:over_react/src/util/constants_base.dart",
    "package:over_react/src/util/prop_key_util.dart",
    "package:over_react/src/util/css_value_util.dart",
    "package:over_react/src/component_declaration/util.dart",
    "package:over_react/src/component_declaration/disposable_manager_proxy.dart"
  ];
  dart.defineLazy(resize_sensor_constants, {
    /*resize_sensor_constants.maxSensorSize*/get maxSensorSize() {
      return 100000;
    },
    /*resize_sensor_constants.baseStyle*/get baseStyle() {
      return C[0] || CT.C0;
    },
    /*resize_sensor_constants.shrinkBaseStyle*/get shrinkBaseStyle() {
      return C[1] || CT.C1;
    },
    /*resize_sensor_constants.expandSensorChildStyle*/get expandSensorChildStyle() {
      return C[2] || CT.C2;
    },
    /*resize_sensor_constants.collapseSensorChildStyle*/get collapseSensorChildStyle() {
      return C[3] || CT.C3;
    },
    /*resize_sensor_constants.defaultWrapperStyles*/get defaultWrapperStyles() {
      return C[4] || CT.C4;
    },
    /*resize_sensor_constants.wrapperStylesFlexChild*/get wrapperStylesFlexChild() {
      return C[5] || CT.C5;
    },
    /*resize_sensor_constants.wrapperStylesFlexContainer*/get wrapperStylesFlexContainer() {
      return new (T$.IdentityMapOfStringL$dynamic()).from(["position", "relative", "flex", "1 1 0%", "msFlex", "1 1 0%", "display", resize_sensor_constants.displayFlex, "minHeight", "0"]);
    },
    /*resize_sensor_constants.displayFlex*/get displayFlex() {
      return dart.fn(() => {
        if (dart.test(detect.browser.isInternetExplorer) && dart.notNull(detect.browser.version.major) <= 10) return "-ms-flexbox";
        return "flex";
      }, T$.VoidToStringL())();
    }
  }, true);
  var _name$ = dart.privateName(constants_base, "DebugFriendlyConstant._name");
  var _name = dart.privateName(constants_base, "_name");
  constants_base.DebugFriendlyConstant = class DebugFriendlyConstant extends core.Object {
    get [_name]() {
      return this[_name$];
    }
    set [_name](value) {
      super[_name] = value;
    }
    toString() {
      let string = dart.str(this.runtimeType) + "." + dart.str(this[_name]);
      let debugDescription = this.debugDescription;
      if (debugDescription != null) {
        string = string + " (" + dart.str(debugDescription) + ")";
      }
      return string;
    }
  };
  (constants_base.DebugFriendlyConstant.new = function(_name) {
    this[_name$] = _name;
    ;
  }).prototype = constants_base.DebugFriendlyConstant.prototype;
  dart.addTypeTests(constants_base.DebugFriendlyConstant);
  dart.addTypeCaches(constants_base.DebugFriendlyConstant);
  dart.setMethodSignature(constants_base.DebugFriendlyConstant, () => ({
    __proto__: dart.getMethods(constants_base.DebugFriendlyConstant.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(constants_base.DebugFriendlyConstant, I[0]);
  dart.setFieldSignature(constants_base.DebugFriendlyConstant, () => ({
    __proto__: dart.getFields(constants_base.DebugFriendlyConstant.__proto__),
    [_name]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(constants_base.DebugFriendlyConstant, ['toString']);
  var className$ = dart.privateName(constants_base, "ClassNameConstant.className");
  constants_base.ClassNameConstant = class ClassNameConstant extends constants_base.DebugFriendlyConstant {
    get className() {
      return this[className$];
    }
    set className(value) {
      super.className = value;
    }
    get debugDescription() {
      return "className: " + dart.str(this.className);
    }
  };
  (constants_base.ClassNameConstant.new = function(name, className) {
    this[className$] = className;
    constants_base.ClassNameConstant.__proto__.new.call(this, name);
    ;
  }).prototype = constants_base.ClassNameConstant.prototype;
  dart.addTypeTests(constants_base.ClassNameConstant);
  dart.addTypeCaches(constants_base.ClassNameConstant);
  dart.setGetterSignature(constants_base.ClassNameConstant, () => ({
    __proto__: dart.getGetters(constants_base.ClassNameConstant.__proto__),
    debugDescription: dart.legacy(core.String)
  }));
  dart.setLibraryUri(constants_base.ClassNameConstant, I[0]);
  dart.setFieldSignature(constants_base.ClassNameConstant, () => ({
    __proto__: dart.getFields(constants_base.ClassNameConstant.__proto__),
    className: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineLazy(character_constants, {
    /*character_constants.nonBreakingSpace*/get nonBreakingSpace() {
      return " ";
    },
    /*character_constants.multiplicationSign*/get multiplicationSign() {
      return "×";
    },
    /*character_constants.middleDot*/get middleDot() {
      return "·";
    },
    /*character_constants.horizontalEllipsis*/get horizontalEllipsis() {
      return "…";
    }
  }, true);
  hoc.composeHocs = function composeHocs(R, functions) {
    return functions[$reduce](dart.fn((a, b) => dart.fn(result => a(b(result)), dart.fnType(dart.legacy(R), [dart.legacy(R)])), dart.fnType(dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(R)])), [dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(R)])), dart.legacy(dart.fnType(dart.legacy(R), [dart.legacy(R)]))])));
  };
  equality.propsOrStateMapsEqual = function propsOrStateMapsEqual(a, b) {
    if (a == b) return true;
    if (a[$length] != b[$length]) return false;
    for (let key of a[$keys]) {
      if (!dart.test(b[$containsKey](key))) return false;
      let bVal = b[$_get](key);
      let aVal = a[$_get](key);
      if (!core.identical(bVal, aVal)) {
        if (!(T$.FunctionL().is(bVal) && T$.FunctionL().is(aVal) && dart.equals(bVal, aVal))) {
          return false;
        }
      }
    }
    return true;
  };
  var _hasBeenAccessed = dart.privateName(prop_key_util, "_hasBeenAccessed");
  var _key = dart.privateName(prop_key_util, "_key");
  prop_key_util._SingleKeyAccessMapSpy = class _SingleKeyAccessMapSpy extends collection.MapView {
    get key() {
      if (!dart.test(this[_hasBeenAccessed])) dart.throw(new core.StateError.new("Key has not been accessed."));
      return this[_key];
    }
    _get(key) {
      if (dart.test(this[_hasBeenAccessed])) dart.throw(new core.StateError.new("A key has already been accessed."));
      this[_key] = key;
      this[_hasBeenAccessed] = true;
      return null;
    }
  };
  (prop_key_util._SingleKeyAccessMapSpy.new = function(map) {
    this[_hasBeenAccessed] = false;
    this[_key] = null;
    prop_key_util._SingleKeyAccessMapSpy.__proto__.new.call(this, map);
    ;
  }).prototype = prop_key_util._SingleKeyAccessMapSpy.prototype;
  dart.addTypeTests(prop_key_util._SingleKeyAccessMapSpy);
  dart.addTypeCaches(prop_key_util._SingleKeyAccessMapSpy);
  dart.setMethodSignature(prop_key_util._SingleKeyAccessMapSpy, () => ({
    __proto__: dart.getMethods(prop_key_util._SingleKeyAccessMapSpy.__proto__),
    _get: dart.fnType(dart.dynamic, [dart.legacy(core.Object)]),
    [$_get]: dart.fnType(dart.dynamic, [dart.legacy(core.Object)])
  }));
  dart.setGetterSignature(prop_key_util._SingleKeyAccessMapSpy, () => ({
    __proto__: dart.getGetters(prop_key_util._SingleKeyAccessMapSpy.__proto__),
    key: dart.dynamic
  }));
  dart.setLibraryUri(prop_key_util._SingleKeyAccessMapSpy, I[1]);
  dart.setFieldSignature(prop_key_util._SingleKeyAccessMapSpy, () => ({
    __proto__: dart.getFields(prop_key_util._SingleKeyAccessMapSpy.__proto__),
    [_hasBeenAccessed]: dart.fieldType(dart.legacy(core.bool)),
    [_key]: dart.fieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(prop_key_util._SingleKeyAccessMapSpy, ['_get']);
  prop_key_util.getPropKey = function getPropKey(T, accessProp, factory) {
    return T$.StringL().as(prop_key_util._getKey(dart.fn(keySpy => accessProp(factory(keySpy)), T$.MapLTovoid())));
  };
  prop_key_util._getKey = function _getKey(accessKey) {
    let keySpy = new prop_key_util._SingleKeyAccessMapSpy.new(C[6] || CT.C6);
    accessKey(keySpy);
    return keySpy.key;
  };
  guid_util.generateGuid = function generateGuid(length = 4) {
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let guid = "";
    for (let i = 0; i < dart.notNull(length); i = i + 1) {
      guid = guid + characters[$_get](guid_util._guidRandom.nextInt(characters.length));
    }
    return guid;
  };
  dart.defineLazy(guid_util, {
    /*guid_util._guidRandom*/get _guidRandom() {
      return math.Random.new();
    }
  }, true);
  var number$ = dart.privateName(css_value_util, "CssValue.number");
  var unit$ = dart.privateName(css_value_util, "CssValue.unit");
  var _checkMatchingUnits = dart.privateName(css_value_util, "_checkMatchingUnits");
  css_value_util.CssValue = class CssValue extends core.Object {
    get number() {
      return this[number$];
    }
    set number(value) {
      super.number = value;
    }
    get unit() {
      return this[unit$];
    }
    set unit(value) {
      super.unit = value;
    }
    static parse(source, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let number = null;
      let unit = null;
      let error = null;
      if (source == null) {
        error = new core.ArgumentError.notNull("value");
      } else if (T$.numL().is(source)) {
        number = source;
        unit = "px";
      } else {
        let unitMatch = core.RegExp.new("(?:rem|em|ex|vh|vw|vmin|vmax|%|px|cm|mm|in|pt|pc|ch)?$").firstMatch(dart.toString(source));
        unit = unitMatch.group(0);
        if (unit === "") {
          unit = "px";
        }
        number = core.double.tryParse(unitMatch.input[$substring](0, unitMatch.start));
        if (number == null) {
          error = new core.ArgumentError.value(source, "value", "Invalid number/unit for CSS value");
        }
      }
      if (number != null && !number[$isFinite]) {
        error = new core.ArgumentError.value(number, "value", "Number portion of CSS value (" + dart.str(source) + ") must be finite");
      }
      let result = null;
      if (error != null) {
        if (onError == null) {
          result = null;
        } else {
          result = onError(source, error);
        }
      } else {
        result = new css_value_util.CssValue.new(number, unit);
      }
      return result;
    }
    [_checkMatchingUnits](other) {
      if (this.unit != other.unit) {
        dart.throw(new core.ArgumentError.new("Cannot compare CSS unit values of units " + dart.str(this.unit) + " and " + dart.str(other.unit)));
      }
    }
    ['%'](other) {
      return new css_value_util.CssValue.new(this.number[$modulo](other), this.unit);
    }
    ['*'](other) {
      return new css_value_util.CssValue.new(dart.notNull(this.number) * dart.notNull(other), this.unit);
    }
    ['/'](other) {
      return new css_value_util.CssValue.new(dart.notNull(this.number) / dart.notNull(other), this.unit);
    }
    ['+'](other) {
      this[_checkMatchingUnits](other);
      return new css_value_util.CssValue.new(dart.notNull(this.number) + dart.notNull(other.number), this.unit);
    }
    ['-'](other) {
      this[_checkMatchingUnits](other);
      return new css_value_util.CssValue.new(dart.notNull(this.number) - dart.notNull(other.number), this.unit);
    }
    ['<'](other) {
      this[_checkMatchingUnits](other);
      return dart.notNull(this.number) < dart.notNull(other.number);
    }
    ['<='](other) {
      this[_checkMatchingUnits](other);
      return dart.notNull(this.number) <= dart.notNull(other.number);
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || T$.CssValueL().is(other) && this.number == other.number && this.unit == other.unit;
    }
    get hashCode() {
      return hash.hash2(this.number, this.unit);
    }
    ['>'](other) {
      this[_checkMatchingUnits](other);
      return dart.notNull(this.number) > dart.notNull(other.number);
    }
    ['>='](other) {
      this[_checkMatchingUnits](other);
      return dart.notNull(this.number) >= dart.notNull(other.number);
    }
    _negate() {
      return new css_value_util.CssValue.new(-dart.notNull(this.number), this.unit);
    }
    compareTo(other) {
      T$.CssValueL().as(other);
      this[_checkMatchingUnits](other);
      return this.number[$compareTo](other.number);
    }
    toString() {
      if (this.number === 0) return "0";
      if (this.number === this.number[$truncate]()) return this.number[$toStringAsFixed](0) + dart.str(this.unit);
      return dart.str(this.number) + dart.str(this.unit);
    }
  };
  (css_value_util.CssValue.new = function(number, unit = "px") {
    this[number$] = number;
    this[unit$] = unit;
    ;
  }).prototype = css_value_util.CssValue.prototype;
  dart.addTypeTests(css_value_util.CssValue);
  dart.addTypeCaches(css_value_util.CssValue);
  css_value_util.CssValue[dart.implements] = () => [core.Comparable$(dart.legacy(css_value_util.CssValue))];
  dart.setMethodSignature(css_value_util.CssValue, () => ({
    __proto__: dart.getMethods(css_value_util.CssValue.__proto__),
    [_checkMatchingUnits]: dart.fnType(dart.void, [dart.legacy(css_value_util.CssValue)]),
    '%': dart.fnType(dart.legacy(css_value_util.CssValue), [dart.legacy(core.num)]),
    '*': dart.fnType(dart.legacy(css_value_util.CssValue), [dart.legacy(core.num)]),
    '/': dart.fnType(dart.legacy(css_value_util.CssValue), [dart.legacy(core.num)]),
    '+': dart.fnType(dart.legacy(css_value_util.CssValue), [dart.legacy(css_value_util.CssValue)]),
    '-': dart.fnType(dart.legacy(css_value_util.CssValue), [dart.legacy(css_value_util.CssValue)]),
    '<': dart.fnType(dart.legacy(core.bool), [dart.legacy(css_value_util.CssValue)]),
    '<=': dart.fnType(dart.legacy(core.bool), [dart.legacy(css_value_util.CssValue)]),
    _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
    '>': dart.fnType(dart.legacy(core.bool), [dart.legacy(css_value_util.CssValue)]),
    '>=': dart.fnType(dart.legacy(core.bool), [dart.legacy(css_value_util.CssValue)]),
    _negate: dart.fnType(dart.legacy(css_value_util.CssValue), []),
    compareTo: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    [$compareTo]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.Object)]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(css_value_util.CssValue, () => ({
    __proto__: dart.getGetters(css_value_util.CssValue.__proto__),
    hashCode: dart.legacy(core.int),
    [$hashCode]: dart.legacy(core.int)
  }));
  dart.setLibraryUri(css_value_util.CssValue, I[2]);
  dart.setFieldSignature(css_value_util.CssValue, () => ({
    __proto__: dart.getFields(css_value_util.CssValue.__proto__),
    number: dart.finalFieldType(dart.legacy(core.num)),
    unit: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(css_value_util.CssValue, ['_equals', 'compareTo', 'toString']);
  dart.defineExtensionAccessors(css_value_util.CssValue, ['hashCode']);
  util.NotSpecified = class NotSpecified extends core.Object {};
  (util.NotSpecified.new = function() {
    ;
  }).prototype = util.NotSpecified.prototype;
  dart.addTypeTests(util.NotSpecified);
  dart.addTypeCaches(util.NotSpecified);
  dart.setLibraryUri(util.NotSpecified, I[3]);
  dart.defineLazy(util, {
    /*util.notSpecified*/get notSpecified() {
      return C[7] || CT.C7;
    }
  }, true);
  var _disposableProxy = dart.privateName(disposable_manager_proxy, "_disposableProxy");
  var _getDisposableProxy = dart.privateName(disposable_manager_proxy, "_getDisposableProxy");
  disposable_manager_proxy.DisposableManagerProxy = class DisposableManagerProxy extends react.Component {};
  disposable_manager_proxy.DisposableManagerProxy[dart.mixinOn] = Component => class DisposableManagerProxy extends Component {
    componentWillUnmount() {
      let t0;
      super.componentWillUnmount();
      t0 = this[_disposableProxy];
      t0 == null ? null : t0.dispose();
    }
    [_getDisposableProxy]() {
      let t0;
      t0 = this[_disposableProxy];
      return t0 == null ? this[_disposableProxy] = new disposable.Disposable.new() : t0;
    }
    awaitBeforeDispose(T, future) {
      return this[_getDisposableProxy]().awaitBeforeDispose(dart.legacy(T), future);
    }
    getManagedDelayedFuture(T, duration, callback) {
      return this[_getDisposableProxy]().getManagedDelayedFuture(dart.legacy(T), duration, callback);
    }
    getManagedDisposer(disposer) {
      return this[_getDisposableProxy]().getManagedDisposer(disposer);
    }
    getManagedPeriodicTimer(duration, callback) {
      return this[_getDisposableProxy]().getManagedPeriodicTimer(duration, callback);
    }
    getManagedTimer(duration, callback) {
      return this[_getDisposableProxy]().getManagedTimer(duration, callback);
    }
    listenToStream(T, stream, onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this[_getDisposableProxy]().listenToStream(dart.legacy(T), stream, onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    manageAndReturnDisposable(disposable) {
      return this[_getDisposableProxy]().manageAndReturnDisposable(disposable);
    }
    manageCompleter(T, completer) {
      return this[_getDisposableProxy]().manageCompleter(dart.legacy(T), completer);
    }
    manageDisposable(disposable) {
      return this[_getDisposableProxy]().manageDisposable(disposable);
    }
    manageDisposer(disposer) {
      return this[_getDisposableProxy]().manageDisposer(disposer);
    }
    manageStreamController(controller) {
      return this[_getDisposableProxy]().manageStreamController(controller);
    }
    manageStreamSubscription(subscription) {
      return this[_getDisposableProxy]().manageStreamSubscription(subscription);
    }
    manageAndReturnTypedDisposable(T, disposable) {
      return this[_getDisposableProxy]().manageAndReturnTypedDisposable(dart.legacy(T), disposable);
    }
  };
  (disposable_manager_proxy.DisposableManagerProxy[dart.mixinNew] = function() {
    this[_disposableProxy] = null;
  }).prototype = disposable_manager_proxy.DisposableManagerProxy.prototype;
  dart.addTypeTests(disposable_manager_proxy.DisposableManagerProxy);
  dart.addTypeCaches(disposable_manager_proxy.DisposableManagerProxy);
  disposable_manager_proxy.DisposableManagerProxy[dart.implements] = () => [disposable_manager.DisposableManagerV7, react.Component];
  dart.setMethodSignature(disposable_manager_proxy.DisposableManagerProxy, () => ({
    __proto__: dart.getMethods(disposable_manager_proxy.DisposableManagerProxy.__proto__),
    [_getDisposableProxy]: dart.fnType(dart.legacy(disposable.Disposable), []),
    awaitBeforeDispose: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(async.Future$(dart.legacy(T)))]]),
    getManagedDelayedFuture: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.legacy(T), []))]]),
    getManagedDisposer: dart.fnType(dart.legacy(disposable.ManagedDisposer), [dart.legacy(dart.fnType(dart.legacy(async.Future), []))]),
    getManagedPeriodicTimer: dart.fnType(dart.legacy(async.Timer), [dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.void, [dart.legacy(async.Timer)]))]),
    getManagedTimer: dart.fnType(dart.legacy(async.Timer), [dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.void, []))]),
    listenToStream: dart.gFnType(T => [dart.legacy(async.StreamSubscription$(dart.legacy(T))), [dart.legacy(async.Stream$(dart.legacy(T))), dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))], {cancelOnError: dart.legacy(core.bool), onDone: dart.legacy(dart.fnType(dart.void, [])), onError: dart.legacy(core.Function)}, {}]),
    manageAndReturnDisposable: dart.fnType(dart.legacy(disposable.Disposable), [dart.legacy(disposable.Disposable)]),
    manageCompleter: dart.gFnType(T => [dart.legacy(async.Completer$(dart.legacy(T))), [dart.legacy(async.Completer$(dart.legacy(T)))]]),
    manageDisposable: dart.fnType(dart.void, [dart.legacy(disposable.Disposable)]),
    manageDisposer: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(async.Future), []))]),
    manageStreamController: dart.fnType(dart.void, [dart.legacy(async.StreamController)]),
    manageStreamSubscription: dart.fnType(dart.void, [dart.legacy(async.StreamSubscription)]),
    manageAndReturnTypedDisposable: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T)]], T => [dart.legacy(disposable.Disposable)])
  }));
  dart.setLibraryUri(disposable_manager_proxy.DisposableManagerProxy, I[4]);
  dart.setFieldSignature(disposable_manager_proxy.DisposableManagerProxy, () => ({
    __proto__: dart.getFields(disposable_manager_proxy.DisposableManagerProxy.__proto__),
    [_disposableProxy]: dart.fieldType(dart.legacy(disposable.Disposable))
  }));
  dart.trackLibraries("packages/over_react/src/component/resize_sensor_constants", {
    "package:over_react/src/component/resize_sensor_constants.dart": resize_sensor_constants,
    "package:over_react/src/util/constants_base.dart": constants_base,
    "package:over_react/src/util/character_constants.dart": character_constants,
    "package:over_react/src/util/hoc.dart": hoc,
    "package:over_react/src/util/equality.dart": equality,
    "package:over_react/src/util/prop_key_util.dart": prop_key_util,
    "package:over_react/src/util/guid_util.dart": guid_util,
    "package:over_react/src/util/css_value_util.dart": css_value_util,
    "package:over_react/src/component_declaration/util.dart": util,
    "package:over_react/src/component_declaration/disposable_manager_proxy.dart": disposable_manager_proxy
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["resize_sensor_constants.dart","../util/constants_base.dart","../util/character_constants.dart","../util/hoc.dart","../util/equality.dart","../util/prop_key_util.dart","../util/guid_util.dart","../util/css_value_util.dart","../component_declaration/util.dart","../component_declaration/disposable_manager_proxy.dart"],"names":[],"mappings":"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","file":"resize_sensor_constants.unsound.ddc.js"}');
  // Exports:
  return {
    src__component__resize_sensor_constants: resize_sensor_constants,
    src__util__constants_base: constants_base,
    src__util__character_constants: character_constants,
    src__util__hoc: hoc,
    src__util__equality: equality,
    src__util__prop_key_util: prop_key_util,
    src__util__guid_util: guid_util,
    src__util__css_value_util: css_value_util,
    src__component_declaration__util: util,
    src__component_declaration__disposable_manager_proxy: disposable_manager_proxy
  };
}));

//# sourceMappingURL=resize_sensor_constants.unsound.ddc.js.map
