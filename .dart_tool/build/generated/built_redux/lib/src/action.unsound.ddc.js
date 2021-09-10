define(['dart_sdk', 'packages/built_value/built_value', 'packages/built_collection/built_collection'], (function load__packages__built_redux__src__action(dart_sdk, packages__built_value__built_value, packages__built_collection__built_collection) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const built_value = packages__built_value__built_value.built_value;
  const list = packages__built_collection__built_collection.src__list;
  const list_multimap = packages__built_collection__built_collection.src__list_multimap;
  const map = packages__built_collection__built_collection.src__map;
  const set = packages__built_collection__built_collection.src__set;
  const set_multimap = packages__built_collection__built_collection.src__set_multimap;
  var store_change = Object.create(dart.library);
  var store = Object.create(dart.library);
  var typedefs = Object.create(dart.library);
  var middleware = Object.create(dart.library);
  var action$ = Object.create(dart.library);
  var reducer_builder = Object.create(dart.library);
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $isNotEmpty = dartx.isNotEmpty;
  var $map = dartx.map;
  var $reduce = dartx.reduce;
  var $addAll = dartx.addAll;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    StringL: () => (T$.StringL = dart.constFn(dart.legacy(core.String)))(),
    ActionL: () => (T$.ActionL = dart.constFn(dart.legacy(action$.Action)))(),
    ActionLTovoid: () => (T$.ActionLTovoid = dart.constFn(dart.fnType(dart.void, [T$.ActionL()])))(),
    ActionLToLvoid: () => (T$.ActionLToLvoid = dart.constFn(dart.legacy(T$.ActionLTovoid())))(),
    FnToFn: () => (T$.FnToFn = dart.constFn(dart.fnType(T$.ActionLToLvoid(), [T$.ActionLToLvoid()])))(),
    FnToLFn: () => (T$.FnToLFn = dart.constFn(dart.legacy(T$.FnToFn())))(),
    ObjectL: () => (T$.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    MiddlewareApiOfObjectL$ObjectL$ObjectL: () => (T$.MiddlewareApiOfObjectL$ObjectL$ObjectL = dart.constFn(middleware.MiddlewareApi$(T$.ObjectL(), T$.ObjectL(), T$.ObjectL())))(),
    MiddlewareApiLOfObjectL$ObjectL$ObjectL: () => (T$.MiddlewareApiLOfObjectL$ObjectL$ObjectL = dart.constFn(dart.legacy(T$.MiddlewareApiOfObjectL$ObjectL$ObjectL())))(),
    MiddlewareApiLOfObjectL$ObjectL$ObjectLToFn: () => (T$.MiddlewareApiLOfObjectL$ObjectL$ObjectLToFn = dart.constFn(dart.fnType(T$.FnToLFn(), [T$.MiddlewareApiLOfObjectL$ObjectL$ObjectL()])))(),
    MiddlewareApiLOfObjectL$ObjectL$ObjectLToLFn: () => (T$.MiddlewareApiLOfObjectL$ObjectL$ObjectLToLFn = dart.constFn(dart.legacy(T$.MiddlewareApiLOfObjectL$ObjectL$ObjectLToFn())))(),
    ActionLToNull: () => (T$.ActionLToNull = dart.constFn(dart.fnType(core.Null, [T$.ActionL()])))(),
    FnAndFnToFn: () => (T$.FnAndFnToFn = dart.constFn(dart.fnType(T$.FnToLFn(), [T$.FnToLFn(), T$.FnToLFn()])))(),
    ActionOfNull: () => (T$.ActionOfNull = dart.constFn(action$.Action$(core.Null)))(),
    boolL: () => (T$.boolL = dart.constFn(dart.legacy(core.bool)))(),
    ActionLToLNull: () => (T$.ActionLToLNull = dart.constFn(dart.legacy(T$.ActionLToNull())))(),
    FnToFn$2: () => (T$.FnToFn$2 = dart.constFn(dart.fnType(T$.ActionLToLNull(), [T$.ActionLToLvoid()])))(),
    FnToLFn$1: () => (T$.FnToLFn$1 = dart.constFn(dart.legacy(T$.FnToFn$2())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([], T$.MiddlewareApiLOfObjectL$ObjectL$ObjectLToLFn());
    }
  }, false);
  var C = [void 0];
  var I = [
    "package:built_redux/src/store_change.dart",
    "package:built_redux/src/store.dart",
    "package:built_redux/src/typedefs.dart",
    "package:built_redux/src/middleware.dart",
    "package:built_redux/src/action.dart",
    "package:built_redux/src/reducer_builder.dart"
  ];
  var next = dart.privateName(store_change, "StoreChange.next");
  var prev = dart.privateName(store_change, "StoreChange.prev");
  var action = dart.privateName(store_change, "StoreChange.action");
  const _is_StoreChange_default = Symbol('_is_StoreChange_default');
  store_change.StoreChange$ = dart.generic((State, StateBuilder, P) => {
    class StoreChange extends core.Object {
      get next() {
        return this[next];
      }
      set next(value) {
        super.next = value;
      }
      get prev() {
        return this[prev];
      }
      set prev(value) {
        super.prev = value;
      }
      get action() {
        return this[action];
      }
      set action(value) {
        super.action = value;
      }
    }
    (StoreChange.new = function(n, p, a) {
      this[next] = n;
      this[prev] = p;
      this[action] = a;
      ;
    }).prototype = StoreChange.prototype;
    dart.addTypeTests(StoreChange);
    StoreChange.prototype[_is_StoreChange_default] = true;
    dart.addTypeCaches(StoreChange);
    dart.setLibraryUri(StoreChange, I[0]);
    dart.setFieldSignature(StoreChange, () => ({
      __proto__: dart.getFields(StoreChange.__proto__),
      next: dart.finalFieldType(dart.legacy(State)),
      prev: dart.finalFieldType(dart.legacy(State)),
      action: dart.finalFieldType(dart.legacy(action$.Action$(dart.legacy(P))))
    }));
    return StoreChange;
  });
  store_change.StoreChange = store_change.StoreChange$();
  dart.addTypeTests(store_change.StoreChange, _is_StoreChange_default);
  var _map = dart.privateName(store_change, "_map");
  var _subscription = dart.privateName(store_change, "_subscription");
  const _is_StoreChangeHandlerBuilder_default = Symbol('_is_StoreChangeHandlerBuilder_default');
  store_change.StoreChangeHandlerBuilder$ = dart.generic((State, StateBuilder, Actions) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StoreChangeOfStateL$StateBuilderL$dynamic = () => (StoreChangeOfStateL$StateBuilderL$dynamic = dart.constFn(store_change.StoreChange$(StateL(), StateBuilderL(), dart.dynamic)))();
    var StoreChangeLOfStateL$StateBuilderL$dynamic = () => (StoreChangeLOfStateL$StateBuilderL$dynamic = dart.constFn(dart.legacy(StoreChangeOfStateL$StateBuilderL$dynamic())))();
    var StoreChangeLOfStateL$StateBuilderL$dynamicTovoid = () => (StoreChangeLOfStateL$StateBuilderL$dynamicTovoid = dart.constFn(dart.fnType(dart.void, [StoreChangeLOfStateL$StateBuilderL$dynamic()])))();
    var StoreChangeLOfStateL$StateBuilderL$dynamicToLvoid = () => (StoreChangeLOfStateL$StateBuilderL$dynamicToLvoid = dart.constFn(dart.legacy(StoreChangeLOfStateL$StateBuilderL$dynamicTovoid())))();
    var LinkedMapOfStringL$StoreChangeLOfStateL$StateBuilderL$dynamicToLvoid = () => (LinkedMapOfStringL$StoreChangeLOfStateL$StateBuilderL$dynamicToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StoreChangeLOfStateL$StateBuilderL$dynamicToLvoid())))();
    var StoreChangeLOfStateL$StateBuilderL$dynamicToNull = () => (StoreChangeLOfStateL$StateBuilderL$dynamicToNull = dart.constFn(dart.fnType(core.Null, [StoreChangeLOfStateL$StateBuilderL$dynamic()])))();
    var StoreOfStateL$StateBuilderL$ActionsL = () => (StoreOfStateL$StateBuilderL$ActionsL = dart.constFn(store.Store$(StateL(), StateBuilderL(), ActionsL())))();
    var StoreLOfStateL$StateBuilderL$ActionsL = () => (StoreLOfStateL$StateBuilderL$ActionsL = dart.constFn(dart.legacy(StoreOfStateL$StateBuilderL$ActionsL())))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    var ActionsL = () => (ActionsL = dart.constFn(dart.legacy(Actions)))();
    class StoreChangeHandlerBuilder extends core.Object {
      add(Payload, actionName, handler) {
        this[_map][$_set](actionName.name, dart.fn(change => {
          handler(new (store_change.StoreChange$(StateL(), StateBuilderL(), dart.legacy(Payload))).new(change.next, change.prev, dart.legacy(action$.Action$(dart.legacy(Payload))).as(change.action)));
        }, StoreChangeLOfStateL$StateBuilderL$dynamicToNull()));
      }
      build(store) {
        StoreLOfStateL$StateBuilderL$ActionsL().as(store);
        this[_subscription] = store.stream.listen(dart.fn(storeChange => {
          let handler = this[_map][$_get](storeChange.action.name);
          if (handler != null) handler(storeChange);
        }, StoreChangeLOfStateL$StateBuilderL$dynamicToNull()));
      }
      dispose() {
        this[_subscription].cancel();
      }
    }
    (StoreChangeHandlerBuilder.new = function() {
      this[_map] = new (LinkedMapOfStringL$StoreChangeLOfStateL$StateBuilderL$dynamicToLvoid()).new();
      this[_subscription] = null;
      ;
    }).prototype = StoreChangeHandlerBuilder.prototype;
    dart.addTypeTests(StoreChangeHandlerBuilder);
    StoreChangeHandlerBuilder.prototype[_is_StoreChangeHandlerBuilder_default] = true;
    dart.addTypeCaches(StoreChangeHandlerBuilder);
    dart.setMethodSignature(StoreChangeHandlerBuilder, () => ({
      __proto__: dart.getMethods(StoreChangeHandlerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(store_change.StoreChange$(dart.legacy(State), dart.legacy(StateBuilder), dart.legacy(Payload)))]))]]),
      build: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(StoreChangeHandlerBuilder, I[0]);
    dart.setFieldSignature(StoreChangeHandlerBuilder, () => ({
      __proto__: dart.getFields(StoreChangeHandlerBuilder.__proto__),
      [_map]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(store_change.StoreChange$(dart.legacy(State), dart.legacy(StateBuilder), dart.dynamic))]))))),
      [_subscription]: dart.fieldType(dart.legacy(async.StreamSubscription$(dart.legacy(store_change.StoreChange$(dart.legacy(State), dart.legacy(StateBuilder), dart.dynamic)))))
    }));
    return StoreChangeHandlerBuilder;
  });
  store_change.StoreChangeHandlerBuilder = store_change.StoreChangeHandlerBuilder$();
  dart.addTypeTests(store_change.StoreChangeHandlerBuilder, _is_StoreChangeHandlerBuilder_default);
  var _stateController = dart.privateName(store, "_stateController");
  var _state = dart.privateName(store, "_state");
  var _actions = dart.privateName(store, "_actions");
  const _is_Store_default = Symbol('_is_Store_default');
  store.Store$ = dart.generic((State, StateBuilder, Actions) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StoreChangeOfStateL$StateBuilderL$dynamic = () => (StoreChangeOfStateL$StateBuilderL$dynamic = dart.constFn(store_change.StoreChange$(StateL(), StateBuilderL(), dart.dynamic)))();
    var StoreChangeLOfStateL$StateBuilderL$dynamic = () => (StoreChangeLOfStateL$StateBuilderL$dynamic = dart.constFn(dart.legacy(StoreChangeOfStateL$StateBuilderL$dynamic())))();
    var StreamControllerOfStoreChangeLOfStateL$StateBuilderL$dynamic = () => (StreamControllerOfStoreChangeLOfStateL$StateBuilderL$dynamic = dart.constFn(async.StreamController$(StoreChangeLOfStateL$StateBuilderL$dynamic())))();
    var MiddlewareApiOfStateL$StateBuilderL$ActionsL = () => (MiddlewareApiOfStateL$StateBuilderL$ActionsL = dart.constFn(middleware.MiddlewareApi$(StateL(), StateBuilderL(), ActionsL())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsL = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsL = dart.constFn(dart.legacy(MiddlewareApiOfStateL$StateBuilderL$ActionsL())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLToFn = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLToFn = dart.constFn(dart.fnType(T$.FnToLFn(), [MiddlewareApiLOfStateL$StateBuilderL$ActionsL()])))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLToLFn = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLToLFn = dart.constFn(dart.legacy(MiddlewareApiLOfStateL$StateBuilderL$ActionsLToFn())))();
    var FnToFn = () => (FnToFn = dart.constFn(dart.fnType(T$.FnToLFn(), [MiddlewareApiLOfStateL$StateBuilderL$ActionsLToLFn()])))();
    var StoreChangeLOfStateL$StateBuilderL$dynamicToStateL = () => (StoreChangeLOfStateL$StateBuilderL$dynamicToStateL = dart.constFn(dart.fnType(StateL(), [StoreChangeLOfStateL$StateBuilderL$dynamic()])))();
    var StoreChangeLOfStateL$StateBuilderL$dynamicToboolL = () => (StoreChangeLOfStateL$StateBuilderL$dynamicToboolL = dart.constFn(dart.fnType(T$.boolL(), [StoreChangeLOfStateL$StateBuilderL$dynamic()])))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    var StateBuilderLTovoid = () => (StateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateBuilderL()])))();
    var ActionsL = () => (ActionsL = dart.constFn(dart.legacy(Actions)))();
    class Store extends core.Object {
      dispose() {
        return async.async(core.Null, (function* dispose() {
          yield this[_stateController].close();
          this[_state] = null;
          this[_actions] = null;
        }).bind(this));
      }
      replaceState(state) {
        StateL().as(state);
        if (!dart.equals(this[_state], state)) {
          this[_stateController].add(new (StoreChangeOfStateL$StateBuilderL$dynamic()).new(state, this[_state], new (T$.ActionOfNull()).new("replaceState", null)));
          this[_state] = state;
        }
      }
      get state() {
        return this[_state];
      }
      get stream() {
        return this[_stateController].stream;
      }
      get actions() {
        return this[_actions];
      }
      get nextState() {
        return this.stream.map(StateL(), dart.fn(change => change.next, StoreChangeLOfStateL$StateBuilderL$dynamicToStateL()));
      }
      substateStream(Substate, mapper) {
        return this.stream.map(dart.legacy(typedefs.SubstateChange$(dart.legacy(Substate))), dart.fn(c => new (typedefs.SubstateChange$(dart.legacy(Substate))).new(mapper(c.prev), mapper(c.next)), dart.fnType(dart.legacy(typedefs.SubstateChange$(dart.legacy(Substate))), [StoreChangeLOfStateL$StateBuilderL$dynamic()]))).where(dart.fn(c => !dart.equals(c.prev, c.next), dart.fnType(T$.boolL(), [dart.legacy(typedefs.SubstateChange$(dart.legacy(Substate)))])));
      }
      nextSubstate(Substate, mapper) {
        return this.substateStream(dart.legacy(Substate), mapper).map(dart.legacy(Substate), dart.fn(change => change.next, dart.fnType(dart.legacy(Substate), [dart.legacy(typedefs.SubstateChange$(dart.legacy(Substate)))])));
      }
      actionStream(Payload, actionName) {
        return this.stream.where(dart.fn(c => c.action.name == actionName.name, StoreChangeLOfStateL$StateBuilderL$dynamicToboolL())).map(dart.legacy(store_change.StoreChange$(StateL(), StateBuilderL(), dart.legacy(Payload))), dart.fn(c => new (store_change.StoreChange$(StateL(), StateBuilderL(), dart.legacy(Payload))).new(c.next, c.prev, dart.legacy(action$.Action$(dart.legacy(Payload))).as(c.action)), dart.fnType(dart.legacy(store_change.StoreChange$(StateL(), StateBuilderL(), dart.legacy(Payload))), [StoreChangeLOfStateL$StateBuilderL$dynamic()])));
      }
    }
    (Store.new = function(reducer, defaultState, actions, opts) {
      let middleware = opts && 'middleware' in opts ? opts.middleware : C[0] || CT.C0;
      this[_stateController] = StreamControllerOfStoreChangeLOfStateL$StateBuilderL$dynamic().broadcast();
      this[_state] = null;
      this[_actions] = null;
      this[_state] = defaultState;
      this[_actions] = actions;
      let api = MiddlewareApiOfStateL$StateBuilderL$ActionsL().new(this);
      let handler = dart.fn(action => {
        let state = this[_state].rebuild(dart.fn(b => reducer(this[_state], action, b), StateBuilderLTovoid()));
        if (dart.equals(this[_state], state)) return;
        if (!dart.test(this[_stateController].isClosed)) this[_stateController].add(new (StoreChangeOfStateL$StateBuilderL$dynamic()).new(state, this[_state], action));
        this[_state] = state;
      }, T$.ActionLToNull());
      if (dart.test(middleware[$isNotEmpty])) {
        let chain = middleware[$map](T$.FnToLFn(), dart.fn(m => m(api), FnToFn()));
        let combinedMiddleware = chain[$reduce](dart.fn((composed, middleware) => dart.fn(handler => composed(middleware(handler)), T$.FnToFn()), T$.FnAndFnToFn()));
        handler = combinedMiddleware(handler);
      }
      actions.setDispatcher(handler);
    }).prototype = Store.prototype;
    dart.addTypeTests(Store);
    Store.prototype[_is_Store_default] = true;
    dart.addTypeCaches(Store);
    dart.setMethodSignature(Store, () => ({
      __proto__: dart.getMethods(Store.__proto__),
      dispose: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
      replaceState: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      substateStream: dart.gFnType(Substate => [dart.legacy(async.Stream$(dart.legacy(typedefs.SubstateChange$(dart.legacy(Substate))))), [dart.legacy(dart.fnType(dart.legacy(Substate), [dart.legacy(State)]))]]),
      nextSubstate: dart.gFnType(Substate => [dart.legacy(async.Stream$(dart.legacy(Substate))), [dart.legacy(dart.fnType(dart.legacy(Substate), [dart.legacy(State)]))]]),
      actionStream: dart.gFnType(Payload => [dart.legacy(async.Stream$(dart.legacy(store_change.StoreChange$(dart.legacy(State), dart.legacy(StateBuilder), dart.legacy(Payload))))), [dart.legacy(action$.ActionName$(dart.legacy(Payload)))]])
    }));
    dart.setGetterSignature(Store, () => ({
      __proto__: dart.getGetters(Store.__proto__),
      state: dart.legacy(State),
      stream: dart.legacy(async.Stream$(dart.legacy(store_change.StoreChange$(dart.legacy(State), dart.legacy(StateBuilder), dart.dynamic)))),
      actions: dart.legacy(Actions),
      nextState: dart.legacy(async.Stream$(dart.legacy(State)))
    }));
    dart.setLibraryUri(Store, I[1]);
    dart.setFieldSignature(Store, () => ({
      __proto__: dart.getFields(Store.__proto__),
      [_stateController]: dart.finalFieldType(dart.legacy(async.StreamController$(dart.legacy(store_change.StoreChange$(dart.legacy(State), dart.legacy(StateBuilder), dart.dynamic))))),
      [_state]: dart.fieldType(dart.legacy(State)),
      [_actions]: dart.fieldType(dart.legacy(Actions))
    }));
    return Store;
  });
  store.Store = store.Store$();
  dart.addTypeTests(store.Store, _is_Store_default);
  var prev$ = dart.privateName(typedefs, "SubstateChange.prev");
  var next$ = dart.privateName(typedefs, "SubstateChange.next");
  const _is_SubstateChange_default = Symbol('_is_SubstateChange_default');
  typedefs.SubstateChange$ = dart.generic(Substate => {
    var SubstateL = () => (SubstateL = dart.constFn(dart.legacy(Substate)))();
    class SubstateChange extends core.Object {
      get prev() {
        return this[prev$];
      }
      set prev(value) {
        this[prev$] = SubstateL().as(value);
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        this[next$] = SubstateL().as(value);
      }
    }
    (SubstateChange.new = function(prev, next) {
      this[prev$] = prev;
      this[next$] = next;
      ;
    }).prototype = SubstateChange.prototype;
    dart.addTypeTests(SubstateChange);
    SubstateChange.prototype[_is_SubstateChange_default] = true;
    dart.addTypeCaches(SubstateChange);
    dart.setLibraryUri(SubstateChange, I[2]);
    dart.setFieldSignature(SubstateChange, () => ({
      __proto__: dart.getFields(SubstateChange.__proto__),
      prev: dart.fieldType(dart.legacy(Substate)),
      next: dart.fieldType(dart.legacy(Substate))
    }));
    return SubstateChange;
  });
  typedefs.SubstateChange = typedefs.SubstateChange$();
  dart.addTypeTests(typedefs.SubstateChange, _is_SubstateChange_default);
  var _state$ = dart.privateName(middleware, "_state");
  var _actions$ = dart.privateName(middleware, "_actions");
  const _is_MiddlewareApi_default = Symbol('_is_MiddlewareApi_default');
  middleware.MiddlewareApi$ = dart.generic((State, StateBuilder, Actions) => {
    class MiddlewareApi extends core.Object {
      static new(_store) {
        return new (middleware.MiddlewareApi$(dart.legacy(State), dart.legacy(StateBuilder), dart.legacy(Actions))).__(dart.fn(() => _store.state, dart.fnType(dart.legacy(State), [])), dart.fn(() => _store.actions, dart.fnType(dart.legacy(Actions), [])));
      }
      get state() {
        return this[_state$]();
      }
      get actions() {
        return this[_actions$]();
      }
    }
    (MiddlewareApi.__ = function(_state, _actions) {
      this[_state$] = _state;
      this[_actions$] = _actions;
      ;
    }).prototype = MiddlewareApi.prototype;
    dart.addTypeTests(MiddlewareApi);
    MiddlewareApi.prototype[_is_MiddlewareApi_default] = true;
    dart.addTypeCaches(MiddlewareApi);
    dart.setGetterSignature(MiddlewareApi, () => ({
      __proto__: dart.getGetters(MiddlewareApi.__proto__),
      state: dart.legacy(State),
      actions: dart.legacy(Actions)
    }));
    dart.setLibraryUri(MiddlewareApi, I[3]);
    dart.setFieldSignature(MiddlewareApi, () => ({
      __proto__: dart.getFields(MiddlewareApi.__proto__),
      [_state$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(State), []))),
      [_actions$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(Actions), [])))
    }));
    return MiddlewareApi;
  });
  middleware.MiddlewareApi = middleware.MiddlewareApi$();
  dart.addTypeTests(middleware.MiddlewareApi, _is_MiddlewareApi_default);
  var _map$ = dart.privateName(middleware, "_map");
  const _is_MiddlewareBuilder_default = Symbol('_is_MiddlewareBuilder_default');
  middleware.MiddlewareBuilder$ = dart.generic((State, StateBuilder, Actions) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var MiddlewareApiOfStateL$StateBuilderL$ActionsL = () => (MiddlewareApiOfStateL$StateBuilderL$ActionsL = dart.constFn(middleware.MiddlewareApi$(StateL(), StateBuilderL(), ActionsL())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsL = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsL = dart.constFn(dart.legacy(MiddlewareApiOfStateL$StateBuilderL$ActionsL())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLTovoid = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLTovoid = dart.constFn(dart.fnType(dart.void, [MiddlewareApiLOfStateL$StateBuilderL$ActionsL(), T$.ActionLToLvoid(), T$.ActionL()])))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(dart.legacy(MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLTovoid())))();
    var LinkedMapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (LinkedMapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToNull = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToNull = dart.constFn(dart.fnType(core.Null, [MiddlewareApiLOfStateL$StateBuilderL$ActionsL(), T$.ActionLToLvoid(), T$.ActionL()])))();
    var MiddlewareBuilderOfStateL$StateBuilderL$ActionsL = () => (MiddlewareBuilderOfStateL$StateBuilderL$ActionsL = dart.constFn(middleware.MiddlewareBuilder$(StateL(), StateBuilderL(), ActionsL())))();
    var MiddlewareBuilderLOfStateL$StateBuilderL$ActionsL = () => (MiddlewareBuilderLOfStateL$StateBuilderL$ActionsL = dart.constFn(dart.legacy(MiddlewareBuilderOfStateL$StateBuilderL$ActionsL())))();
    var MapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (MapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(core.Map$(T$.StringL(), MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid())))();
    var MapLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (MapLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(dart.legacy(MapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLToFn = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLToFn = dart.constFn(dart.fnType(T$.FnToLFn$1(), [MiddlewareApiLOfStateL$StateBuilderL$ActionsL()])))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    var ActionsL = () => (ActionsL = dart.constFn(dart.legacy(Actions)))();
    class MiddlewareBuilder extends core.Object {
      add(Payload, aMgr, handler) {
        this[_map$][$_set](aMgr.name, dart.fn((api, next, action) => {
          handler(api, next, dart.legacy(action$.Action$(dart.legacy(Payload))).as(action));
        }, MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToNull()));
      }
      combine(other) {
        MiddlewareBuilderLOfStateL$StateBuilderL$ActionsL().as(other);
        this[_map$][$addAll](MapLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid().as(other[_map$]));
      }
      combineNested(NestedState, NestedStateBuilder, NestedActions, other) {
        dart.legacy(middleware.NestedMiddlewareBuilder$(StateL(), StateBuilderL(), ActionsL(), dart.legacy(NestedState), dart.legacy(NestedStateBuilder), dart.legacy(NestedActions))).as(other);
        this[_map$][$addAll](MapLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid().as(other[_map$]));
      }
      build() {
        return dart.fn(api => dart.fn(next => dart.fn(action => {
          let handler = this[_map$][$_get](action.name);
          if (handler != null) {
            handler(api, next, action);
            return;
          }
          next(action);
        }, T$.ActionLToNull()), T$.FnToFn$2()), MiddlewareApiLOfStateL$StateBuilderL$ActionsLToFn());
      }
    }
    (MiddlewareBuilder.new = function() {
      this[_map$] = new (LinkedMapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid()).new();
      ;
    }).prototype = MiddlewareBuilder.prototype;
    dart.addTypeTests(MiddlewareBuilder);
    MiddlewareBuilder.prototype[_is_MiddlewareBuilder_default] = true;
    dart.addTypeCaches(MiddlewareBuilder);
    dart.setMethodSignature(MiddlewareBuilder, () => ({
      __proto__: dart.getMethods(MiddlewareBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(middleware.MiddlewareApi$(dart.legacy(State), dart.legacy(StateBuilder), dart.legacy(Actions))), dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)])), dart.legacy(action$.Action$(dart.legacy(Payload)))]))]]),
      combine: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      combineNested: dart.gFnType((NestedState, NestedStateBuilder, NestedActions) => [dart.void, [dart.legacy(core.Object)]], (NestedState, NestedStateBuilder, NestedActions) => [dart.legacy(built_value.Built$(dart.legacy(NestedState), dart.legacy(NestedStateBuilder))), dart.legacy(built_value.Builder$(dart.legacy(NestedState), dart.legacy(NestedStateBuilder))), dart.legacy(action$.ReduxActions)]),
      build: dart.fnType(dart.legacy(dart.fnType(dart.legacy(dart.fnType(dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)])), [dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)]))])), [dart.legacy(middleware.MiddlewareApi$(dart.legacy(State), dart.legacy(StateBuilder), dart.legacy(Actions)))])), [])
    }));
    dart.setLibraryUri(MiddlewareBuilder, I[3]);
    dart.setFieldSignature(MiddlewareBuilder, () => ({
      __proto__: dart.getFields(MiddlewareBuilder.__proto__),
      [_map$]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(middleware.MiddlewareApi$(dart.legacy(State), dart.legacy(StateBuilder), dart.legacy(Actions))), dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)])), dart.legacy(action$.Action)])))))
    }));
    return MiddlewareBuilder;
  });
  middleware.MiddlewareBuilder = middleware.MiddlewareBuilder$();
  dart.addTypeTests(middleware.MiddlewareBuilder, _is_MiddlewareBuilder_default);
  var _stateMapper$ = dart.privateName(middleware, "_stateMapper");
  var _actionsMapper$ = dart.privateName(middleware, "_actionsMapper");
  const _is_NestedMiddlewareBuilder_default = Symbol('_is_NestedMiddlewareBuilder_default');
  middleware.NestedMiddlewareBuilder$ = dart.generic((State, StateBuilder, Actions, NestedState, NestedStateBuilder, NestedActions) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var MiddlewareApiOfStateL$StateBuilderL$ActionsL = () => (MiddlewareApiOfStateL$StateBuilderL$ActionsL = dart.constFn(middleware.MiddlewareApi$(StateL(), StateBuilderL(), ActionsL())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsL = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsL = dart.constFn(dart.legacy(MiddlewareApiOfStateL$StateBuilderL$ActionsL())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLTovoid = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLTovoid = dart.constFn(dart.fnType(dart.void, [MiddlewareApiLOfStateL$StateBuilderL$ActionsL(), T$.ActionLToLvoid(), T$.ActionL()])))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(dart.legacy(MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLTovoid())))();
    var LinkedMapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (LinkedMapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid())))();
    var MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToNull = () => (MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToNull = dart.constFn(dart.fnType(core.Null, [MiddlewareApiLOfStateL$StateBuilderL$ActionsL(), T$.ActionLToLvoid(), T$.ActionL()])))();
    var MapEntryOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (MapEntryOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(core.MapEntry$(T$.StringL(), MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid())))();
    var MapEntryLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (MapEntryLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(dart.legacy(MapEntryOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid())))();
    var StringLAndFnToMapEntryLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = () => (StringLAndFnToMapEntryLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid = dart.constFn(dart.fnType(MapEntryLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid(), [T$.StringL(), MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid()])))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    var ActionsL = () => (ActionsL = dart.constFn(dart.legacy(Actions)))();
    var NestedStateL = () => (NestedStateL = dart.constFn(dart.legacy(NestedState)))();
    var MiddlewareApiOfNestedStateL$NestedStateBuilderL$NestedActionsL = () => (MiddlewareApiOfNestedStateL$NestedStateBuilderL$NestedActionsL = dart.constFn(middleware.MiddlewareApi$(NestedStateL(), NestedStateBuilderL(), NestedActionsL())))();
    var VoidToNestedStateL = () => (VoidToNestedStateL = dart.constFn(dart.fnType(NestedStateL(), [])))();
    var MiddlewareBuilderOfNestedStateL$NestedStateBuilderL$NestedActionsL = () => (MiddlewareBuilderOfNestedStateL$NestedStateBuilderL$NestedActionsL = dart.constFn(middleware.MiddlewareBuilder$(NestedStateL(), NestedStateBuilderL(), NestedActionsL())))();
    var MiddlewareBuilderLOfNestedStateL$NestedStateBuilderL$NestedActionsL = () => (MiddlewareBuilderLOfNestedStateL$NestedStateBuilderL$NestedActionsL = dart.constFn(dart.legacy(MiddlewareBuilderOfNestedStateL$NestedStateBuilderL$NestedActionsL())))();
    var MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsL = () => (MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsL = dart.constFn(dart.legacy(MiddlewareApiOfNestedStateL$NestedStateBuilderL$NestedActionsL())))();
    var MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLTovoid = () => (MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLTovoid = dart.constFn(dart.fnType(dart.void, [MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsL(), T$.ActionLToLvoid(), T$.ActionL()])))();
    var MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid = () => (MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid = dart.constFn(dart.legacy(MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLTovoid())))();
    var MapOfStringL$MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid = () => (MapOfStringL$MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid = dart.constFn(core.Map$(T$.StringL(), MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid())))();
    var MapLOfStringL$MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid = () => (MapLOfStringL$MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid = dart.constFn(dart.legacy(MapOfStringL$MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid())))();
    var NestedStateBuilderL = () => (NestedStateBuilderL = dart.constFn(dart.legacy(NestedStateBuilder)))();
    var NestedActionsL = () => (NestedActionsL = dart.constFn(dart.legacy(NestedActions)))();
    var VoidToNestedActionsL = () => (VoidToNestedActionsL = dart.constFn(dart.fnType(NestedActionsL(), [])))();
    class NestedMiddlewareBuilder extends core.Object {
      add(Payload, aMgr, handler) {
        this[_map$][$_set](aMgr.name, dart.fn((api, next, action) => {
          handler(new (MiddlewareApiOfNestedStateL$NestedStateBuilderL$NestedActionsL()).__(dart.fn(() => {
            let t0;
            t0 = api.state;
            return this[_stateMapper$](t0);
          }, VoidToNestedStateL()), dart.fn(() => {
            let t0;
            t0 = api.actions;
            return this[_actionsMapper$](t0);
          }, VoidToNestedActionsL())), next, dart.legacy(action$.Action$(dart.legacy(Payload))).as(action));
        }, MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToNull()));
      }
      combineMiddlewareBuilder(other) {
        MiddlewareBuilderLOfNestedStateL$NestedStateBuilderL$NestedActionsL().as(other);
        let adapted = MapLOfStringL$MiddlewareApiLOfNestedStateL$NestedStateBuilderL$NestedActionsLAndFnAndActionLToLvoid().as(other[_map$])[$map](T$.StringL(), MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid(), dart.fn((name, handler) => new (MapEntryOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid()).__(name, dart.fn((api, next, action) => handler(new (MiddlewareApiOfNestedStateL$NestedStateBuilderL$NestedActionsL()).__(dart.fn(() => {
          let t0;
          t0 = api.state;
          return this[_stateMapper$](t0);
        }, VoidToNestedStateL()), dart.fn(() => {
          let t0;
          t0 = api.actions;
          return this[_actionsMapper$](t0);
        }, VoidToNestedActionsL())), next, action), MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLTovoid())), StringLAndFnToMapEntryLOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid()));
        this[_map$][$addAll](adapted);
      }
    }
    (NestedMiddlewareBuilder.new = function(_stateMapper, _actionsMapper) {
      this[_map$] = new (LinkedMapOfStringL$MiddlewareApiLOfStateL$StateBuilderL$ActionsLAndFnAndActionLToLvoid()).new();
      this[_stateMapper$] = _stateMapper;
      this[_actionsMapper$] = _actionsMapper;
      ;
    }).prototype = NestedMiddlewareBuilder.prototype;
    dart.addTypeTests(NestedMiddlewareBuilder);
    NestedMiddlewareBuilder.prototype[_is_NestedMiddlewareBuilder_default] = true;
    dart.addTypeCaches(NestedMiddlewareBuilder);
    dart.setMethodSignature(NestedMiddlewareBuilder, () => ({
      __proto__: dart.getMethods(NestedMiddlewareBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(middleware.MiddlewareApi$(dart.legacy(NestedState), dart.legacy(NestedStateBuilder), dart.legacy(NestedActions))), dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)])), dart.legacy(action$.Action$(dart.legacy(Payload)))]))]]),
      combineMiddlewareBuilder: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(NestedMiddlewareBuilder, I[3]);
    dart.setFieldSignature(NestedMiddlewareBuilder, () => ({
      __proto__: dart.getFields(NestedMiddlewareBuilder.__proto__),
      [_map$]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(middleware.MiddlewareApi$(dart.legacy(State), dart.legacy(StateBuilder), dart.legacy(Actions))), dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)])), dart.legacy(action$.Action)]))))),
      [_stateMapper$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(NestedState), [dart.legacy(State)]))),
      [_actionsMapper$]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(NestedActions), [dart.legacy(Actions)])))
    }));
    return NestedMiddlewareBuilder;
  });
  middleware.NestedMiddlewareBuilder = middleware.NestedMiddlewareBuilder$();
  dart.addTypeTests(middleware.NestedMiddlewareBuilder, _is_NestedMiddlewareBuilder_default);
  var name$ = dart.privateName(action$, "Action.name");
  var payload$ = dart.privateName(action$, "Action.payload");
  const _is_Action_default = Symbol('_is_Action_default');
  action$.Action$ = dart.generic(Payload => {
    class Action extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get payload() {
        return this[payload$];
      }
      set payload(value) {
        super.payload = value;
      }
      toString() {
        return "Action {\n  name: " + dart.str(this.name) + ",\n  payload: " + dart.str(this.payload) + ",\n}";
      }
    }
    (Action.new = function(name, payload) {
      this[name$] = name;
      this[payload$] = payload;
      ;
    }).prototype = Action.prototype;
    dart.addTypeTests(Action);
    Action.prototype[_is_Action_default] = true;
    dart.addTypeCaches(Action);
    dart.setMethodSignature(Action, () => ({
      __proto__: dart.getMethods(Action.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setLibraryUri(Action, I[4]);
    dart.setFieldSignature(Action, () => ({
      __proto__: dart.getFields(Action.__proto__),
      name: dart.finalFieldType(dart.legacy(core.String)),
      payload: dart.finalFieldType(dart.legacy(Payload))
    }));
    dart.defineExtensionMethods(Action, ['toString']);
    return Action;
  });
  action$.Action = action$.Action$();
  dart.addTypeTests(action$.Action, _is_Action_default);
  var _dispatcher = dart.privateName(action$, "_dispatcher");
  var _name$ = dart.privateName(action$, "_name");
  const _is_ActionDispatcher_default = Symbol('_is_ActionDispatcher_default');
  action$.ActionDispatcher$ = dart.generic(P => {
    var PL = () => (PL = dart.constFn(dart.legacy(P)))();
    var ActionOfPL = () => (ActionOfPL = dart.constFn(action$.Action$(PL())))();
    class ActionDispatcher extends core.Object {
      get name() {
        return this[_name$];
      }
      call(payload = null) {
        let t0;
        PL().as(payload);
        t0 = new (ActionOfPL()).new(this[_name$], payload);
        return this[_dispatcher](t0);
      }
      setDispatcher(dispatcher) {
        this[_dispatcher] = dispatcher;
      }
    }
    (ActionDispatcher.new = function(_name) {
      this[_dispatcher] = null;
      this[_name$] = _name;
      ;
    }).prototype = ActionDispatcher.prototype;
    dart.addTypeTests(ActionDispatcher);
    ActionDispatcher.prototype[_is_ActionDispatcher_default] = true;
    dart.addTypeCaches(ActionDispatcher);
    dart.setMethodSignature(ActionDispatcher, () => ({
      __proto__: dart.getMethods(ActionDispatcher.__proto__),
      call: dart.fnType(dart.void, [], [dart.legacy(core.Object)]),
      setDispatcher: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)]))])
    }));
    dart.setGetterSignature(ActionDispatcher, () => ({
      __proto__: dart.getGetters(ActionDispatcher.__proto__),
      name: dart.legacy(core.String)
    }));
    dart.setLibraryUri(ActionDispatcher, I[4]);
    dart.setFieldSignature(ActionDispatcher, () => ({
      __proto__: dart.getFields(ActionDispatcher.__proto__),
      [_dispatcher]: dart.fieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(action$.Action)]))),
      [_name$]: dart.finalFieldType(dart.legacy(core.String))
    }));
    return ActionDispatcher;
  });
  action$.ActionDispatcher = action$.ActionDispatcher$();
  dart.addTypeTests(action$.ActionDispatcher, _is_ActionDispatcher_default);
  action$.ReduxActions = class ReduxActions extends core.Object {};
  (action$.ReduxActions.new = function() {
    ;
  }).prototype = action$.ReduxActions.prototype;
  dart.addTypeTests(action$.ReduxActions);
  dart.addTypeCaches(action$.ReduxActions);
  dart.setLibraryUri(action$.ReduxActions, I[4]);
  var name$0 = dart.privateName(action$, "ActionName.name");
  const _is_ActionName_default = Symbol('_is_ActionName_default');
  action$.ActionName$ = dart.generic(T => {
    class ActionName extends core.Object {
      get name() {
        return this[name$0];
      }
      set name(value) {
        this[name$0] = value;
      }
    }
    (ActionName.new = function(name) {
      this[name$0] = name;
      ;
    }).prototype = ActionName.prototype;
    dart.addTypeTests(ActionName);
    ActionName.prototype[_is_ActionName_default] = true;
    dart.addTypeCaches(ActionName);
    dart.setLibraryUri(ActionName, I[4]);
    dart.setFieldSignature(ActionName, () => ({
      __proto__: dart.getFields(ActionName.__proto__),
      name: dart.fieldType(dart.legacy(core.String))
    }));
    return ActionName;
  });
  action$.ActionName = action$.ActionName$();
  dart.addTypeTests(action$.ActionName, _is_ActionName_default);
  var _map$0 = dart.privateName(reducer_builder, "_map");
  const _is_ReducerBuilder_default = Symbol('_is_ReducerBuilder_default');
  reducer_builder.ReducerBuilder$ = dart.generic((State, StateBuilder) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StateLAndActionLAndStateBuilderLTovoid = () => (StateLAndActionLAndStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var StateLAndActionLAndStateBuilderLToLvoid = () => (StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(StateLAndActionLAndStateBuilderLTovoid())))();
    var LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var StateLAndActionLAndStateBuilderLToNull = () => (StateLAndActionLAndStateBuilderLToNull = dart.constFn(dart.fnType(core.Null, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var ReducerBuilderOfStateL$StateBuilderL = () => (ReducerBuilderOfStateL$StateBuilderL = dart.constFn(reducer_builder.ReducerBuilder$(StateL(), StateBuilderL())))();
    var ReducerBuilderLOfStateL$StateBuilderL = () => (ReducerBuilderLOfStateL$StateBuilderL = dart.constFn(dart.legacy(ReducerBuilderOfStateL$StateBuilderL())))();
    var MapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (MapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(core.Map$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(MapOfStringL$StateLAndActionLAndStateBuilderLToLvoid())))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    class ReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          reducer(state, dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), builder);
        }, StateLAndActionLAndStateBuilderLToNull()));
      }
      combine(other) {
        ReducerBuilderLOfStateL$StateBuilderL().as(other);
        this[_map$0][$addAll](MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid().as(other[_map$0]));
      }
      combineNested(N, NB, nested) {
        dart.legacy(reducer_builder.NestedReducerBuilder$(StateL(), StateBuilderL(), dart.legacy(N), dart.legacy(NB))).as(nested);
        this[_map$0][$addAll](MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid().as(nested[_map$0]));
      }
      combineAbstract(other) {
        this[_map$0][$addAll](other);
      }
      combineList(T, other) {
        dart.legacy(reducer_builder.ListReducerBuilder$(StateL(), StateBuilderL(), dart.legacy(T))).as(other);
        this[_map$0][$addAll](MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid().as(other[_map$0]));
      }
      combineListMultimap(K, V, other) {
        dart.legacy(reducer_builder.ListMultimapReducerBuilder$(StateL(), StateBuilderL(), dart.legacy(K), dart.legacy(V))).as(other);
        this[_map$0][$addAll](MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid().as(other[_map$0]));
      }
      combineMap(K, V, other) {
        dart.legacy(reducer_builder.MapReducerBuilder$(StateL(), StateBuilderL(), dart.legacy(K), dart.legacy(V))).as(other);
        this[_map$0][$addAll](MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid().as(other[_map$0]));
      }
      combineSet(T, other) {
        dart.legacy(reducer_builder.SetReducerBuilder$(StateL(), StateBuilderL(), dart.legacy(T))).as(other);
        this[_map$0][$addAll](MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid().as(other[_map$0]));
      }
      combineSetMultimap(K, V, other) {
        dart.legacy(reducer_builder.SetMultimapReducerBuilder$(StateL(), StateBuilderL(), dart.legacy(K), dart.legacy(V))).as(other);
        this[_map$0][$addAll](MapLOfStringL$StateLAndActionLAndStateBuilderLToLvoid().as(other[_map$0]));
      }
      build() {
        return dart.fn((state, action, builder) => {
          let reducer = this[_map$0][$_get](action.name);
          if (reducer != null) reducer(state, action, builder);
        }, StateLAndActionLAndStateBuilderLToNull());
      }
    }
    (ReducerBuilder.new = function() {
      this[_map$0] = new (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).new();
      ;
    }).prototype = ReducerBuilder.prototype;
    dart.addTypeTests(ReducerBuilder);
    ReducerBuilder.prototype[_is_ReducerBuilder_default] = true;
    dart.addTypeCaches(ReducerBuilder);
    dart.setMethodSignature(ReducerBuilder, () => ({
      __proto__: dart.getMethods(ReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(StateBuilder)]))]]),
      combine: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      combineNested: dart.gFnType((N, NB) => [dart.void, [dart.legacy(core.Object)]], (N, NB) => [dart.legacy(built_value.Built$(dart.legacy(N), dart.legacy(NB))), dart.legacy(built_value.Builder$(dart.legacy(N), dart.legacy(NB)))]),
      combineAbstract: dart.fnType(dart.void, [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)]))))]),
      combineList: dart.gFnType(T => [dart.void, [dart.legacy(core.Object)]]),
      combineListMultimap: dart.gFnType((K, V) => [dart.void, [dart.legacy(core.Object)]]),
      combineMap: dart.gFnType((K, V) => [dart.void, [dart.legacy(core.Object)]]),
      combineSet: dart.gFnType(T => [dart.void, [dart.legacy(core.Object)]]),
      combineSetMultimap: dart.gFnType((K, V) => [dart.void, [dart.legacy(core.Object)]]),
      build: dart.fnType(dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)])), [])
    }));
    dart.setLibraryUri(ReducerBuilder, I[5]);
    dart.setFieldSignature(ReducerBuilder, () => ({
      __proto__: dart.getFields(ReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)])))))
    }));
    return ReducerBuilder;
  });
  reducer_builder.ReducerBuilder = reducer_builder.ReducerBuilder$();
  dart.addTypeTests(reducer_builder.ReducerBuilder, _is_ReducerBuilder_default);
  var _stateMapper$0 = dart.privateName(reducer_builder, "_stateMapper");
  var _builderMapper$ = dart.privateName(reducer_builder, "_builderMapper");
  const _is_NestedReducerBuilder_default = Symbol('_is_NestedReducerBuilder_default');
  reducer_builder.NestedReducerBuilder$ = dart.generic((State, StateBuilder, NestedState, NestedStateBuilder) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StateLAndActionLAndStateBuilderLTovoid = () => (StateLAndActionLAndStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var StateLAndActionLAndStateBuilderLToLvoid = () => (StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(StateLAndActionLAndStateBuilderLTovoid())))();
    var LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var MapEntryOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (MapEntryOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(core.MapEntry$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var MapEntryLOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (MapEntryLOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(MapEntryOfStringL$StateLAndActionLAndStateBuilderLToLvoid())))();
    var StringLAndFnToMapEntryLOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (StringLAndFnToMapEntryLOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.fnType(MapEntryLOfStringL$StateLAndActionLAndStateBuilderLToLvoid(), [T$.StringL(), NestedStateLAndActionLAndNestedStateBuilderLToLvoid()])))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    var NestedStateL = () => (NestedStateL = dart.constFn(dart.legacy(NestedState)))();
    var ReducerBuilderOfNestedStateL$NestedStateBuilderL = () => (ReducerBuilderOfNestedStateL$NestedStateBuilderL = dart.constFn(reducer_builder.ReducerBuilder$(NestedStateL(), NestedStateBuilderL())))();
    var ReducerBuilderLOfNestedStateL$NestedStateBuilderL = () => (ReducerBuilderLOfNestedStateL$NestedStateBuilderL = dart.constFn(dart.legacy(ReducerBuilderOfNestedStateL$NestedStateBuilderL())))();
    var NestedStateLAndActionLAndNestedStateBuilderLTovoid = () => (NestedStateLAndActionLAndNestedStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [NestedStateL(), T$.ActionL(), NestedStateBuilderL()])))();
    var NestedStateLAndActionLAndNestedStateBuilderLToLvoid = () => (NestedStateLAndActionLAndNestedStateBuilderLToLvoid = dart.constFn(dart.legacy(NestedStateLAndActionLAndNestedStateBuilderLTovoid())))();
    var MapOfStringL$NestedStateLAndActionLAndNestedStateBuilderLToLvoid = () => (MapOfStringL$NestedStateLAndActionLAndNestedStateBuilderLToLvoid = dart.constFn(core.Map$(T$.StringL(), NestedStateLAndActionLAndNestedStateBuilderLToLvoid())))();
    var MapLOfStringL$NestedStateLAndActionLAndNestedStateBuilderLToLvoid = () => (MapLOfStringL$NestedStateLAndActionLAndNestedStateBuilderLToLvoid = dart.constFn(dart.legacy(MapOfStringL$NestedStateLAndActionLAndNestedStateBuilderLToLvoid())))();
    var NestedStateBuilderL = () => (NestedStateBuilderL = dart.constFn(dart.legacy(NestedStateBuilder)))();
    class NestedReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          let t0, t0$;
          return reducer((t0 = state, this[_stateMapper$0](t0)), dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), (t0$ = builder, this[_builderMapper$](t0$)));
        }, StateLAndActionLAndStateBuilderLTovoid()));
      }
      combineReducerBuilder(other) {
        ReducerBuilderLOfNestedStateL$NestedStateBuilderL().as(other);
        let adapted = MapLOfStringL$NestedStateLAndActionLAndNestedStateBuilderLToLvoid().as(other[_map$0])[$map](T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid(), dart.fn((name, reducer) => new (MapEntryOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).__(name, dart.fn((state, action, builder) => {
          let t0, t0$;
          return reducer((t0 = state, this[_stateMapper$0](t0)), action, (t0$ = builder, this[_builderMapper$](t0$)));
        }, StateLAndActionLAndStateBuilderLTovoid())), StringLAndFnToMapEntryLOfStringL$StateLAndActionLAndStateBuilderLToLvoid()));
        this[_map$0][$addAll](adapted);
      }
    }
    (NestedReducerBuilder.new = function(_stateMapper, _builderMapper) {
      this[_map$0] = new (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).new();
      this[_stateMapper$0] = _stateMapper;
      this[_builderMapper$] = _builderMapper;
      ;
    }).prototype = NestedReducerBuilder.prototype;
    dart.addTypeTests(NestedReducerBuilder);
    NestedReducerBuilder.prototype[_is_NestedReducerBuilder_default] = true;
    dart.addTypeCaches(NestedReducerBuilder);
    dart.setMethodSignature(NestedReducerBuilder, () => ({
      __proto__: dart.getMethods(NestedReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(NestedState), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(NestedStateBuilder)]))]]),
      combineReducerBuilder: dart.fnType(dart.void, [dart.legacy(core.Object)])
    }));
    dart.setLibraryUri(NestedReducerBuilder, I[5]);
    dart.setFieldSignature(NestedReducerBuilder, () => ({
      __proto__: dart.getFields(NestedReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)]))))),
      [_stateMapper$0]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(NestedState), [dart.legacy(State)]))),
      [_builderMapper$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(NestedStateBuilder), [dart.legacy(StateBuilder)])))
    }));
    return NestedReducerBuilder;
  });
  reducer_builder.NestedReducerBuilder = reducer_builder.NestedReducerBuilder$();
  dart.addTypeTests(reducer_builder.NestedReducerBuilder, _is_NestedReducerBuilder_default);
  const _is_AbstractReducerBuilder_default = Symbol('_is_AbstractReducerBuilder_default');
  reducer_builder.AbstractReducerBuilder$ = dart.generic((AState, AStateBuilder) => {
    var AStateL = () => (AStateL = dart.constFn(dart.legacy(AState)))();
    var AStateLAndActionLAndAStateBuilderLTovoid = () => (AStateLAndActionLAndAStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [AStateL(), T$.ActionL(), AStateBuilderL()])))();
    var AStateLAndActionLAndAStateBuilderLToLvoid = () => (AStateLAndActionLAndAStateBuilderLToLvoid = dart.constFn(dart.legacy(AStateLAndActionLAndAStateBuilderLTovoid())))();
    var LinkedMapOfStringL$AStateLAndActionLAndAStateBuilderLToLvoid = () => (LinkedMapOfStringL$AStateLAndActionLAndAStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), AStateLAndActionLAndAStateBuilderLToLvoid())))();
    var AStateLAndActionLAndAStateBuilderLToNull = () => (AStateLAndActionLAndAStateBuilderLToNull = dart.constFn(dart.fnType(core.Null, [AStateL(), T$.ActionL(), AStateBuilderL()])))();
    var AStateBuilderL = () => (AStateBuilderL = dart.constFn(dart.legacy(AStateBuilder)))();
    class AbstractReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          reducer(state, dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), builder);
        }, AStateLAndActionLAndAStateBuilderLToNull()));
      }
      build() {
        return this[_map$0];
      }
    }
    (AbstractReducerBuilder.new = function() {
      this[_map$0] = new (LinkedMapOfStringL$AStateLAndActionLAndAStateBuilderLToLvoid()).new();
      ;
    }).prototype = AbstractReducerBuilder.prototype;
    dart.addTypeTests(AbstractReducerBuilder);
    AbstractReducerBuilder.prototype[_is_AbstractReducerBuilder_default] = true;
    dart.addTypeCaches(AbstractReducerBuilder);
    dart.setMethodSignature(AbstractReducerBuilder, () => ({
      __proto__: dart.getMethods(AbstractReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(AState), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(AStateBuilder)]))]]),
      build: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(AState), dart.legacy(action$.Action), dart.legacy(AStateBuilder)])))), [])
    }));
    dart.setLibraryUri(AbstractReducerBuilder, I[5]);
    dart.setFieldSignature(AbstractReducerBuilder, () => ({
      __proto__: dart.getFields(AbstractReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(AState), dart.legacy(action$.Action), dart.legacy(AStateBuilder)])))))
    }));
    return AbstractReducerBuilder;
  });
  reducer_builder.AbstractReducerBuilder = reducer_builder.AbstractReducerBuilder$();
  dart.addTypeTests(reducer_builder.AbstractReducerBuilder, _is_AbstractReducerBuilder_default);
  const _is_ListReducerBuilder_default = Symbol('_is_ListReducerBuilder_default');
  reducer_builder.ListReducerBuilder$ = dart.generic((State, StateBuilder, T) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StateLAndActionLAndStateBuilderLTovoid = () => (StateLAndActionLAndStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var StateLAndActionLAndStateBuilderLToLvoid = () => (StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(StateLAndActionLAndStateBuilderLTovoid())))();
    var LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    class ListReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          let t0, t0$;
          return reducer((t0 = state, this[_stateMapper$0](t0)), dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), (t0$ = builder, this[_builderMapper$](t0$)));
        }, StateLAndActionLAndStateBuilderLTovoid()));
      }
    }
    (ListReducerBuilder.new = function(_stateMapper, _builderMapper) {
      this[_map$0] = new (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).new();
      this[_stateMapper$0] = _stateMapper;
      this[_builderMapper$] = _builderMapper;
      ;
    }).prototype = ListReducerBuilder.prototype;
    dart.addTypeTests(ListReducerBuilder);
    ListReducerBuilder.prototype[_is_ListReducerBuilder_default] = true;
    dart.addTypeCaches(ListReducerBuilder);
    dart.setMethodSignature(ListReducerBuilder, () => ({
      __proto__: dart.getMethods(ListReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(list.BuiltList$(dart.legacy(T))), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(list.ListBuilder$(dart.legacy(T)))]))]])
    }));
    dart.setLibraryUri(ListReducerBuilder, I[5]);
    dart.setFieldSignature(ListReducerBuilder, () => ({
      __proto__: dart.getFields(ListReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)]))))),
      [_stateMapper$0]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(list.BuiltList$(dart.legacy(T))), [dart.legacy(State)]))),
      [_builderMapper$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(list.ListBuilder$(dart.legacy(T))), [dart.legacy(StateBuilder)])))
    }));
    return ListReducerBuilder;
  });
  reducer_builder.ListReducerBuilder = reducer_builder.ListReducerBuilder$();
  dart.addTypeTests(reducer_builder.ListReducerBuilder, _is_ListReducerBuilder_default);
  const _is_ListMultimapReducerBuilder_default = Symbol('_is_ListMultimapReducerBuilder_default');
  reducer_builder.ListMultimapReducerBuilder$ = dart.generic((State, StateBuilder, K, V) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StateLAndActionLAndStateBuilderLTovoid = () => (StateLAndActionLAndStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var StateLAndActionLAndStateBuilderLToLvoid = () => (StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(StateLAndActionLAndStateBuilderLTovoid())))();
    var LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    class ListMultimapReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          let t0, t0$;
          return reducer((t0 = state, this[_stateMapper$0](t0)), dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), (t0$ = builder, this[_builderMapper$](t0$)));
        }, StateLAndActionLAndStateBuilderLTovoid()));
      }
    }
    (ListMultimapReducerBuilder.new = function(_stateMapper, _builderMapper) {
      this[_map$0] = new (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).new();
      this[_stateMapper$0] = _stateMapper;
      this[_builderMapper$] = _builderMapper;
      ;
    }).prototype = ListMultimapReducerBuilder.prototype;
    dart.addTypeTests(ListMultimapReducerBuilder);
    ListMultimapReducerBuilder.prototype[_is_ListMultimapReducerBuilder_default] = true;
    dart.addTypeCaches(ListMultimapReducerBuilder);
    dart.setMethodSignature(ListMultimapReducerBuilder, () => ({
      __proto__: dart.getMethods(ListMultimapReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(list_multimap.BuiltListMultimap$(dart.legacy(K), dart.legacy(V))), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(list_multimap.ListMultimapBuilder$(dart.legacy(K), dart.legacy(V)))]))]])
    }));
    dart.setLibraryUri(ListMultimapReducerBuilder, I[5]);
    dart.setFieldSignature(ListMultimapReducerBuilder, () => ({
      __proto__: dart.getFields(ListMultimapReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)]))))),
      [_stateMapper$0]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(list_multimap.BuiltListMultimap$(dart.legacy(K), dart.legacy(V))), [dart.legacy(State)]))),
      [_builderMapper$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(list_multimap.ListMultimapBuilder$(dart.legacy(K), dart.legacy(V))), [dart.legacy(StateBuilder)])))
    }));
    return ListMultimapReducerBuilder;
  });
  reducer_builder.ListMultimapReducerBuilder = reducer_builder.ListMultimapReducerBuilder$();
  dart.addTypeTests(reducer_builder.ListMultimapReducerBuilder, _is_ListMultimapReducerBuilder_default);
  const _is_MapReducerBuilder_default = Symbol('_is_MapReducerBuilder_default');
  reducer_builder.MapReducerBuilder$ = dart.generic((State, StateBuilder, K, V) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StateLAndActionLAndStateBuilderLTovoid = () => (StateLAndActionLAndStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var StateLAndActionLAndStateBuilderLToLvoid = () => (StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(StateLAndActionLAndStateBuilderLTovoid())))();
    var LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    class MapReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          let t0, t0$;
          return reducer((t0 = state, this[_stateMapper$0](t0)), dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), (t0$ = builder, this[_builderMapper$](t0$)));
        }, StateLAndActionLAndStateBuilderLTovoid()));
      }
    }
    (MapReducerBuilder.new = function(_stateMapper, _builderMapper) {
      this[_map$0] = new (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).new();
      this[_stateMapper$0] = _stateMapper;
      this[_builderMapper$] = _builderMapper;
      ;
    }).prototype = MapReducerBuilder.prototype;
    dart.addTypeTests(MapReducerBuilder);
    MapReducerBuilder.prototype[_is_MapReducerBuilder_default] = true;
    dart.addTypeCaches(MapReducerBuilder);
    dart.setMethodSignature(MapReducerBuilder, () => ({
      __proto__: dart.getMethods(MapReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(map.BuiltMap$(dart.legacy(K), dart.legacy(V))), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(map.MapBuilder$(dart.legacy(K), dart.legacy(V)))]))]])
    }));
    dart.setLibraryUri(MapReducerBuilder, I[5]);
    dart.setFieldSignature(MapReducerBuilder, () => ({
      __proto__: dart.getFields(MapReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)]))))),
      [_stateMapper$0]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(map.BuiltMap$(dart.legacy(K), dart.legacy(V))), [dart.legacy(State)]))),
      [_builderMapper$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(map.MapBuilder$(dart.legacy(K), dart.legacy(V))), [dart.legacy(StateBuilder)])))
    }));
    return MapReducerBuilder;
  });
  reducer_builder.MapReducerBuilder = reducer_builder.MapReducerBuilder$();
  dart.addTypeTests(reducer_builder.MapReducerBuilder, _is_MapReducerBuilder_default);
  const _is_SetReducerBuilder_default = Symbol('_is_SetReducerBuilder_default');
  reducer_builder.SetReducerBuilder$ = dart.generic((State, StateBuilder, T) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StateLAndActionLAndStateBuilderLTovoid = () => (StateLAndActionLAndStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var StateLAndActionLAndStateBuilderLToLvoid = () => (StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(StateLAndActionLAndStateBuilderLTovoid())))();
    var LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    class SetReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          let t0, t0$;
          return reducer((t0 = state, this[_stateMapper$0](t0)), dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), (t0$ = builder, this[_builderMapper$](t0$)));
        }, StateLAndActionLAndStateBuilderLTovoid()));
      }
    }
    (SetReducerBuilder.new = function(_stateMapper, _builderMapper) {
      this[_map$0] = new (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).new();
      this[_stateMapper$0] = _stateMapper;
      this[_builderMapper$] = _builderMapper;
      ;
    }).prototype = SetReducerBuilder.prototype;
    dart.addTypeTests(SetReducerBuilder);
    SetReducerBuilder.prototype[_is_SetReducerBuilder_default] = true;
    dart.addTypeCaches(SetReducerBuilder);
    dart.setMethodSignature(SetReducerBuilder, () => ({
      __proto__: dart.getMethods(SetReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(set.BuiltSet$(dart.legacy(T))), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(set.SetBuilder$(dart.legacy(T)))]))]])
    }));
    dart.setLibraryUri(SetReducerBuilder, I[5]);
    dart.setFieldSignature(SetReducerBuilder, () => ({
      __proto__: dart.getFields(SetReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)]))))),
      [_stateMapper$0]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(set.BuiltSet$(dart.legacy(T))), [dart.legacy(State)]))),
      [_builderMapper$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(set.SetBuilder$(dart.legacy(T))), [dart.legacy(StateBuilder)])))
    }));
    return SetReducerBuilder;
  });
  reducer_builder.SetReducerBuilder = reducer_builder.SetReducerBuilder$();
  dart.addTypeTests(reducer_builder.SetReducerBuilder, _is_SetReducerBuilder_default);
  const _is_SetMultimapReducerBuilder_default = Symbol('_is_SetMultimapReducerBuilder_default');
  reducer_builder.SetMultimapReducerBuilder$ = dart.generic((State, StateBuilder, K, V) => {
    var StateL = () => (StateL = dart.constFn(dart.legacy(State)))();
    var StateLAndActionLAndStateBuilderLTovoid = () => (StateLAndActionLAndStateBuilderLTovoid = dart.constFn(dart.fnType(dart.void, [StateL(), T$.ActionL(), StateBuilderL()])))();
    var StateLAndActionLAndStateBuilderLToLvoid = () => (StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(dart.legacy(StateLAndActionLAndStateBuilderLTovoid())))();
    var LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = () => (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid = dart.constFn(_js_helper.LinkedMap$(T$.StringL(), StateLAndActionLAndStateBuilderLToLvoid())))();
    var StateBuilderL = () => (StateBuilderL = dart.constFn(dart.legacy(StateBuilder)))();
    class SetMultimapReducerBuilder extends core.Object {
      add(Payload, actionName, reducer) {
        this[_map$0][$_set](actionName.name, dart.fn((state, action, builder) => {
          let t0, t0$;
          return reducer((t0 = state, this[_stateMapper$0](t0)), dart.legacy(action$.Action$(dart.legacy(Payload))).as(action), (t0$ = builder, this[_builderMapper$](t0$)));
        }, StateLAndActionLAndStateBuilderLTovoid()));
      }
    }
    (SetMultimapReducerBuilder.new = function(_stateMapper, _builderMapper) {
      this[_map$0] = new (LinkedMapOfStringL$StateLAndActionLAndStateBuilderLToLvoid()).new();
      this[_stateMapper$0] = _stateMapper;
      this[_builderMapper$] = _builderMapper;
      ;
    }).prototype = SetMultimapReducerBuilder.prototype;
    dart.addTypeTests(SetMultimapReducerBuilder);
    SetMultimapReducerBuilder.prototype[_is_SetMultimapReducerBuilder_default] = true;
    dart.addTypeCaches(SetMultimapReducerBuilder);
    dart.setMethodSignature(SetMultimapReducerBuilder, () => ({
      __proto__: dart.getMethods(SetMultimapReducerBuilder.__proto__),
      add: dart.gFnType(Payload => [dart.void, [dart.legacy(action$.ActionName$(dart.legacy(Payload))), dart.legacy(dart.fnType(dart.void, [dart.legacy(set_multimap.BuiltSetMultimap$(dart.legacy(K), dart.legacy(V))), dart.legacy(action$.Action$(dart.legacy(Payload))), dart.legacy(set_multimap.SetMultimapBuilder$(dart.legacy(K), dart.legacy(V)))]))]])
    }));
    dart.setLibraryUri(SetMultimapReducerBuilder, I[5]);
    dart.setFieldSignature(SetMultimapReducerBuilder, () => ({
      __proto__: dart.getFields(SetMultimapReducerBuilder.__proto__),
      [_map$0]: dart.finalFieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(dart.fnType(dart.void, [dart.legacy(State), dart.legacy(action$.Action), dart.legacy(StateBuilder)]))))),
      [_stateMapper$0]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(set_multimap.BuiltSetMultimap$(dart.legacy(K), dart.legacy(V))), [dart.legacy(State)]))),
      [_builderMapper$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(set_multimap.SetMultimapBuilder$(dart.legacy(K), dart.legacy(V))), [dart.legacy(StateBuilder)])))
    }));
    return SetMultimapReducerBuilder;
  });
  reducer_builder.SetMultimapReducerBuilder = reducer_builder.SetMultimapReducerBuilder$();
  dart.addTypeTests(reducer_builder.SetMultimapReducerBuilder, _is_SetMultimapReducerBuilder_default);
  dart.trackLibraries("packages/built_redux/src/action", {
    "package:built_redux/src/store_change.dart": store_change,
    "package:built_redux/src/store.dart": store,
    "package:built_redux/src/typedefs.dart": typedefs,
    "package:built_redux/src/middleware.dart": middleware,
    "package:built_redux/src/action.dart": action$,
    "package:built_redux/src/reducer_builder.dart": reducer_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["store_change.dart","store.dart","typedefs.dart","middleware.dart","action.dart","reducer_builder.dart"],"names":[],"mappings":"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","file":"action.unsound.ddc.js"}');
  // Exports:
  return {
    src__store_change: store_change,
    src__store: store,
    src__typedefs: typedefs,
    src__middleware: middleware,
    src__action: action$,
    src__reducer_builder: reducer_builder
  };
}));

//# sourceMappingURL=action.unsound.ddc.js.map
