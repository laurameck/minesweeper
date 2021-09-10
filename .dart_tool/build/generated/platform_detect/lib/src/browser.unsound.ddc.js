define(['dart_sdk', 'packages/pub_semver/pub_semver'], (function load__packages__platform_detect__src__browser(dart_sdk, packages__pub_semver__pub_semver) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const version = packages__pub_semver__pub_semver.src__version;
  var navigator = Object.create(dart.library);
  var browser$ = Object.create(dart.library);
  var operating_system = Object.create(dart.library);
  var $firstWhere = dartx.firstWhere;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(false);
  var T = {
    boolL: () => (T.boolL = dart.constFn(dart.legacy(core.bool)))(),
    BrowserL: () => (T.BrowserL = dart.constFn(dart.legacy(browser$.Browser)))(),
    BrowserLToboolL: () => (T.BrowserLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.BrowserL()])))(),
    VoidToBrowserL: () => (T.VoidToBrowserL = dart.constFn(dart.fnType(T.BrowserL(), [])))(),
    VersionL: () => (T.VersionL = dart.constFn(dart.legacy(version.Version)))(),
    JSArrayOfBrowserL: () => (T.JSArrayOfBrowserL = dart.constFn(_interceptors.JSArray$(T.BrowserL())))(),
    NavigatorProviderL: () => (T.NavigatorProviderL = dart.constFn(dart.legacy(navigator.NavigatorProvider)))(),
    NavigatorProviderLToboolL: () => (T.NavigatorProviderLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.NavigatorProviderL()])))(),
    NavigatorProviderLToVersionL: () => (T.NavigatorProviderLToVersionL = dart.constFn(dart.fnType(T.VersionL(), [T.NavigatorProviderL()])))(),
    OperatingSystemL: () => (T.OperatingSystemL = dart.constFn(dart.legacy(operating_system.OperatingSystem)))(),
    OperatingSystemLToboolL: () => (T.OperatingSystemLToboolL = dart.constFn(dart.fnType(T.boolL(), [T.OperatingSystemL()])))(),
    VoidToOperatingSystemL: () => (T.VoidToOperatingSystemL = dart.constFn(dart.fnType(T.OperatingSystemL(), [])))(),
    JSArrayOfOperatingSystemL: () => (T.JSArrayOfOperatingSystemL = dart.constFn(_interceptors.JSArray$(T.OperatingSystemL())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(browser$._Chrome._isChrome, T.NavigatorProviderLToboolL());
    },
    get C1() {
      return C[1] = dart.fn(browser$._Chrome._getVersion, T.NavigatorProviderLToVersionL());
    },
    get C2() {
      return C[2] = dart.fn(browser$._Firefox._isFirefox, T.NavigatorProviderLToboolL());
    },
    get C3() {
      return C[3] = dart.fn(browser$._Firefox._getVersion, T.NavigatorProviderLToVersionL());
    },
    get C4() {
      return C[4] = dart.fn(browser$._Safari._isSafari, T.NavigatorProviderLToboolL());
    },
    get C5() {
      return C[5] = dart.fn(browser$._Safari._getVersion, T.NavigatorProviderLToVersionL());
    },
    get C6() {
      return C[6] = dart.fn(browser$._WKWebView._isWKWebView, T.NavigatorProviderLToboolL());
    },
    get C7() {
      return C[7] = dart.fn(browser$._WKWebView._getVersion, T.NavigatorProviderLToVersionL());
    },
    get C8() {
      return C[8] = dart.fn(browser$._InternetExplorer._isInternetExplorer, T.NavigatorProviderLToboolL());
    },
    get C9() {
      return C[9] = dart.fn(browser$._InternetExplorer._getVersion, T.NavigatorProviderLToVersionL());
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "package:platform_detect/src/navigator.dart",
    "package:platform_detect/src/browser.dart",
    "package:platform_detect/src/operating_system.dart"
  ];
  navigator.NavigatorProvider = class NavigatorProvider extends core.Object {};
  (navigator.NavigatorProvider.new = function() {
    ;
  }).prototype = navigator.NavigatorProvider.prototype;
  dart.addTypeTests(navigator.NavigatorProvider);
  dart.addTypeCaches(navigator.NavigatorProvider);
  dart.setLibraryUri(navigator.NavigatorProvider, I[0]);
  var vendor = dart.privateName(navigator, "TestNavigator.vendor");
  var appVersion = dart.privateName(navigator, "TestNavigator.appVersion");
  var appName = dart.privateName(navigator, "TestNavigator.appName");
  var userAgent = dart.privateName(navigator, "TestNavigator.userAgent");
  navigator.TestNavigator = class TestNavigator extends core.Object {
    get vendor() {
      return this[vendor];
    }
    set vendor(value) {
      this[vendor] = value;
    }
    get appVersion() {
      return this[appVersion];
    }
    set appVersion(value) {
      this[appVersion] = value;
    }
    get appName() {
      return this[appName];
    }
    set appName(value) {
      this[appName] = value;
    }
    get userAgent() {
      return this[userAgent];
    }
    set userAgent(value) {
      this[userAgent] = value;
    }
  };
  (navigator.TestNavigator.new = function() {
    this[vendor] = "";
    this[appVersion] = "";
    this[appName] = "";
    this[userAgent] = "";
    ;
  }).prototype = navigator.TestNavigator.prototype;
  dart.addTypeTests(navigator.TestNavigator);
  dart.addTypeCaches(navigator.TestNavigator);
  navigator.TestNavigator[dart.implements] = () => [navigator.NavigatorProvider];
  dart.setLibraryUri(navigator.TestNavigator, I[0]);
  dart.setFieldSignature(navigator.TestNavigator, () => ({
    __proto__: dart.getFields(navigator.TestNavigator.__proto__),
    vendor: dart.fieldType(dart.legacy(core.String)),
    appVersion: dart.fieldType(dart.legacy(core.String)),
    appName: dart.fieldType(dart.legacy(core.String)),
    userAgent: dart.fieldType(dart.legacy(core.String))
  }));
  var name$ = dart.privateName(browser$, "Browser.name");
  var className$ = dart.privateName(browser$, "Browser.className");
  var _version = dart.privateName(browser$, "_version");
  var _matchesNavigator = dart.privateName(browser$, "_matchesNavigator");
  var _parseVersion = dart.privateName(browser$, "_parseVersion");
  browser$.Browser = class Browser extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get className() {
      return this[className$];
    }
    set className(value) {
      super.className = value;
    }
    static getCurrentBrowser() {
      return browser$.Browser._knownBrowsers[$firstWhere](dart.fn(browser => {
        let t1, t0;
        return T.boolL().as((t0 = browser, t1 = browser$.Browser.navigator, dart.dsend(t0, _matchesNavigator, [t1])));
      }, T.BrowserLToboolL()), {orElse: dart.fn(() => browser$.Browser.UnknownBrowser, T.VoidToBrowserL())});
    }
    clearVersion() {
      return this[_version] = null;
    }
    get version() {
      let t0;
      if (this[_version] == null) {
        if (this[_parseVersion] != null) {
          this[_version] = T.VersionL().as((t0 = browser$.Browser.navigator, dart.dsend(this, _parseVersion, [t0])));
        } else {
          this[_version] = version.Version.new(0, 0, 0);
        }
      }
      return this[_version];
    }
    get isChrome() {
      return this._equals(browser$.chrome);
    }
    get isFirefox() {
      return this._equals(browser$.firefox);
    }
    get isSafari() {
      return this._equals(browser$.safari);
    }
    get isInternetExplorer() {
      return this._equals(browser$.internetExplorer);
    }
    get isWKWebView() {
      return this._equals(browser$.wkWebView);
    }
  };
  (browser$.Browser.new = function(name, matchesNavigator, parseVersion, opts) {
    let className = opts && 'className' in opts ? opts.className : null;
    this[_version] = null;
    this[name$] = name;
    this[className$] = className;
    this[_matchesNavigator] = matchesNavigator;
    this[_parseVersion] = parseVersion;
    ;
  }).prototype = browser$.Browser.prototype;
  dart.addTypeTests(browser$.Browser);
  dart.addTypeCaches(browser$.Browser);
  dart.setMethodSignature(browser$.Browser, () => ({
    __proto__: dart.getMethods(browser$.Browser.__proto__),
    clearVersion: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(browser$.Browser, () => ({
    __proto__: dart.getGetters(browser$.Browser.__proto__),
    version: dart.legacy(version.Version),
    isChrome: dart.legacy(core.bool),
    isFirefox: dart.legacy(core.bool),
    isSafari: dart.legacy(core.bool),
    isInternetExplorer: dart.legacy(core.bool),
    isWKWebView: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(browser$.Browser, I[1]);
  dart.setFieldSignature(browser$.Browser, () => ({
    __proto__: dart.getFields(browser$.Browser.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    className: dart.finalFieldType(dart.legacy(core.String)),
    [_matchesNavigator]: dart.finalFieldType(dart.legacy(core.Function)),
    [_parseVersion]: dart.finalFieldType(dart.legacy(core.Function)),
    [_version]: dart.fieldType(dart.legacy(version.Version))
  }));
  dart.defineLazy(browser$.Browser, {
    /*browser$.Browser.navigator*/get navigator() {
      return null;
    },
    set navigator(_) {},
    /*browser$.Browser.UnknownBrowser*/get UnknownBrowser() {
      return new browser$.Browser.new("Unknown", null, null);
    },
    set UnknownBrowser(_) {},
    /*browser$.Browser._knownBrowsers*/get _knownBrowsers() {
      return T.JSArrayOfBrowserL().of([browser$.chrome, browser$.firefox, browser$.safari, browser$.internetExplorer, browser$.wkWebView]);
    },
    set _knownBrowsers(_) {}
  }, true);
  browser$._Chrome = class _Chrome extends browser$.Browser {
    static _isChrome(navigator) {
      let vendor = navigator.vendor;
      return vendor != null && vendor[$contains]("Google");
    }
    static _getVersion(navigator) {
      let match = core.RegExp.new("Chrome/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)\\s").firstMatch(navigator.appVersion);
      if (match != null) {
        let major = core.int.parse(match.group(1));
        let minor = core.int.parse(match.group(2));
        let patch = core.int.parse(match.group(3));
        let build = match.group(4);
        return version.Version.new(major, minor, patch, {build: build});
      } else {
        return version.Version.new(0, 0, 0);
      }
    }
  };
  (browser$._Chrome.new = function() {
    browser$._Chrome.__proto__.new.call(this, "Chrome", C[0] || CT.C0, C[1] || CT.C1);
    ;
  }).prototype = browser$._Chrome.prototype;
  dart.addTypeTests(browser$._Chrome);
  dart.addTypeCaches(browser$._Chrome);
  dart.setLibraryUri(browser$._Chrome, I[1]);
  browser$._Firefox = class _Firefox extends browser$.Browser {
    static _isFirefox(navigator) {
      return navigator.userAgent[$contains]("Firefox");
    }
    static _getVersion(navigator) {
      let match = core.RegExp.new("rv:(\\d+)\\.(\\d+)\\)").firstMatch(navigator.userAgent);
      let major = core.int.parse(match.group(1));
      let minor = core.int.parse(match.group(2));
      return version.Version.new(major, minor, 0);
    }
  };
  (browser$._Firefox.new = function() {
    browser$._Firefox.__proto__.new.call(this, "Firefox", C[2] || CT.C2, C[3] || CT.C3);
    ;
  }).prototype = browser$._Firefox.prototype;
  dart.addTypeTests(browser$._Firefox);
  dart.addTypeCaches(browser$._Firefox);
  dart.setLibraryUri(browser$._Firefox, I[1]);
  browser$._Safari = class _Safari extends browser$.Browser {
    static _isSafari(navigator) {
      let vendor = navigator.vendor;
      return vendor != null && vendor[$contains]("Apple") && navigator.appVersion[$contains]("Version");
    }
    static _getVersion(navigator) {
      let t0, t0$;
      let match = core.RegExp.new("Version/(\\d+)(\\.(\\d+))?(\\.(\\d+))?").firstMatch(navigator.appVersion);
      let major = core.int.parse(match.group(1));
      let minor = core.int.parse((t0 = match.group(3), t0 == null ? "0" : t0));
      let patch = core.int.parse((t0$ = match.group(5), t0$ == null ? "0" : t0$));
      return version.Version.new(major, minor, patch);
    }
  };
  (browser$._Safari.new = function() {
    browser$._Safari.__proto__.new.call(this, "Safari", C[4] || CT.C4, C[5] || CT.C5);
    ;
  }).prototype = browser$._Safari.prototype;
  dart.addTypeTests(browser$._Safari);
  dart.addTypeCaches(browser$._Safari);
  dart.setLibraryUri(browser$._Safari, I[1]);
  browser$._WKWebView = class _WKWebView extends browser$.Browser {
    static _isWKWebView(navigator) {
      let vendor = navigator.vendor;
      return vendor != null && vendor[$contains]("Apple") && !navigator.appVersion[$contains]("Version");
    }
    static _getVersion(navigator) {
      let match = core.RegExp.new("AppleWebKit/(\\d+)\\.(\\d+)\\.(\\d+)").firstMatch(navigator.appVersion);
      let major = core.int.parse(match.group(1));
      let minor = core.int.parse(match.group(2));
      let patch = core.int.parse(match.group(3));
      return version.Version.new(major, minor, patch);
    }
  };
  (browser$._WKWebView.new = function() {
    browser$._WKWebView.__proto__.new.call(this, "WKWebView", C[6] || CT.C6, C[7] || CT.C7);
    ;
  }).prototype = browser$._WKWebView.prototype;
  dart.addTypeTests(browser$._WKWebView);
  dart.addTypeCaches(browser$._WKWebView);
  dart.setLibraryUri(browser$._WKWebView, I[1]);
  browser$._InternetExplorer = class _InternetExplorer extends browser$.Browser {
    static _isInternetExplorer(navigator) {
      return navigator.appName[$contains]("Microsoft") || navigator.appVersion[$contains]("Trident") || navigator.appVersion[$contains]("Edge");
    }
    static _getVersion(navigator) {
      let match = core.RegExp.new("MSIE (\\d+)\\.(\\d+);").firstMatch(navigator.appVersion);
      if (match != null) {
        let major = core.int.parse(match.group(1));
        let minor = core.int.parse(match.group(2));
        return version.Version.new(major, minor, 0);
      }
      match = core.RegExp.new("rv[: ](\\d+)\\.(\\d+)").firstMatch(navigator.appVersion);
      if (match != null) {
        let major = core.int.parse(match.group(1));
        let minor = core.int.parse(match.group(2));
        return version.Version.new(major, minor, 0);
      }
      match = core.RegExp.new("Edge/(\\d+)\\.(\\d+)$").firstMatch(navigator.appVersion);
      if (match != null) {
        let major = core.int.parse(match.group(1));
        let minor = core.int.parse(match.group(2));
        return version.Version.new(major, minor, 0);
      }
      return version.Version.new(0, 0, 0);
    }
  };
  (browser$._InternetExplorer.new = function() {
    browser$._InternetExplorer.__proto__.new.call(this, "Internet Explorer", C[8] || CT.C8, C[9] || CT.C9, {className: "ie"});
    ;
  }).prototype = browser$._InternetExplorer.prototype;
  dart.addTypeTests(browser$._InternetExplorer);
  dart.addTypeCaches(browser$._InternetExplorer);
  dart.setLibraryUri(browser$._InternetExplorer, I[1]);
  dart.defineLazy(browser$, {
    /*browser$.chrome*/get chrome() {
      return new browser$._Chrome.new();
    },
    set chrome(_) {},
    /*browser$.firefox*/get firefox() {
      return new browser$._Firefox.new();
    },
    set firefox(_) {},
    /*browser$.safari*/get safari() {
      return new browser$._Safari.new();
    },
    set safari(_) {},
    /*browser$.internetExplorer*/get internetExplorer() {
      return new browser$._InternetExplorer.new();
    },
    set internetExplorer(_) {},
    /*browser$.wkWebView*/get wkWebView() {
      return new browser$._WKWebView.new();
    },
    set wkWebView(_) {}
  }, true);
  var name$0 = dart.privateName(operating_system, "OperatingSystem.name");
  var _matchesNavigator$ = dart.privateName(operating_system, "_matchesNavigator");
  operating_system.OperatingSystem = class OperatingSystem extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    static getCurrentOperatingSystem() {
      return operating_system.OperatingSystem._knownSystems[$firstWhere](dart.fn(system => {
        let t1, t0;
        return T.boolL().as((t0 = system, t1 = operating_system.OperatingSystem.navigator, dart.dsend(t0, _matchesNavigator$, [t1])));
      }, T.OperatingSystemLToboolL()), {orElse: dart.fn(() => operating_system.OperatingSystem.UnknownOS, T.VoidToOperatingSystemL())});
    }
    get isLinux() {
      return this._equals(operating_system.linux);
    }
    get isMac() {
      return this._equals(operating_system.mac);
    }
    get isUnix() {
      return this._equals(operating_system.unix);
    }
    get isWindows() {
      return this._equals(operating_system.windows);
    }
  };
  (operating_system.OperatingSystem.new = function(name, matchesNavigator) {
    this[name$0] = name;
    this[_matchesNavigator$] = matchesNavigator;
    ;
  }).prototype = operating_system.OperatingSystem.prototype;
  dart.addTypeTests(operating_system.OperatingSystem);
  dart.addTypeCaches(operating_system.OperatingSystem);
  dart.setGetterSignature(operating_system.OperatingSystem, () => ({
    __proto__: dart.getGetters(operating_system.OperatingSystem.__proto__),
    isLinux: dart.dynamic,
    isMac: dart.dynamic,
    isUnix: dart.dynamic,
    isWindows: dart.dynamic
  }));
  dart.setLibraryUri(operating_system.OperatingSystem, I[2]);
  dart.setFieldSignature(operating_system.OperatingSystem, () => ({
    __proto__: dart.getFields(operating_system.OperatingSystem.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    [_matchesNavigator$]: dart.finalFieldType(dart.legacy(core.Function))
  }));
  dart.defineLazy(operating_system.OperatingSystem, {
    /*operating_system.OperatingSystem.navigator*/get navigator() {
      return null;
    },
    set navigator(_) {},
    /*operating_system.OperatingSystem.UnknownOS*/get UnknownOS() {
      return new operating_system.OperatingSystem.new("Unknown", null);
    },
    set UnknownOS(_) {},
    /*operating_system.OperatingSystem._knownSystems*/get _knownSystems() {
      return T.JSArrayOfOperatingSystemL().of([operating_system.mac, operating_system.windows, operating_system.linux, operating_system.unix]);
    },
    set _knownSystems(_) {}
  }, true);
  dart.defineLazy(operating_system, {
    /*operating_system.linux*/get linux() {
      return new operating_system.OperatingSystem.new("Linux", dart.fn(navigator => navigator.appVersion[$contains]("Linux"), T.NavigatorProviderLToboolL()));
    },
    set linux(_) {},
    /*operating_system.mac*/get mac() {
      return new operating_system.OperatingSystem.new("Mac", dart.fn(navigator => navigator.appVersion[$contains]("Mac"), T.NavigatorProviderLToboolL()));
    },
    set mac(_) {},
    /*operating_system.unix*/get unix() {
      return new operating_system.OperatingSystem.new("Unix", dart.fn(navigator => navigator.appVersion[$contains]("X11"), T.NavigatorProviderLToboolL()));
    },
    set unix(_) {},
    /*operating_system.windows*/get windows() {
      return new operating_system.OperatingSystem.new("Windows", dart.fn(navigator => navigator.appVersion[$contains]("Win"), T.NavigatorProviderLToboolL()));
    },
    set windows(_) {}
  }, true);
  dart.trackLibraries("packages/platform_detect/src/browser", {
    "package:platform_detect/src/navigator.dart": navigator,
    "package:platform_detect/src/browser.dart": browser$,
    "package:platform_detect/src/operating_system.dart": operating_system
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigator.dart","browser.dart","operating_system.dart"],"names":[],"mappings":"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","file":"browser.unsound.ddc.js"}');
  // Exports:
  return {
    src__navigator: navigator,
    src__browser: browser$,
    src__operating_system: operating_system
  };
}));

//# sourceMappingURL=browser.unsound.ddc.js.map
