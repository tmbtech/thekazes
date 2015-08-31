System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "sourceMaps": "inline",
    "stage": 0,
    "blacklist": [],
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/bundle.js": [
      "js/react/routes/core.js",
      "js/react/components/menu.js",
      "npm:react@0.13.3",
      "npm:classnames@2.1.3",
      "npm:babel-runtime@5.8.20/helpers/get",
      "npm:babel-runtime@5.8.20/helpers/inherits",
      "npm:babel-runtime@5.8.20/helpers/create-class",
      "npm:babel-runtime@5.8.20/helpers/class-call-check",
      "npm:react@0.13.3/react",
      "npm:classnames@2.1.3/index",
      "npm:babel-runtime@5.8.20/core-js/object/get-own-property-descriptor",
      "npm:babel-runtime@5.8.20/core-js/object/create",
      "npm:babel-runtime@5.8.20/core-js/object/set-prototype-of",
      "npm:babel-runtime@5.8.20/core-js/object/define-property",
      "npm:react@0.13.3/lib/React",
      "npm:core-js@1.1.3/library/fn/object/get-own-property-descriptor",
      "npm:core-js@1.1.3/library/fn/object/set-prototype-of",
      "npm:core-js@1.1.3/library/fn/object/create",
      "npm:core-js@1.1.3/library/fn/object/define-property",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:react@0.13.3/lib/EventPluginUtils",
      "npm:react@0.13.3/lib/ReactChildren",
      "npm:react@0.13.3/lib/ReactComponent",
      "npm:react@0.13.3/lib/ReactClass",
      "npm:react@0.13.3/lib/ReactContext",
      "npm:react@0.13.3/lib/ReactCurrentOwner",
      "npm:react@0.13.3/lib/ReactElement",
      "npm:react@0.13.3/lib/ReactElementValidator",
      "npm:react@0.13.3/lib/ReactDOM",
      "npm:react@0.13.3/lib/ReactDOMTextComponent",
      "npm:react@0.13.3/lib/ReactDefaultInjection",
      "npm:react@0.13.3/lib/ReactInstanceHandles",
      "npm:react@0.13.3/lib/ReactPerf",
      "npm:react@0.13.3/lib/ReactMount",
      "npm:react@0.13.3/lib/ReactPropTypes",
      "npm:react@0.13.3/lib/ReactReconciler",
      "npm:react@0.13.3/lib/ReactServerRendering",
      "npm:react@0.13.3/lib/Object.assign",
      "npm:react@0.13.3/lib/findDOMNode",
      "npm:react@0.13.3/lib/ExecutionEnvironment",
      "npm:react@0.13.3/lib/onlyChild",
      "npm:core-js@1.1.3/library/modules/$",
      "npm:core-js@1.1.3/library/modules/es6.object.get-own-property-descriptor",
      "npm:core-js@1.1.3/library/modules/es6.object.set-prototype-of",
      "npm:core-js@1.1.3/library/modules/$.core",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:react@0.13.3/lib/EventConstants",
      "npm:react@0.13.3/lib/invariant",
      "npm:react@0.13.3/lib/PooledClass",
      "npm:react@0.13.3/lib/ReactFragment",
      "npm:react@0.13.3/lib/traverseAllChildren",
      "npm:react@0.13.3/lib/warning",
      "npm:react@0.13.3/lib/ReactUpdateQueue",
      "npm:react@0.13.3/lib/ReactErrorUtils",
      "npm:react@0.13.3/lib/ReactInstanceMap",
      "npm:react@0.13.3/lib/ReactLifeCycle",
      "npm:react@0.13.3/lib/ReactPropTypeLocations",
      "npm:react@0.13.3/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.3/lib/keyMirror",
      "npm:react@0.13.3/lib/keyOf",
      "npm:react@0.13.3/lib/emptyObject",
      "npm:react@0.13.3/lib/ReactNativeComponent",
      "npm:react@0.13.3/lib/getIteratorFn",
      "npm:react@0.13.3/lib/mapObject",
      "npm:react@0.13.3/lib/DOMPropertyOperations",
      "npm:react@0.13.3/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.13.3/lib/ReactDOMComponent",
      "npm:react@0.13.3/lib/escapeTextContentForBrowser",
      "npm:react@0.13.3/lib/BeforeInputEventPlugin",
      "npm:react@0.13.3/lib/ChangeEventPlugin",
      "npm:react@0.13.3/lib/ClientReactRootIndex",
      "npm:react@0.13.3/lib/DefaultEventPluginOrder",
      "npm:react@0.13.3/lib/EnterLeaveEventPlugin",
      "npm:react@0.13.3/lib/HTMLDOMPropertyConfig",
      "npm:react@0.13.3/lib/MobileSafariClickEventPlugin",
      "npm:react@0.13.3/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.3/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.13.3/lib/ReactDOMButton",
      "npm:react@0.13.3/lib/ReactDOMForm",
      "npm:react@0.13.3/lib/ReactDOMImg",
      "npm:react@0.13.3/lib/ReactDOMIDOperations",
      "npm:react@0.13.3/lib/ReactDOMIframe",
      "npm:react@0.13.3/lib/ReactDOMInput",
      "npm:react@0.13.3/lib/ReactDOMOption",
      "npm:react@0.13.3/lib/ReactDOMSelect",
      "npm:react@0.13.3/lib/ReactDOMTextarea",
      "npm:react@0.13.3/lib/ReactEventListener",
      "npm:react@0.13.3/lib/ReactInjection",
      "npm:react@0.13.3/lib/ReactReconcileTransaction",
      "npm:react@0.13.3/lib/SelectEventPlugin",
      "npm:react@0.13.3/lib/ServerReactRootIndex",
      "npm:react@0.13.3/lib/SimpleEventPlugin",
      "npm:react@0.13.3/lib/SVGDOMPropertyConfig",
      "npm:react@0.13.3/lib/createFullPageComponent",
      "npm:react@0.13.3/lib/ReactDefaultPerf",
      "npm:react@0.13.3/lib/ReactRootIndex",
      "npm:react@0.13.3/lib/DOMProperty",
      "npm:react@0.13.3/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.3/lib/ReactEmptyComponent",
      "npm:react@0.13.3/lib/ReactMarkupChecksum",
      "npm:react@0.13.3/lib/ReactUpdates",
      "npm:react@0.13.3/lib/containsNode",
      "npm:react@0.13.3/lib/getReactRootElementInContainer",
      "npm:react@0.13.3/lib/instantiateReactComponent",
      "npm:react@0.13.3/lib/setInnerHTML",
      "npm:react@0.13.3/lib/shouldUpdateReactComponent",
      "npm:react@0.13.3/lib/emptyFunction",
      "npm:react@0.13.3/lib/ReactRef",
      "npm:react@0.13.3/lib/ReactServerRenderingTransaction",
      "npm:react@0.13.3/lib/isNode",
      "npm:core-js@1.1.3/library/modules/$.to-iobject",
      "npm:core-js@1.1.3/library/modules/$.object-sap",
      "npm:core-js@1.1.3/library/modules/$.def",
      "npm:core-js@1.1.3/library/modules/$.set-proto",
      "npm:process@0.10.1",
      "npm:react@0.13.3/lib/quoteAttributeValueForBrowser",
      "npm:react@0.13.3/lib/CSSPropertyOperations",
      "npm:react@0.13.3/lib/ReactMultiChild",
      "npm:react@0.13.3/lib/isEventSupported",
      "npm:react@0.13.3/lib/EventPropagators",
      "npm:react@0.13.3/lib/FallbackCompositionState",
      "npm:react@0.13.3/lib/SyntheticCompositionEvent",
      "npm:react@0.13.3/lib/SyntheticInputEvent",
      "npm:react@0.13.3/lib/EventPluginHub",
      "npm:react@0.13.3/lib/SyntheticEvent",
      "npm:react@0.13.3/lib/isTextInputElement",
      "npm:react@0.13.3/lib/SyntheticMouseEvent",
      "npm:react@0.13.3/lib/Transaction",
      "npm:react@0.13.3/lib/AutoFocusMixin",
      "npm:react@0.13.3/lib/LocalEventTrapMixin",
      "npm:react@0.13.3/lib/DOMChildrenOperations",
      "npm:react@0.13.3/lib/LinkedValueUtils",
      "npm:react@0.13.3/lib/EventListener",
      "npm:react@0.13.3/lib/getEventTarget",
      "npm:react@0.13.3/lib/getUnboundedScrollPosition",
      "npm:react@0.13.3/lib/ReactComponentEnvironment",
      "npm:react@0.13.3/lib/CallbackQueue",
      "npm:react@0.13.3/lib/ReactInputSelection",
      "npm:react@0.13.3/lib/ReactPutListenerQueue",
      "npm:react@0.13.3/lib/getActiveElement",
      "npm:react@0.13.3/lib/shallowEqual",
      "npm:react@0.13.3/lib/SyntheticClipboardEvent",
      "npm:react@0.13.3/lib/SyntheticFocusEvent",
      "npm:react@0.13.3/lib/SyntheticKeyboardEvent",
      "npm:react@0.13.3/lib/SyntheticDragEvent",
      "npm:react@0.13.3/lib/SyntheticTouchEvent",
      "npm:react@0.13.3/lib/SyntheticUIEvent",
      "npm:react@0.13.3/lib/SyntheticWheelEvent",
      "npm:react@0.13.3/lib/getEventCharCode",
      "npm:react@0.13.3/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.13.3/lib/performanceNow",
      "npm:react@0.13.3/lib/EventPluginRegistry",
      "npm:react@0.13.3/lib/ReactEventEmitterMixin",
      "npm:react@0.13.3/lib/ViewportMetrics",
      "npm:react@0.13.3/lib/adler32",
      "npm:react@0.13.3/lib/isTextNode",
      "npm:react@0.13.3/lib/ReactCompositeComponent",
      "npm:react@0.13.3/lib/ReactOwner",
      "npm:core-js@1.1.3/library/modules/$.iobject",
      "npm:core-js@1.1.3/library/modules/$.defined",
      "npm:core-js@1.1.3/library/modules/$.fails",
      "npm:core-js@1.1.3/library/modules/$.global",
      "npm:core-js@1.1.3/library/modules/$.is-object",
      "npm:core-js@1.1.3/library/modules/$.an-object",
      "npm:core-js@1.1.3/library/modules/$.ctx",
      "npm:process@0.10.1/browser",
      "npm:react@0.13.3/lib/camelizeStyleName",
      "npm:react@0.13.3/lib/CSSProperty",
      "npm:react@0.13.3/lib/dangerousStyleValue",
      "npm:react@0.13.3/lib/hyphenateStyleName",
      "npm:react@0.13.3/lib/memoizeStringOnly",
      "npm:react@0.13.3/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.3/lib/ReactChildReconciler",
      "npm:react@0.13.3/lib/accumulateInto",
      "npm:react@0.13.3/lib/forEachAccumulated",
      "npm:react@0.13.3/lib/getTextContentAccessor",
      "npm:react@0.13.3/lib/getEventModifierState",
      "npm:react@0.13.3/lib/focusNode",
      "npm:react@0.13.3/lib/Danger",
      "npm:react@0.13.3/lib/setTextContent",
      "npm:react@0.13.3/lib/ReactDOMSelection",
      "npm:react@0.13.3/lib/getEventKey",
      "npm:react@0.13.3/lib/performance",
      "npm:core-js@1.1.3/library/modules/$.cof",
      "npm:core-js@1.1.3/library/modules/$.a-function",
      "npm:react@0.13.3/lib/hyphenate",
      "npm:react@0.13.3/lib/camelize",
      "npm:react@0.13.3/lib/flattenChildren",
      "npm:react@0.13.3/lib/createNodesFromMarkup",
      "npm:react@0.13.3/lib/getMarkupWrap",
      "npm:react@0.13.3/lib/getNodeForCharacterOffset",
      "npm:react@0.13.3/lib/createArrayFromMixed",
      "npm:react@0.13.3/lib/toArray"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.23",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "classnames": "npm:classnames@2.1.3",
    "core-js": "npm:core-js@1.1.3",
    "react": "npm:react@0.13.3",
    "react-dom": "npm:react-dom@0.14.0-beta3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:classnames@2.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:fbjs@0.1.0-alpha.4": {
      "core-js": "npm:core-js@1.1.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@7.0.4",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:react-dom@0.14.0-beta3": {
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "react": "npm:react@0.14.0-beta3"
    },
    "npm:react@0.13.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.14.0-beta3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
