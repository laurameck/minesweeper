define(['dart_sdk'], (function load__packages__built_value__built_value(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var built_value = Object.create(dart.library);
  var $times = dartx['*'];
  var $toString = dartx.toString;
  var $rightShift = dartx['>>'];
  dart._checkModuleNullSafetyMode(false);
  var T = {
    StringToIndentingBuiltValueToStringHelper: () => (T.StringToIndentingBuiltValueToStringHelper = dart.constFn(dart.fnType(built_value.IndentingBuiltValueToStringHelper, [core.String])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  var I = [
    "package:built_value/built_value.dart",
    "org-dartlang-app:///packages/built_value/built_value.dart"
  ];
  const _is_Built_default = Symbol('_is_Built_default');
  built_value.Built$ = dart.generic((V, B) => {
    class Built extends core.Object {}
    (Built.new = function() {
      ;
    }).prototype = Built.prototype;
    dart.addTypeTests(Built);
    Built.prototype[_is_Built_default] = true;
    dart.addTypeCaches(Built);
    dart.setLibraryUri(Built, I[0]);
    return Built;
  });
  built_value.Built = built_value.Built$();
  dart.addTypeTests(built_value.Built, _is_Built_default);
  const _is_Builder_default = Symbol('_is_Builder_default');
  built_value.Builder$ = dart.generic((V, B) => {
    class Builder extends core.Object {}
    (Builder.new = function() {
      ;
    }).prototype = Builder.prototype;
    dart.addTypeTests(Builder);
    Builder.prototype[_is_Builder_default] = true;
    dart.addTypeCaches(Builder);
    dart.setLibraryUri(Builder, I[0]);
    return Builder;
  });
  built_value.Builder = built_value.Builder$();
  dart.addTypeTests(built_value.Builder, _is_Builder_default);
  var instantiable$ = dart.privateName(built_value, "BuiltValue.instantiable");
  var nestedBuilders$ = dart.privateName(built_value, "BuiltValue.nestedBuilders");
  var autoCreateNestedBuilders$ = dart.privateName(built_value, "BuiltValue.autoCreateNestedBuilders");
  var comparableBuilders$ = dart.privateName(built_value, "BuiltValue.comparableBuilders");
  var generateBuilderOnSetField$ = dart.privateName(built_value, "BuiltValue.generateBuilderOnSetField");
  var wireName$ = dart.privateName(built_value, "BuiltValue.wireName");
  var defaultCompare$ = dart.privateName(built_value, "BuiltValue.defaultCompare");
  var defaultSerialize$ = dart.privateName(built_value, "BuiltValue.defaultSerialize");
  built_value.BuiltValue = class BuiltValue extends core.Object {
    get instantiable() {
      return this[instantiable$];
    }
    set instantiable(value) {
      super.instantiable = value;
    }
    get nestedBuilders() {
      return this[nestedBuilders$];
    }
    set nestedBuilders(value) {
      super.nestedBuilders = value;
    }
    get autoCreateNestedBuilders() {
      return this[autoCreateNestedBuilders$];
    }
    set autoCreateNestedBuilders(value) {
      super.autoCreateNestedBuilders = value;
    }
    get comparableBuilders() {
      return this[comparableBuilders$];
    }
    set comparableBuilders(value) {
      super.comparableBuilders = value;
    }
    get generateBuilderOnSetField() {
      return this[generateBuilderOnSetField$];
    }
    set generateBuilderOnSetField(value) {
      super.generateBuilderOnSetField = value;
    }
    get wireName() {
      return this[wireName$];
    }
    set wireName(value) {
      super.wireName = value;
    }
    get defaultCompare() {
      return this[defaultCompare$];
    }
    set defaultCompare(value) {
      super.defaultCompare = value;
    }
    get defaultSerialize() {
      return this[defaultSerialize$];
    }
    set defaultSerialize(value) {
      super.defaultSerialize = value;
    }
  };
  (built_value.BuiltValue.new = function(opts) {
    let instantiable = opts && 'instantiable' in opts ? opts.instantiable : true;
    if (instantiable == null) dart.nullFailed(I[1], 121, 13, "instantiable");
    let nestedBuilders = opts && 'nestedBuilders' in opts ? opts.nestedBuilders : true;
    if (nestedBuilders == null) dart.nullFailed(I[1], 122, 12, "nestedBuilders");
    let autoCreateNestedBuilders = opts && 'autoCreateNestedBuilders' in opts ? opts.autoCreateNestedBuilders : true;
    if (autoCreateNestedBuilders == null) dart.nullFailed(I[1], 123, 12, "autoCreateNestedBuilders");
    let comparableBuilders = opts && 'comparableBuilders' in opts ? opts.comparableBuilders : false;
    if (comparableBuilders == null) dart.nullFailed(I[1], 124, 12, "comparableBuilders");
    let generateBuilderOnSetField = opts && 'generateBuilderOnSetField' in opts ? opts.generateBuilderOnSetField : false;
    if (generateBuilderOnSetField == null) dart.nullFailed(I[1], 125, 12, "generateBuilderOnSetField");
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    let defaultCompare = opts && 'defaultCompare' in opts ? opts.defaultCompare : true;
    if (defaultCompare == null) dart.nullFailed(I[1], 127, 12, "defaultCompare");
    let defaultSerialize = opts && 'defaultSerialize' in opts ? opts.defaultSerialize : true;
    if (defaultSerialize == null) dart.nullFailed(I[1], 128, 12, "defaultSerialize");
    this[instantiable$] = instantiable;
    this[nestedBuilders$] = nestedBuilders;
    this[autoCreateNestedBuilders$] = autoCreateNestedBuilders;
    this[comparableBuilders$] = comparableBuilders;
    this[generateBuilderOnSetField$] = generateBuilderOnSetField;
    this[wireName$] = wireName;
    this[defaultCompare$] = defaultCompare;
    this[defaultSerialize$] = defaultSerialize;
    ;
  }).prototype = built_value.BuiltValue.prototype;
  dart.addTypeTests(built_value.BuiltValue);
  dart.addTypeCaches(built_value.BuiltValue);
  dart.setLibraryUri(built_value.BuiltValue, I[0]);
  dart.setFieldSignature(built_value.BuiltValue, () => ({
    __proto__: dart.getFields(built_value.BuiltValue.__proto__),
    instantiable: dart.finalFieldType(core.bool),
    nestedBuilders: dart.finalFieldType(core.bool),
    autoCreateNestedBuilders: dart.finalFieldType(core.bool),
    comparableBuilders: dart.finalFieldType(core.bool),
    generateBuilderOnSetField: dart.finalFieldType(core.bool),
    wireName: dart.finalFieldType(dart.nullable(core.String)),
    defaultCompare: dart.finalFieldType(core.bool),
    defaultSerialize: dart.finalFieldType(core.bool)
  }));
  var compare$ = dart.privateName(built_value, "BuiltValueField.compare");
  var serialize$ = dart.privateName(built_value, "BuiltValueField.serialize");
  var wireName$0 = dart.privateName(built_value, "BuiltValueField.wireName");
  var nestedBuilder$ = dart.privateName(built_value, "BuiltValueField.nestedBuilder");
  var autoCreateNestedBuilder$ = dart.privateName(built_value, "BuiltValueField.autoCreateNestedBuilder");
  built_value.BuiltValueField = class BuiltValueField extends core.Object {
    get compare() {
      return this[compare$];
    }
    set compare(value) {
      super.compare = value;
    }
    get serialize() {
      return this[serialize$];
    }
    set serialize(value) {
      super.serialize = value;
    }
    get wireName() {
      return this[wireName$0];
    }
    set wireName(value) {
      super.wireName = value;
    }
    get nestedBuilder() {
      return this[nestedBuilder$];
    }
    set nestedBuilder(value) {
      super.nestedBuilder = value;
    }
    get autoCreateNestedBuilder() {
      return this[autoCreateNestedBuilder$];
    }
    set autoCreateNestedBuilder(value) {
      super.autoCreateNestedBuilder = value;
    }
  };
  (built_value.BuiltValueField.new = function(opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let serialize = opts && 'serialize' in opts ? opts.serialize : null;
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    let nestedBuilder = opts && 'nestedBuilder' in opts ? opts.nestedBuilder : null;
    let autoCreateNestedBuilder = opts && 'autoCreateNestedBuilder' in opts ? opts.autoCreateNestedBuilder : null;
    this[compare$] = compare;
    this[serialize$] = serialize;
    this[wireName$0] = wireName;
    this[nestedBuilder$] = nestedBuilder;
    this[autoCreateNestedBuilder$] = autoCreateNestedBuilder;
    ;
  }).prototype = built_value.BuiltValueField.prototype;
  dart.addTypeTests(built_value.BuiltValueField);
  dart.addTypeCaches(built_value.BuiltValueField);
  dart.setLibraryUri(built_value.BuiltValueField, I[0]);
  dart.setFieldSignature(built_value.BuiltValueField, () => ({
    __proto__: dart.getFields(built_value.BuiltValueField.__proto__),
    compare: dart.finalFieldType(dart.nullable(core.bool)),
    serialize: dart.finalFieldType(dart.nullable(core.bool)),
    wireName: dart.finalFieldType(dart.nullable(core.String)),
    nestedBuilder: dart.finalFieldType(dart.nullable(core.bool)),
    autoCreateNestedBuilder: dart.finalFieldType(dart.nullable(core.bool))
  }));
  var custom$ = dart.privateName(built_value, "BuiltValueSerializer.custom");
  var serializeNulls$ = dart.privateName(built_value, "BuiltValueSerializer.serializeNulls");
  built_value.BuiltValueSerializer = class BuiltValueSerializer extends core.Object {
    get custom() {
      return this[custom$];
    }
    set custom(value) {
      super.custom = value;
    }
    get serializeNulls() {
      return this[serializeNulls$];
    }
    set serializeNulls(value) {
      super.serializeNulls = value;
    }
  };
  (built_value.BuiltValueSerializer.new = function(opts) {
    let custom = opts && 'custom' in opts ? opts.custom : false;
    if (custom == null) dart.nullFailed(I[1], 190, 13, "custom");
    let serializeNulls = opts && 'serializeNulls' in opts ? opts.serializeNulls : false;
    if (serializeNulls == null) dart.nullFailed(I[1], 190, 34, "serializeNulls");
    this[custom$] = custom;
    this[serializeNulls$] = serializeNulls;
    ;
  }).prototype = built_value.BuiltValueSerializer.prototype;
  dart.addTypeTests(built_value.BuiltValueSerializer);
  dart.addTypeCaches(built_value.BuiltValueSerializer);
  dart.setLibraryUri(built_value.BuiltValueSerializer, I[0]);
  dart.setFieldSignature(built_value.BuiltValueSerializer, () => ({
    __proto__: dart.getFields(built_value.BuiltValueSerializer.__proto__),
    custom: dart.finalFieldType(core.bool),
    serializeNulls: dart.finalFieldType(core.bool)
  }));
  var wireName$1 = dart.privateName(built_value, "BuiltValueEnum.wireName");
  built_value.BuiltValueEnum = class BuiltValueEnum extends core.Object {
    get wireName() {
      return this[wireName$1];
    }
    set wireName(value) {
      super.wireName = value;
    }
  };
  (built_value.BuiltValueEnum.new = function(opts) {
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    this[wireName$1] = wireName;
    ;
  }).prototype = built_value.BuiltValueEnum.prototype;
  dart.addTypeTests(built_value.BuiltValueEnum);
  dart.addTypeCaches(built_value.BuiltValueEnum);
  dart.setLibraryUri(built_value.BuiltValueEnum, I[0]);
  dart.setFieldSignature(built_value.BuiltValueEnum, () => ({
    __proto__: dart.getFields(built_value.BuiltValueEnum.__proto__),
    wireName: dart.finalFieldType(dart.nullable(core.String))
  }));
  var wireName$2 = dart.privateName(built_value, "BuiltValueEnumConst.wireName");
  var wireNumber$ = dart.privateName(built_value, "BuiltValueEnumConst.wireNumber");
  var fallback$ = dart.privateName(built_value, "BuiltValueEnumConst.fallback");
  built_value.BuiltValueEnumConst = class BuiltValueEnumConst extends core.Object {
    get wireName() {
      return this[wireName$2];
    }
    set wireName(value) {
      super.wireName = value;
    }
    get wireNumber() {
      return this[wireNumber$];
    }
    set wireNumber(value) {
      super.wireNumber = value;
    }
    get fallback() {
      return this[fallback$];
    }
    set fallback(value) {
      super.fallback = value;
    }
  };
  (built_value.BuiltValueEnumConst.new = function(opts) {
    let wireName = opts && 'wireName' in opts ? opts.wireName : null;
    let wireNumber = opts && 'wireNumber' in opts ? opts.wireNumber : null;
    let fallback = opts && 'fallback' in opts ? opts.fallback : false;
    if (fallback == null) dart.nullFailed(I[1], 238, 45, "fallback");
    this[wireName$2] = wireName;
    this[wireNumber$] = wireNumber;
    this[fallback$] = fallback;
    ;
  }).prototype = built_value.BuiltValueEnumConst.prototype;
  dart.addTypeTests(built_value.BuiltValueEnumConst);
  dart.addTypeCaches(built_value.BuiltValueEnumConst);
  dart.setLibraryUri(built_value.BuiltValueEnumConst, I[0]);
  dart.setFieldSignature(built_value.BuiltValueEnumConst, () => ({
    __proto__: dart.getFields(built_value.BuiltValueEnumConst.__proto__),
    wireName: dart.finalFieldType(dart.nullable(core.String)),
    wireNumber: dart.finalFieldType(dart.nullable(core.int)),
    fallback: dart.finalFieldType(core.bool)
  }));
  var initializeBuilder$ = dart.privateName(built_value, "BuiltValueHook.initializeBuilder");
  var finalizeBuilder$ = dart.privateName(built_value, "BuiltValueHook.finalizeBuilder");
  built_value.BuiltValueHook = class BuiltValueHook extends core.Object {
    get initializeBuilder() {
      return this[initializeBuilder$];
    }
    set initializeBuilder(value) {
      super.initializeBuilder = value;
    }
    get finalizeBuilder() {
      return this[finalizeBuilder$];
    }
    set finalizeBuilder(value) {
      super.finalizeBuilder = value;
    }
  };
  (built_value.BuiltValueHook.new = function(opts) {
    let initializeBuilder = opts && 'initializeBuilder' in opts ? opts.initializeBuilder : false;
    if (initializeBuilder == null) dart.nullFailed(I[1], 278, 13, "initializeBuilder");
    let finalizeBuilder = opts && 'finalizeBuilder' in opts ? opts.finalizeBuilder : false;
    if (finalizeBuilder == null) dart.nullFailed(I[1], 278, 45, "finalizeBuilder");
    this[initializeBuilder$] = initializeBuilder;
    this[finalizeBuilder$] = finalizeBuilder;
    ;
  }).prototype = built_value.BuiltValueHook.prototype;
  dart.addTypeTests(built_value.BuiltValueHook);
  dart.addTypeCaches(built_value.BuiltValueHook);
  dart.setLibraryUri(built_value.BuiltValueHook, I[0]);
  dart.setFieldSignature(built_value.BuiltValueHook, () => ({
    __proto__: dart.getFields(built_value.BuiltValueHook.__proto__),
    initializeBuilder: dart.finalFieldType(core.bool),
    finalizeBuilder: dart.finalFieldType(core.bool)
  }));
  var name$ = dart.privateName(built_value, "EnumClass.name");
  built_value.EnumClass = class EnumClass extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (built_value.EnumClass.new = function(name) {
    if (name == null) dart.nullFailed(I[1], 290, 24, "name");
    this[name$] = name;
    ;
  }).prototype = built_value.EnumClass.prototype;
  dart.addTypeTests(built_value.EnumClass);
  dart.addTypeCaches(built_value.EnumClass);
  dart.setLibraryUri(built_value.EnumClass, I[0]);
  dart.setFieldSignature(built_value.EnumClass, () => ({
    __proto__: dart.getFields(built_value.EnumClass.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.EnumClass, ['toString']);
  built_value.BuiltValueToStringHelper = class BuiltValueToStringHelper extends core.Object {};
  (built_value.BuiltValueToStringHelper.new = function() {
    ;
  }).prototype = built_value.BuiltValueToStringHelper.prototype;
  dart.addTypeTests(built_value.BuiltValueToStringHelper);
  dart.addTypeCaches(built_value.BuiltValueToStringHelper);
  dart.setLibraryUri(built_value.BuiltValueToStringHelper, I[0]);
  var _result = dart.privateName(built_value, "_result");
  built_value.IndentingBuiltValueToStringHelper = class IndentingBuiltValueToStringHelper extends core.Object {
    add(field, value) {
      let t0;
      if (field == null) dart.nullFailed(I[1], 349, 19, "field");
      if (value != null) {
        t0 = dart.nullCheck(this[_result]);
        (() => {
          t0.write(" "[$times](built_value._indentingBuiltValueToStringHelperIndent));
          t0.write(field);
          t0.write("=");
          t0.write(value);
          t0.write(",\n");
          return t0;
        })();
      }
    }
    toString() {
      let t0;
      built_value._indentingBuiltValueToStringHelperIndent = dart.notNull(built_value._indentingBuiltValueToStringHelperIndent) - 2;
      t0 = dart.nullCheck(this[_result]);
      (() => {
        t0.write(" "[$times](built_value._indentingBuiltValueToStringHelperIndent));
        t0.write("}");
        return t0;
      })();
      let stringResult = dart.toString(this[_result]);
      this[_result] = null;
      return stringResult;
    }
  };
  (built_value.IndentingBuiltValueToStringHelper.new = function(className) {
    let t0;
    if (className == null) dart.nullFailed(I[1], 341, 44, "className");
    this[_result] = new core.StringBuffer.new();
    t0 = dart.nullCheck(this[_result]);
    (() => {
      t0.write(className);
      t0.write(" {\n");
      return t0;
    })();
    built_value._indentingBuiltValueToStringHelperIndent = dart.notNull(built_value._indentingBuiltValueToStringHelperIndent) + 2;
  }).prototype = built_value.IndentingBuiltValueToStringHelper.prototype;
  dart.addTypeTests(built_value.IndentingBuiltValueToStringHelper);
  dart.addTypeCaches(built_value.IndentingBuiltValueToStringHelper);
  built_value.IndentingBuiltValueToStringHelper[dart.implements] = () => [built_value.BuiltValueToStringHelper];
  dart.setMethodSignature(built_value.IndentingBuiltValueToStringHelper, () => ({
    __proto__: dart.getMethods(built_value.IndentingBuiltValueToStringHelper.__proto__),
    add: dart.fnType(dart.void, [core.String, dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(built_value.IndentingBuiltValueToStringHelper, I[0]);
  dart.setFieldSignature(built_value.IndentingBuiltValueToStringHelper, () => ({
    __proto__: dart.getFields(built_value.IndentingBuiltValueToStringHelper.__proto__),
    [_result]: dart.fieldType(dart.nullable(core.StringBuffer))
  }));
  dart.defineExtensionMethods(built_value.IndentingBuiltValueToStringHelper, ['toString']);
  var _previousField = dart.privateName(built_value, "_previousField");
  built_value.FlatBuiltValueToStringHelper = class FlatBuiltValueToStringHelper extends core.Object {
    add(field, value) {
      let t0;
      if (field == null) dart.nullFailed(I[1], 386, 19, "field");
      if (value != null) {
        if (dart.test(this[_previousField])) dart.nullCheck(this[_result]).write(",");
        t0 = dart.nullCheck(this[_result]);
        (() => {
          t0.write(field);
          t0.write("=");
          t0.write(value);
          return t0;
        })();
        this[_previousField] = true;
      }
    }
    toString() {
      dart.nullCheck(this[_result]).write("}");
      let stringResult = dart.toString(this[_result]);
      this[_result] = null;
      return stringResult;
    }
  };
  (built_value.FlatBuiltValueToStringHelper.new = function(className) {
    let t0;
    if (className == null) dart.nullFailed(I[1], 379, 39, "className");
    this[_result] = new core.StringBuffer.new();
    this[_previousField] = false;
    t0 = dart.nullCheck(this[_result]);
    (() => {
      t0.write(className);
      t0.write(" {");
      return t0;
    })();
  }).prototype = built_value.FlatBuiltValueToStringHelper.prototype;
  dart.addTypeTests(built_value.FlatBuiltValueToStringHelper);
  dart.addTypeCaches(built_value.FlatBuiltValueToStringHelper);
  built_value.FlatBuiltValueToStringHelper[dart.implements] = () => [built_value.BuiltValueToStringHelper];
  dart.setMethodSignature(built_value.FlatBuiltValueToStringHelper, () => ({
    __proto__: dart.getMethods(built_value.FlatBuiltValueToStringHelper.__proto__),
    add: dart.fnType(dart.void, [core.String, dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(built_value.FlatBuiltValueToStringHelper, I[0]);
  dart.setFieldSignature(built_value.FlatBuiltValueToStringHelper, () => ({
    __proto__: dart.getFields(built_value.FlatBuiltValueToStringHelper.__proto__),
    [_result]: dart.fieldType(dart.nullable(core.StringBuffer)),
    [_previousField]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(built_value.FlatBuiltValueToStringHelper, ['toString']);
  var type$ = dart.privateName(built_value, "BuiltValueNullFieldError.type");
  var field$ = dart.privateName(built_value, "BuiltValueNullFieldError.field");
  built_value.BuiltValueNullFieldError = class BuiltValueNullFieldError extends core.Error {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    static checkNotNull(T, value, type, field) {
      if (type == null) dart.nullFailed(I[1], 415, 45, "type");
      if (field == null) dart.nullFailed(I[1], 415, 58, "field");
      if (value == null) {
        dart.throw(new built_value.BuiltValueNullFieldError.new(type, field));
      }
      return value;
    }
    toString() {
      return "Tried to construct class \"" + dart.str(this.type) + "\" with null field \"" + dart.str(this.field) + "\". " + "This is forbidden; to allow it, mark \"" + dart.str(this.field) + "\" with @nullable.";
    }
  };
  (built_value.BuiltValueNullFieldError.new = function(type, field) {
    if (type == null) dart.nullFailed(I[1], 412, 33, "type");
    if (field == null) dart.nullFailed(I[1], 412, 44, "field");
    this[type$] = type;
    this[field$] = field;
    built_value.BuiltValueNullFieldError.__proto__.new.call(this);
    ;
  }).prototype = built_value.BuiltValueNullFieldError.prototype;
  dart.addTypeTests(built_value.BuiltValueNullFieldError);
  dart.addTypeCaches(built_value.BuiltValueNullFieldError);
  dart.setLibraryUri(built_value.BuiltValueNullFieldError, I[0]);
  dart.setFieldSignature(built_value.BuiltValueNullFieldError, () => ({
    __proto__: dart.getFields(built_value.BuiltValueNullFieldError.__proto__),
    type: dart.finalFieldType(core.String),
    field: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.BuiltValueNullFieldError, ['toString']);
  var type$0 = dart.privateName(built_value, "BuiltValueMissingGenericsError.type");
  var parameter$ = dart.privateName(built_value, "BuiltValueMissingGenericsError.parameter");
  built_value.BuiltValueMissingGenericsError = class BuiltValueMissingGenericsError extends core.Error {
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get parameter() {
      return this[parameter$];
    }
    set parameter(value) {
      super.parameter = value;
    }
    toString() {
      return "Tried to construct class \"" + dart.str(this.type) + "\" with missing or dynamic " + "type argument \"" + dart.str(this.parameter) + "\". All type arguments must be specified.";
    }
  };
  (built_value.BuiltValueMissingGenericsError.new = function(type, parameter) {
    if (type == null) dart.nullFailed(I[1], 434, 39, "type");
    if (parameter == null) dart.nullFailed(I[1], 434, 50, "parameter");
    this[type$0] = type;
    this[parameter$] = parameter;
    built_value.BuiltValueMissingGenericsError.__proto__.new.call(this);
    ;
  }).prototype = built_value.BuiltValueMissingGenericsError.prototype;
  dart.addTypeTests(built_value.BuiltValueMissingGenericsError);
  dart.addTypeCaches(built_value.BuiltValueMissingGenericsError);
  dart.setLibraryUri(built_value.BuiltValueMissingGenericsError, I[0]);
  dart.setFieldSignature(built_value.BuiltValueMissingGenericsError, () => ({
    __proto__: dart.getFields(built_value.BuiltValueMissingGenericsError.__proto__),
    type: dart.finalFieldType(core.String),
    parameter: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.BuiltValueMissingGenericsError, ['toString']);
  var type$1 = dart.privateName(built_value, "BuiltValueNestedFieldError.type");
  var field$0 = dart.privateName(built_value, "BuiltValueNestedFieldError.field");
  var error$ = dart.privateName(built_value, "BuiltValueNestedFieldError.error");
  built_value.BuiltValueNestedFieldError = class BuiltValueNestedFieldError extends core.Error {
    get type() {
      return this[type$1];
    }
    set type(value) {
      super.type = value;
    }
    get field() {
      return this[field$0];
    }
    set field(value) {
      super.field = value;
    }
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    toString() {
      return "Tried to build class \"" + dart.str(this.type) + "\" but nested builder for field \"" + dart.str(this.field) + "\" " + "threw: " + dart.str(this.error);
    }
  };
  (built_value.BuiltValueNestedFieldError.new = function(type, field, error) {
    if (type == null) dart.nullFailed(I[1], 449, 35, "type");
    if (field == null) dart.nullFailed(I[1], 449, 46, "field");
    if (error == null) dart.nullFailed(I[1], 449, 58, "error");
    this[type$1] = type;
    this[field$0] = field;
    this[error$] = error;
    built_value.BuiltValueNestedFieldError.__proto__.new.call(this);
    ;
  }).prototype = built_value.BuiltValueNestedFieldError.prototype;
  dart.addTypeTests(built_value.BuiltValueNestedFieldError);
  dart.addTypeCaches(built_value.BuiltValueNestedFieldError);
  dart.setLibraryUri(built_value.BuiltValueNestedFieldError, I[0]);
  dart.setFieldSignature(built_value.BuiltValueNestedFieldError, () => ({
    __proto__: dart.getFields(built_value.BuiltValueNestedFieldError.__proto__),
    type: dart.finalFieldType(core.String),
    field: dart.finalFieldType(core.String),
    error: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(built_value.BuiltValueNestedFieldError, ['toString']);
  built_value.$jc = function $36jc(hash, value) {
    if (hash == null) dart.nullFailed(I[1], 297, 13, "hash");
    if (value == null) dart.nullFailed(I[1], 297, 23, "value");
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  built_value.$jf = function $36jf(hash) {
    if (hash == null) dart.nullFailed(I[1], 305, 13, "hash");
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.defineLazy(built_value, {
    /*built_value.nullable*/get nullable() {
      return "nullable";
    },
    /*built_value.memoized*/get memoized() {
      return "memoized";
    },
    /*built_value.newBuiltValueToStringHelper*/get newBuiltValueToStringHelper() {
      return dart.fn(className => {
        if (className == null) dart.nullFailed(I[1], 321, 13, "className");
        return new built_value.IndentingBuiltValueToStringHelper.new(className);
      }, T.StringToIndentingBuiltValueToStringHelper());
    },
    set newBuiltValueToStringHelper(_) {},
    /*built_value._indentingBuiltValueToStringHelperIndent*/get _indentingBuiltValueToStringHelperIndent() {
      return 0;
    },
    set _indentingBuiltValueToStringHelperIndent(_) {}
  }, false);
  dart.trackLibraries("packages/built_value/built_value", {
    "package:built_value/built_value.dart": built_value
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["built_value.dart"],"names":[],"mappings":"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","file":"built_value.unsound.ddc.js"}');
  // Exports:
  return {
    built_value: built_value
  };
}));

//# sourceMappingURL=built_value.unsound.ddc.js.map
