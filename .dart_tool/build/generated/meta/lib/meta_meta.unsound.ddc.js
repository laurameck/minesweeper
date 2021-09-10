define(['dart_sdk'], (function load__packages__meta__meta_meta(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var meta_meta = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var T = {
    TargetKindL: () => (T.TargetKindL = dart.constFn(dart.legacy(meta_meta.TargetKind)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.classType",
        index: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.enumType",
        index: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.extension",
        index: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.field",
        index: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.function",
        index: 4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.library",
        index: 5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.getter",
        index: 6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.method",
        index: 7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.mixinType",
        index: 8
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.parameter",
        index: 9
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.setter",
        index: 10
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.topLevelVariable",
        index: 11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.type",
        index: 12
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: meta_meta.TargetKind.prototype,
        [_name$]: "TargetKind.typedefType",
        index: 13
      });
    },
    get C14() {
      return C[14] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9, C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13], T.TargetKindL());
    }
  }, false);
  var C = Array(15).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/meta/meta_meta.dart",
    "package:meta/meta_meta.dart"
  ];
  var kinds$ = dart.privateName(meta_meta, "Target.kinds");
  meta_meta.Target = class Target extends core.Object {
    get kinds() {
      return this[kinds$];
    }
    set kinds(value) {
      super.kinds = value;
    }
  };
  (meta_meta.Target.new = function(kinds) {
    if (kinds == null) dart.nullFailed(I[0], 27, 21, "kinds");
    this[kinds$] = kinds;
    ;
  }).prototype = meta_meta.Target.prototype;
  dart.addTypeTests(meta_meta.Target);
  dart.addTypeCaches(meta_meta.Target);
  dart.setLibraryUri(meta_meta.Target, I[1]);
  dart.setFieldSignature(meta_meta.Target, () => ({
    __proto__: dart.getFields(meta_meta.Target.__proto__),
    kinds: dart.finalFieldType(core.Set$(meta_meta.TargetKind))
  }));
  var _name$ = dart.privateName(meta_meta, "_name");
  meta_meta.TargetKind = class TargetKind extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (meta_meta.TargetKind.new = function(index, _name) {
    if (index == null) dart.nullFailed(I[0], 32, 6, "index");
    if (_name == null) dart.nullFailed(I[0], 32, 6, "_name");
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = meta_meta.TargetKind.prototype;
  dart.addTypeTests(meta_meta.TargetKind);
  dart.addTypeCaches(meta_meta.TargetKind);
  dart.setLibraryUri(meta_meta.TargetKind, I[1]);
  dart.setFieldSignature(meta_meta.TargetKind, () => ({
    __proto__: dart.getFields(meta_meta.TargetKind.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(meta_meta.TargetKind, ['toString']);
  meta_meta.TargetKind.classType = C[0] || CT.C0;
  meta_meta.TargetKind.enumType = C[1] || CT.C1;
  meta_meta.TargetKind.extension = C[2] || CT.C2;
  meta_meta.TargetKind.field = C[3] || CT.C3;
  meta_meta.TargetKind.function = C[4] || CT.C4;
  meta_meta.TargetKind.library = C[5] || CT.C5;
  meta_meta.TargetKind.getter = C[6] || CT.C6;
  meta_meta.TargetKind.method = C[7] || CT.C7;
  meta_meta.TargetKind.mixinType = C[8] || CT.C8;
  meta_meta.TargetKind.parameter = C[9] || CT.C9;
  meta_meta.TargetKind.setter = C[10] || CT.C10;
  meta_meta.TargetKind.topLevelVariable = C[11] || CT.C11;
  meta_meta.TargetKind.type = C[12] || CT.C12;
  meta_meta.TargetKind.typedefType = C[13] || CT.C13;
  meta_meta.TargetKind.values = C[14] || CT.C14;
  dart.trackLibraries("packages/meta/meta_meta", {
    "package:meta/meta_meta.dart": meta_meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta_meta.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBwB;;;;;;;;QAEJ;;;EAAM;;;;;;;;;;;;IA4D1B;;;QAvDK;;;;;EAuDL","file":"meta_meta.unsound.ddc.js"}');
  // Exports:
  return {
    meta_meta: meta_meta
  };
}));

//# sourceMappingURL=meta_meta.unsound.ddc.js.map
