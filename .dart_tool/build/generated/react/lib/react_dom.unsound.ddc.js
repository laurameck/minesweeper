define(['dart_sdk', 'packages/react/hooks'], (function load__packages__react__react_dom(dart_sdk, packages__react__hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const react_interop = packages__react__hooks.react_client__react_interop;
  const react = packages__react__hooks.react;
  const private_utils = packages__react__hooks.src__react_client__private_utils;
  var react_dom = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(false);
  var T = {
    ComponentL: () => (T.ComponentL = dart.constFn(dart.legacy(react.Component)))(),
    FunctionL: () => (T.FunctionL = dart.constFn(dart.legacy(core.Function)))(),
    ElementL: () => (T.ElementL = dart.constFn(dart.legacy(html.Element)))(),
    ReactElementLAndElementLToReactComponentL: () => (T.ReactElementLAndElementLToReactComponentL = dart.constFn(dart.fnType(dart.legacy(dart.anonymousJSType("ReactComponent")), [dart.legacy(dart.anonymousJSType("ReactElement")), T.ElementL()])))(),
    ReactElementLAndElementLToLReactComponentL: () => (T.ReactElementLAndElementLToLReactComponentL = dart.constFn(dart.legacy(T.ReactElementLAndElementLToReactComponentL())))(),
    VoidToFn: () => (T.VoidToFn = dart.constFn(dart.fnType(T.ReactElementLAndElementLToLReactComponentL(), [])))(),
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    ElementLToboolL: () => (T.ElementLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.ElementL()])))(),
    ElementLToLboolL: () => (T.ElementLToLboolL = dart.constFn(dart.legacy(T.ElementLToboolL())))(),
    VoidToFn$1: () => (T.VoidToFn$1 = dart.constFn(dart.fnType(T.ElementLToLboolL(), [])))(),
    dynamicTodynamic: () => (T.dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))(),
    dynamicToLdynamic: () => (T.dynamicToLdynamic = dart.constFn(dart.legacy(T.dynamicTodynamic())))(),
    VoidToFn$2: () => (T.VoidToFn$2 = dart.constFn(dart.fnType(T.dynamicToLdynamic(), [])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(react_interop.ReactDom.render, T.ReactElementLAndElementLToReactComponentL());
    },
    get C1() {
      return C[1] = dart.fn(react_interop.ReactDom.unmountComponentAtNode, T.ElementLToboolL());
    },
    get C2() {
      return C[2] = dart.fn(react_dom._findDomNode, T.dynamicTodynamic());
    }
  }, false);
  var C = Array(3).fill(void 0);
  react_dom._findDomNode = function _findDomNode(component) {
    return react_interop.ReactDom.findDOMNode(T.ComponentL().is(component) ? component.jsThis : component);
  };
  dart.defineLazy(react_dom, {
    /*react_dom.render*/get render() {
      return private_utils.validateJsApiThenReturn(T.FunctionL(), dart.fn(() => C[0] || CT.C0, T.VoidToFn()));
    },
    set render(_) {},
    /*react_dom.unmountComponentAtNode*/get unmountComponentAtNode() {
      return private_utils.validateJsApiThenReturn(T.FunctionL(), dart.fn(() => C[1] || CT.C1, T.VoidToFn$1()));
    },
    set unmountComponentAtNode(_) {},
    /*react_dom.findDOMNode*/get findDOMNode() {
      return private_utils.validateJsApiThenReturn(T.FunctionL(), dart.fn(() => C[2] || CT.C2, T.VoidToFn$2()));
    },
    set findDOMNode(_) {}
  }, true);
  dart.trackLibraries("packages/react/react_dom", {
    "package:react/react_dom.dart": react_dom
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["react_dom.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;iDA4BqB;AAEnB,UAAgB,oCAAsB,kBAAV,SAAS,IAAgB,AAAU,SAAD,UAAU,SAAS;EACnF;;MAbS,gBAAM;YAAG,sDAAwB;;;MAKjC,gCAAsB;YAAG,sDAAwB;;;MAGjD,qBAAW;YAAG,sDAAwB","file":"react_dom.unsound.ddc.js"}');
  // Exports:
  return {
    react_dom: react_dom
  };
}));

//# sourceMappingURL=react_dom.unsound.ddc.js.map
