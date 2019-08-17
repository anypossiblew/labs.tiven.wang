(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parts-parts-module"],{

/***/ "../../node_modules/d3-array/src/array.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/array.js ***!
  \*******************************************************************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "../../node_modules/d3-array/src/ascending.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/ascending.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "../../node_modules/d3-array/src/bin.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/bin.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "../../node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect.js */ "../../node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "../../node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ "../../node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.js */ "../../node_modules/d3-array/src/identity.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range.js */ "../../node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks.js */ "../../node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges.js */ "../../node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks_js__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "../../node_modules/d3-array/src/bisect.js":
/*!********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/bisect.js ***!
  \********************************************************************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "../../node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ "../../node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "../../node_modules/d3-array/src/bisector.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/bisector.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "../../node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "../../node_modules/d3-array/src/constant.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/constant.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "../../node_modules/d3-array/src/count.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/count.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return count; });
function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null && value >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && value >= value) {
        ++count;
      }
    }
  }
  return count;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/cross.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/cross.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cross; });
function length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}


/***/ }),

/***/ "../../node_modules/d3-array/src/descending.js":
/*!************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/descending.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "../../node_modules/d3-array/src/deviation.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/deviation.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deviation; });
/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ "../../node_modules/d3-array/src/variance.js");


function deviation(values, valueof) {
  const v = Object(_variance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, valueof);
  return v ? Math.sqrt(v) : v;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/extent.js":
/*!********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/extent.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "../../node_modules/d3-array/src/group.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/group.js ***!
  \*******************************************************************************************/
/*! exports provided: default, groups, rollup, rollups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return rollup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return rollups; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "../../node_modules/d3-array/src/identity.js");


function group(values, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function groups(values, ...keys) {
  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function rollup(values, reduce, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], reduce, keys);
}

function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}


/***/ }),

/***/ "../../node_modules/d3-array/src/identity.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/identity.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "../../node_modules/d3-array/src/index.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/index.js ***!
  \*******************************************************************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, count, cross, descending, deviation, extent, group, groups, rollup, rollups, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, pairs, permute, quantile, quickselect, range, least, leastIndex, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect.js */ "../../node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "../../node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector.js */ "../../node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ "../../node_modules/d3-array/src/count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _count_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.js */ "../../node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./descending.js */ "../../node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deviation.js */ "../../node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extent.js */ "../../node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./group.js */ "../../node_modules/d3-array/src/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["groups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["rollup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_8__["rollups"]; });

/* harmony import */ var _bin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bin.js */ "../../node_modules/d3-array/src/bin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bin", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold/freedmanDiaconis.js */ "../../node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _threshold_scott_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./threshold/scott.js */ "../../node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./threshold/sturges.js */ "../../node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./max.js */ "../../node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./maxIndex.js */ "../../node_modules/d3-array/src/maxIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxIndex", function() { return _maxIndex_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mean.js */ "../../node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./median.js */ "../../node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./merge.js */ "../../node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./min.js */ "../../node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./minIndex.js */ "../../node_modules/d3-array/src/minIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minIndex", function() { return _minIndex_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pairs.js */ "../../node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./permute.js */ "../../node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./quantile.js */ "../../node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quickselect.js */ "../../node_modules/d3-array/src/quickselect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickselect", function() { return _quickselect_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./range.js */ "../../node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _least_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./least.js */ "../../node_modules/d3-array/src/least.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "least", function() { return _least_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./leastIndex.js */ "../../node_modules/d3-array/src/leastIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leastIndex", function() { return _leastIndex_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scan.js */ "../../node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shuffle.js */ "../../node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sum.js */ "../../node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ticks.js */ "../../node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_30__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_30__["tickStep"]; });

/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./transpose.js */ "../../node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./variance.js */ "../../node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./zip.js */ "../../node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });










 // Deprecated; use bin.

















 // Deprecated; use leastIndex.








/***/ }),

/***/ "../../node_modules/d3-array/src/least.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/least.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return least; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "../../node_modules/d3-array/src/ascending.js");


function least(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, minValue) < 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        min = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, min) < 0
          : compare(value, value) === 0) {
        min = value;
        defined = true;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/leastIndex.js":
/*!************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/leastIndex.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return leastIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "../../node_modules/d3-array/src/ascending.js");


function leastIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (compare.length === 1) {
    for (const element of values) {
      ++index;
      const value = compare(element);
      if (minIndex < 0
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, min) < 0) {
        min = value;
        minIndex = index;
      }
    }
  } else {
    for (const value of values) {
      ++index;
      if (minIndex < 0
          ? compare(value, value) === 0
          : compare(value, min) < 0) {
        min = value;
        minIndex = index;
      }
    }
  }
  return minIndex;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/max.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/max.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/maxIndex.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/maxIndex.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maxIndex; });
function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/mean.js":
/*!******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/mean.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mean; });
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/median.js":
/*!********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/median.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ "../../node_modules/d3-array/src/quantile.js");
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickselect.js */ "../../node_modules/d3-array/src/quickselect.js");



function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  values = Float64Array.from(numbers(values, valueof));
  if (!values.length) return;
  const n = values.length;
  const i = n >> 1;
  Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, i - 1, 0);
  if ((n & 1) === 0) Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, i, i);
  return Object(_quantile_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, 0.5);
});


/***/ }),

/***/ "../../node_modules/d3-array/src/merge.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/merge.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}


/***/ }),

/***/ "../../node_modules/d3-array/src/min.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/min.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/minIndex.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/minIndex.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minIndex; });
function minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/number.js":
/*!********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/number.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "../../node_modules/d3-array/src/pairs.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/pairs.js ***!
  \*******************************************************************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "../../node_modules/d3-array/src/permute.js":
/*!*********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/permute.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(source, keys) {
  return Array.from(keys, key => source[key]);
});


/***/ }),

/***/ "../../node_modules/d3-array/src/quantile.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/quantile.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "../../node_modules/d3-array/src/number.js");


function quantile(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "../../node_modules/d3-array/src/quickselect.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/quickselect.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickselect; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "../../node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/range.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/range.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "../../node_modules/d3-array/src/scan.js":
/*!******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/scan.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scan; });
/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leastIndex.js */ "../../node_modules/d3-array/src/leastIndex.js");


function scan(values, compare) {
  const index = Object(_leastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, compare);
  return index < 0 ? undefined : index;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/shuffle.js":
/*!*********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/shuffle.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
function shuffle(array, i0 = 0, i1 = array.length) {
  var m = i1 - (i0 = +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/sum.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/sum.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sum; });
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array.js */ "../../node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending.js */ "../../node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number.js */ "../../node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile.js */ "../../node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array_js__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number_js__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile_js__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "../../node_modules/d3-array/src/threshold/scott.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/threshold/scott.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation.js */ "../../node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "../../node_modules/d3-array/src/threshold/sturges.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/threshold/sturges.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "../../node_modules/d3-array/src/ticks.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/ticks.js ***!
  \*******************************************************************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/transpose.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/transpose.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min.js */ "../../node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min_js__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "../../node_modules/d3-array/src/variance.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/variance.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return variance; });
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}


/***/ }),

/***/ "../../node_modules/d3-array/src/zip.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/d3-array/src/zip.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose.js */ "../../node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/parts/circle-packing/circle-packing.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/d3/parts/circle-packing/circle-packing.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d3\" #d3Container>\r\n<svg [attr.viewBox]=\"viewBox\" text-anchor=\"middle\" (click)=\"zoomBack()\">\r\n    <g *ngFor=\"let group of dataGroups\">\r\n        <g *ngFor=\"let d of group[1]\" [attr.transform]=\"'translate('+(width/2+(d.x-v[0]) * k)+','+(width/2+(d.y-v[1]) * k)+')'\" \r\n            (click)=\"$event.stopPropagation();circleClick(d)\"\r\n            class=\"d3-circle-packing-circle-group\">\r\n            <circle [attr.r]=\"d.r*k\" [attr.fill]=\"color(d.height)\" ></circle>\r\n            <text *ngIf=\"!d.children\" [style.font-size]=\"k+'em'\">\r\n                <tspan>{{d.data.name}}</tspan>\r\n            </text>\r\n        </g>\r\n    </g>\r\n</svg>\r\n</div>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/parts/parts.component.html":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/d3/parts/parts.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Circle Packing\n      </nb-card-header>\n      <nb-card-body>\n        <app-circle-packing class=\"app-chart\"></app-circle-packing>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-xl-4\">\n    <nb-card size=\"large\">\n      <nb-card-header>\n        Zoomable Sunburst\n      </nb-card-header>\n      <nb-card-body>\n        <app-sunburst class=\"app-chart\"></app-sunburst>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/parts/sunburst/sunburst.component.html":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/tiven.wang/Documents/GitLab/XXDashboard/node_modules/raw-loader!./src/app/pages/d3/parts/sunburst/sunburst.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d3\" #d3Container>\n  <svg [attr.viewBox]=\"viewBox\" text-anchor=\"middle\" (click)=\"$event.stopPropagation();zoomBack()\">\n    <g [attr.transform]=\"'translate('+width/2+','+height/2+')'\">\n      <g>\n        <path *ngFor=\"let d of data\" [attr.fill]=\"color(d.rootName)\" [attr.fill-opacity]=\"d.fillOpacity\"\n          [attr.d]=\"d.dArc\"\n          [ngStyle]=\"{'cursor': d.clickable?'pointer':'initial'}\"\n          (click)=\"$event.stopPropagation();dClick(d)\">\n          <title>{{d.title}}</title>\n        </path>\n      </g>\n      <g>\n        <text *ngFor=\"let d of data\" \n          [attr.fill-opacity]=\"d.labelVisible\"\n          [attr.transform]=\"d.labelTransform\">{{d.data.name}}</text>\n      </g>\n      <circle [attr.r]=\"radius\" [attr.fill]=\"'none'\" [attr.pointer-events]=\"'all'\"\n        (click)=\"$event.stopPropagation();dClick(currentRoot)\"></circle>\n    </g>\n  </svg>\n</div>"

/***/ }),

/***/ "./src/app/pages/d3/parts/circle-packing/circle-packing.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/d3/parts/circle-packing/circle-packing.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d3 {\n  display: flex;\n}\n.d3 svg {\n  font-size: 5px;\n  flex: 1;\n}\n.d3-circle-packing-circle-group {\n  transition: all 0.3s;\n}\n.d3-circle-packing-circle-group circle {\n  transition: all 0.3s;\n}\n.d3-circle-packing-circle-group:hover {\n  cursor: pointer;\n  stroke: grey;\n}"

/***/ }),

/***/ "./src/app/pages/d3/parts/circle-packing/circle-packing.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/d3/parts/circle-packing/circle-packing.component.ts ***!
  \***************************************************************************/
/*! exports provided: CirclePackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirclePackingComponent", function() { return CirclePackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "../../node_modules/d3-array/src/index.js");





let CirclePackingComponent = class CirclePackingComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // helper function
        this.color = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleSequential"])(d3__WEBPACK_IMPORTED_MODULE_3__["interpolateMagma"]).domain([8, 0]);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let element = this.d3Container.nativeElement;
        this.height = element.offsetHeight;
        this.width = this.height;
        // Set SVG viewBox attribute
        this.viewBox = [0, 0, this.width, this.height].join(' ');
        this.httpClient.get('https://raw.githubusercontent.com/d3/d3-hierarchy/v1.1.8/test/data/flare.json')
            .subscribe(data => {
            this.createDiagram(data);
        });
    }
    createDiagram(data) {
        /**
         * https://github.com/d3/d3-hierarchy#pack
         */
        this.root = Object(d3__WEBPACK_IMPORTED_MODULE_3__["pack"])()
            .size([this.width - 2, this.height - 2])
            .padding(3)(Object(d3__WEBPACK_IMPORTED_MODULE_3__["hierarchy"])(data).sum(d => d.value).sort((a, b) => b.value - a.value));
        this.dataGroups = Array.from(Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["group"])(this.root.descendants(), (d) => d.height));
        // Initial view to root
        this.zoom(this.root);
    }
    circleClick(d) {
        this.zoom(d);
    }
    zoomBack() {
        this.zoom(this.root);
    }
    zoom(d) {
        if (this.focus !== d) {
            this.focus = d;
            this.zoomTo([this.focus.x, this.focus.y, this.focus.r * 2]);
        }
    }
    zoomTo(v) {
        this.k = this.width / v[2];
        this.v = v;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('d3Container', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CirclePackingComponent.prototype, "d3Container", void 0);
CirclePackingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-circle-packing',
        template: __webpack_require__(/*! raw-loader!./circle-packing.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/parts/circle-packing/circle-packing.component.html"),
        styles: [__webpack_require__(/*! ./circle-packing.component.scss */ "./src/app/pages/d3/parts/circle-packing/circle-packing.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CirclePackingComponent);



/***/ }),

/***/ "./src/app/pages/d3/parts/parts.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/d3/parts/parts.component.ts ***!
  \***************************************************/
/*! exports provided: PartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsComponent", function() { return PartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let PartsComponent = class PartsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parts',
        template: __webpack_require__(/*! raw-loader!./parts.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/parts/parts.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PartsComponent);



/***/ }),

/***/ "./src/app/pages/d3/parts/parts.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/d3/parts/parts.module.ts ***!
  \************************************************/
/*! exports provided: PartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsModule", function() { return PartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _parts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts.component */ "./src/app/pages/d3/parts/parts.component.ts");
/* harmony import */ var _circle_packing_circle_packing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circle-packing/circle-packing.component */ "./src/app/pages/d3/parts/circle-packing/circle-packing.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "../../node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _sunburst_sunburst_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sunburst/sunburst.component */ "./src/app/pages/d3/parts/sunburst/sunburst.component.ts");








const routes = [{
        path: '',
        component: _parts_component__WEBPACK_IMPORTED_MODULE_3__["PartsComponent"]
    }];
let PartsModule = class PartsModule {
};
PartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_parts_component__WEBPACK_IMPORTED_MODULE_3__["PartsComponent"], _circle_packing_circle_packing_component__WEBPACK_IMPORTED_MODULE_4__["CirclePackingComponent"], _sunburst_sunburst_component__WEBPACK_IMPORTED_MODULE_7__["SunburstComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], PartsModule);



/***/ }),

/***/ "./src/app/pages/d3/parts/sunburst/sunburst.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/d3/parts/sunburst/sunburst.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/d3/parts/sunburst/sunburst.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/d3/parts/sunburst/sunburst.component.ts ***!
  \***************************************************************/
/*! exports provided: SunburstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunburstComponent", function() { return SunburstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "../../node_modules/d3/index.js");




let SunburstComponent = class SunburstComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        // SVG attributes
        this.width = 0;
        this.height = 0;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.height = this.d3Container.nativeElement.offsetHeight;
        this.width = this.height;
        // Set SVG viewBox attribute
        this.viewBox = [0, 0, this.width, this.height].join(' ');
        this.httpClient.get('https://raw.githubusercontent.com/d3/d3-hierarchy/v1.1.8/test/data/flare.json')
            .subscribe(data => {
            this.create(this.partition(data));
        });
    }
    partition(data) {
        const root = Object(d3__WEBPACK_IMPORTED_MODULE_3__["hierarchy"])(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value);
        return Object(d3__WEBPACK_IMPORTED_MODULE_3__["partition"])()
            .size([2 * Math.PI, root.height + 1])(root);
    }
    create(data) {
        this.root = data;
        this.data = data.descendants().slice(1);
        this.radius = this.width / 6;
        this.color = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"])(Object(d3__WEBPACK_IMPORTED_MODULE_3__["quantize"])(d3__WEBPACK_IMPORTED_MODULE_3__["interpolateRainbow"], data.children.length + 1));
        let formatter = Object(d3__WEBPACK_IMPORTED_MODULE_3__["format"])(",d");
        data.each(d => {
            d.current = d;
            let node = d;
            while (node.depth > 1)
                node = node.parent;
            d.rootName = node.data.name;
            d.clickable = !!d.children;
            d.title = `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${formatter(d.value)}`;
            this.reCalculate(d);
        });
    }
    reCalculate(d) {
        d.fillOpacity = this.arcVisible(d.current) ? (d.children ? 0.8 : 0.6) : 0;
        d.dArc = this.arc()(d.current);
        d.labelVisible = this.labelVisible(d.current) ? 1 : 0;
        d.labelTransform = this.labelTransform(d.current);
    }
    arc() {
        return Object(d3__WEBPACK_IMPORTED_MODULE_3__["arc"])()
            .startAngle((d) => d.x0)
            .endAngle((d) => d.x1)
            .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(this.radius * 1.5)
            .innerRadius((d) => d.y0 * this.radius)
            .outerRadius((d) => Math.max(d.y0 * this.radius, d.y1 * this.radius - 1));
    }
    arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }
    labelVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }
    labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * this.radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }
    dClick(p) {
        if (!p.children)
            return;
        this.currentRoot = p.parent || this.root;
        this.root.each(d => {
            d.target = {
                x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                y0: Math.max(0, d.y0 - p.depth),
                y1: Math.max(0, d.y1 - p.depth)
            };
            d.current = d.target;
            this.reCalculate(d);
        });
    }
    zoomBack() {
        this.dClick(this.root);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('d3Container', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SunburstComponent.prototype, "d3Container", void 0);
SunburstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sunburst',
        template: __webpack_require__(/*! raw-loader!./sunburst.component.html */ "../../node_modules/raw-loader/index.js!./src/app/pages/d3/parts/sunburst/sunburst.component.html"),
        styles: [__webpack_require__(/*! ./sunburst.component.scss */ "./src/app/pages/d3/parts/sunburst/sunburst.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SunburstComponent);



/***/ })

}]);