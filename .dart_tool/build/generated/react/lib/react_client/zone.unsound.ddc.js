define(['dart_sdk'], (function load__packages__react__react_client__zone(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var zone = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(zone, {
    /*zone.componentZone*/get componentZone() {
      return async.Zone.root;
    },
    set componentZone(_) {}
  }, true);
  dart.trackLibraries("packages/react/react_client/zone", {
    "package:react/react_client/zone.dart": zone
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["zone.dart"],"names":[],"mappings":";;;;;;;;;;;;MAmBK,kBAAa;YAAQ","file":"zone.unsound.ddc.js"}');
  // Exports:
  return {
    react_client__zone: zone
  };
}));

//# sourceMappingURL=zone.unsound.ddc.js.map
