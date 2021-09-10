define(['dart_sdk', 'packages/react/react_client/js_interop_helpers'], (function load__packages__react__src__ddc_emulated_function_name_bug(dart_sdk, packages__react__react_client__js_interop_helpers) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js_interop_helpers = packages__react__react_client__js_interop_helpers.react_client__js_interop_helpers;
  var prop_validator = Object.create(dart.library);
  var ddc_emulated_function_name_bug = Object.create(dart.library);
  var synthetic_data_transfer = Object.create(dart.library);
  var synthetic_event_wrappers = Object.create(dart.library);
  var event_helpers = Object.create(dart.library);
  var $noSuchMethod = dartx.noSuchMethod;
  var $add = dartx.add;
  var $currentTarget = dartx.currentTarget;
  var $target = dartx.target;
  var $client = dartx.client;
  var $dataTransfer = dartx.dataTransfer;
  var $page = dartx.page;
  var $relatedTarget = dartx.relatedTarget;
  var $screen = dartx.screen;
  var $entries = dartx.entries;
  var $_set = dartx._set;
  var $contains = dartx.contains;
  var $any = dartx.any;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    VoidToboolL: () => (T.VoidToboolL = dart.constFn(dart.fnType(T.boolL(), [])))(),
    SyntheticDataTransferL: () => (T.SyntheticDataTransferL = dart.constFn(dart.legacy(synthetic_data_transfer.SyntheticDataTransfer)))(),
    DataTransferL: () => (T.DataTransferL = dart.constFn(dart.legacy(html.DataTransfer)))(),
    FileL: () => (T.FileL = dart.constFn(dart.legacy(html.File)))(),
    JSArrayOfFileL: () => (T.JSArrayOfFileL = dart.constFn(_interceptors.JSArray$(T.FileL())))(),
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    JSArrayOfStringL: () => (T.JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(T.StringL())))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectL: () => (T.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    IdentityMapOfStringL$ObjectL: () => (T.IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(T.StringL(), T.ObjectL())))(),
    IdentityMapOfStringL$dynamic: () => (T.IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(T.StringL(), dart.dynamic)))(),
    StringLToboolL: () => (T.StringLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.StringL()])))(),
    ListOfStringL: () => (T.ListOfStringL = dart.constFn(core.List$(T.StringL())))(),
    ListLOfStringL: () => (T.ListLOfStringL = dart.constFn(dart.legacy(T.ListOfStringL())))(),
    ListLOfStringLToboolL: () => (T.ListLOfStringLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.ListLOfStringL()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _internal.Symbol.new('call'));
    },
    get C1() {
      return C[1] = dart.constList(["copy", "paste", "cut"], T.StringL());
    },
    get C2() {
      return C[2] = dart.constList(["key"], T.StringL());
    },
    get C3() {
      return C[3] = dart.constList(["composition"], T.StringL());
    },
    get C4() {
      return C[4] = dart.constList(["focus", "blur"], T.StringL());
    },
    get C5() {
      return C[5] = dart.constList(["mouse", "click", "drag", "drop", "contextmenu"], T.StringL());
    },
    get C6() {
      return C[6] = dart.constList(["pointer"], T.StringL());
    },
    get C7() {
      return C[7] = dart.constList(["touch"], T.StringL());
    },
    get C8() {
      return C[8] = dart.constList(["transition"], T.StringL());
    },
    get C9() {
      return C[9] = dart.constList(["animation"], T.StringL());
    },
    get C10() {
      return C[10] = dart.constList(["scroll"], T.StringL());
    },
    get C11() {
      return C[11] = dart.constList(["wheel"], T.StringL());
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = [
    "package:react/src/prop_validator.dart",
    "package:react/src/ddc_emulated_function_name_bug.dart",
    "package:react/src/react_client/synthetic_data_transfer.dart"
  ];
  var propName$ = dart.privateName(prop_validator, "PropValidatorInfo.propName");
  var componentName$ = dart.privateName(prop_validator, "PropValidatorInfo.componentName");
  var location$ = dart.privateName(prop_validator, "PropValidatorInfo.location");
  var propFullName$ = dart.privateName(prop_validator, "PropValidatorInfo.propFullName");
  prop_validator.PropValidatorInfo = class PropValidatorInfo extends core.Object {
    get propName() {
      return this[propName$];
    }
    set propName(value) {
      super.propName = value;
    }
    get componentName() {
      return this[componentName$];
    }
    set componentName(value) {
      super.componentName = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get propFullName() {
      return this[propFullName$];
    }
    set propFullName(value) {
      super.propFullName = value;
    }
  };
  (prop_validator.PropValidatorInfo.new = function(opts) {
    let propName = opts && 'propName' in opts ? opts.propName : null;
    let componentName = opts && 'componentName' in opts ? opts.componentName : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let propFullName = opts && 'propFullName' in opts ? opts.propFullName : null;
    this[propName$] = propName;
    this[componentName$] = componentName;
    this[location$] = location;
    this[propFullName$] = propFullName;
    ;
  }).prototype = prop_validator.PropValidatorInfo.prototype;
  dart.addTypeTests(prop_validator.PropValidatorInfo);
  dart.addTypeCaches(prop_validator.PropValidatorInfo);
  dart.setLibraryUri(prop_validator.PropValidatorInfo, I[0]);
  dart.setFieldSignature(prop_validator.PropValidatorInfo, () => ({
    __proto__: dart.getFields(prop_validator.PropValidatorInfo.__proto__),
    propName: dart.finalFieldType(dart.legacy(core.String)),
    componentName: dart.finalFieldType(dart.legacy(core.String)),
    location: dart.finalFieldType(dart.legacy(core.String)),
    propFullName: dart.finalFieldType(dart.legacy(core.String))
  }));
  var _name = dart.privateName(ddc_emulated_function_name_bug, "_name");
  ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty = class _NsmEmulatedFunctionWithNameProperty extends core.Object {
    call() {
      return this.noSuchMethod(new core._Invocation.method(C[0] || CT.C0, null, []));
    }
    noSuchMethod(i) {
    }
    get name() {
      return this[_name];
    }
    set name(value) {
      return this[_name] = value;
    }
  };
  (ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.new = function() {
    this[_name] = null;
    ;
  }).prototype = ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.prototype;
  dart.addTypeTests(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty);
  dart.addTypeCaches(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty);
  dart.setMethodSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getMethods(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    call: dart.fnType(dart.void, []),
    noSuchMethod: dart.fnType(dart.dynamic, [dart.legacy(core.Invocation)]),
    [$noSuchMethod]: dart.fnType(dart.dynamic, [dart.legacy(core.Invocation)])
  }));
  dart.setGetterSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getGetters(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    name: dart.legacy(core.String)
  }));
  dart.setSetterSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getSetters(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    name: dart.legacy(core.String)
  }));
  dart.setLibraryUri(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, I[1]);
  dart.setFieldSignature(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, () => ({
    __proto__: dart.getFields(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.__proto__),
    [_name]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty, ['noSuchMethod']);
  ddc_emulated_function_name_bug.patchName = function patchName(object) {
    let current = object;
    while ((current = dart.global.Object.getPrototypeOf(current)) != null) {
      let nameDescriptor = dart.global.Object.getOwnPropertyDescriptor(current, "name");
      if (nameDescriptor != null) {
        dart.global.Object.defineProperty(object, "name", nameDescriptor);
        return;
      }
    }
  };
  dart.defineLazy(ddc_emulated_function_name_bug, {
    /*ddc_emulated_function_name_bug.isBugPresent*/get isBugPresent() {
      return dart.fn(() => {
        let testObject = new ddc_emulated_function_name_bug._NsmEmulatedFunctionWithNameProperty.new();
        try {
          testObject.name = "test value";
        } catch (e) {
          let _ = dart.getThrown(e);
          return true;
        }
        try {
          return testObject.name !== "test value";
        } catch (e$) {
          let _ = dart.getThrown(e$);
          return true;
        }
      }, T.VoidToboolL())();
    }
  }, true);
  var dropEffect$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.dropEffect");
  var effectAllowed$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.effectAllowed");
  var files$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.files");
  var types$ = dart.privateName(synthetic_data_transfer, "SyntheticDataTransfer.types");
  synthetic_data_transfer.SyntheticDataTransfer = class SyntheticDataTransfer extends core.Object {
    get dropEffect() {
      return this[dropEffect$];
    }
    set dropEffect(value) {
      super.dropEffect = value;
    }
    get effectAllowed() {
      return this[effectAllowed$];
    }
    set effectAllowed(value) {
      super.effectAllowed = value;
    }
    get files() {
      return this[files$];
    }
    set files(value) {
      super.files = value;
    }
    get types() {
      return this[types$];
    }
    set types(value) {
      super.types = value;
    }
  };
  (synthetic_data_transfer.SyntheticDataTransfer.new = function(dropEffect, effectAllowed, files, types) {
    this[dropEffect$] = dropEffect;
    this[effectAllowed$] = effectAllowed;
    this[files$] = files;
    this[types$] = types;
    ;
  }).prototype = synthetic_data_transfer.SyntheticDataTransfer.prototype;
  dart.addTypeTests(synthetic_data_transfer.SyntheticDataTransfer);
  dart.addTypeCaches(synthetic_data_transfer.SyntheticDataTransfer);
  dart.setLibraryUri(synthetic_data_transfer.SyntheticDataTransfer, I[2]);
  dart.setFieldSignature(synthetic_data_transfer.SyntheticDataTransfer, () => ({
    __proto__: dart.getFields(synthetic_data_transfer.SyntheticDataTransfer.__proto__),
    dropEffect: dart.finalFieldType(dart.legacy(core.String)),
    effectAllowed: dart.finalFieldType(dart.legacy(core.String)),
    files: dart.finalFieldType(dart.legacy(core.List)),
    types: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String))))
  }));
  synthetic_data_transfer.syntheticDataTransferFactory = function syntheticDataTransferFactory(dt) {
    if (dt == null) return null;
    if (T.SyntheticDataTransferL().is(dt)) return dt;
    let rawFiles = null;
    let rawTypes = null;
    let effectAllowed = null;
    let dropEffect = null;
    if (T.DataTransferL().is(dt)) {
      rawFiles = dt.files;
      rawTypes = dt.types;
      try {
        effectAllowed = dt.effectAllowed;
      } catch (e) {
        let _ = dart.getThrown(e);
        effectAllowed = "uninitialized";
      }
      try {
        dropEffect = dt.dropEffect;
      } catch (e$) {
        let _ = dart.getThrown(e$);
        dropEffect = "none";
      }
    } else {
      let castedDt = dart.legacy(dart.lazyJSType(() => dart.global.NonNativeDataTransfer, "NonNativeDataTransfer")).as(dt);
      rawFiles = castedDt.files;
      rawTypes = castedDt.types;
      try {
        effectAllowed = castedDt.effectAllowed;
      } catch (e$0) {
        let _ = dart.getThrown(e$0);
        effectAllowed = "uninitialized";
      }
      try {
        dropEffect = castedDt.dropEffect;
      } catch (e$1) {
        let _ = dart.getThrown(e$1);
        dropEffect = "none";
      }
    }
    let files = (() => {
      let t6 = T.JSArrayOfFileL().of([]);
      let t7 = rawFiles;
      if (t7 != null) for (let t9 of t7) {
        let t8 = T.FileL().as(t9);
        t6[$add](t8);
      }
      return t6;
    })();
    let types = (() => {
      let t10 = T.JSArrayOfStringL().of([]);
      let t11 = rawTypes;
      if (t11 != null) for (let t13 of t11) {
        let t12 = T.StringL().as(t13);
        t10[$add](t12);
      }
      return t10;
    })();
    return new synthetic_data_transfer.SyntheticDataTransfer.new(dropEffect, effectAllowed, files, types);
  };
  event_helpers.wrapNativeKeyboardEvent = function wrapNativeKeyboardEvent(nativeEvent) {
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticKeyboardEvent, "SyntheticKeyboardEvent")).as(js_interop_helpers.jsifyAndAllowInterop(new (T.IdentityMapOfStringL$ObjectL()).from(["bubbles", nativeEvent.bubbles, "cancelable", nativeEvent.cancelable, "currentTarget", nativeEvent[$currentTarget], "defaultPrevented", nativeEvent.defaultPrevented, "eventPhase", nativeEvent.eventPhase, "isTrusted", nativeEvent.isTrusted, "nativeEvent", nativeEvent, "target", nativeEvent[$target], "timeStamp", nativeEvent.timeStamp, "type", nativeEvent.type, "stopPropagation", dart.bind(nativeEvent, 'stopPropagation'), "preventDefault", dart.bind(nativeEvent, 'preventDefault'), "persist", dart.fn(() => {
      }, T.VoidToNull()), "isPersistent", dart.fn(() => true, T.VoidToboolL()), "altKey", nativeEvent.altKey, "char", nativeEvent.charCode == null ? null : core.String.fromCharCode(nativeEvent.charCode), "ctrlKey", nativeEvent.ctrlKey, "locale", null, "location", nativeEvent.location, "key", nativeEvent.key, "metaKey", nativeEvent.metaKey, "repeat", nativeEvent.repeat, "shiftKey", nativeEvent.shiftKey, "keyCode", nativeEvent.keyCode, "charCode", nativeEvent.charCode])));
  };
  event_helpers.wrapNativeMouseEvent = function wrapNativeMouseEvent(nativeEvent) {
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticMouseEvent, "SyntheticMouseEvent")).as(js_interop_helpers.jsifyAndAllowInterop(new (T.IdentityMapOfStringL$ObjectL()).from(["bubbles", nativeEvent.bubbles, "cancelable", nativeEvent.cancelable, "currentTarget", nativeEvent[$currentTarget], "defaultPrevented", nativeEvent.defaultPrevented, "eventPhase", nativeEvent.eventPhase, "isTrusted", nativeEvent.isTrusted, "nativeEvent", nativeEvent, "target", nativeEvent[$target], "timeStamp", nativeEvent.timeStamp, "type", nativeEvent.type, "stopPropagation", dart.bind(nativeEvent, 'stopPropagation'), "preventDefault", dart.bind(nativeEvent, 'preventDefault'), "persist", dart.fn(() => {
      }, T.VoidToNull()), "isPersistent", dart.fn(() => true, T.VoidToboolL()), "altKey", nativeEvent.altKey, "button", nativeEvent.button, "buttons", nativeEvent.buttons, "clientX", nativeEvent[$client].x, "clientY", nativeEvent[$client].y, "ctrlKey", nativeEvent.ctrlKey, "dataTransfer", nativeEvent[$dataTransfer], "metaKey", nativeEvent.metaKey, "pageX", nativeEvent[$page].x, "pageY", nativeEvent[$page].y, "relatedTarget", nativeEvent[$relatedTarget], "screenX", nativeEvent[$screen].x, "screenY", nativeEvent[$screen].y, "shiftKey", nativeEvent.shiftKey])));
  };
  event_helpers.fakeSyntheticFormEvent = function fakeSyntheticFormEvent(element, type) {
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticFormEvent, "SyntheticFormEvent")).as(js_interop_helpers.jsifyAndAllowInterop(new (T.IdentityMapOfStringL$ObjectL()).from(["bubbles", false, "cancelable", false, "currentTarget", element, "defaultPrevented", false, "eventPhase", 2, "isTrusted", false, "nativeEvent", null, "target", element, "timeStamp", new core.DateTime.now().millisecondsSinceEpoch, "type", type, "stopPropagation", dart.fn(() => {
      }, T.VoidToNull()), "preventDefault", dart.fn(() => {
      }, T.VoidToNull()), "persist", dart.fn(() => {
      }, T.VoidToNull()), "isPersistent", dart.fn(() => true, T.VoidToboolL())])));
  };
  event_helpers._wrapBaseEventPropertiesInMap = function _wrapBaseEventPropertiesInMap(opts) {
    let t15, t14, t14$, t15$, t14$0, t14$1, t15$0, t14$2, t15$1, t14$3, t14$4, t15$2, t14$5, t14$6, t15$3, t14$7, t14$8, t15$4, t14$9, t15$5, t14$10, t14$11, t15$6, t14$12, t15$7, t14$13, t15$8, t14$14, t14$15, t15$9, t14$16, t14$17;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    return new (T.IdentityMapOfStringL$dynamic()).from(["bubbles", (t14$ = (t14 = bubbles, t14 == null ? (t15 = baseEvent, t15 == null ? null : t15.bubbles) : t14), t14$ == null ? false : t14$), "cancelable", (t14$1 = (t14$0 = cancelable, t14$0 == null ? (t15$ = baseEvent, t15$ == null ? null : t15$.cancelable) : t14$0), t14$1 == null ? true : t14$1), "currentTarget", (t14$2 = currentTarget, t14$2 == null ? (t15$0 = baseEvent, t15$0 == null ? null : t15$0.currentTarget) : t14$2), "defaultPrevented", (t14$4 = (t14$3 = defaultPrevented, t14$3 == null ? (t15$1 = baseEvent, t15$1 == null ? null : t15$1.defaultPrevented) : t14$3), t14$4 == null ? false : t14$4), "preventDefault", (t14$6 = (t14$5 = preventDefault, t14$5 == null ? (t15$2 = baseEvent, t15$2 == null ? null : dart.tearoffInterop(t15$2.preventDefault)) : t14$5), t14$6 == null ? dart.fn(() => {
      }, T.VoidToNull()) : t14$6), "stopPropagation", (t14$8 = (t14$7 = stopPropagation, t14$7 == null ? (t15$3 = baseEvent, t15$3 == null ? null : t15$3.stopPropagation) : t14$7), t14$8 == null ? dart.fn(() => {
      }, T.VoidToNull()) : t14$8), "eventPhase", (t14$9 = eventPhase, t14$9 == null ? (t15$4 = baseEvent, t15$4 == null ? null : t15$4.eventPhase) : t14$9), "isTrusted", (t14$11 = (t14$10 = isTrusted, t14$10 == null ? (t15$5 = baseEvent, t15$5 == null ? null : t15$5.isTrusted) : t14$10), t14$11 == null ? false : t14$11), "nativeEvent", (t14$12 = nativeEvent, t14$12 == null ? (t15$6 = baseEvent, t15$6 == null ? null : t15$6.nativeEvent) : t14$12), "target", (t14$13 = target, t14$13 == null ? (t15$7 = baseEvent, t15$7 == null ? null : t15$7.target) : t14$13), "timeStamp", (t14$15 = (t14$14 = timeStamp, t14$14 == null ? (t15$8 = baseEvent, t15$8 == null ? null : t15$8.timeStamp) : t14$14), t14$15 == null ? 0 : t14$15), "type", (t14$17 = (t14$16 = type, t14$16 == null ? (t15$9 = baseEvent, t15$9 == null ? null : t15$9.type) : t14$16), t14$17 == null ? "empty event" : t14$17)]);
  };
  event_helpers.createSyntheticEvent = function createSyntheticEvent(opts) {
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticEvent, "SyntheticEvent")).as(js_interop_helpers.jsifyAndAllowInterop(event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})));
  };
  event_helpers.createSyntheticClipboardEvent = function createSyntheticClipboardEvent(opts) {
    let t17, t16;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let clipboardData = opts && 'clipboardData' in opts ? opts.clipboardData : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticClipboardEvent, "SyntheticClipboardEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t14 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t15 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t14[$_set](t15.key, t15.value);
      t14[$_set]("clipboardData", (t16 = clipboardData, t16 == null ? (t17 = baseEvent, t17 == null ? null : t17.clipboardData) : t16));
      return t14;
    })()));
  };
  event_helpers.createSyntheticKeyboardEvent = function createSyntheticKeyboardEvent(opts) {
    let t19, t18, t18$, t19$, t18$0, t19$0, t18$1, t19$1, t18$2, t18$3, t19$2, t18$4, t19$3, t18$5, t19$4, t18$6, t19$5, t18$7, t19$6, t18$8, t18$9, t19$7, t18$10, t19$8, t18$11, t18$12;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let altKey = opts && 'altKey' in opts ? opts.altKey : null;
    let char = opts && 'char' in opts ? opts.char : null;
    let ctrlKey = opts && 'ctrlKey' in opts ? opts.ctrlKey : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let metaKey = opts && 'metaKey' in opts ? opts.metaKey : null;
    let repeat = opts && 'repeat' in opts ? opts.repeat : null;
    let shiftKey = opts && 'shiftKey' in opts ? opts.shiftKey : null;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : null;
    let charCode = opts && 'charCode' in opts ? opts.charCode : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticKeyboardEvent, "SyntheticKeyboardEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t16 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t17 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t16[$_set](t17.key, t17.value);
      t16[$_set]("altKey", (t18$ = (t18 = altKey, t18 == null ? (t19 = baseEvent, t19 == null ? null : t19.altKey) : t18), t18$ == null ? false : t18$));
      t16[$_set]("char", (t18$0 = char, t18$0 == null ? (t19$ = baseEvent, t19$ == null ? null : t19$.char) : t18$0));
      t16[$_set]("charCode", (t18$1 = charCode, t18$1 == null ? (t19$0 = baseEvent, t19$0 == null ? null : t19$0.charCode) : t18$1));
      t16[$_set]("ctrlKey", (t18$3 = (t18$2 = ctrlKey, t18$2 == null ? (t19$1 = baseEvent, t19$1 == null ? null : t19$1.ctrlKey) : t18$2), t18$3 == null ? false : t18$3));
      t16[$_set]("locale", (t18$4 = locale, t18$4 == null ? (t19$2 = baseEvent, t19$2 == null ? null : t19$2.locale) : t18$4));
      t16[$_set]("location", (t18$5 = location, t18$5 == null ? (t19$3 = baseEvent, t19$3 == null ? null : t19$3.location) : t18$5));
      t16[$_set]("key", (t18$6 = key, t18$6 == null ? (t19$4 = baseEvent, t19$4 == null ? null : t19$4.key) : t18$6));
      t16[$_set]("keyCode", (t18$7 = keyCode, t18$7 == null ? (t19$5 = baseEvent, t19$5 == null ? null : t19$5.keyCode) : t18$7));
      t16[$_set]("metaKey", (t18$9 = (t18$8 = metaKey, t18$8 == null ? (t19$6 = baseEvent, t19$6 == null ? null : t19$6.metaKey) : t18$8), t18$9 == null ? false : t18$9));
      t16[$_set]("repeat", (t18$10 = repeat, t18$10 == null ? (t19$7 = baseEvent, t19$7 == null ? null : t19$7.repeat) : t18$10));
      t16[$_set]("shiftKey", (t18$12 = (t18$11 = shiftKey, t18$11 == null ? (t19$8 = baseEvent, t19$8 == null ? null : t19$8.shiftKey) : t18$11), t18$12 == null ? false : t18$12));
      return t16;
    })()));
  };
  event_helpers.createSyntheticCompositionEvent = function createSyntheticCompositionEvent(opts) {
    let t21, t20;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let data = opts && 'data' in opts ? opts.data : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticCompositionEvent, "SyntheticCompositionEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t18 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t19 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t18[$_set](t19.key, t19.value);
      t18[$_set]("data", (t20 = data, t20 == null ? (t21 = baseEvent, t21 == null ? null : t21.data) : t20));
      return t18;
    })()));
  };
  event_helpers.createSyntheticFocusEvent = function createSyntheticFocusEvent(opts) {
    let t23, t22;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let relatedTarget = opts && 'relatedTarget' in opts ? opts.relatedTarget : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticFocusEvent, "SyntheticFocusEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t20 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t21 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t20[$_set](t21.key, t21.value);
      t20[$_set]("relatedTarget", (t22 = relatedTarget, t22 == null ? (t23 = baseEvent, t23 == null ? null : t23.relatedTarget) : t22));
      return t20;
    })()));
  };
  event_helpers.createSyntheticFormEvent = function createSyntheticFormEvent(opts) {
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticFormEvent, "SyntheticFormEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t22 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t23 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t22[$_set](t23.key, t23.value);
      return t22;
    })()));
  };
  event_helpers.createSyntheticMouseEvent = function createSyntheticMouseEvent(opts) {
    let t27, t26, t26$, t27$, t26$0, t27$0, t26$1, t27$1, t26$2, t27$2, t26$3, t27$3, t26$4, t26$5, t27$4, t26$6, t27$5, t26$7, t26$8, t27$6, t26$9, t27$7, t26$10, t27$8, t26$11, t27$9, t26$12, t27$10, t26$13, t27$11, t26$14, t26$15;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let altKey = opts && 'altKey' in opts ? opts.altKey : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let buttons = opts && 'buttons' in opts ? opts.buttons : null;
    let clientX = opts && 'clientX' in opts ? opts.clientX : null;
    let clientY = opts && 'clientY' in opts ? opts.clientY : null;
    let ctrlKey = opts && 'ctrlKey' in opts ? opts.ctrlKey : null;
    let dataTransfer = opts && 'dataTransfer' in opts ? opts.dataTransfer : null;
    let metaKey = opts && 'metaKey' in opts ? opts.metaKey : null;
    let pageX = opts && 'pageX' in opts ? opts.pageX : null;
    let pageY = opts && 'pageY' in opts ? opts.pageY : null;
    let relatedTarget = opts && 'relatedTarget' in opts ? opts.relatedTarget : null;
    let screenX = opts && 'screenX' in opts ? opts.screenX : null;
    let screenY = opts && 'screenY' in opts ? opts.screenY : null;
    let shiftKey = opts && 'shiftKey' in opts ? opts.shiftKey : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticMouseEvent, "SyntheticMouseEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t24 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t25 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t24[$_set](t25.key, t25.value);
      t24[$_set]("altKey", (t26$ = (t26 = altKey, t26 == null ? (t27 = baseEvent, t27 == null ? null : t27.altKey) : t26), t26$ == null ? false : t26$));
      t24[$_set]("button", (t26$0 = button, t26$0 == null ? (t27$ = baseEvent, t27$ == null ? null : t27$.button) : t26$0));
      t24[$_set]("buttons", (t26$1 = buttons, t26$1 == null ? (t27$0 = baseEvent, t27$0 == null ? null : t27$0.buttons) : t26$1));
      t24[$_set]("clientX", (t26$2 = clientX, t26$2 == null ? (t27$1 = baseEvent, t27$1 == null ? null : t27$1.clientX) : t26$2));
      t24[$_set]("clientY", (t26$3 = clientY, t26$3 == null ? (t27$2 = baseEvent, t27$2 == null ? null : t27$2.clientY) : t26$3));
      t24[$_set]("ctrlKey", (t26$5 = (t26$4 = ctrlKey, t26$4 == null ? (t27$3 = baseEvent, t27$3 == null ? null : t27$3.ctrlKey) : t26$4), t26$5 == null ? false : t26$5));
      t24[$_set]("dataTransfer", (t26$6 = dataTransfer, t26$6 == null ? (t27$4 = baseEvent, t27$4 == null ? null : event_helpers['DataTransferHelper|get#dataTransfer'](t27$4)) : t26$6));
      t24[$_set]("metaKey", (t26$8 = (t26$7 = metaKey, t26$7 == null ? (t27$5 = baseEvent, t27$5 == null ? null : t27$5.metaKey) : t26$7), t26$8 == null ? false : t26$8));
      t24[$_set]("pageX", (t26$9 = pageX, t26$9 == null ? (t27$6 = baseEvent, t27$6 == null ? null : t27$6.pageX) : t26$9));
      t24[$_set]("pageY", (t26$10 = pageY, t26$10 == null ? (t27$7 = baseEvent, t27$7 == null ? null : t27$7.pageY) : t26$10));
      t24[$_set]("relatedTarget", (t26$11 = relatedTarget, t26$11 == null ? (t27$8 = baseEvent, t27$8 == null ? null : t27$8.relatedTarget) : t26$11));
      t24[$_set]("screenX", (t26$12 = screenX, t26$12 == null ? (t27$9 = baseEvent, t27$9 == null ? null : t27$9.screenX) : t26$12));
      t24[$_set]("screenY", (t26$13 = screenY, t26$13 == null ? (t27$10 = baseEvent, t27$10 == null ? null : t27$10.screenY) : t26$13));
      t24[$_set]("shiftKey", (t26$15 = (t26$14 = shiftKey, t26$14 == null ? (t27$11 = baseEvent, t27$11 == null ? null : t27$11.shiftKey) : t26$14), t26$15 == null ? false : t26$15));
      return t24;
    })()));
  };
  event_helpers.createSyntheticPointerEvent = function createSyntheticPointerEvent(opts) {
    let t29, t28, t29$, t28$, t29$0, t28$0, t29$1, t28$1, t29$2, t28$2, t29$3, t28$3, t29$4, t28$4, t29$5, t28$5, t29$6, t28$6, t29$7, t28$7;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let pointerId = opts && 'pointerId' in opts ? opts.pointerId : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    let tangentialPressure = opts && 'tangentialPressure' in opts ? opts.tangentialPressure : null;
    let tiltX = opts && 'tiltX' in opts ? opts.tiltX : null;
    let tiltY = opts && 'tiltY' in opts ? opts.tiltY : null;
    let twist = opts && 'twist' in opts ? opts.twist : null;
    let pointerType = opts && 'pointerType' in opts ? opts.pointerType : null;
    let isPrimary = opts && 'isPrimary' in opts ? opts.isPrimary : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticPointerEvent, "SyntheticPointerEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t26 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t27 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t26[$_set](t27.key, t27.value);
      t26[$_set]("pointerId", (t28 = pointerId, t28 == null ? (t29 = baseEvent, t29 == null ? null : t29.pointerId) : t28));
      t26[$_set]("width", (t28$ = width, t28$ == null ? (t29$ = baseEvent, t29$ == null ? null : t29$.width) : t28$));
      t26[$_set]("height", (t28$0 = height, t28$0 == null ? (t29$0 = baseEvent, t29$0 == null ? null : t29$0.height) : t28$0));
      t26[$_set]("pressure", (t28$1 = pressure, t28$1 == null ? (t29$1 = baseEvent, t29$1 == null ? null : t29$1.pressure) : t28$1));
      t26[$_set]("tangentialPressure", (t28$2 = tangentialPressure, t28$2 == null ? (t29$2 = baseEvent, t29$2 == null ? null : t29$2.tangentialPressure) : t28$2));
      t26[$_set]("tiltX", (t28$3 = tiltX, t28$3 == null ? (t29$3 = baseEvent, t29$3 == null ? null : t29$3.tiltX) : t28$3));
      t26[$_set]("tiltY", (t28$4 = tiltY, t28$4 == null ? (t29$4 = baseEvent, t29$4 == null ? null : t29$4.tiltY) : t28$4));
      t26[$_set]("twist", (t28$5 = twist, t28$5 == null ? (t29$5 = baseEvent, t29$5 == null ? null : t29$5.twist) : t28$5));
      t26[$_set]("pointerType", (t28$6 = pointerType, t28$6 == null ? (t29$6 = baseEvent, t29$6 == null ? null : t29$6.pointerType) : t28$6));
      t26[$_set]("isPrimary", (t28$7 = isPrimary, t28$7 == null ? (t29$7 = baseEvent, t29$7 == null ? null : t29$7.isPrimary) : t28$7));
      return t26;
    })()));
  };
  event_helpers.createSyntheticTouchEvent = function createSyntheticTouchEvent(opts) {
    let t31, t30, t30$, t31$, t30$0, t31$0, t30$1, t30$2, t31$1, t30$3, t30$4, t31$2, t30$5, t30$6, t31$3, t30$7, t31$4, t30$8;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let altKey = opts && 'altKey' in opts ? opts.altKey : null;
    let changedTouches = opts && 'changedTouches' in opts ? opts.changedTouches : null;
    let ctrlKey = opts && 'ctrlKey' in opts ? opts.ctrlKey : null;
    let metaKey = opts && 'metaKey' in opts ? opts.metaKey : null;
    let shiftKey = opts && 'shiftKey' in opts ? opts.shiftKey : null;
    let targetTouches = opts && 'targetTouches' in opts ? opts.targetTouches : null;
    let touches = opts && 'touches' in opts ? opts.touches : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticTouchEvent, "SyntheticTouchEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t28 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t29 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t28[$_set](t29.key, t29.value);
      t28[$_set]("altKey", (t30$ = (t30 = altKey, t30 == null ? (t31 = baseEvent, t31 == null ? null : t31.altKey) : t30), t30$ == null ? false : t30$));
      t28[$_set]("changedTouches", (t30$0 = changedTouches, t30$0 == null ? (t31$ = baseEvent, t31$ == null ? null : t31$.changedTouches) : t30$0));
      t28[$_set]("ctrlKey", (t30$2 = (t30$1 = ctrlKey, t30$1 == null ? (t31$0 = baseEvent, t31$0 == null ? null : t31$0.ctrlKey) : t30$1), t30$2 == null ? false : t30$2));
      t28[$_set]("metaKey", (t30$4 = (t30$3 = metaKey, t30$3 == null ? (t31$1 = baseEvent, t31$1 == null ? null : t31$1.metaKey) : t30$3), t30$4 == null ? false : t30$4));
      t28[$_set]("shiftKey", (t30$6 = (t30$5 = shiftKey, t30$5 == null ? (t31$2 = baseEvent, t31$2 == null ? null : t31$2.shiftKey) : t30$5), t30$6 == null ? false : t30$6));
      t28[$_set]("targetTouches", (t30$7 = targetTouches, t30$7 == null ? (t31$3 = baseEvent, t31$3 == null ? null : t31$3.targetTouches) : t30$7));
      t28[$_set]("touches", (t30$8 = touches, t30$8 == null ? (t31$4 = baseEvent, t31$4 == null ? null : t31$4.touches) : t30$8));
      return t28;
    })()));
  };
  event_helpers.createSyntheticTransitionEvent = function createSyntheticTransitionEvent(opts) {
    let t33, t32, t33$, t32$, t33$0, t32$0;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let propertyName = opts && 'propertyName' in opts ? opts.propertyName : null;
    let elapsedTime = opts && 'elapsedTime' in opts ? opts.elapsedTime : null;
    let pseudoElement = opts && 'pseudoElement' in opts ? opts.pseudoElement : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticTransitionEvent, "SyntheticTransitionEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t30 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t31 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t30[$_set](t31.key, t31.value);
      t30[$_set]("propertyName", (t32 = propertyName, t32 == null ? (t33 = baseEvent, t33 == null ? null : t33.propertyName) : t32));
      t30[$_set]("elapsedTime", (t32$ = elapsedTime, t32$ == null ? (t33$ = baseEvent, t33$ == null ? null : t33$.elapsedTime) : t32$));
      t30[$_set]("pseudoElement", (t32$0 = pseudoElement, t32$0 == null ? (t33$0 = baseEvent, t33$0 == null ? null : t33$0.pseudoElement) : t32$0));
      return t30;
    })()));
  };
  event_helpers.createSyntheticAnimationEvent = function createSyntheticAnimationEvent(opts) {
    let t35, t34, t35$, t34$, t35$0, t34$0;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let animationName = opts && 'animationName' in opts ? opts.animationName : null;
    let elapsedTime = opts && 'elapsedTime' in opts ? opts.elapsedTime : null;
    let pseudoElement = opts && 'pseudoElement' in opts ? opts.pseudoElement : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticAnimationEvent, "SyntheticAnimationEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t32 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t33 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t32[$_set](t33.key, t33.value);
      t32[$_set]("animationName", (t34 = animationName, t34 == null ? (t35 = baseEvent, t35 == null ? null : t35.animationName) : t34));
      t32[$_set]("elapsedTime", (t34$ = elapsedTime, t34$ == null ? (t35$ = baseEvent, t35$ == null ? null : t35$.elapsedTime) : t34$));
      t32[$_set]("pseudoElement", (t34$0 = pseudoElement, t34$0 == null ? (t35$0 = baseEvent, t35$0 == null ? null : t35$0.pseudoElement) : t34$0));
      return t32;
    })()));
  };
  event_helpers.createSyntheticUIEvent = function createSyntheticUIEvent(opts) {
    let t37, t36, t37$, t36$;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let detail = opts && 'detail' in opts ? opts.detail : null;
    let view = opts && 'view' in opts ? opts.view : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticUIEvent, "SyntheticUIEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t34 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t35 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t34[$_set](t35.key, t35.value);
      t34[$_set]("detail", (t36 = detail, t36 == null ? (t37 = baseEvent, t37 == null ? null : t37.detail) : t36));
      t34[$_set]("view", (t36$ = view, t36$ == null ? (t37$ = baseEvent, t37$ == null ? null : t37$.view) : t36$));
      return t34;
    })()));
  };
  event_helpers.createSyntheticWheelEvent = function createSyntheticWheelEvent(opts) {
    let t39, t38, t39$, t38$, t39$0, t38$0, t39$1, t38$1;
    let baseEvent = opts && 'baseEvent' in opts ? opts.baseEvent : null;
    let bubbles = opts && 'bubbles' in opts ? opts.bubbles : null;
    let cancelable = opts && 'cancelable' in opts ? opts.cancelable : null;
    let currentTarget = opts && 'currentTarget' in opts ? opts.currentTarget : null;
    let defaultPrevented = opts && 'defaultPrevented' in opts ? opts.defaultPrevented : null;
    let preventDefault = opts && 'preventDefault' in opts ? opts.preventDefault : null;
    let stopPropagation = opts && 'stopPropagation' in opts ? opts.stopPropagation : null;
    let eventPhase = opts && 'eventPhase' in opts ? opts.eventPhase : null;
    let isTrusted = opts && 'isTrusted' in opts ? opts.isTrusted : null;
    let nativeEvent = opts && 'nativeEvent' in opts ? opts.nativeEvent : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let deltaX = opts && 'deltaX' in opts ? opts.deltaX : null;
    let deltaMode = opts && 'deltaMode' in opts ? opts.deltaMode : null;
    let deltaY = opts && 'deltaY' in opts ? opts.deltaY : null;
    let deltaZ = opts && 'deltaZ' in opts ? opts.deltaZ : null;
    return dart.legacy(dart.lazyJSType(() => dart.global.SyntheticWheelEvent, "SyntheticWheelEvent")).as(js_interop_helpers.jsifyAndAllowInterop((() => {
      let t36 = new (T.IdentityMapOfStringL$dynamic()).new();
      for (let t37 of event_helpers._wrapBaseEventPropertiesInMap({baseEvent: baseEvent, bubbles: bubbles, cancelable: cancelable, currentTarget: currentTarget, defaultPrevented: defaultPrevented, preventDefault: preventDefault, stopPropagation: stopPropagation, eventPhase: eventPhase, isTrusted: isTrusted, nativeEvent: nativeEvent, target: target, timeStamp: timeStamp, type: type})[$entries])
        t36[$_set](t37.key, t37.value);
      t36[$_set]("deltaX", (t38 = deltaX, t38 == null ? (t39 = baseEvent, t39 == null ? null : t39.deltaX) : t38));
      t36[$_set]("deltaMode", (t38$ = deltaMode, t38$ == null ? (t39$ = baseEvent, t39$ == null ? null : t39$.deltaMode) : t38$));
      t36[$_set]("deltaY", (t38$0 = deltaY, t38$0 == null ? (t39$0 = baseEvent, t39$0 == null ? null : t39$0.deltaY) : t38$0));
      t36[$_set]("deltaZ", (t38$1 = deltaZ, t38$1 == null ? (t39$1 = baseEvent, t39$1 == null ? null : t39$1.deltaZ) : t38$1));
      return t36;
    })()));
  };
  event_helpers['SyntheticEventTypeHelpers|_checkEventType'] = function SyntheticEventTypeHelpers$124_checkEventType($this, types) {
    return $this != null && $this.type != null && dart.test(types[$any](dart.fn(t => $this.type[$contains](t), T.StringLToboolL())));
  };
  event_helpers['SyntheticEventTypeHelpers|get#_checkEventType'] = function SyntheticEventTypeHelpers$124get$35_checkEventType($this) {
    return dart.fn(types => event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, types), T.ListLOfStringLToboolL());
  };
  event_helpers['SyntheticEventTypeHelpers|_hasProperty'] = function SyntheticEventTypeHelpers$124_hasProperty($this, propertyName) {
    return $this != null && dart.test(js_util.hasProperty($this, propertyName));
  };
  event_helpers['SyntheticEventTypeHelpers|get#_hasProperty'] = function SyntheticEventTypeHelpers$124get$35_hasProperty($this) {
    return dart.fn(propertyName => event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, propertyName), T.StringLToboolL());
  };
  event_helpers['SyntheticEventTypeHelpers|get#isPersistent'] = function SyntheticEventTypeHelpers$124get$35isPersistent($this) {
    return true;
  };
  event_helpers['SyntheticEventTypeHelpers|get#isClipboardEvent'] = function SyntheticEventTypeHelpers$124get$35isClipboardEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "clipboardData")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[1] || CT.C1));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isKeyboardEvent'] = function SyntheticEventTypeHelpers$124get$35isKeyboardEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "key")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[2] || CT.C2));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isCompositionEvent'] = function SyntheticEventTypeHelpers$124get$35isCompositionEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "data")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[3] || CT.C3));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isFocusEvent'] = function SyntheticEventTypeHelpers$124get$35isFocusEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "relatedTarget")) && !dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "button")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[4] || CT.C4));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isMouseEvent'] = function SyntheticEventTypeHelpers$124get$35isMouseEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "button")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[5] || CT.C5));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isPointerEvent'] = function SyntheticEventTypeHelpers$124get$35isPointerEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "pointerId")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[6] || CT.C6));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isTouchEvent'] = function SyntheticEventTypeHelpers$124get$35isTouchEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "targetTouches")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[7] || CT.C7));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isTransitionEvent'] = function SyntheticEventTypeHelpers$124get$35isTransitionEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "propertyName")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[8] || CT.C8));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isAnimationEvent'] = function SyntheticEventTypeHelpers$124get$35isAnimationEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "animationName")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[9] || CT.C9));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isUiEvent'] = function SyntheticEventTypeHelpers$124get$35isUiEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "detail")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[10] || CT.C10));
  };
  event_helpers['SyntheticEventTypeHelpers|get#isWheelEvent'] = function SyntheticEventTypeHelpers$124get$35isWheelEvent($this) {
    return dart.test(event_helpers['SyntheticEventTypeHelpers|_hasProperty']($this, "deltaX")) || dart.test(event_helpers['SyntheticEventTypeHelpers|_checkEventType']($this, C[11] || CT.C11));
  };
  event_helpers['DataTransferHelper|get#dataTransfer'] = function DataTransferHelper$124get$35dataTransfer($this) {
    return synthetic_data_transfer.syntheticDataTransferFactory($this.dataTransfer);
  };
  dart.trackLibraries("packages/react/src/ddc_emulated_function_name_bug", {
    "package:react/src/prop_validator.dart": prop_validator,
    "package:react/src/ddc_emulated_function_name_bug.dart": ddc_emulated_function_name_bug,
    "package:react/src/react_client/synthetic_data_transfer.dart": synthetic_data_transfer,
    "package:react/src/react_client/synthetic_event_wrappers.dart": synthetic_event_wrappers,
    "package:react/src/react_client/event_helpers.dart": event_helpers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["prop_validator.dart","ddc_emulated_function_name_bug.dart","react_client/synthetic_data_transfer.dart","react_client/event_helpers.dart"],"names":[],"mappings":"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","file":"ddc_emulated_function_name_bug.unsound.ddc.js"}');
  // Exports:
  return {
    src__prop_validator: prop_validator,
    src__ddc_emulated_function_name_bug: ddc_emulated_function_name_bug,
    src__react_client__synthetic_data_transfer: synthetic_data_transfer,
    src__react_client__synthetic_event_wrappers: synthetic_event_wrappers,
    src__react_client__event_helpers: event_helpers
  };
}));

//# sourceMappingURL=ddc_emulated_function_name_bug.unsound.ddc.js.map
