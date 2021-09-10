define(['dart_sdk'], (function load__packages__over_react__src__component_declaration__annotations(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var annotations = Object.create(dart.library);
  var string_util = Object.create(dart.library);
  var pretty_print = Object.create(dart.library);
  var $isNotEmpty = dartx.isNotEmpty;
  var $trim = dartx.trim;
  var $replaceAll = dartx.replaceAll;
  var $split = dartx.split;
  var $trimRight = dartx.trimRight;
  var $map = dartx.map;
  var $join = dartx.join;
  var $toList = dartx.toList;
  var $length = dartx.length;
  var $contains = dartx.contains;
  var $any = dartx.any;
  var $keys = dartx.keys;
  var $indexOf = dartx.indexOf;
  var $substring = dartx.substring;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $addAll = dartx.addAll;
  var $replaceFirst = dartx.replaceFirst;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    StringL: () => (T.StringL = dart.constFn(dart.legacy(core.String)))(),
    StringLToStringL: () => (T.StringLToStringL = dart.constFn(dart.fnType(T.StringL(), [T.StringL()])))(),
    ListL: () => (T.ListL = dart.constFn(dart.legacy(core.List)))(),
    ObjectL: () => (T.ObjectL = dart.constFn(dart.legacy(core.Object)))(),
    ObjectLToStringL: () => (T.ObjectLToStringL = dart.constFn(dart.fnType(T.StringL(), [T.ObjectL()])))(),
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    StringLToboolL: () => (T.StringLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.StringL()])))(),
    MapL: () => (T.MapL = dart.constFn(dart.legacy(core.Map)))(),
    ListOfStringL: () => (T.ListOfStringL = dart.constFn(core.List$(T.StringL())))(),
    ListLOfStringL: () => (T.ListLOfStringL = dart.constFn(dart.legacy(T.ListOfStringL())))(),
    IdentityMapOfStringL$ListLOfStringL: () => (T.IdentityMapOfStringL$ListLOfStringL = dart.constFn(_js_helper.IdentityMap$(T.StringL(), T.ListLOfStringL())))(),
    JSArrayOfStringL: () => (T.JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(T.StringL())))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    dynamicToStringL: () => (T.dynamicToStringL = dart.constFn(dart.fnType(T.StringL(), [dart.dynamic])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: annotations.Accessor.prototype,
        [doNotGenerate$]: false,
        [requiredErrorMessage$]: null,
        [isNullable$]: false,
        [isRequired$]: true,
        [keyNamespace$5]: null,
        [key$]: null
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: annotations.Accessor.prototype,
        [doNotGenerate$]: false,
        [requiredErrorMessage$]: null,
        [isNullable$]: true,
        [isRequired$]: true,
        [keyNamespace$5]: null,
        [key$]: null
      });
    },
    get C2() {
      return C[2] = dart.fn(pretty_print._prettyObj, T.ObjectLToStringL());
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:over_react/src/component_declaration/annotations.dart",
    "org-dartlang-app:///packages/over_react/src/util/string_util.dart"
  ];
  annotations.Factory = class Factory extends core.Object {};
  (annotations.Factory.new = function() {
    ;
  }).prototype = annotations.Factory.prototype;
  dart.addTypeTests(annotations.Factory);
  dart.addTypeCaches(annotations.Factory);
  dart.setLibraryUri(annotations.Factory, I[0]);
  var keyNamespace$ = dart.privateName(annotations, "Props.keyNamespace");
  annotations.Props = class Props extends core.Object {
    get keyNamespace() {
      return this[keyNamespace$];
    }
    set keyNamespace(value) {
      super.keyNamespace = value;
    }
  };
  (annotations.Props.new = function(opts) {
    let keyNamespace = opts && 'keyNamespace' in opts ? opts.keyNamespace : null;
    this[keyNamespace$] = keyNamespace;
    ;
  }).prototype = annotations.Props.prototype;
  dart.addTypeTests(annotations.Props);
  dart.addTypeCaches(annotations.Props);
  annotations.Props[dart.implements] = () => [annotations.TypedMap];
  dart.setLibraryUri(annotations.Props, I[0]);
  dart.setFieldSignature(annotations.Props, () => ({
    __proto__: dart.getFields(annotations.Props.__proto__),
    keyNamespace: dart.finalFieldType(dart.legacy(core.String))
  }));
  var keyNamespace$0 = dart.privateName(annotations, "State.keyNamespace");
  annotations.State = class State extends core.Object {
    get keyNamespace() {
      return this[keyNamespace$0];
    }
    set keyNamespace(value) {
      super.keyNamespace = value;
    }
  };
  (annotations.State.new = function(opts) {
    let keyNamespace = opts && 'keyNamespace' in opts ? opts.keyNamespace : null;
    this[keyNamespace$0] = keyNamespace;
    ;
  }).prototype = annotations.State.prototype;
  dart.addTypeTests(annotations.State);
  dart.addTypeCaches(annotations.State);
  annotations.State[dart.implements] = () => [annotations.TypedMap];
  dart.setLibraryUri(annotations.State, I[0]);
  dart.setFieldSignature(annotations.State, () => ({
    __proto__: dart.getFields(annotations.State.__proto__),
    keyNamespace: dart.finalFieldType(dart.legacy(core.String))
  }));
  var isWrapper$ = dart.privateName(annotations, "Component.isWrapper");
  var subtypeOf$ = dart.privateName(annotations, "Component.subtypeOf");
  annotations.Component = class Component extends core.Object {
    get isWrapper() {
      return this[isWrapper$];
    }
    set isWrapper(value) {
      super.isWrapper = value;
    }
    get subtypeOf() {
      return this[subtypeOf$];
    }
    set subtypeOf(value) {
      super.subtypeOf = value;
    }
  };
  (annotations.Component.new = function(opts) {
    let isWrapper = opts && 'isWrapper' in opts ? opts.isWrapper : false;
    let subtypeOf = opts && 'subtypeOf' in opts ? opts.subtypeOf : null;
    this[isWrapper$] = isWrapper;
    this[subtypeOf$] = subtypeOf;
    ;
  }).prototype = annotations.Component.prototype;
  dart.addTypeTests(annotations.Component);
  dart.addTypeCaches(annotations.Component);
  dart.setLibraryUri(annotations.Component, I[0]);
  dart.setFieldSignature(annotations.Component, () => ({
    __proto__: dart.getFields(annotations.Component.__proto__),
    isWrapper: dart.finalFieldType(dart.legacy(core.bool)),
    subtypeOf: dart.finalFieldType(dart.legacy(core.Type))
  }));
  var isWrapper$0 = dart.privateName(annotations, "Component2.isWrapper");
  var isErrorBoundary$ = dart.privateName(annotations, "Component2.isErrorBoundary");
  var subtypeOf$0 = dart.privateName(annotations, "Component2.subtypeOf");
  annotations.Component2 = class Component2 extends core.Object {
    get isWrapper() {
      return this[isWrapper$0];
    }
    set isWrapper(value) {
      super.isWrapper = value;
    }
    get isErrorBoundary() {
      return this[isErrorBoundary$];
    }
    set isErrorBoundary(value) {
      super.isErrorBoundary = value;
    }
    get subtypeOf() {
      return this[subtypeOf$0];
    }
    set subtypeOf(value) {
      super.subtypeOf = value;
    }
  };
  (annotations.Component2.new = function(opts) {
    let isWrapper = opts && 'isWrapper' in opts ? opts.isWrapper : false;
    let subtypeOf = opts && 'subtypeOf' in opts ? opts.subtypeOf : null;
    let isErrorBoundary = opts && 'isErrorBoundary' in opts ? opts.isErrorBoundary : false;
    this[isWrapper$0] = isWrapper;
    this[subtypeOf$0] = subtypeOf;
    this[isErrorBoundary$] = isErrorBoundary;
    ;
  }).prototype = annotations.Component2.prototype;
  dart.addTypeTests(annotations.Component2);
  dart.addTypeCaches(annotations.Component2);
  annotations.Component2[dart.implements] = () => [annotations.Component];
  dart.setLibraryUri(annotations.Component2, I[0]);
  dart.setFieldSignature(annotations.Component2, () => ({
    __proto__: dart.getFields(annotations.Component2.__proto__),
    isWrapper: dart.finalFieldType(dart.legacy(core.bool)),
    isErrorBoundary: dart.finalFieldType(dart.legacy(core.bool)),
    subtypeOf: dart.finalFieldType(dart.legacy(core.Type))
  }));
  var keyNamespace$1 = dart.privateName(annotations, "AbstractProps.keyNamespace");
  annotations.AbstractProps = class AbstractProps extends core.Object {
    get keyNamespace() {
      return this[keyNamespace$1];
    }
    set keyNamespace(value) {
      super.keyNamespace = value;
    }
  };
  (annotations.AbstractProps.new = function(opts) {
    let keyNamespace = opts && 'keyNamespace' in opts ? opts.keyNamespace : null;
    this[keyNamespace$1] = keyNamespace;
    ;
  }).prototype = annotations.AbstractProps.prototype;
  dart.addTypeTests(annotations.AbstractProps);
  dart.addTypeCaches(annotations.AbstractProps);
  annotations.AbstractProps[dart.implements] = () => [annotations.TypedMap];
  dart.setLibraryUri(annotations.AbstractProps, I[0]);
  dart.setFieldSignature(annotations.AbstractProps, () => ({
    __proto__: dart.getFields(annotations.AbstractProps.__proto__),
    keyNamespace: dart.finalFieldType(dart.legacy(core.String))
  }));
  var keyNamespace$2 = dart.privateName(annotations, "AbstractState.keyNamespace");
  annotations.AbstractState = class AbstractState extends core.Object {
    get keyNamespace() {
      return this[keyNamespace$2];
    }
    set keyNamespace(value) {
      super.keyNamespace = value;
    }
  };
  (annotations.AbstractState.new = function(opts) {
    let keyNamespace = opts && 'keyNamespace' in opts ? opts.keyNamespace : null;
    this[keyNamespace$2] = keyNamespace;
    ;
  }).prototype = annotations.AbstractState.prototype;
  dart.addTypeTests(annotations.AbstractState);
  dart.addTypeCaches(annotations.AbstractState);
  annotations.AbstractState[dart.implements] = () => [annotations.TypedMap];
  dart.setLibraryUri(annotations.AbstractState, I[0]);
  dart.setFieldSignature(annotations.AbstractState, () => ({
    __proto__: dart.getFields(annotations.AbstractState.__proto__),
    keyNamespace: dart.finalFieldType(dart.legacy(core.String))
  }));
  annotations.AbstractComponent = class AbstractComponent extends core.Object {};
  (annotations.AbstractComponent.new = function() {
    ;
  }).prototype = annotations.AbstractComponent.prototype;
  dart.addTypeTests(annotations.AbstractComponent);
  dart.addTypeCaches(annotations.AbstractComponent);
  dart.setLibraryUri(annotations.AbstractComponent, I[0]);
  annotations.AbstractComponent2 = class AbstractComponent2 extends core.Object {};
  (annotations.AbstractComponent2.new = function() {
    ;
  }).prototype = annotations.AbstractComponent2.prototype;
  dart.addTypeTests(annotations.AbstractComponent2);
  dart.addTypeCaches(annotations.AbstractComponent2);
  annotations.AbstractComponent2[dart.implements] = () => [annotations.AbstractComponent];
  dart.setLibraryUri(annotations.AbstractComponent2, I[0]);
  var keyNamespace$3 = dart.privateName(annotations, "PropsMixin.keyNamespace");
  annotations.PropsMixin = class PropsMixin extends core.Object {
    get keyNamespace() {
      return this[keyNamespace$3];
    }
    set keyNamespace(value) {
      super.keyNamespace = value;
    }
  };
  (annotations.PropsMixin.new = function(opts) {
    let keyNamespace = opts && 'keyNamespace' in opts ? opts.keyNamespace : null;
    this[keyNamespace$3] = keyNamespace;
    ;
  }).prototype = annotations.PropsMixin.prototype;
  dart.addTypeTests(annotations.PropsMixin);
  dart.addTypeCaches(annotations.PropsMixin);
  annotations.PropsMixin[dart.implements] = () => [annotations.TypedMap];
  dart.setLibraryUri(annotations.PropsMixin, I[0]);
  dart.setFieldSignature(annotations.PropsMixin, () => ({
    __proto__: dart.getFields(annotations.PropsMixin.__proto__),
    keyNamespace: dart.finalFieldType(dart.legacy(core.String))
  }));
  var keyNamespace$4 = dart.privateName(annotations, "StateMixin.keyNamespace");
  annotations.StateMixin = class StateMixin extends core.Object {
    get keyNamespace() {
      return this[keyNamespace$4];
    }
    set keyNamespace(value) {
      super.keyNamespace = value;
    }
  };
  (annotations.StateMixin.new = function(opts) {
    let keyNamespace = opts && 'keyNamespace' in opts ? opts.keyNamespace : null;
    this[keyNamespace$4] = keyNamespace;
    ;
  }).prototype = annotations.StateMixin.prototype;
  dart.addTypeTests(annotations.StateMixin);
  dart.addTypeCaches(annotations.StateMixin);
  annotations.StateMixin[dart.implements] = () => [annotations.TypedMap];
  dart.setLibraryUri(annotations.StateMixin, I[0]);
  dart.setFieldSignature(annotations.StateMixin, () => ({
    __proto__: dart.getFields(annotations.StateMixin.__proto__),
    keyNamespace: dart.finalFieldType(dart.legacy(core.String))
  }));
  var key$ = dart.privateName(annotations, "Accessor.key");
  var keyNamespace$5 = dart.privateName(annotations, "Accessor.keyNamespace");
  var isRequired$ = dart.privateName(annotations, "Accessor.isRequired");
  var isNullable$ = dart.privateName(annotations, "Accessor.isNullable");
  var requiredErrorMessage$ = dart.privateName(annotations, "Accessor.requiredErrorMessage");
  var doNotGenerate$ = dart.privateName(annotations, "Accessor.doNotGenerate");
  annotations.Accessor = class Accessor extends core.Object {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get keyNamespace() {
      return this[keyNamespace$5];
    }
    set keyNamespace(value) {
      super.keyNamespace = value;
    }
    get isRequired() {
      return this[isRequired$];
    }
    set isRequired(value) {
      super.isRequired = value;
    }
    get isNullable() {
      return this[isNullable$];
    }
    set isNullable(value) {
      super.isNullable = value;
    }
    get requiredErrorMessage() {
      return this[requiredErrorMessage$];
    }
    set requiredErrorMessage(value) {
      super.requiredErrorMessage = value;
    }
    get doNotGenerate() {
      return this[doNotGenerate$];
    }
    set doNotGenerate(value) {
      super.doNotGenerate = value;
    }
  };
  (annotations.Accessor.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let keyNamespace = opts && 'keyNamespace' in opts ? opts.keyNamespace : null;
    let isRequired = opts && 'isRequired' in opts ? opts.isRequired : false;
    let isNullable = opts && 'isNullable' in opts ? opts.isNullable : false;
    let requiredErrorMessage = opts && 'requiredErrorMessage' in opts ? opts.requiredErrorMessage : null;
    let doNotGenerate = opts && 'doNotGenerate' in opts ? opts.doNotGenerate : false;
    this[key$] = key;
    this[keyNamespace$5] = keyNamespace;
    this[isRequired$] = isRequired;
    this[isNullable$] = isNullable;
    this[requiredErrorMessage$] = requiredErrorMessage;
    this[doNotGenerate$] = doNotGenerate;
    ;
  }).prototype = annotations.Accessor.prototype;
  dart.addTypeTests(annotations.Accessor);
  dart.addTypeCaches(annotations.Accessor);
  dart.setLibraryUri(annotations.Accessor, I[0]);
  dart.setFieldSignature(annotations.Accessor, () => ({
    __proto__: dart.getFields(annotations.Accessor.__proto__),
    key: dart.finalFieldType(dart.legacy(core.String)),
    keyNamespace: dart.finalFieldType(dart.legacy(core.String)),
    isRequired: dart.finalFieldType(dart.legacy(core.bool)),
    isNullable: dart.finalFieldType(dart.legacy(core.bool)),
    requiredErrorMessage: dart.finalFieldType(dart.legacy(core.String)),
    doNotGenerate: dart.finalFieldType(dart.legacy(core.bool))
  }));
  annotations.TypedMap = class TypedMap extends core.Object {};
  (annotations.TypedMap.new = function() {
    ;
  }).prototype = annotations.TypedMap.prototype;
  dart.addTypeTests(annotations.TypedMap);
  dart.addTypeCaches(annotations.TypedMap);
  dart.setLibraryUri(annotations.TypedMap, I[0]);
  dart.defineLazy(annotations, {
    /*annotations.requiredProp*/get requiredProp() {
      return C[0] || CT.C0;
    },
    /*annotations.nullableRequiredProp*/get nullableRequiredProp() {
      return C[1] || CT.C1;
    }
  }, true);
  string_util.unindent = function unindent(multilineString) {
    let indent = core.RegExp.new("^( *)").firstMatch(multilineString)._get(1);
    if (!(indent != null && indent[$isNotEmpty])) dart.assertFailed(null, I[1], 42, 10, "indent != null && indent.isNotEmpty");
    return multilineString[$trim]()[$replaceAll]("\n" + dart.str(indent), "\n");
  };
  pretty_print.prettyPrintMap = function prettyPrintMap(map) {
    return pretty_print._prettyObj(map);
  };
  pretty_print._indentString = function _indentString(str) {
    return str[$split]("\n")[$map](T.StringL(), dart.fn(line => ("  " + dart.notNull(line))[$trimRight](), T.StringLToStringL()))[$join]("\n");
  };
  pretty_print._prettyObj = function _prettyObj(obj) {
    if (T.ListL().is(obj)) {
      let items = obj[$map](T.StringL(), C[2] || CT.C2)[$toList]();
      if (dart.notNull(items[$length]) > 4 || dart.test(items[$any](dart.fn(items => items[$contains]("\n"), T.StringLToboolL())))) {
        let inner = pretty_print._indentString(items[$join](",\n"));
        return "[\n" + dart.str(inner) + "\n]";
      } else {
        let inner = items[$join](", ");
        return "[" + dart.str(inner) + "]";
      }
    } else if (T.MapL().is(obj)) {
      let namespacedKeys = new (T.IdentityMapOfStringL$ListLOfStringL()).new();
      let otherKeys = [];
      obj[$keys][$forEach](dart.fn(key => {
        let t0;
        if (T.StringL().is(key) && key[$contains](".")) {
          let index = key[$indexOf](".");
          let namespace = key[$substring](0, index);
          let subkey = key[$substring](index);
          t0 = namespace;
          namespacedKeys[$_get](t0) == null ? namespacedKeys[$_set](t0, T.JSArrayOfStringL().of([])) : null;
          namespacedKeys[$_get](namespace)[$add](subkey);
        } else {
          otherKeys[$add](key);
        }
      }, T.dynamicToNull()));
      let pairs = T.JSArrayOfStringL().of([]);
      pairs[$addAll](namespacedKeys[$keys][$map](T.StringL(), dart.fn(namespace => {
        function renderSubKey(subkey) {
          let key = dart.str(namespace) + dart.str(subkey);
          let value = obj[$_get](key);
          return dart.str(subkey) + ": " + dart.notNull(pretty_print._prettyObj(value));
        }
        dart.fn(renderSubKey, T.StringLToStringL());
        let subkeys = namespacedKeys[$_get](namespace);
        return dart.str(namespace) + "…\n" + dart.notNull(pretty_print._indentString(subkeys[$map](T.StringL(), renderSubKey)[$map](T.StringL(), dart.fn(pair => dart.notNull(pair) + ",\n", T.StringLToStringL()))[$join]()));
      }, T.StringLToStringL())));
      pairs[$addAll](otherKeys[$map](T.StringL(), dart.fn(key => dart.str(key) + ": " + dart.notNull(pretty_print._prettyObj(obj[$_get](key))) + ",", T.dynamicToStringL())));
      let trailingComma = core.RegExp.new("\\s*,\\s*$");
      if (dart.notNull(pairs[$length]) > 1 || dart.test(pairs[$any](dart.fn(pair => pair[$contains]("\n"), T.StringLToboolL())))) {
        let inner = pretty_print._indentString(pairs[$join]("\n"))[$replaceFirst](trailingComma, "");
        return "{\n" + inner + "\n}";
      } else {
        let inner = pairs[$join](" ")[$replaceFirst](trailingComma, "");
        return "{" + inner + "}";
      }
    } else {
      return dart.toString(obj);
    }
  };
  dart.defineLazy(pretty_print, {
    /*pretty_print._indent*/get _indent() {
      return "  ";
    },
    /*pretty_print._maxKeyValuePairsPerLine*/get _maxKeyValuePairsPerLine() {
      return 1;
    },
    /*pretty_print._maxListItemsPerLine*/get _maxListItemsPerLine() {
      return 4;
    }
  }, true);
  dart.trackLibraries("packages/over_react/src/component_declaration/annotations", {
    "package:over_react/src/component_declaration/annotations.dart": annotations,
    "package:over_react/src/util/string_util.dart": string_util,
    "package:over_react/src/util/pretty_print.dart": pretty_print
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["annotations.dart","../util/string_util.dart","../util/pretty_print.dart"],"names":[],"mappings":"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","file":"annotations.unsound.ddc.js"}');
  // Exports:
  return {
    src__component_declaration__annotations: annotations,
    src__util__string_util: string_util,
    src__util__pretty_print: pretty_print
  };
}));

//# sourceMappingURL=annotations.unsound.ddc.js.map
