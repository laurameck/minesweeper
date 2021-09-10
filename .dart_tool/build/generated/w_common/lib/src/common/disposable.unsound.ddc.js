define(['dart_sdk', 'packages/logging/logging'], (function load__packages__w_common__src__common__disposable(dart_sdk, packages__logging__logging) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const logger = packages__logging__logging.src__logger;
  var managed_stream_subscription = Object.create(dart.library);
  var disposable$ = Object.create(dart.library);
  var disposable_state = Object.create(dart.library);
  var disposable_manager = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isNotEmpty = dartx.isNotEmpty;
  var $toList = dartx.toList;
  var $runtimeType = dartx.runtimeType;
  var $hashCode = dartx.hashCode;
  dart._checkModuleNullSafetyMode(false);
  var T$ = {
    CompleterOfNull: () => (T$.CompleterOfNull = dart.constFn(async.Completer$(core.Null)))(),
    voidToNull: () => (T$.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    StackTraceL: () => (T$.StackTraceL = dart.constFn(dart.legacy(core.StackTrace)))(),
    ObjectL: () => (T$.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    ObjectLAndStackTraceLTodynamic: () => (T$.ObjectLAndStackTraceLTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.ObjectL(), T$.StackTraceL()])))(),
    ObjectLAndStackTraceLToLdynamic: () => (T$.ObjectLAndStackTraceLToLdynamic = dart.constFn(dart.legacy(T$.ObjectLAndStackTraceLTodynamic())))(),
    dynamicAnddynamicToNull: () => (T$.dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))(),
    dynamicToNull: () => (T$.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    FutureL: () => (T$.FutureL = dart.constFn(dart.legacy(async.Future)))(),
    _HashSetOfFutureL: () => (T$._HashSetOfFutureL = dart.constFn(collection._HashSet$(T$.FutureL())))(),
    _DisposableL: () => (T$._DisposableL = dart.constFn(dart.legacy(disposable$._Disposable)))(),
    _HashSetOf_DisposableL: () => (T$._HashSetOf_DisposableL = dart.constFn(collection._HashSet$(T$._DisposableL())))(),
    DisposableL: () => (T$.DisposableL = dart.constFn(dart.legacy(disposable$.Disposable)))(),
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    FutureOfNull: () => (T$.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    FutureLOfNull: () => (T$.FutureLOfNull = dart.constFn(dart.legacy(T$.FutureOfNull())))(),
    VoidToFutureLOfNull: () => (T$.VoidToFutureLOfNull = dart.constFn(dart.fnType(T$.FutureLOfNull(), [])))(),
    NullToNull: () => (T$.NullToNull = dart.constFn(dart.fnType(core.Null, [core.Null])))(),
    ObjectLToNull: () => (T$.ObjectLToNull = dart.constFn(dart.fnType(core.Null, [T$.ObjectL()])))(),
    VoidToFutureL: () => (T$.VoidToFutureL = dart.constFn(dart.fnType(T$.FutureL(), [])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    FutureLOfvoid: () => (T$.FutureLOfvoid = dart.constFn(dart.legacy(T$.FutureOfvoid())))(),
    VoidToFutureLOfvoid: () => (T$.VoidToFutureLOfvoid = dart.constFn(dart.fnType(T$.FutureLOfvoid(), [])))(),
    DisposableStateL: () => (T$.DisposableStateL = dart.constFn(dart.legacy(disposable_state.DisposableState)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: disposable_state.DisposableState.prototype,
        [_name$]: "DisposableState.initialized",
        index: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: disposable_state.DisposableState.prototype,
        [_name$]: "DisposableState.awaitingDisposal",
        index: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: disposable_state.DisposableState.prototype,
        [_name$]: "DisposableState.disposing",
        index: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: disposable_state.DisposableState.prototype,
        [_name$]: "DisposableState.disposed",
        index: 3
      });
    },
    get C4() {
      return C[4] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3], T$.DisposableStateL());
    }
  }, false);
  var C = Array(5).fill(void 0);
  var I = [
    "package:w_common/src/common/managed_stream_subscription.dart",
    "package:w_common/src/common/disposable.dart",
    "package:w_common/src/common/disposable_state.dart",
    "package:w_common/src/common/disposable_manager.dart"
  ];
  var _didComplete = dart.privateName(managed_stream_subscription, "_didComplete");
  var _cancelOnError = dart.privateName(managed_stream_subscription, "_cancelOnError");
  var _subscription = dart.privateName(managed_stream_subscription, "_subscription");
  var _wrapOnDone = dart.privateName(managed_stream_subscription, "_wrapOnDone");
  var _wrapOnError = dart.privateName(managed_stream_subscription, "_wrapOnError");
  var _complete = dart.privateName(managed_stream_subscription, "_complete");
  const _is_ManagedStreamSubscription_default = Symbol('_is_ManagedStreamSubscription_default');
  managed_stream_subscription.ManagedStreamSubscription$ = dart.generic(T => {
    class ManagedStreamSubscription extends core.Object {
      get didComplete() {
        return this[_didComplete].future;
      }
      get isPaused() {
        return this[_subscription].isPaused;
      }
      asFuture(E, futureValue = null) {
        return this[_subscription].asFuture(dart.legacy(E), futureValue).whenComplete(dart.bind(this, _complete));
      }
      cancel() {
        let result = this[_subscription].cancel();
        if (result == null) {
          this[_complete]();
          return null;
        }
        return result.then(core.Null, dart.fn(_ => {
          this[_complete]();
        }, T$.voidToNull()));
      }
      onData(handleData) {
        return this[_subscription].onData(handleData);
      }
      onDone(handleDone) {
        return this[_wrapOnDone](handleDone);
      }
      onError(handleError) {
        return this[_wrapOnError](handleError);
      }
      pause(resumeSignal = null) {
        return this[_subscription].pause(resumeSignal);
      }
      resume() {
        return this[_subscription].resume();
      }
      [_complete]() {
        if (!dart.test(this[_didComplete].isCompleted)) {
          this[_didComplete].complete();
        }
      }
      [_wrapOnDone](handleDone) {
        this[_subscription].onDone(dart.fn(() => {
          if (handleDone != null) {
            handleDone();
          }
          this[_complete]();
        }, T$.VoidToNull()));
      }
      [_wrapOnError](handleError) {
        this[_subscription].onError(dart.fn((error, stackTrace) => {
          if (handleError == null) {
            async.Zone.current.handleUncaughtError(error, T$.StackTraceL().as(stackTrace));
          } else {
            if (T$.ObjectLAndStackTraceLToLdynamic().is(handleError)) {
              handleError(error, T$.StackTraceL().as(stackTrace));
            } else {
              dart.dcall(handleError, [error]);
            }
          }
          if (dart.test(this[_cancelOnError])) {
            this[_complete]();
          }
        }, T$.dynamicAnddynamicToNull()));
      }
    }
    (ManagedStreamSubscription.new = function(stream, onData, opts) {
      let t0;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      this[_didComplete] = T$.CompleterOfNull().new();
      this[_cancelOnError] = (t0 = cancelOnError, t0 == null ? false : t0);
      this[_subscription] = stream.listen(onData, {cancelOnError: cancelOnError});
      this[_wrapOnDone](onDone);
      this[_wrapOnError](onError);
    }).prototype = ManagedStreamSubscription.prototype;
    ManagedStreamSubscription.prototype[dart.isStreamSubscription] = true;
    dart.addTypeTests(ManagedStreamSubscription);
    ManagedStreamSubscription.prototype[_is_ManagedStreamSubscription_default] = true;
    dart.addTypeCaches(ManagedStreamSubscription);
    ManagedStreamSubscription[dart.implements] = () => [async.StreamSubscription$(dart.legacy(T))];
    dart.setMethodSignature(ManagedStreamSubscription, () => ({
      __proto__: dart.getMethods(ManagedStreamSubscription.__proto__),
      asFuture: dart.gFnType(E => [dart.legacy(async.Future$(dart.legacy(E))), [], [dart.legacy(E)]]),
      cancel: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
      onData: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))]),
      onDone: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
      onError: dart.fnType(dart.void, [dart.legacy(core.Function)]),
      pause: dart.fnType(dart.void, [], [dart.legacy(async.Future)]),
      resume: dart.fnType(dart.void, []),
      [_complete]: dart.fnType(dart.void, []),
      [_wrapOnDone]: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
      [_wrapOnError]: dart.fnType(dart.void, [dart.legacy(core.Function)])
    }));
    dart.setGetterSignature(ManagedStreamSubscription, () => ({
      __proto__: dart.getGetters(ManagedStreamSubscription.__proto__),
      didComplete: dart.legacy(async.Future$(core.Null)),
      isPaused: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(ManagedStreamSubscription, I[0]);
    dart.setFieldSignature(ManagedStreamSubscription, () => ({
      __proto__: dart.getFields(ManagedStreamSubscription.__proto__),
      [_cancelOnError]: dart.finalFieldType(dart.legacy(core.bool)),
      [_subscription]: dart.finalFieldType(dart.legacy(async.StreamSubscription$(dart.legacy(T)))),
      [_didComplete]: dart.fieldType(dart.legacy(async.Completer$(core.Null)))
    }));
    return ManagedStreamSubscription;
  });
  managed_stream_subscription.ManagedStreamSubscription = managed_stream_subscription.ManagedStreamSubscription$();
  dart.addTypeTests(managed_stream_subscription.ManagedStreamSubscription, _is_ManagedStreamSubscription_default);
  disposable$._Disposable = class _Disposable extends core.Object {};
  (disposable$._Disposable.new = function() {
    ;
  }).prototype = disposable$._Disposable.prototype;
  dart.addTypeTests(disposable$._Disposable);
  dart.addTypeCaches(disposable$._Disposable);
  dart.setLibraryUri(disposable$._Disposable, I[1]);
  var _didDispose = dart.privateName(disposable$, "_didDispose");
  var _isDisposing = dart.privateName(disposable$, "_isDisposing");
  var _disposer$ = dart.privateName(disposable$, "_disposer");
  disposable$.ManagedDisposer = class ManagedDisposer extends core.Object {
    get didDispose() {
      return this[_didDispose].future;
    }
    get isDisposed() {
      return this[_didDispose].isCompleted;
    }
    get isDisposedOrDisposing() {
      return dart.test(this.isDisposed) || dart.test(this.isDisposing);
    }
    get isDisposing() {
      return this[_isDisposing];
    }
    dispose() {
      let t0;
      if (dart.test(this.isDisposedOrDisposing)) {
        return this.didDispose;
      }
      this[_isDisposing] = true;
      let disposeFuture = this[_disposer$] != null ? (t0 = this[_disposer$](), t0 == null ? async.Future.value() : t0) : async.Future.value();
      this[_disposer$] = null;
      return disposeFuture.then(core.Null, dart.fn(_ => {
        this[_disposer$] = null;
        this[_didDispose].complete();
        this[_isDisposing] = false;
      }, T$.dynamicToNull()));
    }
  };
  (disposable$.ManagedDisposer.new = function(_disposer) {
    this[_didDispose] = T$.CompleterOfNull().new();
    this[_isDisposing] = false;
    this[_disposer$] = _disposer;
    ;
  }).prototype = disposable$.ManagedDisposer.prototype;
  dart.addTypeTests(disposable$.ManagedDisposer);
  dart.addTypeCaches(disposable$.ManagedDisposer);
  disposable$.ManagedDisposer[dart.implements] = () => [disposable$._Disposable];
  dart.setMethodSignature(disposable$.ManagedDisposer, () => ({
    __proto__: dart.getMethods(disposable$.ManagedDisposer.__proto__),
    dispose: dart.fnType(dart.legacy(async.Future$(core.Null)), [])
  }));
  dart.setGetterSignature(disposable$.ManagedDisposer, () => ({
    __proto__: dart.getGetters(disposable$.ManagedDisposer.__proto__),
    didDispose: dart.legacy(async.Future$(core.Null)),
    isDisposed: dart.legacy(core.bool),
    isDisposedOrDisposing: dart.legacy(core.bool),
    isDisposing: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(disposable$.ManagedDisposer, I[1]);
  dart.setFieldSignature(disposable$.ManagedDisposer, () => ({
    __proto__: dart.getFields(disposable$.ManagedDisposer.__proto__),
    [_disposer$]: dart.fieldType(dart.legacy(dart.fnType(dart.legacy(async.Future), []))),
    [_didDispose]: dart.finalFieldType(dart.legacy(async.Completer$(core.Null))),
    [_isDisposing]: dart.fieldType(dart.legacy(core.bool))
  }));
  var _didConclude = dart.privateName(disposable$, "_didConclude");
  var _timer = dart.privateName(disposable$, "_timer");
  var _complete$ = dart.privateName(disposable$, "_complete");
  disposable$._ObservableTimer = class _ObservableTimer extends core.Object {
    [_complete$]() {
      if (!dart.test(this[_didConclude].isCompleted)) {
        this[_didConclude].complete();
      }
    }
    get didConclude() {
      return this[_didConclude].future;
    }
    cancel() {
      this[_timer].cancel();
      this[_complete$]();
    }
    get isActive() {
      return this[_timer].isActive;
    }
    get tick() {
      dart.throw(new core.UnsupportedError.new("Timer.tick is unsupported"));
    }
  };
  (disposable$._ObservableTimer.new = function(duration, callback) {
    this[_didConclude] = T$.CompleterOfNull().new();
    this[_timer] = null;
    this[_timer] = async.Timer.new(duration, dart.fn(() => {
      callback();
      this[_complete$]();
    }, T$.VoidToNull()));
  }).prototype = disposable$._ObservableTimer.prototype;
  (disposable$._ObservableTimer.periodic = function(duration, callback) {
    this[_didConclude] = T$.CompleterOfNull().new();
    this[_timer] = null;
    this[_timer] = async.Timer.periodic(duration, callback);
  }).prototype = disposable$._ObservableTimer.prototype;
  dart.addTypeTests(disposable$._ObservableTimer);
  dart.addTypeCaches(disposable$._ObservableTimer);
  disposable$._ObservableTimer[dart.implements] = () => [async.Timer];
  dart.setMethodSignature(disposable$._ObservableTimer, () => ({
    __proto__: dart.getMethods(disposable$._ObservableTimer.__proto__),
    [_complete$]: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(disposable$._ObservableTimer, () => ({
    __proto__: dart.getGetters(disposable$._ObservableTimer.__proto__),
    didConclude: dart.legacy(async.Future$(core.Null)),
    isActive: dart.legacy(core.bool),
    tick: dart.legacy(core.int)
  }));
  dart.setLibraryUri(disposable$._ObservableTimer, I[1]);
  dart.setFieldSignature(disposable$._ObservableTimer, () => ({
    __proto__: dart.getFields(disposable$._ObservableTimer.__proto__),
    [_didConclude]: dart.fieldType(dart.legacy(async.Completer$(core.Null))),
    [_timer]: dart.fieldType(dart.legacy(async.Timer))
  }));
  var description$ = dart.privateName(disposable$, "LeakFlag.description");
  disposable$.LeakFlag = class LeakFlag extends core.Object {
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    toString() {
      return this.description == null ? "LeakFlag" : "LeakFlag: " + dart.str(this.description);
    }
  };
  (disposable$.LeakFlag.new = function(description) {
    this[description$] = description;
    ;
  }).prototype = disposable$.LeakFlag.prototype;
  dart.addTypeTests(disposable$.LeakFlag);
  dart.addTypeCaches(disposable$.LeakFlag);
  dart.setMethodSignature(disposable$.LeakFlag, () => ({
    __proto__: dart.getMethods(disposable$.LeakFlag.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(disposable$.LeakFlag, I[1]);
  dart.setFieldSignature(disposable$.LeakFlag, () => ({
    __proto__: dart.getFields(disposable$.LeakFlag.__proto__),
    description: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(disposable$.LeakFlag, ['toString']);
  var _awaitableFutures = dart.privateName(disposable$, "_awaitableFutures");
  var _leakFlag = dart.privateName(disposable$, "_leakFlag");
  var _internalDisposables = dart.privateName(disposable$, "_internalDisposables");
  var _state = dart.privateName(disposable$, "_state");
  var _throwOnInvalidCall = dart.privateName(disposable$, "_throwOnInvalidCall");
  var _logDispose = dart.privateName(disposable$, "_logDispose");
  var _throwOnInvalidCall2 = dart.privateName(disposable$, "_throwOnInvalidCall2");
  var _logManageMessage = dart.privateName(disposable$, "_logManageMessage");
  var _logUnmanageMessage = dart.privateName(disposable$, "_logUnmanageMessage");
  var _addObservableTimerDisposable = dart.privateName(disposable$, "_addObservableTimerDisposable");
  disposable$.Disposable = class Disposable extends core.Object {
    static disableDebugMode() {
      let t0;
      if (dart.test(disposable$.Disposable._debugMode)) {
        disposable$.Disposable._debugMode = false;
        disposable$.Disposable._debugModeLogging = false;
        disposable$.Disposable._debugModeTelemetry = false;
        t0 = disposable$.Disposable._logger;
        t0 == null ? null : t0.clearListeners();
        disposable$.Disposable._logger = null;
      }
    }
    static enableDebugMode(opts) {
      let t0, t0$;
      let disableLogging = opts && 'disableLogging' in opts ? opts.disableLogging : null;
      let disableTelemetry = opts && 'disableTelemetry' in opts ? opts.disableTelemetry : null;
      if (!dart.test(disposable$.Disposable._debugMode)) {
        disposable$.Disposable._debugMode = true;
        disposable$.Disposable._debugModeLogging = !dart.test((t0 = disableLogging, t0 == null ? false : t0));
        disposable$.Disposable._debugModeTelemetry = !dart.test((t0$ = disableTelemetry, t0$ == null ? false : t0$));
        if (dart.test(disposable$.Disposable._debugModeLogging)) {
          disposable$.Disposable._logger = logger.Logger.new("w_common.Disposable");
        }
      }
    }
    get didDispose() {
      return this[_didDispose].future;
    }
    get disposableTypeName() {
      return "Disposable";
    }
    get disposalTreeSize() {
      let size = 1;
      for (let disposable of this[_internalDisposables]) {
        if (T$.DisposableL().is(disposable)) {
          size = size + dart.notNull(disposable.disposalTreeSize);
        } else {
          size = size + 1;
        }
      }
      return size;
    }
    get isDisposed() {
      return this[_didDispose].isCompleted;
    }
    get isDisposedOrDisposing() {
      return dart.test(this.isDisposed) || dart.test(this.isDisposing);
    }
    get isDisposing() {
      return this[_state] == disposable_state.DisposableState.disposing;
    }
    get isLeakFlagSet() {
      return this[_leakFlag] != null;
    }
    get isOrWillBeDisposed() {
      return this[_state] == disposable_state.DisposableState.awaitingDisposal || this[_state] == disposable_state.DisposableState.disposing || this[_state] == disposable_state.DisposableState.disposed;
    }
    awaitBeforeDispose(T, future) {
      this[_throwOnInvalidCall]("awaitBeforeDispose", "future", future);
      this[_awaitableFutures].add(future);
      future.then(core.Null, dart.fn(_ => {
        if (!dart.test(this.isOrWillBeDisposed)) {
          this[_awaitableFutures].remove(future);
        }
      }, dart.fnType(core.Null, [dart.legacy(T)]))).catchError(dart.fn(_ => {
        if (!dart.test(this.isOrWillBeDisposed)) {
          this[_awaitableFutures].remove(future);
        }
      }, T$.dynamicToNull()));
      return future;
    }
    dispose() {
      return async.async(core.Null, (function* dispose() {
        let t0;
        let stopwatch = null;
        if (dart.test(disposable$.Disposable._debugModeTelemetry)) {
          stopwatch = (t0 = new core.Stopwatch.new(), (() => {
            t0.start();
            return t0;
          })());
        }
        this[_logDispose]();
        if (dart.test(this.isDisposed)) {
          return null;
        }
        if (dart.test(this.isOrWillBeDisposed)) {
          return this.didDispose;
        }
        this[_state] = disposable_state.DisposableState.awaitingDisposal;
        yield this.onWillDispose();
        while (dart.test(this[_awaitableFutures][$isNotEmpty])) {
          let futures = this[_awaitableFutures][$toList]();
          this[_awaitableFutures].clear();
          yield async.Future.wait(dart.dynamic, futures);
        }
        this[_state] = disposable_state.DisposableState.disposing;
        for (let disposable of this[_internalDisposables]) {
          yield disposable.dispose();
        }
        this[_internalDisposables].clear();
        yield this.onDispose();
        this[_didDispose].complete();
        this[_state] = disposable_state.DisposableState.disposed;
        if (dart.test(disposable$.Disposable._debugModeLogging)) {
          disposable$.Disposable._logger.info("Disposed object " + dart.str(this.hashCode) + " of type " + dart.str(this.runtimeType));
        }
        if (dart.test(disposable$.Disposable._debugModeTelemetry)) {
          stopwatch.stop();
          let t = dart.notNull(stopwatch.elapsedMicroseconds) / 1000000.0;
          disposable$.Disposable._logger.info(dart.str(this.runtimeType) + " " + dart.str(this.hashCode) + " took " + dart.str(t) + " seconds to dispose");
        }
        this.flagLeak();
      }).bind(this));
    }
    flagLeak(description = null) {
      let t0;
      if (dart.test(disposable$.Disposable._debugMode) && this[_leakFlag] == null) {
        this[_leakFlag] = new disposable$.LeakFlag.new((t0 = description, t0 == null ? dart.str(this.disposableTypeName) + " (runtimeType: " + dart.str(this.runtimeType) + ")" : t0));
      }
    }
    getManagedDelayedFuture(T, duration, callback) {
      this[_throwOnInvalidCall2]("getManagedDelayedFuture", "duration", "callback", duration, callback);
      let completer = async.Completer$(dart.legacy(T)).new();
      let timer = new disposable$._ObservableTimer.new(duration, dart.fn(() => completer.complete(callback()), T$.VoidTovoid()));
      let disposable = new disposable$.ManagedDisposer.new(dart.fn(() => async.async(core.Null, function*() {
        timer.cancel();
        completer.completeError(new disposable_manager.ObjectDisposedException.new());
      }), T$.VoidToFutureLOfNull()));
      this[_logManageMessage](completer.future);
      this[_internalDisposables].add(disposable);
      timer.didConclude.then(core.Null, dart.fn(_ => {
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_logUnmanageMessage](completer.future);
          this[_internalDisposables].remove(disposable);
        }
      }, T$.NullToNull()));
      return completer.future;
    }
    getManagedDisposer(disposer) {
      this[_throwOnInvalidCall]("getManagedDisposer", "disposer", disposer);
      this[_logManageMessage](disposer);
      let disposable = new disposable$.ManagedDisposer.new(disposer);
      this[_internalDisposables].add(disposable);
      disposable.didDispose.then(core.Null, dart.fn(_ => {
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_logUnmanageMessage](disposer);
          this[_internalDisposables].remove(disposable);
        }
      }, T$.ObjectLToNull()));
      return disposable;
    }
    getManagedTimer(duration, callback) {
      this[_throwOnInvalidCall2]("getManagedTimer", "duration", "callback", duration, callback);
      let timer = new disposable$._ObservableTimer.new(duration, callback);
      this[_addObservableTimerDisposable](timer);
      return timer;
    }
    getManagedPeriodicTimer(duration, callback) {
      this[_throwOnInvalidCall2]("getManagedPeriodicTimer", "duration", "callback", duration, callback);
      let timer = new disposable$._ObservableTimer.periodic(duration, callback);
      this[_addObservableTimerDisposable](timer);
      return timer;
    }
    listenToStream(T, stream, onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      this[_throwOnInvalidCall2]("listenToStream", "stream", "onData", stream, onData);
      let managedStreamSubscription = new (managed_stream_subscription.ManagedStreamSubscription$(dart.legacy(T))).new(stream, onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      this[_logManageMessage](managedStreamSubscription);
      let disposable = new disposable$.ManagedDisposer.new(dart.fn(() => {
        this[_logUnmanageMessage](managedStreamSubscription);
        return managedStreamSubscription.cancel();
      }, T$.VoidToFutureLOfNull()));
      this[_internalDisposables].add(disposable);
      managedStreamSubscription.didComplete.then(core.Null, dart.fn(_ => {
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_logUnmanageMessage](disposable);
          this[_internalDisposables].remove(disposable);
        }
      }, T$.ObjectLToNull()));
      return managedStreamSubscription;
    }
    manageAndReturnDisposable(disposable) {
      this[_throwOnInvalidCall]("manageAndReturnDisposable", "disposable", disposable);
      this.manageDisposable(disposable);
      return disposable;
    }
    manageAndReturnTypedDisposable(T, disposable) {
      this[_throwOnInvalidCall]("manageAndReturnDisposable", "disposable", disposable);
      this.manageDisposable(disposable);
      return disposable;
    }
    manageCompleter(T, completer) {
      this[_throwOnInvalidCall]("manageCompleter", "completer", completer);
      this[_logManageMessage](completer);
      let disposable = new disposable$.ManagedDisposer.new(dart.fn(() => async.async(core.Null, function*() {
        if (!dart.test(completer.isCompleted)) {
          completer.completeError(new disposable_manager.ObjectDisposedException.new());
        }
      }), T$.VoidToFutureLOfNull()));
      this[_internalDisposables].add(disposable);
      completer.future.catchError(dart.fn(e => {
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_logUnmanageMessage](completer);
          this[_internalDisposables].remove(disposable);
        }
      }, T$.dynamicToNull())).then(core.Null, dart.fn(_ => {
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_logUnmanageMessage](completer);
          this[_internalDisposables].remove(disposable);
        }
      }, dart.fnType(core.Null, [dart.legacy(T)])));
      return completer;
    }
    manageDisposable(disposable) {
      this[_throwOnInvalidCall]("manageDisposable", "disposable", disposable);
      this[_logManageMessage](disposable);
      this[_internalDisposables].add(disposable);
      disposable.didDispose.then(core.Null, dart.fn(_ => {
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_logUnmanageMessage](disposable);
          this[_internalDisposables].remove(disposable);
        }
      }, T$.ObjectLToNull()));
    }
    manageDisposer(disposer) {
      this[_throwOnInvalidCall]("manageDisposer", "disposer", disposer);
      this[_logManageMessage](disposer);
      this[_internalDisposables].add(new disposable$.ManagedDisposer.new(disposer));
    }
    manageStreamController(controller) {
      this[_throwOnInvalidCall]("manageStreamController", "controller", controller);
      this[_logManageMessage](controller);
      let isDone = false;
      let disposable = new disposable$.ManagedDisposer.new(dart.fn(() => {
        if (!dart.test(controller.hasListener) && !dart.test(controller.isClosed) && !isDone) {
          controller.stream.listen(dart.fn(_ => {
          }, T$.dynamicToNull()));
        }
        return controller.close();
      }, T$.VoidToFutureL()));
      controller.done.then(core.Null, dart.fn(_ => {
        isDone = true;
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_logUnmanageMessage](controller);
          this[_internalDisposables].remove(disposable);
        }
        disposable.dispose();
      }, T$.dynamicToNull()));
      this[_internalDisposables].add(disposable);
    }
    manageStreamSubscription(subscription) {
      this[_throwOnInvalidCall]("manageStreamSubscription", "subscription", subscription);
      this[_logManageMessage](subscription);
      this[_internalDisposables].add(new disposable$.ManagedDisposer.new(dart.fn(() => subscription.cancel(), T$.VoidToFutureLOfvoid())));
    }
    onDispose() {
      return async.async(core.Null, function* onDispose() {
        return null;
      });
    }
    onWillDispose() {
      return async.async(core.Null, function* onWillDispose() {
        return null;
      });
    }
    [_addObservableTimerDisposable](timer) {
      let disposable = new disposable$.ManagedDisposer.new(dart.fn(() => async.async(dart.void, function*() {
        return timer.cancel();
      }), T$.VoidToFutureLOfvoid()));
      this[_internalDisposables].add(disposable);
      timer.didConclude.then(core.Null, dart.fn(_ => {
        if (!dart.test(this.isDisposedOrDisposing)) {
          this[_internalDisposables].remove(disposable);
        }
      }, T$.NullToNull()));
    }
    [_logDispose]() {
      if (dart.test(disposable$.Disposable._debugModeLogging)) {
        disposable$.Disposable._logger.info("Disposing object " + dart.str(this.hashCode) + " of type " + dart.str(this.runtimeType));
      }
    }
    [_logUnmanageMessage](target) {
      if (dart.test(disposable$.Disposable._debugModeLogging)) {
        disposable$.Disposable._logger.info(dart.str(this.runtimeType) + " " + dart.str(this.hashCode) + " unmanaging " + dart.str(dart.runtimeType(target)) + " " + dart.str(dart.hashCode(target)));
      }
    }
    [_logManageMessage](target) {
      if (dart.test(disposable$.Disposable._debugModeLogging)) {
        disposable$.Disposable._logger.info(dart.str(this.runtimeType) + " " + dart.str(this.hashCode) + " managing " + dart.str(dart.runtimeType(target)) + " " + dart.str(dart.hashCode(target)));
      }
    }
    [_throwOnInvalidCall](methodName, parameterName, parameterValue) {
      if (parameterValue == null) {
        dart.throw(new core.ArgumentError.notNull(parameterName));
      }
      if (dart.test(this.isDisposing)) {
        dart.throw(new core.StateError.new(dart.str(this.disposableTypeName) + "." + dart.str(methodName) + " not allowed, object is disposing"));
      }
      if (dart.test(this.isDisposed)) {
        dart.throw(new core.StateError.new(dart.str(this.disposableTypeName) + "." + dart.str(methodName) + " not allowed, object is already disposed"));
      }
    }
    [_throwOnInvalidCall2](methodName, parameterName, secondParameterName, parameterValue, secondParameterValue) {
      if (secondParameterValue == null) {
        dart.throw(new core.ArgumentError.notNull(secondParameterName));
      }
      this[_throwOnInvalidCall](methodName, parameterName, parameterValue);
    }
  };
  (disposable$.Disposable.new = function() {
    this[_awaitableFutures] = new (T$._HashSetOfFutureL()).new();
    this[_didDispose] = T$.CompleterOfNull().new();
    this[_leakFlag] = null;
    this[_internalDisposables] = new (T$._HashSetOf_DisposableL()).new();
    this[_state] = disposable_state.DisposableState.initialized;
    ;
  }).prototype = disposable$.Disposable.prototype;
  dart.addTypeTests(disposable$.Disposable);
  dart.addTypeCaches(disposable$.Disposable);
  disposable$.Disposable[dart.implements] = () => [disposable$._Disposable, disposable_manager.DisposableManagerV7, disposable_manager.LeakFlagger];
  dart.setMethodSignature(disposable$.Disposable, () => ({
    __proto__: dart.getMethods(disposable$.Disposable.__proto__),
    awaitBeforeDispose: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(async.Future$(dart.legacy(T)))]]),
    dispose: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
    flagLeak: dart.fnType(dart.void, [], [dart.legacy(core.String)]),
    getManagedDelayedFuture: dart.gFnType(T => [dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.legacy(T), []))]]),
    getManagedDisposer: dart.fnType(dart.legacy(disposable$.ManagedDisposer), [dart.legacy(dart.fnType(dart.legacy(async.Future), []))]),
    getManagedTimer: dart.fnType(dart.legacy(async.Timer), [dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.void, []))]),
    getManagedPeriodicTimer: dart.fnType(dart.legacy(async.Timer), [dart.legacy(core.Duration), dart.legacy(dart.fnType(dart.void, [dart.legacy(async.Timer)]))]),
    listenToStream: dart.gFnType(T => [dart.legacy(async.StreamSubscription$(dart.legacy(T))), [dart.legacy(async.Stream$(dart.legacy(T))), dart.legacy(dart.fnType(dart.void, [dart.legacy(T)]))], {cancelOnError: dart.legacy(core.bool), onDone: dart.legacy(dart.fnType(dart.void, [])), onError: dart.legacy(core.Function)}, {}]),
    manageAndReturnDisposable: dart.fnType(dart.legacy(disposable$.Disposable), [dart.legacy(disposable$.Disposable)]),
    manageAndReturnTypedDisposable: dart.gFnType(T => [dart.legacy(T), [dart.legacy(T)]], T => [dart.legacy(disposable$.Disposable)]),
    manageCompleter: dart.gFnType(T => [dart.legacy(async.Completer$(dart.legacy(T))), [dart.legacy(async.Completer$(dart.legacy(T)))]]),
    manageDisposable: dart.fnType(dart.void, [dart.legacy(disposable$.Disposable)]),
    manageDisposer: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.legacy(async.Future), []))]),
    manageStreamController: dart.fnType(dart.void, [dart.legacy(async.StreamController)]),
    manageStreamSubscription: dart.fnType(dart.void, [dart.legacy(async.StreamSubscription)]),
    onDispose: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
    onWillDispose: dart.fnType(dart.legacy(async.Future$(core.Null)), []),
    [_addObservableTimerDisposable]: dart.fnType(dart.void, [dart.legacy(disposable$._ObservableTimer)]),
    [_logDispose]: dart.fnType(dart.void, []),
    [_logUnmanageMessage]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    [_logManageMessage]: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    [_throwOnInvalidCall]: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.String), dart.dynamic]),
    [_throwOnInvalidCall2]: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.String), dart.dynamic, dart.dynamic])
  }));
  dart.setGetterSignature(disposable$.Disposable, () => ({
    __proto__: dart.getGetters(disposable$.Disposable.__proto__),
    didDispose: dart.legacy(async.Future$(core.Null)),
    disposableTypeName: dart.legacy(core.String),
    disposalTreeSize: dart.legacy(core.int),
    isDisposed: dart.legacy(core.bool),
    isDisposedOrDisposing: dart.legacy(core.bool),
    isDisposing: dart.legacy(core.bool),
    isLeakFlagSet: dart.legacy(core.bool),
    isOrWillBeDisposed: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(disposable$.Disposable, I[1]);
  dart.setFieldSignature(disposable$.Disposable, () => ({
    __proto__: dart.getFields(disposable$.Disposable.__proto__),
    [_awaitableFutures]: dart.finalFieldType(dart.legacy(collection.HashSet$(dart.legacy(async.Future)))),
    [_didDispose]: dart.finalFieldType(dart.legacy(async.Completer$(core.Null))),
    [_leakFlag]: dart.fieldType(dart.legacy(disposable$.LeakFlag)),
    [_internalDisposables]: dart.finalFieldType(dart.legacy(collection.HashSet$(dart.legacy(disposable$._Disposable)))),
    [_state]: dart.fieldType(dart.legacy(disposable_state.DisposableState))
  }));
  dart.defineLazy(disposable$.Disposable, {
    /*disposable$.Disposable._debugMode*/get _debugMode() {
      return false;
    },
    set _debugMode(_) {},
    /*disposable$.Disposable._debugModeLogging*/get _debugModeLogging() {
      return false;
    },
    set _debugModeLogging(_) {},
    /*disposable$.Disposable._debugModeTelemetry*/get _debugModeTelemetry() {
      return false;
    },
    set _debugModeTelemetry(_) {},
    /*disposable$.Disposable._logger*/get _logger() {
      return null;
    },
    set _logger(_) {}
  }, true);
  dart.defineLazy(disposable$, {
    /*disposable$.defaultDisposableTypeName*/get defaultDisposableTypeName() {
      return "Disposable";
    }
  }, true);
  var _name$ = dart.privateName(disposable_state, "_name");
  disposable_state.DisposableState = class DisposableState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (disposable_state.DisposableState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = disposable_state.DisposableState.prototype;
  dart.addTypeTests(disposable_state.DisposableState);
  dart.addTypeCaches(disposable_state.DisposableState);
  dart.setMethodSignature(disposable_state.DisposableState, () => ({
    __proto__: dart.getMethods(disposable_state.DisposableState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(disposable_state.DisposableState, I[2]);
  dart.setFieldSignature(disposable_state.DisposableState, () => ({
    __proto__: dart.getFields(disposable_state.DisposableState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(disposable_state.DisposableState, ['toString']);
  disposable_state.DisposableState.initialized = C[0] || CT.C0;
  disposable_state.DisposableState.awaitingDisposal = C[1] || CT.C1;
  disposable_state.DisposableState.disposing = C[2] || CT.C2;
  disposable_state.DisposableState.disposed = C[3] || CT.C3;
  disposable_state.DisposableState.values = C[4] || CT.C4;
  disposable_manager.DisposableManager = class DisposableManager extends core.Object {};
  (disposable_manager.DisposableManager.new = function() {
    ;
  }).prototype = disposable_manager.DisposableManager.prototype;
  dart.addTypeTests(disposable_manager.DisposableManager);
  dart.addTypeCaches(disposable_manager.DisposableManager);
  dart.setLibraryUri(disposable_manager.DisposableManager, I[3]);
  disposable_manager.DisposableManagerV2 = class DisposableManagerV2 extends core.Object {};
  (disposable_manager.DisposableManagerV2.new = function() {
    ;
  }).prototype = disposable_manager.DisposableManagerV2.prototype;
  dart.addTypeTests(disposable_manager.DisposableManagerV2);
  dart.addTypeCaches(disposable_manager.DisposableManagerV2);
  disposable_manager.DisposableManagerV2[dart.implements] = () => [disposable_manager.DisposableManager];
  dart.setLibraryUri(disposable_manager.DisposableManagerV2, I[3]);
  disposable_manager.DisposableManagerV3 = class DisposableManagerV3 extends core.Object {};
  (disposable_manager.DisposableManagerV3.new = function() {
    ;
  }).prototype = disposable_manager.DisposableManagerV3.prototype;
  dart.addTypeTests(disposable_manager.DisposableManagerV3);
  dart.addTypeCaches(disposable_manager.DisposableManagerV3);
  disposable_manager.DisposableManagerV3[dart.implements] = () => [disposable_manager.DisposableManagerV2];
  dart.setLibraryUri(disposable_manager.DisposableManagerV3, I[3]);
  disposable_manager.DisposableManagerV4 = class DisposableManagerV4 extends core.Object {};
  (disposable_manager.DisposableManagerV4.new = function() {
    ;
  }).prototype = disposable_manager.DisposableManagerV4.prototype;
  dart.addTypeTests(disposable_manager.DisposableManagerV4);
  dart.addTypeCaches(disposable_manager.DisposableManagerV4);
  disposable_manager.DisposableManagerV4[dart.implements] = () => [disposable_manager.DisposableManagerV3];
  dart.setLibraryUri(disposable_manager.DisposableManagerV4, I[3]);
  disposable_manager.DisposableManagerV5 = class DisposableManagerV5 extends core.Object {};
  (disposable_manager.DisposableManagerV5.new = function() {
    ;
  }).prototype = disposable_manager.DisposableManagerV5.prototype;
  dart.addTypeTests(disposable_manager.DisposableManagerV5);
  dart.addTypeCaches(disposable_manager.DisposableManagerV5);
  disposable_manager.DisposableManagerV5[dart.implements] = () => [disposable_manager.DisposableManagerV4];
  dart.setLibraryUri(disposable_manager.DisposableManagerV5, I[3]);
  disposable_manager.DisposableManagerV6 = class DisposableManagerV6 extends core.Object {};
  (disposable_manager.DisposableManagerV6.new = function() {
    ;
  }).prototype = disposable_manager.DisposableManagerV6.prototype;
  dart.addTypeTests(disposable_manager.DisposableManagerV6);
  dart.addTypeCaches(disposable_manager.DisposableManagerV6);
  disposable_manager.DisposableManagerV6[dart.implements] = () => [disposable_manager.DisposableManagerV5];
  dart.setLibraryUri(disposable_manager.DisposableManagerV6, I[3]);
  disposable_manager.DisposableManagerV7 = class DisposableManagerV7 extends core.Object {};
  (disposable_manager.DisposableManagerV7.new = function() {
    ;
  }).prototype = disposable_manager.DisposableManagerV7.prototype;
  dart.addTypeTests(disposable_manager.DisposableManagerV7);
  dart.addTypeCaches(disposable_manager.DisposableManagerV7);
  disposable_manager.DisposableManagerV7[dart.implements] = () => [disposable_manager.DisposableManagerV6];
  dart.setLibraryUri(disposable_manager.DisposableManagerV7, I[3]);
  disposable_manager.LeakFlagger = class LeakFlagger extends core.Object {};
  (disposable_manager.LeakFlagger.new = function() {
    ;
  }).prototype = disposable_manager.LeakFlagger.prototype;
  dart.addTypeTests(disposable_manager.LeakFlagger);
  dart.addTypeCaches(disposable_manager.LeakFlagger);
  dart.setLibraryUri(disposable_manager.LeakFlagger, I[3]);
  disposable_manager.ObjectDisposedException = class ObjectDisposedException extends core.Object {};
  (disposable_manager.ObjectDisposedException.new = function() {
    ;
  }).prototype = disposable_manager.ObjectDisposedException.prototype;
  dart.addTypeTests(disposable_manager.ObjectDisposedException);
  dart.addTypeCaches(disposable_manager.ObjectDisposedException);
  disposable_manager.ObjectDisposedException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(disposable_manager.ObjectDisposedException, I[3]);
  dart.trackLibraries("packages/w_common/src/common/disposable", {
    "package:w_common/src/common/managed_stream_subscription.dart": managed_stream_subscription,
    "package:w_common/src/common/disposable.dart": disposable$,
    "package:w_common/src/common/disposable_state.dart": disposable_state,
    "package:w_common/src/common/disposable_manager.dart": disposable_manager
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["managed_stream_subscription.dart","disposable.dart","disposable_state.dart","disposable_manager.dart"],"names":[],"mappings":"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","file":"disposable.unsound.ddc.js"}');
  // Exports:
  return {
    src__common__managed_stream_subscription: managed_stream_subscription,
    src__common__disposable: disposable$,
    src__common__disposable_state: disposable_state,
    src__common__disposable_manager: disposable_manager
  };
}));

//# sourceMappingURL=disposable.unsound.ddc.js.map
