define(['dart_sdk', 'packages/w_common/src/common/disposable', 'packages/react/hooks'], (function load__packages__w_flux__src__action(dart_sdk, packages__w_common__src__common__disposable, packages__react__hooks) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const disposable = packages__w_common__src__common__disposable.src__common__disposable;
  const react = packages__react__hooks.react;
  var constants = Object.create(dart.library);
  var store = Object.create(dart.library);
  var action = Object.create(dart.library);
  var component_common = Object.create(dart.library);
  var $map = dartx.map;
  var $clear = dartx.clear;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $_equals = dartx._equals;
  var $_get = dartx._get;
  var $containsKey = dartx.containsKey;
  var $where = dartx.where;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    StoreL: () => (T$.StoreL = dart.constFn(dart.legacy(store.Store)))(),
    StreamControllerOfStoreL: () => (T$.StreamControllerOfStoreL = dart.constFn(async.StreamController$(T$.StoreL())))(),
    StreamTransformerOfStoreL$dynamic: () => (T$.StreamTransformerOfStoreL$dynamic = dart.constFn(async.StreamTransformer$(T$.StoreL(), dart.dynamic)))(),
    StreamTransformerLOfStoreL$dynamic: () => (T$.StreamTransformerLOfStoreL$dynamic = dart.constFn(dart.legacy(T$.StreamTransformerOfStoreL$dynamic())))(),
    StreamOfStoreL: () => (T$.StreamOfStoreL = dart.constFn(async.Stream$(T$.StoreL())))(),
    StreamLOfStoreL: () => (T$.StreamLOfStoreL = dart.constFn(dart.legacy(T$.StreamOfStoreL())))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    FutureLOfvoid: () => (T$.FutureLOfvoid = dart.constFn(dart.legacy(T$.FutureOfvoid())))(),
    VoidToFutureLOfvoid: () => (T$.VoidToFutureLOfvoid = dart.constFn(dart.fnType(T$.FutureLOfvoid(), [])))(),
    FutureOfNull: () => (T$.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    FutureLOfNull: () => (T$.FutureLOfNull = dart.constFn(dart.legacy(T$.FutureOfNull())))(),
    VoidTodynamic: () => (T$.VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))(),
    FutureL: () => (T$.FutureL = dart.constFn(dart.legacy(async.Future)))(),
    dynamicToFutureL: () => (T$.dynamicToFutureL = dart.constFn(dart.fnType(T$.FutureL(), [dart.dynamic])))(),
    boolL: () => (T$.boolL = dart.constFn(dart.legacy(core.bool)))(),
    VoidToboolL: () => (T$.VoidToboolL = dart.constFn(dart.fnType(T$.boolL(), [])))(),
    StoreLToboolL: () => (T$.StoreLToboolL = dart.constFn(dart.fnType(T$.boolL(), [T$.StoreL()])))(),
    JSArrayOfStoreL: () => (T$.JSArrayOfStoreL = dart.constFn(_interceptors.JSArray$(T$.StoreL())))(),
    StoreLTodynamic: () => (T$.StoreLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.StoreL()])))(),
    StoreLToLdynamic: () => (T$.StoreLToLdynamic = dart.constFn(dart.legacy(T$.StoreLTodynamic())))(),
    LinkedMapOfStoreL$StoreLToLdynamic: () => (T$.LinkedMapOfStoreL$StoreLToLdynamic = dart.constFn(_js_helper.LinkedMap$(T$.StoreL(), T$.StoreLToLdynamic())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:w_flux/src/store.dart",
    "package:w_flux/src/action.dart",
    "package:w_flux/src/component_common.dart"
  ];
  dart.defineLazy(constants, {
    /*constants.v3Deprecation*/get v3Deprecation() {
      return "Will be removed in 4.0.0";
    }
  }, true);
  var _stream = dart.privateName(store, "_stream");
  var _streamController = dart.privateName(store, "_streamController");
  const Stream_Disposable$36 = class Stream_Disposable extends async.Stream {};
  (Stream_Disposable$36.new = function() {
    disposable.Disposable.new.call(this);
    Stream_Disposable$36.__proto__.new.call(this);
  }).prototype = Stream_Disposable$36.prototype;
  (Stream_Disposable$36._internal = function() {
    disposable.Disposable.new.call(this);
    Stream_Disposable$36.__proto__._internal.call(this);
  }).prototype = Stream_Disposable$36.prototype;
  dart.applyMixin(Stream_Disposable$36, disposable.Disposable);
  store.Store = class Store extends Stream_Disposable$36 {
    get disposableTypeName() {
      return "Store";
    }
    get isBroadcast() {
      return this[_stream].isBroadcast;
    }
    get stream() {
      return this[_stream];
    }
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      if (dart.test(this.isDisposed)) {
        dart.throw(new core.StateError.new("Store of type " + dart.str(this.runtimeType) + " has been disposed"));
      }
      return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    manageActionSubscription(subscription) {
      this.getManagedDisposer(dart.fn(() => async.async(dart.void, function*() {
        return subscription.cancel();
      }), T$.VoidToFutureLOfvoid()));
    }
    trigger() {
      if (dart.test(this.isOrWillBeDisposed)) return;
      this[_streamController].add(this);
    }
    triggerOnAction(action, onAction = null) {
      this.triggerOnActionV2(dart.dynamic, action, onAction);
    }
    triggerOnActionV2(T, action, onAction = null) {
      if (dart.test(this.isOrWillBeDisposed)) {
        dart.throw(new core.StateError.new("Store of type " + dart.str(this.runtimeType) + " has been disposed"));
      }
      this.manageActionSubscription(action.listen(dart.fn(payload => async.async(core.Null, (function*() {
        if (onAction != null) {
          yield onAction(payload);
        }
        this.trigger();
      }).bind(this)), dart.fnType(T$.FutureLOfNull(), [dart.legacy(T)]))));
    }
  };
  (store.Store.new = function() {
    this[_stream] = null;
    this[_streamController] = T$.StreamControllerOfStoreL().broadcast();
    store.Store.__proto__.new.call(this);
    this.manageStreamController(this[_streamController]);
    this[_stream] = this[_streamController].stream;
  }).prototype = store.Store.prototype;
  (store.Store.withTransformer = function(transformer) {
    this[_stream] = null;
    this[_streamController] = T$.StreamControllerOfStoreL().new();
    store.Store.__proto__.new.call(this);
    this.manageStreamController(this[_streamController]);
    this[_stream] = T$.StreamLOfStoreL().as(this[_streamController].stream.transform(dart.dynamic, T$.StreamTransformerLOfStoreL$dynamic().as(transformer)).asBroadcastStream());
  }).prototype = store.Store.prototype;
  dart.addTypeTests(store.Store);
  dart.addTypeCaches(store.Store);
  dart.setMethodSignature(store.Store, () => ({
    __proto__: dart.getMethods(store.Store.__proto__),
    listen: dart.fnType(dart.legacy(async.StreamSubscription$(dart.legacy(store.Store))), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(store.Store)]))], {cancelOnError: dart.legacy(core.bool), onDone: dart.legacy(dart.fnType(dart.void, [])), onError: dart.legacy(core.Function)}, {}),
    manageActionSubscription: dart.fnType(dart.void, [dart.legacy(action.ActionSubscription)]),
    trigger: dart.fnType(dart.void, []),
    triggerOnAction: dart.fnType(dart.dynamic, [dart.legacy(action.Action)], [dart.legacy(dart.fnType(dart.void, [dart.dynamic]))]),
    triggerOnActionV2: dart.gFnType(T => [dart.void, [dart.legacy(action.Action$(dart.legacy(T)))], [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(T)]))]])
  }));
  dart.setGetterSignature(store.Store, () => ({
    __proto__: dart.getGetters(store.Store.__proto__),
    isBroadcast: dart.legacy(core.bool),
    stream: dart.legacy(async.Stream$(dart.legacy(store.Store)))
  }));
  dart.setLibraryUri(store.Store, I[0]);
  dart.setFieldSignature(store.Store, () => ({
    __proto__: dart.getFields(store.Store.__proto__),
    [_streamController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(store.Store)))),
    [_stream]: dart.fieldType(dart.legacy(async.Stream$(dart.legacy(store.Store))))
  }));
  var _listeners = dart.privateName(action, "_listeners");
  const _is_Action_default = Symbol('_is_Action_default');
  action.Action$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    const Object_Disposable$36 = class Object_Disposable extends core.Object {};
    (Object_Disposable$36.new = function() {
      disposable.Disposable.new.call(this);
    }).prototype = Object_Disposable$36.prototype;
    dart.applyMixin(Object_Disposable$36, disposable.Disposable);
    class Action extends Object_Disposable$36 {
      get disposableTypeName() {
        return "Action";
      }
      call(payload = null) {
        TL().as(payload);
        function callListenerInMicrotask(l) {
          return async.Future.microtask(dart.fn(() => dart.dcall(l, [payload]), T$.VoidTodynamic()));
        }
        dart.fn(callListenerInMicrotask, T$.dynamicToFutureL());
        return async.Future.wait(dart.dynamic, this[_listeners][$map](T$.FutureL(), callListenerInMicrotask));
      }
      clearListeners() {
        this[_listeners][$clear]();
      }
      listen(onData) {
        this[_listeners][$add](onData);
        return new action.ActionSubscription.new(dart.fn(() => this[_listeners][$remove](onData), T$.VoidToboolL()));
      }
      onDispose() {
        return async.async(core.Null, (function* onDispose() {
          this[_listeners][$clear]();
        }).bind(this));
      }
      _equals(other) {
        if (other == null) return false;
        return this === other;
      }
    }
    (Action.new = function() {
      this[_listeners] = [];
      Action.__proto__.new.call(this);
      ;
    }).prototype = Action.prototype;
    dart.addTypeTests(Action);
    Action.prototype[_is_Action_default] = true;
    dart.addTypeCaches(Action);
    dart.setMethodSignature(Action, () => ({
      __proto__: dart.getMethods(Action.__proto__),
      call: dart.fnType(dart.legacy(async.Future), [], [dart.legacy(core.Object)]),
      clearListeners: dart.fnType(dart.void, []),
      listen: dart.fnType(dart.legacy(action.ActionSubscription), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(T)]))]),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(Action, I[1]);
    dart.setFieldSignature(Action, () => ({
      __proto__: dart.getFields(Action.__proto__),
      [_listeners]: dart.fieldType(dart.legacy(core.List))
    }));
    dart.defineExtensionMethods(Action, ['_equals']);
    return Action;
  });
  action.Action = action.Action$();
  dart.addTypeTests(action.Action, _is_Action_default);
  var _onCancel$ = dart.privateName(action, "_onCancel");
  action.ActionSubscription = class ActionSubscription extends core.Object {
    cancel() {
      if (this[_onCancel$] != null) {
        dart.dsend(this, _onCancel$, []);
        this[_onCancel$] = null;
      }
    }
  };
  (action.ActionSubscription.new = function(_onCancel) {
    this[_onCancel$] = _onCancel;
    ;
  }).prototype = action.ActionSubscription.prototype;
  dart.addTypeTests(action.ActionSubscription);
  dart.addTypeCaches(action.ActionSubscription);
  dart.setMethodSignature(action.ActionSubscription, () => ({
    __proto__: dart.getMethods(action.ActionSubscription.__proto__),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(action.ActionSubscription, I[1]);
  dart.setFieldSignature(action.ActionSubscription, () => ({
    __proto__: dart.getFields(action.ActionSubscription.__proto__),
    [_onCancel$]: dart.fieldType(dart.legacy(core.Function))
  }));
  const _is_FluxComponentCommon_default = Symbol('_is_FluxComponentCommon_default');
  component_common.FluxComponentCommon$ = dart.generic((ActionsT, StoresT) => {
    var ActionsTL = () => (ActionsTL = dart.constFn(dart.legacy(ActionsT)))();
    var StoresTL = () => (StoresTL = dart.constFn(dart.legacy(StoresT)))();
    const Component_Disposable$36 = class Component_Disposable extends react.Component {};
    (Component_Disposable$36.new = function() {
      disposable.Disposable.new.call(this);
      Component_Disposable$36.__proto__.new.call(this);
    }).prototype = Component_Disposable$36.prototype;
    dart.applyMixin(Component_Disposable$36, disposable.Disposable);
    class FluxComponentCommon extends Component_Disposable$36 {
      get actions() {
        return ActionsTL().as(this.props[$_get]("actions"));
      }
      get store() {
        return StoresTL().as(this.props[$_get]("store"));
      }
      componentWillMount() {
        let customStoreHandlers = this.getStoreHandlers();
        let storesWithoutCustomHandlers = this.redrawOn()[$where](dart.fn(store => !dart.test(customStoreHandlers[$containsKey](store)), T$.StoreLToboolL()));
        customStoreHandlers[$forEach](dart.gbind(dart.bind(this, 'listenToStream'), T$.StoreL()));
        storesWithoutCustomHandlers[$forEach](dart.bind(this, 'listenToStoreForRedraw'));
      }
      listenToStoreForRedraw(store) {
        this.listenToStream(T$.StoreL(), store, dart.bind(this, 'handleRedrawOn'));
      }
      handleRedrawOn(store) {
        this.redraw();
      }
      componentWillUnmount() {
        this.dispose();
      }
      redrawOn() {
        if (T$.StoreL().is(this.store)) {
          return T$.JSArrayOfStoreL().of([T$.StoreL().as(this.store)]);
        } else {
          return T$.JSArrayOfStoreL().of([]);
        }
      }
      getStoreHandlers() {
        return new (T$.LinkedMapOfStoreL$StoreLToLdynamic()).new();
      }
      addSubscription(subscription) {
        this.manageStreamSubscription(subscription);
      }
    }
    (FluxComponentCommon.new = function() {
      FluxComponentCommon.__proto__.new.call(this);
      ;
    }).prototype = FluxComponentCommon.prototype;
    dart.addTypeTests(FluxComponentCommon);
    FluxComponentCommon.prototype[_is_FluxComponentCommon_default] = true;
    dart.addTypeCaches(FluxComponentCommon);
    dart.setMethodSignature(FluxComponentCommon, () => ({
      __proto__: dart.getMethods(FluxComponentCommon.__proto__),
      listenToStoreForRedraw: dart.fnType(dart.void, [dart.legacy(store.Store)]),
      handleRedrawOn: dart.fnType(dart.void, [dart.legacy(store.Store)]),
      redrawOn: dart.fnType(dart.legacy(core.List$(dart.legacy(store.Store))), []),
      getStoreHandlers: dart.fnType(dart.legacy(core.Map$(dart.legacy(store.Store), dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(store.Store)])))), []),
      addSubscription: dart.fnType(dart.void, [dart.legacy(async.StreamSubscription)])
    }));
    dart.setGetterSignature(FluxComponentCommon, () => ({
      __proto__: dart.getGetters(FluxComponentCommon.__proto__),
      actions: dart.legacy(ActionsT),
      store: dart.legacy(StoresT)
    }));
    dart.setLibraryUri(FluxComponentCommon, I[2]);
    return FluxComponentCommon;
  });
  component_common.FluxComponentCommon = component_common.FluxComponentCommon$();
  dart.addTypeTests(component_common.FluxComponentCommon, _is_FluxComponentCommon_default);
  dart.setBaseClass(store.Store.__proto__, async.Stream$(dart.legacy(store.Store)));
  dart.trackLibraries("packages/w_flux/src/action", {
    "package:w_flux/src/constants.dart": constants,
    "package:w_flux/src/store.dart": store,
    "package:w_flux/src/action.dart": action,
    "package:w_flux/src/component_common.dart": component_common
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart","store.dart","action.dart","component_common.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAca,uBAAa;;;;;;;;;;;;;;;;;;AC6BS;IAAO;;AAiChB,YAAA,AAAQ;IAAW;;AAQf;IAAO;WAYW;UAChC;UAAc;UAAe;AACzC,oBAAI;AAC8D,QAAhE,WAAM,wBAAW,AAA8C,4BAA9B,oBAAW;;AAG9C,YAAO,AAAQ,sBAAO,MAAM,YACf,OAAO,UAAU,MAAM,iBAAiB,aAAa;IACpE;6BAUiD;AACM,MAArD,wBAAmB;AAAY,cAAA,AAAa,aAAD;MAAS;IACtD;;AAWE,oBAAI,0BAAoB;AAEG,MAA3B,AAAkB,4BAAI;IACxB;oBAauB,QAAc;AACA,MAAnC,qCAAkB,MAAM,EAAE,QAAQ;IACpC;yBAUoC,QACb;AACrB,oBAAI;AAC8D,QAAhE,WAAM,wBAAW,AAA8C,4BAA9B,oBAAW;;AAO3C,MALH,8BAAyB,AAAO,MAAD,QAAQ,QAAC;AACtC,YAAI,QAAQ;AACa,UAAvB,MAAM,AAAQ,QAAA,CAAC,OAAO;;AAEf,QAAT;MACD;IACH;;;IArHc;IAGc,0BAAE;AAA9B;AAC2C,IAAzC,4BAAuB;AACW,IAAlC,gBAAU,AAAkB;EAC9B;0CAU0D;IAhB5C;IAiBU,0BAAE;AAD1B;AAE2C,IAAzC,4BAAuB;AAKkB,IAFzC,gBAEyB,wBAFf,AAAkB,AACvB,AACA,uDADsB,2CAAZ,WAAW;EAE5B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACxBiC;MAAQ;;gBAM1B;AAYb,iBAAO,wBAAwB;AAAM,gBAAO,wBAAU,cAAO,WAAD,CAAC,GAAC,OAAO;;;AACrE,cAAc,iCAAK,AAAW,qCAAI,uBAAuB;MAC3D;;AAOoB,QAAlB,AAAW;MACb;aAMkC;AACV,QAAtB,AAAW,uBAAI,MAAM;AACrB,cAAO,mCAAmB,cAAM,AAAW,0BAAO,MAAM;MAC1D;;AAGsB;AACF,UAAlB,AAAW;QACb;;;YAGwB;AACtB,cAAO,AAAU,UAAM,KAAK;MAC9B;;;MA7CK,mBAAa;;;IA8CpB;;;;;;;;;;;;;;;;;;;;;;;;;AAUI,UAAI;AACS,QAAF,WAAT;AACgB,QAAhB,mBAAY;;IAEhB;;;IARwB;;EAAU;;;;;;;;;;;;;;;;;;;;;;;;ACnEV,cAAsB,gBAAjB,AAAK,kBAAC;MAAsB;;AAkBpC,cAAoB,eAAf,AAAK,kBAAC;MAAmB;;AAU3C,kCAAsB;AACtB,0CACF,AAAW,wBAAM,QAAC,SAAU,WAAC,AAAoB,mBAAD,eAAa,KAAK;AAE3B,QAA3C,AAAoB,mBAAD,gCAAS;AAC+B,QAA3D,AAA4B,2BAAD,qBAAS;MACtC;6BASkC;AACK,QAArC,iCAAe,KAAK,YAAE;MACxB;qBAW0B;AAChB,QAAR;MACF;;AAKW,QAAT;MACF;;AAiBE,YAAU,eAAN;AACF,gBAAO,0BAAO,eAAN;;AAER,gBAAO;;MAEX;;AAWE,cAAO;MACT;sBAOwC;AACA,QAAtC,8BAAyB,YAAY;MACvC;;;;;IACF","file":"action.unsound.ddc.js"}');
  // Exports:
  return {
    src__constants: constants,
    src__store: store,
    src__action: action,
    src__component_common: component_common
  };
}));

//# sourceMappingURL=action.unsound.ddc.js.map
