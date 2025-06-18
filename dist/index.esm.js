import require$$0, { useMemo, memo, useState, useCallback } from 'react';
import { StyleSheet, View, Text as Text$2, TouchableOpacity, ActivityIndicator, Image as Image$2 } from 'react-native';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self) ;
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

/**
 * Mock Theme for Development
 * This provides a complete theme structure for development and testing
 */
var mockTheme$3 = {
  colors: {
    // Primary colors
    primary: '#007AFF',
    primaryLight: '#4DA3FF',
    primaryDark: '#0051CC',
    // Secondary colors
    secondary: '#5AC8FA',
    secondaryLight: '#8BD8FB',
    secondaryDark: '#2BA6F7',
    // Status colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5AC8FA',
    // Text colors
    textPrimary: '#000000',
    textSecondary: '#666666',
    textDisabled: '#999999',
    // Background colors
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    surface: '#FFFFFF',
    // Border colors
    border: '#E1E5E9',
    borderLight: '#F1F3F5',
    // Other colors
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: 'bold'
    },
    h3: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '600'
    },
    h4: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600'
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'normal'
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'normal'
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'normal'
    }
  }
};
// Mock hook that returns the theme
var useTheme = function useTheme() {
  return mockTheme$3;
};

/**
 * useBoxStyles - Hook for generating Box component styles
 */
var useBoxStyles = function useBoxStyles(props) {
  var theme = useTheme();
  return useMemo(function () {
    var styles = {};
    // Layout props
    if (props.flex !== undefined) {
      styles.flex = props.flex;
    }
    if (props.flexDirection) {
      styles.flexDirection = props.flexDirection;
    }
    if (props.justifyContent) {
      styles.justifyContent = props.justifyContent;
    }
    if (props.alignItems) {
      styles.alignItems = props.alignItems;
    }
    // Convenience props
    if (props.center) {
      styles.justifyContent = 'center';
      styles.alignItems = 'center';
    }
    if (props.row) {
      styles.flexDirection = 'row';
    }
    if (props.column) {
      styles.flexDirection = 'column';
    }
    // Spacing props
    if (props.padding) {
      styles.padding = theme.spacing[props.padding];
    }
    if (props.margin) {
      styles.margin = theme.spacing[props.margin];
    }
    if (props.paddingHorizontal) {
      styles.paddingHorizontal = theme.spacing[props.paddingHorizontal];
    }
    if (props.paddingVertical) {
      styles.paddingVertical = theme.spacing[props.paddingVertical];
    }
    if (props.marginHorizontal) {
      styles.marginHorizontal = theme.spacing[props.marginHorizontal];
    }
    if (props.marginVertical) {
      styles.marginVertical = theme.spacing[props.marginVertical];
    }
    // Color props
    if (props.backgroundColor) {
      styles.backgroundColor = theme.colors[props.backgroundColor];
    }
    if (props.borderColor) {
      styles.borderColor = theme.colors[props.borderColor];
    }
    return StyleSheet.create({
      container: styles
    }).container;
  }, [theme, props]);
};

var _excluded$4 = ["children", "style", "testID", "flex", "flexDirection", "justifyContent", "alignItems", "alignSelf", "padding", "paddingHorizontal", "paddingVertical", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "margin", "marginHorizontal", "marginVertical", "marginTop", "marginBottom", "marginLeft", "marginRight", "backgroundColor", "borderColor", "center", "row", "column", "shadow"];
var Box = function Box(_ref) {
  var children = _ref.children,
    style = _ref.style,
    testID = _ref.testID,
    flex = _ref.flex,
    flexDirection = _ref.flexDirection,
    justifyContent = _ref.justifyContent,
    alignItems = _ref.alignItems,
    alignSelf = _ref.alignSelf,
    padding = _ref.padding,
    paddingHorizontal = _ref.paddingHorizontal,
    paddingVertical = _ref.paddingVertical,
    paddingTop = _ref.paddingTop,
    paddingBottom = _ref.paddingBottom,
    paddingLeft = _ref.paddingLeft,
    paddingRight = _ref.paddingRight,
    margin = _ref.margin,
    marginHorizontal = _ref.marginHorizontal,
    marginVertical = _ref.marginVertical,
    marginTop = _ref.marginTop,
    marginBottom = _ref.marginBottom,
    marginLeft = _ref.marginLeft,
    marginRight = _ref.marginRight,
    backgroundColor = _ref.backgroundColor,
    borderColor = _ref.borderColor,
    center = _ref.center,
    row = _ref.row,
    column = _ref.column,
    shadow = _ref.shadow,
    rest = _objectWithoutProperties(_ref, _excluded$4);
  var boxStyles = useBoxStyles({
    flex: flex,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    alignSelf: alignSelf,
    padding: padding,
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    margin: margin,
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    center: center,
    row: row,
    column: column,
    shadow: shadow
  });
  return jsxRuntimeExports.jsx(View, _objectSpread2(_objectSpread2({
    style: [boxStyles, style],
    testID: testID
  }, rest), {}, {
    children: children
  }));
};
var Box$1 = /*#__PURE__*/memo(Box);

/**
 * useTextStyles - Hook for generating Text component styles
 */
// Mock theme for now - will be replaced with actual theme integration
var mockTheme$2 = {
  colors: {
    primary: '#F47D42',
    secondary: '#1a3154',
    background: '#F3F8FC',
    surface: '#ffffff',
    text: '#1A1C20',
    light: '#ffffff',
    dark: '#121212',
    gray: '#8E8E93',
    danger: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500'
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: 'bold'
    },
    h3: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold'
    },
    h4: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 'bold'
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'regular'
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'regular'
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'regular'
    },
    button: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: 'medium'
    },
    overline: {
      fontSize: 10,
      lineHeight: 16,
      fontWeight: 'medium'
    }
  }
};
var useTextStyles = function useTextStyles(props) {
  return useMemo(function () {
    var styles = {};
    // Apply variant styles
    if (props.variant && mockTheme$2.typography[props.variant]) {
      var variantStyle = mockTheme$2.typography[props.variant];
      styles.fontSize = variantStyle.fontSize;
      styles.lineHeight = variantStyle.lineHeight;
      // Map font weight to React Native weight
      var weightMap = {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      };
      styles.fontWeight = weightMap[variantStyle.fontWeight] || '400';
    }
    // Apply color
    if (props.color && mockTheme$2.colors[props.color]) {
      styles.color = mockTheme$2.colors[props.color];
    } else {
      styles.color = mockTheme$2.colors.text; // Default color
    }
    // Apply weight override
    if (props.weight) {
      var _weightMap = {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      };
      styles.fontWeight = _weightMap[props.weight];
    }
    // Apply text alignment
    if (props.align) {
      styles.textAlign = props.align;
    }
    // Apply text transform
    if (props.transform && props.transform !== 'none') {
      styles.textTransform = props.transform;
    }
    // Convenience props
    if (props.center) {
      styles.textAlign = 'center';
    }
    if (props.bold) {
      styles.fontWeight = '700';
    }
    if (props.italic) {
      styles.fontStyle = 'italic';
    }
    if (props.underline) {
      styles.textDecorationLine = 'underline';
    }
    if (props.strikethrough) {
      styles.textDecorationLine = 'line-through';
    }
    if (props.underline && props.strikethrough) {
      styles.textDecorationLine = 'underline line-through';
    }
    return styles;
  }, [props.variant, props.color, props.weight, props.align, props.transform, props.center, props.bold, props.italic, props.underline, props.strikethrough]);
};

var _excluded$3 = ["children", "style", "testID", "variant", "color", "weight", "align", "transform", "center", "bold", "italic", "underline", "strikethrough"];
var Text = function Text(_ref) {
  var children = _ref.children,
    style = _ref.style,
    testID = _ref.testID,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'body1' : _ref$variant,
    color = _ref.color,
    weight = _ref.weight,
    align = _ref.align,
    transform = _ref.transform,
    center = _ref.center,
    bold = _ref.bold,
    italic = _ref.italic,
    underline = _ref.underline,
    strikethrough = _ref.strikethrough,
    rest = _objectWithoutProperties(_ref, _excluded$3);
  var textStyles = useTextStyles({
    variant: variant,
    color: color,
    weight: weight,
    align: align,
    transform: transform,
    center: center,
    bold: bold,
    italic: italic,
    underline: underline,
    strikethrough: strikethrough
  });
  return jsxRuntimeExports.jsx(Text$2, _objectSpread2(_objectSpread2({
    style: [textStyles, style],
    testID: testID,
    allowFontScaling: false
  }, rest), {}, {
    children: children
  }));
};
var Text$1 = /*#__PURE__*/memo(Text);

/**
 * useButtonStyles - Hook for generating Button component styles
 */
// Mock theme for now - will be replaced with actual theme integration
var mockTheme$1 = {
  colors: {
    primary: '#F47D42',
    surface: '#ffffff',
    text: '#1A1C20',
    light: '#ffffff',
    gray: '#8E8E93',
    danger: '#FF3B30'},
  spacing: {
    m: 16,
    l: 24}
};
var useButtonStyles = function useButtonStyles(props) {
  return useMemo(function () {
    var containerStyle = {};
    var textStyle = {};
    var iconStyle = {};
    // Base button styles
    containerStyle.justifyContent = 'center';
    containerStyle.alignItems = 'center';
    containerStyle.borderRadius = props.rounded ? 25 : 8;
    containerStyle.overflow = 'hidden';
    // Size styles
    switch (props.size) {
      case 'small':
        containerStyle.minHeight = 36;
        containerStyle.paddingHorizontal = mockTheme$1.spacing.m;
        textStyle.fontSize = 14;
        textStyle.lineHeight = 20;
        break;
      case 'large':
        containerStyle.minHeight = 56;
        containerStyle.paddingHorizontal = mockTheme$1.spacing.l;
        textStyle.fontSize = 18;
        textStyle.lineHeight = 24;
        break;
      default:
        // medium
        containerStyle.minHeight = 48;
        containerStyle.paddingHorizontal = mockTheme$1.spacing.l;
        textStyle.fontSize = 16;
        textStyle.lineHeight = 20;
        break;
    }
    // Full width
    if (props.fullWidth) {
      containerStyle.width = '100%';
    }
    // Variant styles
    switch (props.variant) {
      case 'primary':
        containerStyle.backgroundColor = mockTheme$1.colors.primary;
        textStyle.color = mockTheme$1.colors.light;
        textStyle.fontWeight = '600';
        iconStyle.color = mockTheme$1.colors.light;
        // Add shadow for primary buttons
        containerStyle.shadowColor = '#000';
        containerStyle.shadowOffset = {
          width: 0,
          height: 2
        };
        containerStyle.shadowOpacity = 0.1;
        containerStyle.shadowRadius = 4;
        containerStyle.elevation = 3;
        break;
      case 'secondary':
        containerStyle.backgroundColor = mockTheme$1.colors.surface;
        containerStyle.borderWidth = 1;
        containerStyle.borderColor = mockTheme$1.colors.gray;
        textStyle.color = mockTheme$1.colors.text;
        textStyle.fontWeight = '500';
        iconStyle.color = mockTheme$1.colors.text;
        break;
      case 'outline':
        containerStyle.backgroundColor = 'transparent';
        containerStyle.borderWidth = 1;
        containerStyle.borderColor = mockTheme$1.colors.primary;
        textStyle.color = mockTheme$1.colors.primary;
        textStyle.fontWeight = '500';
        iconStyle.color = mockTheme$1.colors.primary;
        break;
      case 'ghost':
        containerStyle.backgroundColor = 'transparent';
        textStyle.color = mockTheme$1.colors.primary;
        textStyle.fontWeight = '500';
        iconStyle.color = mockTheme$1.colors.primary;
        break;
      case 'danger':
        containerStyle.backgroundColor = mockTheme$1.colors.danger;
        textStyle.color = mockTheme$1.colors.light;
        textStyle.fontWeight = '600';
        iconStyle.color = mockTheme$1.colors.light;
        // Add shadow for danger buttons
        containerStyle.shadowColor = '#000';
        containerStyle.shadowOffset = {
          width: 0,
          height: 2
        };
        containerStyle.shadowOpacity = 0.1;
        containerStyle.shadowRadius = 4;
        containerStyle.elevation = 3;
        break;
    }
    // Disabled state
    if (props.disabled || props.loading) {
      containerStyle.opacity = 0.6;
    }
    return {
      containerStyle: containerStyle,
      textStyle: textStyle,
      iconStyle: iconStyle
    };
  }, [props.variant, props.size, props.loading, props.disabled, props.fullWidth, props.rounded]);
};

var _excluded$2 = ["children", "style", "testID", "variant", "size", "title", "icon", "iconPosition", "loading", "disabled", "fullWidth", "rounded", "onPress"];
var Button = function Button(_ref) {
  var children = _ref.children,
    style = _ref.style,
    testID = _ref.testID,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    title = _ref.title,
    icon = _ref.icon,
    _ref$iconPosition = _ref.iconPosition,
    iconPosition = _ref$iconPosition === void 0 ? 'left' : _ref$iconPosition,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$fullWidth = _ref.fullWidth,
    fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
    _ref$rounded = _ref.rounded,
    rounded = _ref$rounded === void 0 ? false : _ref$rounded,
    onPress = _ref.onPress,
    rest = _objectWithoutProperties(_ref, _excluded$2);
  var _useButtonStyles = useButtonStyles({
      variant: variant,
      size: size,
      loading: loading,
      disabled: disabled,
      fullWidth: fullWidth,
      rounded: rounded
    }),
    containerStyle = _useButtonStyles.containerStyle,
    textStyle = _useButtonStyles.textStyle,
    iconStyle = _useButtonStyles.iconStyle;
  var isDisabled = disabled || loading;
  var renderContent = function renderContent() {
    if (loading) {
      return jsxRuntimeExports.jsx(ActivityIndicator, {
        size: "small",
        color: variant === 'primary' ? '#ffffff' : '#1A1C20',
        testID: "".concat(testID, "-loading")
      });
    }
    if (title && icon) {
      return jsxRuntimeExports.jsxs(Box$1, {
        row: true,
        center: true,
        children: [iconPosition === 'left' && jsxRuntimeExports.jsx(Box$1, {
          marginRight: "s",
          children: jsxRuntimeExports.jsx(Text$1, {
            style: iconStyle,
            children: icon
          })
        }), jsxRuntimeExports.jsx(Text$1, {
          style: textStyle,
          children: title
        }), iconPosition === 'right' && jsxRuntimeExports.jsx(Box$1, {
          marginLeft: "s",
          children: jsxRuntimeExports.jsx(Text$1, {
            style: iconStyle,
            children: icon
          })
        })]
      });
    }
    if (title) {
      return jsxRuntimeExports.jsx(Text$1, {
        style: textStyle,
        children: title
      });
    }
    if (icon) {
      return jsxRuntimeExports.jsx(Box$1, {
        center: true,
        children: jsxRuntimeExports.jsx(Text$1, {
          style: iconStyle,
          children: icon
        })
      });
    }
    return children;
  };
  return jsxRuntimeExports.jsx(TouchableOpacity, _objectSpread2(_objectSpread2({
    style: [containerStyle, style],
    onPress: isDisabled ? undefined : onPress,
    disabled: isDisabled,
    testID: testID,
    activeOpacity: 0.8
  }, rest), {}, {
    children: jsxRuntimeExports.jsx(Box$1, {
      center: true,
      padding: "m",
      children: renderContent()
    })
  }));
};
var Button$1 = /*#__PURE__*/memo(Button);

/**
 * useSeparatorStyles - Hook for generating Separator component styles
 */
// Mock theme for now
var mockTheme = {
  colors: {
    border: '#E1E5E9'}
};
var useSeparatorStyles = function useSeparatorStyles(props) {
  return useMemo(function () {
    var style = {};
    // Base color
    style.backgroundColor = props.color || mockTheme.colors.border;
    // Orientation and sizing
    if (props.orientation === 'horizontal') {
      style.height = props.thickness;
      style.width = props.length || '100%';
    } else {
      style.width = props.thickness;
      style.height = props.length || '100%';
    }
    // Spacing
    if (props.marginHorizontal !== undefined) {
      style.marginHorizontal = props.marginHorizontal;
    }
    if (props.marginVertical !== undefined) {
      style.marginVertical = props.marginVertical;
    }
    return style;
  }, [props.orientation, props.thickness, props.length, props.color, props.marginHorizontal, props.marginVertical]);
};

var Separator = function Separator(_ref) {
  var testID = _ref.testID,
    style = _ref.style,
    _ref$orientation = _ref.orientation,
    orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation,
    _ref$thickness = _ref.thickness,
    thickness = _ref$thickness === void 0 ? 1 : _ref$thickness,
    length = _ref.length,
    color = _ref.color,
    marginHorizontal = _ref.marginHorizontal,
    marginVertical = _ref.marginVertical;
  var separatorStyle = useSeparatorStyles({
    orientation: orientation,
    thickness: thickness,
    length: length,
    color: color,
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical
  });
  return jsxRuntimeExports.jsx(View, {
    style: [separatorStyle, style],
    testID: testID
  });
};
var Separator$1 = /*#__PURE__*/memo(Separator);

/**
 * useImageStyles - Hook for generating Image component styles
 */
var useImageStyles = function useImageStyles(props) {
  return useMemo(function () {
    var style = {};
    // Sizing
    if (props.width !== undefined) {
      style.width = props.width;
    }
    if (props.height !== undefined) {
      style.height = props.height;
    }
    if (props.aspectRatio !== undefined) {
      style.aspectRatio = props.aspectRatio;
    }
    // Border radius
    if (props.borderRadius !== undefined) {
      style.borderRadius = props.borderRadius;
    }
    return style;
  }, [props.width, props.height, props.aspectRatio, props.borderRadius]);
};

var _excluded$1 = ["testID", "style", "source", "width", "height", "aspectRatio", "resizeMode", "fallback", "fallbackText", "showLoading", "loadingText", "borderRadius", "onLoad", "onError", "onLoadStart", "onLoadEnd"];
var Image = function Image(_ref) {
  var testID = _ref.testID,
    style = _ref.style,
    source = _ref.source,
    width = _ref.width,
    height = _ref.height,
    aspectRatio = _ref.aspectRatio,
    _ref$resizeMode = _ref.resizeMode,
    resizeMode = _ref$resizeMode === void 0 ? 'cover' : _ref$resizeMode,
    fallback = _ref.fallback,
    _ref$fallbackText = _ref.fallbackText,
    fallbackText = _ref$fallbackText === void 0 ? 'Image unavailable' : _ref$fallbackText,
    _ref$showLoading = _ref.showLoading,
    showLoading = _ref$showLoading === void 0 ? false : _ref$showLoading,
    _ref$loadingText = _ref.loadingText,
    loadingText = _ref$loadingText === void 0 ? 'Loading...' : _ref$loadingText,
    borderRadius = _ref.borderRadius,
    onLoad = _ref.onLoad,
    onError = _ref.onError,
    onLoadStart = _ref.onLoadStart,
    onLoadEnd = _ref.onLoadEnd,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var imageStyles = useImageStyles({
    width: width,
    height: height,
    aspectRatio: aspectRatio,
    borderRadius: borderRadius
  });
  var handleLoadStart = function handleLoadStart() {
    setLoading(true);
    setError(false);
    onLoadStart === null || onLoadStart === void 0 || onLoadStart();
  };
  var handleLoad = function handleLoad() {
    setLoading(false);
    setError(false);
    onLoad === null || onLoad === void 0 || onLoad();
  };
  var handleLoadEnd = function handleLoadEnd() {
    setLoading(false);
    onLoadEnd === null || onLoadEnd === void 0 || onLoadEnd();
  };
  var handleError = function handleError() {
    setLoading(false);
    setError(true);
    onError === null || onError === void 0 || onError();
  };
  // Show fallback if error occurred
  if (error) {
    if (fallback) {
      return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
        children: fallback
      });
    }
    return jsxRuntimeExports.jsx(Box$1, {
      center: true,
      style: [imageStyles, style],
      backgroundColor: "gray",
      testID: "".concat(testID, "-fallback"),
      children: jsxRuntimeExports.jsx(Text$1, {
        variant: "caption",
        color: "light",
        center: true,
        children: fallbackText
      })
    });
  }
  // Show loading state
  if (loading && showLoading) {
    return jsxRuntimeExports.jsx(Box$1, {
      center: true,
      style: [imageStyles, style],
      backgroundColor: "gray",
      testID: "".concat(testID, "-loading"),
      children: jsxRuntimeExports.jsx(Text$1, {
        variant: "caption",
        color: "light",
        center: true,
        children: loadingText
      })
    });
  }
  return jsxRuntimeExports.jsx(Image$2, _objectSpread2({
    source: source,
    style: [imageStyles, style],
    resizeMode: resizeMode,
    testID: testID,
    onLoadStart: handleLoadStart,
    onLoad: handleLoad,
    onLoadEnd: handleLoadEnd,
    onError: handleError
  }, rest));
};
var Image$1 = /*#__PURE__*/memo(Image);

/**
 * useGradientStyles - Hook for generating GradientView component styles
 */
var useGradientStyles = function useGradientStyles(props) {
  return useMemo(function () {
    var style = {};
    // For now, use the first color as background
    // In a real implementation, this would generate proper gradient styles
    if (props.colors && props.colors.length > 0) {
      style.backgroundColor = props.colors[0];
    }
    // Add opacity overlay for gradient effect simulation
    if (props.colors && props.colors.length > 1) {
      // This is a simplified approach - real gradients would need LinearGradient
      // For now, we'll use the first color with some visual indication
      style.opacity = 0.9;
    }
    return style;
  }, [props.colors, props.direction, props.start, props.end, props.locations]);
};

var _excluded = ["testID", "style", "children", "colors", "direction", "start", "end", "locations"];
var GradientView = function GradientView(_ref) {
  var testID = _ref.testID,
    style = _ref.style,
    children = _ref.children,
    colors = _ref.colors,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
    start = _ref.start,
    end = _ref.end,
    locations = _ref.locations,
    rest = _objectWithoutProperties(_ref, _excluded);
  var gradientStyle = useGradientStyles({
    colors: colors,
    direction: direction,
    start: start,
    end: end,
    locations: locations
  });
  // If only one color or no colors, render as solid color
  if (!colors || colors.length < 2) {
    return jsxRuntimeExports.jsx(View, _objectSpread2(_objectSpread2({
      style: [gradientStyle, style, {
        backgroundColor: (colors === null || colors === void 0 ? void 0 : colors[0]) || 'transparent'
      }],
      testID: testID
    }, rest), {}, {
      children: children
    }));
  }
  // For now, render with first color as fallback
  // In a real implementation, this would use LinearGradient from expo-linear-gradient
  return jsxRuntimeExports.jsx(View, _objectSpread2(_objectSpread2({
    style: [gradientStyle, style],
    testID: testID
  }, rest), {}, {
    children: children
  }));
};
var GradientView$1 = /*#__PURE__*/memo(GradientView);

/**
 * Accessibility utilities for UI components
 */
var createAccessibilityProps = function createAccessibilityProps(label, hint, role) {
  return {
    accessible: true,
    accessibilityLabel: label,
    accessibilityHint: hint,
    accessibilityRole: role
  };
};
var mergeAccessibilityProps = function mergeAccessibilityProps(baseProps, overrideProps) {
  return _objectSpread2(_objectSpread2({}, baseProps), overrideProps);
};
var disableAccessibility = function disableAccessibility() {
  return {
    accessible: false,
    accessibilityElementsHidden: true
  };
};

var useOptimizedStyle = function useOptimizedStyle(styleFactory, dependencies) {
  return useMemo(styleFactory, dependencies);
};
var useOptimizedCallback = function useOptimizedCallback(callback, dependencies) {
  return useCallback(callback, dependencies);
};
var createStyleSheet = function createStyleSheet(styles) {
  return StyleSheet.create(styles);
};
var mergeStyles = function mergeStyles(baseStyle) {
  for (var _len = arguments.length, additionalStyles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    additionalStyles[_key - 1] = arguments[_key];
  }
  return [baseStyle].concat(_toConsumableArray(additionalStyles.filter(Boolean)));
};

/**
 * Theme integration utilities
 */
// Type guards for theme keys
var isValidSpacingKey = function isValidSpacingKey(key) {
  return ['xs', 's', 'm', 'l', 'xl', 'xxl'].includes(key);
};
var isValidColorKey = function isValidColorKey(key) {
  return ['primary', 'secondary', 'background', 'surface', 'text', 'light', 'dark', 'gray', 'danger', 'success', 'warning'].includes(key);
};
// Utility to get theme value with fallback
var getThemeValue = function getThemeValue(themeObject, key, fallback) {
  if (!key || !(key in themeObject)) {
    return fallback;
  }
  return themeObject[key];
};
// Responsive utility placeholder (can be enhanced later)
var responsive = function responsive(value) {
  var isTablet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return isTablet ? value * 1.2 : value;
};

export { Box$1 as Box, Button$1 as Button, GradientView$1 as GradientView, Image$1 as Image, Separator$1 as Separator, Text$1 as Text, createAccessibilityProps, createStyleSheet, disableAccessibility, getThemeValue, isValidColorKey, isValidSpacingKey, mergeAccessibilityProps, mergeStyles, responsive, useOptimizedCallback, useOptimizedStyle };
//# sourceMappingURL=index.esm.js.map
