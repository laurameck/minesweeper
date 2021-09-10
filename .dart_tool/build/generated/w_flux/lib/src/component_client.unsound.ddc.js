define(['dart_sdk', 'packages/react/hooks', 'packages/w_flux/src/action'], (function load__packages__w_flux__src__component_client(dart_sdk, packages__react__hooks, packages__w_flux__src__action) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const react = packages__react__hooks.react;
  const component_common = packages__w_flux__src__action.src__component_common;
  var w_flux = Object.create(dart.library);
  var batched_redraws = Object.create(dart.library);
  var component_client = Object.create(dart.library);
  var $isEmpty = dartx.isEmpty;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $animationFrame = dartx.animationFrame;
  var $entries = dartx.entries;
  var $toList = dartx.toList;
  var $clear = dartx.clear;
  var $isNotEmpty = dartx.isNotEmpty;
  var $forEach = dartx.forEach;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    BatchedRedrawsL: () => (T.BatchedRedrawsL = dart.constFn(dart.legacy(batched_redraws.BatchedRedraws)))(),
    FunctionL: () => (T.FunctionL = dart.constFn(dart.legacy(core.Function)))(),
    ListOfFunctionL: () => (T.ListOfFunctionL = dart.constFn(core.List$(T.FunctionL())))(),
    ListLOfFunctionL: () => (T.ListLOfFunctionL = dart.constFn(dart.legacy(T.ListOfFunctionL())))(),
    LinkedMapOfBatchedRedrawsL$ListLOfFunctionL: () => (T.LinkedMapOfBatchedRedrawsL$ListLOfFunctionL = dart.constFn(_js_helper.LinkedMap$(T.BatchedRedrawsL(), T.ListLOfFunctionL())))(),
    JSArrayOfFunctionL: () => (T.JSArrayOfFunctionL = dart.constFn(_interceptors.JSArray$(T.FunctionL())))(),
    FunctionLToNull: () => (T.FunctionLToNull = dart.constFn(dart.fnType(core.Null, [T.FunctionL()])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ComponentL: () => (T.ComponentL = dart.constFn(dart.legacy(react.Component)))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:w_flux/src/mixins/batched_redraws.dart",
    "package:w_flux/src/component_client.dart"
  ];
  var _components = dart.privateName(batched_redraws, "_components");
  var _tick = dart.privateName(batched_redraws, "_tick");
  batched_redraws._RedrawScheduler = class _RedrawScheduler extends core.Object {
    call(component, callback = null) {
      let t1, t0;
      if (dart.test(this[_components][$isEmpty])) {
        this[_tick]();
      }
      t0 = this[_components];
      t1 = component;
      t0[$_get](t1) == null ? t0[$_set](t1, T.JSArrayOfFunctionL().of([])) : null;
      if (callback != null) this[_components][$_get](component)[$add](callback);
    }
    [_tick]() {
      return async.async(dart.dynamic, (function* _tick() {
        let t0;
        yield html.window[$animationFrame];
        let entries = this[_components][$entries][$toList]();
        this[_components][$clear]();
        for (let entry of entries) {
          let component = entry.key;
          let callbacks = entry.value;
          if (!dart.test(component.shouldBatchRedraw)) {
            continue;
          }
          let chainedCallbacks = null;
          if (dart.test(callbacks[$isNotEmpty])) {
            chainedCallbacks = dart.fn(() => {
              callbacks[$forEach](dart.fn(callback => {
                dart.dcall(callback, []);
              }, T.FunctionLToNull()));
            }, T.VoidToNull());
          }
          t0 = T.ComponentL().as(component);
          t0 == null ? null : t0.setState(new _js_helper.LinkedMap.new(), chainedCallbacks);
          yield T.FutureOfNull().new(dart.fn(() => {
          }, T.VoidToNull()));
        }
      }).bind(this));
    }
  };
  (batched_redraws._RedrawScheduler.new = function() {
    this[_components] = new (T.LinkedMapOfBatchedRedrawsL$ListLOfFunctionL()).new();
    ;
  }).prototype = batched_redraws._RedrawScheduler.prototype;
  dart.addTypeTests(batched_redraws._RedrawScheduler);
  dart.addTypeCaches(batched_redraws._RedrawScheduler);
  dart.setMethodSignature(batched_redraws._RedrawScheduler, () => ({
    __proto__: dart.getMethods(batched_redraws._RedrawScheduler.__proto__),
    call: dart.fnType(dart.void, [dart.legacy(batched_redraws.BatchedRedraws)], [dart.legacy(dart.fnType(dart.dynamic, []))]),
    [_tick]: dart.fnType(dart.legacy(async.Future), [])
  }));
  dart.setLibraryUri(batched_redraws._RedrawScheduler, I[0]);
  dart.setFieldSignature(batched_redraws._RedrawScheduler, () => ({
    __proto__: dart.getFields(batched_redraws._RedrawScheduler.__proto__),
    [_components]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(batched_redraws.BatchedRedraws), dart.legacy(core.List$(dart.legacy(core.Function))))))
  }));
  var shouldBatchRedraw = dart.privateName(batched_redraws, "BatchedRedraws.shouldBatchRedraw");
  batched_redraws.BatchedRedraws = class BatchedRedraws extends core.Object {
    get shouldBatchRedraw() {
      return this[shouldBatchRedraw];
    }
    set shouldBatchRedraw(value) {
      this[shouldBatchRedraw] = value;
    }
    redraw(callback = null) {
      return batched_redraws._scheduleRedraw.call(this, callback);
    }
  };
  (batched_redraws.BatchedRedraws.new = function() {
    this[shouldBatchRedraw] = true;
    ;
  }).prototype = batched_redraws.BatchedRedraws.prototype;
  dart.addTypeTests(batched_redraws.BatchedRedraws);
  dart.addTypeCaches(batched_redraws.BatchedRedraws);
  dart.setMethodSignature(batched_redraws.BatchedRedraws, () => ({
    __proto__: dart.getMethods(batched_redraws.BatchedRedraws.__proto__),
    redraw: dart.fnType(dart.void, [], [dart.legacy(dart.fnType(dart.dynamic, []))])
  }));
  dart.setLibraryUri(batched_redraws.BatchedRedraws, I[0]);
  dart.setFieldSignature(batched_redraws.BatchedRedraws, () => ({
    __proto__: dart.getFields(batched_redraws.BatchedRedraws.__proto__),
    shouldBatchRedraw: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(batched_redraws, {
    /*batched_redraws._scheduleRedraw*/get _scheduleRedraw() {
      return new batched_redraws._RedrawScheduler.new();
    },
    set _scheduleRedraw(_) {}
  }, true);
  const _is_FluxComponent_default = Symbol('_is_FluxComponent_default');
  component_client.FluxComponent$ = dart.generic((ActionsT, StoresT) => {
    const FluxComponentCommon_BatchedRedraws$36 = class FluxComponentCommon_BatchedRedraws extends component_common.FluxComponentCommon$(dart.legacy(ActionsT), dart.legacy(StoresT)) {};
    (FluxComponentCommon_BatchedRedraws$36.new = function() {
      batched_redraws.BatchedRedraws.new.call(this);
      FluxComponentCommon_BatchedRedraws$36.__proto__.new.call(this);
    }).prototype = FluxComponentCommon_BatchedRedraws$36.prototype;
    dart.applyMixin(FluxComponentCommon_BatchedRedraws$36, batched_redraws.BatchedRedraws);
    class FluxComponent extends FluxComponentCommon_BatchedRedraws$36 {
      componentWillUnmount() {
        this.shouldBatchRedraw = false;
        super.componentWillUnmount();
      }
    }
    (FluxComponent.new = function() {
      FluxComponent.__proto__.new.call(this);
      ;
    }).prototype = FluxComponent.prototype;
    dart.addTypeTests(FluxComponent);
    FluxComponent.prototype[_is_FluxComponent_default] = true;
    dart.addTypeCaches(FluxComponent);
    dart.setLibraryUri(FluxComponent, I[1]);
    return FluxComponent;
  });
  component_client.FluxComponent = component_client.FluxComponent$();
  dart.addTypeTests(component_client.FluxComponent, _is_FluxComponent_default);
  dart.trackLibraries("packages/w_flux/src/component_client", {
    "package:w_flux/w_flux.dart": w_flux,
    "package:w_flux/src/mixins/batched_redraws.dart": batched_redraws,
    "package:w_flux/src/component_client.dart": component_client
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["mixins/batched_redraws.dart","component_client.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;SAW2B,WAAY;;AACnC,oBAAI,AAAY;AACP,QAAP;;AAG2B,WAA7B;WAAY,SAAS;MAAE,wBAAZ,cAAgB,iCAAJ;AAEvB,UAAI,QAAQ,UAAU,AAAW,AAAY,AAAa,yBAAxB,SAAS,QAAM,QAAQ;IAC3D;;AAEY;;AACiB,QAA3B,MAAM,AAAO;AAGT,sBAAU,AAAY,AAAQ;AACf,QAAnB,AAAY;AACZ,iBAAS,QAAS,QAAO;AACnB,0BAAY,AAAM,KAAD;AACjB,0BAAY,AAAM,KAAD;AAErB,yBAAK,AAAU,SAAD;AACZ;;AAGS;AAEX,wBAAI,AAAU,SAAD;AAKV,YAJD,mBAAmB;AAGf,cAFF,AAAU,SAAD,WAAS,QAAC;AACP,gBAAF,WAAR,QAAQ;;;;AAKgD,eAAnD,kBAAV,SAAS;uBAAmB,OAAG,YAAS,gCAAI,gBAAgB;AAG1C,UAAnB,MAAM,qBAAO;;;MAEjB;;;;IA1CoC,oBACA;;EA0CtC;;;;;;;;;;;;;;;IAgBO;;;;;;WAEQ;AAAgB,YAAA,AAAe,sCAAC,MAAM,QAAQ;IAAC;;;IAFvD,0BAAoB;;EAG3B;;;;;;;;;;;;;MAjBiB,+BAAe;YAAG;;;;;;;;;;;;;;ACnBN,QAAzB,yBAAoB;AACQ,QAAtB;MACR;;;;;IACF","file":"component_client.unsound.ddc.js"}');
  // Exports:
  return {
    w_flux: w_flux,
    src__mixins__batched_redraws: batched_redraws,
    src__component_client: component_client
  };
}));

//# sourceMappingURL=component_client.unsound.ddc.js.map
