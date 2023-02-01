/* @preserve
 * @esri/hub-common - v9.49.1 - Tue Aug 02 2022 13:40:11 GMT-0600 (Mountain Daylight Time)
 * Copyright (c) 2022 Environmental Systems Research Institute, Inc.
 * Apache-2.0
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.arcgisHub = global.arcgisHub || {}));
})(this, (function (exports) { 'use strict';

    /**
     * Maps over the values of an object (one level deep)
     * @param obj
     * @param fn
     * @private
     */
    function _mapValues(obj, fn) {
        var keys = Object.keys(obj);
        var newObject = keys.reduce(function (acc, currentKey) {
            acc[currentKey] = fn(obj[currentKey], currentKey, obj);
            return acc;
        }, {});
        return newObject;
    }

    /**
     * Maps over _all_ values of an object graph
     * @param object
     * @param callback function to be called on each value
     * @param propertyPath an initial path (optional, only changes what is passed to the callback as the "path" argument)
     * @private
     */
    function _deepMapValues(object, callback, propertyPath) {
        propertyPath = propertyPath || "";
        if (Array.isArray(object)) {
            return object.map(deepMapValuesIteratee);
        }
        else if (object &&
            _isObject(object) &&
            !_isDate(object) &&
            !_isRegExp(object) &&
            !_isFunction(object)) {
            return Object.assign({}, object, _mapValues(object, deepMapValuesIteratee));
        }
        else {
            return callback(object, propertyPath);
        }
        function deepMapValuesIteratee(value, key) {
            var valuePath = "" + (propertyPath ? propertyPath + "." + key : key);
            return _deepMapValues(value, callback, valuePath);
        }
    }
    // Simple "good-enough" type checks for the tree traversal functions
    // these are not bullet-proof and should not be public/docd
    /**
     * Is this a string?
     * @param v
     * @private
     */
    function _isString(v) {
        return typeof v === "string" || v instanceof String;
    }
    /**
     * Return if the passed entry is a Date
     * @param v
     * @private
     */
    function _isDate(v) {
        return v instanceof Date;
    }
    /**
     * Is this a function?
     * @param v
     * @private
     */
    function _isFunction(v) {
        return typeof v === "function";
    }
    /**
     * Is this an Object?
     * @param v
     * @private
     */
    function _isObject(v) {
        return typeof v === "object";
    }
    /**
     * Is this a regexp?
     * @param v
     * @private
     */
    function _isRegExp(v) {
        return v instanceof RegExp;
    }

    /**
     * Get a property out of a deeply nested object
     * Does not handle anything but nested object graph
     */
    function getProp(obj, path) {
        return path.split(".").reduce(function (prev, curr) {
            /* istanbul ignore next no need to test undefined scenario */
            return prev ? prev[curr] : undefined;
        }, obj);
    }

    /* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { cloneObject } from "@esri/hub-common";
     * const original = { foo: "bar" }
     * const copy = cloneObject(original)
     * copy.foo // "bar"
     * copy === original // false
     * ```
     * Make a deep clone, including arrays. Does not handle functions!
     */
    function cloneObject$1(obj) {
        var clone = {};
        // first check array
        if (Array.isArray(obj)) {
            clone = obj.map(cloneObject$1);
        }
        else if (typeof obj === "object") {
            for (var i in obj) {
                /* istanbul ignore next no need to deal w/ other side of hasOwnProperty() */
                if (obj.hasOwnProperty(i)) {
                    var value = obj[i];
                    if (value != null && typeof value === "object") {
                        if (value instanceof Date) {
                            clone[i] = new Date(value.getTime());
                        }
                        else {
                            clone[i] = cloneObject$1(value);
                        }
                    }
                    else {
                        clone[i] = value;
                    }
                }
            }
        }
        else {
            clone = obj;
        }
        return clone;
    }
    /**
     * Given an array of objects, convert into an object, with each
     * entry assigned the key via the keyprop
     */
    function arrayToObject(arr, key) {
        return arr.reduce(function (hash, entry) {
            hash[getProp(entry, key)] = entry;
            return hash;
        }, {});
    }
    /**
     * Given an object, convert into an array, with each
     * something or other
     */
    function objectToArray(obj, keyProp) {
        if (keyProp === void 0) { keyProp = "id"; }
        var arr = Object.keys(obj).reduce(function (acc, prop) {
            obj[prop][keyProp] = prop;
            acc.push(cloneObject$1(obj[prop]));
            return acc;
        }, []);
        return arr;
    }
    /**
     * Return an entry from an array by a property name
     */
    function findBy(arr, prop, value) {
        if (!arr) {
            return null;
        }
        var res = arr.reduce(function (acc, entry) {
            if (getProp(entry, prop) === value) {
                acc = entry;
            }
            return acc;
        }, null);
        return res;
    }
    /**
     * Return a new array without the specified value.
     *
     * @export
     * @param {any[]} arr
     * @param {*} val value or object to remove
     * @returns {any[]} Array without the value
     */
    function without(arr, value) {
        var res = arr.filter(function (entry) { return entry !== value; });
        return res;
    }
    /**
     * Compose
     * adapted from: https://github.com/stoeffel/compose-function/blob/master/module/index.js
     */
    function compose() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return fns.reduce(function (f, g) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return f(g.apply(void 0, args));
            };
        });
    }
    /**
     * Return a random number, prefixed with a string. Used for unique identifiers that do not require
     * the rigor of a full UUID - i.e. node id's, process ids etc.
     * @param prefix String to prefix the random number with so the result is a valid javascript property
     */
    function createId(prefix) {
        if (prefix === void 0) { prefix = "i"; }
        // prepend some char so it's always a valid dotable property name
        // get a random number, convert to base 36 representation, then grab chars 2-8
        return "" + prefix + Math.random().toString(36).substr(2, 8);
    }
    /**
     * Append or replace a value on an object, using a specified key, if the value is not null.
     * This is a very useful companion to the [getProp()](../getProp/) utility.
     *
     * Note: object that is passed in is cloned before the property is appended.
     *
     * Allows for code like:
     *
     * ```js
     * let model = {
     *  item: {
     *    title: 'some example object',
     *    description: 'this is some longer text',
     *    type: 'Web Map',
     *    properties: {
     *      sourceId: '3ef'
     *    }
     *  },
     *  data: {
     *    theme: 'orange',
     *    parcelLayer: {
     *      primaryField: 'PIN'
     *    }
     *  }
     * };
     *
     * // Let's extract some details into an object.
     * const summary = [
     *  'item.title',
     *  'item.description',
     *  'item.missingProp',
     *  'data.parcelLayer.primaryField'].reduce((acc, prop) => {
     *   // create the property name... you could do this however...
     *   let propName = prop.split('.').reverse()[0];
     *   return maybeAdd(propName, getProp(model, key), acc);
     * }, {});
     *
     * // summary =>
     * // {
     * //   title: 'some example object',
     * //   description: 'this is some longer text',
     * //   primaryField: 'PIN'
     * // }
     * ```
     * @param key - key to use when appending to the object
     * @param val - the possibly null value
     * @param target - the object to update
     */
    function maybeAdd(key, val, target) {
        // see if we got something...
        if (val !== null && val !== undefined) {
            target = cloneObject$1(target);
            // attach using the key
            target[key] = val;
        }
        return target;
    }
    /**
     * Append a value to an array, if the value is not null.
     * This is a very useful companion to the [getProp()](../getProp/) utility.
     *
     * Note: the array that is passed in is cloned before being appended to.
     *
     * Allows for code like:
     * ```js
     *  // example object
     * let model = {
     *  item: {
     *    id: 'c00',
     *    title: 'some example object',
     *    description: 'this is some longer text',
     *    type: 'Web Map',
     *    properties: {
     *      sourceId: '3ef'
     *    }
     *  },
     *  data: {
     *    theme: 'orange',
     *    parcelLayer: {
     *      itemId: '7ca',
     *      primaryField: 'PIN'
     *    }
     *  }
     * };
     * // lets pluck some id's into an array...
     * maybePush(getProp(model, 'item.properties.sourceId'), []);
     * // > ['3ef']
     *
     * // now try to get a value from a property that is missing...
     * maybePush(getProp(obj, 'item.properties.childId'), []);
     * // > []
     *
     * // easily pluck values via property paths
     * const summary = [
     *  'item.id',
     *  'item.properties.sourceId',
     *  'item.properties.childId',
     *  'data.parcelLayer.itemId'].reduce((acc, prop) => {
     *   return maybePush(getProp(model, key), acc);
     * }, []);
     *
     * // summary => ['c00', '3ef', '7ca']
     *
     * ```
     *
     * @param val - the possibly null value
     * @param target - the array to add the value to
     */
    function maybePush(val, target) {
        if (val !== null && val !== undefined) {
            // create a clone because mutation makes us sad...
            target = cloneObject$1(target);
            target.push(val);
        }
        return target;
    }
    /**
     * Convert a string to camelCase
     *
     * @export
     * @param {string} value
     * @returns {string} camelCased string
     */
    function camelize(value) {
        // lower case the whole thing to start...
        value = value.toLowerCase();
        // strip out any/all special chars...
        value = value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ");
        // Hoisted from EmberJS (MIT License)
        // https://github.com/emberjs/ember.js/blob/v2.0.1/packages/ember-runtime/lib/system/string.js#L23-L27
        var STRING_CAMELIZE_REGEXP_1 = /(\-|\_|\.|\s)+(.)?/g;
        var STRING_CAMELIZE_REGEXP_2 = /(^|\/)([A-Z])/g;
        return value
            .replace(STRING_CAMELIZE_REGEXP_1, function (match, separator, chr) {
            return chr ? chr.toUpperCase() : "";
        })
            .replace(STRING_CAMELIZE_REGEXP_2, function (match, separator, chr) {
            return match.toLowerCase();
        });
    }
    /**
     * Determines if a value is unique in an array
     * Allows for code like:
     *
     * ```js
     * const ary = [ 1, 2, 3, 3, 4, 5, 1 ];
     *
     * const result = ary.filter(unique);
     *
     * result => [ 1, 2, 3, 4, 5 ]
     * ```
     * @param value - the value to search for
     * @param index - the index of the searched value
     * @param ary - the array to search
     * @returns {boolean} - indicating if the value is unique in the array
     */
    function unique(value, index, ary) {
        return ary.indexOf(value) === index;
    }
    /**
     * Return array of unique objects, based on a deep property value
     *  Note: Property you compare on should be a primative type
     * @export
     * @template T
     * @param {T[]} arr
     * @param {string} prop
     * @return {*}  {T[]}
     */
    function uniqueBy(arr, prop) {
        return arr.reduce(function (acc, entry) {
            var nameMatches = function (e) {
                return getProp(e, prop) === getProp(entry, prop);
            };
            return maybePush(acc.find(nameMatches) ? null : entry, acc);
        }, []);
    }
    /**
     * Return last element of an array
     *
     * @export
     * @template T
     * @param {T[]} arr
     * @return {*}  {T}
     */
    function last(arr) {
        return arr[arr.length - 1];
    }
    /**
     * Filter an array by a deep property value
     *
     * @export
     * @template T
     * @param {T[]} arr
     * @param {string} prop
     * @param {unknown} val
     * @return {*}  {T[]}
     */
    function filterBy(arr, prop, val) {
        return arr.filter(function (entry) { return getProp(entry, prop) === val; });
    }
    /**
     * Extends the target object with props from the source object, overwriting identically named
     * props in target with those from source, ignoring null and undefined values; similar to $.extend.
     * Performs a deep extend by default, unless deep = false is passed as the third arg.
     *
     * @param target - the object that will take props from source
     * @param source - the object from which to take props
     * @param deep - whether or not to perform a deep (recursive) extend of source
     */
    function extend(target, source, deep) {
        if (deep === void 0) { deep = true; }
        var extended = cloneObject$1(target);
        return Object.keys(source).reduce(function (obj, prop) {
            if (source[prop] !== null && source[prop] !== undefined) {
                var value = cloneObject$1(source[prop]);
                if (Array.isArray(value)) {
                    // check for arrays, since array is type object
                    obj[prop] = value;
                }
                else if (deep && typeof value === "object") {
                    obj[prop] = extend(obj[prop] || {}, value, deep);
                }
                else {
                    obj[prop] = value;
                }
            }
            return obj;
        }, extended);
    }
    /**
     * Add number of days to a given date
     *
     * @export
     * @param {string} date
     * @param {number} numOfDays
     * @returns {string} date string with numOfDays added to the given date
     */
    function addDays(date, numOfDays) {
        try {
            var given = new Date(date);
            var dateString = new Date(given.setDate(given.getDate() + numOfDays)).toISOString();
            return dateString.split("T")[0];
        }
        catch (e) {
            throw new Error("Invalid Date");
        }
    }
    /**
     * Returns an array with arrays of the given size.
     *
     * @param arr Array to split
     * @param size Size of every group
     */
    function chunkArray(arr, size) {
        var results = [];
        var index = 0;
        while (index < arr.length) {
            results.push(arr.slice(index, index + size));
            index += size;
        }
        return results;
    }
    /**
     * Determine if a value is null or undefined
     * @param value anything
     * @returns
     */
    var isNil = function (value) { return value == null; };
    /**
     * Upper case first letter (only) of a string
     * @param word
     * @returns Word
     */
    var capitalize = function (word) {
        // upper case first letter and return as element in array for backwards compatibility
        var chars = Array.from(word);
        chars[0] = chars[0].toUpperCase();
        return chars.join("");
    };
    /**
     * An IE-compatible stand-in for Javascript's [array.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
     * @param arr the array
     * @returns an array
     */
    function flattenArray(arr) {
        return arr.reduce(function (acc, val) { return acc.concat(val); }, []);
    }

    /**
     * Deep set function. Like Ember.set, but smarter as it will create the path
     * @param {Object} target Object we want to set the property on
     * @param {String} path Dotted path to the property we want to set
     * @param {Any} value Value we want to assign to the property
     */
    function deepSet(target, path, value) {
        if (value === void 0) { value = {}; }
        var parts = path.split(".");
        var worker = target;
        var lastIdx = parts.length - 1;
        parts.forEach(function (p, idx) {
            if (!worker.hasOwnProperty(p) || worker[p] == null) {
                if (idx === lastIdx) {
                    worker[p] = value;
                }
                else {
                    // keep building the path
                    worker[p] = {};
                }
            }
            else if (idx === lastIdx) {
                if (typeof worker[p] === "object" && !Array.isArray(worker[p])) {
                    worker[p] = Object.assign(worker[p], cloneObject$1(value));
                }
                else {
                    worker[p] = value;
                }
            }
            worker = worker[p];
        });
    }

    /**
     * Ensure that an object has a deep property path.
     * This will replace any existing object at the end of the path
     * @param {Object} target Object we want to ensure has some deep property
     * @param {string} path Dotted path to the property we want to ensure exists
     */
    function ensureProp(target, path) {
        return deepSet(target, path);
    }

    /**
     * Given an array of prop paths, return all the values that exist, in an array
     */
    function getProps(obj, props) {
        return props.reduce(function (a, p) {
            var v = getProp(obj, p);
            if (v) {
                a.push(v);
            }
            return a;
        }, []);
    }

    /**
     * Gets the value of a property from an object with a
     * default if that prop is undefined
     * @param obj
     * @param prop
     * @param def
     */
    function getWithDefault$1(obj, prop, def) {
        var res = getProp(obj, prop);
        return res !== undefined ? res : def;
    }

    /**
     * Remove empty properties from an object graph
     * @param {Object} obj Object to remove empty/null properties from
     */
    function removeEmptyProps(obj) {
        // http://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript
        Object.keys(obj).forEach(function (key) {
            if (obj[key] && typeof obj[key] === "object") {
                removeEmptyProps(obj[key]);
            }
            else if (obj[key] == null) {
                delete obj[key];
            }
        });
        return obj;
    }

    /**
     * Iterate over an object graph, and for all string properties, search for a string,
     * and replace it with another string
     */
    function deepStringReplace(obj, stringOrRegex, replacement) {
        var replacedObject = _deepMapValues(obj, function (value) {
            // Only string templates
            if (!_isString(value)) {
                return value;
            }
            var re;
            if (_isRegExp(stringOrRegex)) {
                re = stringOrRegex;
            }
            else {
                re = new RegExp(stringOrRegex, "g");
            }
            return value.replace(re, replacement);
        });
        return replacedObject;
    }

    /**
     * Apply a specified set properties from a source object to a target object
     *
     * @param {Object} source The source object
     * @param {Object} target The target object
     * @param {Array} allowList Array of property paths (if not provided, source returned)
     */
    function mergeObjects(source, target, allowList) {
        if (Array.isArray(allowList) && allowList.length) {
            // we iterate the allowList, applying changes to the target from source
            allowList.forEach(function (prop) {
                if (getProp(source, prop) !== undefined) {
                    deepSet(target, prop, getProp(source, prop));
                }
            });
            // return the modified target object
            return target;
        }
        else {
            // if no property paths were passed in, return the source
            return source;
        }
    }

    /**
     * Sets a deep object property, constructing the property path as necessary
     *
     * @param path - the path to the property we want to set
     * @param val - the value we want to set it to
     * @param obj - the target object
     */
    function setProp(path, val, obj) {
        if (Array.isArray(path)) {
            path = path.join(".");
        }
        deepSet(obj, path, val);
    }

    /**
     * Traverse a graph, locating the first entry with an `id` property that
     * has a specific string or number value
     *
     * ```js
     * const l = {
     *  one: {
     *    two: [
     *      {
     *        id: "n001",
     *        color: "red"
     *      },
     *      {
     *        id: "n002",
     *        color: "yellow"
     *      }
     *    ]
     *  }
     * };
     *
     * const config = deepFindById(l, "n002")
     * //> {id: "n002", color:"yellow"}
     * ```
     *
     * This was designed to search a Site/Page/Project layout, and return
     * the config for a card. There was some concern about the performance
     * and using a real layout object, in the test, it takes ~1.5ms to
     * do the search.
     *
     * @param object
     * @param key
     * @param value
     * @returns
     */
    function deepFindById(object, value) {
        var p = function (obj) { return obj.id === value; };
        return deepFind(object, p);
    }
    /**
     * Traverse a graph locating an entry that passes the predicate
     *
     * @param object
     * @param predicate
     * @returns
     */
    function deepFind(object, predicate) {
        if (Array.isArray(object)) {
            return object.reduce(function (acc, entry) {
                if (predicate(entry)) {
                    acc = entry;
                }
                else {
                    if (isFindable(entry)) {
                        var maybe = deepFind(entry, predicate);
                        if (maybe) {
                            acc = maybe;
                        }
                    }
                }
                return acc;
            }, undefined);
        }
        else if (isFindable(object)) {
            if (predicate(object)) {
                return object;
            }
            else {
                return Object.keys(object).reduce(function (acc, entry) {
                    if (isFindable(object[entry])) {
                        var maybe = deepFind(object[entry], predicate);
                        if (maybe) {
                            acc = maybe;
                        }
                    }
                    return acc;
                }, undefined);
            }
        }
        else {
            return undefined;
        }
    }
    function isFindable(object) {
        var result = false;
        if (object &&
            _isObject(object) &&
            !_isDate(object) &&
            !_isRegExp(object) &&
            !_isFunction(object)) {
            result = true;
        }
        return result;
    }

    /**
     * Helper to split a large number of calls into
     * smaller batches of concurrent calls.
     * @param {Array} values Any array of values with which to invoke fn
     * @param {Function} fn The function that will be invoked with each value
     * @param {number} [batchSize=5] The number of concurrent calls to fn, defaults to 5
     * @returns {Promise<IBatch[]>}
     */
    function batch(values, fn, batchSize) {
        if (batchSize === void 0) { batchSize = 5; }
        var toBatches = function (_batches, value) {
            var _batch = _batches[_batches.length - 1];
            if (!_batch || _batch.length === batchSize) {
                _batch = [];
                _batches.push(_batch);
            }
            _batch.push(value);
            return _batches;
        };
        var toSerialBatchChain = function (promise, batchOfValues) {
            var executeBatch = function (prevResults) {
                var batchResults = batchOfValues.map(function (id) { return fn(id); });
                return Promise.all(batchResults).then(function (results) {
                    return prevResults.concat(results);
                });
            };
            return promise.then(executeBatch);
        };
        // split values into batches of values
        var batches = values.reduce(toBatches, []);
        // batches are processed serially, however
        // all calls within a batch are concurrent
        return batches.reduce(toSerialBatchChain, Promise.resolve([]));
    }

    /**
     * Checks whether a value exists in the given array
     * @param array The array
     * @param val The value
     */
    function includes(array, val) {
        return array.indexOf(val) !== -1;
    }

    /**
     * Given an array of strings, add a value and ensure it is unique by incrementing a suffix number
     * @param {Array} entries array of strings
     * @param {string} value string to uniqueify and add
     */
    function ensureUniqueString(entries, value) {
        var foundUnique = false;
        var num = 0;
        var chk = value;
        while (!foundUnique) {
            if (includes(entries, chk)) {
                num++;
                chk = value + "-" + num;
            }
            else {
                foundUnique = true;
            }
        }
        return chk;
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /* Copyright (c) 2018-2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Generic Solution Error with an Error stack as well
     * as an optional serialized OperationStack.
     *
     * Also accepts a `rootCause` Error object
     */
    var OperationError = /** @class */ (function (_super) {
        __extends(OperationError, _super);
        /**
         * Creates an instance of OperationError.
         * @param {string} operation
         * @param {string} [message]
         * @param {Error} [rootCause]
         * @memberof OperationError
         */
        function OperationError(operation, message, rootCause) {
            var _this = this;
            message = message || "UNKNOWN_ERROR";
            // if the rootCause has a .rootCause, use that so we don't deeply nest
            rootCause = getWithDefault$1(rootCause, "rootCause", rootCause);
            _this = _super.call(this, message) || this;
            _this.operation = operation;
            _this.name = "OperationError";
            _this.rootCause = rootCause;
            Object.setPrototypeOf(_this, OperationError.prototype);
            // using rootCause.stack ensures that the resulting error will have the original
            // message + call stack. If that's not an option, we create a new
            // stack... which is better than nothing, but it will look like
            // OperationError is the source of the error
            _this.stack = getWithDefault$1(rootCause, "stack", new Error().stack);
            return _this;
        }
        return OperationError;
    }(Error));
    var OperationError$1 = OperationError;

    /**
     * Returns a function that orchestrates a pipeline of smaller functions.
     * See [Composing Workflows](../../../guides/composing-workflows) for more information.
     *
     * All the functions must adhere to the `PipelineFn<T>` signature:
     *
     * `(value: IPipeable<T>) => Promise<IPipeable<T>>`
     *
     * Given an array of OperationPipeFns, run them in sequence and return the resultant promise
     *
     * i.e. `createOperationPipeline([fn1, fn2, f3])` will return in a function that chains
     * the functions like this: `fn1(input).then(fn2).then(fn3).then(result)`
     *
     * @param fns functions to be run in sequence
     * @returns Promise<Pipable<T>>
     */
    var createOperationPipeline = function (fns) {
        return function (input) {
            return fns.reduce(function (chain, func) {
                return chain.then(func).catch(function (err) {
                    // if it's an OperationError we can just reject with it...
                    if (err.name === "OperationError") {
                        return Promise.reject(err);
                    }
                    else {
                        // otherwise, create an OperationError and reject with that
                        var msg = "IPipeableFn did not reject with an OperationError \n Operation Stack: \n " + input.stack.toString();
                        var opErr = new OperationError$1("pipeline execution error", msg);
                        opErr.operationStack = input.stack.serialize();
                        return Promise.reject(opErr);
                    }
                });
            }, Promise.resolve(input));
        };
    };

    /**
     * Wrap an async function such that it will never reject
     * @param {Function} fn Async Function that we want to never fail
     * @param {Object} resolveWith Object to resolve with in the event of a failure
     */
    function failSafe(fn, resolveWith) {
        if (resolveWith === void 0) { resolveWith = {}; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn.apply(void 0, args).catch(function (_) {
                return resolveWith;
            });
        };
    }

    /**
     * Generate a random string of a specified length
     * User when we need to ensure a unique domain with a fixed length
     * @param {Number} chars Length of random string
     */
    function generateRandomString(chars) {
        var d = new Date().getTime();
        var result = Array(chars)
            .fill(0)
            .reduce(function (acc) {
            /* tslint:disable-next-line */
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            acc = "" + acc + r.toString(16);
            return acc;
        }, "");
        return result;
    }

    /**
     * Gien a portal settings object, determine the hub product name
     * @param {Object} portal Portal settings object
     */
    function getHubProduct(portal) {
        var isPremium = getProp(portal, "portalProperties.hub.enabled") || false;
        var product = isPremium ? "premium" : "basic";
        // TODO confirm w/ AGO that this is 100% bomber logic
        if (portal.isPortal && portal.portalMode === "singletenant") {
            product = "portal";
        }
        return product;
    }

    var getSubscriptionType = function (portalSelf) {
        return getWithDefault$1(portalSelf, "subscriptionInfo.type", "Enterprise");
    };

    /**
     * Is a String a GUID?
     * @param {string} stringToTest string to check if it's a GUID
     */
    function isGuid(stringToTest) {
        // strip curlies if sent...
        if (stringToTest[0] === "{") {
            stringToTest = stringToTest.substring(1, stringToTest.length - 1);
        }
        // ughh... seems legit
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{12}(\}){0,1}$/gi;
        // test
        return regexGuid.test(stringToTest);
    }

    /**
     * Map over an array returning the specified property for each entry
     * @param {String} prop Property to extracct
     * @param {Array} arr array of objects
     */
    function mapBy(prop, arr) {
        if (arr === void 0) { arr = []; }
        return arr.map(function (e) { return e[prop]; });
    }

    /**
     * Perform the following operations on a string to make it slug-friendly:
     * 1. trim it
     * 2. convert to lowercase
     * 3. remove any character not a-z, 0-9, or _
     * 4. dasherize it
     * @param {String} value String to slugify
     */
    function slugify(value) {
        if (typeof value === "string") {
            // @ts-ignore
            return value
                .trim()
                .toLowerCase()
                .replace(/ +/g, "-")
                .replace(/[^\w-]/g, "")
                .replace(/-+/g, "-");
        }
        else {
            return value;
        }
    }

    /**
     * Returns a new array with all the entries have the given value
     * at the given prop location removed.
     *
     * @param prop the property
     * @param val the value
     * @param arr the array
     */
    function withoutByProp(prop, val, arr) {
        return arr.filter(function (e) {
            return e[prop] !== val;
        });
    }

    /**
     * Given a string, strip out chars etc that would make it
     * and invalid javascript property name, then camelize it.
     * @param {string} value String to convert into a property
     */
    function propifyString(value) {
        var result = value;
        // strip off any leading numbers...
        result = result.replace(/^[0-9]*/g, "");
        // remove any rando chars...
        result = result.replace(/[^\w\s]/g, "");
        // camelize the rest...
        result = camelize(result);
        return result;
    }

    /**
     * Given a string, append a `- 1` on the end if no number is present
     * otherwise, increment the number
     * @param {string} str String to increment
     */
    function incrementString(str) {
        var matches = str.match(/-\s(\d+$)/);
        if (matches) {
            // get the number
            var current = parseInt(matches[1], 10);
            // replace `- current` with `- current + 1`
            var next = current + 1;
            str = str.replace("- " + current, "- " + next);
        }
        else {
            str = str + " - 1";
        }
        return str;
    }

    /* tslint:disable no-console */
    /**
     * Enum for Logger Levels
     */
    exports.Level = void 0;
    (function (Level) {
        Level[Level["all"] = 0] = "all";
        Level[Level["debug"] = 1] = "debug";
        Level[Level["info"] = 2] = "info";
        Level[Level["warn"] = 3] = "warn";
        Level[Level["error"] = 4] = "error";
        Level[Level["off"] = 5] = "off";
    })(exports.Level || (exports.Level = {}));
    /**
     * ```js
     * import { Logger, Level } from '@esri/hub-common'
     * ```
     * Functions share the console interface
     * ```js
     * Logger.log('My Message');
     * Logger.warn('Watch out!', { threat: 'Charizard' });
     * // etc, etc
     * ```
     * Available logging levels are specified in the Level enum. The hierarchy is as follows:
     * ```
     * off > error > warn > info > debug > all
     * ```
     * Logger only sends messages whose level is greater than or equal to the global log level
     * ```js
     * // Global level is 'warn'
     * Logger.info('This message won't log');
     * Logger.error('But this one will!');
     * ```
     * Logger's default level is 'off', so set desired level before use
     * ```js
     * Logger.setLogLevel(Level.all);
     * ```
     */
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        /**
         * Sets the global log level
         * @param {Level} level
         */
        Logger.setLogLevel = function (level) {
            this.logLevel = level;
        };
        /**
         * Logs to debug if level is enabled
         * @param {string} message
         * @param {...*} objects additional objects to log (optional rest parameter)
         */
        Logger.log = function (message) {
            var objects = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                objects[_i - 1] = arguments[_i];
            }
            if (this.isLevelPermitted(exports.Level.debug)) {
                console.log.apply(console, __spreadArrays([message], objects));
            }
        };
        /**
         * Logs to debug if level is enabled
         * @param {string} message
         * @param {...*} objects additional objects to log (optional rest parameter)
         */
        Logger.debug = function (message) {
            var objects = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                objects[_i - 1] = arguments[_i];
            }
            if (this.isLevelPermitted(exports.Level.debug)) {
                console.debug.apply(console, __spreadArrays([message], objects));
            }
        };
        /**
         * Logs to info if level is enabled
         * @param {string} message
         * @param {...*} objects additional objects to log (optional rest parameter)
         */
        Logger.info = function (message) {
            var objects = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                objects[_i - 1] = arguments[_i];
            }
            if (this.isLevelPermitted(exports.Level.info)) {
                console.info.apply(console, __spreadArrays([message], objects));
            }
        };
        /**
         * Logs to warn if level is enabled
         * @param {string} message
         * @param {...*} objects additional objects to log (optional rest parameter)
         */
        Logger.warn = function (message) {
            var objects = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                objects[_i - 1] = arguments[_i];
            }
            if (this.isLevelPermitted(exports.Level.warn)) {
                console.warn.apply(console, __spreadArrays([message], objects));
            }
        };
        /**
         * Logs to error if level is enabled
         * @param {string} message
         * @param {...*} objects additional objects to log (optional rest parameter)
         */
        Logger.error = function (message) {
            var objects = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                objects[_i - 1] = arguments[_i];
            }
            if (this.isLevelPermitted(exports.Level.error)) {
                console.error.apply(console, __spreadArrays([message], objects));
            }
        };
        Logger.isLevelPermitted = function (level) {
            return this.logLevel <= level;
        };
        Logger.logLevel = exports.Level.off;
        return Logger;
    }());

    /* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Determines if a given IGroup is an update group
     * @param {IGroup} group The group to evaluate
     */
    function isUpdateGroup(group) {
        return group.capabilities.includes("updateitemcontrol");
    }

    /* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Runs the given task and returns a IRevertableTaskResult
     * @param {Function} task A task method to run
     * @param {Function} revert A method to revert the task
     * @returns {Promise<IRevertableTaskResult>}
     */
    var runRevertableTask = function (task, revert) {
        return task()
            .then(function (results) {
            return {
                status: "fullfilled",
                results: results,
                revert: revert
            };
        })
            .catch(function (error) {
            return { status: "rejected", error: error };
        });
    };
    /**
     * Processes an Array of Promise<IRevertableTaskResult>. When all IRevertableTaskResult
     * are IRevertableTaskSuccess, it resolves an Array of all result values. If any
     * IRevertableTaskResult are IRevertableTaskFailed, it reverts all IRevertableTaskSuccess
     * and rejects with the first IRevertableTaskFailed error
     * @param revertableTasks
     * @returns {Promise<any[]>}
     */
    var processRevertableTasks = function (revertableTasks) {
        return Promise.all(revertableTasks).then(function (results) {
            var isFullfilled = function (result) {
                return result.status === "fullfilled";
            };
            var successfulTasks = results.filter(isFullfilled);
            var failedTasks = results.filter(function (result) { return !isFullfilled(result); });
            if (failedTasks.length) {
                var reverts = successfulTasks.map(function (task) { return task.revert(); });
                // fire & forget
                /* tslint:disable no-empty */
                Promise.all(reverts).catch(function () { });
                /* tslint:enable no-empty */
                throw failedTasks[0].error;
            }
            var returnResults = successfulTasks.map(function (result) { return result.results; });
            return returnResults;
        });
    };

    /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Checks parameters to see if we should use FormData to send the request
     * @param params The object whose keys will be encoded.
     * @return A boolean indicating if FormData will be required.
     */
    function requiresFormData(params) {
        return Object.keys(params).some(function (key) {
            var value = params[key];
            if (!value) {
                return false;
            }
            if (value && value.toParam) {
                value = value.toParam();
            }
            var type = value.constructor.name;
            switch (type) {
                case "Array":
                    return false;
                case "Object":
                    return false;
                case "Date":
                    return false;
                case "Function":
                    return false;
                case "Boolean":
                    return false;
                case "String":
                    return false;
                case "Number":
                    return false;
                default:
                    return true;
            }
        });
    }
    /**
     * Converts parameters to the proper representation to send to the ArcGIS REST API.
     * @param params The object whose keys will be encoded.
     * @return A new object with properly encoded values.
     */
    function processParams(params) {
        var newParams = {};
        Object.keys(params).forEach(function (key) {
            var _a, _b;
            var param = params[key];
            if (param && param.toParam) {
                param = param.toParam();
            }
            if (!param &&
                param !== 0 &&
                typeof param !== "boolean" &&
                typeof param !== "string") {
                return;
            }
            var type = param.constructor.name;
            var value;
            // properly encodes objects, arrays and dates for arcgis.com and other services.
            // ported from https://github.com/Esri/esri-leaflet/blob/master/src/Request.js#L22-L30
            // also see https://github.com/Esri/arcgis-rest-js/issues/18:
            // null, undefined, function are excluded. If you want to send an empty key you need to send an empty string "".
            switch (type) {
                case "Array":
                    // Based on the first element of the array, classify array as an array of arrays, an array of objects
                    // to be stringified, or an array of non-objects to be comma-separated
                    // eslint-disable-next-line no-case-declarations
                    var firstElementType = (_b = (_a = param[0]) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name;
                    value =
                        firstElementType === "Array" ? param : // pass thru array of arrays
                            firstElementType === "Object" ? JSON.stringify(param) : // stringify array of objects
                                param.join(","); // join other types of array elements
                    break;
                case "Object":
                    value = JSON.stringify(param);
                    break;
                case "Date":
                    value = param.valueOf();
                    break;
                case "Function":
                    value = null;
                    break;
                case "Boolean":
                    value = param + "";
                    break;
                default:
                    value = param;
                    break;
            }
            if (value || value === 0 || typeof value === "string" || Array.isArray(value)) {
                newParams[key] = value;
            }
        });
        return newParams;
    }

    /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Encodes keys and parameters for use in a URL's query string.
     *
     * @param key Parameter's key
     * @param value Parameter's value
     * @returns Query string with key and value pairs separated by "&"
     */
    function encodeParam(key, value) {
        // For array of arrays, repeat key=value for each element of containing array
        if (Array.isArray(value) && value[0] && Array.isArray(value[0])) {
            return value.map(function (arrayElem) { return encodeParam(key, arrayElem); }).join("&");
        }
        return encodeURIComponent(key) + "=" + encodeURIComponent(value);
    }
    /**
     * Encodes the passed object as a query string.
     *
     * @param params An object to be encoded.
     * @returns An encoded query string.
     */
    function encodeQueryString(params) {
        var newParams = processParams(params);
        return Object.keys(newParams)
            .map(function (key) {
            return encodeParam(key, newParams[key]);
        })
            .join("&");
    }

    /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Encodes parameters in a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object in browsers or in a [FormData](https://github.com/form-data/form-data) in Node.js
     *
     * @param params An object to be encoded.
     * @returns The complete [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.
     */
    function encodeFormData(params, forceFormData) {
        // see https://github.com/Esri/arcgis-rest-js/issues/499 for more info.
        var useFormData = requiresFormData(params) || forceFormData;
        var newParams = processParams(params);
        if (useFormData) {
            var formData_1 = new FormData();
            Object.keys(newParams).forEach(function (key) {
                if (typeof Blob !== "undefined" && newParams[key] instanceof Blob) {
                    /* To name the Blob:
                     1. look to an alternate request parameter called 'fileName'
                     2. see if 'name' has been tacked onto the Blob manually
                     3. if all else fails, use the request parameter
                    */
                    var filename = newParams["fileName"] || newParams[key].name || key;
                    formData_1.append(key, newParams[key], filename);
                }
                else {
                    formData_1.append(key, newParams[key]);
                }
            });
            return formData_1;
        }
        else {
            return encodeQueryString(params);
        }
    }

    /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    // TypeScript 2.1 no longer allows you to extend built in types. See https://github.com/Microsoft/TypeScript/issues/12790#issuecomment-265981442
    // and https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    //
    // This code is from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types.
    var ArcGISRequestError = /** @class */ (function () {
        /**
         * Create a new `ArcGISRequestError`  object.
         *
         * @param message - The error message from the API
         * @param code - The error code from the API
         * @param response - The original response from the API that caused the error
         * @param url - The original url of the request
         * @param options - The original options and parameters of the request
         */
        function ArcGISRequestError(message, code, response, url, options) {
            message = message || "UNKNOWN_ERROR";
            code = code || "UNKNOWN_ERROR_CODE";
            this.name = "ArcGISRequestError";
            this.message =
                code === "UNKNOWN_ERROR_CODE" ? message : code + ": " + message;
            this.originalMessage = message;
            this.code = code;
            this.response = response;
            this.url = url;
            this.options = options;
        }
        return ArcGISRequestError;
    }());
    ArcGISRequestError.prototype = Object.create(Error.prototype);
    ArcGISRequestError.prototype.constructor = ArcGISRequestError;

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Method used internally to surface messages to developers.
     */
    function warn(message) {
        if (console && console.warn) {
            console.warn.apply(console, [message]);
        }
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    var NODEJS_DEFAULT_REFERER_HEADER = "@esri/arcgis-rest-js";
    var DEFAULT_ARCGIS_REQUEST_OPTIONS = {
        httpMethod: "POST",
        params: {
            f: "json",
        },
    };
    var ArcGISAuthError = /** @class */ (function (_super) {
        __extends(ArcGISAuthError, _super);
        /**
         * Create a new `ArcGISAuthError`  object.
         *
         * @param message - The error message from the API
         * @param code - The error code from the API
         * @param response - The original response from the API that caused the error
         * @param url - The original url of the request
         * @param options - The original options of the request
         */
        function ArcGISAuthError(message, code, response, url, options) {
            if (message === void 0) { message = "AUTHENTICATION_ERROR"; }
            if (code === void 0) { code = "AUTHENTICATION_ERROR_CODE"; }
            var _this = _super.call(this, message, code, response, url, options) || this;
            _this.name = "ArcGISAuthError";
            _this.message =
                code === "AUTHENTICATION_ERROR_CODE" ? message : code + ": " + message;
            return _this;
        }
        ArcGISAuthError.prototype.retry = function (getSession, retryLimit) {
            var _this = this;
            if (retryLimit === void 0) { retryLimit = 3; }
            var tries = 0;
            var retryRequest = function (resolve, reject) {
                getSession(_this.url, _this.options)
                    .then(function (session) {
                    var newOptions = __assign(__assign({}, _this.options), { authentication: session });
                    tries = tries + 1;
                    return request(_this.url, newOptions);
                })
                    .then(function (response) {
                    resolve(response);
                })
                    .catch(function (e) {
                    if (e.name === "ArcGISAuthError" && tries < retryLimit) {
                        retryRequest(resolve, reject);
                    }
                    else if (e.name === "ArcGISAuthError" && tries >= retryLimit) {
                        reject(_this);
                    }
                    else {
                        reject(e);
                    }
                });
            };
            return new Promise(function (resolve, reject) {
                retryRequest(resolve, reject);
            });
        };
        return ArcGISAuthError;
    }(ArcGISRequestError));
    /**
     * Checks for errors in a JSON response from the ArcGIS REST API. If there are no errors, it will return the `data` passed in. If there is an error, it will throw an `ArcGISRequestError` or `ArcGISAuthError`.
     *
     * @param data The response JSON to check for errors.
     * @param url The url of the original request
     * @param params The parameters of the original request
     * @param options The options of the original request
     * @returns The data that was passed in the `data` parameter
     */
    function checkForErrors(response, url, params, options, originalAuthError) {
        // this is an error message from billing.arcgis.com backend
        if (response.code >= 400) {
            var message = response.message, code = response.code;
            throw new ArcGISRequestError(message, code, response, url, options);
        }
        // error from ArcGIS Online or an ArcGIS Portal or server instance.
        if (response.error) {
            var _a = response.error, message = _a.message, code = _a.code, messageCode = _a.messageCode;
            var errorCode = messageCode || code || "UNKNOWN_ERROR_CODE";
            if (code === 498 ||
                code === 499 ||
                messageCode === "GWM_0003" ||
                (code === 400 && message === "Unable to generate token.")) {
                if (originalAuthError) {
                    throw originalAuthError;
                }
                else {
                    throw new ArcGISAuthError(message, errorCode, response, url, options);
                }
            }
            throw new ArcGISRequestError(message, errorCode, response, url, options);
        }
        // error from a status check
        if (response.status === "failed" || response.status === "failure") {
            var message = void 0;
            var code = "UNKNOWN_ERROR_CODE";
            try {
                message = JSON.parse(response.statusMessage).message;
                code = JSON.parse(response.statusMessage).code;
            }
            catch (e) {
                message = response.statusMessage || response.message;
            }
            throw new ArcGISRequestError(message, code, response, url, options);
        }
        return response;
    }
    /**
     * ```js
     * import { request } from '@esri/arcgis-rest-request';
     * //
     * request('https://www.arcgis.com/sharing/rest')
     *   .then(response) // response.currentVersion === 5.2
     * //
     * request('https://www.arcgis.com/sharing/rest', {
     *   httpMethod: "GET"
     * })
     * //
     * request('https://www.arcgis.com/sharing/rest/search', {
     *   params: { q: 'parks' }
     * })
     *   .then(response) // response.total => 78379
     * ```
     * Generic method for making HTTP requests to ArcGIS REST API endpoints.
     *
     * @param url - The URL of the ArcGIS REST API endpoint.
     * @param requestOptions - Options for the request, including parameters relevant to the endpoint.
     * @returns A Promise that will resolve with the data from the response.
     */
    function request(url, requestOptions) {
        if (requestOptions === void 0) { requestOptions = { params: { f: "json" } }; }
        var options = __assign(__assign(__assign({ httpMethod: "POST" }, DEFAULT_ARCGIS_REQUEST_OPTIONS), requestOptions), {
            params: __assign(__assign({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.params), requestOptions.params),
            headers: __assign(__assign({}, DEFAULT_ARCGIS_REQUEST_OPTIONS.headers), requestOptions.headers),
        });
        var missingGlobals = [];
        var recommendedPackages = [];
        // don't check for a global fetch if a custom implementation was passed through
        if (!options.fetch && typeof fetch !== "undefined") {
            options.fetch = fetch.bind(Function("return this")());
        }
        else {
            missingGlobals.push("`fetch`");
            recommendedPackages.push("`node-fetch`");
        }
        if (typeof Promise === "undefined") {
            missingGlobals.push("`Promise`");
            recommendedPackages.push("`es6-promise`");
        }
        if (typeof FormData === "undefined") {
            missingGlobals.push("`FormData`");
            recommendedPackages.push("`isomorphic-form-data`");
        }
        if (!options.fetch ||
            typeof Promise === "undefined" ||
            typeof FormData === "undefined") {
            throw new Error("`arcgis-rest-request` requires a `fetch` implementation and global variables for `Promise` and `FormData` to be present in the global scope. You are missing " + missingGlobals.join(", ") + ". We recommend installing the " + recommendedPackages.join(", ") + " modules at the root of your application to add these to the global scope. See https://bit.ly/2KNwWaJ for more info.");
        }
        var httpMethod = options.httpMethod, authentication = options.authentication, rawResponse = options.rawResponse;
        var params = __assign({ f: "json" }, options.params);
        var originalAuthError = null;
        var fetchOptions = {
            method: httpMethod,
            /* ensures behavior mimics XMLHttpRequest.
            needed to support sending IWA cookies */
            credentials: options.credentials || "same-origin",
        };
        // the /oauth2/platformSelf route will add X-Esri-Auth-Client-Id header
        // and that request needs to send cookies cross domain
        // so we need to set the credentials to "include"
        if (options.headers &&
            options.headers["X-Esri-Auth-Client-Id"] &&
            url.indexOf("/oauth2/platformSelf") > -1) {
            fetchOptions.credentials = "include";
        }
        return (authentication
            ? authentication.getToken(url, { fetch: options.fetch }).catch(function (err) {
                /**
                 * append original request url and requestOptions
                 * to the error thrown by getToken()
                 * to assist with retrying
                 */
                err.url = url;
                err.options = options;
                /**
                 * if an attempt is made to talk to an unfederated server
                 * first try the request anonymously. if a 'token required'
                 * error is thrown, throw the UNFEDERATED error then.
                 */
                originalAuthError = err;
                return Promise.resolve("");
            })
            : Promise.resolve(""))
            .then(function (token) {
            if (token.length) {
                params.token = token;
            }
            if (authentication && authentication.getDomainCredentials) {
                fetchOptions.credentials = authentication.getDomainCredentials(url);
            }
            // Custom headers to add to request. IRequestOptions.headers with merge over requestHeaders.
            var requestHeaders = {};
            if (fetchOptions.method === "GET") {
                // Prevents token from being passed in query params when hideToken option is used.
                /* istanbul ignore if - window is always defined in a browser. Test case is covered by Jasmine in node test */
                if (params.token &&
                    options.hideToken &&
                    // Sharing API does not support preflight check required by modern browsers https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request
                    typeof window === "undefined") {
                    requestHeaders["X-Esri-Authorization"] = "Bearer " + params.token;
                    delete params.token;
                }
                // encode the parameters into the query string
                var queryParams = encodeQueryString(params);
                // dont append a '?' unless parameters are actually present
                var urlWithQueryString = queryParams === "" ? url : url + "?" + encodeQueryString(params);
                if (
                // This would exceed the maximum length for URLs specified by the consumer and requires POST
                (options.maxUrlLength &&
                    urlWithQueryString.length > options.maxUrlLength) ||
                    // Or if the customer requires the token to be hidden and it has not already been hidden in the header (for browsers)
                    (params.token && options.hideToken)) {
                    // the consumer specified a maximum length for URLs
                    // and this would exceed it, so use post instead
                    fetchOptions.method = "POST";
                    // If the token was already added as a Auth header, add the token back to body with other params instead of header
                    if (token.length && options.hideToken) {
                        params.token = token;
                        // Remove existing header that was added before url query length was checked
                        delete requestHeaders["X-Esri-Authorization"];
                    }
                }
                else {
                    // just use GET
                    url = urlWithQueryString;
                }
            }
            /* updateResources currently requires FormData even when the input parameters dont warrant it.
        https://developers.arcgis.com/rest/users-groups-and-items/update-resources.htm
            see https://github.com/Esri/arcgis-rest-js/pull/500 for more info. */
            var forceFormData = new RegExp("/items/.+/updateResources").test(url);
            if (fetchOptions.method === "POST") {
                fetchOptions.body = encodeFormData(params, forceFormData);
            }
            // Mixin headers from request options
            fetchOptions.headers = __assign(__assign({}, requestHeaders), options.headers);
            /* istanbul ignore next - karma reports coverage on browser tests only */
            if (typeof window === "undefined" && !fetchOptions.headers.referer) {
                fetchOptions.headers.referer = NODEJS_DEFAULT_REFERER_HEADER;
            }
            /* istanbul ignore else blob responses are difficult to make cross platform we will just have to trust the isomorphic fetch will do its job */
            if (!requiresFormData(params) && !forceFormData) {
                fetchOptions.headers["Content-Type"] =
                    "application/x-www-form-urlencoded";
            }
            return options.fetch(url, fetchOptions);
        })
            .then(function (response) {
            if (!response.ok) {
                // server responded w/ an actual error (404, 500, etc)
                var status_1 = response.status, statusText = response.statusText;
                throw new ArcGISRequestError(statusText, "HTTP " + status_1, response, url, options);
            }
            if (rawResponse) {
                return response;
            }
            switch (params.f) {
                case "json":
                    return response.json();
                case "geojson":
                    return response.json();
                case "html":
                    return response.text();
                case "text":
                    return response.text();
                /* istanbul ignore next blob responses are difficult to make cross platform we will just have to trust that isomorphic fetch will do its job */
                default:
                    return response.blob();
            }
        })
            .then(function (data) {
            if ((params.f === "json" || params.f === "geojson") && !rawResponse) {
                var response = checkForErrors(data, url, params, options, originalAuthError);
                if (originalAuthError) {
                    /* If the request was made to an unfederated service that
                    didn't require authentication, add the base url and a dummy token
                    to the list of trusted servers to avoid another federation check
                    in the event of a repeat request */
                    var truncatedUrl = url
                        .toLowerCase()
                        .split(/\/rest(\/admin)?\/services\//)[0];
                    options.authentication.federatedServers[truncatedUrl] = {
                        token: [],
                        // default to 24 hours
                        expires: new Date(Date.now() + 86400 * 1000),
                    };
                    originalAuthError = null;
                }
                return response;
            }
            else {
                return data;
            }
        });
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Helper for methods with lots of first order request options to pass through as request parameters.
     */
    function appendCustomParams(customOptions, keys, baseOptions) {
        var requestOptionsKeys = [
            "params",
            "httpMethod",
            "rawResponse",
            "authentication",
            "portal",
            "fetch",
            "maxUrlLength",
            "headers"
        ];
        var options = __assign(__assign({ params: {} }, baseOptions), customOptions);
        // merge all keys in customOptions into options.params
        options.params = keys.reduce(function (value, key) {
            if (customOptions[key] || typeof customOptions[key] === "boolean") {
                value[key] = customOptions[key];
            }
            return value;
        }, options.params);
        // now remove all properties in options that don't exist in IRequestOptions
        return requestOptionsKeys.reduce(function (value, key) {
            if (options[key]) {
                value[key] = options[key];
            }
            return value;
        }, {});
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Helper method to ensure that user supplied urls don't include whitespace or a trailing slash.
     */
    function cleanUrl(url) {
        // Guard so we don't try to trim something that's not a string
        if (typeof url !== "string") {
            return url;
        }
        // trim leading and trailing spaces, but not spaces inside the url
        url = url.trim();
        // remove the trailing slash to the url if one was included
        if (url[url.length - 1] === "/") {
            url = url.slice(0, -1);
        }
        return url;
    }

    /* Copyright (c) 2017-2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    function decodeParam(param) {
        var _a = param.split("="), key = _a[0], value = _a[1];
        return { key: decodeURIComponent(key), value: decodeURIComponent(value) };
    }
    /**
     * Decodes the passed query string as an object.
     *
     * @param query A string to be decoded.
     * @returns A decoded query param object.
     */
    function decodeQueryString(query) {
        return query
            .replace(/^#/, "")
            .split("&")
            .reduce(function (acc, entry) {
            var _a = decodeParam(entry), key = _a.key, value = _a.value;
            acc[key] = value;
            return acc;
        }, {});
    }

    /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    function fetchToken(url, requestOptions) {
        var options = requestOptions;
        // we generate a response, so we can't return the raw response
        options.rawResponse = false;
        return request(url, options).then(function (response) {
            var r = {
                token: response.access_token,
                username: response.username,
                expires: new Date(
                // convert seconds in response to milliseconds and add the value to the current time to calculate a static expiration timestamp
                Date.now() + (response.expires_in * 1000 - 1000)),
                ssl: response.ssl === true
            };
            if (response.refresh_token) {
                r.refreshToken = response.refresh_token;
            }
            return r;
        });
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    function generateToken(url, requestOptions) {
        var options = requestOptions;
        /* istanbul ignore else */
        if (typeof window !== "undefined" &&
            window.location &&
            window.location.host) {
            options.params.referer = window.location.host;
        }
        else {
            options.params.referer = NODEJS_DEFAULT_REFERER_HEADER;
        }
        return request(url, options);
    }

    /**
     * Used to test if a URL is an ArcGIS Online URL
     */
    var arcgisOnlineUrlRegex = /^https?:\/\/(\S+)\.arcgis\.com.+/;
    function isOnline(url) {
        return arcgisOnlineUrlRegex.test(url);
    }
    function normalizeOnlinePortalUrl(portalUrl) {
        if (!arcgisOnlineUrlRegex.test(portalUrl)) {
            return portalUrl;
        }
        switch (getOnlineEnvironment(portalUrl)) {
            case "dev":
                return "https://devext.arcgis.com/sharing/rest";
            case "qa":
                return "https://qaext.arcgis.com/sharing/rest";
            default:
                return "https://www.arcgis.com/sharing/rest";
        }
    }
    function getOnlineEnvironment(url) {
        if (!arcgisOnlineUrlRegex.test(url)) {
            return null;
        }
        var match = url.match(arcgisOnlineUrlRegex);
        var subdomain = match[1].split(".").pop();
        if (subdomain.includes("dev")) {
            return "dev";
        }
        if (subdomain.includes("qa")) {
            return "qa";
        }
        return "production";
    }
    function isFederated(owningSystemUrl, portalUrl) {
        var normalizedPortalUrl = cleanUrl(normalizeOnlinePortalUrl(portalUrl)).replace(/https?:\/\//, "");
        var normalizedOwningSystemUrl = cleanUrl(owningSystemUrl).replace(/https?:\/\//, "");
        return new RegExp(normalizedOwningSystemUrl, "i").test(normalizedPortalUrl);
    }
    function canUseOnlineToken(portalUrl, requestUrl) {
        var portalIsOnline = isOnline(portalUrl);
        var requestIsOnline = isOnline(requestUrl);
        var portalEnv = getOnlineEnvironment(portalUrl);
        var requestEnv = getOnlineEnvironment(requestUrl);
        if (portalIsOnline && requestIsOnline && portalEnv === requestEnv) {
            return true;
        }
        return false;
    }

    /* Copyright (c) 2018-2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Validates that the user has access to the application
     * and if they user should be presented a "View Only" mode
     *
     * This is only needed/valid for Esri applications that are "licensed"
     * and shipped in ArcGIS Online or ArcGIS Enterprise. Most custom applications
     * should not need or use this.
     *
     * ```js
     * import { validateAppAccess } from '@esri/arcgis-rest-auth';
     *
     * return validateAppAccess('your-token', 'theClientId')
     * .then((result) => {
     *    if (!result.value) {
     *      // redirect or show some other ui
     *    } else {
     *      if (result.viewOnlyUserTypeApp) {
     *        // use this to inform your app to show a "View Only" mode
     *      }
     *    }
     * })
     * .catch((err) => {
     *  // two possible errors
     *  // invalid clientId: {"error":{"code":400,"messageCode":"GWM_0007","message":"Invalid request","details":[]}}
     *  // invalid token: {"error":{"code":498,"message":"Invalid token.","details":[]}}
     * })
     * ```
     *
     * Note: This is only usable by Esri applications hosted on *arcgis.com, *esri.com or within
     * an ArcGIS Enterprise installation. Custom applications can not use this.
     *
     * @param token platform token
     * @param clientId application client id
     * @param portal Optional
     */
    function validateAppAccess(token, clientId, portal) {
        if (portal === void 0) { portal = "https://www.arcgis.com/sharing/rest"; }
        var url = portal + "/oauth2/validateAppAccess";
        var ro = {
            method: "POST",
            params: {
                f: "json",
                client_id: clientId,
                token: token,
            },
        };
        return request(url, ro);
    }

    /* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    function defer() {
        var deferred = {
            promise: null,
            resolve: null,
            reject: null,
        };
        deferred.promise = new Promise(function (resolve, reject) {
            deferred.resolve = resolve;
            deferred.reject = reject;
        });
        return deferred;
    }
    /**
     * ```js
     * import { UserSession } from '@esri/arcgis-rest-auth';
     * UserSession.beginOAuth2({
     *   // register an app of your own to create a unique clientId
     *   clientId: "abc123",
     *   redirectUri: 'https://yourapp.com/authenticate.html'
     * })
     *   .then(session)
     * // or
     * new UserSession({
     *   username: "jsmith",
     *   password: "123456"
     * })
     * // or
     * UserSession.deserialize(cache)
     * ```
     * Used to authenticate both ArcGIS Online and ArcGIS Enterprise users. `UserSession` includes helper methods for [OAuth 2.0](/arcgis-rest-js/guides/browser-authentication/) in both browser and server applications.
     */
    var UserSession = /** @class */ (function () {
        function UserSession(options) {
            this.clientId = options.clientId;
            this._refreshToken = options.refreshToken;
            this._refreshTokenExpires = options.refreshTokenExpires;
            this.username = options.username;
            this.password = options.password;
            this._token = options.token;
            this._tokenExpires = options.tokenExpires;
            this.portal = options.portal
                ? cleanUrl(options.portal)
                : "https://www.arcgis.com/sharing/rest";
            this.ssl = options.ssl;
            this.provider = options.provider || "arcgis";
            this.tokenDuration = options.tokenDuration || 20160;
            this.redirectUri = options.redirectUri;
            this.refreshTokenTTL = options.refreshTokenTTL || 20160;
            this.server = options.server;
            this.federatedServers = {};
            this.trustedDomains = [];
            // if a non-federated server was passed explicitly, it should be trusted.
            if (options.server) {
                // if the url includes more than '/arcgis/', trim the rest
                var root = this.getServerRootUrl(options.server);
                this.federatedServers[root] = {
                    token: options.token,
                    expires: options.tokenExpires,
                };
            }
            this._pendingTokenRequests = {};
        }
        Object.defineProperty(UserSession.prototype, "token", {
            /**
             * The current ArcGIS Online or ArcGIS Enterprise `token`.
             */
            get: function () {
                return this._token;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UserSession.prototype, "tokenExpires", {
            /**
             * The expiration time of the current `token`.
             */
            get: function () {
                return this._tokenExpires;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UserSession.prototype, "refreshToken", {
            /**
             * The current token to ArcGIS Online or ArcGIS Enterprise.
             */
            get: function () {
                return this._refreshToken;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UserSession.prototype, "refreshTokenExpires", {
            /**
             * The expiration time of the current `refreshToken`.
             */
            get: function () {
                return this._refreshTokenExpires;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(UserSession.prototype, "trustedServers", {
            /**
             * Deprecated, use `federatedServers` instead.
             *
             * @deprecated
             */
            get: function () {
                console.log("DEPRECATED: use federatedServers instead");
                return this.federatedServers;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Begins a new browser-based OAuth 2.0 sign in. If `options.popup` is `true` the
         * authentication window will open in a new tab/window and the function will return
         * Promise&lt;UserSession&gt;. Otherwise, the user will be redirected to the
         * authorization page in their current tab/window and the function will return `undefined`.
         *
         * @browserOnly
         */
        /* istanbul ignore next */
        UserSession.beginOAuth2 = function (options, win) {
            if (win === void 0) { win = window; }
            if (options.duration) {
                console.log("DEPRECATED: 'duration' is deprecated - use 'expiration' instead");
            }
            var _a = __assign({
                portal: "https://www.arcgis.com/sharing/rest",
                provider: "arcgis",
                expiration: 20160,
                popup: true,
                popupWindowFeatures: "height=400,width=600,menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes",
                state: options.clientId,
                locale: "",
            }, options), portal = _a.portal, provider = _a.provider, clientId = _a.clientId, expiration = _a.expiration, redirectUri = _a.redirectUri, popup = _a.popup, popupWindowFeatures = _a.popupWindowFeatures, state = _a.state, locale = _a.locale, params = _a.params;
            var url;
            if (provider === "arcgis") {
                url = portal + "/oauth2/authorize?client_id=" + clientId + "&response_type=token&expiration=" + (options.duration || expiration) + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&state=" + state + "&locale=" + locale;
            }
            else {
                url = portal + "/oauth2/social/authorize?client_id=" + clientId + "&socialLoginProviderName=" + provider + "&autoAccountCreateForSocial=true&response_type=token&expiration=" + (options.duration || expiration) + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&state=" + state + "&locale=" + locale;
            }
            // append additional params
            if (params) {
                url = url + "&" + encodeQueryString(params);
            }
            if (!popup) {
                win.location.href = url;
                return undefined;
            }
            var session = defer();
            win["__ESRI_REST_AUTH_HANDLER_" + clientId] = function (errorString, oauthInfoString) {
                if (errorString) {
                    var error = JSON.parse(errorString);
                    session.reject(new ArcGISAuthError(error.errorMessage, error.error));
                    return;
                }
                if (oauthInfoString) {
                    var oauthInfo = JSON.parse(oauthInfoString);
                    session.resolve(new UserSession({
                        clientId: clientId,
                        portal: portal,
                        ssl: oauthInfo.ssl,
                        token: oauthInfo.token,
                        tokenExpires: new Date(oauthInfo.expires),
                        username: oauthInfo.username,
                    }));
                }
            };
            win.open(url, "oauth-window", popupWindowFeatures);
            return session.promise;
        };
        /**
         * Completes a browser-based OAuth 2.0 sign in. If `options.popup` is `true` the user
         * will be returned to the previous window. Otherwise a new `UserSession`
         * will be returned. You must pass the same values for `options.popup` and
         * `options.portal` as you used in `beginOAuth2()`.
         *
         * @browserOnly
         */
        /* istanbul ignore next */
        UserSession.completeOAuth2 = function (options, win) {
            if (win === void 0) { win = window; }
            var _a = __assign({ portal: "https://www.arcgis.com/sharing/rest", popup: true }, options), portal = _a.portal, clientId = _a.clientId, popup = _a.popup;
            function completeSignIn(error, oauthInfo) {
                try {
                    var handlerFn = void 0;
                    var handlerFnName = "__ESRI_REST_AUTH_HANDLER_" + clientId;
                    if (popup) {
                        // Guard b/c IE does not support window.opener
                        if (win.opener) {
                            if (win.opener.parent && win.opener.parent[handlerFnName]) {
                                handlerFn = win.opener.parent[handlerFnName];
                            }
                            else if (win.opener && win.opener[handlerFnName]) {
                                // support pop-out oauth from within an iframe
                                handlerFn = win.opener[handlerFnName];
                            }
                        }
                        else {
                            // IE
                            if (win !== win.parent && win.parent && win.parent[handlerFnName]) {
                                handlerFn = win.parent[handlerFnName];
                            }
                        }
                        // if we have a handler fn, call it and close the window
                        if (handlerFn) {
                            handlerFn(error ? JSON.stringify(error) : undefined, JSON.stringify(oauthInfo));
                            win.close();
                            return undefined;
                        }
                    }
                }
                catch (e) {
                    throw new ArcGISAuthError("Unable to complete authentication. It's possible you specified popup based oAuth2 but no handler from \"beginOAuth2()\" present. This generally happens because the \"popup\" option differs between \"beginOAuth2()\" and \"completeOAuth2()\".");
                }
                if (error) {
                    throw new ArcGISAuthError(error.errorMessage, error.error);
                }
                return new UserSession({
                    clientId: clientId,
                    portal: portal,
                    ssl: oauthInfo.ssl,
                    token: oauthInfo.token,
                    tokenExpires: oauthInfo.expires,
                    username: oauthInfo.username,
                });
            }
            var params = decodeQueryString(win.location.hash);
            if (!params.access_token) {
                var error = void 0;
                var errorMessage = "Unknown error";
                if (params.error) {
                    error = params.error;
                    errorMessage = params.error_description;
                }
                return completeSignIn({ error: error, errorMessage: errorMessage });
            }
            var token = params.access_token;
            var expires = new Date(Date.now() + parseInt(params.expires_in, 10) * 1000 - 60 * 1000);
            var username = params.username;
            var ssl = params.ssl === "true";
            return completeSignIn(undefined, {
                token: token,
                expires: expires,
                ssl: ssl,
                username: username,
            });
        };
        /**
         * Request session information from the parent application
         *
         * When an application is embedded into another application via an IFrame, the embedded app can
         * use `window.postMessage` to request credentials from the host application. This function wraps
         * that behavior.
         *
         * The ArcGIS API for Javascript has this built into the Identity Manager as of the 4.19 release.
         *
         * Note: The parent application will not respond if the embedded app's origin is not:
         * - the same origin as the parent or *.arcgis.com (JSAPI)
         * - in the list of valid child origins (REST-JS)
         *
         *
         * @param parentOrigin origin of the parent frame. Passed into the embedded application as `parentOrigin` query param
         * @browserOnly
         */
        UserSession.fromParent = function (parentOrigin, win) {
            /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
            if (!win && window) {
                win = window;
            }
            // Declare handler outside of promise scope so we can detach it
            var handler;
            // return a promise that will resolve when the handler receives
            // session information from the correct origin
            return new Promise(function (resolve, reject) {
                // create an event handler that just wraps the parentMessageHandler
                handler = function (event) {
                    // ensure we only listen to events from the parent
                    if (event.source === win.parent && event.data) {
                        try {
                            return resolve(UserSession.parentMessageHandler(event));
                        }
                        catch (err) {
                            return reject(err);
                        }
                    }
                };
                // add listener
                win.addEventListener("message", handler, false);
                win.parent.postMessage({ type: "arcgis:auth:requestCredential" }, parentOrigin);
            }).then(function (session) {
                win.removeEventListener("message", handler, false);
                return session;
            });
        };
        /**
         * Begins a new server-based OAuth 2.0 sign in. This will redirect the user to
         * the ArcGIS Online or ArcGIS Enterprise authorization page.
         *
         * @nodeOnly
         */
        UserSession.authorize = function (options, response) {
            if (options.duration) {
                console.log("DEPRECATED: 'duration' is deprecated - use 'expiration' instead");
            }
            var _a = __assign({ portal: "https://arcgis.com/sharing/rest", expiration: 20160 }, options), portal = _a.portal, clientId = _a.clientId, expiration = _a.expiration, redirectUri = _a.redirectUri;
            response.writeHead(301, {
                Location: portal + "/oauth2/authorize?client_id=" + clientId + "&expiration=" + (options.duration || expiration) + "&response_type=code&redirect_uri=" + encodeURIComponent(redirectUri),
            });
            response.end();
        };
        /**
         * Completes the server-based OAuth 2.0 sign in process by exchanging the `authorizationCode`
         * for a `access_token`.
         *
         * @nodeOnly
         */
        UserSession.exchangeAuthorizationCode = function (options, authorizationCode) {
            var _a = __assign({
                portal: "https://www.arcgis.com/sharing/rest",
                refreshTokenTTL: 20160,
            }, options), portal = _a.portal, clientId = _a.clientId, redirectUri = _a.redirectUri, refreshTokenTTL = _a.refreshTokenTTL;
            return fetchToken(portal + "/oauth2/token", {
                params: {
                    grant_type: "authorization_code",
                    client_id: clientId,
                    redirect_uri: redirectUri,
                    code: authorizationCode,
                },
            }).then(function (response) {
                return new UserSession({
                    clientId: clientId,
                    portal: portal,
                    ssl: response.ssl,
                    redirectUri: redirectUri,
                    refreshToken: response.refreshToken,
                    refreshTokenTTL: refreshTokenTTL,
                    refreshTokenExpires: new Date(Date.now() + (refreshTokenTTL - 1) * 60 * 1000),
                    token: response.token,
                    tokenExpires: response.expires,
                    username: response.username,
                });
            });
        };
        UserSession.deserialize = function (str) {
            var options = JSON.parse(str);
            return new UserSession({
                clientId: options.clientId,
                refreshToken: options.refreshToken,
                refreshTokenExpires: new Date(options.refreshTokenExpires),
                username: options.username,
                password: options.password,
                token: options.token,
                tokenExpires: new Date(options.tokenExpires),
                portal: options.portal,
                ssl: options.ssl,
                tokenDuration: options.tokenDuration,
                redirectUri: options.redirectUri,
                refreshTokenTTL: options.refreshTokenTTL,
            });
        };
        /**
         * Translates authentication from the format used in the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).
         *
         * ```js
         * UserSession.fromCredential({
         *   userId: "jsmith",
         *   token: "secret"
         * });
         * ```
         *
         * @returns UserSession
         */
        UserSession.fromCredential = function (credential) {
            // At ArcGIS Online 9.1, credentials no longer include the ssl and expires properties
            // Here, we provide default values for them to cover this condition
            var ssl = typeof credential.ssl !== "undefined" ? credential.ssl : true;
            var expires = credential.expires || Date.now() + 7200000; /* 2 hours */
            return new UserSession({
                portal: credential.server.includes("sharing/rest")
                    ? credential.server
                    : credential.server + "/sharing/rest",
                ssl: ssl,
                token: credential.token,
                username: credential.userId,
                tokenExpires: new Date(expires),
            });
        };
        /**
         * Handle the response from the parent
         * @param event DOM Event
         */
        UserSession.parentMessageHandler = function (event) {
            if (event.data.type === "arcgis:auth:credential") {
                return UserSession.fromCredential(event.data.credential);
            }
            if (event.data.type === "arcgis:auth:error") {
                var err = new Error(event.data.error.message);
                err.name = event.data.error.name;
                throw err;
            }
            else {
                throw new Error("Unknown message type.");
            }
        };
        /**
         * Returns authentication in a format useable in the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/).
         *
         * ```js
         * esriId.registerToken(session.toCredential());
         * ```
         *
         * @returns ICredential
         */
        UserSession.prototype.toCredential = function () {
            return {
                expires: this.tokenExpires.getTime(),
                server: this.portal,
                ssl: this.ssl,
                token: this.token,
                userId: this.username,
            };
        };
        /**
         * Returns information about the currently logged in [user](https://developers.arcgis.com/rest/users-groups-and-items/user.htm). Subsequent calls will *not* result in additional web traffic.
         *
         * ```js
         * session.getUser()
         *   .then(response => {
         *     console.log(response.role); // "org_admin"
         *   })
         * ```
         *
         * @param requestOptions - Options for the request. NOTE: `rawResponse` is not supported by this operation.
         * @returns A Promise that will resolve with the data from the response.
         */
        UserSession.prototype.getUser = function (requestOptions) {
            var _this = this;
            if (this._pendingUserRequest) {
                return this._pendingUserRequest;
            }
            else if (this._user) {
                return Promise.resolve(this._user);
            }
            else {
                var url = this.portal + "/community/self";
                var options = __assign(__assign({ httpMethod: "GET", authentication: this }, requestOptions), { rawResponse: false });
                this._pendingUserRequest = request(url, options).then(function (response) {
                    _this._user = response;
                    _this._pendingUserRequest = null;
                    return response;
                });
                return this._pendingUserRequest;
            }
        };
        /**
         * Returns information about the currently logged in user's [portal](https://developers.arcgis.com/rest/users-groups-and-items/portal-self.htm). Subsequent calls will *not* result in additional web traffic.
         *
         * ```js
         * session.getPortal()
         *   .then(response => {
         *     console.log(portal.name); // "City of ..."
         *   })
         * ```
         *
         * @param requestOptions - Options for the request. NOTE: `rawResponse` is not supported by this operation.
         * @returns A Promise that will resolve with the data from the response.
         */
        UserSession.prototype.getPortal = function (requestOptions) {
            var _this = this;
            if (this._pendingPortalRequest) {
                return this._pendingPortalRequest;
            }
            else if (this._portalInfo) {
                return Promise.resolve(this._portalInfo);
            }
            else {
                var url = this.portal + "/portals/self";
                var options = __assign(__assign({ httpMethod: "GET", authentication: this }, requestOptions), { rawResponse: false });
                this._pendingPortalRequest = request(url, options).then(function (response) {
                    _this._portalInfo = response;
                    _this._pendingPortalRequest = null;
                    return response;
                });
                return this._pendingPortalRequest;
            }
        };
        /**
         * Returns the username for the currently logged in [user](https://developers.arcgis.com/rest/users-groups-and-items/user.htm). Subsequent calls will *not* result in additional web traffic. This is also used internally when a username is required for some requests but is not present in the options.
         *
         *    * ```js
         * session.getUsername()
         *   .then(response => {
         *     console.log(response); // "casey_jones"
         *   })
         * ```
         */
        UserSession.prototype.getUsername = function () {
            if (this.username) {
                return Promise.resolve(this.username);
            }
            else if (this._user) {
                return Promise.resolve(this._user.username);
            }
            else {
                return this.getUser().then(function (user) {
                    return user.username;
                });
            }
        };
        /**
         * Gets an appropriate token for the given URL. If `portal` is ArcGIS Online and
         * the request is to an ArcGIS Online domain `token` will be used. If the request
         * is to the current `portal` the current `token` will also be used. However if
         * the request is to an unknown server we will validate the server with a request
         * to our current `portal`.
         */
        UserSession.prototype.getToken = function (url, requestOptions) {
            if (canUseOnlineToken(this.portal, url)) {
                return this.getFreshToken(requestOptions);
            }
            else if (new RegExp(this.portal, "i").test(url)) {
                return this.getFreshToken(requestOptions);
            }
            else {
                return this.getTokenForServer(url, requestOptions);
            }
        };
        /**
         * Get application access information for the current user
         * see `validateAppAccess` function for details
         *
         * @param clientId application client id
         */
        UserSession.prototype.validateAppAccess = function (clientId) {
            return this.getToken(this.portal).then(function (token) {
                return validateAppAccess(token, clientId);
            });
        };
        UserSession.prototype.toJSON = function () {
            return {
                clientId: this.clientId,
                refreshToken: this.refreshToken,
                refreshTokenExpires: this.refreshTokenExpires,
                username: this.username,
                password: this.password,
                token: this.token,
                tokenExpires: this.tokenExpires,
                portal: this.portal,
                ssl: this.ssl,
                tokenDuration: this.tokenDuration,
                redirectUri: this.redirectUri,
                refreshTokenTTL: this.refreshTokenTTL,
            };
        };
        UserSession.prototype.serialize = function () {
            return JSON.stringify(this);
        };
        /**
         * For a "Host" app that embeds other platform apps via iframes, after authenticating the user
         * and creating a UserSession, the app can then enable "post message" style authentication by calling
         * this method.
         *
         * Internally this adds an event listener on window for the `message` event
         *
         * @param validChildOrigins Array of origins that are allowed to request authentication from the host app
         */
        UserSession.prototype.enablePostMessageAuth = function (validChildOrigins, win) {
            /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
            if (!win && window) {
                win = window;
            }
            this._hostHandler = this.createPostMessageHandler(validChildOrigins);
            win.addEventListener("message", this._hostHandler, false);
        };
        /**
         * For a "Host" app that has embedded other platform apps via iframes, when the host needs
         * to transition routes, it should call `UserSession.disablePostMessageAuth()` to remove
         * the event listener and prevent memory leaks
         */
        UserSession.prototype.disablePostMessageAuth = function (win) {
            /* istanbul ignore next: must pass in a mockwindow for tests so we can't cover the other branch */
            if (!win && window) {
                win = window;
            }
            win.removeEventListener("message", this._hostHandler, false);
        };
        /**
         * Manually refreshes the current `token` and `tokenExpires`.
         */
        UserSession.prototype.refreshSession = function (requestOptions) {
            // make sure subsequent calls to getUser() don't returned cached metadata
            this._user = null;
            if (this.username && this.password) {
                return this.refreshWithUsernameAndPassword(requestOptions);
            }
            if (this.clientId && this.refreshToken) {
                return this.refreshWithRefreshToken();
            }
            return Promise.reject(new ArcGISAuthError("Unable to refresh token."));
        };
        /**
         * Determines the root of the ArcGIS Server or Portal for a given URL.
         *
         * @param url the URl to determine the root url for.
         */
        UserSession.prototype.getServerRootUrl = function (url) {
            var root = cleanUrl(url).split(/\/rest(\/admin)?\/services(?:\/|#|\?|$)/)[0];
            var _a = root.match(/(https?:\/\/)(.+)/); _a[0]; var protocol = _a[1], domainAndPath = _a[2];
            var _b = domainAndPath.split("/"), domain = _b[0], path = _b.slice(1);
            // only the domain is lowercased because in some cases an org id might be
            // in the path which cannot be lowercased.
            return "" + protocol + domain.toLowerCase() + "/" + path.join("/");
        };
        /**
         * Returns the proper [`credentials`] option for `fetch` for a given domain.
         * See [trusted server](https://enterprise.arcgis.com/en/portal/latest/administer/windows/configure-security.htm#ESRI_SECTION1_70CC159B3540440AB325BE5D89DBE94A).
         * Used internally by underlying request methods to add support for specific security considerations.
         *
         * @param url The url of the request
         * @returns "include" or "same-origin"
         */
        UserSession.prototype.getDomainCredentials = function (url) {
            if (!this.trustedDomains || !this.trustedDomains.length) {
                return "same-origin";
            }
            return this.trustedDomains.some(function (domainWithProtocol) {
                return url.startsWith(domainWithProtocol);
            })
                ? "include"
                : "same-origin";
        };
        /**
         * Return a function that closes over the validOrigins array and
         * can be used as an event handler for the `message` event
         *
         * @param validOrigins Array of valid origins
         */
        UserSession.prototype.createPostMessageHandler = function (validOrigins) {
            var _this = this;
            // return a function that closes over the validOrigins and
            // has access to the credential
            return function (event) {
                // Verify that the origin is valid
                // Note: do not use regex's here. validOrigins is an array so we're checking that the event's origin
                // is in the array via exact match. More info about avoiding postMessage xss issues here
                // https://jlajara.gitlab.io/web/2020/07/17/Dom_XSS_PostMessage_2.html#tipsbypasses-in-postmessage-vulnerabilities
                var isValidOrigin = validOrigins.indexOf(event.origin) > -1;
                // JSAPI handles this slightly differently - instead of checking a list, it will respond if
                // event.origin === window.location.origin || event.origin.endsWith('.arcgis.com')
                // For Hub, and to enable cross domain debugging with port's in urls, we are opting to
                // use a list of valid origins
                // Ensure the message type is something we want to handle
                var isValidType = event.data.type === "arcgis:auth:requestCredential";
                var isTokenValid = _this.tokenExpires.getTime() > Date.now();
                if (isValidOrigin && isValidType) {
                    var msg = {};
                    if (isTokenValid) {
                        var credential = _this.toCredential();
                        // arcgis:auth:error with {name: "", message: ""}
                        // the following line allows us to conform to our spec without changing other depended-on functionality
                        // https://github.com/Esri/arcgis-rest-js/blob/master/packages/arcgis-rest-auth/post-message-auth-spec.md#arcgisauthcredential
                        credential.server = credential.server.replace("/sharing/rest", "");
                        msg = { type: "arcgis:auth:credential", credential: credential };
                    }
                    else {
                        // Return an error
                        msg = {
                            type: "arcgis:auth:error",
                            error: {
                                name: "tokenExpiredError",
                                message: "Session token was expired, and not returned to the child application",
                            },
                        };
                    }
                    event.source.postMessage(msg, event.origin);
                }
            };
        };
        /**
         * Validates that a given URL is properly federated with our current `portal`.
         * Attempts to use the internal `federatedServers` cache first.
         */
        UserSession.prototype.getTokenForServer = function (url, requestOptions) {
            var _this = this;
            // requests to /rest/services/ and /rest/admin/services/ are both valid
            // Federated servers may have inconsistent casing, so lowerCase it
            var root = this.getServerRootUrl(url);
            var existingToken = this.federatedServers[root];
            if (existingToken &&
                existingToken.expires &&
                existingToken.expires.getTime() > Date.now()) {
                return Promise.resolve(existingToken.token);
            }
            if (this._pendingTokenRequests[root]) {
                return this._pendingTokenRequests[root];
            }
            this._pendingTokenRequests[root] = this.fetchAuthorizedDomains().then(function () {
                return request(root + "/rest/info", {
                    credentials: _this.getDomainCredentials(url),
                })
                    .then(function (response) {
                    if (response.owningSystemUrl) {
                        /**
                         * if this server is not owned by this portal
                         * bail out with an error since we know we wont
                         * be able to generate a token
                         */
                        if (!isFederated(response.owningSystemUrl, _this.portal)) {
                            throw new ArcGISAuthError(url + " is not federated with " + _this.portal + ".", "NOT_FEDERATED");
                        }
                        else {
                            /**
                             * if the server is federated, use the relevant token endpoint.
                             */
                            return request(response.owningSystemUrl + "/sharing/rest/info", requestOptions);
                        }
                    }
                    else if (response.authInfo &&
                        _this.federatedServers[root] !== undefined) {
                        /**
                         * if its a stand-alone instance of ArcGIS Server that doesn't advertise
                         * federation, but the root server url is recognized, use its built in token endpoint.
                         */
                        return Promise.resolve({
                            authInfo: response.authInfo,
                        });
                    }
                    else {
                        throw new ArcGISAuthError(url + " is not federated with any portal and is not explicitly trusted.", "NOT_FEDERATED");
                    }
                })
                    .then(function (response) {
                    return response.authInfo.tokenServicesUrl;
                })
                    .then(function (tokenServicesUrl) {
                    // an expired token cant be used to generate a new token
                    if (_this.token && _this.tokenExpires.getTime() > Date.now()) {
                        return generateToken(tokenServicesUrl, {
                            params: {
                                token: _this.token,
                                serverUrl: url,
                                expiration: _this.tokenDuration,
                                client: "referer",
                            },
                        });
                        // generate an entirely fresh token if necessary
                    }
                    else {
                        return generateToken(tokenServicesUrl, {
                            params: {
                                username: _this.username,
                                password: _this.password,
                                expiration: _this.tokenDuration,
                                client: "referer",
                            },
                        }).then(function (response) {
                            _this._token = response.token;
                            _this._tokenExpires = new Date(response.expires);
                            return response;
                        });
                    }
                })
                    .then(function (response) {
                    _this.federatedServers[root] = {
                        expires: new Date(response.expires),
                        token: response.token,
                    };
                    delete _this._pendingTokenRequests[root];
                    return response.token;
                });
            });
            return this._pendingTokenRequests[root];
        };
        /**
         * Returns an unexpired token for the current `portal`.
         */
        UserSession.prototype.getFreshToken = function (requestOptions) {
            var _this = this;
            if (this.token && !this.tokenExpires) {
                return Promise.resolve(this.token);
            }
            if (this.token &&
                this.tokenExpires &&
                this.tokenExpires.getTime() > Date.now()) {
                return Promise.resolve(this.token);
            }
            if (!this._pendingTokenRequests[this.portal]) {
                this._pendingTokenRequests[this.portal] = this.refreshSession(requestOptions).then(function (session) {
                    _this._pendingTokenRequests[_this.portal] = null;
                    return session.token;
                });
            }
            return this._pendingTokenRequests[this.portal];
        };
        /**
         * Refreshes the current `token` and `tokenExpires` with `username` and
         * `password`.
         */
        UserSession.prototype.refreshWithUsernameAndPassword = function (requestOptions) {
            var _this = this;
            var options = __assign({ params: {
                    username: this.username,
                    password: this.password,
                    expiration: this.tokenDuration,
                } }, requestOptions);
            return generateToken(this.portal + "/generateToken", options).then(function (response) {
                _this._token = response.token;
                _this._tokenExpires = new Date(response.expires);
                return _this;
            });
        };
        /**
         * Refreshes the current `token` and `tokenExpires` with `refreshToken`.
         */
        UserSession.prototype.refreshWithRefreshToken = function (requestOptions) {
            var _this = this;
            if (this.refreshToken &&
                this.refreshTokenExpires &&
                this.refreshTokenExpires.getTime() < Date.now()) {
                return this.refreshRefreshToken(requestOptions);
            }
            var options = __assign({ params: {
                    client_id: this.clientId,
                    refresh_token: this.refreshToken,
                    grant_type: "refresh_token",
                } }, requestOptions);
            return fetchToken(this.portal + "/oauth2/token", options).then(function (response) {
                _this._token = response.token;
                _this._tokenExpires = response.expires;
                return _this;
            });
        };
        /**
         * Exchanges an unexpired `refreshToken` for a new one, also updates `token` and
         * `tokenExpires`.
         */
        UserSession.prototype.refreshRefreshToken = function (requestOptions) {
            var _this = this;
            var options = __assign({ params: {
                    client_id: this.clientId,
                    refresh_token: this.refreshToken,
                    redirect_uri: this.redirectUri,
                    grant_type: "exchange_refresh_token",
                } }, requestOptions);
            return fetchToken(this.portal + "/oauth2/token", options).then(function (response) {
                _this._token = response.token;
                _this._tokenExpires = response.expires;
                _this._refreshToken = response.refreshToken;
                _this._refreshTokenExpires = new Date(Date.now() + (_this.refreshTokenTTL - 1) * 60 * 1000);
                return _this;
            });
        };
        /**
         * ensures that the authorizedCrossOriginDomains are obtained from the portal and cached
         * so we can check them later.
         *
         * @returns this
         */
        UserSession.prototype.fetchAuthorizedDomains = function () {
            var _this = this;
            // if this token is for a specific server or we don't have a portal
            // don't get the portal info because we cant get the authorizedCrossOriginDomains
            if (this.server || !this.portal) {
                return Promise.resolve(this);
            }
            return this.getPortal().then(function (portalInfo) {
                /**
                 * Specific domains can be configured as secure.esri.com or https://secure.esri.com this
                 * normalizes to https://secure.esri.com so we can use startsWith later.
                 */
                if (portalInfo.authorizedCrossOriginDomains &&
                    portalInfo.authorizedCrossOriginDomains.length) {
                    _this.trustedDomains = portalInfo.authorizedCrossOriginDomains
                        .filter(function (d) { return !d.startsWith("http://"); })
                        .map(function (d) {
                        if (d.startsWith("https://")) {
                            return d;
                        }
                        else {
                            return "https://" + d;
                        }
                    });
                }
                return _this;
            });
        };
        return UserSession;
    }());

    /**
     * Remove any serialized sessions associated with the passed clientId
     * from a browser's local storage
     * @param clientId oAuth Client Id
     * @param win optional window (used for testing)
     */
    function clearSession(clientId, 
    /* istanbul ignore next */
    win) {
        if (win === void 0) { win = window; }
        if (win.localStorage) {
            win.localStorage.removeItem("__CONTEXT_" + clientId);
        }
    }
    /**
     * Re-hydrate a UserSession from a browser's local storage.
     * If not found,
     * @param clientId oAuth Client Id
     * @param win optional window (used for testing)
     * @returns
     */
    function getSession(clientId, 
    /* istanbul ignore next */
    win) {
        if (win === void 0) { win = window; }
        var result = null;
        if (win.localStorage) {
            var serializedSession = win.localStorage.getItem("__CONTEXT_" + clientId);
            if (serializedSession) {
                result = UserSession.deserialize(serializedSession);
            }
        }
        return result;
    }
    /**
     * Serialize a UserSession into a browser's local storage
     * @param clientId oAuth Client Id
     * @param session UserSession
     * @param win optional window (used for testing)
     */
    function saveSession(clientId, session, 
    /* istanbul ignore next */
    win) {
        if (win === void 0) { win = window; }
        if (win.localStorage) {
            win.localStorage.setItem("__CONTEXT_" + clientId, session.serialize());
        }
    }

    /**
     *   Dasherize a string
     *
     *  ```javascript
     *  import { dasherize } from '@esri/hub-common';
     *  dasherize('innerHTML');                // 'inner-html'
     *  dasherize('action_name');              // 'action-name'
     *  dasherize('css-class-name');           // 'css-class-name'
     *  dasherize('my favorite items');        // 'my-favorite-items'
     *  dasherize('privateDocs/ownerInvoice';  // 'private-docs/owner-invoice'
     *  ```
     *
     *  Extracted and modified from Ember.js source code - MIT license
     *  @param value
     *  @returns
     */
    function dasherize(value) {
        var DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g;
        var DASHERIZE_REGEXP = /[ _]/g;
        return value
            .replace(DECAMELIZE_REGEXP, "$1_$2")
            .toLowerCase()
            .replace(DASHERIZE_REGEXP, "-");
    }

    /**
     * Checks for fundamental privilege required by all access checks
     * @param {IUser} user
     * @returns {boolean}
     */
    function hasBasePriv(user) {
        var _a = user.privileges, privileges = _a === void 0 ? [] : _a;
        return includes(privileges, "portal:user:createItem");
    }

    /**
     * Checks if user has access to edit an event in Hub
     * @param {IEventModel} model consolidated event model as consumed by Hub, contains the event feature, related initiative model, and attendees group
     * @param {IUser} user
     * @returns {boolean}
     */
    function canEditEvent(model, user) {
        var res = false;
        if (hasBasePriv(user)) {
            var coreTeamId = getProp(model, "initiative.item.properties.collaborationGroupId");
            var _a = user.groups, groups = _a === void 0 ? [] : _a;
            res = !!coreTeamId && !!findBy(groups, "id", coreTeamId);
        }
        return res;
    }

    /**
     * Checks if user has access to edit an item in Hub
     * @param {IItem} item
     * @param {IUser} user
     * @returns {boolean}
     */
    function canEditItem(item, user) {
        var res = false;
        var itemControls = ["admin", "update"];
        var itemControl = item.itemControl, owner = item.owner, itemOrgId = item.orgId;
        var roleId = user.roleId, role = user.role, username = user.username, userGroups = user.groups, userOrgId = user.orgId;
        var hasItemControl = includes(itemControls, itemControl);
        var isOwner = !!owner && owner === username;
        var isOrgItem = !!itemOrgId && itemOrgId === userOrgId;
        var isItemOrgAdmin = !!isOrgItem && !roleId && role === "org_admin";
        var hasPlatformControl = hasItemControl || isOwner || isItemOrgAdmin;
        var hasPriv = hasBasePriv(user);
        if (hasPriv && hasPlatformControl) {
            res = true;
        }
        else if (hasPriv) {
            var itemGroups_1 = __spreadArrays((getProp(item, "groupIds") || []), [
                getProp(item, "properties.collaborationGroupId")
            ]);
            var isGroupEditable = function (group) {
                return isUpdateGroup(group) && includes(itemGroups_1, group.id);
            };
            res = userGroups.some(isGroupEditable);
        }
        return res;
    }

    var REQUIRED_PRIVS = [
        "portal:user:createGroup",
        "portal:user:createItem",
        "portal:user:shareToGroup",
        "portal:user:viewOrgGroups",
        "portal:user:viewOrgItems"
    ];
    /**
     * Checks if user has access to content library in Hub
     * In Hub Home context, user access requires additional privileges
     * In initiative context, check is delegated to canEditItem for the initiative site item
     * @param {IItem} item
     * @param {IUser} user
     * @returns {boolean}
     */
    function canEditSiteContent(item, user) {
        var res = false;
        var isDefaultHubHome = getProp(item, "properties.isDefaultHubHome");
        var hasPriv = hasBasePriv(user);
        if (!isDefaultHubHome && hasPriv) {
            res = canEditItem(item, user);
        }
        else if (hasPriv) {
            var userOrgId = user.orgId;
            var itemOrgId = item.orgId;
            var sameOrg = !!userOrgId && userOrgId === itemOrgId;
            if (sameOrg) {
                var privileges_1 = user.privileges || [];
                res = REQUIRED_PRIVS.every(function (privilege) { return includes(privileges_1, privilege); });
            }
        }
        return res;
    }

    /**
     * Checks if user has access to edit site in Hub
     * Currently, Hub Home sites are not editable
     * In initiative context, check is delegated to canEditItem for the initiative site item
     * @param {IItem} model
     * @param {IUser} user
     * @returns {boolean}
     */
    function canEditSite(model, user) {
        var res = false;
        var isDefaultHubHome = getProp(model, "properties.isDefaultHubHome");
        if (!isDefaultHubHome && hasBasePriv(user)) {
            res = canEditItem(model, user);
        }
        return res;
    }

    /**
     * @private
     */
    function buildUrl(params) {
        var host = params.host, path = params.path, query = params.query;
        var baseUrl = host.endsWith("/") ? host : host + "/";
        var url = new URL(path, baseUrl);
        url.search = buildQueryString(query);
        return url.toString();
    }
    function buildQueryString(params) {
        if (params === void 0) { params = {}; }
        var queryParams = Object.keys(params)
            .filter(function (key) {
            return params[key] !== undefined;
        })
            .reduce(function (acc, key) {
            acc[key] = params[key];
            return acc;
        }, {});
        return new URLSearchParams(queryParams).toString();
    }

    /* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Helper that returns the appropriate portal url for a given request. `requestOptions.portal` is given
     * precedence over `authentication.portal`. If neither `portal` nor `authentication` is present,
     * `www.arcgis.com/sharing/rest` is returned.
     *
     * @param requestOptions - Request options that may have authentication manager
     * @returns Portal url to be used in API requests
     */
    function getPortalUrl$1(requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        // use portal in options if specified
        if (requestOptions.portal) {
            return cleanUrl(requestOptions.portal);
        }
        // if auth was passed, use that portal
        if (requestOptions.authentication) {
            // the portal url is already scrubbed in the auth package
            return requestOptions.authentication.portal;
        }
        // default to arcgis.com
        return "https://www.arcgis.com/sharing/rest";
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Serialize an item and its data into a json format accepted by the Portal API for create and update operations
     *
     * @param item Item to be serialized
     * @returns a formatted json object to be sent to Portal
     */
    function serializeItem(item) {
        // create a clone so we're not messing with the original
        var clone = JSON.parse(JSON.stringify(item));
        // binary data needs POSTed as a `file`
        // JSON object literals should be passed as `text`.
        if (clone.data) {
            (typeof Blob !== "undefined" && item.data instanceof Blob) ||
                // Node.js doesn't implement Blob
                item.data.constructor.name === "ReadStream"
                ? (clone.file = item.data)
                : (clone.text = item.data);
            delete clone.data;
        }
        return clone;
    }
    /**
     * `requestOptions.owner` is given priority, `requestOptions.item.owner` will be checked next. If neither are present, `authentication.getUserName()` will be used instead.
     */
    function determineOwner(requestOptions) {
        if (requestOptions.owner) {
            return Promise.resolve(requestOptions.owner);
        }
        else if (requestOptions.item && requestOptions.item.owner) {
            return Promise.resolve(requestOptions.item.owner);
        }
        else if (requestOptions.authentication &&
            requestOptions.authentication.getUsername) {
            return requestOptions.authentication.getUsername();
        }
        else {
            return Promise.reject(new Error("Could not determine the owner of this item. Pass the `owner`, `item.owner`, or `authentication` option."));
        }
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { updateItem } from "@esri/arcgis-rest-portal";
     * //
     * updateItem({
     *   item: {
     *     id: "3ef",
     *     description: "A three hour tour"
     *   },
     *   authentication
     * })
     *   .then(response)
     * ```
     * Update an Item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm) for more information.
     *
     * @param requestOptions - Options for the request.
     * @returns A Promise that updates an item.
     */
    function updateItem(requestOptions) {
        return determineOwner(requestOptions).then(function (owner) {
            var url = requestOptions.folderId
                ? getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/" + requestOptions.folderId + "/items/" + requestOptions.item.id + "/update"
                : getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.item.id + "/update";
            // serialize the item into something Portal will accept
            requestOptions.params = __assign(__assign({}, requestOptions.params), serializeItem(requestOptions.item));
            return request(url, requestOptions);
        });
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { addItemResource } from "@esri/arcgis-rest-portal";
     * //
     * // Add a file resource
     * addItemResource({
     *   id: '3ef',
     *   resource: file,
     *   name: 'bigkahuna.jpg',
     *   authentication
     * })
     *   .then(response)
     * //
     * // Add a text resource
     * addItemResource({
     *   id: '4fg',
     *   content: "Text content",
     *   name: 'bigkahuna.txt',
     *   authentication
     * })
     *   .then(response)
     * ```
     * Add a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-resources.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise to add item resources.
     */
    function addItemResource(requestOptions) {
        return determineOwner(requestOptions).then(function (owner) {
            var url = getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/addResources";
            requestOptions.params = __assign({ file: requestOptions.resource, fileName: requestOptions.name, resourcesPrefix: requestOptions.prefix, text: requestOptions.content, access: requestOptions.private ? "private" : "inherit" }, requestOptions.params);
            return request(url, requestOptions);
        });
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { createItemInFolder } from "@esri/arcgis-rest-portal";
     * //
     * createItemInFolder({
     *   item: {
     *     title: "The Amazing Voyage",
     *     type: "Web Map"
     *   },
     *   folderId: 'fe8',
     *   authentication
     * })
     * ```
     * Create an item in a folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
     *
     * @param requestOptions = Options for the request
     */
    function createItemInFolder(requestOptions) {
        if (requestOptions.multipart && !requestOptions.filename) {
            return Promise.reject(new Error("The filename is required for a multipart request."));
        }
        return determineOwner(requestOptions).then(function (owner) {
            var baseUrl = getPortalUrl$1(requestOptions) + "/content/users/" + owner;
            var url = baseUrl + "/addItem";
            if (requestOptions.folderId) {
                url = baseUrl + "/" + requestOptions.folderId + "/addItem";
            }
            requestOptions.params = __assign(__assign({}, requestOptions.params), serializeItem(requestOptions.item));
            // serialize the item into something Portal will accept
            var options = appendCustomParams(requestOptions, [
                "owner",
                "folderId",
                "file",
                "dataUrl",
                "text",
                "async",
                "multipart",
                "filename",
                "overwrite"
            ], {
                params: __assign({}, requestOptions.params)
            });
            return request(url, options);
        });
    }
    /**
     * ```js
     * import { createItem } from "@esri/arcgis-rest-portal";
     * //
     * createItem({
     *   item: {
     *     title: "The Amazing Voyage",
     *     type: "Web Map"
     *   },
     *   authentication
     * })
     * ```
     * Create an Item in the user's root folder. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise that creates an item.
     */
    function createItem(requestOptions) {
        // delegate to createItemInFolder placing in the root of the filestore
        var options = __assign({ folderId: null }, requestOptions);
        return createItemInFolder(options);
    }

    // eslint-disable-next-line no-control-regex
    var CONTROL_CHAR_MATCHER = /[\x00-\x1F\x7F-\x9F\xA0]/g;
    /**
     * Returns a new string with all control characters removed.
     *
     * Doesn't remove characters from input string.
     *
     * @param str - the string to scrub
     */
    function scrubControlChars(str) {
        return str.replace(CONTROL_CHAR_MATCHER, "");
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```
     * import { getItem } from "@esri/arcgis-rest-portal";
     * //
     * getItem("ae7")
     *   .then(response);
     * // or
     * getItem("ae7", { authentication })
     *   .then(response)
     * ```
     * Get an item by id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item.htm) for more information.
     *
     * @param id - Item Id
     * @param requestOptions - Options for the request
     * @returns A Promise that will resolve with the data from the response.
     */
    function getItem(id, requestOptions) {
        var url = getItemBaseUrl(id, requestOptions);
        // default to a GET request
        var options = __assign({ httpMethod: "GET" }, requestOptions);
        return request(url, options);
    }
    /**
     * Get the fully qualified base URL to the REST end point for an item.
     * @param id Item Id
     * @param portalUrlOrRequestOptions a portal URL or request options
     * @returns URL to the item's REST end point, defaults to `https://www.arcgis.com/sharing/rest/content/items/{id}`
     */
    var getItemBaseUrl = function (id, portalUrlOrRequestOptions) {
        var portalUrl = typeof portalUrlOrRequestOptions === "string"
            ? portalUrlOrRequestOptions
            : getPortalUrl$1(portalUrlOrRequestOptions);
        return portalUrl + "/content/items/" + id;
    };
    /**
     * ```
     * import { getItemData } from "@esri/arcgis-rest-portal";
     * //
     * getItemData("ae7")
     *   .then(response)
     * // or
     * getItemData("ae7", { authentication })
     *   .then(response)
     * ```
     * Get the /data for an item. If no data exists, returns `undefined`. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item-data.htm) for more information.
     * @param id - Item Id
     * @param requestOptions - Options for the request
     * @returns A Promise that will resolve with the json data for the item.
     */
    function getItemData(id, requestOptions) {
        var url = getItemBaseUrl(id, requestOptions) + "/data";
        // default to a GET request
        var options = __assign({ httpMethod: "GET", params: {} }, requestOptions);
        if (options.file) {
            options.params.f = null;
        }
        return request(url, options).catch(function (err) {
            /* if the item doesn't include data, the response will be empty
               and the internal call to response.json() will fail */
            var emptyResponseErr = RegExp(/The string did not match the expected pattern|(Unexpected end of (JSON input|data at line 1 column 1))/i);
            /* istanbul ignore else */
            if (emptyResponseErr.test(err.message)) {
                return;
            }
            else
                throw err;
        });
    }
    /**
     * ```
     * import { getRelatedItems } from "@esri/arcgis-rest-portal";
     * //
     * getRelatedItems({
     *   id: "ae7",
     *   relationshipType: "Service2Layer" // or several ["Service2Layer", "Map2Area"]
     * })
     *   .then(response)
     * ```
     * Get the related items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/related-items.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise to get some item resources.
     */
    function getRelatedItems(requestOptions) {
        var url = getItemBaseUrl(requestOptions.id, requestOptions) + "/relatedItems";
        var options = __assign({ httpMethod: "GET", params: {
                direction: requestOptions.direction
            } }, requestOptions);
        if (typeof requestOptions.relationshipType === "string") {
            options.params.relationshipType = requestOptions.relationshipType;
        }
        else {
            options.params.relationshipTypes = requestOptions.relationshipType;
        }
        delete options.direction;
        delete options.relationshipType;
        return request(url, options);
    }
    /**
     * Get the resources associated with an item
     *
     * @param requestOptions - Options for the request
     * @returns A Promise to get some item resources.
     */
    function getItemResources(id, requestOptions) {
        var url = getItemBaseUrl(id, requestOptions) + "/resources";
        // Mix in num:1000 with any user supplied params
        // Key thing - we don't want to mutate the passed in requestOptions
        // as that may be used in other (subsequent) calls in the course
        // of a long promise chains
        var options = __assign({}, requestOptions);
        options.params = __assign({ num: 1000 }, options.params);
        return request(url, options);
    }
    /**
     * ```js
     * import { getItemGroups } from "@esri/arcgis-rest-portal";
     * //
     * getItemGroups("30e5fe3149c34df1ba922e6f5bbf808f")
     *   .then(response)
     * ```
     * Lists the groups of which the item is a part, only showing the groups that the calling user can access. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/groups.htm) for more information.
     *
     * @param id - The Id of the item to query group association for.
     * @param requestOptions - Options for the request
     * @returns A Promise to get some item groups.
     */
    function getItemGroups(id, requestOptions) {
        var url = getItemBaseUrl(id, requestOptions) + "/groups";
        return request(url, requestOptions);
    }
    /**
     * ```js
     * import { getItemStatus } from "@esri/arcgis-rest-portal";
     * //
     * getItemStatus({
     *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
     *   authentication
     * })
     *   .then(response)
     * ```
     * Inquire about status when publishing an item, adding an item in async mode, or adding with a multipart upload. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/status.htm) for more information.
     *
     * @param id - The Id of the item to get status for.
     * @param requestOptions - Options for the request
     * @returns A Promise to get the item status.
     */
    function getItemStatus(requestOptions) {
        return determineOwner(requestOptions).then(function (owner) {
            var url = getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/status";
            var options = appendCustomParams(requestOptions, ["jobId", "jobType"], { params: __assign({}, requestOptions.params) });
            return request(url, options);
        });
    }
    /**
     * ```
     * import { getItemInfo } from "@esri/arcgis-rest-portal";
     * // get the "Info Card" for the item
     * getItemInfo("ae7")
     *   .then(itemInfoXml) // XML document as a string
     * // or get the contents of a specific file
     * getItemInfo("ae7", { fileName: "form.json", readAs: "json", authentication })
     *   .then(formJson) // JSON document as JSON
     * ```
     * Get an info file for an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/item-info-file.htm) for more information.
     * @param id - Item Id
     * @param requestOptions - Options for the request, including the file name which defaults to `iteminfo.xml`.
     * If the file is not a text file (XML, HTML, etc) you will need to specify the `readAs` parameter
     * @returns A Promise that will resolve with the contents of the info file for the item.
     */
    function getItemInfo(id, requestOptions) {
        var _a = requestOptions || {}, _b = _a.fileName, fileName = _b === void 0 ? "iteminfo.xml" : _b, _c = _a.readAs, readAs = _c === void 0 ? "text" : _c;
        var options = __assign({ httpMethod: "GET" }, requestOptions);
        return getItemFile(id, "/info/" + fileName, readAs, options);
    }
    /**
     * ```
     * import { getItemMetadata } from "@esri/arcgis-rest-portal";
     * // get the metadata for the item
     * getItemMetadata("ae7")
     *   .then(itemMetadataXml) // XML document as a string
     * // or with additional request options
     * getItemMetadata("ae7", { authentication })
     *   .then(itemMetadataXml) // XML document as a string
     * ```
     * Get the standard formal metadata XML file for an item (`/info/metadata/metadata.xml`)
     * @param id - Item Id
     * @param requestOptions - Options for the request
     * @returns A Promise that will resolve with the contents of the metadata file for the item as a string.
     */
    function getItemMetadata(id, requestOptions) {
        var options = __assign(__assign({}, requestOptions), { fileName: "metadata/metadata.xml" });
        return getItemInfo(id, options);
    }
    // overrides request()'s default behavior for reading the response
    // which is based on `params.f` and defaults to JSON
    // Also adds JSON parse error protection by sanitizing out any unescaped control characters before parsing
    function getItemFile(id, 
    // NOTE: fileName should include any folder/subfolders
    fileName, readMethod, requestOptions) {
        var url = "" + getItemBaseUrl(id, requestOptions) + fileName;
        // preserve escape hatch to let the consumer read the response
        // and ensure the f param is not appended to the query string
        var options = __assign({ params: {} }, requestOptions);
        var justReturnResponse = options.rawResponse;
        options.rawResponse = true;
        options.params.f = null;
        return request(url, options).then(function (response) {
            if (justReturnResponse) {
                return response;
            }
            return readMethod !== 'json'
                ? response[readMethod]()
                : response.text().then(function (text) { return JSON.parse(scrubControlChars(text)); });
        });
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Unprotect an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/unprotect.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise to unprotect an item.
     */
    function unprotectItem(requestOptions) {
        return determineOwner(requestOptions).then(function (owner) {
            var url = getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/unprotect";
            return request(url, requestOptions);
        });
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { getGroup } from "@esri/arcgis-rest-portal";
     * //
     * getGroup("fxb988") // id
     *   .then(response)
     * ```
     * Fetch a group using its id. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group.htm) for more information.
     *
     * @param id - Group Id
     * @param requestOptions  - Options for the request
     * @returns  A Promise that will resolve with the data from the response.
     */
    function getGroup(id, requestOptions) {
        var url = getPortalUrl$1(requestOptions) + "/community/groups/" + id;
        // default to a GET request
        var options = __assign({ httpMethod: "GET" }, requestOptions);
        return request(url, options);
    }
    /**
     * ```js
     * import { searchGroupUsers } from "@esri/arcgis-rest-portal";
     * //
     * searchGroupUsers('abc123')
     *   .then(response)
     * ```
     * Search the users in a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-users-list.htm) for more information.
     *
     * @param id - The group id
     * @param searchOptions - Options for the request, including paging parameters.
     * @returns A Promise that will resolve with the data from the response.
     */
    function searchGroupUsers(id, searchOptions) {
        var url = getPortalUrl$1(searchOptions) + "/community/groups/" + id + "/userlist";
        var options = appendCustomParams(searchOptions || {}, ["name", "num", "start", "sortField", "sortOrder", "joined", "memberType"], {
            httpMethod: "GET"
        });
        return request(url, options);
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    function getSharingUrl(requestOptions) {
        var username = requestOptions.authentication.username;
        var owner = requestOptions.owner || username;
        return getPortalUrl$1(requestOptions) + "/content/users/" + encodeURIComponent(owner) + "/items/" + requestOptions.id + "/share";
    }
    function isItemOwner(requestOptions) {
        var username = requestOptions.authentication.username;
        var owner = requestOptions.owner || username;
        return owner === username;
    }
    /**
     * Check it the user is a full org_admin
     * @param requestOptions
     * @returns Promise resolving in a boolean indicating if the user is an ArcGIS Organization administrator
     */
    function isOrgAdmin(requestOptions) {
        var session = requestOptions.authentication;
        return session.getUser(requestOptions).then(function (user) {
            return user && user.role === "org_admin" && !user.roleId;
        });
    }
    /**
     * Get the User Membership for a particular group. Use this if all you have is the groupId.
     * If you have the group object, check the `userMembership.memberType` property instead of calling this method.
     *
     * @param requestOptions
     * @returns A Promise that resolves with "owner" | "admin" | "member" | "nonmember"
     */
    function getUserMembership(requestOptions) {
        // fetch the group...
        return getGroup(requestOptions.groupId, requestOptions)
            .then(function (group) {
            return group.userMembership.memberType;
        })
            .catch(function () {
            return "none";
        });
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { removeItem } from "@esri/arcgis-rest-portal";
     * //
     * removeItem({
     *   id: "3ef",
     *   authentication
     * })
     * ```
     * Delete an item from the portal. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-item.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise that deletes an item.
     */
    function removeItem(requestOptions) {
        return determineOwner(requestOptions).then(function (owner) {
            var url = getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/delete";
            return request(url, requestOptions);
        });
    }

    /* Copyright (c) 2018-2021 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * `SearchQueryBuilder` can be used to construct the `q` param for
     * [`searchItems`](/arcgis-rest-js/api/portal/searchItems#searchItems-search) or
     * [`searchGroups`](/arcgis-rest-js/api/portal/searchGroups#searchGroups-search).
     * By chaining methods, it helps build complex search queries.
     *
     * ```js
     * const startDate = new Date("2020-01-01");
     * const endDate = new Date("2020-09-01");
     * const query = new SearchQueryBuilder()
     *  .match("Patrick")
     *  .in("owner")
     *  .and()
     *  .from(startDate)
     *  .to(endDate)
     *  .in("created")
     *  .and()
     *  .startGroup()
     *    .match("Web Mapping Application")
     *    .in("type")
     *    .or()
     *    .match("Mobile Application")
     *    .in("type")
     *    .or()
     *    .match("Application")
     *    .in("type")
     *  .endGroup()
     *  .and()
     *  .match("Demo App");
     *
     * searchItems(query).then((res) => {
     *   console.log(res.results);
     * });
     * ```
     *
     * Will search for items matching
     * ```
     * "owner: Patrick AND created:[1577836800000 TO 1598918400000] AND (type:"Web Mapping Application" OR type:"Mobile Application" OR type:Application) AND Demo App"
     * ```
     */
    var SearchQueryBuilder = /** @class */ (function () {
        /**
         * @param q An existing query string to start building from.
         */
        function SearchQueryBuilder(q) {
            if (q === void 0) { q = ""; }
            this.termStack = [];
            this.rangeStack = [];
            this.openGroups = 0;
            this.q = q;
        }
        /**
         * Defines strings to search for.
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .match("My Layer")
         * ```
         *
         * @param terms strings to search for.
         */
        SearchQueryBuilder.prototype.match = function () {
            var terms = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                terms[_i] = arguments[_i];
            }
            this.termStack = this.termStack.concat(terms);
            return this;
        };
        /**
         * Defines fields to search in. You can pass `"*"` or call this method without arguments to search a default set of fields
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .match("My Layer")
         *   .in("title")
         * ```
         *
         * @param field The field to search for the previous match in.
         */
        SearchQueryBuilder.prototype.in = function (field) {
            var fn = "`in(" + (field ? "\"" + field + "\"" : "") + ")`";
            if (!this.hasRange && !this.hasTerms) {
                warn(
                // apparently-p-rettier-ignore causes some
                fn + " was called with no call to `match(...)` or `from(...)`/`to(...)`. Your query was not modified.");
                return this;
            }
            if (field && field !== "*") {
                this.q += field + ":";
            }
            return this.commit();
        };
        /**
         * Starts a new search group.
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .startGroup()
         *     .match("Lakes")
         *     .in("title")
         *   .endGroup()
         *   .or()
         *   .startGroup()
         *     .match("Rivers")
         *     .in("title")
         *   .endGroup()
         * ```
         */
        SearchQueryBuilder.prototype.startGroup = function () {
            this.commit();
            if (this.openGroups > 0) {
                this.q += " ";
            }
            this.openGroups++;
            this.q += "(";
            return this;
        };
        /**
         * Ends a search group.
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .startGroup()
         *     .match("Lakes")
         *     .in("title")
         *   .endGroup()
         *   .or()
         *   .startGroup()
         *     .match("Rivers")
         *     .in("title")
         *   .endGroup()
         * ```
         */
        SearchQueryBuilder.prototype.endGroup = function () {
            if (this.openGroups <= 0) {
                warn("`endGroup(...)` was called without calling `startGroup(...)` first. Your query was not modified.");
                return this;
            }
            this.commit();
            this.openGroups--;
            this.q += ")";
            return this;
        };
        /**
         * Joins two sets of queries with an `AND` clause.
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .match("Lakes")
         *   .in("title")
         *   .and()
         *   .match("Rivers")
         *   .in("title")
         * ```
         */
        SearchQueryBuilder.prototype.and = function () {
            return this.addModifier("and");
        };
        /**
         * Joins two sets of queries with an `OR` clause.
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .match("Lakes")
         *   .in("title")
         *   .or()
         *   .match("Rivers")
         *   .in("title")
         * ```
         */
        SearchQueryBuilder.prototype.or = function () {
            return this.addModifier("or");
        };
        /**
         * Joins two sets of queries with a `NOT` clause. Another option for filtering results is the [prohibit operator '-'](https://developers.arcgis.com/rest/users-groups-and-items/search-reference.htm#ESRI_SECTION1_5C6C35DB9E4A4F4492C5B937BDA2BF67).
         *
         * ```js
         * // omit results with "Rivers" in their title
         * const query = new SearchQueryBuilder()
         *   .not()
         *   .match("Rivers")
         *   .in("title")
         *
         * // equivalent
         * const query = new SearchQueryBuilder()
         *   .match("Rivers")
         *   .in("-title")
         * ```
         */
        SearchQueryBuilder.prototype.not = function () {
            return this.addModifier("not");
        };
        /**
         * Begins a new range query.
         *
         * ```js
         *
         * const NEWYEARS = new Date("2020-01-01")
         * const TODAY = new Date()
         *
         * const query = new SearchQueryBuilder()
         *   .from(NEWYEARS)
         *   .to(TODAY)
         *   .in("created")
         * ```
         */
        SearchQueryBuilder.prototype.from = function (term) {
            if (this.hasTerms) {
                warn(
                // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
                "`from(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date(\"2020-01-01\").  Your query was not modified.");
                return this;
            }
            this.rangeStack[0] = term;
            return this;
        };
        /**
         * Ends a range query.
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .from(yesterdaysDate)
         *   .to(todaysDate)
         *   .in("created")
         * ```
         */
        SearchQueryBuilder.prototype.to = function (term) {
            if (this.hasTerms) {
                warn(
                // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
                "`to(...)` is not allowed after `match(...)` try using `.from(...).to(...).in(...)`. Optionally, you may see this because dates are incorrectly formatted. Dates should be a primative Date value, aka a number in milliseconds or Date object, ie new Date(\"2020-01-01\"). Your query was not modified.");
                return this;
            }
            this.rangeStack[1] = term;
            return this;
        };
        /**
         * Boosts the previous term to increase its rank in the results.
         *
         * ```js
         * const query = new SearchQueryBuilder()
         *   .match("Lakes")
         *   .in("title")
         *   .or()
         *   .match("Rivers")
         *   .in("title")
         *   .boost(3)
         * ```
         */
        SearchQueryBuilder.prototype.boost = function (num) {
            this.commit();
            this.q += "^" + num;
            return this;
        };
        /**
         * Returns the current query string. Called internally when the request is made.
         */
        SearchQueryBuilder.prototype.toParam = function () {
            this.commit();
            this.cleanup();
            return this.q;
        };
        /**
         * Returns a new instance of `SearchQueryBuilder` based on the current instance.
         */
        SearchQueryBuilder.prototype.clone = function () {
            this.commit();
            this.cleanup();
            return new SearchQueryBuilder(this.q + "");
        };
        SearchQueryBuilder.prototype.addModifier = function (modifier) {
            if (this.currentModifer) {
                warn(
                // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
                "You have called `" + this.currentModifer + "()` after `" + modifier + "()`. Your current query was not modified.");
                return this;
            }
            this.commit();
            if (this.q === "" && modifier !== "not") {
                warn("You have called `" + modifier + "()` without calling another method to modify your query first. Try calling `match()` first.");
                return this;
            }
            this.currentModifer = modifier;
            this.q += this.q === "" ? "" : " ";
            this.q += modifier.toUpperCase() + " ";
            return this;
        };
        SearchQueryBuilder.prototype.needsQuotes = function (s) {
            return /\s|:/g.test(s);
        };
        SearchQueryBuilder.prototype.formatTerm = function (term) {
            if (term instanceof Date) {
                return term.getTime();
            }
            if (typeof term === "string" && this.needsQuotes(term)) {
                return "\"" + term + "\"";
            }
            return term;
        };
        SearchQueryBuilder.prototype.commit = function () {
            var _this = this;
            this.currentModifer = undefined;
            if (this.hasRange) {
                this.q += "[" + this.formatTerm(this.rangeStack[0]) + " TO " + this.formatTerm(this.rangeStack[1]) + "]";
                this.rangeStack = [undefined, undefined];
            }
            if (this.hasTerms) {
                this.q += this.termStack
                    .map(function (term) {
                    return _this.formatTerm(term);
                })
                    .join(" ");
                this.termStack = [];
            }
            return this;
        };
        Object.defineProperty(SearchQueryBuilder.prototype, "hasTerms", {
            get: function () {
                return this.termStack.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SearchQueryBuilder.prototype, "hasRange", {
            get: function () {
                return this.rangeStack.length && this.rangeStack[0] && this.rangeStack[1];
            },
            enumerable: false,
            configurable: true
        });
        SearchQueryBuilder.prototype.cleanup = function () {
            // end a group if we have started one
            if (this.openGroups > 0) {
                warn(
                // apparently-p*rettier-ignore causes prettier to strip *all* comments O_o
                "Automatically closing " + this.openGroups + " group(s). You can use `endGroup(...)` to remove this warning.");
                while (this.openGroups > 0) {
                    this.q += ")";
                    this.openGroups--;
                }
            }
            var oldQ = this.q;
            this.q = oldQ.replace(/( AND ?| NOT ?| OR ?)*$/, "");
            if (oldQ !== this.q) {
                warn("`startGroup(...)` was called without calling `endGroup(...)` first. Your query was not modified.");
            }
            // clear empty groups
            this.q = this.q.replace(/(\(\))*/, "");
        };
        return SearchQueryBuilder;
    }());

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    function genericSearch(search, searchType) {
        var options;
        if (typeof search === "string" || search instanceof SearchQueryBuilder) {
            options = {
                httpMethod: "GET",
                params: {
                    q: search,
                },
            };
        }
        else {
            // searchUserAccess has one (knonw) valid value: "groupMember"
            options = appendCustomParams(search, [
                "q",
                "num",
                "start",
                "sortField",
                "sortOrder",
                "searchUserAccess",
                "searchUserName",
                "filter",
                "countFields",
                "countSize",
                "categories",
                "categoryFilters",
            ], {
                httpMethod: "GET",
            });
        }
        var path;
        switch (searchType) {
            case "item":
                path = "/search";
                break;
            case "group":
                path = "/community/groups";
                break;
            case "groupContent":
                // Need to have groupId property to do group contents search,
                // cso filter out all but ISearchGroupContentOptions
                if (typeof search !== "string" &&
                    !(search instanceof SearchQueryBuilder) &&
                    search.groupId) {
                    path = "/content/groups/" + search.groupId + "/search";
                }
                else {
                    return Promise.reject(new Error("you must pass a `groupId` option to `searchGroupContent`"));
                }
                break;
            default:
                // "users"
                path = "/portals/self/users/search";
                break;
        }
        var url = getPortalUrl$1(options) + path;
        // send the request
        return request(url, options).then(function (r) {
            if (r.nextStart && r.nextStart !== -1) {
                r.nextPage = function () {
                    var newOptions;
                    if (typeof search === "string" ||
                        search instanceof SearchQueryBuilder) {
                        newOptions = {
                            q: search,
                            start: r.nextStart,
                        };
                    }
                    else {
                        newOptions = search;
                        newOptions.start = r.nextStart;
                    }
                    return genericSearch(newOptions, searchType);
                };
            }
            return r;
        });
    }

    /* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { searchItems } from "@esri/arcgis-rest-portal";
     * //
     * searchItems('water')
     *   .then(response) // response.total => 355
     * ```
     * Search a portal for items. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/search.htm) for more information.
     *
     * @param search - A string or RequestOptions object to pass through to the endpoint.
     * @returns A Promise that will resolve with the data from the response.
     */
    function searchItems(search) {
        return genericSearch(search, "item");
    }

    /* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { addItemPart } from "@esri/arcgis-rest-portal";
     * //
     * addItemPart({
     *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
     *   file: data,
     *   partNum: 1,
     *   authentication
     * })
     *   .then(response)
     * ```
     * Add Item Part allows the caller to upload a file part when doing an add or update item operation in multipart mode. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-item-part.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise to add the item part status.
     */
    function addItemPart(requestOptions) {
        var partNum = requestOptions.partNum;
        if (!Number.isInteger(partNum) || partNum < 1 || partNum > 10000) {
            return Promise.reject(new Error('The part number must be an integer between 1 to 10000, inclusive.'));
        }
        return determineOwner(requestOptions).then(function (owner) {
            // AGO adds the "partNum" parameter in the query string, not in the body
            var url = getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/addPart?partNum=" + partNum;
            var options = appendCustomParams(requestOptions, ["file"], { params: __assign({}, requestOptions.params) });
            return request(url, options);
        });
    }
    /**
     * ```js
     * import { commitItemUpload } from "@esri/arcgis-rest-portal";
     * //
     * commitItemUpload({
     *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
     *   authentication
     * })
     *   .then(response)
     * ```
     * Commit is called once all parts are uploaded during a multipart Add Item or Update Item operation. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/commit.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise to get the commit result.
     */
    function commitItemUpload(requestOptions) {
        return determineOwner(requestOptions).then(function (owner) {
            var url = getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/commit";
            var options = appendCustomParams(requestOptions, [], {
                params: __assign(__assign({}, requestOptions.params), serializeItem(requestOptions.item))
            });
            return request(url, options);
        });
    }
    /**
     * ```js
     * import { cancelItemUpload } from "@esri/arcgis-rest-portal";
     * //
     * cancelItemUpload({
     *   id: "30e5fe3149c34df1ba922e6f5bbf808f",
     *   authentication
     * })
     *   .then(response)
     * ```
     * Cancels a multipart upload on an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/cancel.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise to get the commit result.
     */
    function cancelItemUpload(requestOptions) {
        return determineOwner(requestOptions).then(function (owner) {
            var url = getPortalUrl$1(requestOptions) + "/content/users/" + owner + "/items/" + requestOptions.id + "/cancel";
            return request(url, requestOptions);
        });
    }

    /* Copyright (c) 2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    function chunk(array, size) {
        if (array.length === 0) {
            return [];
        }
        var chunks = [];
        for (var i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { addGroupUsers } from "@esri/arcgis-rest-portal";
     * //
     * addGroupUsers({
     *   id: groupId,
     *   users: ["username1", "username2"],
     *   admins: ["username3"],
     *   authentication
     * })
     * .then(response);
     * ```
     * Add users to a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-users-to-group.htm) for more information.
     *
     * @param requestOptions  - Options for the request
     * @returns A Promise
     */
    function addGroupUsers(requestOptions) {
        var id = requestOptions.id;
        var url = getPortalUrl$1(requestOptions) + "/community/groups/" + id + "/addUsers";
        var baseOptions = Object.assign({}, requestOptions, {
            admins: undefined,
            users: undefined
        });
        var batchRequestOptions = __spreadArrays(_prepareRequests("users", requestOptions.users, baseOptions), _prepareRequests("admins", requestOptions.admins, baseOptions));
        var promises = batchRequestOptions.map(function (options) {
            return _sendSafeRequest$2(url, options);
        });
        return Promise.all(promises).then(_consolidateRequestResults);
    }
    function _prepareRequests(type, usernames, baseOptions) {
        if (!usernames || usernames.length < 1) {
            return [];
        }
        // the ArcGIS REST API only allows to add no more than 25 users per request,
        // see https://developers.arcgis.com/rest/users-groups-and-items/add-users-to-group.htm
        var userChunks = chunk(usernames, 25);
        return userChunks.map(function (users) {
            return _generateRequestOptions$2(type, users, baseOptions);
        });
    }
    function _generateRequestOptions$2(type, usernames, baseOptions) {
        var _a, _b;
        return Object.assign({}, baseOptions, (_a = {},
            _a[type] = usernames,
            _a.params = __assign(__assign({}, baseOptions.params), (_b = {}, _b[type] = usernames, _b)),
            _a));
    }
    // this request is safe since the request error will be handled
    function _sendSafeRequest$2(url, requestOptions) {
        return request(url, requestOptions).catch(function (error) {
            return {
                errors: [error]
            };
        });
    }
    function _consolidateRequestResults(results) {
        var notAdded = results
            .filter(function (result) { return result.notAdded; })
            .reduce(function (collection, result) { return collection.concat(result.notAdded); }, []);
        var errors = results
            .filter(function (result) { return result.errors; })
            .reduce(function (collection, result) { return collection.concat(result.errors); }, []);
        var consolidated = { notAdded: notAdded };
        if (errors.length > 0) {
            consolidated.errors = errors;
        }
        return consolidated;
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { removeGroupUsers } from "@esri/arcgis-rest-portal";
     * //
     * removeGroupUsers({
     *   id: groupId,
     *   users: ["username1", "username2"],
     *   authentication
     * })
     * .then(response);
     * ```
     * Add users to a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/remove-users-from-group.htm) for more information.
     *
     * @param requestOptions  - Options for the request
     * @returns A Promise
     */
    function removeGroupUsers(requestOptions) {
        var id = requestOptions.id, usersToRemove = requestOptions.users;
        var url = getPortalUrl$1(requestOptions) + "/community/groups/" + id + "/removeUsers";
        var safeSend = function (users) {
            var options = __assign(__assign({}, requestOptions), { users: users, params: { users: users } });
            return request(url, options)
                .catch(function (error) { return ({ errors: [error] }); });
        };
        // the ArcGIS REST API only allows to add no more than 25 users per request,
        // see https://developers.arcgis.com/rest/users-groups-and-items/remove-users-from-group.htm
        var promises = chunk(usersToRemove, 25).map(function (usersChunk) { return safeSend(usersChunk); });
        return Promise.all(promises)
            .then(function (results) {
            var filtered = function (propName) { return results
                .filter(function (result) { return result[propName]; })
                .reduce(function (collection, result) { return collection.concat(result[propName]); }, []); };
            var errors = filtered('errors');
            var consolidated = { notRemoved: filtered('notRemoved') };
            return errors.length ? __assign(__assign({}, consolidated), { errors: errors }) : consolidated;
        });
    }

    /**
     * Invites users to join a group. Operation success
     * will be indicated by a flag on the return
     * object. If there are any errors, they will be
     * placed in an errors array on the return object
     *
     * ```js
     * const authentication: IAuthenticationManager; // Typically passed into to the function
     * //
     * const options: IInviteGroupUsersOptions = {
     *  id: 'group_id',
     *  users: ['ed', 'edd', 'eddy'],
     *  role: 'group-member',
     *  expiration: 20160,
     *  authentication
     * }
     * //
     * const result = await inviteGroupUsers(options);
     * //
     * const if_success_result_looks_like = {
     *  success: true
     * }
     * //
     * const if_failure_result_looks_like = {
     *  success: false,
     *  errors: [ArcGISRequestError]
     * }
     * ```
     * @param {IInviteGroupUsersOptions} options
     *
     * @returns {Promise<IAddGroupUsersResult>}
     */
    function inviteGroupUsers(options) {
        var id = options.id;
        var url = getPortalUrl$1(options) + "/community/groups/" + id + "/invite";
        var batches = _generateBatchRequests$1(options);
        var promises = batches.map(function (batch) { return _sendSafeRequest$1(url, batch); });
        return Promise.all(promises).then(_combineResults$1);
    }
    /**
     * @private
     */
    function _generateBatchRequests$1(options) {
        var userBatches = chunk(options.users, 25);
        return userBatches.map(function (users) { return _generateRequestOptions$1(users, options); });
    }
    /**
     * @private
     */
    function _generateRequestOptions$1(users, baseOptions) {
        var requestOptions = Object.assign({}, baseOptions);
        requestOptions.params = __assign(__assign({}, requestOptions.params), { users: users, role: requestOptions.role, expiration: requestOptions.expiration });
        return requestOptions;
    }
    /**
     * @private
     */
    function _sendSafeRequest$1(url, requestOptions) {
        return request(url, requestOptions)
            .catch(function (error) { return ({ errors: [error] }); });
    }
    /**
     * @private
     */
    function _combineResults$1(responses) {
        var success = responses.every(function (res) { return res.success; });
        var errors = responses.reduce(function (collection, res) { return collection.concat(res.errors || []); }, []);
        var combined = { success: success };
        if (errors.length > 0) {
            combined.errors = errors;
        }
        return combined;
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { unprotectGroup } from '@esri/arcgis-rest-portal';
     * //
     * unprotectGroup({
     *   id: groupId,
     *   authentication
     * })
     *   .then(response)
     * ```
     * Unprotect a Group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/unprotect-group.htm) for more information.
     * @param requestOptions - Options for the request
     * @returns A Promise that will resolve with the success/failure status of the request
     */
    function unprotectGroup(requestOptions) {
        var url = getPortalUrl$1(requestOptions) + "/community/groups/" + requestOptions.id + "/unprotect";
        return request(url, requestOptions);
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { removeGroup } from '@esri/arcgis-rest-portal';
     * //
     * removeGroup({
     *   id: groupId,
     *   authentication
     * })
     *   .then(response)
     * ```
     * Delete a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/delete-group.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise that will resolve with the success/failure status of the request
     */
    function removeGroup(requestOptions) {
        var url = getPortalUrl$1(requestOptions) + "/community/groups/" + requestOptions.id + "/delete";
        var options = __assign({}, requestOptions);
        return request(url, options);
    }

    /* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { searchGroups } from "@esri/arcgis-rest-portal";
     * //
     * searchGroups('water')
     *   .then(response) // response.total => 355
     * ```
     * Search a portal for groups. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-search.htm) for more information.
     *
     * @param search - A string or RequestOptions object to pass through to the endpoint.
     * @returns A Promise that will resolve with the data from the response.
     */
    function searchGroups(search) {
        return genericSearch(search, "group");
    }
    /**
     * ```js
     * import { searchGroupContent } from "@esri/arcgis-rest-portal";
     * //
     * searchGroupContent('water')
     *   .then(response) // response.total => 355
     * ```
     * Search a portal for items in a group. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/group-content-search.htm) for more information.
     *
     * @param options - RequestOptions object amended with search parameters.
     * @returns A Promise that will resolve with the data from the response.
     */
    function searchGroupContent(options) {
        return genericSearch(options, "groupContent");
    }

    /**
     * ```js
     * import { updateUserMemberships } from "@esri/arcgis-rest-portal";
     * //
     * updateUserMemberships({
     *   id: groupId,
     *   admins: ["username3"],
     *   authentication
     * })
     * .then(response);
     * ```
     * Change the user membership levels of existing users in a group
     *
     * @param requestOptions  - Options for the request
     * @returns A Promise
     */
    function updateUserMemberships(requestOptions) {
        var url = getPortalUrl$1(requestOptions) + "/community/groups/" + requestOptions.id + "/updateUsers";
        var opts = {
            authentication: requestOptions.authentication,
            params: {}
        };
        // add the correct params depending on the type of membership we are changing to
        if (requestOptions.newMemberType === "admin") {
            opts.params.admins = requestOptions.users;
        }
        else {
            opts.params.users = requestOptions.users;
        }
        // make the request
        return request(url, opts);
    }

    /**
     * Send a notification to members of the requesting user's org.
     * Operation success will be indicated by a flag on the return
     * object. If there are any errors, they will be placed in an
     * errors array on the return object
     *
     * ```js
     * const authentication: IAuthenticationManager; // Typically passed into to the function
     * //
     * const options: IInviteGroupUsersOptions = {
     *  id: 'group_id',
     *  users: ['larry', 'curly', 'moe'],
     *  notificationChannelType: 'email',
     *  expiration: 20160,
     *  authentication
     * }
     * //
     * const result = await createOrgNotification(options);
     * //
     * const if_success_result_looks_like = {
     *  success: true
     * }
     * //
     * const if_failure_result_looks_like = {
     *  success: false,
     *  errors: [ArcGISRequestError]
     * }
     * ```
     * @param {ICreateOrgNotificationOptions} options
     *
     * @returns {ICreateOrgNotificationResult}
     */
    function createOrgNotification(options) {
        var url = getPortalUrl$1(options) + "/portals/self/createNotification";
        var batches = _generateBatchRequests(options);
        var promises = batches.map(function (batch) { return _sendSafeRequest(url, batch); });
        return Promise.all(promises).then(_combineResults);
    }
    /**
     * @private
     */
    function _generateBatchRequests(options) {
        var userBatches = chunk(options.users, options.batchSize || 25);
        return userBatches.map(function (users) { return _generateRequestOptions(users, options); });
    }
    /**
     * @private
     */
    function _generateRequestOptions(users, baseOptions) {
        var requestOptions = Object.assign({}, baseOptions);
        requestOptions.params = __assign(__assign({}, requestOptions.params), { users: users, subject: baseOptions.subject, message: baseOptions.message, notificationChannelType: requestOptions.notificationChannelType });
        return requestOptions;
    }
    /**
     * @private
     */
    function _sendSafeRequest(url, requestOptions) {
        return request(url, requestOptions)
            .catch(function (error) { return ({ errors: [error] }); });
    }
    /**
     * @private
     */
    function _combineResults(responses) {
        var success = responses.every(function (res) { return res.success; });
        var errors = responses.reduce(function (collection, res) { return collection.concat(res.errors || []); }, []);
        var combined = { success: success };
        if (errors.length > 0) {
            combined.errors = errors;
        }
        return combined;
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { getUser } from '@esri/arcgis-rest-portal';
     * //
     * getUser("jsmith")
     *   .then(response)
     * // => { firstName: "John", lastName: "Smith",tags: ["GIS Analyst", "City of Redlands"] }
     * ```
     * Get information about a user. This method has proven so generically useful that you can also call [`UserSession.getUser()`](/arcgis-rest-js/api/auth/UserSession#getUser-summary).
     *
     * @param requestOptions - options to pass through in the request
     * @returns A Promise that will resolve with metadata about the user
     */
    function getUser(requestOptions) {
        var url;
        var options = { httpMethod: "GET" };
        // if a username is passed, assume ArcGIS Online
        if (typeof requestOptions === "string") {
            url = "https://www.arcgis.com/sharing/rest/community/users/" + requestOptions;
        }
        else {
            // if an authenticated session is passed, default to that user/portal unless another username is provided manually
            var username = requestOptions.username || requestOptions.authentication.username;
            url = getPortalUrl$1(requestOptions) + "/community/users/" + encodeURIComponent(username);
            options = __assign(__assign({}, requestOptions), options);
        }
        // send the request
        return request(url, options);
    }

    /**
     * ```js
     * import { searchItems } from "@esri/arcgis-rest-portal";
     * //
     * searchUsers({ q: 'tommy', authentication })
     *   .then(response) // response.total => 355
     * ```
     * Search a portal for users.
     *
     * @param search - A RequestOptions object to pass through to the endpoint.
     * @returns A Promise that will resolve with the data from the response.
     */
    function searchUsers(search) {
        return genericSearch(search, "user");
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { setItemAccess } from "@esri/arcgis-rest-portal";
     * //
     * setItemAccess({
     *   id: "abc123",
     *   access: "public", // 'org' || 'private'
     *   authentication: session
     * })
     * ```
     * Change who is able to access an item.
     *
     * @param requestOptions - Options for the request.
     * @returns A Promise that will resolve with the data from the response.
     */
    function setItemAccess(requestOptions) {
        var url = getSharingUrl(requestOptions);
        if (isItemOwner(requestOptions)) {
            // if the user owns the item, proceed
            return updateItemAccess(url, requestOptions);
        }
        else {
            // otherwise we need to check to see if they are an organization admin
            return isOrgAdmin(requestOptions).then(function (admin) {
                if (admin) {
                    return updateItemAccess(url, requestOptions);
                }
                else {
                    // if neither, updating the sharing isnt possible
                    throw Error("This item can not be shared by " + requestOptions.authentication.username + ". They are neither the item owner nor an organization admin.");
                }
            });
        }
    }
    function updateItemAccess(url, requestOptions) {
        requestOptions.params = __assign({ org: false, everyone: false }, requestOptions.params);
        // if the user wants to make the item private, it needs to be unshared from any/all groups as well
        if (requestOptions.access === "private") {
            requestOptions.params.groups = " ";
        }
        if (requestOptions.access === "org") {
            requestOptions.params.org = true;
        }
        // if sharing with everyone, share with the entire organization as well.
        if (requestOptions.access === "public") {
            // this is how the ArcGIS Online Home app sets public access
            // setting org = true instead of account = true will cancel out all sharing
            requestOptions.params.account = true;
            requestOptions.params.everyone = true;
        }
        return request(url, requestOptions);
    }

    /**
     * ```js
     * import { isItemSharedWithGroup } from "@esri/arcgis-rest-portal";
     * //
     * isItemSharedWithGroup({
     *   groupId: 'bc3,
     *   itemId: 'f56,
     *   authentication
     * })
     * .then(isShared => {})
     * ```
     * Find out whether or not an item is already shared with a group.
     *
     * @param requestOptions - Options for the request. NOTE: `rawResponse` is not supported by this operation.
     * @returns Promise that will resolve with true/false
     */
    function isItemSharedWithGroup(requestOptions) {
        var searchOpts = {
            q: "id: " + requestOptions.id + " AND group: " + requestOptions.groupId,
            start: 1,
            num: 10,
            sortField: "title",
            authentication: requestOptions.authentication,
            httpMethod: "POST"
        };
        return searchItems(searchOpts).then(function (searchResponse) {
            var result = false;
            if (searchResponse.total > 0) {
                result = searchResponse.results.some(function (itm) {
                    return itm.id === requestOptions.id;
                });
                return result;
            }
        });
    }

    /**
     * ```js
     * import { shareItemWithGroup } from '@esri/arcgis-rest-portal';
     * //
     * shareItemWithGroup({
     *   id: "abc123",
     *   groupId: "xyz987",
     *   owner: "some-owner",
     *   authentication
     * })
     * ```
     * Share an item with a group, either as an
     * [item owner](https://developers.arcgis.com/rest/users-groups-and-items/share-item-as-item-owner-.htm),
     * [group admin](https://developers.arcgis.com/rest/users-groups-and-items/share-item-as-group-admin-.htm) or
     * organization admin.
     *
     * Note: Sharing the item as an Admin will use the `/content/users/:ownername/items/:itemid/share` end-point
     *
     * @param requestOptions - Options for the request.
     * @returns A Promise that will resolve with the data from the response.
     */
    function shareItemWithGroup(requestOptions) {
        return isItemSharedWithGroup(requestOptions)
            .then(function (isShared) {
            if (isShared) {
                // already shared, exit early with success response
                return {
                    itemId: requestOptions.id,
                    shortcut: true,
                    notSharedWith: [],
                };
            }
            var username = requestOptions.authentication.username, owner = requestOptions.owner, confirmItemControl = requestOptions.confirmItemControl;
            var itemOwner = owner || username;
            // non-item owner
            if (itemOwner !== username) {
                // need to track if the user is an admin
                var isAdmin_1 = false;
                // track if the admin & owner are in the same org
                var isCrossOrgSharing_1 = false;
                // next perform any necessary membership adjustments for
                // current user and/or item owner
                return Promise.all([
                    getUser({
                        username: username,
                        authentication: requestOptions.authentication,
                    }),
                    getUser({
                        username: itemOwner,
                        authentication: requestOptions.authentication,
                    }),
                    getUserMembership(requestOptions),
                ])
                    .then(function (_a) {
                    var currentUser = _a[0], ownerUser = _a[1], membership = _a[2];
                    var isSharedEditingGroup = !!confirmItemControl;
                    isAdmin_1 = currentUser.role === "org_admin" && !currentUser.roleId;
                    isCrossOrgSharing_1 = currentUser.orgId !== ownerUser.orgId;
                    return getMembershipAdjustments(currentUser, isSharedEditingGroup, membership, isAdmin_1, ownerUser, requestOptions);
                })
                    .then(function (membershipAdjustments) {
                    var _a = membershipAdjustments[0], revert = (_a === void 0 ? {
                        promise: Promise.resolve({ notAdded: [] }),
                        revert: function (sharingResults) {
                            return Promise.resolve(sharingResults);
                        },
                    } : _a).revert;
                    // perform all membership adjustments
                    return Promise.all(membershipAdjustments.map(function (_a) {
                        var promise = _a.promise;
                        return promise;
                    }))
                        .then(function () {
                        // then attempt the share
                        return shareToGroup(requestOptions, isAdmin_1, isCrossOrgSharing_1);
                    })
                        .then(function (sharingResults) {
                        // lastly, if the admin user was added to the group,
                        // remove them from the group. this is a no-op that
                        // immediately resolves the sharingResults when no
                        // membership adjustment was needed
                        return revert(sharingResults);
                    });
                });
            }
            // item owner, let it call through
            return shareToGroup(requestOptions);
        })
            .then(function (sharingResponse) {
            if (sharingResponse.notSharedWith.length) {
                throw Error("Item " + requestOptions.id + " could not be shared to group " + requestOptions.groupId + ".");
            }
            else {
                // all is well
                return sharingResponse;
            }
        });
    }
    function getMembershipAdjustments(currentUser, isSharedEditingGroup, membership, isAdmin, ownerUser, requestOptions) {
        var membershipGuarantees = [];
        if (requestOptions.groupId !== currentUser.favGroupId) {
            if (isSharedEditingGroup) {
                if (!isAdmin) {
                    // abort and reject promise
                    throw Error("This item can not be shared to shared editing group " + requestOptions.groupId + " by " + currentUser.username + " as they not the item owner or org admin.");
                }
                membershipGuarantees.push(
                // admin user must be a group member to share, should be reverted afterwards
                ensureMembership(currentUser, currentUser, false, "Error adding " + currentUser.username + " as member to edit group " + requestOptions.groupId + ". Consequently item " + requestOptions.id + " was not shared to the group.", requestOptions), 
                // item owner must be a group admin
                ensureMembership(currentUser, ownerUser, true, membership === "none"
                    ? "Error adding user " + ownerUser.username + " to edit group " + requestOptions.groupId + ". Consequently item " + requestOptions.id + " was not shared to the group."
                    : "Error promoting user " + ownerUser.username + " to admin in edit group " + requestOptions.groupId + ". Consequently item " + requestOptions.id + " was not shared to the group.", requestOptions));
            }
            else if (isAdmin) {
                // admin user must be a group member to share, should be reverted afterwards
                membershipGuarantees.push(ensureMembership(currentUser, currentUser, false, "Error adding " + currentUser.username + " as member to view group " + requestOptions.groupId + ". Consequently item " + requestOptions.id + " was not shared to the group.", requestOptions));
            }
            else if (membership === "none") {
                // all other non-item owners must be a group member
                throw new Error("This item can not be shared by " + currentUser.username + " as they are not a member of the specified group " + requestOptions.groupId + ".");
            }
        }
        return membershipGuarantees;
    }
    function shareToGroup(requestOptions, isAdmin, isCrossOrgSharing) {
        if (isAdmin === void 0) { isAdmin = false; }
        if (isCrossOrgSharing === void 0) { isCrossOrgSharing = false; }
        var username = requestOptions.authentication.username;
        var itemOwner = requestOptions.owner || username;
        // decide what url to use
        // default to the non-owner url...
        var url = getPortalUrl$1(requestOptions) + "/content/items/" + requestOptions.id + "/share";
        // but if they are the owner, or org_admin, use this route
        // Note: When using this end-point as an admin, apparently the admin does not need to be a member of the group (the itemOwner does)
        // Note: Admin's can only use this route when the item is in the same org they are admin for
        if (itemOwner === username || (isAdmin && !isCrossOrgSharing)) {
            url = getPortalUrl$1(requestOptions) + "/content/users/" + itemOwner + "/items/" + requestOptions.id + "/share";
        }
        // now its finally time to do the sharing
        requestOptions.params = {
            groups: requestOptions.groupId,
            confirmItemControl: requestOptions.confirmItemControl,
        };
        return request(url, requestOptions);
    }
    function ensureMembership(currentUser, ownerUser, shouldPromote, errorMessage, requestOptions) {
        var _a;
        var ownerGroups = ownerUser.groups || [];
        var group = ownerGroups.find(function (g) {
            return g.id === requestOptions.groupId;
        });
        // if they are in different orgs, eject
        if (currentUser.orgId !== ownerUser.orgId) {
            throw Error("User " + ownerUser.username + " is not a member of the same org as " + currentUser.username + ". Consequently they can not be added added to group " + requestOptions.groupId + " nor can item " + requestOptions.id + " be shared to the group.");
        }
        // if owner is not a member, and has 512 groups
        if (!group && ownerGroups.length > 511) {
            throw Error("User " + ownerUser.username + " already has 512 groups, and can not be added to group " + requestOptions.groupId + ". Consequently item " + requestOptions.id + " can not be shared to the group.");
        }
        var promise;
        var revert;
        // decide if we need to add them or upgrade them
        if (group) {
            // they are in the group...
            // check member type
            if (shouldPromote && group.userMembership.memberType === "member") {
                // promote them
                promise = updateUserMemberships({
                    id: requestOptions.groupId,
                    users: [ownerUser.username],
                    newMemberType: "admin",
                    authentication: requestOptions.authentication,
                })
                    .then(function (results) {
                    // convert the result into the right type
                    var notAdded = results.results.reduce(function (acc, entry) {
                        if (!entry.success) {
                            acc.push(entry.username);
                        }
                        return acc;
                    }, []);
                    // and return it
                    return Promise.resolve({ notAdded: notAdded });
                })
                    .catch(function () { return ({ notAdded: [ownerUser.username] }); });
                revert = function (sharingResults) {
                    return updateUserMemberships({
                        id: requestOptions.groupId,
                        users: [ownerUser.username],
                        newMemberType: "member",
                        authentication: requestOptions.authentication,
                    })
                        .then(function () { return sharingResults; })
                        .catch(function () { return sharingResults; });
                };
            }
            else {
                // they are already an admin in the group
                // return the same response the API would if we added them
                promise = Promise.resolve({ notAdded: [] });
                revert = function (sharingResults) { return Promise.resolve(sharingResults); };
            }
        }
        else {
            // attempt to add user to group
            var userType = shouldPromote ? "admins" : "users";
            // can't currently determine if the group is within the admin's
            // org without performing a search, so attempt to add and handle
            // the api error
            promise = addGroupUsers((_a = {
                    id: requestOptions.groupId
                },
                _a[userType] = [ownerUser.username],
                _a.authentication = requestOptions.authentication,
                _a))
                .then(function (results) {
                // results.errors includes an ArcGISAuthError when the group
                // is in a different org, but notAdded is empty, throw here
                // to normalize the results in below catch
                if (results.errors && results.errors.length) {
                    throw results.errors[0];
                }
                return results;
            })
                .catch(function () { return ({ notAdded: [ownerUser.username] }); });
            revert = function (sharingResults) {
                return removeGroupUsers({
                    id: requestOptions.groupId,
                    users: [ownerUser.username],
                    authentication: requestOptions.authentication,
                }).then(function () {
                    // always resolves, suppress any resolved errors
                    return sharingResults;
                });
            };
        }
        return {
            promise: promise.then(function (membershipResponse) {
                if (membershipResponse.notAdded.length) {
                    throw new Error(errorMessage);
                }
                return membershipResponse;
            }),
            revert: revert,
        };
    }

    /**
     * Stop sharing an item with a group, either as an
     * [item owner](https://developers.arcgis.com/rest/users-groups-and-items/unshare-item-as-item-owner-.htm),
     * [group admin](https://developers.arcgis.com/rest/users-groups-and-items/unshare-item-as-group-admin-.htm) or
     * organization admin.
     *
     * ```js
     * import { unshareItemWithGroup } from '@esri/arcgis-rest-portal';
     *
     * unshareItemWithGroup({
     *   id: "abc123",
     *   groupId: "xyz987",
     *   owner: "some-owner",
     *   authentication: session
     * })
     * ```
     *
     * @param requestOptions - Options for the request.
     * @returns A Promise that will resolve with the data from the response.
     */
    function unshareItemWithGroup(requestOptions) {
        return isItemSharedWithGroup(requestOptions)
            .then(function (isShared) {
            // not shared
            if (!isShared) {
                // exit early with success response
                return Promise.resolve({
                    itemId: requestOptions.id,
                    shortcut: true,
                    notUnsharedFrom: []
                });
            }
            var username = requestOptions.authentication.username, owner = requestOptions.owner;
            // next check if the user is a member of the group
            return Promise.all([
                getUserMembership(requestOptions),
                getUser({
                    username: username,
                    authentication: requestOptions.authentication
                })
            ])
                .then(function (_a) {
                var membership = _a[0], currentUser = _a[1];
                var itemOwner = owner || username;
                var isItemOwner = itemOwner === username;
                var isAdmin = currentUser.role === 'org_admin' && !currentUser.roleId;
                if (!isItemOwner && !isAdmin && ['admin', 'owner'].indexOf(membership) < 0) {
                    // abort and reject promise
                    throw Error("This item can not be unshared from group " + requestOptions.groupId + " by " + username + " as they not the item owner, an org admin, group admin or group owner.");
                }
                // let the sharing call go
                return unshareFromGroup(requestOptions);
            })
                .then(function (sharingResponse) {
                if (sharingResponse.notUnsharedFrom.length) {
                    throw Error("Item " + requestOptions.id + " could not be unshared to group " + requestOptions.groupId);
                }
                else {
                    // all is well
                    return sharingResponse;
                }
            });
        });
    }
    function unshareFromGroup(requestOptions) {
        var username = requestOptions.authentication.username;
        var itemOwner = requestOptions.owner || username;
        // decide what url to use
        // default to the non-owner url...
        var url = getPortalUrl$1(requestOptions) + "/content/items/" + requestOptions.id + "/unshare";
        // but if they are the owner, we use a different path...
        if (itemOwner === username) {
            url = getPortalUrl$1(requestOptions) + "/content/users/" + itemOwner + "/items/" + requestOptions.id + "/unshare";
        }
        // now its finally time to do the sharing
        requestOptions.params = {
            groups: requestOptions.groupId
        };
        return request(url, requestOptions);
    }

    /* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Get the portal
     * @param requestOptions
     */
    function getSelf(requestOptions) {
        // just delegate to getPortal w/o an id
        return getPortal(null, requestOptions);
    }
    /**
     * ```js
     * import { getPortal } from "@esri/arcgis-rest-request";
     * //
     * getPortal()
     * getPortal("fe8")
     * getPortal(null, { portal: "https://custom.maps.arcgis.com/sharing/rest/" })
     * ```
     * Fetch information about the specified portal by id. If no id is passed, portals/self will be called.
     * Note that if you intend to request a portal by id and it is different from the portal specified by options.authentication, you must also pass options.portal.
     * @param id
     * @param requestOptions
     */
    function getPortal(id, requestOptions) {
        // construct the search url
        var idOrSelf = id ? id : "self";
        var url = getPortalUrl$1(requestOptions) + "/portals/" + idOrSelf;
        // default to a GET request
        var options = __assign({ httpMethod: "GET" }, requestOptions);
        // send the request
        return request(url, options);
    }

    /**
     * ```js
     * import { getPortalUrl } from "@esri/hub-common";
     * // from a portal API URL
     * let portalUrl = getPortalUrl("https://org.maps.arcgis.com/sharing/rest"); // https://org.maps.arcgis.com
     * // from an enterprise portal self response (IPortal)
     * let portalSelf = { isPortal: true, portalHostname: "server.example.org" };
     * portalUrl = getPortalUrl(portalSelf); // https://server.example.org
     * // from an online portal self response (IPortal)
     * portalSelf = { isPortal: false, urlKey: "org", customBaseUrl: "maps.arcgis.com" };
     * portalUrl = getPortalUrl(portalSelf); // https://org.maps.arcgis.com
     * // from hub request options (IHubRequestOptions) with a portal self (IPortal)
     * let requestOptions = { isPortal: false, portalSelf };
     * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
     * // from request options (IRequestOptions) with a portal (string)
     * requestOptions = { portal: "https://org.maps.arcgis.com/sharing/rest" };
     * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
     * ```
     * Derive a portal's base URL from the portal's API URL, a portal object, or request options
     * @param urlOrObject a portal API URL, a portal object, or request options containing either of those
     * @returns The portal base URL, defaults to `https://www.arcgis.com`
     */
    function getPortalUrl(urlOrObject) {
        if (typeof urlOrObject === "string") {
            // assume this is the URL of the portal API
            // and strip the `/sharing/rest`
            return urlOrObject.replace(/\/sharing\/rest\/?$/, "");
        }
        if (typeof urlOrObject === "object") {
            // build URL from portal self object, which could be
            // either a property of the object (request options) or the object itself
            var portalSelf = urlOrObject.portalSelf;
            var portal = portalSelf || urlOrObject;
            var portalHostname = portal.portalHostname, urlKey = portal.urlKey, customBaseUrl = portal.customBaseUrl;
            if (portalHostname || (urlKey && customBaseUrl)) {
                // user passed in a portal object, we'll use that to build the URL
                if (portal.isPortal) {
                    return "https://" + portal.portalHostname;
                }
                else {
                    return "https://" + portal.urlKey + "." + portal.customBaseUrl;
                }
            }
        }
        // urlOrObj is either undefined, or a request options w/o portal self
        // get portal API URL and parse portal URL from that
        return getPortalUrl(getPortalUrl$1(urlOrObject));
    }

    /**
     * Mapping between the AGO Env's and the Hub's asset CDNs
     */
    var HUB_CDN_URLMAP = {
        devext: "https://d1011m9qpnz5mw.cloudfront.net",
        qaext: "https://dyq9ux9ryu4qj.cloudfront.net",
        www: "https://d1iq7pbacwn5rb.cloudfront.net"
    };

    // TODO: should this take IHubRequestOptions as well as a portal?
    // if so, address when we tackle https://github.com/Esri/hub.js/issues/321
    /**
     * Given a Portal object, return the full Hub locale asset url
     * Used for fetching translations
     * @param {Object} portal Portal Self
     */
    function getHubLocaleAssetUrl(portal) {
        if (portal.isPortal) {
            // Enterprise - use Site app as source for assets
            var baseUrl = getPortalUrl(portal);
            return baseUrl + "/apps/sites";
        }
        else {
            // AGO - Convert portalHostname into CDN url
            var index = portal.portalHostname.split(".")[0];
            var base = HUB_CDN_URLMAP[index] || HUB_CDN_URLMAP.www;
            return base + "/opendata-ui/assets";
        }
    }

    /**
     * ```js
     * import { getPortalApiUrl } from "@esri/hub-common";
     * // from a portal base URL
     * let portalApiUrl = getPortalApiUrl("https://org.maps.arcgis.com"); // https://org.maps.arcgis.com/sharing/rest
     * // from an enterprise portal self response (IPortal)
     * let portalSelf = { isPortal: true, portalHostname: "server.example.org" };
     * portalApiUrl = getPortalApiUrl(portalSelf); // https://server.example.org/sharing/rest
     * // from an online portal self response (IPortal)
     * portalSelf = { isPortal: false, urlKey: "org", customBaseUrl: "maps.arcgis.com" };
     * portalApiUrl = getPortalApiUrl(portalSelf); // https://org.maps.arcgis.com/sharing/rest
     * // from hub request options (IHubRequestOptions) with a portal self (IPortal)
     * let requestOptions = { isPortal: false, portalSelf };
     * portalApiUrl = getPortalApiUrl(requestOptions); // https://org.maps.arcgis.com/sharing/rest
     * // from request options (IRequestOptions) with a portal (string)
     * requestOptions = { portal: "https://org.maps.arcgis.com/sharing/rest" };
     * portalApiUrl = getPortalApiUrl(requestOptions); // https://org.maps.arcgis.com/sharing/rest
     * ```
     * Derive a portal's API URL from the portal's base URL, a portal object, or request options
     * @param urlOrObject a portal base URL, a portal object, or request options containing either of those
     * @returns The portal API URL, defaults to `https://www.arcgis.com/sharing/rest`
     */
    function getPortalApiUrl(urlOrObject) {
        return getPortalUrl(urlOrObject) + "/sharing/rest";
    }

    /**
     * Add protocol or upgrade http to https
     * @param {string} url
     */
    function upgradeProtocol(url) {
        if (url.indexOf("http") === -1) {
            return "https://" + url;
        }
        else if (url.indexOf("http://") !== -1) {
            return url.replace(/^http:/i, "https:");
        }
        return url;
    }

    /**
     * Remove protocol if present
     * @param {string} hostname Hostname
     */
    function stripProtocol(hostname) {
        hostname = hostname.toLowerCase();
        if (hostname.includes("//")) {
            hostname = hostname.split("//")[1];
        }
        return hostname;
    }

    /**
     * Given a url without a protocol or with either http or https, return an array
     * that contains both the http and https version
     * @param {string} uri Url with either http or https, or no protocol
     * @private
     */
    function _getHttpAndHttpsUris(uri) {
        if (!uri) {
            return [];
        }
        var domain = uri.replace(/^http(s?):\/\//, "");
        return ["http://" + domain, "https://" + domain];
    }

    /**
     * Wrapper over window.location
     * @private
     */
    /* istanbul ignore next */
    function _getLocation() {
        /* istanbul ignore next */
        if (window) {
            return window.location;
        }
    }

    /**
     * Parse the portal url, and if it matches one of the AGO
     * Url patterns, return the correct Hub Url
     * If portalUrl does not match an AGO pattern, this will
     * return `undefined`
     * @param portalUrl
     * @private
     */
    function _getHubUrlFromPortalHostname(portalUrl) {
        var result;
        if (portalUrl.match(/(qaext|\.mapsqa)\.arcgis.com/)) {
            result = "https://hubqa.arcgis.com";
        }
        else if (portalUrl.match(/(devext|\.mapsdevext)\.arcgis.com/)) {
            result = "https://hubdev.arcgis.com";
        }
        else if (portalUrl.match(/(www|\.maps)\.arcgis.com/)) {
            result = "https://hub.arcgis.com";
        }
        return result;
    }

    /**
     * Return the Hub Url based on the portal self
     * @param portal
     */
    function getHubUrlFromPortal(portal) {
        if (portal.isPortal) {
            throw new Error("Hub Url is not available in ArcGIS Enterprise");
        }
        else {
            return _getHubUrlFromPortalHostname(portal.portalHostname);
        }
    }

    /**
     * Return the Portal url based on the portal self
     * @param {Object} portal Portal Self
     */
    function getHubApiUrlFromPortal(portal) {
        return getHubUrlFromPortal(portal) + "/api/v3";
    }

    /**
     * Return the URL of the item's page in the Portal Home application
     * @param itemId The item's ID
     * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
     * @returns URL to the item's data REST end point, defaults to `https://www.arcgis.com/home/item.html?id={item.id}`
     */
    function getItemHomeUrl(itemId, portalUrlOrObject) {
        var portalUrl = getPortalUrl(portalUrlOrObject);
        return portalUrl + "/home/item.html?id=" + itemId;
    }

    // NOTE: this fn is tested via getItemDataUrl tests
    /**
     * Get the fully qualified URL to the REST end point for an item.
     * @param item w/ id and access
     * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
     * @param token token for the current user's session; will only be appended as a query parameter if the item's access is **not** `public`
     * @returns URL to the item's REST end point, defaults to `https://www.arcgis.com/sharing/rest/content/items/{item.id}?f=json`
     */
    var getItemApiUrl = function (item, portalUrlOrObject, token) {
        var id = item.id, access = item.access;
        var url = getPortalApiUrl(portalUrlOrObject) + "/content/items/" + id;
        var params = new URLSearchParams({ f: "json" });
        if (access !== "public" && token) {
            params.append("token", token);
        }
        return url + "?" + params.toString();
    };

    /**
     * Get the fully qualified URL to the data REST end point for an item
     * @param item w/ id and access
     * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
     * @param token token for the current user's session; will only be appended as a query parameter if the item's access is **not** `public`
     * @returns URL to the item's data REST end point, defaults to `https://www.arcgis.com/sharing/rest/content/items/{item.id}/data`
     */
    var getItemDataUrl = function (item, portalUrlOrObject, token) {
        var url = getItemApiUrl(item, portalUrlOrObject, token);
        var pattern = "\\/" + item.id + "\\?f=json";
        var regExp = new RegExp(pattern);
        // TODO: re-append f param based on item.type?
        return (url && url.replace(regExp, "/" + item.id + "/data").replace(/\&token/, "?token"));
    };

    /**
     * Convert urls in a string to hyperlinks
     * @param {content} string
     */
    function convertUrlsToAnchorTags(content) {
        var urls = content.match(/((((ftp|https?):\/\/)|(w{3}\.))[-\w@:%_+.~#?,&//=]+)/g);
        if (urls) {
            urls.forEach(function (url) {
                content = content.replace(url, '<a target="_blank" href="' + url + '">' + url + "</a>");
            });
        }
        return content.replace("(", "<br/>(");
    }

    /**
     * Cross-walk from a portalUrl to the corresponding Hub API Url
     *
     * If the passed url is not recognized, then this will return `undefined`
     * @param portalUrl
     * @returns
     */
    function getHubApiFromPortalUrl(portalUrl) {
        var result;
        if (portalUrl.match(/(qaext|\.mapsqa)\.arcgis.com/)) {
            result = "https://hubqa.arcgis.com";
        }
        else if (portalUrl.match(/(devext|\.mapsdevext)\.arcgis.com/)) {
            result = "https://hubdev.arcgis.com";
        }
        else if (portalUrl.match(/(www|\.maps)\.arcgis.com/)) {
            result = "https://hub.arcgis.com";
        }
        return result;
    }

    /**
     * Given an org url, get the portal base url
     *
     * i.e. https://myorg.maps.arcgis.com will return https://www.arcgis.com
     *
     * @param orgUrl
     * @returns
     */
    function getPortalBaseFromOrgUrl(orgUrl) {
        var result = orgUrl;
        if (orgUrl.match(/(qaext|\.mapsqa)\.arcgis.com/)) {
            result = "https://qaext.arcgis.com";
        }
        else if (orgUrl.match(/(devext|\.mapsdevext)\.arcgis.com/)) {
            result = "https://devext.arcgis.com";
        }
        else {
            /* istanbul ignore else */
            if (orgUrl.match(/(www|\.maps)\.arcgis.com/)) {
                result = "https://www.arcgis.com";
            }
        }
        return result;
    }

    /**
     * Return the URL of the group's page in the Portal Home application
     * @param groupId The group's ID
     * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
     * @returns URL to the groups's url, defaults to `https://www.arcgis.com/home/group.html?id={group.id}`
     */
    function getGroupHomeUrl(groupId, portalUrlOrObject) {
        var portalUrl = getPortalUrl(portalUrlOrObject);
        return portalUrl + "/home/group.html?id=" + groupId;
    }

    /**
     * Return the URL of the user's page in the Portal Home application
     * @param username The username
     * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
     * @returns URL to the user's profile, defaults to `https://www.arcgis.com/home/user.html?user={username}`
     */
    function getUserHomeUrl(username, portalUrlOrObject) {
        var portalUrl = getPortalUrl(portalUrlOrObject);
        return portalUrl + "/home/user.html?user=" + username;
    }

    var MAP_OR_FEATURE_SERVER_URL_REGEX = /\/(map|feature)server/i;
    /**
     *
     * @param url
     * @returns true if the url is of a map or feature service
     */
    var isMapOrFeatureServerUrl = function (url) {
        return MAP_OR_FEATURE_SERVER_URL_REGEX.test(url);
    };
    /**
     * parses map or feature service type from URL
     * @param url map or feature service URL
     * @returns item type, either "Map Service" or "Feature Service"
     * or undefined for other types of URLs
     */
    var getServiceTypeFromUrl = function (url) {
        var match = url.match(MAP_OR_FEATURE_SERVER_URL_REGEX);
        var mapOrFeature = match && match[1];
        return mapOrFeature && capitalize(mapOrFeature) + " Service";
    };

    /**
     * ```js
     * import { getHubApiUrl() } from "@esri/hub-common";
     * //
     * getHubApiUrl({ portal: "https://custom.maps.arcgis.com/sharing/rest" })
     * >> "https://hub.arcgis.com"
     * ```
     * Retrieves the Hub API Url associated with a specific ArcGIS Online organization.
     * @param urlOrObject a Portal URL, Portal API URL, request options object, or Portal self object
     * @returns the associated Hub API Url as a string.
     */
    function getHubApiUrl(urlOrObject) {
        var hubApiUrl = urlOrObject && urlOrObject.hubApiUrl;
        if (hubApiUrl) {
            // this is request options w/ hubApiUrl already defined
            return hubApiUrl;
        }
        return _getHubUrlFromPortalHostname(getPortalApiUrl(urlOrObject));
    }

    /**
     * Hash of Hub API end points so updates
     * are centralized
     */
    var hubApiEndpoints = {
        domains: "/api/v3/domains",
        search: "/api/v3/datasets",
        discussions: "/api/discussions/v1",
    };
    /**
     * Abstraction that holds a `UserSession`, along with
     * getters to streamline access to various platform
     * urls, and common constructs like `IRequestOptions`,
     * `IUserRequestOptions` etc.
     *
     * Instances are intended to be immutable, but this is not directly enforced.
     *
     * In most circumstances, this class should be created by
     * the ArcGISContextManager class.
     */
    var ArcGISContext = /** @class */ (function () {
        /**
         * Create a new instance of `ArcGISContext`.
         *
         * @param opts
         */
        function ArcGISContext(opts) {
            this._portalUrl = "https://www.arcgis.com";
            this.id = opts.id;
            this._portalUrl = opts.portalUrl;
            this._hubUrl = opts.hubUrl;
            if (opts.authentication) {
                this._authentication = opts.authentication;
            }
            if (opts.portalSelf) {
                this._portalSelf = opts.portalSelf;
            }
            if (opts.currentUser) {
                this._currentUser = opts.currentUser;
            }
            if (opts.properties) {
                this._properties = opts.properties;
            }
        }
        Object.defineProperty(ArcGISContext.prototype, "session", {
            /**
             * Return the UserSession if authenticated
             */
            get: function () {
                return this._authentication;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "isAuthenticated", {
            /**
             * Return boolean indicating if authenticatio is present
             */
            get: function () {
                return !!this._authentication;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "userRequestOptions", {
            /**
             * Return `IUserRequestOptions`, which is used for REST-JS
             * functions which require authentication information.
             *
             * If context is not authenticated, this function will throw
             */
            get: function () {
                if (this.isAuthenticated) {
                    return {
                        authentication: this._authentication,
                        portal: this.sharingApiUrl,
                    };
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "requestOptions", {
            /**
             * Return `IRequestOptions`, which is used by REST-JS functions
             * which *may* use authentication information if provided.
             *
             * If context is not authenticated, this function just returns
             * the `portal` property, which informs REST-JS what Sharing API
             * instance to use (i.e. AGO, Enterprise etc)
             */
            get: function () {
                var ro = {
                    portal: this.sharingApiUrl,
                };
                if (this.isAuthenticated) {
                    ro = {
                        authentication: this._authentication,
                        portal: this.sharingApiUrl,
                    };
                }
                return ro;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "hubRequestOptions", {
            /**
             * Return a `IHubRequestOptions` object
             */
            get: function () {
                // We may add more logic around what is returned in some corner cases
                return {
                    authentication: this.session,
                    isPortal: this.isPortal,
                    portalSelf: this.portal,
                    hubApiUrl: this.hubUrl,
                    portal: this.sharingApiUrl,
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "portalUrl", {
            /**
             * Return the portal url i.e. https://www.arcgis.com
             *
             * If authenticated @ ArcGIS Online, it will return
             * the https://org.env.arcgis.com
             *
             * If authenticated @ ArcGIS Enterprise, it will return
             * https://{portalHostname}/{webadaptor}
             */
            get: function () {
                if (this.isAuthenticated) {
                    if (this.isPortal || !this._portalSelf.urlKey) {
                        return "https://" + this._portalSelf.portalHostname;
                    }
                    else {
                        return "https://" + this._portalSelf.urlKey + "." + this._portalSelf.customBaseUrl;
                    }
                }
                else {
                    return this._portalUrl;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "sharingApiUrl", {
            /**
             * Returns the url to the sharing api composed from portalUrl
             * i.e. https://myorg.maps.arcgis.com/sharing/rest
             */
            get: function () {
                return this.portalUrl + "/sharing/rest";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "hubUrl", {
            /**
             * Returns the Hub url, based on the portalUrl
             *
             * For ArcGIS Enterprise this will return `undefined`
             */
            get: function () {
                return this._hubUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "isPortal", {
            /**
             * Returns boolean indicating if the backing system
             * is ArcGIS Enterprise (formerly ArcGIS Portal) or not
             */
            get: function () {
                return this._portalSelf
                    ? this._portalSelf.isPortal
                    : this._portalUrl.indexOf("arcgis.com") === -1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "discussionsServiceUrl", {
            /**
             * Returns the discussions API URL
             */
            get: function () {
                if (this._hubUrl) {
                    return "" + this._hubUrl + hubApiEndpoints.discussions;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "hubSearchServiceUrl", {
            /**
             * Returns the Hub Search API URL
             */
            get: function () {
                if (this._hubUrl) {
                    return "" + this._hubUrl + hubApiEndpoints.search;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "domainServiceUrl", {
            /**
             * Returns Hub Domain Service URL
             */
            get: function () {
                if (this._hubUrl) {
                    return "" + this._hubUrl + hubApiEndpoints.domains;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "eventsConfig", {
            /**
             * Returns the Events configuration object from portal/self
             *
             * `{serviceId: '3ef..', publicViewId: 'bc3...'}`
             */
            get: function () {
                if (this._portalSelf) {
                    return getProp(this._portalSelf, "portalProperties.hub.settings.events");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "hubEnabled", {
            /**
             * Returns boolean indicating if the current user
             * belongs to an organization that has licensed
             * ArcGIS Hub
             */
            get: function () {
                return getWithDefault$1(this._portalSelf, "portalProperties.hub.enabled", false);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "communityOrgId", {
            /**
             * Return the Hub Community Org Id, if defined
             */
            get: function () {
                if (this._portalSelf) {
                    return getProp(this._portalSelf, "portalProperties.hub.settings.communityOrg.orgId");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "communityOrgHostname", {
            /**
             * Returns the Hub Community Org Hostname, if defined
             *
             * i.e. c-org.maps.arcgis.com
             */
            get: function () {
                if (this._portalSelf) {
                    return getProp(this._portalSelf, "portalProperties.hub.settings.communityOrg.portalHostname");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "communityOrgUrl", {
            /**
             * Returns the Hub Community Org url
             *
             * i.e. https://c-org.maps.arcgis.com
             */
            get: function () {
                if (this.communityOrgHostname) {
                    return "https://" + this.communityOrgHostname;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "helperServices", {
            /**
             * Returns the hash of helper services from portal self
             */
            get: function () {
                if (this._portalSelf) {
                    return this._portalSelf.helperServices;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "currentUser", {
            /**
             * Returns the current user as IUser
             */
            get: function () {
                return this._currentUser;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "portal", {
            /**
             * Returns the portal object as IPortal
             */
            get: function () {
                return this._portalSelf;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArcGISContext.prototype, "properties", {
            /**
             * Return the properties hash that was passed in.
             * Useful for app-specific context such as the active
             * Site for ArcGIS Hub
             */
            get: function () {
                return this._properties;
            },
            enumerable: false,
            configurable: true
        });
        return ArcGISContext;
    }());

    /**
     * The manager exposes context (`IArcGISContext`), which combines a `UserSession` with
     * the `portal/self` and `user/self` responses to provide a central lookup for platform
     * information, api urls, and other useful properties for developers such as IRequestOptions
     * IUserRequestOptions, IHubRequestOptions etc.
     *
     * The context is exposed on gthe `.context` property, and as the authentication changes
     * the `.context` is re-created. This is done to allow web frameworks to watch for
     * changes on that single property, instead of having to leverage observers or events
     * for change detection.
     *
     * Please see the [ArcGISContext Guide](/hub.js/guides/context) for additional information.
     *
     */
    var ArcGISContextManager = /** @class */ (function () {
        /**
         * Private constructor. Use `ArcGISContextManager.create(...)` to
         * instantiate an instance
         * @param opts
         */
        function ArcGISContextManager(opts) {
            this._portalUrl = "https://www.arcgis.com";
            this._logLevel = exports.Level.error;
            // Having a unique id makes debugging easier
            this.id = new Date().getTime();
            if (opts.logLevel) {
                this._logLevel = opts.logLevel;
            }
            Logger.setLogLevel(this._logLevel);
            Logger.debug("ArcGISContextManager:ctor: Creating " + this.id);
            if (opts.properties) {
                this._properties = opts.properties;
            }
            if (opts.authentication) {
                this._authentication = opts.authentication;
                this._portalUrl = this._authentication.portal.replace("/sharing/rest", "");
                this._hubUrl = getHubApiFromPortalUrl(this._portalUrl);
            }
            else if (opts.portalUrl) {
                this._portalUrl = opts.portalUrl;
                this._hubUrl = getHubApiFromPortalUrl(this._portalUrl);
            }
            else {
                this._hubUrl = getHubApiFromPortalUrl(this._portalUrl);
            }
            if (opts.portal) {
                this._portalSelf = cloneObject$1(opts.portal);
            }
            if (opts.currentUser) {
                this._currentUser = cloneObject$1(opts.currentUser);
            }
        }
        /**
         * Used to create a new instance of the ArcGISContext class.
         *
         * ```js
         * const ctxMgr = await ArcGISContextManager.create();
         * ```
         *
         * @param opts
         * @returns
         */
        ArcGISContextManager.create = function (opts) {
            if (opts === void 0) { opts = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var ctx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ctx = new ArcGISContextManager(opts);
                            return [4 /*yield*/, ctx.initialize()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, ctx];
                    }
                });
            });
        };
        /**
         * Set the Authentication (UserSession) for the context.
         * This should be called when a user signs into a running
         * application.
         * @param auth
         */
        ArcGISContextManager.prototype.setAuthentication = function (auth) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._authentication = auth;
                            this._portalUrl = auth.portal.replace("/sharing/rest", "");
                            return [4 /*yield*/, this.initialize()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Set the properties hash and re-create the context
         * @param properties
         */
        ArcGISContextManager.prototype.setProperties = function (properties) {
            this._properties = properties;
            this._context = new ArcGISContext(this.contextOpts);
        };
        /**
         * Clear the Authentication (UserSession). This should be
         * called when a user signs out of an application, but
         * the application continues running
         */
        ArcGISContextManager.prototype.clearAuthentication = function () {
            // Reset the portalUrl from the org url to the base url
            // for ArcGIS Enterprise, we just leave the _portalUrl as-is
            if (!this._context.isPortal) {
                this._portalUrl = getPortalBaseFromOrgUrl(this._portalUrl);
            }
            // Clear the auth, portalSelf and currentUser props
            this._authentication = null;
            this._portalSelf = null;
            this._currentUser = null;
            this._context = new ArcGISContext(this.contextOpts);
        };
        Object.defineProperty(ArcGISContextManager.prototype, "context", {
            /**
             * Return a reference to the current state.
             * When `.setAuthentication()` or `.clearAuthenentication()` are
             * called, the state will be re-created. This is done so frameworks
             * like React or Ember can detect changes.
             */
            get: function () {
                return this._context;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * If we have a UserSession, fetch portal/self and
         * store that along with current user
         */
        ArcGISContextManager.prototype.initialize = function () {
            return __awaiter(this, void 0, void 0, function () {
                var username, requests, _a, portal, user, ex_1, msg;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(this._authentication && (!this._portalSelf || !this._currentUser))) return [3 /*break*/, 4];
                            Logger.debug("ArcGISContextManager-" + this.id + ": Initializing");
                            username = this._authentication.username;
                            requests = [
                                getSelf({ authentication: this._authentication }),
                                getUser({ username: username, authentication: this._authentication }),
                            ];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all(requests)];
                        case 2:
                            _a = _b.sent(), portal = _a[0], user = _a[1];
                            this._portalSelf = portal;
                            this._currentUser = user;
                            Logger.debug("ArcGISContextManager-" + this.id + ": received portalSelf and currentUser");
                            return [3 /*break*/, 4];
                        case 3:
                            ex_1 = _b.sent();
                            msg = "ArcGISContextManager could not fetch portal & user for \"" + this._authentication.username + "\" using " + this._authentication.portal + ".";
                            Logger.error(msg);
                            // tslint:disable-next-line:no-console
                            console.error(msg);
                            throw ex_1;
                        case 4:
                            Logger.debug("ArcGISContextManager-" + this.id + ": updating context");
                            // update the context
                            this._context = new ArcGISContext(this.contextOpts);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(ArcGISContextManager.prototype, "contextOpts", {
            /**
             * Getter to streamline the creation of updated Context instances
             */
            get: function () {
                var contextOpts = {
                    id: this.id,
                    portalUrl: this._portalUrl,
                    hubUrl: this._hubUrl,
                    properties: this._properties,
                };
                if (this._authentication) {
                    contextOpts.authentication = this._authentication;
                }
                if (this._portalSelf) {
                    contextOpts.portalSelf = this._portalSelf;
                }
                if (this._currentUser) {
                    contextOpts.currentUser = this._currentUser;
                }
                return contextOpts;
            },
            enumerable: false,
            configurable: true
        });
        return ArcGISContextManager;
    }());

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * A thin wrapper around [`UserSession.completeOAuth2()`](https://esri.github.io/arcgis-rest-js/api/auth/UserSession/#completeOAuth2) that sets search tags and other relevant metadata for newly created community users.
     */
    /* istanbul ignore next */
    function completeOAuth2(options, win) {
        if (win === void 0) { win = window; }
        var match = win.location.href.match(/access_token=(.+)&expires_in=.+&username=([^&]+)/);
        var token = match[1];
        var user = decodeURIComponent(match[2]);
        var baseUrl = "https://www.arcgis.com/sharing/rest/community/users/" + user;
        return request(baseUrl, {
            params: { token: token },
            httpMethod: "GET"
        }).then(function (response) {
            if (Date.now() - response.created < 5000) {
                return request(baseUrl + "/update", {
                    params: {
                        token: token,
                        tags: ["hubRole:participant", "org:" + response.orgId],
                        access: "public"
                    }
                }).then(function () {
                    return UserSession.completeOAuth2(options);
                });
            }
            else {
                return UserSession.completeOAuth2(options);
            }
        });
    }

    var app$1 = [
        "Application",
        "City Engine Web Scene",
        "CityEngine Web Scene",
        "Dashboard",
        "Insights Page",
        "Insights Workbook",
        "Operation View",
        "Web Mapping Application",
        "StoryMap",
        "Web Experience",
        "Urban Model",
    ];
    var dataset$1 = [
        "CSV Collection",
        "CSV",
        "Feature Collection Template",
        "Feature Collection",
        "Feature Layer",
        "Feature Service",
        "File Geodatabase",
        "GeoJSON",
        "GeoJson",
        "KML Collection",
        "KML",
        "Microsoft Excel",
        "Raster Layer",
        "Shapefile",
        "Stream Service",
        "Table",
    ];
    var document$1 = [
        "CAD Drawing",
        "Document Link",
        "Hub Page",
        "Site Page",
        "Image",
        "iWork Keynote",
        "iWork Numbers",
        "iWork Pages",
        "Microsoft Powerpoint",
        "Microsoft Visio",
        "Microsoft Word",
        "Notebook",
        "PDF",
        "Pro Map",
        "Report Template",
    ];
    var event$1 = ["Hub Event"];
    var feedback$1 = ["Form", "Quick Capture Project"];
    var initiative$1 = ["Hub Initiative"];
    var solution = ["Solution"];
    var template = ["Hub Initiative Template"];
    var map$1 = [
        "Image Collection",
        "Image Service",
        "Map Service Layer",
        "Map Service",
        "Scene Service",
        "Scene Layer",
        "Vector Tile Service",
        "Web Map Service",
        "Web Map Tile Service",
        "Web Map",
        "Web Scene",
        "WFS",
        "WMS",
        "WMTS",
    ];
    var other$1 = [
        "360 VR Experience",
        "AppBuilder Widget Package",
        "Application Configuration",
        "ArcPad Package",
        "Code Attachment",
        "Code Sample",
        "Desktop Add In",
        "Desktop Application Template",
        "Desktop Application",
        "Desktop Style",
        "Explorer Add In",
        "Explorer Layer",
        "Geocoding Service",
        "Geometry Service",
        "Geoprocessing Package",
        "Geoprocessing Sample",
        "Geoprocessing Service",
        "Layer File",
        "Layer Package",
        "Layer Template",
        "Layer",
        "Layout",
        "Locator Package",
        "Map Area",
        "Map Document",
        "Map Package",
        "Map Service Definition",
        "Map Template",
        "Mobile Application",
        "Mobile Map Package",
        "Native Application",
        "Network Analysis Service",
        "Operations Dashboard Add In",
        "Project Package",
        "Project Template",
        "Raster Function Template",
        "Rule Package",
        "Scene Package",
        "Service Definition",
        "SQLite Geodatabase",
        "Style",
        "Tile Package",
        "Vector Tile Package",
        "Workflow Manager Package",
    ];
    var site$1 = ["Hub Site Application", "Site Application"];
    /**
     * ```js
     * import { getCollection } from "@esri/hub-common";
     * //
     * getCollection('Feature Layer')
     * > 'dataset'
     * ```
     * Get the Hub collection for a given item type
     * @param itemType The ArcGIS [item type](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
     * @returns the Hub collection of a given item type.
     */
    var getCollection = function (type) {
        if (!type) {
            return;
        }
        var lowerCaseType = type.toLocaleLowerCase();
        return Object.keys(collections).find(function (key) {
            var collectionTypes = collections[key];
            return collectionTypes.some(function (t) { return t.toLocaleLowerCase() === lowerCaseType; });
        });
    };
    // TODO: remove this at the next breaking change
    // it's only here to support deprecated categories
    var collections = {
        app: app$1,
        dataset: dataset$1,
        document: document$1,
        event: event$1,
        feedback: feedback$1,
        initiative: initiative$1,
        template: template,
        solution: solution,
        map: map$1,
        other: other$1,
        site: site$1,
    };

    var app = collections.app, dataset = collections.dataset, document = collections.document, event = collections.event, feedback = collections.feedback, initiative = collections.initiative, map = collections.map, other = collections.other, site = collections.site;
    var downloadableTypes = [
        "360 VR Experience",
        "Application",
        "CityEngine Web Scene",
        "Code Sample",
        "CSV Collection",
        "CSV",
        "CAD Drawing",
        "Desktop Application",
        "Desktop Application Template",
        "Desktop Style",
        "File Geodatabase",
        "GeoJson",
        "Geoprocessing Package",
        "Geoprocessing Sample",
        "Image",
        "iWork Keynote",
        "iWork Numbers",
        "KML Collection",
        "KML",
        "Layer",
        "Layer File",
        "Layer Package",
        "Layout",
        "Locator Package",
        "Map Package",
        "Map Service Definition",
        "Map Template",
        "Microsoft Excel",
        "Microsoft Powerpoint",
        "Microsoft Visio",
        "Microsoft Word",
        "Notebook",
        "Operations Dashboard Add In",
        "PDF",
        "Pro Map",
        "Project Package",
        "Project Template",
        "Raster function template",
        "Rule Package",
        "Service Definition",
        "Shapefile",
        "Vector Tile Package",
        "Workflow Manager Package",
    ];
    var downloadableTypeKeywords = ["Data"];
    var apiTypes = ["Feature Service", "Map Service", "Image Service"];
    // TODO: remove this at next breaking version
    // we're just keeping this for backwards compatibility
    var categories = {
        app: app.concat(feedback),
        dataset: dataset,
        document: document,
        event: event,
        initiative: initiative,
        map: map,
        other: other,
        site: site,
        downloadableTypes: downloadableTypes,
        downloadableTypeKeywords: downloadableTypeKeywords,
        apiTypes: apiTypes,
    };
    // TODO: move this function and supporting arrays to another module
    /**
     * Is the item type downloadable in the Hub app
     * @param item ArcGIS item with type and type keywords
     */
    function isDownloadable(item) {
        return (downloadableTypes.indexOf(item.type) !== -1 ||
            (item.typeKeywords &&
                downloadableTypeKeywords.some(function (downloadableTypeKeyword) {
                    return item.typeKeywords.some(function (typeKeyword) { return typeKeyword === downloadableTypeKeyword; });
                })));
    }

    /* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
     * //
     * queryFeatures({
     *   url: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer/3",
     *   where: "STATE_NAME = 'Alaska'"
     * })
     *   .then(result)
     * ```
     * Query a feature service. See [REST Documentation](https://developers.arcgis.com/rest/services-reference/query-feature-service-layer-.htm) for more information.
     *
     * @param requestOptions - Options for the request
     * @returns A Promise that will resolve with the query response.
     */
    function queryFeatures(requestOptions) {
        var queryOptions = appendCustomParams(requestOptions, [
            "where",
            "objectIds",
            "relationParam",
            "time",
            "distance",
            "units",
            "outFields",
            "geometry",
            "geometryType",
            "spatialRel",
            "returnGeometry",
            "maxAllowableOffset",
            "geometryPrecision",
            "inSR",
            "outSR",
            "gdbVersion",
            "returnDistinctValues",
            "returnIdsOnly",
            "returnCountOnly",
            "returnExtentOnly",
            "orderByFields",
            "groupByFieldsForStatistics",
            "outStatistics",
            "returnZ",
            "returnM",
            "multipatchOption",
            "resultOffset",
            "resultRecordCount",
            "quantizationParameters",
            "returnCentroid",
            "resultType",
            "historicMoment",
            "returnTrueCurves",
            "sqlFormat",
            "returnExceededLimitFeatures",
            "f"
        ], {
            httpMethod: "GET",
            params: __assign({ 
                // set default query parameters
                where: "1=1", outFields: "*" }, requestOptions.params)
        });
        return request(cleanUrl(requestOptions.url) + "/query", queryOptions);
    }

    /* Copyright (c) 2017-2019 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    var serviceRegex = new RegExp(/.+(?:map|feature|image)server/i);
    /**
     * Return the service url. If not matched, returns what was passed in
     */
    function parseServiceUrl(url) {
        var match = url.match(serviceRegex);
        if (match) {
            return match[0];
        }
        else {
            return stripQueryString(url);
        }
    }
    function stripQueryString(url) {
        var stripped = url.split('?')[0];
        return cleanUrl(stripped);
    }

    /**
     * ```js
     * import { getAllLayersAndTables } from '@esri/arcgis-rest-feature-layer';
     * getAllLayersAndTables({
     *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0"
     * })
     *   .then(response) // { layers: [...], tables: [...] }
     * ```
     * Fetches all the layers and tables associated with a given layer service.
     * Wrapper for https://developers.arcgis.com/rest/services-reference/all-layers-and-tables.htm
     *
     * @param options - Request options, including the url for the layer service
     * @returns A Promise that will resolve with the layers and tables for the given service
     */
    // TODO: should we expand this to support other valid params of the endpoint?
    function getAllLayersAndTables(options) {
        var url = options.url, requestOptions = __rest(options, ["url"]);
        var layersUrl = parseServiceUrl(url) + "/layers";
        return request(layersUrl, requestOptions);
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { getLayer } from '@esri/arcgis-rest-feature-layer';
     * //
     * getLayer({
     *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer/0"
     * })
     *   .then(response) // { name: "311", id: 0, ... }
     * ```
     * Layer (Feature Service) request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/layer-feature-service-.htm) for more information.
     *
     * @param options - Options for the request.
     * @returns A Promise that will resolve with the addFeatures response.
     */
    function getLayer(options) {
        return request(cleanUrl(options.url), options);
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ```js
     * import { getService } from '@esri/arcgis-rest-feature-layer';
     * //
     * getService({
     *   url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/ServiceRequest/FeatureServer"
     * })
     *   .then(response) // { name: "311", id: 0, ... }
     * ```
     * Feature Service request. See the [REST Documentation](https://developers.arcgis.com/rest/services-reference/feature-service.htm) for more information.
     *
     * @param options - Options for the request.
     * @returns A Promise that will resolve with the getService response.
     */
    function getService(options) {
        return request(cleanUrl(options.url), options);
    }

    exports.PublisherSource = void 0;
    (function (PublisherSource) {
        PublisherSource["CitationContact"] = "metadata.resource.citation.contact";
        PublisherSource["ResourceContact"] = "metadata.resource.contact";
        PublisherSource["MetadataContact"] = "metadata.contact";
        PublisherSource["ItemOwner"] = "item.owner";
        PublisherSource["None"] = "none";
    })(exports.PublisherSource || (exports.PublisherSource = {}));

    /**
     * Turns an bounding box coordinate array into an extent object
     * @param bBox bounding box coordinate array
     * @returns extent object
     */
    var bBoxToExtent = function (bBox) {
        var _a = bBox[0], xmin = _a[0], ymin = _a[1], _b = bBox[1], xmax = _b[0], ymax = _b[1];
        return createExtent(xmin, ymin, xmax, ymax);
    };
    function createExtent(xmin, ymin, xmax, ymax, wkid) {
        if (wkid === void 0) { wkid = 4326; }
        return {
            xmin: xmin,
            ymin: ymin,
            xmax: xmax,
            ymax: ymax,
            // type: 'extent',
            spatialReference: {
                wkid: wkid,
            },
        };
    }
    /**
     * Turns an extent object into a bounding box coordinate array
     * @param extent extent
     */
    function extentToBBox(extent) {
        return [
            [extent.xmin, extent.ymin],
            [extent.xmax, extent.ymax],
        ];
    }
    var GLOBAL_EXTENT = {
        xmin: -180,
        ymin: -90,
        xmax: 180,
        ymax: 90,
        spatialReference: {
            wkid: 4326,
        },
    };
    /**
     * Gets the geographic extent for an org
     * @param hubRequestOptions
     */
    function getGeographicOrgExtent(hubRequestOptions) {
        var portal = hubRequestOptions.portalSelf;
        var orgExtent = portal.defaultExtent;
        var geometryServiceUrl = getProp(portal, "helperServices.geometry.url");
        // Define a default global extent object
        if (!geometryServiceUrl) {
            return Promise.resolve(GLOBAL_EXTENT);
        }
        if (!orgExtent) {
            return Promise.resolve(GLOBAL_EXTENT);
        }
        var url = geometryServiceUrl + "/project";
        // geometry params...
        var geometryParam = {
            geometryType: "esriGeometryEnvelope",
            geometries: [orgExtent],
        };
        var options = {
            httpMethod: "POST",
            params: {
                geometries: JSON.stringify(geometryParam),
                transformForward: false,
                transformation: "",
                inSR: orgExtent.spatialReference.wkid,
                outSR: 4326,
                f: "json",
            },
        };
        // add in auth if it's passed
        if (hubRequestOptions.authentication) {
            options.authentication = hubRequestOptions.authentication;
        }
        return request(url, options)
            .then(function (response) {
            var geom = response.geometries[0];
            return {
                xmin: geom.xmin,
                ymin: geom.ymin,
                xmax: geom.xmax,
                ymax: geom.ymax,
                spatialReference: {
                    wkid: 4326,
                },
            };
        })
            .catch(function (ex) {
            return GLOBAL_EXTENT;
        });
    }
    /**
     * Get the default org extent as a bbox for use on item.extent
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function getOrgExtentAsBBox(hubRequestOptions) {
        return getGeographicOrgExtent(hubRequestOptions).then(function (extent) {
            return extentToBBox(extent);
        });
    }
    /**
     * checks if the extent is a valid BBox (2 element array of coordinate pair arrays)
     * @param extent
     * @returns
     */
    var isBBox = function (extent) {
        return (Array.isArray(extent) &&
            Array.isArray(extent[0]) &&
            Array.isArray(extent[1]));
    };
    function isExtentCoordinateArray(extent) {
        /* tslint:disable no-console */
        console.warn("DEPRECATED: use isBBox() instead");
        /* tslint:enable no-console */
        return isBBox(extent);
    }
    function isExtentJSON(extent) {
        return ["xmin", "ymin", "xmax", "ymax"].every(function (key) { return typeof extent[key] === "number"; });
    }
    /**
     * Check if the given extent is in a known format
     * @param  {Object} extent extent in any format
     * @return {Boolean}       indicator
     */
    function isValidExtent(extent) {
        return (!!extent &&
            [isExtentCoordinateArray, isExtentJSON].some(function (test) { return test(extent); }));
    }
    /* istanbul ignore next DEPRECATED, remove at next breaking change */
    var bBoxToPolygon = function (bBox) {
        /* tslint:disable no-console */
        console.warn("DEPRECATED: use extentToPolygon(bBoxToExtent(bBox)) instead");
        return extentToPolygon(bBoxToExtent(bBox));
    };
    /**
     * Convert an extent object into a polygon object
     * @param extent
     * @returns
     */
    var extentToPolygon = function (extent) {
        var xmin = extent.xmin, ymin = extent.ymin, xmax = extent.xmax, ymax = extent.ymax, spatialReference = extent.spatialReference;
        var rings = [
            [
                [xmin, ymax],
                [xmax, ymax],
                [xmax, ymin],
                [xmin, ymin],
                [xmin, ymax],
            ],
        ];
        return {
            rings: rings,
            spatialReference: spatialReference,
        };
    };
    /**
     * Get the center of an extent as a point
     * @param extent
     * @returns
     */
    var getExtentCenter = function (extent) {
        var xmin = extent.xmin, ymin = extent.ymin, xmax = extent.xmax, ymax = extent.ymax, spatialReference = extent.spatialReference;
        var x = (xmax - xmin) / 2 + xmin;
        var y = (ymax - ymin) / 2 + ymin;
        return { x: x, y: y, spatialReference: spatialReference };
    };

    // private helper functions
    function collectionToFamily(collection) {
        var overrides = {
            other: "content",
            solution: "template",
        };
        return overrides[collection] || collection;
    }
    /**
     * return the Hub family given an item's type
     * @param type item type
     * @returns Hub family
     */
    function getFamily(type) {
        var family;
        // override default behavior for the rows that are highlighted in yellow here:
        // https://esriis.sharepoint.com/:x:/r/sites/ArcGISHub/_layouts/15/Doc.aspx?sourcedoc=%7BADA1C9DC-4F6C-4DE4-92C6-693EF9571CFA%7D&file=Hub%20Routes.xlsx&nav=MTBfe0VENEREQzI4LUZFMDctNEI0Ri04NjcyLThCQUE2MTA0MEZGRn1fezIwMTIwMEJFLTA4MEQtNEExRC05QzA4LTE5MTAzOUQwMEE1RH0&action=default&mobileredirect=true&cid=df1c874b-c367-4cea-bc13-7bebfad3f2ac
        // DEPRECATED: we should make type a required parameter
        // and just do type.toLowerCase() at the next breaking change
        switch ((type || "").toLowerCase()) {
            case "image service":
                family = "dataset";
                break;
            case "feature service":
            case "raster layer":
                // TODO: check if feature service has > 1 layer first?
                family = "map";
                break;
            case "microsoft excel":
                family = "document";
                break;
            case "cad drawing":
            case "feature collection template":
            case "report template":
                family = "content";
                break;
            case "hub project":
                family = "project";
                break;
            default:
                // by default derive from collection
                family = collectionToFamily(getCollection(type));
        }
        return family;
    }

    /**
     * get a content's boundary based on the item's boundary property
     * @param item
     * @returns
     * @private
     */
    var getContentBoundary = function (item) {
        var _a;
        var bBox = item.extent;
        var isValidItemExtent = isBBox(bBox);
        // user specified provenance is stored in item.properties
        var provenance = ((_a = item.properties) === null || _a === void 0 ? void 0 : _a.boundary) ||
            // but we default to item if the item has an extent
            (isValidItemExtent ? "item" : undefined);
        var boundary = {
            geometry: null,
            provenance: provenance,
        };
        if (provenance === "item" && isValidItemExtent) {
            var extent = bBoxToExtent(bBox);
            var center = getExtentCenter(extent);
            boundary.center = [center.x, center.y];
            boundary.geometry = __assign(__assign({}, extentToPolygon(extent)), { type: "polygon" });
            boundary.spatialReference = boundary.geometry.spatialReference;
        }
        return boundary;
    };
    /**
     * Determine if we are in an enterprise environment
     * NOTE: when no request options are provided, the underlying
     * request functions assume that we are online in production
     * so we only want use enterprise logic if isPortal is explicitly defined
     * @param requestOptions
     * @returns
     * @private
     */
    var isPortal = function (requestOptions) {
        return requestOptions && requestOptions.isPortal;
    };
    /**
     * Determine if we can use the Hub API for an item, i.e.
     * the item is public and we are not in an enterprise environment
     * @param item
     * @param requestOptions
     * @returns
     * @private
     */
    var canUseHubApiForItem = function (item, requestOptions) {
        return !!item && item.access === "public" && !isPortal(requestOptions);
    };
    /**
     * Returns whether or not an item is a proxied csv
     *
     * @param item
     * @param requestOptions Hub Request Options (including whether we're in portal)
     * @returns
     * @private
     */
    var isProxiedCSV = function (item, requestOptions) {
        return !isPortal(requestOptions) &&
            item.access === "public" &&
            item.type === "CSV" &&
            item.size <= 5000000;
    };
    /**
     * Get the relative URL to use for the item in a hub site
     * @param type
     * @param identifier
     * @param typeKeywords
     * @returns
     * @private
     */
    var getHubRelativeUrl = function (type, identifier, typeKeywords) {
        // solution types have their own logic
        var contentUrl = getSolutionUrl(type, identifier, typeKeywords);
        if (!contentUrl) {
            var family = getFamily(type);
            var familiesWithPluralizedRoute = [
                "app",
                "dataset",
                "document",
                "map",
                "template",
                "project",
            ];
            // default to the catchall content route
            var path = "/content";
            if (family === "feedback") {
                // the exception
                path = "/feedback/surveys";
            }
            else if (isPageType(type)) {
                // pages are in the document family,
                // but instead of showing the page's metadata on /documents/about
                // but we render the page on the pages route
                path = "/pages";
            }
            else if (familiesWithPluralizedRoute.indexOf(family) > -1) {
                // the rule: route name is plural of family name
                path = "/" + family + "s";
            }
            contentUrl = path + "/" + identifier;
        }
        return contentUrl;
    };
    /**
     * Is this content type a page?
     * @param type
     * @returns
     * @private
     */
    var isPageType = function (type) {
        return ["Hub Page", "Site Page"].includes(type);
    };
    var getSolutionUrl = function (type, identifier, typeKeywords) {
        var hubUrl;
        if (type === "Solution") {
            // NOTE: as per the above spreadsheet,
            // solution types are now in the Template family
            // but we don't send them to the route for initiative templates
            if ((typeKeywords === null || typeKeywords === void 0 ? void 0 : typeKeywords.indexOf("Deployed")) > 0) {
                // deployed solutions go to the generic content route
                hubUrl = "/content/" + identifier;
            }
            // TODO: I think this is a bug. The line below should be w/in else
            // in order to avoid overwriting the above for deployed solutions, right?
            // others go to the solution about route
            hubUrl = "/templates/" + identifier + "/about";
        }
        return hubUrl;
    };
    /**
     * Get the path to a well known metadata value
     * @param identifier identifier for well known metadata value
     * @returns path to be used like get(metadata, path)
     * @private
     */
    function getMetadataPath(identifier) {
        // NOTE: i have verified that this will work regardless of the "Metadata Style" set on the org
        var metadataPaths = {
            updateFrequency: "metadata.dataIdInfo.resMaint.maintFreq.MaintFreqCd.@_value",
            reviseDate: "metadata.dataIdInfo.idCitation.date.reviseDate",
            pubDate: "metadata.dataIdInfo.idCitation.date.pubDate",
            createDate: "metadata.dataIdInfo.idCitation.date.createDate",
            metadataUpdateFrequency: "metadata.mdMaint.maintFreq.MaintFreqCd.@_value",
            metadataUpdatedDate: "metadata.mdDateSt",
        };
        return metadataPaths[identifier];
    }
    /**
     * Get a well known value from metadata
     * @param metadata
     * @param identifier identifier for well known metadata value
     * @returns
     * @private
     */
    function getValueFromMetadata(metadata, identifier) {
        var path = getMetadataPath(identifier);
        return path && getProp(metadata, path);
    }
    /**
     * Date precisions
     */
    var DatePrecision;
    (function (DatePrecision) {
        DatePrecision["Year"] = "year";
        DatePrecision["Month"] = "month";
        DatePrecision["Day"] = "day";
        DatePrecision["Time"] = "time";
    })(DatePrecision || (DatePrecision = {}));
    /**
     * Parses an ISO8601 date string into a date and a precision.
     * This is because a) if somone entered 2018, we want to respect that and not treat it as the same as 2018-01-01
     * and b) you cannot naively call new Date with an ISO 8601 string that does not include time information
     * For example, when I, here in mountain time, do new Date('2018').getFullYear() I get "2017".
     * This is because when you do not provide time or timezone info, UTC is assumed, so new Date('2018') is 2018-01-01T00:00:00 in UTC
     * which is actually 7 hours earlier here in mountain time.
     *
     * @param {string} isoString
     * @return { date: Date, precision: DatePrecision }
     * @private
     */
    function parseISODateString(isoString) {
        isoString = "" + isoString;
        var date;
        var precision;
        if (/^\d{4}$/.test(isoString)) {
            // yyyy
            date = new Date(+isoString, 0, 1);
            precision = DatePrecision.Year;
        }
        else if (/^\d{4}-\d{1,2}$/.test(isoString)) {
            // yyyy-mm
            var parts = isoString.split("-");
            date = new Date(+parts[0], +parts[1] - 1, 1);
            precision = DatePrecision.Month;
        }
        else if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(isoString)) {
            // yyyy-mm-dd
            var parts = isoString.split("-");
            date = new Date(+parts[0], +parts[1] - 1, +parts[2]);
            precision = DatePrecision.Day;
        }
        else if (!Number.isNaN(Date.parse(isoString))) {
            // any other string parsable to a valid date
            date = new Date(isoString);
            precision = isoString.includes("T")
                ? DatePrecision.Time
                : DatePrecision.Day;
        }
        return date && precision && { date: date, precision: precision };
    }
    // NOTE: IItem has spatialRefernce: ISpatialReference, but
    // the portal REST API returns spatialReference as as string
    // that is always either WKID like "102100" or the name of a
    // WKT like "NAD_1983_HARN_StatePlane_Hawaii_3_FIPS_5103_Feet".
    // We only coerce WKIDs into a ISpatialReference objects since we
    // can't easily lookup a complete WKT.
    /**
     * Get the spatial reference as an object for an item
     * @param item
     * @returns spatial reference object
     * @private
     */
    var getItemSpatialReference = function (item) {
        var spatialReference = item.spatialReference;
        if (!spatialReference || typeof spatialReference === "object") {
            // no need to try and transform this into an ISpatialReference
            return spatialReference;
        }
        // otherwise it _should_ be a string (if coming form the REST API)
        // but we force it in case it was set to a number somewhere outside of TS
        var spatialReferenceString = spatialReference + "";
        var wkid = parseInt(spatialReferenceString, 10);
        return isNaN(wkid)
            ? // It looks like the portal api returns the name of a WKT, but we'd
                // need to perform a lookup to get the full WKT. Return null for now.
                null
            : //
                { wkid: wkid };
    };
    /**
     * Extracts additional resources from the provided metadata
     * and transforms them into a hub-friendly format.
     *
     * Returns null if no resources are available
     *
     * @param item
     * @param metadata formal metadata
     * @returns
     * @private
     */
    var getAdditionalResources = function (item, metadata, requestOptions) {
        var rawResources = extractRawResources(metadata);
        return (rawResources &&
            rawResources.map(function (resource) { return ({
                name: resource.orName,
                url: getAdditionalResourceUrl(resource, item, requestOptions),
                isDataSource: isDataSourceOfItem(resource, item),
            }); }));
    };
    /**
     * @private
     *
     * Extracts additional resources from formal item metadata.
     * If none are available, null is returned.
     *
     * @param metadata the formal item metadata
     * @returns an array of all additional resources, or null
     */
    var extractRawResources = function (metadata) {
        var rawResources = [];
        // The property path to additional resources should be fairly simple.
        // In many cases, it's just `metadata.metadata.distInfo.distTranOps.onLineSrc`.
        // However, since `distInfo`, `distTranOps` and `onLineSrc` can be either
        // Objects OR Arrays, we have to do all this looping.
        castToArray(getProp(metadata, "metadata.distInfo") || []).forEach(function (distInfo) {
            castToArray(distInfo.distTranOps || []).forEach(function (distTranOps) {
                castToArray(distTranOps.onLineSrc || []).forEach(function (onLineSrc) {
                    rawResources.push(onLineSrc);
                });
            });
        });
        return rawResources.length ? rawResources : null;
    };
    /**
     * @private
     *
     * Arrays are returned as-is.
     * Objects are wrapped into a 1 element array.
     *
     * @param objectOrArray
     * @returns the casted array
     */
    var castToArray = function (objectOrArray) {
        return Array.isArray(objectOrArray) ? objectOrArray : [objectOrArray];
    };
    /**
     * Determines whether a raw additional resource (i.e. extracted out of formal
     * metadata with no transformation) references the underlying service that backs
     * the item.
     *
     * @param resource raw additional resource of an item
     * @param item
     * @returns
     * @private
     */
    var isDataSourceOfItem = function (resource, item) {
        var serviceUrl = item.url && parseServiceUrl(item.url);
        return (serviceUrl && resource.linkage && resource.linkage.includes(serviceUrl));
    };
    /**
     * Returns the url for an additional resource.
     *
     * Automatically appends auth token if token is available
     * and resource points to the backing service of an item.
     *
     * @param resource raw additional resource of an item
     * @param item
     * @param requestOptions IHubRequestOptions, including authentication
     * @returns
     * @private
     */
    var getAdditionalResourceUrl = function (resource, item, requestOptions) {
        var result = resource.linkage;
        var token = getProp(requestOptions, "authentication.token");
        if (token && isDataSourceOfItem(resource, item)) {
            var resUrl = new URL(resource.linkage);
            var params = new URLSearchParams(resUrl.search);
            params.set("token", token);
            resUrl.search = params.toString();
            result = resUrl.toString();
        }
        return result;
    };
    /**
     * @private
     *
     * Contains fallback logic for determining a content's extent.
     *
     * The fallback priority is as follows:
     * 1) item's extent (if valid bbox)
     * 2) extent enrichment from the hub api (if coordinates are valid bbox)
     * 3) layer's extent (if spatial reference is 4326)
     *
     * If none of these conditions are met, undefined is returned.
     *
     * @param item
     * @param layer
     * @param extentEnrichment
     * @returns the correct extent in a bbox format, or undefined
     */
    var determineExtent = function (item, extentEnrichment, layer) {
        var itemExtent = isBBox(item.extent) ? item.extent : undefined;
        var extentEnrichmentCoordinates = isBBox(extentEnrichment === null || extentEnrichment === void 0 ? void 0 : extentEnrichment.coordinates)
            ? extentEnrichment.coordinates
            : undefined;
        var layerExtent = getProp(layer, "extent.spatialReference.wkid") === 4326
            ? extentToBBox(layer.extent)
            : undefined;
        return itemExtent || extentEnrichmentCoordinates || layerExtent;
    };
    /**
     * @private
     *
     * Extracts the first contact from a given formal item metadata path.
     * This is particularly helpful if the contact path is either an object or an array.
     *
     * Note: the raw contact object must have the following properties:
     * - `rpIndName`: name of the individual
     * - `rpOrgName`: name of the individual's organization
     *
     * @param metadata formal item metadata
     * @param path path to the contact object/array
     * @returns
     */
    var extractFirstContact = function (metadata, path) {
        var rawContacts = getProp(metadata, path) || {};
        var _a = Array.isArray(rawContacts)
            ? rawContacts[0]
            : rawContacts, rpIndName = _a.rpIndName, rpOrgName = _a.rpOrgName;
        return { individualName: rpIndName, organizationName: rpOrgName };
    };
    /**
     * Determines the correct orgId for an item.
     * Note: it's undocumented, but the portal API will return orgId for items... sometimes.
     *
     * @param item
     * @param ownerUser item owner's hydrated user object
     */
    var getItemOrgId = function (item, ownerUser) {
        return item.orgId || (ownerUser === null || ownerUser === void 0 ? void 0 : ownerUser.orgId);
    };
    /**
     * Calculates the Publisher display info for the given item.
     * Utilizes this fallback pattern:
     * 1) Formal Item Metadata > Resource > Citation > Contact
     * 2) Formal Item Metadata > Resource > Contact
     * 3) Item’s Owner and Org Name
     * 4) Undefined (Item Owner / Org are private and we can't access additional info)
     *
     * @param item
     * @param metadata
     * @param org portal info of the item's organization
     * @param ownerUser the item owner's hydrated user
     * @returns
     */
    var getPublisherInfo = function (item, metadata, org, ownerUser) {
        var result = {
            nameSource: exports.PublisherSource.None,
            organizationSource: exports.PublisherSource.None,
        };
        var citationContact = extractFirstContact(metadata, "metadata.dataIdInfo.idCitation.citRespParty");
        var resourceContact = extractFirstContact(metadata, "metadata.dataIdInfo.idPoC");
        var metadataContact = extractFirstContact(metadata, "metadata.mdContact");
        // Determine publisher name properties
        var ownerFullName = getProp(ownerUser, "fullName");
        if (citationContact.individualName) {
            result.name = citationContact.individualName;
            result.nameSource = exports.PublisherSource.CitationContact;
        }
        else if (resourceContact.individualName) {
            result.name = resourceContact.individualName;
            result.nameSource = exports.PublisherSource.ResourceContact;
        }
        else if (metadataContact.individualName) {
            result.name = metadataContact.individualName;
            result.nameSource = exports.PublisherSource.MetadataContact;
        }
        else if (ownerFullName) {
            result.name = ownerFullName;
            result.username = ownerUser.username;
            result.nameSource = exports.PublisherSource.ItemOwner;
        }
        // Determine publisher org properties
        var orgName = getProp(org, "name");
        if (citationContact.organizationName) {
            result.organization = citationContact.organizationName;
            result.organizationSource = exports.PublisherSource.CitationContact;
        }
        else if (resourceContact.organizationName) {
            result.organization = resourceContact.organizationName;
            result.organizationSource = exports.PublisherSource.ResourceContact;
        }
        else if (metadataContact.organizationName) {
            result.organization = metadataContact.organizationName;
            result.organizationSource = exports.PublisherSource.MetadataContact;
        }
        else if (orgName) {
            result.organization = orgName;
            result.orgId = getItemOrgId(item, ownerUser);
            result.organizationSource = exports.PublisherSource.ItemOwner;
        }
        // We assume the item belongs to external org if no org info is available and the item is private
        result.isExternal =
            result.organizationSource === exports.PublisherSource.None &&
                item.access !== "public";
        return result;
    };

    var STANDARD_LICENSES = [
        {
            type: "CC0-1.0",
            abbr: "CC0",
            name: "Public Domain Dedication",
            url: "http://creativecommons.org/publicdomain/zero/1.0",
        },
        {
            type: "CC-BY-4.0",
            abbr: "CC BY",
            name: "Attribution 4.0 International",
            url: "http://creativecommons.org/licenses/by/4.0",
        },
        {
            type: "CC-BY-3.0",
            abbr: "CC BY 3.0",
            name: "Attribution 3.0 Unported",
            url: "http://creativecommons.org/licenses/by/3.0",
        },
        {
            type: "CC-BY-2.5",
            abbr: "CC BY 2.5",
            name: "Attribution 2.5 Generic",
            url: "http://creativecommons.org/licenses/by/2.5",
        },
        {
            type: "CC-BY-2.0",
            abbr: "CC BY 2.0",
            name: "Attribution 2.0 Generic",
            url: "http://creativecommons.org/licenses/by/2.0",
        },
        {
            type: "CC-BY-1.0",
            abbr: "CC BY 1.0",
            name: "Attribution 1.0 Generic",
            url: "http://creativecommons.org/licenses/by/1.0",
        },
        {
            type: "CC-BY-SA-4.0",
            abbr: "CC BY-SA",
            name: "Attribution-ShareAlike 4.0 International",
            url: "http://creativecommons.org/licenses/by-sa/4.0",
        },
        {
            type: "CC-BY-SA-3.0",
            abbr: "CC BY-SA 3.0",
            name: "Attribution-ShareAlike 3.0 Unported",
            url: "http://creativecommons.org/licenses/by-sa/3.0",
        },
        {
            type: "CC-BY-SA-2.5",
            abbr: "CC BY-SA 2.5",
            name: "Attribution-ShareAlike 2.5 Generic",
            url: "http://creativecommons.org/licenses/by-sa/2.5",
        },
        {
            type: "CC-BY-SA-2.0",
            abbr: "CC BY-SA 2.0",
            name: "Attribution-ShareAlike 2.0 Generic",
            url: "http://creativecommons.org/licenses/by-sa/2.0",
        },
        {
            type: "CC-BY-SA-1.0",
            abbr: "CC BY-SA 1.0",
            name: "Attribution-ShareAlike 1.0 Generic",
            url: "http://creativecommons.org/licenses/by-sa/1.0",
        },
        {
            type: "CC-BY-ND-4.0",
            abbr: "CC BY-ND",
            name: "Attribution-NoDerivatives 4.0 International",
            url: "http://creativecommons.org/licenses/by-nd/4.0",
        },
        {
            type: "CC-BY-ND-3.0",
            abbr: "CC BY-ND 3.0",
            name: "Attribution-NoDerivs 3.0 Unported",
            url: "http://creativecommons.org/licenses/by-nd/3.0",
        },
        {
            type: "CC-BY-ND-2.5",
            abbr: "CC BY-ND 2.5",
            name: "Attribution-NoDerivs 2.5 Generic",
            url: "http://creativecommons.org/licenses/by-nd/2.5",
        },
        {
            type: "CC-BY-ND-2.0",
            abbr: "CC BY-ND 2.0",
            name: "Attribution-NoDerivs 2.0 Generic",
            url: "http://creativecommons.org/licenses/by-nd/2.0",
        },
        {
            type: "CC-BY-ND-1.0",
            abbr: "CC BY-ND 1.0",
            name: "Attribution-NoDerivs 1.0 Generic",
            url: "http://creativecommons.org/licenses/by-nd/1.0",
        },
        {
            type: "CC-BY-NC-4.0",
            abbr: "CC BY-NC",
            name: "Attribution-NonCommercial 4.0 International",
            url: "https://creativecommons.org/licenses/by-nc/4.0",
        },
        {
            type: "CC-BY-NC-3.0",
            abbr: "CC BY-NC 3.0",
            name: "Attribution-NonCommercial 3.0 Unported",
            url: "https://creativecommons.org/licenses/by-nc/3.0",
        },
        {
            type: "CC-BY-NC-2.5",
            abbr: "CC BY-NC 2.5",
            name: "Attribution-NonCommercial 2.5 Generic",
            url: "https://creativecommons.org/licenses/by-nc/2.5",
        },
        {
            type: "CC-BY-NC-2.0",
            abbr: "CC BY-NC 2.0",
            name: "Attribution-NonCommercial 2.0 Generic",
            url: "https://creativecommons.org/licenses/by-nc/2.0",
        },
        {
            type: "CC-BY-NC-1.0",
            abbr: "CC BY-NC 1.0",
            name: "Attribution-NonCommercial 1.0 Generic",
            url: "https://creativecommons.org/licenses/by-nc/1.0",
        },
        {
            type: "CC-BY-NC-SA-4.0",
            abbr: "CC BY-NC-SA",
            name: "Attribution-NonCommercial-ShareAlike 4.0 International",
            url: "https://creativecommons.org/licenses/by-nc-sa/4.0",
        },
        {
            type: "CC-BY-NC-SA-3.0",
            abbr: "CC BY-NC-SA 3.0",
            name: "Attribution-NonCommercial-ShareAlike 3.0 Unported",
            url: "https://creativecommons.org/licenses/by-nc-sa/3.0",
        },
        {
            type: "CC-BY-NC-SA-2.5",
            abbr: "CC BY-NC-SA 2.5",
            name: "Attribution-NonCommercial-ShareAlike 2.5 Generic",
            url: "https://creativecommons.org/licenses/by-nc-sa/2.5",
        },
        {
            type: "CC-BY-NC-SA-2.0",
            abbr: "CC BY-NC-SA 2.0",
            name: "Attribution-NonCommercial-ShareAlike 2.0 Generic",
            url: "https://creativecommons.org/licenses/by-nc-sa/2.0",
        },
        {
            type: "CC-BY-NC-SA-1.0",
            abbr: "CC BY-NC-SA 1.0",
            name: "Attribution-NonCommercial-ShareAlike 1.0 Generic",
            url: "https://creativecommons.org/licenses/by-nc-sa/1.0",
        },
        {
            type: "CC-BY-NC-ND-4.0",
            abbr: "CC BY-NC-ND",
            name: "Attribution-NonCommercial-NoDerivatives 4.0 International",
            url: "https://creativecommons.org/licenses/by-nc-nd/4.0",
        },
        {
            type: "CC-BY-NC-ND-3.0",
            abbr: "CC BY-NC-ND 3.0",
            name: "Attribution-NonCommercial-NoDerivs 3.0 Unported",
            url: "https://creativecommons.org/licenses/by-nc-nd/3.0",
        },
        {
            type: "CC-BY-NC-ND-2.5",
            abbr: "CC BY-NC-ND 2.5",
            name: "Attribution-NonCommercial-NoDerivs 2.5 Generic",
            url: "https://creativecommons.org/licenses/by-nc-nd/2.5",
        },
        {
            type: "CC-BY-NC-ND-2.0",
            abbr: "CC BY-NC-ND 2.0",
            name: "Attribution-NonCommercial-NoDerivs 2.0 Generic",
            url: "https://creativecommons.org/licenses/by-nc-nd/2.0",
        },
        {
            type: "CC-BY-NC-ND-1.0",
            abbr: "CC BY-NC-ND 1.0",
            name: "Attribution-NonCommercial-NoDerivs 1.0 Generic",
            url: "https://creativecommons.org/licenses/by-nc-nd/1.0",
        },
        {
            type: "PDDL-1.0",
            abbr: "PDDL",
            name: "ODC Public Domain Dedication and License",
            url: "http://opendatacommons.org/licenses/pddl/summary",
        },
        {
            type: "ODbL-1.0",
            abbr: "ODbL",
            name: "ODC Open Database License",
            url: "http://opendatacommons.org/licenses/odbl/summary",
        },
        {
            type: "ODC-BY-1.0",
            abbr: "ODC BY",
            name: "ODC Attribution License",
            url: "http://opendatacommons.org/licenses/by/summary",
        },
    ];
    /**
     * generates the structured license of an item based on its
     * configured "licenseInfo"
     * @param rawLicense an item's raw licenseInfo string
     * @returns {IStructuredLicense}
     */
    function getStructuredLicense(rawLicense) {
        var structuredLicense;
        rawLicense = rawLicense || "";
        // (1) start by assuming it's either a custom license, or, if there's no
        // raw license, then there's no license at all
        structuredLicense = {
            type: rawLicense ? "custom" : "none",
            text: rawLicense,
        };
        // (2) Check for standard licenses: If the name, abbr, or url of any standard
        // license is in the raw license text, we assume that is the license.
        var hasStandardLicense = false;
        var matchingStandardLicenses = STANDARD_LICENSES.filter(function (standardLicense) {
            return licenseTextContainsStandardLicenseAttributes(rawLicense, standardLicense);
        });
        if (matchingStandardLicenses.length) {
            hasStandardLicense = true;
            structuredLicense = matchingStandardLicenses.pop();
        }
        // (3) if not a standard license, we check if the raw license is a url or link
        if (!hasStandardLicense) {
            var url = void 0;
            // a. check if the the raw license is simply a url
            if (isParseableAsURL(rawLicense)) {
                url = rawLicense;
            }
            // b. check if the raw license is simply a link (i.e. an anchor tag with an href)
            else if (isSingleAnchorWithHrefAttribute(rawLicense)) {
                var hrefRegex = new RegExp(/href\s?=\s?["'](.*?)["']/);
                var match = rawLicense.match(hrefRegex);
                var href = match[1];
                url = href;
            }
            if (url) {
                structuredLicense.url = url;
                structuredLicense.text = "";
            }
        }
        if (!structuredLicense.text)
            delete structuredLicense.text;
        return structuredLicense;
    }
    /**
     * helper function to determine if a raw license is one of the standard licenses.
     * We say it is if the raw license includes the name, url or abbreviation of the
     * standard license
     * @param rawLicense an item's raw licenseInfo string
     * @param standardLicense one of the standard licenses
     * @returns {boolean}
     */
    function licenseTextContainsStandardLicenseAttributes(rawLicense, standardLicense) {
        rawLicense = rawLicense.toLowerCase();
        return (rawLicense.includes(standardLicense.name.toLowerCase()) ||
            rawLicense.includes(standardLicense.url.toLowerCase()) ||
            rawLicense.includes(standardLicense.abbr.toLowerCase()));
    }
    /**
     * helper function to determine if an input string can be parsed
     * as a URL with a protocol
     * @param value string to check
     * @returns {boolean}
     */
    function isParseableAsURL(value) {
        try {
            var url = new URL(value);
            return !!url.protocol;
        }
        catch (err) {
            // just return fals if the URL couldn't be parsed
            return false;
        }
    }
    /**
     * helper function to determine if the raw license is simply a link, i.e. a single
     * anchor tag with an href attribute: <a href="https://google.com">Click</a> or <a href="https://google.com" />
     * @param rawLicense an item's raw licenseInfo string
     * @returns {boolean}
     */
    function isSingleAnchorWithHrefAttribute(rawLicense) {
        var isSingleAnchorTagRegex = new RegExp(/^<a[\s]+(href\s?=\s?["'].*?["'])+([^>]?)>((?:.(?!\<\/a\>))*.)?<\/a>$|^<a[\s]+(href\s?=\s?["'].*?["'])+([^>]?)\/>/);
        return isSingleAnchorTagRegex.test(rawLicense);
    }

    /**
     * Get the fully qualified URL for an item's thumbnail
     * @param item w/ id, thumbnail, and access
     * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
     * @param optionsOrToken options including width and/or token for the current user's session; will only be appended as a query parameter if the item's access is **not** `public`
     * @returns URL to the item's thumbnail, defaults to `https://www.arcgis.com/sharing/rest/content/items/{item.id}/info/{item.thumbnail}`. Returns `null` if the item does not have a thumbnail assigned.
     */
    function getItemThumbnailUrl(item, portalUrlOrObject, optionsOrToken) {
        if (!item || !item.thumbnail) {
            // TODO: handle image types by returning the image (item data) itself?
            return null;
        }
        // tslint:disable-next-line prefer-const
        var _a = optionsOrToken || {}, token = _a.token, width = _a.width;
        // TODO: at the next breaking change drop support for passing token as string
        if (!token && typeof optionsOrToken === "string") {
            token = optionsOrToken;
        }
        var itemApiUrl = getItemApiUrl(item, portalUrlOrObject, token);
        var _b = itemApiUrl.split("?"), baseUrl = _b[0], search = _b[1];
        var searchParams = new URLSearchParams(search);
        searchParams.delete("f");
        if (width) {
            searchParams.append("w", width + "");
        }
        var newSearch = searchParams.toString();
        var url = baseUrl + "/info/" + item.thumbnail;
        return newSearch ? url + "?" + newSearch : url;
    }

    // helper fns - move this to _internal if needed elsewhere
    var getOnlyQueryLayer = function (layers) {
        var layer = layers && layers.length === 1 ? layers[0] : undefined;
        return layer && layer.capabilities.includes("Query") ? layer : undefined;
    };
    var shouldUseLayerInfo = function (item, layer, layers, requestOptions) {
        return (!isProxiedCSV(item, requestOptions) &&
            layer &&
            layers &&
            layers.length > 1 &&
            // we use item info instead of layer info for single layer items
            !getLayerIdFromUrl(item.url));
    };
    // this logic adapted from hub-indexer's determineName(), see
    // https://github.com/ArcGIS/hub-indexer/blob/8f4dd6f928124c1f35dd02bc11bd996191ee1160/packages/duke/compose/common.js#L7-L34
    var getContentName = function (item, layer, layers, requestOptions) {
        return ((shouldUseLayerInfo(item, layer, layers, requestOptions)
            ? layer.name
            : item.title || item.name) || "").replace(/_/g, " ");
    };
    /**
     * The possible values for updateFrequency
     *
     * @enum {string}
     */
    exports.UpdateFrequency = void 0;
    (function (UpdateFrequency) {
        UpdateFrequency["Continual"] = "continual";
        UpdateFrequency["Daily"] = "daily";
        UpdateFrequency["Weekly"] = "weekly";
        UpdateFrequency["Fortnightly"] = "fortnightly";
        UpdateFrequency["Monthly"] = "monthly";
        UpdateFrequency["Quarterly"] = "quarterly";
        UpdateFrequency["Biannually"] = "biannually";
        UpdateFrequency["Annually"] = "annually";
        UpdateFrequency["AsNeeded"] = "as-needed";
        UpdateFrequency["Irregular"] = "irregular";
        UpdateFrequency["NotPlanned"] = "not-planned";
        UpdateFrequency["Unknown"] = "unknown";
        UpdateFrequency["Semimonthly"] = "semimonthly";
    })(exports.UpdateFrequency || (exports.UpdateFrequency = {}));
    var getUpdateFrequencyFromMetadata = function (metadata, identifier) {
        var updateFrequencyMap = {
            "001": exports.UpdateFrequency.Continual,
            "002": exports.UpdateFrequency.Daily,
            "003": exports.UpdateFrequency.Weekly,
            "004": exports.UpdateFrequency.Fortnightly,
            "005": exports.UpdateFrequency.Monthly,
            "006": exports.UpdateFrequency.Quarterly,
            "007": exports.UpdateFrequency.Biannually,
            "008": exports.UpdateFrequency.Annually,
            "009": exports.UpdateFrequency.AsNeeded,
            "010": exports.UpdateFrequency.Irregular,
            "011": exports.UpdateFrequency.NotPlanned,
            "012": exports.UpdateFrequency.Unknown,
            "013": exports.UpdateFrequency.Semimonthly,
        };
        return updateFrequencyMap[getValueFromMetadata(metadata, identifier || "updateFrequency")];
    };
    var getDateInfoFromMetadata = function (metadata, identifier) {
        var metadataDateInfo = parseISODateString(getValueFromMetadata(metadata, identifier));
        return (metadataDateInfo && __assign(__assign({}, metadataDateInfo), { source: "metadata." + getMetadataPath(identifier) }));
    };
    var getLastEditDateInfo = function (content, layerOrServer) {
        var source = layerOrServer + ".editingInfo.lastEditDate";
        var lastEditDate = getProp(content, source);
        return (lastEditDate && {
            date: new Date(lastEditDate),
            source: source,
            // NOTE: this default was taken from _enrichDates
            precision: DatePrecision.Day,
        });
    };
    var getItemDateInfo = function (item, createdOrModified) {
        return {
            date: new Date(item[createdOrModified]),
            // NOTE: this was set to Day in _enrichDates()
            // but I wonder if it should be Time instead?
            precision: DatePrecision.Day,
            source: "item." + createdOrModified,
        };
    };
    var getUpdatedDateInfo = function (item, options) {
        return (
        // prefer metadata revise date
        getDateInfoFromMetadata(options.metadata, "reviseDate") ||
            // then layer last edit date
            getLastEditDateInfo(options, "layer") ||
            // then server last edit date
            getLastEditDateInfo(options, "server") ||
            // fall back to item modified date
            getItemDateInfo(item, "modified"));
    };
    var getPublishedDateInfo = function (item, metadata) {
        return (
        // prefer metadata publish date
        getDateInfoFromMetadata(metadata, "pubDate") ||
            // then metadata create date
            getDateInfoFromMetadata(metadata, "createDate") ||
            // fall back to item created date
            getItemDateInfo(item, "created"));
    };
    var getMetadataUpdatedDateInfo = function (item, metadata) {
        // prefer date from metadata
        return (getDateInfoFromMetadata(metadata, "metadataUpdatedDate") ||
            // default to when the item was last modified
            getItemDateInfo(item, "modified"));
    };
    // public API
    /**
     * Compute the content type calcite-icon based on the content type
     * @param content type
     * @returns content type icon
     */
    var getContentTypeIcon = function (contentType) {
        var _a;
        var type = camelize(contentType);
        var iconMap = {
            appbuilderExtension: "file",
            appbuilderWidgetPackage: "widgets-source",
            application: "web",
            applicationConfiguration: "app-gear",
            arcgisProMap: "desktop",
            cadDrawing: "file-cad",
            cityEngineWebScene: "urban-model",
            codeAttachment: "file-code",
            codeSample: "file-code",
            colorSet: "palette",
            contentCategorySet: "label",
            csv: "file-csv",
            cSV: "file-csv",
            cSVCollection: "file-csv",
            dashboard: "dashboard",
            desktopApplication: "desktop",
            documentLink: "link",
            excaliburImageryProject: "file",
            explorerMap: "file",
            exportPackage: "file",
            featureCollection: "data",
            featureCollectionTemplate: "file",
            featureLayer: "data",
            featureService: "collection",
            fileGeodatabase: "data",
            form: "survey",
            geocodingService: "file",
            geodataService: "file",
            geometryService: "file",
            geopackage: "file",
            geoprocessingService: "file",
            globeLayer: "layers",
            globeService: "file",
            hubInitiative: "initiative",
            hubInitiativeTemplate: "initiative-template",
            hubPage: "browser",
            hubProject: "projects",
            hubSiteApplication: "web",
            image: "file-image",
            imageService: "data",
            insightsModel: "file",
            insightsPage: "graph-moving-average",
            insightsTheme: "palette",
            insightsWorkbook: "graph-moving-average",
            iWorkPages: "file-text",
            iWorkKeynote: "presentation",
            iWorkNumbers: "file-report",
            kML: "data",
            kMLCollection: "data",
            layer: "layers",
            layerPackage: "layers",
            layerTemplate: "file",
            locatorPackage: "file",
            mapArea: "file",
            mapDocument: "map-contents",
            mapImageLayer: "collection",
            mapPackage: "file",
            mapService: "collection",
            microsoftExcel: "file-report",
            microsoftPowerpoint: "presentation",
            microsoftWord: "file-text",
            mission: "file",
            mobileMapPackage: "map-contents",
            nativeApplication: "mobile",
            nativeApplicationInstaller: "file",
            nativeApplicationTemplate: "file",
            mobileApplication: "mobile",
            networkAnalysisService: "file",
            notebook: "code",
            orientedImageryCatalog: "file",
            orthoMappingProject: "file",
            orthoMappingTemplate: "file",
            pDF: "file-pdf",
            quickCaptureProject: "mobile",
            rasterFunctionTemplate: "file",
            rasterLayer: "map",
            realTimeAnalytic: "file",
            relationalDatabaseConnection: "file",
            reportTemplate: "file",
            sceneLayer: "data",
            sceneService: "urban-model",
            serviceDefinition: "file",
            shapefile: "data",
            solution: "puzzle-piece",
            sqliteGeodatabase: "file",
            statisticalDataCollection: "file",
            storymap: "tour",
            storyMap: "tour",
            storymapTheme: "palette",
            symbolSet: "file",
            table: "table",
            urbanModel: "urban-model",
            vectorTilePackage: "file-shape",
            vectorTileService: "map",
            visioDocument: "conditional-rules",
            webExperience: "apps",
            webMap: "map",
            webMappingApplication: "apps",
            webScene: "urban-model",
            wfs: "map",
            wFS: "map",
            wMS: "map",
            wMTS: "map",
            workflowManagerService: "file",
            workforceProject: "list-check",
        };
        return (_a = iconMap[type]) !== null && _a !== void 0 ? _a : "file";
    };
    /**
     * get portal URLs (home, API, data, and thumbnail) for an item
     *
     * @param item Item
     * @param requestOptions Request options
     * @returns a hash with the portal URLs
     * @export
     */
    var getPortalUrls = function (item, requestOptions) {
        var authentication = requestOptions.authentication;
        var token = authentication && authentication.token;
        // add properties that depend on portal
        var portalHome = getItemHomeUrl(item.id, requestOptions);
        // the URL of the item's Portal API end point
        var portalApi = getItemApiUrl(item, requestOptions, token);
        // the URL of the item's data API end point
        var portalData = getItemDataUrl(item, requestOptions, token);
        // the full URL of the thumbnail
        var thumbnail = getItemThumbnailUrl(item, requestOptions, {
            token: token,
        });
        return {
            portalHome: portalHome,
            portalApi: portalApi,
            portalData: portalData,
            thumbnail: thumbnail,
        };
    };
    /**
     * If an item is a proxied csv, returns the url for the proxying feature layer.
     * If the item is not a proxied csv, returns undefined.
     *
     * @param item
     * @param requestOptions Hub Request Options (including whether we're in portal)
     * @returns
     */
    var getProxyUrl = function (item, requestOptions) {
        var result;
        if (isProxiedCSV(item, requestOptions)) {
            // Sometimes hubApiUrl includes /api/v3, sometimes it doesn't
            var baseUrl = getHubApiUrl(requestOptions).replace("/api/v3", "");
            result = baseUrl + "/datasets/" + item.id + "_0/FeatureServer/0";
        }
        return result;
    };
    /**
     * parse layer id from a service URL
     * @param {string} url
     * @returns {string} layer id
     */
    var getLayerIdFromUrl = function (url) {
        var endsWithNumberSegmentRegEx = /\/\d+$/;
        var matched = url && url.match(endsWithNumberSegmentRegEx);
        return matched && matched[0].slice(1);
    };
    /**
     * Case-insensitive check if the type is "Feature Service"
     * @param {string} type - item's type
     * @returns {boolean}
     */
    var isFeatureService$1 = function (type) {
        return type && type.toLowerCase() === "feature service";
    };
    /**
     * ```js
     * import { normalizeItemType } from "@esri/hub-common";
     * //
     * normalizeItemType(item)
     * > [ 'Hub Site Application' ]
     * ```
     * @param item Item object.
     * @returns type of the input item.
     *
     */
    function normalizeItemType(item) {
        if (item === void 0) { item = {}; }
        var ret = item.type;
        var typeKeywords = item.typeKeywords || [];
        if (item.type === "Site Application" ||
            (item.type === "Web Mapping Application" &&
                includes(typeKeywords, "hubSite"))) {
            ret = "Hub Site Application";
        }
        if (item.type === "Site Page" ||
            (item.type === "Web Mapping Application" &&
                includes(typeKeywords, "hubPage"))) {
            ret = "Hub Page";
        }
        if (item.type === "Hub Initiative" &&
            includes(typeKeywords, "hubInitiativeTemplate")) {
            ret = "Hub Initiative Template";
        }
        if (item.type === "Web Mapping Application" &&
            includes(typeKeywords, "hubSolutionTemplate")) {
            ret = "Solution";
        }
        return ret;
    }
    /**
     * return the layerId if we can tell that item is a single layer service
     * @param {*} item from AGO
     * @returns {string} layer id
     */
    var getItemLayerId = function (item) {
        // try to parse it from the URL, but failing that we check for
        // the Singlelayer typeKeyword, which I think is set when you create the item in AGO
        // but have not verified that, nor that we should alway return '0' in that case
        return (getLayerIdFromUrl(item.url) ||
            (isFeatureService$1(item.type) &&
                item.typeKeywords &&
                includes(item.typeKeywords, "Singlelayer") &&
                "0"));
    };
    /**
     * given an item, get the id to use w/ the Hub API
     * @param item
     * @returns Hub API id (hubId)
     */
    var getItemHubId = function (item) {
        if (item.access !== "public") {
            // the hub only indexes public items
            return;
        }
        var id = item.id;
        var layerId = getItemLayerId(item);
        return layerId ? id + "_" + layerId : id;
    };
    /**
     * Splits item category strings at slashes and discards the "Categories" keyword
     *
     * ```
     * ["/Categories/Boundaries", "/Categories/Planning and cadastre/Property records", "/Categories/Structure"]
     * ```
     * Should end up being
     * ```
     * ["Boundaries", "Planning and cadastre", "Property records", "Structure"]
     * ```
     *
     * @param categories - an array of strings
     * @private
     */
    function parseItemCategories(categories) {
        if (!categories)
            return categories;
        var exclude = ["categories", ""];
        var parsed = categories.map(function (cat) { return cat.split("/"); });
        var flattened = parsed.reduce(function (acc, arr, _) { return __spreadArrays(acc, arr); }, []);
        return flattened.filter(function (cat) { return !includes(exclude, cat.toLowerCase()); });
    }
    /**
     * get the layer object for
     * - an item that refers to a specific layer of a service
     * - a multi-layer services (if a layer id was passed in)
     * - a single layer feature service
     * @param item
     * @param layers the layers and tables returned from the service
     * @param layerId a specific id
     * @returns layer definition
     * @private
     */
    var getItemLayer = function (item, layers, layerId) {
        // if item refers to a layer we always want to use that layer id
        // otherwise use the layer id that was passed in (if any)
        var _layerIdFromUrl = getLayerIdFromUrl(item.url);
        var _layerId = _layerIdFromUrl ? parseInt(_layerIdFromUrl, 10) : layerId;
        return (layers &&
            (!isNil(_layerId)
                ? // find the explicitly set layer id
                    layers.find(function (_layer) { return _layer.id === _layerId; })
                : // for feature servers with a single layer always show the layer
                    isFeatureService$1(item.type) && getOnlyQueryLayer(layers)));
    };
    /**
     * determine if a layer is a layer view
     * @param layer
     * @returns
     * @private
     */
    var isLayerView = function (layer) {
        return layer.isView;
    };
    var determineHubId = function (item, layer, requestOptions) {
        // Proxied CSVs are one offs in that we don't index the proxied layer,
        // so we cannot append _0. Return item id instead.
        if (isProxiedCSV(item, requestOptions)) {
            return item.id;
        }
        return canUseHubApiForItem(item, requestOptions)
            ? layer
                ? item.id + "_" + layer.id
                : getItemHubId(item)
            : undefined;
    };
    /**
     * Compose a new content object out of an item, enrichments, and context
     * @param item
     * @param options any enrichments, current state (selected layerId), or context (requestOptions)
     * @returns new content object
     */
    var composeContent = function (item, options) {
        // extract enrichments and context out of the options
        var _a = options || {}, slug = _a.slug, requestOptions = _a.requestOptions, data = _a.data, metadata = _a.metadata, groupIds = _a.groupIds, ownerUser = _a.ownerUser, org = _a.org, errors = _a.errors, server = _a.server, layers = _a.layers, recordCount = _a.recordCount, boundary = _a.boundary, extent = _a.extent, searchDescription = _a.searchDescription, statistics = _a.statistics;
        // set common variables that we will use in the derived properties below
        var layer = getItemLayer(item, layers, options === null || options === void 0 ? void 0 : options.layerId);
        // NOTE: we only set hubId for public items in online
        var hubId = determineHubId(item, layer, requestOptions);
        var identifier = slug || hubId || item.id;
        // whether or not we should show layer info for name, description, etc
        var name = getContentName(item, layer, layers, requestOptions);
        var _layerDescription = shouldUseLayerInfo(item, layer, layers, requestOptions) &&
            layer.description;
        // so much depends on type
        var type = layer
            ? // use layer type (Feature Layer, Table, etc) for layer content
                layer.type
            : // otherwise use the normalized item type
                normalizeItemType(item);
        // all the urls
        var urls = __assign({ relative: getHubRelativeUrl(type, identifier, item.typeKeywords) }, (requestOptions && getPortalUrls(item, requestOptions)));
        var _proxyUrl = getProxyUrl(item, requestOptions);
        // NOTE: I'd rather not compute these date values up front,
        // but they are used by several getters below, so we do it here only once
        var _updatedDateInfo = getUpdatedDateInfo(item, {
            metadata: metadata,
            layer: layer,
            server: server,
        });
        var _publishedDateInfo = getPublishedDateInfo(item, metadata);
        var _metadataUpdatedDateInfo = getMetadataUpdatedDateInfo(item, metadata);
        // return all of the above composed into a content object
        return __assign(__assign({ 
            // a reference to underlying item
            item: item }, item), { 
            // item enrichments
            slug: slug,
            data: data,
            metadata: metadata,
            groupIds: groupIds,
            ownerUser: ownerUser,
            org: org, errors: errors || [], 
            // server enrichments
            server: server,
            layers: layers,
            recordCount: recordCount,
            // enrichments from the Hub API (boundary is below)
            statistics: statistics,
            // derived properties
            // NOTE: in the getters below you can **not** use `this`
            // these are not meant to provide live updating computed props
            // their purpose is to avoid computing all these values above
            // especially where we want to defer computation of less used props
            hubId: hubId,
            identifier: identifier, get isProxied() {
                return !!_proxyUrl;
            }, layer: layer,
            name: name, get title() {
                return name;
            },
            get description() {
                return _layerDescription || item.description;
            }, type: type, get family() {
                return getFamily(type);
            }, get url() {
                return _proxyUrl
                    ? _proxyUrl
                    : layer
                        ? parseServiceUrl(item.url) + "/" + layer.id
                        : item.url;
            }, get categories() {
                return parseItemCategories(item.categories);
            },
            get actionLinks() {
                return item.properties && item.properties.links;
            },
            get hubActions() {
                return item.properties && item.properties.actions;
            },
            get isDownloadable() {
                return isDownloadable(item);
            },
            get structuredLicense() {
                return getStructuredLicense(item.licenseInfo);
            },
            get permissions() {
                return {
                    visibility: item.access,
                    control: item.itemControl || "view",
                };
            },
            get extent() {
                return determineExtent(item, extent, layer);
            }, 
            // would require us to do client-side projection of server/layer extent
            get boundary() {
                // NOTE: the boundary from the Hub API will be undefined if item.properties.boundary === 'none'
                return (boundary === null || boundary === void 0 ? void 0 : boundary.provenance) === "automatic"
                    ? boundary
                    : getContentBoundary(item);
            }, get summary() {
                return (searchDescription ||
                    // TODO: this should use the logic for the Hub API's searchDescription
                    // see: https://github.com/ArcGIS/hub-indexer/blob/b352cfded8221a967ac80447879d493db6476d7a/packages/duke/compose/dataset.js#L238-L250
                    item.snippet ||
                    item.description);
            }, urls: urls, get portalHomeUrl() {
                return urls.portalHome;
            },
            get portalDataUrl() {
                return urls.portalData;
            },
            get portalApiUrl() {
                return urls.portalApi;
            },
            get thumbnailUrl() {
                return urls.thumbnail;
            },
            /** The date the item was created */
            get createdDate() {
                return new Date(item.created);
            }, createdDateSource: "item.created", get updatedDate() {
                return _updatedDateInfo.date;
            },
            get updatedDateSource() {
                return _updatedDateInfo.source;
            },
            get updatedDatePrecision() {
                return _updatedDateInfo.precision;
            },
            get modified() {
                return _updatedDateInfo.date.getTime();
            },
            get publishedDate() {
                return _publishedDateInfo.date;
            },
            get publishedDateSource() {
                return _publishedDateInfo.source;
            },
            get publishedDatePrecision() {
                return _publishedDateInfo.precision;
            },
            get metadataUpdatedDate() {
                return _metadataUpdatedDateInfo.date;
            },
            get metadataUpdatedDateSource() {
                return _metadataUpdatedDateInfo.source;
            },
            get metadataUpdatedDatePrecision() {
                return _metadataUpdatedDateInfo.precision;
            },
            get updateFrequency() {
                return getUpdateFrequencyFromMetadata(metadata);
            },
            get metadataUpdateFrequency() {
                return getUpdateFrequencyFromMetadata(metadata, "metadataUpdateFrequency");
            },
            get publisher() {
                return getPublisherInfo(item, metadata, org, ownerUser);
            },
            // TODO: is metrics in use?
            get metrics() {
                return item.properties && item.properties.metrics;
            }, get spatialReference() {
                var _a;
                // NOTE: I had to add || null just so packages/content/test/portal.test.ts would pass
                // we can remove that when that package is deprecated
                return (((_a = layer === null || layer === void 0 ? void 0 : layer.extent) === null || _a === void 0 ? void 0 : _a.spatialReference) || getItemSpatialReference(item) || null);
            },
            get viewDefinition() {
                // if this is a layer view and we have the item data
                // find the definition that corresponds to the current layer
                var dataLayer = layer &&
                    isLayerView(layer) &&
                    data &&
                    Array.isArray(data.layers) &&
                    data.layers.find(function (_layer) { return _layer.id === layer.id; });
                return dataLayer ? dataLayer.layerDefinition : undefined;
            }, get orgId() {
                return org ? org.id : getItemOrgId(item, ownerUser);
            },
            get contentTypeIcon() {
                /* Note: only returns calcite-icons */
                return getContentTypeIcon(type);
            },
            // deprecated properties
            // TODO: should we add these in legacy wrappers
            // like itemToContent or datasetToContent instead?
            get license() {
                /* tslint:disable no-console */
                console.warn("DEPRECATED: use structuredLicense instead");
                /* tslint:enable no-console */
                return { name: "Custom License", description: item.accessInformation };
            },
            get hubType() {
                /* tslint:disable no-console */
                console.warn("DEPRECATED: use family instead");
                /* tslint:enable no-console */
                return getFamily(type);
            },
            get additionalResources() {
                return getAdditionalResources(item, metadata);
            } });
    };

    //////////////////////
    // Slug Helpers
    //////////////////////
    /**
     * Parse item ID and layer ID (if any) from dataset record ID
     *
     * @param datasetId Hub API dataset record id ({itemId}_{layerId} or {itemId})
     * @returns A hash with the `itemId` and `layerId` (if any)
     */
    function parseDatasetId(datasetId) {
        var _a = datasetId ? datasetId.split("_") : [], itemId = _a[0], layerId = _a[1];
        return { itemId: itemId, layerId: layerId };
    }
    /**
     * Determine if an identifier is a Hub API slug
     *
     * @param identifier Hub API slug ({orgKey}::{title-as-slug} or {title-as-slug})
     * or record id ((itemId}_{layerId} or {itemId})
     * @returns true if the identifier is valid _and_ is **not** a record id
     */
    function isSlug(identifier) {
        var itemId = parseDatasetId(identifier).itemId;
        if (!itemId || isGuid(itemId)) {
            // it's either invalid, or an item id, or a dataset id
            return false;
        }
        // otherwise assume it's a slug
        return true;
    }
    /**
     * Add a context (prefix) to slug if it doesn't already have one
     *
     * @param slug Hub API slug (with or without context)
     * @param context usually a portal's orgKey
     * @returns slug with context ({context}::{slug})
     */
    function addContextToSlug(slug, context) {
        // the slug has an org key already e.g. dc::crime-incidents
        if (/.+::.+/.test(slug)) {
            return slug;
            // the slug belongs to the org that owns the site e.g. crime-incidents
        }
        else {
            return context + "::" + slug;
        }
    }
    /**
     * Remove context (prefix) from a slug
     *
     * @param slug Hub API slug with context
     * @param context usually a portal's orgKey
     * @returns slug without context
     */
    function removeContextFromSlug(slug, context) {
        if (context && slug.match("^" + context + "::")) {
            return slug.split(context + "::")[1];
        }
        else {
            return slug;
        }
    }

    /* Copyright (c) 2018-2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Allows an application to track a series of operations, storing information
     * about the arguments passes in and the results returned
     *
     * ```js
     * import { OperationStack } from '@esri/solution-common';
     *
     * const stack = new OperationStack();
     *
     * // start an operation by type
     * const id = stack.start('getItem');
     * //.. work happens...
     * stack.finish(id);
     *
     * // start an operation with an Operation object
     * stack.start({
     *   id: 'createItem_1',
     *   type: 'createItem',
     *   inputs: {
     *    item: {...truncated...},
     *    portal: 'https://www.arcgis.com',
     *    username: 'jsmith'
     *   },
     * });
     * // make the call
     * stack.finish('createItem_1', {newItemId: '00cf213'});
     *
     * // later you can get that information back out of the stack
     * const prevOp = stack.getOperation('createItem_1);
     *
     * // and if you need to roll back you can use the
     * // .cleanup and .output properties to help orchestrate
     *
     * ```
     *
     *
     * Can be used to implement "atomic" operations in an environment that does not
     * have this as a core feature
     */
    var OperationStack = /** @class */ (function () {
        /**
         * Creates an instance of OperationStack.
         * @memberof OperationStack
         */
        function OperationStack() {
            this.operations = [];
        }
        /**
         * Start an Operation
         *
         * ```js
         * const stack = new OperationStack();
         * stack.startOperation({
         *  id: 'get-bc3',
         *  type: 'getItem',
         *  cleanup: 'n/a',
         *  inputs: {
         *    id: 'bc3',
         *    owner: 'vader'
         *  }
         * });
         * // do work
         * stack.finish('get-bc3');
         * ```
         *
         *
         * @param {IOperation} operation
         * @memberof OperationStack
         */
        OperationStack.prototype.startOperation = function (operation) {
            var op = cloneObject$1(operation);
            op.startedAt = new Date().getTime();
            op.state = "working";
            this.operations.push(op);
        };
        /**
         * Start an operation without requiring a full operation
         *
         * ```js
         * const opId = stack.start('getItems');
         * //...work happens
         * stack.finish(opId);
         * ```
         *
         * @param {string} type Type of the operation. i.e. getItem
         * @param {Record<string, unknown>} [params] optionally pass in id, inputs, cleanup
         * @returns {string} Identifier of the new stack entry
         * @memberof OperationStack
         */
        OperationStack.prototype.start = function (type, params) {
            var op = {
                type: type,
                id: getWithDefault$1(params, "id", createId(type + "_")),
                inputs: getWithDefault$1(params, "inputs", {}),
                cleanup: getWithDefault$1(params, "cleanup", "n/a"),
                startedAt: new Date().getTime(),
                state: "working"
            };
            this.operations.push(op);
            return op.id;
        };
        /**
         * Returns a reference to an Operation
         *
         * @param {string} id Unique Identifier
         * @returns {Operation}
         * @memberof OperationStack
         */
        OperationStack.prototype.getOperation = function (id) {
            return this.operations.find(function (o) { return o.id === id; });
        };
        /**
         * Returns reference to the operations array
         *
         * @returns {Operation[]}
         * @memberof OperationStack
         */
        OperationStack.prototype.getOperations = function () {
            return this.operations;
        };
        /**
         * Inform the stack that an operation has finished.
         *
         * This will append in a duration property, and mark
         * the state as 'completed'.
         *
         * @param {string} id Unique identifier of the Operation
         * @param {Record<string, unknown>} [options] outputs
         * @memberof OperationStack
         */
        OperationStack.prototype.finish = function (id, options) {
            var op = this.getOperation(id);
            if (op) {
                op.duration = new Date().getTime() - op.startedAt;
                op.state = "completed";
                if (options) {
                    op.output = cloneObject$1(options);
                }
            }
            else {
                throw new Error("No operation with id " + id + " present in stack");
            }
        };
        /**
         * Merge a serialized operation stack into
         * a stack instance
         *
         * ```js
         *    import { OperationStack } from '@esri/solution-common';
         *    function someFunction() {
         *      const stack = new OperationStack();
         *      stack.start('getItem', {id: 'get-bc3'});
         *      // do some work...
         *      stack.finish('get-bc3');
         *
         *      const itm = {title: 'Fake Item', type: 'Web Map'};
         *      // create an entry for the function we are about to call...
         *      stack.start('createItem', {id: 'createItem_01', inputs: {item: itm}});
         *      // call a function that does work, and has it's own stack
         *      // and returns a serialized version as part of it's results
         *      return createItem(itm)
         *      .then((result) => {
         *        // tell the stack the last operation finished...
         *        stack.finish('createItem_01');
         *        // merge in the stack from the function we called
         *        stack.merge(result.stack);
         *        // > stack.getCompleted().length === 3
         *      });
         *    }
         *
         *    function createItem (itm) {
         *      const otherStack = new OperationStack();
         *      const id = otherStack.start('createItem');
         *      // make calls to create item etc
         *      otherStack.finish(id, {itemId: newItem.id});
         *      otherStack.start('protectItem', {id: 'protect-00c'});
         *      // make call to protect item...
         *      otherStack.finish('protect-00c');
         *      // all done... return a result with a stack
         *      return Promise.resolve({
         *        success:true,
         *        stack: otherStack.serialize()
         *      });
         *    }
         * ```
         *
         *  Typically used to create a comprehensive list of operations
         *  when a function returns a `SerializedOperationStack` as part of
         *  it's response
         *
         *
         * @param {ISerializedOperationStack} stack
         * @memberof OperationStack
         */
        OperationStack.prototype.merge = function (stack) {
            this.operations = __spreadArrays(this.operations, stack.operations);
        };
        /**
         * Get a list of the completed operations
         *
         * @returns {IOperation[]}
         * @memberof OperationStack
         */
        OperationStack.prototype.getCompleted = function () {
            return cloneObject$1(this.operations.filter(function (e) { return e.state === "completed"; }));
        };
        /**
         *  Return an array of working operations
         *
         * @returns {IOperation[]}
         * @memberof OperationStack
         */
        OperationStack.prototype.getWorking = function () {
            return cloneObject$1(this.operations.filter(function (e) { return e.state === "working"; }));
        };
        /**
         * Serialize the completed operations into a set of
         * human readable messages, sorted by the startedAt timestamp
         *
         *
         * @returns {string}
         * @memberof IOperationStack
         */
        OperationStack.prototype.toString = function () {
            // sort the operations by StartedAt
            var allOps = this.operations.sort(function (a, b) {
                if (a.startedAt < b.startedAt) {
                    return -1;
                }
                if (b.startedAt < a.startedAt) {
                    return 1;
                }
                return 0;
            });
            return allOps.map(getOperationMessage).join("\n");
        };
        /**
         * Serialize the stack into simple objects
         *
         * @returns {ISerializedOperationStack}
         * @memberof OperationStack
         */
        OperationStack.prototype.serialize = function () {
            return {
                operations: cloneObject$1(this.getOperations())
            };
        };
        return OperationStack;
    }());
    var OperationStack$1 = OperationStack;
    function getOperationMessage(op) {
        var msg = op.startedAt + " : Operation " + op.id + " started with inputs " + JSON.stringify(op.inputs) + " but was not completed";
        if (op.state === "completed") {
            msg = op.startedAt + " : Operation " + op.id + " took " + op.duration + " ms with inputs " + JSON.stringify(op.inputs) + " and output " + (op.output ? JSON.stringify(op.output) : "n/a");
        }
        return msg;
    }

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    		path: basedir,
    		exports: {},
    		require: function (path, base) {
    			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    		}
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var util = createCommonjsModule(function (module, exports) {

    const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
    const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
    const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
    const regexName = new RegExp('^' + nameRegexp + '$');

    const getAllMatches = function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    };

    const isName = function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === 'undefined');
    };

    exports.isExist = function(v) {
      return typeof v !== 'undefined';
    };

    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };

    /**
     * Copy all the properties of a into b.
     * @param {*} target
     * @param {*} a
     */
    exports.merge = function(target, a, arrayMode) {
      if (a) {
        const keys = Object.keys(a); // will return an array of own properties
        const len = keys.length; //don't make it inline
        for (let i = 0; i < len; i++) {
          if (arrayMode === 'strict') {
            target[keys[i]] = [ a[keys[i]] ];
          } else {
            target[keys[i]] = a[keys[i]];
          }
        }
      }
    };
    /* exports.merge =function (b,a){
      return Object.assign(b,a);
    } */

    exports.getValue = function(v) {
      if (exports.isExist(v)) {
        return v;
      } else {
        return '';
      }
    };

    // const fakeCall = function(a) {return a;};
    // const fakeCallNoReturn = function() {};

    exports.buildOptions = function(options, defaultOptions, props) {
      let newOptions = {};
      if (!options) {
        return defaultOptions; //if there are not options
      }

      for (let i = 0; i < props.length; i++) {
        if (options[props[i]] !== undefined) {
          newOptions[props[i]] = options[props[i]];
        } else {
          newOptions[props[i]] = defaultOptions[props[i]];
        }
      }
      return newOptions;
    };

    /**
     * Check if a tag name should be treated as array
     *
     * @param tagName the node tagname
     * @param arrayMode the array mode option
     * @param parentTagName the parent tag name
     * @returns {boolean} true if node should be parsed as array
     */
    exports.isTagNameInArrayMode = function (tagName, arrayMode, parentTagName) {
      if (arrayMode === false) {
        return false;
      } else if (arrayMode instanceof RegExp) {
        return arrayMode.test(tagName);
      } else if (typeof arrayMode === 'function') {
        return !!arrayMode(tagName, parentTagName);
      }

      return arrayMode === "strict";
    };

    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
    });

    const convertToJson = function(node, options, parentTagName) {
      const jObj = {};

      // when no child node or attr is present
      if (!options.alwaysCreateTextNode && (!node.child || util.isEmptyObject(node.child)) && (!node.attrsMap || util.isEmptyObject(node.attrsMap))) {
        return util.isExist(node.val) ? node.val : '';
      }

      // otherwise create a textnode if node has some text
      if (util.isExist(node.val) && !(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        const asArray = util.isTagNameInArrayMode(node.tagname, options.arrayMode, parentTagName);
        jObj[options.textNodeName] = asArray ? [node.val] : node.val;
      }

      util.merge(jObj, node.attrsMap, options.arrayMode);

      const keys = Object.keys(node.child);
      for (let index = 0; index < keys.length; index++) {
        const tagName = keys[index];
        if (node.child[tagName] && node.child[tagName].length > 1) {
          jObj[tagName] = [];
          for (let tag in node.child[tagName]) {
            if (node.child[tagName].hasOwnProperty(tag)) {
              jObj[tagName].push(convertToJson(node.child[tagName][tag], options, tagName));
            }
          }
        } else {
          const result = convertToJson(node.child[tagName][0], options, tagName);
          const asArray = (options.arrayMode === true && typeof result === 'object') || util.isTagNameInArrayMode(tagName, options.arrayMode, parentTagName);
          jObj[tagName] = asArray ? [result] : result;
        }
      }

      //add value
      return jObj;
    };

    var convertToJson_1 = convertToJson;

    var node2json = {
    	convertToJson: convertToJson_1
    };

    var xmlNode = function(tagname, parent, val) {
      this.tagname = tagname;
      this.parent = parent;
      this.child = {}; //child tags
      this.attrsMap = {}; //attributes map
      this.val = val; //text only
      this.addChild = function(child) {
        if (Array.isArray(this.child[child.tagname])) {
          //already presents
          this.child[child.tagname].push(child);
        } else {
          this.child[child.tagname] = [child];
        }
      };
    };

    const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
    // const octRegex = /0x[a-z0-9]+/;
    // const binRegex = /0x[a-z0-9]+/;


    //polyfill
    if (!Number.parseInt && window.parseInt) {
        Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
        Number.parseFloat = window.parseFloat;
    }

      
    const consider = {
        hex :  true,
        leadingZeros: true,
        decimalPoint: "\.",
        eNotation: true
        //skipLike: /regex/
    };

    function toNumber(str, options = {}){
        // const options = Object.assign({}, consider);
        // if(opt.leadingZeros === false){
        //     options.leadingZeros = false;
        // }else if(opt.hex === false){
        //     options.hex = false;
        // }

        options = Object.assign({}, consider, options );
        if(!str || typeof str !== "string" ) return str;
        
        let trimmedStr  = str.trim();
        // if(trimmedStr === "0.0") return 0;
        // else if(trimmedStr === "+0.0") return 0;
        // else if(trimmedStr === "-0.0") return -0;

        if(options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
        else if (options.hex && hexRegex.test(trimmedStr)) {
            return Number.parseInt(trimmedStr, 16);
        // } else if (options.parseOct && octRegex.test(str)) {
        //     return Number.parseInt(val, 8);
        // }else if (options.parseBin && binRegex.test(str)) {
        //     return Number.parseInt(val, 2);
        }else {
            //separate negative sign, leading zeros, and rest number
            const match = numRegex.exec(trimmedStr);
            if(match){
                const sign = match[1];
                const leadingZeros = match[2];
                let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
                //trim ending zeros for floating number
                
                const eNotation = match[4] || match[6];
                if(!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
                else if(!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
                else {//no leading zeros or leading zeros are allowed
                    const num = Number(trimmedStr);
                    const numStr = "" + num;
                    if(numStr.search(/[eE]/) !== -1){ //given number is long and parsed to eNotation
                        if(options.eNotation) return num;
                        else return str;
                    }else if(eNotation){ //given number has enotation
                        if(options.eNotation) return num;
                        else return str;
                    }else if(trimmedStr.indexOf(".") !== -1){ //floating number
                        // const decimalPart = match[5].substr(1);
                        // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));

                        
                        // const p = numStr.indexOf(".");
                        // const givenIntPart = numStr.substr(0,p);
                        // const givenDecPart = numStr.substr(p+1);
                        if(numStr === "0" && (numTrimmedByZeros === "") ) return num; //0.0
                        else if(numStr === numTrimmedByZeros) return num; //0.456. 0.79000
                        else if( sign && numStr === "-"+numTrimmedByZeros) return num;
                        else return str;
                    }
                    
                    if(leadingZeros){
                        // if(numTrimmedByZeros === numStr){
                        //     if(options.leadingZeros) return num;
                        //     else return str;
                        // }else return str;
                        if(numTrimmedByZeros === numStr) return num;
                        else if(sign+numTrimmedByZeros === numStr) return num;
                        else return str;
                    }

                    if(trimmedStr === numStr) return num;
                    else if(trimmedStr === sign+numStr) return num;
                    // else{
                    //     //number with +/- sign
                    //     trimmedStr.test(/[-+][0-9]);

                    // }
                    return str;
                }
                // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
                
            }else { //non-numeric string
                return str;
            }
        }
    }

    /**
     * 
     * @param {string} numStr without leading zeros
     * @returns 
     */
    function trimZeros(numStr){
        if(numStr && numStr.indexOf(".") !== -1){//float
            numStr = numStr.replace(/0+$/, ""); //remove ending zeros
            if(numStr === ".")  numStr = "0";
            else if(numStr[0] === ".")  numStr = "0"+numStr;
            else if(numStr[numStr.length-1] === ".")  numStr = numStr.substr(0,numStr.length-1);
            return numStr;
        }
        return numStr;
    }
    var strnum = toNumber;

    const buildOptions$3 = util.buildOptions;



    '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
      .replace(/NAME/g, util.nameRegexp);

    //const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
    //const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

    //polyfill
    if (!Number.parseInt && window.parseInt) {
      Number.parseInt = window.parseInt;
    }
    if (!Number.parseFloat && window.parseFloat) {
      Number.parseFloat = window.parseFloat;
    }

    const defaultOptions$2 = {
      attributeNamePrefix: '@_',
      attrNodeName: false,
      textNodeName: '#text',
      ignoreAttributes: true,
      ignoreNameSpace: false,
      allowBooleanAttributes: false, //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseNodeValue: true,
      parseAttributeValue: false,
      arrayMode: false,
      trimValues: true, //Trim string values of tag and attributes
      cdataTagName: false,
      cdataPositionChar: '\\c',
      numParseOptions: {
        hex: true,
        leadingZeros: true
      },
      tagValueProcessor: function(a, tagName) {
        return a;
      },
      attrValueProcessor: function(a, attrName) {
        return a;
      },
      stopNodes: [],
      alwaysCreateTextNode: false
      //decodeStrict: false,
    };

    var defaultOptions_1 = defaultOptions$2;

    const props$2 = [
      'attributeNamePrefix',
      'attrNodeName',
      'textNodeName',
      'ignoreAttributes',
      'ignoreNameSpace',
      'allowBooleanAttributes',
      'parseNodeValue',
      'parseAttributeValue',
      'arrayMode',
      'trimValues',
      'cdataTagName',
      'cdataPositionChar',
      'tagValueProcessor',
      'attrValueProcessor',
      'parseTrueNumberOnly',
      'numParseOptions',
      'stopNodes',
      'alwaysCreateTextNode'
    ];
    var props_1 = props$2;

    /**
     * Trim -> valueProcessor -> parse value
     * @param {string} tagName
     * @param {string} val
     * @param {object} options
     */
    function processTagValue(tagName, val, options) {
      if (val) {
        if (options.trimValues) {
          val = val.trim();
        }
        val = options.tagValueProcessor(val, tagName);
        val = parseValue(val, options.parseNodeValue, options.numParseOptions);
      }

      return val;
    }

    function resolveNameSpace(tagname, options) {
      if (options.ignoreNameSpace) {
        const tags = tagname.split(':');
        const prefix = tagname.charAt(0) === '/' ? '/' : '';
        if (tags[0] === 'xmlns') {
          return '';
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }

    function parseValue(val, shouldParse, options) {
      if (shouldParse && typeof val === 'string') {
        //console.log(options)
        const newval = val.trim();
        if(newval === 'true' ) return true;
        else if(newval === 'false' ) return false;
        else return strnum(val, options);
      } else {
        if (util.isExist(val)) {
          return val;
        } else {
          return '';
        }
      }
    }

    //TODO: change regex to capture NS
    //const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
    const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');

    function buildAttributesMap(attrStr, options) {
      if (!options.ignoreAttributes && typeof attrStr === 'string') {
        attrStr = attrStr.replace(/\r?\n/g, ' ');
        //attrStr = attrStr || attrStr.trim();

        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length; //don't make it inline
        const attrs = {};
        for (let i = 0; i < len; i++) {
          const attrName = resolveNameSpace(matches[i][1], options);
          if (attrName.length) {
            if (matches[i][4] !== undefined) {
              if (options.trimValues) {
                matches[i][4] = matches[i][4].trim();
              }
              matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
              attrs[options.attributeNamePrefix + attrName] = parseValue(
                matches[i][4],
                options.parseAttributeValue,
                options.numParseOptions
              );
            } else if (options.allowBooleanAttributes) {
              attrs[options.attributeNamePrefix + attrName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (options.attrNodeName) {
          const attrCollection = {};
          attrCollection[options.attrNodeName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }

    const getTraversalObj = function(xmlData, options) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      options = buildOptions$3(options, defaultOptions$2, props$2);
      const xmlObj = new xmlNode('!xml');
      let currentNode = xmlObj;
      let textData = "";

    //function match(xmlData){
      for(let i=0; i< xmlData.length; i++){
        const ch = xmlData[i];
        if(ch === '<'){
          if( xmlData[i+1] === '/') {//Closing Tag
            const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i+2,closeIndex).trim();

            if(options.ignoreNameSpace){
              const colonIndex = tagName.indexOf(":");
              if(colonIndex !== -1){
                tagName = tagName.substr(colonIndex+1);
              }
            }

            /* if (currentNode.parent) {
              currentNode.parent.val = util.getValue(currentNode.parent.val) + '' + processTagValue2(tagName, textData , options);
            } */
            if(currentNode){
              if(currentNode.val){
                currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(tagName, textData , options);
              }else {
                currentNode.val = processTagValue(tagName, textData , options);
              }
            }

            if (options.stopNodes.length && options.stopNodes.includes(currentNode.tagname)) {
              currentNode.child = [];
              if (currentNode.attrsMap == undefined) { currentNode.attrsMap = {};}
              currentNode.val = xmlData.substr(currentNode.startIndex + 1, i - currentNode.startIndex - 1);
            }
            currentNode = currentNode.parent;
            textData = "";
            i = closeIndex;
          } else if( xmlData[i+1] === '?') {
            i = findClosingIndex(xmlData, "?>", i, "Pi Tag is not closed.");
          } else if(xmlData.substr(i + 1, 3) === '!--') {
            i = findClosingIndex(xmlData, "-->", i, "Comment is not closed.");
          } else if( xmlData.substr(i + 1, 2) === '!D') {
            const closeIndex = findClosingIndex(xmlData, ">", i, "DOCTYPE is not closed.");
            const tagExp = xmlData.substring(i, closeIndex);
            if(tagExp.indexOf("[") >= 0){
              i = xmlData.indexOf("]>", i) + 1;
            }else {
              i = closeIndex;
            }
          }else if(xmlData.substr(i + 1, 2) === '![') {
            const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i + 9,closeIndex);

            //considerations
            //1. CDATA will always have parent node
            //2. A tag with CDATA is not a leaf node so it's value would be string type.
            if(textData){
              currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(currentNode.tagname, textData , options);
              textData = "";
            }

            if (options.cdataTagName) {
              //add cdata node
              const childNode = new xmlNode(options.cdataTagName, currentNode, tagExp);
              currentNode.addChild(childNode);
              //for backtracking
              currentNode.val = util.getValue(currentNode.val) + options.cdataPositionChar;
              //add rest value to parent node
              if (tagExp) {
                childNode.val = tagExp;
              }
            } else {
              currentNode.val = (currentNode.val || '') + (tagExp || '');
            }

            i = closeIndex + 2;
          }else {//Opening tag
            const result = closingIndexForOpeningTag(xmlData, i+1);
            let tagExp = result.data;
            const closeIndex = result.index;
            const separatorIndex = tagExp.indexOf(" ");
            let tagName = tagExp;
            let shouldBuildAttributesMap = true;
            if(separatorIndex !== -1){
              tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
              tagExp = tagExp.substr(separatorIndex + 1);
            }

            if(options.ignoreNameSpace){
              const colonIndex = tagName.indexOf(":");
              if(colonIndex !== -1){
                tagName = tagName.substr(colonIndex+1);
                shouldBuildAttributesMap = tagName !== result.data.substr(colonIndex + 1);
              }
            }

            //save text to parent node
            if (currentNode && textData) {
              if(currentNode.tagname !== '!xml'){
                currentNode.val = util.getValue(currentNode.val) + '' + processTagValue( currentNode.tagname, textData, options);
              }
            }

            if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){//selfClosing tag

              if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
                tagName = tagName.substr(0, tagName.length - 1);
                tagExp = tagName;
              }else {
                tagExp = tagExp.substr(0, tagExp.length - 1);
              }

              const childNode = new xmlNode(tagName, currentNode, '');
              if(tagName !== tagExp){
                childNode.attrsMap = buildAttributesMap(tagExp, options);
              }
              currentNode.addChild(childNode);
            }else {//opening tag

              const childNode = new xmlNode( tagName, currentNode );
              if (options.stopNodes.length && options.stopNodes.includes(childNode.tagname)) {
                childNode.startIndex=closeIndex;
              }
              if(tagName !== tagExp && shouldBuildAttributesMap){
                childNode.attrsMap = buildAttributesMap(tagExp, options);
              }
              currentNode.addChild(childNode);
              currentNode = childNode;
            }
            textData = "";
            i = closeIndex;
          }
        }else {
          textData += xmlData[i];
        }
      }
      return xmlObj;
    };

    function closingIndexForOpeningTag(data, i){
      let attrBoundary;
      let tagExp = "";
      for (let index = i; index < data.length; index++) {
        let ch = data[index];
        if (attrBoundary) {
            if (ch === attrBoundary) attrBoundary = "";//reset
        } else if (ch === '"' || ch === "'") {
            attrBoundary = ch;
        } else if (ch === '>') {
            return {
              data: tagExp,
              index: index
            }
        } else if (ch === '\t') {
          ch = " ";
        }
        tagExp += ch;
      }
    }

    function findClosingIndex(xmlData, str, i, errMsg){
      const closingIndex = xmlData.indexOf(str, i);
      if(closingIndex === -1){
        throw new Error(errMsg)
      }else {
        return closingIndex + str.length - 1;
      }
    }

    var getTraversalObj_1 = getTraversalObj;

    var xmlstr2xmlnode = {
    	defaultOptions: defaultOptions_1,
    	props: props_1,
    	getTraversalObj: getTraversalObj_1
    };

    const defaultOptions$1 = {
      allowBooleanAttributes: false, //A tag can have attributes without any value
    };

    const props$1 = ['allowBooleanAttributes'];

    //const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
    var validate = function (xmlData, options) {
      options = util.buildOptions(options, defaultOptions$1, props$1);

      //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
      //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
      //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
      const tags = [];
      let tagFound = false;

      //indicates that the root tag has been closed (aka. depth 0 has been reached)
      let reachedRoot = false;

      if (xmlData[0] === '\ufeff') {
        // check for byte order mark (BOM)
        xmlData = xmlData.substr(1);
      }

      for (let i = 0; i < xmlData.length; i++) {

        if (xmlData[i] === '<' && xmlData[i+1] === '?') {
          i+=2;
          i = readPI(xmlData,i);
          if (i.err) return i;
        }else if (xmlData[i] === '<') {
          //starting of tag
          //read until you reach to '>' avoiding any '>' in attribute value
          let tagStartPos = i;
          i++;
          
          if (xmlData[i] === '!') {
            i = readCommentAndCDATA(xmlData, i);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i] === '/') {
              //closing tag
              closingTag = true;
              i++;
            }
            //read tagname
            let tagName = '';
            for (; i < xmlData.length &&
              xmlData[i] !== '>' &&
              xmlData[i] !== ' ' &&
              xmlData[i] !== '\t' &&
              xmlData[i] !== '\n' &&
              xmlData[i] !== '\r'; i++
            ) {
              tagName += xmlData[i];
            }
            tagName = tagName.trim();
            //console.log(tagName);

            if (tagName[tagName.length - 1] === '/') {
              //self closing tag without attributes
              tagName = tagName.substring(0, tagName.length - 1);
              //continue;
              i--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '"+tagName+"' is an invalid name.";
              }
              return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
            }

            const result = readAttributeStr(xmlData, i);
            if (result === false) {
              return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
            }
            let attrStr = result.value;
            i = result.index;

            if (attrStr[attrStr.length - 1] === '/') {
              //self closing tag
              const attrStrStart = i - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
                //continue; //text may presents after self closing tag
              } else {
                //the result from the nested function returns the position of the error within the attribute
                //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                //this gives us the absolute index in the entire xml, which we can use to find the line at last
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject('InvalidTag',
                    "Expected closing tag '"+otg.tagName+"' (opened in line "+openPos.line+", col "+openPos.col+") instead of closing tag '"+tagName+"'.",
                    getLineNumberForPosition(xmlData, tagStartPos));
                }

                //when there are no more tags, we reached the root level.
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                //the result from the nested function returns the position of the error within the attribute
                //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                //this gives us the absolute index in the entire xml, which we can use to find the line at last
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
              }

              //if the root level has been reached before ...
              if (reachedRoot === true) {
                return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
              } else {
                tags.push({tagName, tagStartPos});
              }
              tagFound = true;
            }

            //skip tag text value
            //It may include comments and CDATA value
            for (i++; i < xmlData.length; i++) {
              if (xmlData[i] === '<') {
                if (xmlData[i + 1] === '!') {
                  //comment or CADATA
                  i++;
                  i = readCommentAndCDATA(xmlData, i);
                  continue;
                } else if (xmlData[i+1] === '?') {
                  i = readPI(xmlData, ++i);
                  if (i.err) return i;
                } else {
                  break;
                }
              } else if (xmlData[i] === '&') {
                const afterAmp = validateAmpersand(xmlData, i);
                if (afterAmp == -1)
                  return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                i = afterAmp;
              }
            } //end of reading tag text value
            if (xmlData[i] === '<') {
              i--;
            }
          }
        } else {
          if (xmlData[i] === ' ' || xmlData[i] === '\t' || xmlData[i] === '\n' || xmlData[i] === '\r') {
            continue;
          }
          return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
        }
      }

      if (!tagFound) {
        return getErrorObject('InvalidXml', 'Start tag expected.', 1);
      }else if (tags.length == 1) {
          return getErrorObject('InvalidTag', "Unclosed tag '"+tags[0].tagName+"'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      }else if (tags.length > 0) {
          return getErrorObject('InvalidXml', "Invalid '"+
              JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '')+
              "' found.", {line: 1, col: 1});
      }

      return true;
    };

    /**
     * Read Processing insstructions and skip
     * @param {*} xmlData
     * @param {*} i
     */
    function readPI(xmlData, i) {
      const start = i;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] == '?' || xmlData[i] == ' ') {
          //tagname
          const tagname = xmlData.substr(start, i - start);
          if (i > 5 && tagname === 'xml') {
            return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
          } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
            //check if valid attribut string
            i++;
            break;
          } else {
            continue;
          }
        }
      }
      return i;
    }

    function readCommentAndCDATA(xmlData, i) {
      if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
        //comment
        for (i += 3; i < xmlData.length; i++) {
          if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
            i += 2;
            break;
          }
        }
      } else if (
        xmlData.length > i + 8 &&
        xmlData[i + 1] === 'D' &&
        xmlData[i + 2] === 'O' &&
        xmlData[i + 3] === 'C' &&
        xmlData[i + 4] === 'T' &&
        xmlData[i + 5] === 'Y' &&
        xmlData[i + 6] === 'P' &&
        xmlData[i + 7] === 'E'
      ) {
        let angleBracketsCount = 1;
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            angleBracketsCount++;
          } else if (xmlData[i] === '>') {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (
        xmlData.length > i + 9 &&
        xmlData[i + 1] === '[' &&
        xmlData[i + 2] === 'C' &&
        xmlData[i + 3] === 'D' &&
        xmlData[i + 4] === 'A' &&
        xmlData[i + 5] === 'T' &&
        xmlData[i + 6] === 'A' &&
        xmlData[i + 7] === '['
      ) {
        for (i += 8; i < xmlData.length; i++) {
          if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
            i += 2;
            break;
          }
        }
      }

      return i;
    }

    const doubleQuote = '"';
    const singleQuote = "'";

    /**
     * Keep reading xmlData until '<' is found outside the attribute value.
     * @param {string} xmlData
     * @param {number} i
     */
    function readAttributeStr(xmlData, i) {
      let attrStr = '';
      let startChar = '';
      let tagClosed = false;
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
          if (startChar === '') {
            startChar = xmlData[i];
          } else if (startChar !== xmlData[i]) ; else {
            startChar = '';
          }
        } else if (xmlData[i] === '>') {
          if (startChar === '') {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i];
      }
      if (startChar !== '') {
        return false;
      }

      return {
        value: attrStr,
        index: i,
        tagClosed: tagClosed
      };
    }

    /**
     * Select all the attributes whether valid or invalid.
     */
    const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

    //attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

    function validateAttributeString(attrStr, options) {
      //console.log("start:"+attrStr+":end");

      //if(attrStr.trim().length === 0) return true; //empty string

      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};

      for (let i = 0; i < matches.length; i++) {
        if (matches[i][1].length === 0) {
          //nospace before attribute name: a="sd"b="saf"
          return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(matches[i]))
        } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
          //independent attribute: ab
          return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(matches[i]));
        }
        /* else if(matches[i][6] === undefined){//attribute without value: ab=
                        return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                    } */
        const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          //check for duplicate attribute.
          attrNames[attrName] = 1;
        } else {
          return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(matches[i]));
        }
      }

      return true;
    }

    function validateNumberAmpersand(xmlData, i) {
      let re = /\d/;
      if (xmlData[i] === 'x') {
        i++;
        re = /[\da-fA-F]/;
      }
      for (; i < xmlData.length; i++) {
        if (xmlData[i] === ';')
          return i;
        if (!xmlData[i].match(re))
          break;
      }
      return -1;
    }

    function validateAmpersand(xmlData, i) {
      // https://www.w3.org/TR/xml/#dt-charref
      i++;
      if (xmlData[i] === ';')
        return -1;
      if (xmlData[i] === '#') {
        i++;
        return validateNumberAmpersand(xmlData, i);
      }
      let count = 0;
      for (; i < xmlData.length; i++, count++) {
        if (xmlData[i].match(/\w/) && count < 20)
          continue;
        if (xmlData[i] === ';')
          break;
        return -1;
      }
      return i;
    }

    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code: code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col,
        },
      };
    }

    function validateAttrName(attrName) {
      return util.isName(attrName);
    }

    // const startsWithXML = /^xml/i;

    function validateTagName(tagname) {
      return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
    }

    //this function returns the line number for the character at the given index
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,

        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }

    //this function returns the position of the first character of match within attrStr
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }

    var validator = {
    	validate: validate
    };

    const char = function(a) {
      return String.fromCharCode(a);
    };

    const chars = {
      nilChar: char(176),
      missingChar: char(201),
      nilPremitive: char(175),
      missingPremitive: char(200),

      emptyChar: char(178),
      emptyValue: char(177), //empty Premitive

      boundryChar: char(179),

      objStart: char(198),
      arrStart: char(204),
      arrayEnd: char(185),
    };

    const charsArr = [
      chars.nilChar,
      chars.nilPremitive,
      chars.missingChar,
      chars.missingPremitive,
      chars.boundryChar,
      chars.emptyChar,
      chars.emptyValue,
      chars.arrayEnd,
      chars.objStart,
      chars.arrStart,
    ];

    const _e = function(node, e_schema, options) {
      if (typeof e_schema === 'string') {
        //premitive
        if (node && node[0] && node[0].val !== undefined) {
          return getValue(node[0].val);
        } else {
          return getValue(node);
        }
      } else {
        const hasValidData = hasData(node);
        if (hasValidData === true) {
          let str = '';
          if (Array.isArray(e_schema)) {
            //attributes can't be repeated. hence check in children tags only
            str += chars.arrStart;
            const itemSchema = e_schema[0];
            //const itemSchemaType = itemSchema;
            const arr_len = node.length;

            if (typeof itemSchema === 'string') {
              for (let arr_i = 0; arr_i < arr_len; arr_i++) {
                const r = getValue(node[arr_i].val);
                str = processValue(str, r);
              }
            } else {
              for (let arr_i = 0; arr_i < arr_len; arr_i++) {
                const r = _e(node[arr_i], itemSchema, options);
                str = processValue(str, r);
              }
            }
            str += chars.arrayEnd; //indicates that next item is not array item
          } else {
            //object
            str += chars.objStart;
            const keys = Object.keys(e_schema);
            if (Array.isArray(node)) {
              node = node[0];
            }
            for (let i in keys) {
              const key = keys[i];
              //a property defined in schema can be present either in attrsMap or children tags
              //options.textNodeName will not present in both maps, take it's value from val
              //options.attrNodeName will be present in attrsMap
              let r;
              if (!options.ignoreAttributes && node.attrsMap && node.attrsMap[key]) {
                r = _e(node.attrsMap[key], e_schema[key], options);
              } else if (key === options.textNodeName) {
                r = _e(node.val, e_schema[key], options);
              } else {
                r = _e(node.child[key], e_schema[key], options);
              }
              str = processValue(str, r);
            }
          }
          return str;
        } else {
          return hasValidData;
        }
      }
    };

    const getValue = function(a /*, type*/) {
      switch (a) {
        case undefined:
          return chars.missingPremitive;
        case null:
          return chars.nilPremitive;
        case '':
          return chars.emptyValue;
        default:
          return a;
      }
    };

    const processValue = function(str, r) {
      if (!isAppChar(r[0]) && !isAppChar(str[str.length - 1])) {
        str += chars.boundryChar;
      }
      return str + r;
    };

    const isAppChar = function(ch) {
      return charsArr.indexOf(ch) !== -1;
    };

    function hasData(jObj) {
      if (jObj === undefined) {
        return chars.missingChar;
      } else if (jObj === null) {
        return chars.nilChar;
      } else if (
        jObj.child &&
        Object.keys(jObj.child).length === 0 &&
        (!jObj.attrsMap || Object.keys(jObj.attrsMap).length === 0)
      ) {
        return chars.emptyChar;
      } else {
        return true;
      }
    }


    const buildOptions$2 = util.buildOptions;

    const convert2nimn = function(node, e_schema, options) {
      options = buildOptions$2(options, xmlstr2xmlnode.defaultOptions, xmlstr2xmlnode.props);
      return _e(node, e_schema, options);
    };

    var convert2nimn_1 = convert2nimn;

    var nimndata = {
    	convert2nimn: convert2nimn_1
    };

    const buildOptions$1 = util.buildOptions;


    //TODO: do it later
    const convertToJsonString = function(node, options) {
      options = buildOptions$1(options, xmlstr2xmlnode.defaultOptions, xmlstr2xmlnode.props);

      options.indentBy = options.indentBy || '';
      return _cToJsonStr(node, options);
    };

    const _cToJsonStr = function(node, options, level) {
      let jObj = '{';

      //traver through all the children
      const keys = Object.keys(node.child);

      for (let index = 0; index < keys.length; index++) {
        const tagname = keys[index];
        if (node.child[tagname] && node.child[tagname].length > 1) {
          jObj += '"' + tagname + '" : [ ';
          for (let tag in node.child[tagname]) {
            jObj += _cToJsonStr(node.child[tagname][tag], options) + ' , ';
          }
          jObj = jObj.substr(0, jObj.length - 1) + ' ] '; //remove extra comma in last
        } else {
          jObj += '"' + tagname + '" : ' + _cToJsonStr(node.child[tagname][0], options) + ' ,';
        }
      }
      util.merge(jObj, node.attrsMap);
      //add attrsMap as new children
      if (util.isEmptyObject(jObj)) {
        return util.isExist(node.val) ? node.val : '';
      } else {
        if (util.isExist(node.val)) {
          if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
            jObj += '"' + options.textNodeName + '" : ' + stringval(node.val);
          }
        }
      }
      //add value
      if (jObj[jObj.length - 1] === ',') {
        jObj = jObj.substr(0, jObj.length - 2);
      }
      return jObj + '}';
    };

    function stringval(v) {
      if (v === true || v === false || !isNaN(v)) {
        return v;
      } else {
        return '"' + v + '"';
      }
    }

    var convertToJsonString_1 = convertToJsonString;

    var node2json_str = {
    	convertToJsonString: convertToJsonString_1
    };

    //parse Empty Node as self closing node
    const buildOptions = util.buildOptions;

    const defaultOptions = {
      attributeNamePrefix: '@_',
      attrNodeName: false,
      textNodeName: '#text',
      ignoreAttributes: true,
      cdataTagName: false,
      cdataPositionChar: '\\c',
      format: false,
      indentBy: '  ',
      supressEmptyNode: false,
      tagValueProcessor: function(a) {
        return a;
      },
      attrValueProcessor: function(a) {
        return a;
      },
    };

    const props = [
      'attributeNamePrefix',
      'attrNodeName',
      'textNodeName',
      'ignoreAttributes',
      'cdataTagName',
      'cdataPositionChar',
      'format',
      'indentBy',
      'supressEmptyNode',
      'tagValueProcessor',
      'attrValueProcessor',
      'rootNodeName', //when array as root
    ];

    function Parser(options) {
      this.options = buildOptions(options, defaultOptions, props);
      if (this.options.ignoreAttributes || this.options.attrNodeName) {
        this.isAttribute = function(/*a*/) {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      if (this.options.cdataTagName) {
        this.isCDATA = isCDATA;
      } else {
        this.isCDATA = function(/*a*/) {
          return false;
        };
      }
      this.replaceCDATAstr = replaceCDATAstr;
      this.replaceCDATAarr = replaceCDATAarr;

      this.processTextOrObjNode = processTextOrObjNode;

      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = '>\n';
        this.newLine = '\n';
      } else {
        this.indentate = function() {
          return '';
        };
        this.tagEndChar = '>';
        this.newLine = '';
      }

      if (this.options.supressEmptyNode) {
        this.buildTextNode = buildEmptyTextNode;
        this.buildObjNode = buildEmptyObjNode;
      } else {
        this.buildTextNode = buildTextValNode;
        this.buildObjNode = buildObjectNode;
      }

      this.buildTextValNode = buildTextValNode;
      this.buildObjectNode = buildObjectNode;
    }

    Parser.prototype.parse = function(jObj) {
      if(Array.isArray(jObj) && this.options.rootNodeName && this.options.rootNodeName.length > 1){
        jObj = {
          [this.options.rootNodeName] : jObj
        };
      }
      return this.j2x(jObj, 0).val;
    };

    Parser.prototype.j2x = function(jObj, level) {
      let attrStr = '';
      let val = '';
      for (let key in jObj) {
        if (typeof jObj[key] === 'undefined') ; else if (jObj[key] === null) {
          val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (jObj[key] instanceof Date) {
          val += this.buildTextNode(jObj[key], key, '', level);
        } else if (typeof jObj[key] !== 'object') {
          //premitive type
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += ' ' + attr + '="' + this.options.attrValueProcessor('' + jObj[key]) + '"';
          } else if (this.isCDATA(key)) {
            if (jObj[this.options.textNodeName]) {
              val += this.replaceCDATAstr(jObj[this.options.textNodeName], jObj[key]);
            } else {
              val += this.replaceCDATAstr('', jObj[key]);
            }
          } else {
            //tag value
            if (key === this.options.textNodeName) {
              if (jObj[this.options.cdataTagName]) ; else {
                val += this.options.tagValueProcessor('' + jObj[key]);
              }
            } else {
              val += this.buildTextNode(jObj[key], key, '', level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          //repeated nodes
          if (this.isCDATA(key)) {
            val += this.indentate(level);
            if (jObj[this.options.textNodeName]) {
              val += this.replaceCDATAarr(jObj[this.options.textNodeName], jObj[key]);
            } else {
              val += this.replaceCDATAarr('', jObj[key]);
            }
          } else {
            //nested nodes
            const arrLen = jObj[key].length;
            for (let j = 0; j < arrLen; j++) {
              const item = jObj[key][j];
              if (typeof item === 'undefined') ; else if (item === null) {
                val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
              } else if (typeof item === 'object') {
                val += this.processTextOrObjNode(item, key, level);
              } else {
                val += this.buildTextNode(item, key, '', level);
              }
            }
          }
        } else {
          //nested node
          if (this.options.attrNodeName && key === this.options.attrNodeName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j = 0; j < L; j++) {
              attrStr += ' ' + Ks[j] + '="' + this.options.attrValueProcessor('' + jObj[key][Ks[j]]) + '"';
            }
          } else {
            val += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return {attrStr: attrStr, val: val};
    };

    function processTextOrObjNode (object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
        return this.buildTextNode(result.val, key, result.attrStr, level);
      } else {
        return this.buildObjNode(result.val, key, result.attrStr, level);
      }
    }

    function replaceCDATAstr(str, cdata) {
      str = this.options.tagValueProcessor('' + str);
      if (this.options.cdataPositionChar === '' || str === '') {
        return str + '<![CDATA[' + cdata + ']]' + this.tagEndChar;
      } else {
        return str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata + ']]' + this.tagEndChar);
      }
    }

    function replaceCDATAarr(str, cdata) {
      str = this.options.tagValueProcessor('' + str);
      if (this.options.cdataPositionChar === '' || str === '') {
        return str + '<![CDATA[' + cdata.join(']]><![CDATA[') + ']]' + this.tagEndChar;
      } else {
        for (let v in cdata) {
          str = str.replace(this.options.cdataPositionChar, '<![CDATA[' + cdata[v] + ']]>');
        }
        return str + this.newLine;
      }
    }

    function buildObjectNode(val, key, attrStr, level) {
      if (attrStr && val.indexOf('<') === -1) {
        return (
          this.indentate(level) +
          '<' +
          key +
          attrStr +
          '>' +
          val +
          //+ this.newLine
          // + this.indentate(level)
          '</' +
          key +
          this.tagEndChar
        );
      } else {
        return (
          this.indentate(level) +
          '<' +
          key +
          attrStr +
          this.tagEndChar +
          val +
          //+ this.newLine
          this.indentate(level) +
          '</' +
          key +
          this.tagEndChar
        );
      }
    }

    function buildEmptyObjNode(val, key, attrStr, level) {
      if (val !== '') {
        return this.buildObjectNode(val, key, attrStr, level);
      } else {
        return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
        //+ this.newLine
      }
    }

    function buildTextValNode(val, key, attrStr, level) {
      return (
        this.indentate(level) +
        '<' +
        key +
        attrStr +
        '>' +
        this.options.tagValueProcessor(val) +
        '</' +
        key +
        this.tagEndChar
      );
    }

    function buildEmptyTextNode(val, key, attrStr, level) {
      if (val !== '') {
        return this.buildTextValNode(val, key, attrStr, level);
      } else {
        return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
      }
    }

    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }

    function isAttribute(name /*, options*/) {
      if (name.startsWith(this.options.attributeNamePrefix)) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }

    function isCDATA(name) {
      return name === this.options.cdataTagName;
    }

    //formatting
    //indentation
    //\n after each closing or self closing tag

    var json2xml = Parser;

    var parser = createCommonjsModule(function (module, exports) {



    const x2xmlnode = xmlstr2xmlnode;
    const buildOptions = util.buildOptions;


    exports.parse = function(xmlData, givenOptions = {}, validationOption) {
      if( validationOption){
        if(validationOption === true) validationOption = {};
        
        const result = validator.validate(xmlData, validationOption);
        if (result !== true) {
          throw Error( result.err.msg)
        }
      }
      if(givenOptions.parseTrueNumberOnly 
        && givenOptions.parseNodeValue !== false
        && !givenOptions.numParseOptions){
        
          givenOptions.numParseOptions = {
            leadingZeros: false,
          };
      }
      let options = buildOptions(givenOptions, x2xmlnode.defaultOptions, x2xmlnode.props);

      const traversableObj = xmlstr2xmlnode.getTraversalObj(xmlData, options);
      //print(traversableObj, "  ");
      return node2json.convertToJson(traversableObj, options);
    };
    exports.convertTonimn = nimndata.convert2nimn;
    exports.getTraversalObj = xmlstr2xmlnode.getTraversalObj;
    exports.convertToJson = node2json.convertToJson;
    exports.convertToJsonString = node2json_str.convertToJsonString;
    exports.validate = validator.validate;
    exports.j2xParser = json2xml;
    exports.parseToNimn = function(xmlData, schema, options) {
      return exports.convertTonimn(exports.getTraversalObj(xmlData, options), schema, options);
    };
    });

    /**
     * Fetches the portal for a given org.
     *
     * @param orgId
     * @param options request options
     * @returns
     */
    var fetchOrg = function (orgId, options) {
        var orgPortalUrl = getProp(options, "portal") ||
            getProp(options, "authentication.portal") ||
            "www.arcgis.com";
        // In order to get the correct response, we must pass options.portal
        // as a base portal url (e.g., www.arcgis.com, qaext.arcgis.com, etc)
        // **not** an org portal (i.e. org.maps.arcgis.com).
        var basePortalUrl = getPortalBaseFromOrgUrl(orgPortalUrl) + "/sharing/rest";
        return getPortal(orgId, __assign(__assign({}, options), { portal: basePortalUrl }));
    };

    /**
     * Generic function to fetch org limits
     * @param orgId
     * @param limitsType
     * @param limitName
     * @param options
     * @returns
     */
    function fetchOrgLimits(orgId, limitsType, limitName, options) {
        var portal = options.authentication.portal;
        var url = portal + "/portals/" + orgId + "/limits?limitsType=" + limitsType + "&limitName=" + limitName + "&f=json";
        return request(url, options);
    }
    /**
     * Fetch the maximum number of groups a user can create in an org
     * @param orgId
     * @param options
     * @returns
     */
    function fetchMaxNumUserGroupsLimit(orgId, options) {
        return fetchOrgLimits(orgId, "Groups", "MaxNumUserGroups", options)
            .then(function (response) {
            return response.limitValue;
        })
            .catch(function (_) {
            // it's possible that the org doesn't have this property set, and
            // the api will return a 500 error. So we just return the default value
            return 512;
        });
    }

    /**
     * Parse metadataxml into json object
     * @param metadataXml
     * @returns
     */
    function parseMetadataXml(metadataXml) {
        var opts = {
            // options for fastXmlParser to read tag attrs
            ignoreAttributes: false,
            attributeNamePrefix: "@_",
            textNodeName: "#value",
        };
        return parser.parse(metadataXml, opts);
    }
    /**
     * Fetch an [item's metadata](https://doc.arcgis.com/en/arcgis-online/manage-data/metadata.htm) from a portal
     * and parse and return it as JSON
     * @param id item id
     * @param requestOptions
     */
    function fetchContentMetadata(id, requestOptions) {
        return getItemMetadata(id, requestOptions)
            .then(function (metadataXml) { return parseMetadataXml(metadataXml); })
            .catch(function () {
            // many items don't have metadata and the request will 404
            // in these cases we don't want to treat it as an error
            // content.metadata === null signals to consumers that
            // we attempted to fetch the metadata, but it doesn't exist
            // TODO: we should probably still throw the error if it's not a 404
            return null;
        });
    }
    var enrichGroupIds = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichGroupIds");
        return getItemGroups(data.item.id, requestOptions)
            .then(function (response) {
            var admin = response.admin, member = response.member, other = response.other;
            var groupIds = __spreadArrays(admin, member, other).map(function (group) { return group.id; });
            stack.finish(opId);
            return {
                data: __assign(__assign({}, data), { groupIds: groupIds }),
                stack: stack,
                requestOptions: requestOptions,
            };
        })
            .catch(function (error) { return handleEnrichmentError$2(error, input, opId); });
    };
    var enrichMetadata = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichMetadata");
        return fetchContentMetadata(data.item.id, requestOptions).then(function (metadata) {
            stack.finish(opId);
            return {
                data: __assign(__assign({}, data), { metadata: metadata }),
                stack: stack,
                requestOptions: requestOptions,
            };
        });
        // TODO: currently fetchContentMetadata will never throw, but
        // if we update it to throw for non-404 errors, need to uncomment this:
        // .catch((error) => handleEnrichmentError(error, input, opId));
    };
    var enrichOwnerUser = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichOwner");
        // w/o the : any here, I get a compile error about
        // .authentication being incompatible w/ UserSession
        var options = __assign({ username: data.item.owner }, requestOptions);
        return getUser(options)
            .then(function (ownerUser) {
            stack.finish(opId);
            return {
                data: __assign(__assign({}, data), { ownerUser: ownerUser }),
                stack: stack,
                requestOptions: requestOptions,
            };
        })
            .catch(function (error) { return handleEnrichmentError$2(error, input, opId); });
    };
    // Note, this MUST be run after `enrichOwnerUser` to access the correct orgId during processing.
    // `item.orgId` is only SOMETIMES returned by Portal, so we need the ownerUser's orgId as a backup.
    //
    // If an orgId isn't present on either the item or the ownerUser, this operation will be skipped.
    var enrichOrg = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichOrg");
        var orgId = getItemOrgId(data.item, data.ownerUser);
        // Only fetch the org if an explicit orgId is present
        var orgPromise = orgId
            ? fetchOrg(orgId, requestOptions)
            : Promise.resolve(undefined);
        return orgPromise
            .then(function (org) {
            stack.finish(opId);
            return {
                data: __assign(__assign({}, data), { org: org }),
                stack: stack,
                requestOptions: requestOptions,
            };
        })
            .catch(function (error) { return handleEnrichmentError$2(error, input, opId); });
    };
    var enrichData = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichData");
        return getItemData(data.item.id, requestOptions)
            .then(function (itemData) {
            stack.finish(opId);
            return { data: __assign(__assign({}, data), { data: itemData }), stack: stack, requestOptions: requestOptions };
        })
            .catch(function (error) { return handleEnrichmentError$2(error, input, opId); });
    };
    var enrichServer = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichServer");
        var url = parseServiceUrl(data.item.url);
        var options = __assign(__assign({}, requestOptions), { url: url });
        return getService(options)
            .then(function (server) {
            stack.finish(opId);
            return { data: __assign(__assign({}, data), { server: server }), stack: stack, requestOptions: requestOptions };
        })
            .catch(function (error) { return handleEnrichmentError$2(error, input, opId); });
    };
    var enrichLayers = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichLayers");
        var url = data.item.url;
        var options = __assign(__assign({}, requestOptions), { url: url });
        return (getAllLayersAndTables(options)
            // merge layers and tables into a single array
            // and filter out any group layers
            .then(function (response) {
            var merged = __spreadArrays(response.layers, response.tables);
            return merged.filter(function (layer) { return layer.type !== "Group Layer"; });
        })
            .then(function (layers) {
            stack.finish(opId);
            return { data: __assign(__assign({}, data), { layers: layers }), stack: stack, requestOptions: requestOptions };
        })
            .catch(function (error) { return handleEnrichmentError$2(error, input, opId); }));
    };
    // add the error to the content.errors,
    // log current stack operation as finished with an error
    // and return output that can be piped into the next operation
    var handleEnrichmentError$2 = function (error, input, opId) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        stack.finish(opId, { error: error });
        return {
            data: __assign(__assign({}, data), { errors: getEnrichmentErrors(error, data.errors) }),
            stack: stack,
            requestOptions: requestOptions,
        };
    };
    var enrichmentOperations = {
        groupIds: enrichGroupIds,
        metadata: enrichMetadata,
        ownerUser: enrichOwnerUser,
        org: enrichOrg,
        data: enrichData,
        server: enrichServer,
        layers: enrichLayers,
    };
    /**
     * convert an error to an enrichment error info format
     * and optionally append it to an existing array of those
     * @param error
     * @param errors an array of existing enrichment error info
     * @returns a new array of enrichment error info
     * @private
     */
    var getEnrichmentErrors = function (error, errors) {
        if (errors === void 0) { errors = []; }
        var message = typeof error === "string"
            ? /* istanbul ignore next our tests only throw Error objects */
                error
            : error.message;
        return __spreadArrays(errors, [
            {
                // NOTE: for now we just return the message and type "Other"
                // but we could later introspect for HTTP or AGO errors
                // and/or return the status code if available
                type: "Other",
                message: message,
            },
        ]);
    };
    /**
     * Fetch enrichments for an item
     * @param item
     * @param enrichments the list of enrichments to fetch
     * @param requestOptions
     * @returns an object with the item and enrichments
     * @private
     */
    var fetchItemEnrichments = function (item, enrichments, requestOptions) {
        // create a pipeline of enrichment operations
        var operations = enrichments.reduce(function (ops, enrichment) {
            var operation = enrichmentOperations[enrichment];
            // only include the enrichments that we know how to fetch
            operation && ops.push(operation);
            return ops;
        }, []);
        var pipeline = createOperationPipeline(operations);
        // execute pipeline and return the item and enrichments
        return pipeline({
            data: { item: item },
            stack: new OperationStack$1(),
            requestOptions: requestOptions,
        }).then(function (output) {
            // TODO: send telemetry so we have info on what enrichments are requested and possible errors
            return output.data;
        });
    };

    /**
     * concat an array of arrays
     * excluding any elements of the top level array
     * that are not actually arrays
     * @param arrays An array of arrays
     * @returns concatenated array
     * @private
     */
    var maybeConcat = function (arrays) {
        var result = [].concat.apply([], arrays.filter(Array.isArray));
        return result.length ? result : undefined;
    };

    /**
     * remote server error
     */
    var RemoteServerError = /** @class */ (function (_super) {
        __extends(RemoteServerError, _super);
        function RemoteServerError(message, url, status) {
            var _this = _super.call(this, message) || this;
            _this.status = status;
            _this.url = url;
            return _this;
        }
        return RemoteServerError;
    }(Error));
    /**
     * ```js
     * import { hubApiRequest } from "@esri/hub-common";
     * //
     * hubApiRequest(
     *   "/datasets",
     *   requestOptions
     * })
     *   .then(response);
     * ```
     * make a request to the Hub API
     * @param route API route
     * @param requestOptions request options
     */
    function hubApiRequest(route, requestOptions) {
        // merge in default request options
        var options = __assign({ 
            // why do we default to GET w/ our API?
            httpMethod: "GET" }, requestOptions);
        // use fetch override if any
        var _fetch = options.fetch || fetch;
        // merge in default headers
        var headers = __assign({ "Content-Type": "application/json" }, options.headers);
        // build query params/body based on requestOptions.params
        var query;
        var body;
        if (options.httpMethod === "GET") {
            // pass params in query string
            query = options.params;
        }
        else {
            // pass params in request body
            body = JSON.stringify(options.params);
        }
        // build Hub API URL
        var url = buildUrl({
            host: getHubApiUrl(options),
            path: ("/api/v3/" + route).replace(/\/\//g, "/"),
            query: query,
        });
        return _fetch(url, {
            method: options.httpMethod,
            headers: headers,
            body: body,
        }).then(function (resp) {
            if (resp.ok) {
                return resp.json();
            }
            else {
                throw new RemoteServerError(resp.statusText, url, resp.status);
            }
        });
    }

    // TODO: need to fetch data for client-side layer views as well
    // determine if we should fetch data for an item
    var shouldFetchData = function (item) {
        var type = normalizeItemType(item);
        var family = getFamily(type);
        var dataFamilies = ["template", "solution"];
        var dataTypes = ["Web Map", "Web Scene"];
        return includes(dataFamilies, family) || includes(dataTypes, type);
    };
    /**
     * get the default list of enrichments to fetch for content
     * @param item
     * @returns the default list of enrichments to fetch for content
     * @private
     */
    var getContentEnrichments = function (item) {
        // we fetch these enrichments for all content types
        var enrichments = [
            "groupIds",
            "metadata",
            "ownerUser",
            "org",
        ];
        // we only fetch data for certain content
        if (shouldFetchData(item)) {
            enrichments.push("data");
        }
        // we fetch server and layers for map and feature services
        return isMapOrFeatureServerUrl(item.url)
            ? enrichments.concat("server", "layers")
            : enrichments;
    };
    // build up request options to only include the above enrichments
    // that we fetch from the Hub API, and to optionally filter by slug
    var getHubEnrichmentsOptions = function (requestOptions, slug) {
        var opts = cloneObject$1(requestOptions);
        opts.params = __assign(__assign({}, opts.params), { 
            // TODO: we should fetch errors too
            // TODO: stop fetching recordCount at next breaking change
            "fields[datasets]": "slug,boundary,extent,recordCount,searchDescription,statistics" });
        if (slug) {
            opts.params["filter[slug]"] = slug;
        }
        return opts;
    };
    // extract the ids and enrichments from the Hub API response
    var getDatasetEnrichments = function (dataset) {
        var _a = parseDatasetId(dataset.id), itemId = _a.itemId, layerIdString = _a.layerId;
        var layerId = layerIdString && parseInt(layerIdString, 10);
        var _b = dataset.attributes, slug = _b.slug, boundary = _b.boundary, extent = _b.extent, recordCount = _b.recordCount, searchDescription = _b.searchDescription, statistics = _b.statistics;
        return {
            itemId: itemId,
            layerId: layerId,
            slug: slug,
            boundary: boundary,
            extent: extent,
            recordCount: recordCount,
            searchDescription: searchDescription,
            statistics: statistics,
        };
    };
    /**
     * fetch enrichment from the Hub API by slug
     * @param slug
     * @param requestOptions
     * @returns enrichments from the Hub API (slug, boundary, statistic, etc)
     * @private
     */
    var fetchHubEnrichmentsBySlug = function (slug, requestOptions) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, hubApiRequest("/datasets", getHubEnrichmentsOptions(requestOptions, slug))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, getDatasetEnrichments(response.data[0])];
            }
        });
    }); };
    /**
     * fetch enrichment from the Hub API by id
     * @param slug
     * @param requestOptions
     * @returns enrichments from the Hub API (slug, boundary, statistic, etc)
     * @private
     */
    var fetchHubEnrichmentsById = function (hubId, requestOptions) { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hubApiRequest("/datasets/" + hubId, getHubEnrichmentsOptions(requestOptions))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, getDatasetEnrichments(response.data)];
                case 2:
                    e_1 = _a.sent();
                    // dataset record not found, just log the error
                    // b/c we can still look up the item and enrichments by id
                    return [2 /*return*/, { errors: getEnrichmentErrors(e_1) }];
                case 3: return [2 /*return*/];
            }
        });
    }); };

    var hasFeatures = function (contentType) {
        return ["Feature Layer", "Table"].includes(contentType);
    };
    var maybeFetchLayerEnrichments = function (itemAndEnrichments, options) { return __awaiter(void 0, void 0, void 0, function () {
        var item, data, layers, layer, layerUrl, getLayerOptions, layerEnrichments, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    item = itemAndEnrichments.item, data = itemAndEnrichments.data;
                    layers = itemAndEnrichments.layers;
                    layer = layers && getItemLayer(item, layers, options && options.layerId);
                    if (!(layer && !layer.type)) return [3 /*break*/, 2];
                    layerUrl = parseServiceUrl(item.url) + "/" + layer.id;
                    getLayerOptions = Object.assign({ url: layerUrl }, options);
                    return [4 /*yield*/, getLayer(getLayerOptions)];
                case 1:
                    layer = _b.sent();
                    layers = layers.map(function (unhydratedLayer) {
                        return unhydratedLayer.id === layer.id ? layer : unhydratedLayer;
                    });
                    _b.label = 2;
                case 2:
                    if (!(layer && isLayerView(layer) && !data)) return [3 /*break*/, 4];
                    // to store (at least part of) it's view definition in item data
                    // it seems that most do not, but until we have a reliable signal
                    // we just fetch the item data for all layer views
                    return [4 /*yield*/, fetchItemEnrichments(item, ["data"], options)];
                case 3:
                    // to store (at least part of) it's view definition in item data
                    // it seems that most do not, but until we have a reliable signal
                    // we just fetch the item data for all layer views
                    _a = _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = undefined;
                    _b.label = 5;
                case 5:
                    layerEnrichments = _a;
                    return [2 /*return*/, __assign(__assign(__assign({}, itemAndEnrichments), layerEnrichments), { 
                            // merge error arrays
                            errors: maybeConcat([itemAndEnrichments.errors, layerEnrichments === null || layerEnrichments === void 0 ? void 0 : layerEnrichments.errors]), 
                            // Also remove once we stop supporting ArcGIS Servers below version 10.5
                            layers: layers })];
            }
        });
    }); };
    var fetchItemAndEnrichments = function (itemId, options) { return __awaiter(void 0, void 0, void 0, function () {
        var item, enrichmentsToFetch, enrichments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getItem(itemId, options)];
                case 1:
                    item = _a.sent();
                    // The Hub Application expects the item url of proxied CSVs to point to the
                    // proxying feature service. Stabbing it on here maintains that consistency
                    // and also helps us fetch and calculate the correct reference layer
                    item.url = getProxyUrl(item, options) || item.url;
                    enrichmentsToFetch = (options === null || options === void 0 ? void 0 : options.enrichments) || getContentEnrichments(item);
                    return [4 /*yield*/, fetchItemEnrichments(item, enrichmentsToFetch, options)];
                case 2:
                    enrichments = _a.sent();
                    return [2 /*return*/, maybeFetchLayerEnrichments(__assign(__assign({}, enrichments), { item: item }), options)];
            }
        });
    }); };
    var fetchContentById = function (hubId, options) { return __awaiter(void 0, void 0, void 0, function () {
        var itemId, _a, item, itemEnrichments, specifiedLayerId, hubEnrichments, _b, layerId;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    itemId = parseDatasetId(hubId).itemId;
                    return [4 /*yield*/, fetchItemAndEnrichments(itemId, options)];
                case 1:
                    _a = _c.sent(), item = _a.item, itemEnrichments = __rest(_a, ["item"]);
                    specifiedLayerId = options && options.layerId;
                    if (!canUseHubApiForItem(item, options)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetchHubEnrichmentsById(hubId, options)];
                case 2:
                    _b = _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _b = {};
                    _c.label = 4;
                case 4:
                    hubEnrichments = _b;
                    layerId = hubEnrichments.layerId;
                    // return a new content object composed from the item and enrichments we fetched
                    return [2 /*return*/, composeContent(item, __assign(__assign(__assign({ requestOptions: options }, itemEnrichments), hubEnrichments), { 
                            // prefer specified layer id if any
                            layerId: isNil(specifiedLayerId) ? layerId : specifiedLayerId, 
                            // merge error arrays
                            errors: maybeConcat([itemEnrichments.errors, hubEnrichments.errors]) }))];
            }
        });
    }); };
    var fetchContentBySlug = function (fullyQualifiedSlug, options) { return __awaiter(void 0, void 0, void 0, function () {
        var hubEnrichments, itemId, layerId, _a, item, itemEnrichments, specifiedLayerId, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetchHubEnrichmentsBySlug(fullyQualifiedSlug, options)];
                case 1:
                    hubEnrichments = _c.sent();
                    itemId = hubEnrichments.itemId;
                    layerId = hubEnrichments.layerId;
                    return [4 /*yield*/, fetchItemAndEnrichments(itemId, options)];
                case 2:
                    _a = _c.sent(), item = _a.item, itemEnrichments = __rest(_a, ["item"]);
                    specifiedLayerId = options && options.layerId;
                    if (!(!isNil(specifiedLayerId) && specifiedLayerId !== layerId)) return [3 /*break*/, 4];
                    // we fetched Hub enrichments by slug for another record,
                    // most likely the record for the parent service of this layer,
                    // so we need to fetch them for the specified layer instead
                    layerId = specifiedLayerId;
                    _b = [__assign({}, hubEnrichments)];
                    return [4 /*yield*/, fetchHubEnrichmentsById(itemId + "_" + layerId, options)];
                case 3:
                    hubEnrichments = __assign.apply(void 0, _b.concat([(_c.sent())]));
                    _c.label = 4;
                case 4: return [2 /*return*/, composeContent(item, __assign(__assign(__assign({ requestOptions: options }, itemEnrichments), hubEnrichments), { layerId: layerId, 
                        // Note that we are not extracting the slug for the specified layer.
                        // It seems that the old client composer code always populated the slug
                        // field with the slug that was passed into the function (typically the
                        // slug of the parent service). To maintain parity, we do the same here.
                        //
                        // TODO: should we prefer the slug of the fetched layer instead?
                        // return a new content object composed from the item and enrichments we fetched
                        slug: fullyQualifiedSlug, 
                        // merge error arrays
                        errors: maybeConcat([itemEnrichments.errors, hubEnrichments.errors]) }))];
            }
        });
    }); };
    var fetchContentRecordCount = function (content, requestOptions) { return __awaiter(void 0, void 0, void 0, function () {
        var url, viewDefinition, where, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    url = content.url, viewDefinition = content.viewDefinition;
                    where = viewDefinition === null || viewDefinition === void 0 ? void 0 : viewDefinition.definitionExpression;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, queryFeatures(__assign(__assign({}, requestOptions), { url: url,
                            where: where, returnCountOnly: true }))];
                case 2:
                    response = _b.sent();
                    return [2 /*return*/, response.count];
                case 3:
                    _b.sent();
                    // swallow the error and return Infinity as a flag that the caller can act on
                    // NOTE: this is what the -ui app currently expects, see:
                    // https://github.com/ArcGIS/opendata-ui/blob/300601918eb2dee79a89314880541ecd60f21e68/packages/opendata-ui/app/utils/composer.js#L273-L279
                    // however, we should probably push the error message into content.errors instead
                    return [2 /*return*/, Infinity];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Fetch enriched content from the Portal and Hub APIs.
     * @param identifier content slug or id
     * @param options Request options with additional options to control how the content or enrichments are fetched
     * @returns A content object composed of the backing item and enrichments
     *
     * ```js
     * import { fetchContent } from '@esri/hub-common'
     * // fetch content by slug
     * const content = await fetchContent('my-org::item-name')
     * ```
     */
    var fetchContent = function (identifier, options) { return __awaiter(void 0, void 0, void 0, function () {
        var content, _a, layer, type, canQuery, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!isSlug(identifier)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchContentBySlug(addContextToSlug(identifier, options === null || options === void 0 ? void 0 : options.siteOrgKey), options)];
                case 1:
                    _a = _d.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, fetchContentById(identifier, options)];
                case 3:
                    _a = _d.sent();
                    _d.label = 4;
                case 4:
                    content = _a;
                    layer = content.layer, type = content.type;
                    canQuery = !!layer && hasFeatures(type);
                    _b = content;
                    if (!(canQuery && (isNil(content.recordCount) || content.viewDefinition))) return [3 /*break*/, 6];
                    return [4 /*yield*/, fetchContentRecordCount(content, options)];
                case 5:
                    _c = _d.sent();
                    return [3 /*break*/, 7];
                case 6:
                    _c = content.recordCount;
                    _d.label = 7;
                case 7:
                    _b.recordCount = _c;
                    return [2 /*return*/, content];
            }
        });
    }); };

    /**
     * Add a token to the resource request if the request is to the portal
     * @param {string} url Resource Url
     * @param {IRequestOptions} requestOptions
     * @private
     */
    function _addTokenToResourceUrl(url, requestOptions) {
        var result = url;
        if (url.indexOf("token") === -1) {
            // no token
            // Note: authentication.portal is a fully org url
            // i.e. https://dcdev.maps.arcgis.com/sharing/rest
            // this may need to be smarter to handle non-public solutions
            // shared across orgs
            if (url.indexOf(requestOptions.authentication.portal) > -1) {
                // is the portal
                result = url + "?token=" + requestOptions.authentication.token;
            }
        }
        return result;
    }

    /**
     * Convert the resources array on an individual template in a solution
     * into an assets array that can be used to upload the resources to
     * the newly created item.
     * @param {object} template Template from a Solution
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function convertSolutionTemplateResourcesToAssets(template, hubRequestOptions) {
        var assets = [];
        if (template.resources && template.bundleItemId) {
            var portalRestUrl = getPortalApiUrl(hubRequestOptions.portalSelf);
            // the resources are stored on the solution item, and that Id is attached
            // into the template as .bundleItemId
            var solutionItemUrl_1 = portalRestUrl + "/content/items/" + template.bundleItemId;
            // the resources on the solution are prefixed with the item id of the item the
            // template was created from, which is stored as .itemId
            var prefix_1 = template.itemId;
            // map over the resources and convert them into assets
            assets = template.resources.map(function (name) {
                // we fetch the resource from .url property
                // and we upload it using the .name property
                return {
                    name: name,
                    type: "resource",
                    url: solutionItemUrl_1 + "/resources/" + prefix_1 + "-" + name
                };
            });
        }
        return assets;
    }

    /**
     * Given a url to an image, return it as a blob
     * @param {String} url Url to fetch the image from. Must have token if it's a non-publi item resource url
     * @param {Object} options additional optinos
     */
    function fetchImageAsBlob(url, options) {
        if (options === void 0) { options = {}; }
        if (!options.credentials) {
            options.credentials = "same-origin";
        }
        // We use fetch intentionally as the url may or may not be for an item url, so we don't
        // want this to run thru the main request logic
        return fetch(url, options).then(function (response) {
            return response.blob();
        });
    }

    /**
     * Fetch image from a url, and upload as a resource
     * @param {Object} options {id, owner, fileName, url, authentication}
     */
    function fetchAndUploadResource(options) {
        // first fetch it as a blob...
        return fetchImageAsBlob(options.url).then(function (file) {
            // upload it to the item...
            return addItemResource({
                id: options.id,
                owner: options.owner,
                name: options.fileName,
                resource: file,
                authentication: options.authentication
            });
        });
    }

    /**
     * Fetch image from a url, then upload to an item as it's thumbnail
     * @param {object} options
     */
    function fetchAndUploadThumbnail(options) {
        // first fetch it as a blob...
        return fetchImageAsBlob(options.url)
            .then(function (file) {
            return updateItem({
                item: {
                    id: options.id,
                    owner: options.owner
                },
                params: {
                    fileName: options.fileName,
                    thumbnail: file
                },
                authentication: options.authentication
            }).catch(function (_) {
                // resolve b/c this is not crtical
                return Promise.resolve();
            });
        })
            .catch(function (_) {
            return Promise.resolve();
        });
    }

    /**
     * Given an item, return an array of assets that includes
     * all the resources, as well as the thumbnail
     * @param {object} item Item
     * @param {IHubRequestOptions} IHubRequestOptions
     */
    function getItemAssets(item, hubRequestOptions) {
        var portalRestUrl = getPortalApiUrl(hubRequestOptions.portalSelf);
        var itemUrl = portalRestUrl + "/content/items/" + item.id;
        // if construct the asset for the thumbnail
        var thumbnailUrl = getItemThumbnailUrl(item, hubRequestOptions);
        var assets = [];
        if (thumbnailUrl) {
            assets.push({
                name: item.thumbnail,
                url: thumbnailUrl,
                type: "thumbnail"
            });
        }
        // get all the other resources
        // TODO: see how this works w/ folders
        return getItemResources(item.id, hubRequestOptions).then(function (response) {
            var resourceAssets = response.resources.map(function (e) {
                return {
                    name: e.resource,
                    type: "resource",
                    url: itemUrl + "/resources/" + e.resource
                };
            });
            return assets.concat(resourceAssets);
        });
    }

    /**
     * Given a string, return it as a blob
     * NOTE: USE objectToJsonBlob if you're saving a JSON resource!!!
     * NOTE: This is not currently supported in Node
     * @param {string} the string
     */
    function stringToBlob(s, type) {
        if (type === void 0) { type = "application/octet-stream"; }
        /* istanbul ignore next */
        if (typeof Blob !== "undefined") {
            var bytes = [];
            for (var i = 0; i < s.length; i++) {
                bytes[i] = s.charCodeAt(i);
            }
            var encoded = new Uint8Array(bytes);
            return new Blob([encoded], { type: type });
        }
        else {
            throw new Error("stringToBlob is not currently supported on Node");
        }
    }

    /**
     * Given an Item and an array of resources, upload them
     * @param {Object} itemModel Item add the resource to
     * @param {Array} resources Array of resources, with urls, to upload to the item
     * @param {Object} requestOptions {authentication}
     */
    function uploadResourcesFromUrl(itemModel, resources, requestOptions) {
        if (Array.isArray(resources)) {
            var resourcePromises = resources.reduce(function (acc, resource) {
                if (resource.url) {
                    var opts = {
                        id: itemModel.item.id,
                        owner: itemModel.item.owner,
                        fileName: resource.name,
                        url: _addTokenToResourceUrl(resource.url, requestOptions),
                        authentication: requestOptions.authentication
                    };
                    if (resource.type === "thumbnail") {
                        acc.push(fetchAndUploadThumbnail(opts));
                    }
                    else {
                        // treat as a resource
                        acc.push(fetchAndUploadResource(opts));
                    }
                }
                return acc;
            }, []);
            // Let them resolve...
            return Promise.all(resourcePromises);
        }
        else {
            return Promise.resolve([]);
        }
    }

    /**
     * Add a url property to the entries in the assets hash
     * @param {IModelTemplate} template
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function addSolutionResourceUrlToAssets(template, hubRequestOptions) {
        /* istanbul ignore next */
        var assets = template.assets || template.resources || [];
        if (template.bundleItemId) {
            var portalRestUrl = getPortalApiUrl(hubRequestOptions.portalSelf);
            // the resources are stored on the solution item, and that Id is attached
            // into the template as .bundleItemId
            var solutionItemUrl_1 = portalRestUrl + "/content/items/" + template.bundleItemId;
            // the resources on the solution are prefixed with the item id of the item the
            // template was created from, which is stored as .itemId
            var prefix_1 = template.itemId;
            // map over the resources and convert them into assets
            assets = assets.map(function (asset) {
                // we fetch the resource from .url property
                // and we upload it using the .name property
                return {
                    name: asset.name,
                    type: asset.type || "resource",
                    url: solutionItemUrl_1 + "/resources/" + prefix_1 + "-" + asset.name
                };
            });
        }
        return assets;
    }

    /**
     * Convert an object to a Blob with type  'application/json'
     * @param {*} obj
     * @returns Blob
     */
    function objectToJsonBlob(obj) {
        /* istanbul ignore next */
        if (typeof Blob !== "undefined") {
            return new Blob([JSON.stringify(obj)], { type: "application/json" });
        }
        else {
            throw new Error("objectToJsonBlob is not currently supported on Node");
        }
    }

    /* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * ENUM which defines File extensions.
     */
    exports.FileExtension = void 0;
    (function (FileExtension) {
        FileExtension["aptx"] = "aptx";
        FileExtension["bpk"] = "bpk";
        FileExtension["csv"] = "csv";
        FileExtension["eaz"] = "eaz";
        FileExtension["esriaddin"] = "esriaddin";
        FileExtension["esriaddinx"] = "esriaddinx";
        FileExtension["doc"] = "doc";
        FileExtension["docx"] = "docx";
        FileExtension["dlpk"] = "dlpk";
        FileExtension["featurecollection"] = "featurecollection";
        FileExtension["geojson"] = "geojson";
        FileExtension["gcpk"] = "gcpk";
        FileExtension["gpk"] = "gpk";
        FileExtension["gpkg"] = "gpkg";
        FileExtension["gpkx"] = "gpkx";
        FileExtension["insightswbk"] = "insightswbk";
        FileExtension["ipynb"] = "ipynb";
        FileExtension["jpg"] = "jpg";
        FileExtension["jpeg"] = "jpeg";
        FileExtension["json"] = "json";
        FileExtension["key"] = "key";
        FileExtension["kml"] = "kml";
        FileExtension["kmz"] = "kmz";
        FileExtension["lpk"] = "lpk";
        FileExtension["lpkx"] = "lpkx";
        FileExtension["lyr"] = "lyr";
        FileExtension["lyrx"] = "lyrx";
        FileExtension["mapx"] = "mapx";
        FileExtension["mmpk"] = "mmpk";
        FileExtension["mpk"] = "mpk";
        FileExtension["mpkx"] = "mpkx";
        FileExtension["msd"] = "msd";
        FileExtension["mspk"] = "mspk";
        FileExtension["mxd"] = "mxd";
        FileExtension["ncfg"] = "ncfg";
        FileExtension["nmc"] = "nmc";
        FileExtension["nmf"] = "nmf";
        FileExtension["numbers"] = "numbers";
        FileExtension["pages"] = "pages";
        FileExtension["pagx"] = "pagx";
        FileExtension["parquet"] = "parquet";
        FileExtension["pdf"] = "pdf";
        FileExtension["pmf"] = "pmf";
        FileExtension["png"] = "png";
        FileExtension["ppkx"] = "ppkx";
        FileExtension["ppt"] = "ppt";
        FileExtension["pptx"] = "pptx";
        FileExtension["proconfigx"] = "proconfigx";
        FileExtension["rpk"] = "rpk";
        FileExtension["rptx"] = "rptx";
        FileExtension["sd"] = "sd";
        FileExtension["slpk"] = "slpk";
        FileExtension["spk"] = "spk";
        FileExtension["stylx"] = "stylx";
        FileExtension["surveyaddin"] = "surveyaddin";
        FileExtension["sxd"] = "sxd";
        FileExtension["tif"] = "tif";
        FileExtension["tiff"] = "tiff";
        FileExtension["tpk"] = "tpk";
        FileExtension["tpkx"] = "tpkx";
        FileExtension["vsd"] = "vsd";
        FileExtension["vtpk"] = "vtpk";
        FileExtension["wmpk"] = "wmpk";
        FileExtension["wpk"] = "wpk";
        FileExtension["xls"] = "xls";
        FileExtension["xml"] = "xml";
        FileExtension["xlsx"] = "xlsx";
        FileExtension["zip"] = "zip";
        FileExtension["3dd"] = "3dd";
        FileExtension["3vr"] = "3vr";
        FileExtension["3ws"] = "3ws";
        FileExtension["rft.json"] = "rft.json";
        FileExtension["rft.xml"] = "rft.xml";
    })(exports.FileExtension || (exports.FileExtension = {}));
    /**
     * ENUM which defines human readable Item Type names
     */
    exports.ItemType = void 0;
    (function (ItemType) {
        ItemType["360 VR Experience"] = "360 VR Experience";
        ItemType["Apache Parquet"] = "Apache Parquet";
        ItemType["AppBuilder Widget Package"] = "AppBuilder Widget Package";
        ItemType["Desktop Add In"] = "Desktop Add In";
        ItemType["Explorer Add In"] = "Explorer Add In";
        ItemType["Explorer Map"] = "Explorer Map";
        ItemType["Explorer Layer"] = "Explorer Layer";
        ItemType["Windows Mobile Package"] = "Windows Mobile Package";
        ItemType["ArcGIS Pro Add In"] = "ArcGIS Pro Add In";
        ItemType["ArcGIS Pro Configuration"] = "ArcGIS Pro Configuration";
        ItemType["Globe Document"] = "Globe Document";
        ItemType["Map Document"] = "Map Document";
        ItemType["ArcPad Package"] = "ArcPad Package";
        ItemType["Published Map"] = "Published Map";
        ItemType["Scene Document"] = "Scene Document";
        ItemType["CityEngine Web Scene"] = "CityEngine Web Scene";
        ItemType["Code Sample"] = "Code Sample";
        ItemType["CSV Collection"] = "CSV Collection";
        ItemType["CSV"] = "CSV";
        ItemType["CAD Drawing"] = "CAD Drawing";
        ItemType["Deep Learning Package"] = "Deep Learning Package";
        ItemType["Desktop Application"] = "Desktop Application";
        ItemType["Desktop Application Template"] = "Desktop Application Template";
        ItemType["Desktop Style"] = "Desktop Style";
        ItemType["Earth Configuration"] = "Earth Configuration";
        ItemType["Feature Collection"] = "Feature Collection";
        ItemType["File Geodatabase"] = "File Geodatabase";
        ItemType["GeoJson"] = "GeoJson";
        ItemType["Geoprocessing Package"] = "Geoprocessing Package";
        ItemType["GeoPackage"] = "GeoPackage";
        ItemType["Geoprocessing Sample"] = "Geoprocessing Sample";
        ItemType["GML"] = "GML";
        ItemType["Image Collection"] = "Image Collection";
        ItemType["Image"] = "Image";
        ItemType["iWork Keynote"] = "iWork Keynote";
        ItemType["iWork Numbers"] = "iWork Numbers";
        ItemType["iWork Pages"] = "iWork Pages";
        ItemType["KML Collection"] = "KML Collection";
        ItemType["KML"] = "KML";
        ItemType["Layer"] = "Layer";
        ItemType["Layer Package"] = "Layer Package";
        ItemType["Layout"] = "Layout";
        ItemType["Locator Package"] = "Locator Package";
        ItemType["Map Package"] = "Map Package";
        ItemType["Map Template"] = "Map Template";
        ItemType["Microsoft Excel"] = "Microsoft Excel";
        ItemType["Microsoft Powerpoint"] = "Microsoft Powerpoint";
        ItemType["Visio Document"] = "Visio Document";
        ItemType["Microsoft Word"] = "Microsoft Word";
        ItemType["Mobile Basemap Package"] = "Mobile Basemap Package";
        ItemType["Mobile Map Package"] = "Mobile Map Package";
        ItemType["Mobile Scene Package"] = "Mobile Scene Package";
        ItemType["Notebook"] = "Notebook";
        ItemType["PDF"] = "PDF";
        ItemType["Pro Map"] = "Pro Map";
        ItemType["Pro Report"] = "Pro Report";
        ItemType["Project Package"] = "Project Package";
        ItemType["Project Template"] = "Project Template";
        ItemType["Raster function template"] = "Raster function template";
        ItemType["Rule Package"] = "Rule Package";
        ItemType["Scene Package"] = "Scene Package";
        ItemType["Service Definition"] = "Service Definition";
        ItemType["Shapefile"] = "Shapefile";
        ItemType["Survey123 Add In"] = "Survey123 Add In";
        ItemType["Tile Package"] = "Tile Package";
        ItemType["Vector Tile Package"] = "Vector Tile Package";
        ItemType["Workflow Manager Package"] = "Workflow Manager Package";
        ItemType["Document Link"] = "Document Link";
        ItemType["Feature Service"] = "Feature Service";
        ItemType["Geocoding Service"] = "Geocoding Service";
        ItemType["Geodata Service"] = "Geodata Service";
        ItemType["Geometry Service"] = "Geometry Service";
        ItemType["Geoprocessing Service"] = "Geoprocessing Service";
        ItemType["Geoenrichment Service"] = "Geoenrichment Service";
        ItemType["Globe Service"] = "Globe Service";
        ItemType["Image Service"] = "Image Service";
        ItemType["Map Service"] = "Map Service";
        ItemType["Network Analysis Service"] = "Network Analysis Service";
        ItemType["Vector Tile Service"] = "Vector Tile Service";
        ItemType["WFS"] = "WFS";
        ItemType["WMS"] = "WMS";
        ItemType["WMTS"] = "WMTS";
        ItemType["OGCFeatureServer"] = "OGCFeatureServer";
        ItemType["Scene Service"] = "Scene Service";
        ItemType["Stream Service"] = "Stream Service";
        ItemType["Workflow Manager Service"] = "Workflow Manager Service";
        ItemType["Web Mapping Application"] = "Web Mapping Application";
        ItemType["Mobile Application"] = "Mobile Application";
        ItemType["AppBuilder Extension"] = "AppBuilder Extension";
        ItemType["Google Drive"] = "Google Drive";
        ItemType["Dropbox"] = "Dropbox";
        ItemType["OneDrive"] = "OneDrive";
        ItemType["StoryMap"] = "StoryMap";
        ItemType["Dashboard"] = "Dashboard";
        ItemType["Hub Initiative"] = "Hub Initiative";
        ItemType["Hub Site Application"] = "Hub Site Application";
        ItemType["Web Experience"] = "Web Experience";
        ItemType["Insights Workbook Package"] = "Insights Workbook Package";
        ItemType["Application"] = "Application";
        ItemType["ArcGIS Explorer Application Configuration"] = "ArcGIS Explorer Application Configuration";
        ItemType["ArcMap Document"] = "ArcMap Document";
        ItemType["Layer File"] = "Layer File";
        ItemType["ogcFeature"] = "ogcFeature";
        ItemType["FeatureServer"] = "Feature Service";
        ItemType["GeocodeServer"] = "GeocodeServer";
        ItemType["GeoDataServer"] = "GeoDataServer";
        ItemType["GeometryServer"] = "GeometryServer";
        ItemType["GeoenrichmentServer"] = "GeoenrichmentServer";
        ItemType["GPServer"] = "GPServer";
        ItemType["GlobeServer"] = "GlobeServer";
        ItemType["ImageServer"] = "ImageServer";
        ItemType["MapServer"] = "MapServer";
        ItemType["NAServer"] = "NAServer";
        ItemType["ElevationServer"] = "ElevationServer";
        ItemType["VectorTileServer"] = "VectorTileServer";
        ItemType["Scene Server"] = "Scene Server";
        ItemType["StreamServer"] = "StreamServer";
        ItemType["WMServer"] = "WMServer";
        ItemType["TiledImageServer"] = "TiledImageServer";
    })(exports.ItemType || (exports.ItemType = {}));
    /**
     * Maps human readable file names to extensions IE Image === jpg, png, etc
     */
    var addCreateItemTypes = {
        "360 VR Experience": {
            fileExt: [exports.FileExtension["3dd"]],
            type: exports.ItemType["360 VR Experience"],
            typeKeywords: [],
        },
        "Apache Parquet": {
            fileExt: [exports.FileExtension.parquet],
            type: exports.ItemType["Apache Parquet"],
            typeKeywords: [],
        },
        "AppBuilder Widget Package": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["AppBuilder Widget Package"],
            typeKeywords: [],
        },
        "Desktop Add In": {
            fileExt: [exports.FileExtension.esriaddin],
            type: exports.ItemType["Desktop Add In"],
            typeKeywords: [
                "Tool",
                "Add In",
                "Desktop Add In",
                "ArcGIS Desktop",
                "ArcMap",
                "ArcGlobe",
                "ArcScene",
                "esriaddin",
            ],
        },
        "Explorer Add In": {
            fileExt: [exports.FileExtension.eaz],
            type: exports.ItemType["Explorer Add In"],
            typeKeywords: [
                "Tool",
                "Add In",
                "Explorer Add In",
                "ArcGIS Explorer",
                "eaz",
            ],
        },
        "Explorer Map": {
            fileExt: [exports.FileExtension.nmf],
            type: exports.ItemType["Explorer Map"],
            typeKeywords: [
                "Map",
                "Explorer Map",
                "Explorer Document",
                "2D",
                "3D",
                "ArcGIS Explorer",
                "nmf",
            ],
        },
        "ArcGIS Explorer Application Configuration": {
            fileExt: [exports.FileExtension.ncfg],
            type: exports.ItemType["Explorer Map"],
            typeKeywords: [
                "Map",
                "Explorer Map",
                "Explorer Mapping Application",
                "2D",
                "3D",
                "ArcGIS Explorer",
            ],
        },
        "Explorer Layer": {
            fileExt: [exports.FileExtension.nmc],
            type: exports.ItemType["Explorer Layer"],
            typeKeywords: ["Data", "Layer", "Explorer Layer", "ArcGIS Explorer", "nmc"],
        },
        "Windows Mobile Package": {
            fileExt: [exports.FileExtension.wmpk],
            type: exports.ItemType["Windows Mobile Package"],
            typeKeywords: [],
        },
        "ArcGIS Pro Add In": {
            fileExt: [exports.FileExtension.esriaddinx],
            type: exports.ItemType["ArcGIS Pro Add In"],
            typeKeywords: ["Tool", "Add In", "Pro Add In", "esriaddinx"],
        },
        "ArcGIS Pro Configuration": {
            fileExt: [exports.FileExtension.proconfigx],
            type: exports.ItemType["ArcGIS Pro Configuration"],
            typeKeywords: [],
        },
        "Globe Document": {
            fileExt: [exports.FileExtension["3dd"]],
            type: exports.ItemType["Globe Document"],
            typeKeywords: [
                "Map",
                "Globe Document",
                "3D",
                "ArcGlobe",
                "ArcGIS Server",
                "3dd",
            ],
        },
        "Map Document": {
            fileExt: [exports.FileExtension.msd],
            type: exports.ItemType["Map Document"],
            typeKeywords: [
                "Map Document",
                "Map",
                "2D",
                "ArcMap",
                "ArcGIS Server",
                "msd",
            ],
        },
        "ArcMap Document": {
            fileExt: [exports.FileExtension.mxd],
            type: exports.ItemType["Map Document"],
            typeKeywords: ["Map Document", "Map", "2D", "ArcMap", "ArcGIS Server"],
        },
        "ArcPad Package": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["ArcPad Package"],
            typeKeywords: ["Map", "Layer", "Data"],
        },
        "Published Map": {
            fileExt: [exports.FileExtension.pmf],
            type: exports.ItemType["Published Map"],
            typeKeywords: [
                "Map",
                "Published Map",
                "2D",
                "ArcReader",
                "ArcMap",
                "ArcGIS Server",
                "pmf",
            ],
        },
        "Scene Document": {
            fileExt: [exports.FileExtension.sxd],
            type: exports.ItemType["Scene Document"],
            typeKeywords: ["Map", "Scene Document", "3D", "ArcScene", "sxd"],
        },
        "CityEngine Web Scene": {
            fileExt: [exports.FileExtension["3ws"]],
            type: exports.ItemType["CityEngine Web Scene"],
            typeKeywords: ["3D", "Map", "Scene", "Web"],
        },
        "Code Sample": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["Code Sample"],
            typeKeywords: ["Code", "Sample"],
        },
        "CSV Collection": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["CSV Collection"],
            typeKeywords: [],
        },
        CSV: {
            fileExt: [exports.FileExtension.csv],
            type: exports.ItemType.CSV,
            typeKeywords: ["CSV"],
        },
        "CAD Drawing": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["CAD Drawing"],
            typeKeywords: [],
        },
        "Deep Learning Package": {
            fileExt: [exports.FileExtension.zip, exports.FileExtension.dlpk],
            type: exports.ItemType["Deep Learning Package"],
            typeKeywords: ["Deep Learning", "Raster"],
        },
        "Desktop Application": {
            type: exports.ItemType["Desktop Application"],
            typeKeywords: ["Desktop Application"],
        },
        "Desktop Application Template": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["Desktop Application Template"],
            typeKeywords: ["application", "template", "ArcGIS desktop"],
        },
        "Desktop Style": {
            fileExt: [exports.FileExtension.stylx],
            type: exports.ItemType["Desktop Style"],
            typeKeywords: ["ArcGIS Pro", "Symbology", "Style", "Symbols"],
        },
        "Earth Configuration": {
            fileExt: [exports.FileExtension.xml],
            type: exports.ItemType["Earth Configuration"],
            typeKeywords: ["ArcGIS Earth", "Earth", "Earth Configuration"],
        },
        "Feature Collection": {
            type: exports.ItemType["Feature Collection"],
            fileExt: [exports.FileExtension.featurecollection],
            typeKeywords: [],
        },
        "File Geodatabase": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["File Geodatabase"],
            typeKeywords: [],
        },
        GeoJson: {
            fileExt: [exports.FileExtension.geojson, exports.FileExtension.json],
            type: exports.ItemType.GeoJson,
            typeKeywords: [
                "Coordinates Type",
                "CRS",
                "Feature",
                "FeatureCollection",
                "GeoJSON",
                "Geometry",
                "GeometryCollection",
            ],
        },
        "Geoprocessing Package": {
            fileExt: [exports.FileExtension.gpk, exports.FileExtension.gpkx],
            type: exports.ItemType["Geoprocessing Package"],
            typeKeywords: [
                "ArcGIS Desktop",
                "ArcGlobe",
                "ArcMap",
                "ArcScene",
                "Geoprocessing Package",
                "gpk",
                "Model",
                "Result",
                "Script",
                "Sharing",
                "Tool",
                "Toolbox",
            ],
        },
        GeoPackage: {
            fileExt: [exports.FileExtension.gpkg],
            type: exports.ItemType.GeoPackage,
            typeKeywords: ["Data", "GeoPackage", "gpkg"],
        },
        "Geoprocessing Sample": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["Geoprocessing Sample"],
            typeKeywords: ["tool", "geoprocessing", "sample"],
        },
        GML: {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType.GML,
            typeKeywords: [],
        },
        "Image Collection": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["Image Collection"],
            typeKeywords: [],
        },
        Image: {
            fileExt: [
                exports.FileExtension.jpg,
                exports.FileExtension.jpeg,
                exports.FileExtension.png,
                exports.FileExtension.tif,
                exports.FileExtension.tiff,
            ],
            type: exports.ItemType.Image,
            typeKeywords: ["Data", "Image"],
        },
        "iWork Keynote": {
            fileExt: [exports.FileExtension.key],
            type: exports.ItemType["iWork Keynote"],
            typeKeywords: ["Data", "Document", "Mac"],
        },
        "iWork Numbers": {
            fileExt: [exports.FileExtension.numbers],
            type: exports.ItemType["iWork Numbers"],
            typeKeywords: ["Data", "Document", "Mac"],
        },
        "iWork Pages": {
            fileExt: [exports.FileExtension.pages],
            type: exports.ItemType["iWork Pages"],
            typeKeywords: ["Data", "Document", "Mac"],
        },
        "KML Collection": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["KML Collection"],
            typeKeywords: [],
        },
        KML: {
            type: exports.ItemType.KML,
            fileExt: [exports.FileExtension.kml, exports.FileExtension.kmz],
            typeKeywords: ["Data", "Map", "kml"],
        },
        Layer: {
            fileExt: [exports.FileExtension.lyr],
            type: exports.ItemType.Layer,
            typeKeywords: [
                "Data",
                "Layer",
                "ArcMap",
                "ArcGlobe",
                "ArcGIS Explorer",
                "lyr",
            ],
        },
        "Layer File": {
            fileExt: [exports.FileExtension.lyrx],
            type: exports.ItemType.Layer,
            typeKeywords: ["ArcGIS Pro", "Layer", "Layer File"],
        },
        "Layer Package": {
            fileExt: [exports.FileExtension.lpk, exports.FileExtension.lpkx],
            type: exports.ItemType["Layer Package"],
            typeKeywords: [],
        },
        Layout: {
            fileExt: [exports.FileExtension.pagx],
            type: exports.ItemType.Layout,
            typeKeywords: ["ArcGIS Pro", "Layout", "Layout File", "pagx"],
        },
        "Locator Package": {
            fileExt: [exports.FileExtension.gcpk],
            type: exports.ItemType["Locator Package"],
            typeKeywords: [],
        },
        "Map Package": {
            fileExt: [exports.FileExtension.mpk, exports.FileExtension.mpkx],
            type: exports.ItemType["Map Package"],
            typeKeywords: [],
        },
        "Map Template": {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType["Map Template"],
            typeKeywords: ["map", "ArcMap", "template", "ArcGIS desktop"],
        },
        "Microsoft Excel": {
            fileExt: [exports.FileExtension.xls, exports.FileExtension.xlsx],
            type: exports.ItemType["Microsoft Excel"],
            typeKeywords: ["Data", "Document", "Microsoft Excel"],
        },
        "Microsoft Powerpoint": {
            fileExt: [exports.FileExtension.ppt, exports.FileExtension.pptx],
            type: exports.ItemType["Microsoft Powerpoint"],
            typeKeywords: ["Data", "Document", "Microsoft Powerpoint"],
        },
        "Visio Document": {
            fileExt: [exports.FileExtension.vsd],
            type: exports.ItemType["Visio Document"],
            typeKeywords: ["Data", "Document", "Visio Document"],
        },
        "Microsoft Word": {
            fileExt: [exports.FileExtension.doc, exports.FileExtension.docx],
            type: exports.ItemType["Microsoft Word"],
            typeKeywords: ["Data", "Document"],
        },
        "Mobile Basemap Package": {
            fileExt: [exports.FileExtension.bpk],
            type: exports.ItemType["Mobile Basemap Package"],
            typeKeywords: [],
        },
        "Mobile Map Package": {
            fileExt: [exports.FileExtension.mmpk],
            type: exports.ItemType["Mobile Map Package"],
            typeKeywords: [],
        },
        "Mobile Scene Package": {
            fileExt: [exports.FileExtension.mspk],
            type: exports.ItemType["Mobile Scene Package"],
            typeKeywords: [],
        },
        Notebook: {
            fileExt: [exports.FileExtension.ipynb],
            type: exports.ItemType.Notebook,
            typeKeywords: ["Notebook", "Python"],
        },
        PDF: {
            fileExt: [exports.FileExtension.pdf],
            type: exports.ItemType.PDF,
            typeKeywords: ["Data", "Document", "PDF"],
        },
        "Pro Map": {
            fileExt: [exports.FileExtension.mapx],
            type: exports.ItemType["Pro Map"],
            typeKeywords: ["ArcGIS Pro", "Map", "Map File", "mapx"],
        },
        "Pro Report": {
            fileExt: [exports.FileExtension.rptx],
            type: exports.ItemType["Pro Report"],
            typeKeywords: [],
        },
        "Project Package": {
            fileExt: [exports.FileExtension.ppkx],
            type: exports.ItemType["Project Package"],
            typeKeywords: [],
        },
        "Project Template": {
            fileExt: [exports.FileExtension.aptx],
            type: exports.ItemType["Project Template"],
            typeKeywords: [],
        },
        "Raster function template": {
            fileExt: [exports.FileExtension["rft.json"], exports.FileExtension["rft.xml"]],
            type: exports.ItemType["Raster function template"],
            typeKeywords: [
                "Raster",
                "Functions",
                "Processing",
                "rft",
                "srf",
                "function template",
                "templates",
                "ArcGIS Pro",
            ],
        },
        "Rule Package": {
            fileExt: [exports.FileExtension.rpk],
            type: exports.ItemType["Rule Package"],
            typeKeywords: [],
        },
        "Scene Package": {
            fileExt: [exports.FileExtension.slpk, exports.FileExtension.spk],
            type: exports.ItemType["Scene Package"],
            typeKeywords: [],
        },
        "Service Definition": {
            fileExt: [exports.FileExtension.sd],
            type: exports.ItemType["Service Definition"],
            typeKeywords: ["Data", "Service", "Service Definition"],
        },
        Shapefile: {
            fileExt: [exports.FileExtension.zip],
            type: exports.ItemType.Shapefile,
            typeKeywords: ["Data", "Layer", "shapefile"],
        },
        "Survey123 Add In": {
            fileExt: [exports.FileExtension.surveyaddin],
            type: exports.ItemType["Survey123 Add In"],
            typeKeywords: ["Add In", "Survey123 Add In", "Tool"],
        },
        "Tile Package": {
            fileExt: [exports.FileExtension.tpk, exports.FileExtension.tpkx],
            type: exports.ItemType["Tile Package"],
            typeKeywords: [],
        },
        "Vector Tile Package": {
            fileExt: [exports.FileExtension.vtpk],
            type: exports.ItemType["Vector Tile Package"],
            typeKeywords: [],
        },
        "Workflow Manager Package": {
            fileExt: [exports.FileExtension.wpk],
            type: exports.ItemType["Workflow Manager Package"],
            typeKeywords: [],
        },
        "Document Link": {
            type: exports.ItemType["Document Link"],
            typeKeywords: ["Data", "Document"],
        },
        "Feature Service": {
            type: exports.ItemType["Feature Service"],
            typeKeywords: [
                "ArcGIS Server",
                "Data",
                "Feature Access",
                "Feature Service",
                "Service",
                "Singlelayer",
                "Hosted Service",
            ],
        },
        GeocodeServer: {
            type: exports.ItemType["Geocoding Service"],
            typeKeywords: [
                "ArcGIS Server",
                "Geocoding Service",
                "Locator Service",
                "Service",
                "Tool",
                "Service Proxy",
            ],
        },
        GeoDataServer: {
            type: exports.ItemType["Geodata Service"],
            typeKeywords: ["Data", "Service", "Geodata Service", "ArcGIS Server"],
        },
        GeometryServer: {
            type: exports.ItemType["Geometry Service"],
            typeKeywords: ["Tool", "Service", "Geometry Service", "ArcGIS Server"],
        },
        GeoenrichmentServer: {
            type: exports.ItemType["Geoenrichment Service"],
            typeKeywords: ["Geoenrichment Service", "ArcGIS Server"],
        },
        GPServer: {
            type: exports.ItemType["Geoprocessing Service"],
            typeKeywords: ["Tool", "Service", "Geoprocessing Service", "ArcGIS Server"],
        },
        GlobeServer: {
            type: exports.ItemType["Globe Service"],
            typeKeywords: ["Data", "Service", "Globe Service", "ArcGIS Server"],
        },
        ImageServer: {
            type: exports.ItemType["Image Service"],
            typeKeywords: ["Data", "Service", "Image Service", "ArcGIS Server"],
        },
        MapServer: {
            type: exports.ItemType["Map Service"],
            typeKeywords: ["Data", "Service", "Map Service", "ArcGIS Server"],
        },
        NAServer: {
            type: exports.ItemType["Network Analysis Service"],
            typeKeywords: [
                "Tool",
                "Service",
                "Network Analysis Service",
                "ArcGIS Server",
            ],
        },
        ElevationServer: {
            type: exports.ItemType["Image Service"],
            typeKeywords: ["Elevation 3D Layer"],
        },
        VectorTileServer: {
            type: exports.ItemType["Vector Tile Service"],
            typeKeywords: [],
        },
        WFS: {
            type: exports.ItemType.WFS,
            typeKeywords: ["Data", "Service", "Web Feature Service", "OGC"],
        },
        WMS: {
            type: exports.ItemType.WMS,
            typeKeywords: ["Data", "Service", "Web Map Service", "OGC"],
        },
        WMTS: {
            type: exports.ItemType.WMTS,
            typeKeywords: ["Data", "Service", "OGC"],
        },
        ogcFeature: {
            type: exports.ItemType.OGCFeatureServer,
            typeKeywords: [
                "Data",
                "Service",
                "Feature Service",
                "OGC",
                "OGC Feature Service",
            ],
        },
        SceneServer: {
            type: exports.ItemType["Scene Service"],
            typeKeywords: ["Scene Service"],
        },
        StreamServer: {
            type: exports.ItemType["Stream Service"],
            typeKeywords: ["Data", "Service", "Stream Service", "ArcGIS Server"],
        },
        WMServer: {
            type: exports.ItemType["Workflow Manager Service"],
            typeKeywords: [
                "Workflow Manager",
                "ArcGIS Server",
                "WMServer",
                "Workflow",
                "JTX",
                "Job Tracking",
            ],
        },
        TiledImageServer: {
            type: exports.ItemType["Image Service"],
            typeKeywords: ["Tiled Imagery"],
        },
        "Web Mapping Application": {
            type: exports.ItemType["Web Mapping Application"],
            typeKeywords: [
                "JavaScript",
                "Map",
                "Mapping Site",
                "Online Map",
                "Ready To Use",
                "Web AppBuilder",
                "Web Map (+ WAB2D or WAB3D)",
            ],
        },
        "Mobile Application": {
            type: exports.ItemType["Mobile Application"],
            typeKeywords: ["ArcGIS Mobile Map", "Mobile Application"],
        },
        "AppBuilder Extension": {
            type: exports.ItemType["AppBuilder Extension"],
            typeKeywords: ["Widget", "App Builder"],
        },
        "Google Drive": {
            type: exports.ItemType["Google Drive"],
            typeKeywords: ["CSV", "Shapefile", "GeoJSON", "Excel", "FileGeodatabase"],
        },
        Dropbox: {
            type: exports.ItemType.Dropbox,
            typeKeywords: ["CSV", "Shapefile", "GeoJSON", "Excel", "FileGeodatabase"],
        },
        OneDrive: {
            type: exports.ItemType.OneDrive,
            typeKeywords: ["CSV", "Shapefile", "GeoJSON", "Excel", "FileGeodatabase"],
        },
        "Map Service": {
            type: exports.ItemType["Map Service"],
            typeKeywords: [
                "ArcGIS Server",
                "Data",
                "Map Service",
                "Service",
                "Hosted Service",
            ],
        },
        StoryMap: {
            type: exports.ItemType.StoryMap,
            typeKeywords: [
                "arcgis-storymaps",
                "StoryMap",
                "Web Application (smstatusdraft or smsstatuspublished)",
            ],
        },
        Dashboard: {
            type: exports.ItemType.Dashboard,
            typeKeywords: ["Dashboard", "Operations Dashboard"],
        },
        "Hub Initiative": {
            type: exports.ItemType["Hub Initiative"],
            typeKeywords: ["Hub", "hubInitiative", "OpenData"],
        },
        "Hub Site Application": {
            type: exports.ItemType["Hub Site Application"],
            typeKeywords: [
                "Hub",
                "hubSite",
                "hubSolution",
                "JavaScript",
                "Map",
                "Mapping Site",
                "Online Map",
                "OpenData",
                "Ready To Use",
                "selfConfigured",
                "Web Map",
                "Registered App",
            ],
        },
        "Web Experience": {
            type: exports.ItemType["Web Experience"],
            typeKeywords: [
                "EXB Experience",
                "JavaScript",
                "Ready To Use Web Application",
                "Web Experience",
                "Web Mapping Application",
                "Web Page",
                "Web Site",
            ],
        },
        "Insights Workbook Package": {
            type: exports.ItemType["Insights Workbook Package"],
            fileExt: [exports.FileExtension.insightswbk],
            typeKeywords: ["Insights", "Insights Workbook Package"],
        },
    };

    var FEATURE_SERVICE_URL_REGEX = /(feature)server(\/|\/(\d+))?$/i;
    var SERVICE_URL_REGEX = /\/[a-zA-Z]+server(\/|\/(\d+))?$/i;
    /**
     * Feature service / Doc Links Should not have data urls. Let"s exclude them from that.
     *
     * @export
     * @param {string} itemType What type of item is it?
     * @return {*}  {boolean}
     */
    function shouldHaveDataUrl(itemType) {
        // Specifically we want to avoid FS / DL from having a data url.
        return !["Feature Service", "Document Link"].includes(itemType);
    }
    /**
     * Get the file name out of a url. Will return either the
     * hostname, or the pathname if it exists
     *
     * @export
     * @param {string} url Url to get a file name out of
     * @return {*}  {string}
     */
    function getFileName(url) {
        var filename;
        try {
            var parsed = new URL(url);
            // If the URL pathname exists, return its last segment,
            // otherwise return the hostname
            filename =
                parsed.pathname !== "/"
                    ? parsed.pathname.split("/").pop()
                    : parsed.hostname;
        }
        catch (e) {
            throw new Error("Error getting file name from data url");
        }
        return filename;
    }
    /**
     * Is this a valid url?
     *
     * @param {string} url Url to validate
     * @return {*}  {boolean}
     */
    function isUrl(url) {
        // Use try / catch as a simple string "test" will cause new URL() to throw an error.
        try {
            var result = new URL(url);
            // Cast to bool.
            return !!result;
        }
        catch (e) {
            Logger.error("Error parsing data url");
            return false;
        }
    }
    /**
     * Tests if url string is a feature service / layer.
     *
     * @param {string} url URL to test
     * @return {*}  {boolean}
     */
    function isFeatureService(url) {
        return FEATURE_SERVICE_URL_REGEX.test(url);
    }
    /**
     * Tests if url string is a service (map, feature, image, etc)
     *
     * @param {string} url Url to test
     * @return {*}  {boolean}
     */
    function isService(url) {
        return SERVICE_URL_REGEX.test(url);
    }
    /**
     * Is the service a feature service AND is it a layer specifically
     *
     * @param {string} url
     * @return {*}  {boolean}
     */
    function isFeatureLayer(url) {
        var results = url.match(FEATURE_SERVICE_URL_REGEX);
        return results && !!results[3];
    }
    /**
     * Gets item title from url as a fall back
     *
     * @param {string} url item url
     * @return {*}  {string}
     */
    function getFeatureServiceTitle(url) {
        return url.match(/\/services\/(.+)\/(feature|map|image)server/i)[1];
    }
    /**
     * Gets item info out of a feature layer item.
     *
     * @export
     * @param url Item URL
     * @param body Item body.
     * @return Item info (title, description, extent, url)
     */
    function getFeatureLayerItem(url, body) {
        return {
            title: body.name,
            description: body.description,
            extent: body.extent,
            url: url,
        };
    }
    /**
     * Gets item info out of a feature service response (which is not a specific layer)
     *
     * @export
     * @param {*} url
     * @param {*} body
     * @return {*}
     */
    function getFeatureServiceItem(url, body) {
        var description = body.serviceDescription || body.description;
        var title = getFeatureServiceTitle(url);
        var extent = body.fullExtent || body.initialExtent;
        return { title: title, description: description, extent: extent, url: url };
    }
    /**
     * Ping a non FS url and return response status && headers
     *
     * @export
     * @param {string} url Non FS URL
     * @return {*}  {Promise<{ ok: boolean, headers: Headers }>}
     */
    function pingUrl(url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, { method: "HEAD" })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                ok: response.ok,
                                headers: response.headers,
                            }];
                }
            });
        });
    }
    /**
     * Ping a FS URL and handle matters such as "hidden" success failures.
     *
     * @export
     * @param {string} url
     * @return {*}  {Promise<{ ok: boolean, item?: any }>}
     */
    function pingFeatureService(url) {
        return __awaiter(this, void 0, void 0, function () {
            var parsed, response, body, getItem, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsed = new URL(url);
                        parsed.searchParams.set("f", "json");
                        return [4 /*yield*/, fetch(parsed.href)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            return [2 /*return*/, { ok: false }];
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        body = _a.sent();
                        // Exit if the request returns an error
                        if (body.error) {
                            return [2 /*return*/, { ok: false }];
                        }
                        getItem = isFeatureLayer(url)
                            ? getFeatureLayerItem
                            : getFeatureServiceItem;
                        item = getItem(url, body);
                        return [2 /*return*/, {
                                ok: true,
                                item: item,
                            }];
                }
            });
        });
    }
    function detectDataTypeFromHeader(headers) {
        var contentType = headers.get("Content-Type");
        var dataType;
        if (!contentType) {
            return;
        }
        // Only get the "media-type"
        contentType = contentType.split(";").shift();
        if (contentType === "text/csv") {
            dataType = exports.ItemType.CSV;
        }
        else if (contentType === "application/vnd.ms-excel" ||
            contentType ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            dataType = exports.ItemType["Microsoft Excel"];
        }
        else if (contentType === "application/pdf") {
            dataType = exports.ItemType.PDF;
        }
        else if (contentType === "image/jpeg" ||
            contentType === "image/jpg" ||
            contentType === "image/png") {
            dataType = exports.ItemType.Image;
        }
        else if (contentType === "application/geo+json") {
            dataType = exports.ItemType.GeoJson;
        }
        return dataType;
    }
    function detectDataTypeFromExtension(url) {
        var contentType = url.toLowerCase().split(".").pop();
        var dataType;
        if (contentType === "csv") {
            dataType = exports.ItemType.CSV;
        }
        else if (contentType === "xls" || contentType === "xlsx") {
            dataType = exports.ItemType["Microsoft Excel"];
        }
        else if (contentType === "pdf") {
            dataType = exports.ItemType.PDF;
        }
        else if (contentType === "jpeg" ||
            contentType === "jpg" ||
            contentType === "png") {
            dataType = exports.ItemType.Image;
        }
        else if (contentType === "geojson") {
            dataType = exports.ItemType.GeoJson;
        }
        return dataType;
    }

    /**
     * Takes in a URL and validates it based on valid url, type of item, etc
     *
     * @export
     * @param {string} url
     * @return {*}  {Promise<any>}
     */
    function validateUrl(url) {
        return __awaiter(this, void 0, void 0, function () {
            var isFeatureServiceUrl, isServiceUrl, type, item, pingResult, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // If URL doesn't pass then exit out immediately.
                        if (!isUrl(url)) {
                            return [2 /*return*/, {
                                    pass: false,
                                    error: "invalidFormat",
                                }];
                        }
                        isFeatureServiceUrl = isFeatureService(url);
                        isServiceUrl = isService(url);
                        if (isServiceUrl && !isFeatureServiceUrl) {
                            return [2 /*return*/, {
                                    pass: false,
                                    error: "invalidFormat",
                                }];
                        }
                        pingResult = {};
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        if (!isFeatureServiceUrl) return [3 /*break*/, 3];
                        return [4 /*yield*/, pingFeatureService(url)];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, pingUrl(url)];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        pingResult = _a;
                        // return an error if the response is not okay
                        if (!pingResult.ok) {
                            return [2 /*return*/, {
                                    pass: false,
                                    error: "invalidUrl",
                                }];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        _b.sent();
                        // TODO: This is tricky. The fetch() API rejects when a network error
                        // happens. This error can be a CORS error, or a 404 error, or a timeout
                        // error. While an error like 404 does suggest a bad URL, the CORS occurs
                        // because this is a front-end request and the file is likely accessible by
                        // the server. Unfortunately, the error doesn't have any information about
                        // underline failure type. For now, the network failure is ignored, so the
                        // user can paste a URL from any domain and avoid the CORS issue.
                        Logger.error("error requesting url");
                        return [3 /*break*/, 7];
                    case 7:
                        // Use the metadata from the ping response if exists, otherwise guess the file
                        // name from the URL
                        if (pingResult.item) {
                            item = pingResult.item;
                        }
                        else {
                            item = { title: getFileName(url), url: url };
                        }
                        if (pingResult.headers) {
                            type = detectDataTypeFromHeader(pingResult.headers);
                        }
                        if (isFeatureServiceUrl) {
                            type = exports.ItemType["Feature Service"];
                        }
                        else if (!type) {
                            // Guess the data type from the extension
                            type = detectDataTypeFromExtension(url);
                        }
                        if (type) {
                            item.type = type;
                        }
                        if (item.type && shouldHaveDataUrl(item.type)) {
                            item.dataUrl = item.url;
                        }
                        return [2 /*return*/, {
                                pass: true,
                                // The type may or may not be true
                                type: type,
                                // fetched / calculated item
                                item: item,
                            }];
                }
            });
        });
    }

    /**
     * Parse an IncludeSpec from the include string
     * Include String structure:
     * - `enrichment{.deep.path} AS propertyName`
     *
     * Examples
     * - `server.layers.0.name as layerName` -> use the `server` enrichment, extract the name of the first layer and attach that as `layerName`
     * - `server.layers` ->  use the `server` enrichment, attach the `layers` array as `layers`
     * @param include
     * @returns
     */
    function parseInclude(include) {
        // TODO: Validate enrichment? Not clear how we'd do that other than a manully maintained string list
        var parts = include.split(" AS ");
        var path = parts[0];
        var prop = parts[1] || path.split(".").reverse()[0];
        var enrichment = path.split(".")[0];
        // We need the actual list of string values so we can verify
        // what we get in, is infact a valid enrichment.
        var spec = {
            enrichment: enrichment,
            path: path,
            prop: prop,
        };
        return spec;
    }

    /**
     * Enrich a generic search result
     * @param item
     * @param includes
     * @param requestOptions
     * @returns
     */
    function enrichContentSearchResult(item, include, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var result, DEFAULTS, specs, enrichments, enriched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            access: item.access,
                            id: item.id,
                            type: item.type,
                            name: item.title,
                            owner: item.owner,
                            summary: item.snippet || item.description,
                            createdDate: new Date(item.created),
                            createdDateSource: "item.created",
                            updatedDate: new Date(item.modified),
                            updatedDateSource: "item.modified",
                            family: getFamily(item.type),
                            links: {
                                self: "not-implemented",
                                siteRelative: "not-implemented",
                                thumbnail: "not-implemented",
                            },
                        };
                        DEFAULTS = [];
                        // Add any type-specific defaults here
                        // if (["Map Service", "Feature Service"].includes(item.type)) {
                        //   DEFAULTS = ["server.layers.length AS layerCount"];
                        // }
                        // if (item.type === "Web Map") {
                        //   DEFAULTS = ["data.operationalLayers.length AS layerCount"];
                        // }
                        // merge includes
                        include = __spreadArrays(DEFAULTS, include).filter(unique);
                        specs = include.map(parseInclude);
                        enrichments = mapBy("enrichment", specs).filter(unique);
                        enriched = {};
                        if (!enrichments.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetchItemEnrichments(item, enrichments, requestOptions)];
                    case 1:
                        enriched = _a.sent();
                        _a.label = 2;
                    case 2:
                        // map the enriched props onto the result
                        specs.forEach(function (spec) {
                            result[spec.prop] = getProp(enriched, spec.path);
                        });
                        // Handle links
                        // TODO: Link handling should be an enrichment
                        result.links.thumbnail = getItemThumbnailUrl(item, requestOptions);
                        result.links.self = getItemHomeUrl(result.id, requestOptions);
                        result.links.siteRelative = getHubRelativeUrl(result.type, result.id, item.typeKeywords);
                        return [2 /*return*/, result];
                }
            });
        });
    }

    // TODO: remove this at next breaking version
    /**
     * ```js
     * import { getCategory } from "@esri/hub-common";
     * //
     * getCategory('Feature Layer')
     * > 'dataset'
     * ```
     * **DEPRECATED: Use getCollection() instead**
     * returns the Hub category for a given item type
     * @param itemType The ArcGIS [item type](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
     * @returns the category of a given item type.
     */
    function getCategory(itemType) {
        if (itemType === void 0) { itemType = ""; }
        /* tslint:disable no-console */
        console.warn("DEPRECATED: Use getCollection() instead. getCategory will be removed at v10.0.0");
        /* tslint:enable no-console */
        var collection = getCollection(itemType);
        // for backwards compatibility
        return collection === "feedback" ? "app" : collection;
    }
    /**
     * ```js
     * import { getTypes } from "@esri/hub-common";
     * //
     * getTypes('site')
     * > [ 'hub site application' ]
     * ```
     * To do.
     * @param category The ArcGIS Hub category.
     * @returns all the item types for the given category.
     *
     */
    function getTypes(category) {
        if (category === void 0) { category = ""; }
        return categories[category.toLowerCase()];
    }
    /**
     * ```js
     * import { getTypeCategories } from "@esri/hub-common";
     * //
     * getTypeCategories(item)
     * > [ 'Hub Site Application' ]
     * ```
     * @param item Item object.
     * @returns typeCategory of the input item.
     *
     */
    function getTypeCategories(item) {
        if (item === void 0) { item = {}; }
        var type = normalizeItemType(item);
        var category = getCategory(type);
        if (category) {
            // upper case first letter and return as element in array for backwards compatibility
            var chars = Array.from(category);
            chars[0] = chars[0].toUpperCase();
            return [chars.join("")];
        }
        else {
            return ["Other"];
        }
    }
    /**
     * ```js
     * import { getContentIdentifier } from "@esri/hub-common";
     * //
     * getContentIdentifier(content, site)
     * > 'f12hhjk32' // id
     * // OR
     * > 'content-slug' // human-readable slug
     * ```
     * Returns the preferred identifier for a piece of content (determined by content type):
     * - Content from the 'template' and 'feedback' families return the standard id field
     * - Pages that are linked to the site parameter will return the slug defined by the site. Otherwise, the page id will be returned
     * - All other content will return the highest available item in the following hierarchy:
     *   1. slug - includes org prefix if the site parameter is a portal or has an orgKey different from the slug prefix
     *   2. hubId
     *   3. id
     * @param content The IHubContent item
     * @param site The site to compare content against
     * @returns the preferred id for the given content.
     */
    function getContentIdentifier(content, site) {
        // We don't currently support slugs for hub initiative templates, solutions or surveys
        if (includes(["template", "feedback"], content.family)) {
            return content.id;
        }
        // If it is a hub page linked to a site, return the page slug at the
        // site data instead. Because this one is the original one that was used
        // to create the page url (not mutable once created) and the slug (below)
        // generated by the hub-indexer could simply change with page name.
        if (isPageType(content.type)) {
            // check if the page is linked to the current site
            var pages = getProp(site, "data.values.pages") || [];
            // if so, return the page slug otherwise the page id
            var page = pages.find(function (p) { return p.id === content.id; });
            return page ? page.slug : content.id;
        }
        // If a slug is present, always return it
        if (content.slug) {
            var slug = void 0;
            var orgKey = getProp(site, "domainInfo.orgKey");
            // Use namespaced slug when on the umbrella site
            if (getProp(site, "data.values.isUmbrella")) {
                slug = content.slug;
            }
            else {
                // Use shortened slug if the slug's namespace is the same as the orgKey
                slug = removeContextFromSlug(content.slug, orgKey);
            }
            return slug;
        }
        return content.hubId || content.id;
    }
    /**
     * DEPRECATED: Use getFamily() instead.
     *
     * get the HubType for a given item or item type
     *
     * @param itemOrType an item or item.type
     */
    function getItemHubType(itemOrType) {
        /* tslint:disable no-console */
        console.warn("DEPRECATED: Use getFamily() instead. getItemHubType() will be removed at v10.0.0");
        /* tslint:enable no-console */
        if (typeof itemOrType === "string") {
            itemOrType = { type: itemOrType };
        }
        var itemType = normalizeItemType(itemOrType);
        // TODO: not all categories are Hub types, may need to validate
        return getCollection(itemType);
    }
    /**
     * Convert a Portal item to Hub content
     *
     * @param item Portal Item
     * @returns Hub content
     * @export
     */
    function itemToContent(item) {
        return composeContent(item);
    }
    /**
     * Convert a Hub API dataset resource to Hub Content
     *
     * @param {DatasetResource} Dataset resource
     * @returns {IHubContent} Hub content object
     * @export
     */
    function datasetToContent(dataset) {
        // extract item from dataset, create content from the item
        var item = datasetToItem(dataset);
        // extract enrichments from attributes
        var _a = dataset.attributes, 
        // item enrichments
        errors = _a.errors, boundary = _a.boundary, metadata = _a.metadata, slug = _a.slug, groupIds = _a.groupIds, orgId = _a.orgId, orgName = _a.orgName, organization = _a.organization, orgExtent = _a.orgExtent, 
        // map and feature server enrichments
        server = _a.server, layers = _a.layers, layer = _a.layer, recordCount = _a.recordCount, statistics = _a.statistics, 
        // additional attributes needed
        extent = _a.extent, searchDescription = _a.searchDescription;
        // get the layerId from the layer
        var layerId = layer && layer.id;
        // re-assemble the org as an enrichment
        var org = orgId && {
            id: orgId,
            name: orgName || organization,
            extent: orgExtent,
        };
        // compose a content out of the above
        return composeContent(item, {
            layerId: layerId,
            slug: slug,
            errors: errors,
            // setting this to null signals to enrichMetadata to skip this
            metadata: metadata || null,
            groupIds: groupIds,
            org: org,
            server: server,
            layers: layers,
            recordCount: recordCount,
            boundary: boundary,
            extent: extent,
            searchDescription: searchDescription,
            statistics: statistics,
        });
    }
    /**
     * Convert a Hub API dataset resource to a portal item
     *
     * @param {DatasetResource} Dataset resource
     * @returns {IItem} portal item
     * @export
     */
    function datasetToItem(dataset) {
        if (!dataset) {
            return;
        }
        var id = dataset.id, attributes = dataset.attributes;
        if (!attributes) {
            return;
        }
        // parse item id
        var itemId = parseDatasetId(id).itemId;
        // read item properties from attributes
        // NOTE: we attempt to read all item properties
        // even though some may not be currently returned
        var 
        // start w/ item properties from
        // https://developers.arcgis.com/rest/users-groups-and-items/item.htm
        owner = attributes.owner, orgId = attributes.orgId, created = attributes.created, 
        // the Hub API returns item.modified in attributes.itemModified (below)
        modified = attributes.modified, 
        // NOTE: we use attributes.name to store the title or the service/layer name
        // but in Portal name is only used for file types to store the file name (read only)
        name = attributes.name, title = attributes.title, type = attributes.type, typeKeywords = attributes.typeKeywords, description = attributes.description, snippet = attributes.snippet, tags = attributes.tags, thumbnail = attributes.thumbnail, 
        // the Hub API returns item.extent in attributes.itemExtent (below)
        // extent,
        categories = attributes.categories, contentStatus = attributes.contentStatus, 
        // the Hub API doesn't currently return spatialReference
        spatialReference = attributes.spatialReference, 
        // the Hub API doesn't currently return accessInformation
        accessInformation = attributes.accessInformation, licenseInfo = attributes.licenseInfo, culture = attributes.culture, url = attributes.url, access = attributes.access, 
        // the Hub API doesn't currently return proxyFilter
        proxyFilter = attributes.proxyFilter, properties = attributes.properties, 
        // the Hub API doesn't currently return appCategories, industries,
        // languages, largeThumbnail, banner, screenshots, listed, ownerFolder
        appCategories = attributes.appCategories, industries = attributes.industries, languages = attributes.languages, largeThumbnail = attributes.largeThumbnail, banner = attributes.banner, screenshots = attributes.screenshots, listed = attributes.listed, ownerFolder = attributes.ownerFolder, size = attributes.size, 
        // the Hub API doesn't currently return protected
        isProtected = attributes.protected, commentsEnabled = attributes.commentsEnabled, 
        // the Hub API doesn't currently return numComments, numRatings,
        // avgRating, numViews, itemControl, scoreCompleteness
        numComments = attributes.numComments, numRatings = attributes.numRatings, avgRating = attributes.avgRating, numViews = attributes.numViews, itemControl = attributes.itemControl, scoreCompleteness = attributes.scoreCompleteness, 
        // additional attributes we'll need
        // to derive the above values when missing
        itemExtent = attributes.itemExtent, itemModified = attributes.itemModified, modifiedProvenance = attributes.modifiedProvenance, serviceSpatialReference = attributes.serviceSpatialReference;
        // layer datasets will get their type from the layer
        // so we will need to derive the item type from the URL
        var serviceType = url && getServiceTypeFromUrl(url);
        // build and return an item from properties
        // NOTE: we currently do NOT provide default values
        // (i.e. null for scalar attributes, [] for arrays, etc)
        // for attributes that are not returned by the Hub API
        // this helps distinguish an item that comes from the API
        // but forces all consumers to do handle missing properties
        return {
            id: itemId,
            owner: owner,
            orgId: orgId,
            created: created,
            // for feature layers, modified will usually come from the layer so
            // we prefer itemModified, but fall back to modified if it came from the item
            modified: (itemModified ||
                (modifiedProvenance === "item.modified" && modified)),
            title: (title || name),
            type: serviceType || type,
            typeKeywords: typeKeywords,
            description: description,
            tags: tags,
            snippet: snippet,
            thumbnail: thumbnail,
            extent: itemExtent ||
                /* istanbul ignore next: API should always return itemExtent, but we default to [] just in case */ [],
            categories: categories,
            contentStatus: contentStatus,
            spatialReference: spatialReference || serviceSpatialReference,
            accessInformation: accessInformation,
            licenseInfo: licenseInfo,
            culture: culture,
            url: url,
            access: access,
            size: size,
            protected: isProtected,
            proxyFilter: proxyFilter,
            properties: properties,
            appCategories: appCategories,
            industries: industries,
            languages: languages,
            largeThumbnail: largeThumbnail,
            banner: banner,
            screenshots: screenshots,
            listed: listed,
            ownerFolder: ownerFolder,
            commentsEnabled: commentsEnabled,
            numComments: numComments,
            numRatings: numRatings,
            avgRating: avgRating,
            numViews: numViews,
            itemControl: itemControl,
            scoreCompleteness: scoreCompleteness,
        };
    }
    /**
     * returns a new content that has the specified type and
     * and updated related properties like, family, etc
     * @param content orignal content
     * @param type new type
     * @returns new content
     */
    var setContentType = function (content, type) {
        // get family and normalized type based on new type
        var normalizedType = normalizeItemType(__assign(__assign({}, content.item), { type: type }));
        var family = getFamily(normalizedType);
        var contentTypeIcon = getContentTypeIcon(normalizedType);
        var contentTypeLabel = getContentTypeLabel(normalizedType, content.isProxied);
        var updated = __assign(__assign({}, content), { type: normalizedType, family: family,
            // TODO: remove this at next breaking change now that it has been deprecated
            normalizedType: normalizedType,
            contentTypeIcon: contentTypeIcon,
            contentTypeLabel: contentTypeLabel });
        // update the relative URL to the content
        // which is based on type and family
        return appendContentUrls(updated, {
            relative: getContentRelativeUrl(updated),
        });
    };
    /**
     * Compute the content type label
     * @param contentType
     * @param isProxied
     * @returns content type label
     */
    var getContentTypeLabel = function (contentType, isProxied) {
        return isProxied ? "CSV" : camelize(contentType || "");
    };
    /**
     * DEPRECATED returns a new content that has the specified hubId and updated identifier
     * @param content orignal content
     * @param hubId new hubId
     * @returns new content
     */
    /* istanbul ignore next DEPRECATED and no longer in use */
    var setContentHubId = function (content, hubId) {
        var id = content.id, slug = content.slug;
        // get the identifier which is based on hubId
        var identifier = slug || hubId || id;
        var updated = __assign(__assign({}, content), { hubId: hubId, identifier: identifier });
        // update the relative URL to the content
        // which is based on identifier
        return appendContentUrls(updated, {
            relative: getContentRelativeUrl(updated),
        });
    };
    /**
     * DEPRECATED: Calculates the relative and absolute urls for a given content on a specific site
     *
     * @param content
     * @param siteModel
     * @returns relative and absolute urls
     */
    var getContentSiteUrls = function (content, siteModel) {
        // compute relative URL using a site specific identifier
        var siteIdentifier = getContentIdentifier(content, siteModel);
        var relative = getContentRelativeUrl(content, siteIdentifier);
        // get the absolute URL to this content on the site
        var siteUrl = getProp(siteModel, "item.url").replace(/\/$/, "");
        var absolute = "" + siteUrl + relative;
        return { relative: relative, absolute: absolute };
    };
    /**
     * append the absolute URL to the content on the site
     * also updates the relative URL in case the
     * @param content
     * @param siteModel
     * @returns
     */
    var setContentSiteUrls = function (content, siteModel) {
        var _a = getContentSiteUrls(content, siteModel), relative = _a.relative, site = _a.absolute;
        // append the updated URLs to a new content
        return appendContentUrls(content, {
            relative: relative,
            site: site,
        });
    };
    // URL helpers
    var appendContentUrls = function (content, newUrls) {
        // merge new urls into existing ones and return a new content
        var urls = __assign(__assign({}, content.urls), newUrls);
        return __assign(__assign({}, content), { urls: urls });
    };
    var getContentRelativeUrl = function (content, siteIdentifier) {
        return getHubRelativeUrl(content.type, siteIdentifier || content.identifier, content.typeKeywords);
    };

    /**
     * Implementation of atob() according to the HTML and Infra specs, except that
     * instead of throwing INVALID_CHARACTER_ERR we return null.
     */
    function atob(data) {
      if (arguments.length === 0) {
        throw new TypeError("1 argument required, but only 0 present.");
      }

      // Web IDL requires DOMStrings to just be converted using ECMAScript
      // ToString, which in our case amounts to using a template literal.
      data = `${data}`;
      // "Remove all ASCII whitespace from data."
      data = data.replace(/[ \t\n\f\r]/g, "");
      // "If data's length divides by 4 leaving no remainder, then: if data ends
      // with one or two U+003D (=) code points, then remove them from data."
      if (data.length % 4 === 0) {
        data = data.replace(/==?$/, "");
      }
      // "If data's length divides by 4 leaving a remainder of 1, then return
      // failure."
      //
      // "If data contains a code point that is not one of
      //
      // U+002B (+)
      // U+002F (/)
      // ASCII alphanumeric
      //
      // then return failure."
      if (data.length % 4 === 1 || /[^+/0-9A-Za-z]/.test(data)) {
        return null;
      }
      // "Let output be an empty byte sequence."
      let output = "";
      // "Let buffer be an empty buffer that can have bits appended to it."
      //
      // We append bits via left-shift and or.  accumulatedBits is used to track
      // when we've gotten to 24 bits.
      let buffer = 0;
      let accumulatedBits = 0;
      // "Let position be a position variable for data, initially pointing at the
      // start of data."
      //
      // "While position does not point past the end of data:"
      for (let i = 0; i < data.length; i++) {
        // "Find the code point pointed to by position in the second column of
        // Table 1: The Base 64 Alphabet of RFC 4648. Let n be the number given in
        // the first cell of the same row.
        //
        // "Append to buffer the six bits corresponding to n, most significant bit
        // first."
        //
        // atobLookup() implements the table from RFC 4648.
        buffer <<= 6;
        buffer |= atobLookup(data[i]);
        accumulatedBits += 6;
        // "If buffer has accumulated 24 bits, interpret them as three 8-bit
        // big-endian numbers. Append three bytes with values equal to those
        // numbers to output, in the same order, and then empty buffer."
        if (accumulatedBits === 24) {
          output += String.fromCharCode((buffer & 0xff0000) >> 16);
          output += String.fromCharCode((buffer & 0xff00) >> 8);
          output += String.fromCharCode(buffer & 0xff);
          buffer = accumulatedBits = 0;
        }
        // "Advance position by 1."
      }
      // "If buffer is not empty, it contains either 12 or 18 bits. If it contains
      // 12 bits, then discard the last four and interpret the remaining eight as
      // an 8-bit big-endian number. If it contains 18 bits, then discard the last
      // two and interpret the remaining 16 as two 8-bit big-endian numbers. Append
      // the one or two bytes with values equal to those one or two numbers to
      // output, in the same order."
      if (accumulatedBits === 12) {
        buffer >>= 4;
        output += String.fromCharCode(buffer);
      } else if (accumulatedBits === 18) {
        buffer >>= 2;
        output += String.fromCharCode((buffer & 0xff00) >> 8);
        output += String.fromCharCode(buffer & 0xff);
      }
      // "Return output."
      return output;
    }
    /**
     * A lookup table for atob(), which converts an ASCII character to the
     * corresponding six-bit number.
     */

    const keystr$1 =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function atobLookup(chr) {
      const index = keystr$1.indexOf(chr);
      // Throw exception if character is not in the lookup string; should not be hit in tests
      return index < 0 ? undefined : index;
    }

    var atob_1 = atob;

    /**
     * btoa() as defined by the HTML and Infra specs, which mostly just references
     * RFC 4648.
     */
    function btoa(s) {
      if (arguments.length === 0) {
        throw new TypeError("1 argument required, but only 0 present.");
      }

      let i;
      // String conversion as required by Web IDL.
      s = `${s}`;
      // "The btoa() method must throw an "InvalidCharacterError" DOMException if
      // data contains any character whose code point is greater than U+00FF."
      for (i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 255) {
          return null;
        }
      }
      let out = "";
      for (i = 0; i < s.length; i += 3) {
        const groupsOfSix = [undefined, undefined, undefined, undefined];
        groupsOfSix[0] = s.charCodeAt(i) >> 2;
        groupsOfSix[1] = (s.charCodeAt(i) & 0x03) << 4;
        if (s.length > i + 1) {
          groupsOfSix[1] |= s.charCodeAt(i + 1) >> 4;
          groupsOfSix[2] = (s.charCodeAt(i + 1) & 0x0f) << 2;
        }
        if (s.length > i + 2) {
          groupsOfSix[2] |= s.charCodeAt(i + 2) >> 6;
          groupsOfSix[3] = s.charCodeAt(i + 2) & 0x3f;
        }
        for (let j = 0; j < groupsOfSix.length; j++) {
          if (typeof groupsOfSix[j] === "undefined") {
            out += "=";
          } else {
            out += btoaLookup(groupsOfSix[j]);
          }
        }
      }
      return out;
    }

    /**
     * Lookup table for btoa(), which converts a six-bit number into the
     * corresponding ASCII character.
     */
    const keystr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function btoaLookup(index) {
      if (index >= 0 && index < 64) {
        return keystr[index];
      }

      // Throw INVALID_CHARACTER_ERR exception here -- won't be hit in the tests.
      return undefined;
    }

    var btoa_1 = btoa;

    var abab = {
      atob: atob_1,
      btoa: btoa_1
    };

    var WGS84_WKID = "4326";
    var PORTAL_EXPORT_TYPES = {
        csv: {
            name: "CSV",
            itemTypes: ["CSV", "CSV Collection"],
            supportsProjection: true,
        },
        kml: {
            name: "KML",
            itemTypes: ["KML", "KML Collection"],
            supportsProjection: false,
        },
        shapefile: {
            name: "Shapefile",
            itemTypes: ["Shapefile"],
            supportsProjection: true,
        },
        fileGeodatabase: {
            name: "File Geodatabase",
            itemTypes: ["File Geodatabase"],
            supportsProjection: true,
        },
        geojson: {
            name: "GeoJson",
            itemTypes: ["GeoJson"],
            supportsProjection: false,
        },
        excel: {
            name: "Excel",
            itemTypes: ["Microsoft Excel"],
            supportsProjection: true,
        },
        featureCollection: {
            name: "Feature Collection",
            itemTypes: ["Feature Collection"],
            supportsProjection: true,
        },
    };
    /**
     * Puts a spatial reference into a serialized format that can be used
     * for item typeKeywords.
     *
     * **Note**: discards "latestWkid"
     *
     * In the past we used `JSON.stringify`, but that causes problems because
     * it can include commas which are interpreted by the portal [update item call](https://developers.arcgis.com/rest/users-groups-and-items/update-item.htm)
     * as being separate typekeywords. With `JSON.stringify`, equality was also
     * dependent on the order of the properties in the spatial reference.
     *
     * Check https://developers.arcgis.com/web-map-specification/objects/spatialReference/
     * for more details on what this object looks like.
     */
    function serializeSpatialReference(spatialReference) {
        if (typeof spatialReference === "object") {
            var wkid = spatialReference.wkid, wkt = spatialReference.wkt;
            return wkid ? wkid + "" : abab.btoa(wkt);
        }
        else {
            return spatialReference;
        }
    }
    /**
     * spatialRefId can currently take the form of either a WKID string or a
     * serialized ISpatialReference object.
     *
     * TODO - we shouldn't need this function. Instead, spatialRefId should
     * always be consistent, maybe by using serializeSpatialReference
     *
     * @private
     */
    function parseSpatialRefId(spatialRefId) {
        var _spatialRefId;
        try {
            _spatialRefId = JSON.parse(spatialRefId);
        }
        catch (_a) {
            _spatialRefId = spatialRefId;
        }
        return _spatialRefId;
    }
    /**
     * Builds the Portal API query string to search for exports from a given dataset
     *
     * @param itemId - The dataset ID
     * @param options - A set of options including item types, layerId, and spatialRefId
     * @returns
     */
    function buildExistingExportsPortalQuery(itemId, options) {
        var _a = maybeExtractOptions(options), onlyTypes = _a.onlyTypes, layerId = _a.layerId, spatialRefId = _a.spatialRefId;
        var formatInfos = Object.keys(PORTAL_EXPORT_TYPES).map(function (key) { return PORTAL_EXPORT_TYPES[key]; });
        var noProjectionItemTypes = new Set(flattenArray(formatInfos
            .filter(function (info) { return !info.supportsProjection; })
            .map(function (info) { return info.itemTypes; })));
        var types;
        if (!onlyTypes) {
            types = flattenArray(formatInfos.map(function (info) { return info.itemTypes; }));
        }
        else {
            types = onlyTypes;
        }
        var queryBuilder = new SearchQueryBuilder()
            .startGroup()
            .match(getExportItemTypeKeyword(itemId))
            .in("typekeywords")
            .and()
            .match(getExportLayerTypeKeyword(layerId))
            .in("typekeywords")
            .endGroup()
            .and()
            .startGroup();
        buildExportTypesClause(queryBuilder, {
            types: types,
            spatialRefId: spatialRefId,
            noProjectionItemTypes: noProjectionItemTypes,
        });
        queryBuilder.endGroup();
        return queryBuilder.toParam();
    }
    function maybeExtractOptions(options) {
        if (options) {
            return {
                onlyTypes: options.onlyTypes,
                layerId: options.layerId,
                spatialRefId: options.spatialRefId,
            };
        }
        return {};
    }
    function buildExportTypesClause(builder, options) {
        var types = options.types, noProjectionItemTypes = options.noProjectionItemTypes, spatialRefId = options.spatialRefId;
        var getSpatialRefIdWithDefaults = function (_spatialRefId, itemType) {
            var ret = WGS84_WKID;
            if (_spatialRefId && !noProjectionItemTypes.has(itemType)) {
                ret = _spatialRefId;
            }
            return ret;
        };
        var buildQueryForType = function (type, _builder) {
            _builder
                .startGroup()
                .match(/\s/g.test(type) ? type : "\"" + type + "\"") // temporary logic until https://github.com/Esri/arcgis-rest-js/issues/916 is resolved
                .in("type")
                .and()
                .match(getSpatialRefTypeKeyword(getSpatialRefIdWithDefaults(spatialRefId, type)))
                .in("typekeywords")
                .endGroup();
        };
        types.forEach(function (type, i) {
            buildQueryForType(type, builder);
            if (i < types.length - 1) {
                builder.or();
            }
        });
    }
    /**
     * Generates typekeyword for identifying which spatialRefId an export is
     * @param spatialRefId - either a WKID, WKT, or stringified ISpatialReference
     * @private
     */
    function getSpatialRefTypeKeyword(spatialRefId) {
        var parsedSpatialReference = parseSpatialRefId(spatialRefId);
        var serializedSpatialReference = serializeSpatialReference(parsedSpatialReference);
        return "spatialRefId:" + serializedSpatialReference;
    }
    /**
     * Returns the keyword identifying exports by the item they originate from
     * @param itemId - ID for the item from which the export originated
     * @private
     */
    function getExportItemTypeKeyword(itemId) {
        return "exportItem:" + itemId;
    }
    /**
     * Returns the keyword identifying exports by the layer they originate from
     * @param layerId - ID for the layer from which the export originated
     * @private
     */
    function getExportLayerTypeKeyword(layerId) {
        // NOTE - Layer Id's need to be padded with "0" so that /search results are predictable. Searches for typeKeywords:"exportLayer:1" don't work.
        // See https://github.com/Esri/hub.js/pull/472 for more information.
        // TODO - use `filter` when Enterprise Sites adds support.
        return layerId ? "exportLayer:0" + layerId : "exportLayer:null";
    }

    /**
     * Unprotect and Remove a Group.
     * Assumed caller has checked that the current user should be able
     * to unprotect and remove the group. Underlying calls are failsafe
     * so a failure to unprotect or remove the group will not reject
     * @param {IUserGroupOptions} userGroupOptions id and authentication
     * @private
     */
    function _unprotectAndRemoveGroup(userGroupOptions) {
        var failSafeUnprotect = failSafe(unprotectGroup, { success: true });
        var failSafeRemove = failSafe(removeGroup, { success: true });
        return failSafeUnprotect(userGroupOptions).then(function () {
            return failSafeRemove(userGroupOptions);
        });
    }

    /**
     * @private
     */
    function _consolidateResults(context) {
        var autoAddResult = context.autoAddResult, inviteResult = context.inviteResult, primaryEmailResult = context.primaryEmailResult, secondaryEmailResult = context.secondaryEmailResult;
        var combinedEmailResults;
        if (primaryEmailResult || secondaryEmailResult) {
            var validResults = [primaryEmailResult, secondaryEmailResult].filter(function (r) { return r; });
            var combinedSuccess = validResults.every(function (r) { return r.success; });
            var combinedErrors = validResults.reduce(function (collection, r) { return collection.concat(getWithDefault$1(r, "errors", [])); }, []);
            combinedEmailResults = {
                success: combinedSuccess
            };
            if (combinedErrors.length) {
                combinedEmailResults.errors = combinedErrors;
            }
        }
        var overallSuccess = [autoAddResult, inviteResult, combinedEmailResults]
            .filter(function (r) { return r; })
            .every(function (r) { return r.success; });
        return {
            success: overallSuccess,
            autoAdd: autoAddResult,
            invite: inviteResult,
            email: combinedEmailResults
        };
    }

    /**
     * @private
     *
     * Coerce autoAdd response into a more similar interface as
     * the other rest calls.
     *
     * If any users are not auto added, an error is added to the response
     * and unadded users are placed into the invitation list
     */
    function _formatAutoAddResponse(rawResponse, context) {
        if (rawResponse) {
            var success = !getProp(rawResponse, "notAdded.length") && !rawResponse.errors;
            context.autoAddResult = { success: success };
            if (!success) {
                var errors = rawResponse.errors || [];
                if (getProp(rawResponse, "notAdded.length")) {
                    errors.push(new ArcGISRequestError("Users not auto-added: " + rawResponse.notAdded.join(", ")));
                }
                context.autoAddResult.errors = errors;
                // Move unadded users to invite list;
                var unaddedUsers = context.usersToAutoAdd.filter(function (user) {
                    return includes(rawResponse.notAdded, user.username);
                });
                context.usersToInvite = context.usersToInvite.concat(unaddedUsers);
            }
        }
        return context;
    }

    /**
     * @private
     *
     * returns whether or not the users are in the same org
     */
    function _canEmailUser(recipient, sender) {
        return recipient.orgId === sender.orgId;
    }

    /**
     * @private
     */
    function _isOrgAdmin(user) {
        return user.role === "org_admin" && !user.roleId;
    }

    /**
     * Attempts to email members of the requesting user's organization.
     *
     * @param {IUser[]} users Users to email (must be in the same org as the requesting user)
     * @param {IEmail} email
     * @param {IAuthenticationManager} authentication
     * @param {boolean} isOrgAdmin // Whether the requesting user in an org admin
     *
     * @returns {object|null} A promise that resolves to the result of the transaction (null if no users are passed in)
     */
    function emailOrgUsers(users, email, authentication, isOrgAdmin) {
        var response = Promise.resolve(null);
        if (users.length) {
            var args = {
                authentication: authentication,
                message: email.body,
                subject: email.subject,
                notificationChannelType: "email",
                users: users.map(function (u) { return u.username; })
            };
            if (!isOrgAdmin) {
                args.batchSize = 1;
            }
            response = createOrgNotification(args);
        }
        return response;
    }

    /**
     * @private
     *
     * If a secondary authentication is passed in AND
     * an email object is passed in AND
     * the previous invitation call was successful:
     *
     * Send an email notification to the invited
     * users that are part of the secondary authentication's org
     */
    function _processSecondaryEmail(context) {
        var response = Promise.resolve(context);
        // If secondaryRO provided, send email to the invited users in the secondaryRO's org (typically a community org)
        if (context.email &&
            context.secondaryRO &&
            getProp(context, "inviteResult.success")) {
            var secondaryUser_1 = getWithDefault$1(context, "secondaryRO.portalSelf.user", {});
            var secondaryOrgUsersToEmail = context.usersToInvite.filter(function (u) {
                return _canEmailUser(u, secondaryUser_1);
            });
            response = emailOrgUsers(secondaryOrgUsersToEmail, context.email, context.secondaryRO.authentication, _isOrgAdmin(secondaryUser_1)).then(function (result) {
                context.secondaryEmailResult = result;
                return context;
            });
        }
        return response;
    }

    /**
     *
     * Attempts to auto-add users to a group
     *
     * @param {string} id ID of the group the users will be added to
     * @param {IUser[]} users
     * @param {IAuthenticationManager} authentication
     *
     * @returns {IAddGroupUsersResult|null} Result of the transaction (null if no users are passed in)
     */
    function autoAddUsers(id, users, authentication) {
        var response = Promise.resolve(null);
        if (users.length) {
            var args = {
                id: id,
                users: users.map(function (u) { return u.username; }),
                authentication: authentication
            };
            response = addGroupUsers(args);
        }
        return response;
    }

    /**
     * @private
     */
    function _processAutoAdd(context) {
        return autoAddUsers(getProp(context, "groupId"), getProp(context, "usersToAutoAdd"), getProp(context, "primaryRO.authentication")).then(function (rawResponse) { return _formatAutoAddResponse(rawResponse, context); });
    }

    /**
     *
     * Attempts to invite users to a group
     *
     * @param {string} id ID of the group the users will be invited to
     * @param {object[]} users
     * @param {object} authentication
     * @param {number} expiration How long the invite will be active (in minutes)
     * @param {string} role What role should they be added as. Defaults to group member
     *
     * @returns {object|null} Result of the transaction (null if no users are passed in)
     */
    function inviteUsers(id, users, authentication, expiration, // default to 2 week expiration TODO: is this actually 2 weeks?
    role // default to group member, but allow for team_admin as well
    ) {
        if (expiration === void 0) { expiration = 20160; }
        if (role === void 0) { role = "group_member"; }
        var response = Promise.resolve(null);
        if (users.length) {
            var args = {
                id: id,
                users: users.map(function (u) { return u.username; }),
                authentication: authentication,
                role: role,
                expiration: expiration,
            };
            response = inviteGroupUsers(args);
        }
        return response;
    }

    /**
     * @private
     */
    function _processInvite(context) {
        return inviteUsers(getProp(context, "groupId"), getProp(context, "usersToInvite"), getProp(context, "primaryRO.authentication")).then(function (result) {
            context.inviteResult = result;
            return context;
        });
    }

    /**
     * @private
     *
     * Send email notification if an email object is present and
     * the previous invitation call was successful
     */
    function _processPrimaryEmail(context) {
        var response = Promise.resolve(context);
        // Email users if invite succeeds
        if (context.email && getProp(context, "inviteResult.success")) {
            response = emailOrgUsers(context.usersToEmail, context.email, context.primaryRO.authentication, _isOrgAdmin(context.requestingUser)).then(function (result) {
                context.primaryEmailResult = result;
                return context;
            });
        }
        return response;
    }

    /**
     * @private
     *
     * A user can be auto-added if they are part of the requesting user's e-org
     * or c-org and the requesting user has the assignToGroups privilege
     */
    function _getAutoAddUsers(users, requestingUser) {
        var usersToAutoAdd = [];
        if (requestingUser.privileges.indexOf("portal:admin:assignToGroups") !== -1) {
            var orgIds_1 = [requestingUser.orgId, requestingUser.cOrgId].filter(function (o) { return o; });
            usersToAutoAdd = users.filter(function (u) { return orgIds_1.indexOf(u.orgId) !== -1; });
        }
        return usersToAutoAdd;
    }

    /**
     * @private
     *
     * A user will be invited if they cannot be auto-added
     */
    function _getInviteUsers(users, requestingUser) {
        var autoAddedUsers = _getAutoAddUsers(users, requestingUser);
        return users.filter(function (user) { return !autoAddedUsers.some(function (aau) { return aau.username === user.username; }); });
    }

    /**
     * @private
     *
     * A user can be emailed if they are invited (not auto-added)
     * and the _canEmailUser condition is met
     */
    function _getEmailUsers(users, requestingUser, includeSelf) {
        if (includeSelf === void 0) { includeSelf = false; }
        var invitedUsers = _getInviteUsers(users, requestingUser);
        var emailUsers = invitedUsers.filter(function (user) {
            return _canEmailUser(user, requestingUser);
        });
        if (includeSelf) {
            emailUsers.push(requestingUser);
        }
        return emailUsers;
    }

    /**
     * Adds, invites or emails users about joining a group
     * based on the permissions of the requesting user. The
     * function returns a hash of results indicating which
     * operations were attempted and whether they were successful.
     *
     * In general, this algorithm will auto-add all the users
     * that it can, invite the others, and send emails to eligible
     * invited users (See below for more details)
     *
     * Here are a couple caveats to be aware of:
     * 1) If the requestingUser can auto-add to the group (A.K.A. has
     * portal:admin:assignToGroups) no email will be sent, period.
     * 2) Emails can only be sent to members of the same org as the
     * requesting user if they have been invited (not auto-added)
     * to the group. If emails must to be sent to invited members
     * of a second org (e.g a community org), an authenticated user
     * of the second org must be passed in (see secondaryRO)
     * 3) If no email is passed in, no email will be sent
     * 4) If auto-adding fails, the unadded users will be invited
     *
     * @param {string} groupId
     * @param {IUser[]} allUsers
     * @param {IHubRequestOptions} primaryRO Info and authentication for the requesting user
     * @param {IEmail} [email] Email to be sent (if qualifying users are passed in)
     * @param {IHubRequestOptions} [secondaryRO] Info and authentication for emailing members of a secondary organization (typically a community org)
     *
     * @returns {IConsolidatedResult} The operations attempted, whether they were successful and any errors
     */
    function addUsersToGroup(groupId, allUsers, primaryRO, email, secondaryRO) {
        // Extract requesting user
        var requestingUser = cloneObject$1(getWithDefault$1(primaryRO, "portalSelf.user", {}));
        requestingUser.cOrgId = getProp(primaryRO, "portalSelf.portalProperties.hub.settings.communityOrg.orgId");
        // Context for each process segment
        var context = {
            groupId: groupId,
            allUsers: allUsers,
            primaryRO: primaryRO,
            email: email,
            secondaryRO: secondaryRO,
            requestingUser: requestingUser,
            usersToAutoAdd: _getAutoAddUsers(allUsers, requestingUser),
            usersToInvite: _getInviteUsers(allUsers, requestingUser),
            usersToEmail: _getEmailUsers(allUsers, requestingUser, getProp(email, "copyMe"))
        };
        return _processAutoAdd(context)
            .then(_processInvite)
            .then(_processPrimaryEmail)
            .then(_processSecondaryEmail)
            .then(_consolidateResults);
    }

    /**
     * Fetch the count of items shared to the group.
     * This is done by searching for content in the group
     * and using the returned `total` value
     * @param input
     * @returns
     */
    var enrichGroupContentCount = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichGroupContentCount");
        // w/o the : any here, I get a compile error about
        // .authentication being incompatible w/ UserSession
        var options = __assign({ groupId: data.group.id, num: 1 }, requestOptions);
        return searchGroupContent(options)
            .then(function (results) {
            stack.finish(opId);
            return {
                data: __assign(__assign({}, data), { contentCount: results.total }),
                stack: stack,
                requestOptions: requestOptions,
            };
        })
            .catch(function (error) { return handleEnrichmentError$1(error, input, opId); });
    };
    /**
     * Create a summary of the Group membership by searching for members,
     * limiting to three for a sample, and using the `total`.
     * @param input
     * @returns
     */
    var enrichGroupMembershipSummary = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichGroupContentCount");
        // w/o the `: any` here, I get a compile error about
        // .authentication being incompatible w/ UserSession
        var options = __assign({ num: 3 }, requestOptions);
        return searchGroupUsers(data.group.id, options)
            .then(function (results) {
            stack.finish(opId);
            return {
                data: __assign(__assign({}, data), {
                    membershipSummary: { total: results.total, users: results.users },
                }),
                stack: stack,
                requestOptions: requestOptions,
            };
        })
            .catch(function (error) { return handleEnrichmentError$1(error, input, opId); });
    };
    // add the error to the content.errors,
    // log current stack operation as finished with an error
    // and return output that can be piped into the next operation
    var handleEnrichmentError$1 = function (error, input, opId) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        stack.finish(opId, { error: error });
        return {
            data: __assign(__assign({}, data), { errors: getEnrichmentErrors(error, data.errors) }),
            stack: stack,
            requestOptions: requestOptions,
        };
    };
    /**
     * Available enrichments for Groups
     */
    var groupEnrichementOperations$1 = {
        membershipSummary: enrichGroupMembershipSummary,
        contentCount: enrichGroupContentCount,
    };
    /**
     * Fetch enrichments for Groups
     * @param group
     * @param enrichments
     * @param requestOptions
     * @returns
     */
    function fetchGroupEnrichments(group, enrichments, requestOptions) {
        // create a pipeline of enrichment operations
        var operations = enrichments.reduce(function (ops, enrichment) {
            var operation = groupEnrichementOperations$1[enrichment];
            // only include the enrichments that we know how to fetch
            operation && ops.push(operation);
            return ops;
        }, []);
        var pipeline = createOperationPipeline(operations);
        // execute pipeline and return the item and enrichments
        return pipeline({
            data: { group: group },
            stack: new OperationStack$1(),
            requestOptions: requestOptions,
        }).then(function (output) {
            // TODO: send telemetry so we have info on what enrichments are requested and possible errors
            return output.data;
        });
    }

    /**
     * Search the Hub API
     *
     * @param requestOptions
     * @returns JSONAPI response
     */
    function hubApiSearch(requestOptions) {
        // derive default headers if authentication
        var authentication = requestOptions.authentication;
        var headers = authentication &&
            authentication.serialize && { authentication: authentication.serialize() };
        var defaults = {
            headers: headers,
            httpMethod: "POST",
        };
        return hubApiRequest("/search", __assign(__assign({}, defaults), requestOptions));
    }

    /* Copyright (c) 2018-2021 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Well known APIs
     * Short-forms for specifying common APIs
     * We will likely deprecate this
     */
    var SEARCH_APIS = {
        arcgis: {
            label: "ArcGIS Online",
            url: "https://www.arcgis.com",
            type: "arcgis",
        },
        arcgisQA: {
            label: "ArcGIS Online QAEXT",
            url: "https://qaext.arcgis.com",
            type: "arcgis",
        },
        arcgisDEV: {
            label: "ArcGIS Online DEVEXT",
            url: "https://devext.arcgis.com",
            type: "arcgis",
        },
        hub: {
            label: "ArcGIS Hub",
            url: "https://hub.arcgis.com/api",
            type: "arcgis-hub",
        },
        hubDEV: {
            label: "ArcGIS Hub DEV",
            url: "https://hubdev.arcgis.com/api",
            type: "arcgis-hub",
        },
        hubQA: {
            label: "ArcGIS Hub QA",
            url: "https://hubqa.arcgis.com/api",
            type: "arcgis-hub",
        },
    };
    /**
     * @private
     * Convert array of api "names" into full ApiDefinitions
     * @param apis
     * @returns
     */
    function expandApis(apis) {
        return apis.map(expandApi);
    }
    /**
     * @private
     * Convert an api "name" into a full ApiDefinition
     * @param api
     * @returns
     */
    function expandApi(api) {
        if (typeof api === "string" && api in SEARCH_APIS) {
            return SEARCH_APIS[api];
        }
        else {
            // it's an object, so we trust that it's well formed
            return api;
        }
    }
    /**
     * @private
     * Merge two date ranges by taking the longest span
     * @param dr1
     * @param dr2
     * @returns
     */
    function mergeDateRange(dr1, dr2) {
        // TODO: Remove with _searchContent
        var result = cloneObject$1(dr1);
        // feels like there is a more concise way to do this...
        if (dr2.from < dr1.from) {
            result.from = dr2.from;
        }
        if (dr2.to > dr1.to) {
            result.to = dr2.to;
        }
        return result;
    }
    /**
     * @private
     * Merge two [`MatchOptions`](../MatchOptions)
     *
     * Currently a naieve implementation where the arrays are simply merged
     *
     * @param mo1
     * @param mo2
     * @returns
     */
    function mergeMatchOptions(mo1, mo2) {
        // TODO: Remove with _searchContent
        var result = {};
        // None of these props are required, so we can't just
        // use Object.keys/.entries
        var props = ["any", "all", "not", "exact"];
        props.forEach(function (prop) {
            var key = prop;
            var merged = __spreadArrays(getMatchValue(mo1, key), getMatchValue(mo2, key));
            if (merged.length) {
                // remove any dupes and set on the return
                result[key] = merged.filter(unique);
            }
        });
        return result;
    }
    /**
     * Get the value of a property on an IMatchOptions
     *
     * This is complex b/c all the props are optional, and
     * they could be a simple string, or an array of strings.
     *
     * This function normalizes all that and returns an array,
     * which may or may not be empty
     * @param option
     * @param key
     * @returns
     */
    function getMatchValue(option, key) {
        var matchValue = [];
        if (option[key]) {
            var val = option[key];
            if (Array.isArray(val)) {
                matchValue = val;
            }
            else {
                matchValue = [val];
            }
        }
        return matchValue;
    }
    /**
     * @private
     * Convert a field value into a MatchOptions if it's not already one
     * @param value
     * @returns
     */
    function valueToMatchOptions(value) {
        var result = {};
        if (Array.isArray(value)) {
            result = {
                any: value,
            };
        }
        else {
            if (typeof value === "string") {
                result = {
                    any: [value],
                };
            }
            if (typeof value === "object") {
                result = value;
            }
        }
        return result;
    }
    /**
     * @private
     * Convert a RelativeDate to a DateRange<number>
     * @param relative
     * @returns
     */
    function relativeDateToDateRange(relative) {
        // hash of offsets
        var offsetMs = {
            min: 1000 * 60,
            hours: 1000 * 60 * 60,
            days: 1000 * 60 * 60 * 24,
            weeks: 1000 * 60 * 60 * 24 * 7,
        };
        var now = new Date();
        // default
        var result = {
            type: "date-range",
            from: now.getTime(),
            to: now.getTime(),
        };
        //
        switch (relative.unit) {
            case "hours":
            case "days":
            case "weeks":
                result.from = result.to - offsetMs[relative.unit] * relative.num;
                break;
            case "months":
                // get the current month and subtract num
                // NOTE: when the previous month has fewer days than this month
                // setMonth() will return a date w/in the current month
                // example: 3/30 -> 3/2 b/c there is no 2/28
                now.setMonth(now.getMonth() - relative.num);
                result.from = now.getTime();
                break;
            case "years":
                now.setFullYear(now.getFullYear() - relative.num);
                result.from = now.getTime();
                break;
        }
        return result;
    }
    /**
     * @private
     * As a final `ISearchOptions` object gets created, many such objects are created, and
     * need to be systematically "merged" so as to return consistently structured `q` and `filter`
     * values.
     * @param so1
     * @param so2
     * @param join
     * @returns
     */
    function mergeSearchOptions$1(so1, so2, join) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: mergeSearchOptions will be removed. Work with IFilterGroups<\"group\"> and hubSearch() instead");
        var result = cloneObject$1(so1);
        var q = so2.q, filter = so2.filter;
        if (q) {
            result.q = (result.q ? " (" + result.q + " " + join + " " + q + ")" : q).trim();
        }
        if (filter) {
            result.filter = (result.filter ? "(" + result.filter + " " + join + " " + filter + ")" : filter).trim();
        }
        return result;
    }
    /**
     * @private
     * Serialize a `MatchOptions` into `q` or `filter` on an `ISearchOptions`
     * DEPRECATED: Serialization should be handled in filter-utils.ts
     * @param key
     * @param opts
     * @returns
     */
    function serializeMatchOptions$1(key, opts) {
        var result = {
            q: "",
            filter: "",
        };
        if (opts.exact) {
            // defined separately for refactoring later
            var userFilterableFields = [
                "username",
                "firstname",
                "lastname",
                "fullname",
                "email",
            ];
            var itemFilterableFields = [
                "title",
                "tags",
                "typekeywords",
                "type",
                "name",
                "owner",
            ];
            var groupFilterableFields = ["title", "typekeywords", "owner"];
            var filterableFields = __spreadArrays(userFilterableFields, itemFilterableFields, groupFilterableFields);
            if (filterableFields.includes(key)) {
                result.filter = serializeStringOrArray$1("AND", key, opts.exact);
            }
            else {
                // Treat it the same as .all
                if (typeof opts.exact === "string") {
                    if (!opts.all) {
                        opts.all = [];
                    }
                    if (typeof opts.all === "string") {
                        opts.all = [opts.all];
                    }
                    opts.all.push(opts.exact);
                }
                if (Array.isArray(opts.exact)) {
                    if (!opts.all) {
                        opts.all = [];
                    }
                    if (typeof opts.all === "string") {
                        opts.all = [opts.all];
                    }
                    opts.all = opts.all.concat(opts.exact);
                }
            }
        }
        // Handle the other props
        if (opts.any) {
            result.q = serializeStringOrArray$1("OR", key, opts.any);
        }
        if (opts.all) {
            result.q =
                (result.q ? result.q + " AND " : "") +
                    serializeStringOrArray$1("AND", key, opts.all);
        }
        if (opts.not) {
            // negate the entries if they are not
            result.q =
                (result.q ? result.q + " AND " : "") +
                    serializeStringOrArray$1("OR", "-" + key, opts.not);
        }
        return result;
    }
    /**
     * @private
     * Serialize a DateRange<number> into a Portal Query string
     * @param key
     * @param range
     * @returns
     */
    function serializeDateRange$1(key, range) {
        return {
            q: key + ":[" + range.from + " TO " + range.to + "]",
            filter: "",
        };
    }
    /**
     * @private
     * Serialize a `string` or `string[]` into a string
     * @param join
     * @param key
     * @param value
     * @returns
     */
    function serializeStringOrArray$1(join, key, value) {
        var q = "";
        if (Array.isArray(value)) {
            q = key + ":\"" + value.join("\" " + join + " " + key + ":\"") + "\"";
            if (value.length > 1) {
                q = "(" + q + ")";
            }
        }
        else {
            q = key + ":\"" + value + "\"";
        }
        return q;
    }
    /**
     * Create a `.next()` function for a type
     * @param request
     * @param nextStart
     * @param total
     * @param fn
     * @returns
     */
    function getNextFunction(request, nextStart, total, fn) {
        var clonedRequest = cloneObject$1(request);
        // clone will not handle authentication so we do it manually
        if (request.authentication) {
            clonedRequest.authentication = UserSession.deserialize(request.authentication.serialize());
        }
        // figure out the start
        clonedRequest.start = nextStart > -1 ? nextStart : total + 1;
        return function (authentication) {
            if (authentication) {
                clonedRequest.authentication = authentication;
            }
            return fn(clonedRequest);
        };
    }
    /**
     * Construct a the full url to a group thumbnail
     *
     * - If the group has a thumbnail, construct the full url
     * - If the group is not public, append on the token (if passed in)
     * @param portalUrl
     * @param group
     * @param token
     * @returns
     */
    function getGroupThumbnailUrl(portalUrl, group, token) {
        var thumbnailUrl = null;
        if (group.thumbnail) {
            thumbnailUrl = portalUrl + "/community/groups/" + group.id + "/info/" + group.thumbnail;
            if (token && group.access !== "public") {
                thumbnailUrl = thumbnailUrl + "?token=" + token;
            }
        }
        return thumbnailUrl;
    }
    /**
     * Construct a the full url to a user thumbnail
     *
     * - If the user has a thumbnail, construct the full url
     * - If the user is not public, append on the token
     * @param portalUrl
     * @param user
     * @param token
     * @returns
     */
    function getUserThumbnailUrl(portalUrl, user, token) {
        var thumbnailUrl = null;
        if (user.thumbnail) {
            thumbnailUrl = portalUrl + "/community/users/" + user.username + "/info/" + user.thumbnail;
            if (token && user.access !== "public") {
                thumbnailUrl = thumbnailUrl + "?token=" + token;
            }
        }
        return thumbnailUrl;
    }

    // TODO: Remove with _searchContent
    // TODO: Implement $dataset
    var ContentFilterExpansions = {
        $apps: [
            {
                type: {
                    any: [
                        "Code Sample",
                        "Web Mapping Application",
                        "Mobile Application",
                        "Application",
                        "Desktop Application Template",
                        "Desktop Application",
                        "Operation View",
                        "Dashboard",
                        "Operations Dashboard Extension",
                        "Workforce Project",
                        "Insights Workbook",
                        "Insights Page",
                        "Insights Model",
                        "Hub Page",
                        "Hub Initiative",
                        "Hub Site Application",
                        "StoryMap",
                        "Web Experience",
                        "Web Experience Template",
                        "Form",
                    ],
                    not: [
                        "Code Attachment",
                        "Featured Items",
                        "Symbol Set",
                        "Color Set",
                        "Windows Viewer Add In",
                        "Windows Viewer Configuration",
                        "Map Area",
                        "Indoors Map Configuration",
                    ],
                },
                typekeywords: {
                    not: ["MapAreaPackage", "SMX"],
                },
            },
        ],
        $storymap: [
            {
                type: "StoryMap",
            },
            {
                type: "Web Mapping Application",
                typekeywords: ["Story Map"],
            },
        ],
        $dashboard: [
            {
                type: "Dashboard",
                typekeywords: {
                    any: ["Dashboard"],
                    not: ["ArcGIS Operation View", "Add In", "Extension"],
                },
            },
        ],
        $dataset: [],
        $experience: [
            {
                type: {
                    any: ["Web Experience"],
                    not: ["Web Experience Template"],
                },
            },
        ],
        $site: [
            {
                type: ["Hub Site Application", "Site Application"],
            },
            {
                type: ["Web Mapping Application"],
                typekeywords: ["hubSite"],
            },
        ],
        $initiative: [
            {
                type: {
                    any: "Hub Initiative",
                    not: "Hub Initiative Template",
                },
            },
        ],
        $document: [
            {
                typekeywords: {
                    any: "Document",
                    not: ["MapAreaPackage", "SMX"],
                },
                type: {
                    any: [
                        "Image",
                        "Layout",
                        "Desktop Style",
                        "Project Template",
                        "Report Template",
                        "Pro Report",
                        "Statistical Data Collection",
                        "360 VR Experience",
                        "netCDF",
                        "PDF",
                        "CSV",
                        "Administrative Report",
                        "Raster function template",
                    ],
                    not: [
                        "Image Service",
                        "Explorer Document",
                        "Explorer Map",
                        "Globe Document",
                        "Scene Document",
                        "Code Attachment",
                        "Featured Items",
                        "Symbol Set",
                        "ColorSet",
                        "Windows Viewer Add In",
                        "Windows Viewer Configuration",
                        "Map Area",
                        "Indoors Map Configuration",
                    ],
                },
            },
        ],
    };
    /**
     * @private
     * Convert portal search response to facets
     * Note: Only applicable to an item search
     * @param response
     * @returns
     */
    // TODO: Remove with _searchContent
    function convertPortalResponseToFacets(response, operation) {
        if (operation === void 0) { operation = "OR"; }
        // delegate to a more future-friendly version
        return convertPortalItemResponseToFacets(response, operation, "filter");
    }
    /**
     * @private
     * Convert portal search response to facets
     * Note: Only applicable to an item search
     * @param response
     * @returns
     */
    function convertPortalItemResponseToFacets(response, operation, optionProp // TODO: Remove with _searchContent and use `filters`
    ) {
        var _a;
        if (operation === void 0) { operation = "OR"; }
        if (optionProp === void 0) { optionProp = "filters"; }
        // TODO: move into portalSearchItems
        var result = [];
        if ((_a = response.aggregations) === null || _a === void 0 ? void 0 : _a.counts) {
            response.aggregations.counts.forEach(function (entry) {
                var facet = {
                    label: entry.fieldName,
                    key: entry.fieldName,
                    aggField: entry.fieldName,
                    display: "multi-select",
                };
                var options = [];
                entry.fieldValues.forEach(function (fv) {
                    var filter = {
                        filterType: "item",
                    };
                    // construct the filter based on the operation
                    var matchKey = operation === "OR" ? "any" : "all";
                    var filterMatchOption = {};
                    filterMatchOption[matchKey] = [fv.value];
                    filter[entry.fieldName] = filterMatchOption;
                    // construct the FacetOption
                    var fo = {
                        label: fv.value + " (" + fv.count + ")",
                        key: fv.value,
                        count: fv.count,
                        selected: false,
                    };
                    // Temporary to ensure the old fn can delegate to this
                    // but we can still return the correct structure
                    // TODO: Remove with _searchContent
                    /* istanbul ignore next */
                    if (optionProp === "filter") {
                        fo.filter = filter;
                    }
                    else {
                        fo.filters = [filter];
                    }
                    options.push(fo);
                });
                facet.options = options;
                result.push(facet);
            });
        }
        return result;
    }
    /**
     * Merge `Filter<"content">` objects
     *
     * Useful in components which may get partial filters from a variety of
     * sub-components, which are then combined into a single filter prior
     * to executing the search.
     * @param filters
     * @returns
     */
    function mergeContentFilter(filters) {
        Logger.warn("DEPRECATION: mergeContentFilter will be removed and filters should not longer be merged. Work with IFilterGroups instead");
        // expand all the filters so all prop types are consistent
        var expanded = filters.map(expandContentFilter);
        // now we can merge based on fields
        var dateFields = ["created", "modified"];
        var specialFields = __spreadArrays(["filterType", "subFilters", "term"], dateFields);
        var result = expanded.reduce(function (acc, entry) {
            // process fields
            Object.entries(entry).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (acc.hasOwnProperty(key)) {
                    /* istanbul ignore else */
                    if (!specialFields.includes(key)) {
                        acc[key] = mergeMatchOptions(acc[key], value);
                    }
                    else if (dateFields.includes(key)) {
                        acc[key] = mergeDateRange(acc[key], value);
                    }
                    else if (key === "term") {
                        acc[key] = acc[key] + " " + value;
                    }
                    else if (key === "subFilters") {
                        acc[key] = mergeSubFilters(acc[key], value);
                    }
                }
                else {
                    acc[key] = cloneObject$1(value);
                }
            });
            return acc;
        }, {});
        result.filterType = "content";
        return result;
    }
    function mergeSubFilters(sf1, sf2) {
        // Simplistic implementation: we just merge the arrays
        // in the future we may try to de-dupe things as a safeguard
        return __spreadArrays(sf1, sf2);
    }
    /**
     * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
     *
     * Filter's can express their intent in a very terse form, but to ensure consistent structures
     * we expand them into their more verbose form.
     *
     * i.e. `title: "Water"` expands into `title: { any: ["Water"]}`
     *
     * - "well known" type values are expanded
     *    - i.e. `type: "$storymap"` expands into two `subFilter` entries
     * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
     * - RelativeDate fields are converted to DateRange<number>
     *
     * @param filter
     * @returns
     */
    function expandContentFilter(filter) {
        Logger.warn("DEPRECATION: expandContentFilter will be removed. Work with IFilterGroups<\"item\"> instead");
        // Expand filter.type first
        var expandedTypeFilter = expandTypeField(filter);
        // Expand subfilters
        // Guard - JS Clients could send in anything...
        if (Array.isArray(filter.subFilters)) {
            // Convert any strings into the coresponding ContentFilterDefinition
            expandedTypeFilter.subFilters = expandedTypeFilter.subFilters.reduce(function (acc, entry) {
                if (typeof entry === "string") {
                    // if the entry is not a key of ContentFilterExpansions
                    // we just skip over it
                    if (ContentFilterExpansions[entry]) {
                        acc = acc.concat(ContentFilterExpansions[entry]);
                    }
                }
                else {
                    acc.push(entry); // should be a ContentFilterDefinition
                }
                return acc;
            }, []);
        }
        // Convert all props into MatchOptions/DateRanges
        return convertContentDefinitionToFilter(expandedTypeFilter);
    }
    /**
     * @private
     * Expand from a well-known "type" into it's longer form
     *
     * i.e. `type: "$storymap"` expands into two subFilters entries
     *
     * @param filter
     * @returns
     */
    function expandTypeField(filter) {
        var clone = cloneObject$1(filter);
        // ensure subFilters is defined as an array
        clone.subFilters = clone.subFilters || [];
        if (clone.type) {
            // if .type is an Array...
            if (Array.isArray(clone.type)) {
                // remove any well-known-keys and move their expansions into subfilters
                clone.type = clone.type.reduce(function (acc, entry) {
                    if (isWellKnownType(entry)) {
                        // working with dynamic objects in typescript requires some assertions
                        var key = entry;
                        clone.subFilters = clone.subFilters.concat(lookupTypeFilters(key));
                    }
                    else {
                        acc.push(entry);
                    }
                    return acc;
                }, []);
            }
            else if (isWellKnownType(clone.type)) {
                var key = clone.type;
                clone.subFilters = clone.subFilters.concat(lookupTypeFilters(key));
                delete clone.type;
            }
            else ;
        }
        return clone;
    }
    /**
     * Is the argument a well-known type "key"
     *
     * Accepts `string`, `string[]` or `IMatchOptions`
     * but only string values can possibly be properties
     * on `ContentFilterExpansions`
     * @param key
     * @returns
     */
    function isWellKnownType(key) {
        var result = false;
        if (typeof key === "string") {
            result = key in ContentFilterExpansions;
        }
        return result;
    }
    function lookupTypeFilters(key) {
        return ContentFilterExpansions[key];
    }
    /**
     * @private
     * Convert a `ContentFilterDefinition` to a `ContentFilter`
     *
     * ContentFilter is a narrower version of ContentFilterDefinition, without
     * the union types. Using a ContentFilter makes working with the structure
     * in typescript much easier.
     *
     * @param filter
     * @returns
     */
    function convertContentDefinitionToFilter(filter) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: convertContentDefinitionToFilter will be removed. Work with IFilterGroups<\"item\"> instead");
        var result = {};
        if (filter.term) {
            result.term = filter.term;
        }
        var dateProps = ["created", "modified"];
        // Some properties should not get converted to MatchOptions
        var specialProps = __spreadArrays(["filterType", "subFilters", "term"], dateProps);
        // Do the conversion
        Object.entries(filter).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (!specialProps.includes(key)) {
                result[key] = valueToMatchOptions(value);
            }
        });
        // Special Cases
        // subFilters; Array of ContentFilterDefinitions
        if (filter.subFilters && Array.isArray(filter.subFilters)) {
            // downcast - would be nice to skip this or use some other constuct
            var sf = filter.subFilters;
            result.subFilters = sf.map(convertContentDefinitionToFilter);
        }
        // Dates; Ensure they are all DateRange<number>
        dateProps.forEach(function (fld) {
            if (filter[fld]) {
                if (filter[fld].type === "relative-date") {
                    result[fld] = relativeDateToDateRange(filter[fld]);
                }
                else {
                    result[fld] = cloneObject$1(filter[fld]);
                }
            }
        });
        return result;
    }
    /**
     * @private
     * Serialize a `ContentFilter` into an `ISearchOptions` for use with `searchItems`
     * @param filter
     * @returns
     */
    function serializeContentFilterForPortal(filter) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: serializeContentFilterForPortal will be removed. Work with IFilterGroups<\"item\"> and hubSearch() instead");
        var searchOptions = convertContentFilterToSearchOptions(filter);
        if (filter.subFilters) {
            var subFilterOptions = filter.subFilters.reduce(function (acc, entry) {
                // Next guard is present b/c this can be used from javascript
                // but our tests are written in typescript which prevents us
                // from hitting the else
                /* istanbul ignore else */
                if (typeof entry === "object") {
                    acc = mergeSearchOptions$1(acc, convertContentFilterToSearchOptions(entry), "OR");
                }
                return acc;
            }, { q: "", filter: "" });
            // merge with searchOptions using AND
            searchOptions = mergeSearchOptions$1(searchOptions, subFilterOptions, "AND");
        }
        // term is always last, and pre-pended on searchOptions.q
        if (filter.term) {
            searchOptions.q = (filter.term + " " + searchOptions.q).trim();
        }
        return searchOptions;
    }
    /**
     * @private
     * Convert a ContentFilter to a SearchOptions
     *
     * @param filter
     * @returns
     */
    function convertContentFilterToSearchOptions(filter) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: convertContentFilterToSearchOptions will be removed. Work with IFilterGroups<\"item\"> and hubSearch() instead");
        var result = {
            q: "",
            filter: "",
        };
        var dateProps = ["created", "modified"];
        var specialProps = __spreadArrays(["filterType", "subFilters", "term"], dateProps);
        Object.entries(filter).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            // MatchOptions may go into either q or filter
            if (!specialProps.includes(key)) {
                result = mergeSearchOptions$1(result, serializeMatchOptions$1(key, value), "AND");
            }
            // Dates only go into q
            if (dateProps.includes(key)) {
                result = mergeSearchOptions$1(result, serializeDateRange$1(key, value), "AND");
            }
        });
        return result;
    }

    // TODO: Remove with _searchContent
    /**
     *
     * Merge `Filter<"group">` objects
     *
     * Useful in components which may get partial filters from a variety of
     * sub-components, which are then combined into a single filter prior
     * to executing the search.
     * @param filters
     * @returns
     */
    function mergeGroupFilters(filters) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: mergeGroupFilters will be removed. Work with IFilterGroups<\"group\"> and hubSearch() instead");
        // expand all the filters so all prop types are consistent
        var expanded = filters.map(expandGroupFilter);
        // now we can merge based on fields
        var dateFields = ["created", "modified"];
        var specialFields = __spreadArrays(["filterType", "term"], dateFields);
        // acc is initialized as Filter<group> but also needs it
        // in the function signature... for reasons?!
        var result = expanded.reduce(function (acc, entry) {
            // process fields
            Object.entries(entry).forEach(function (_a) {
                // Note: getProp/setProp are used to get around
                // typescript issues with string indexing
                var key = _a[0], value = _a[1];
                if (acc.hasOwnProperty(key)) {
                    var existingValue = getProp(acc, key);
                    // if the key is not to a special field
                    if (!specialFields.includes(key)) {
                        // treat as an IMatchOptions
                        setProp(key, mergeMatchOptions(existingValue, value), acc);
                    }
                    else if (dateFields.includes(key)) {
                        // treat as IDateRange
                        setProp(key, mergeDateRange(existingValue, value), acc);
                    }
                    else if (key === "term") {
                        // append terms
                        acc[key] = acc[key] + " " + value;
                    }
                }
                else {
                    // Acc does not have an entry for this yet
                    // so just clone it
                    setProp(key, cloneObject$1(value), acc);
                }
            });
            return acc;
        }, {
            filterType: "group",
        });
        return result;
    }
    /**
     * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
     *
     * Filter's can express their intent in a very terse form, but to ensure consistent structures
     * we expand them into their more verbose form.
     *
     * i.e. `title: "Water"` expands into `title: { any: ["Water"]}`
     *
     * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
     * - RelativeDate fields are converted to DateRange<number>
     *
     * @param filter
     * @returns
     */
    function expandGroupFilter(filter) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: expandGroupFilters will be removed. Work with IFilterGroups<\"group\"> and hubSearch() instead");
        var result = {};
        var dateProps = ["created", "modified"];
        // Some properties should not get converted to MatchOptions
        var specialProps = __spreadArrays(["term", "searchUserAccess"], dateProps);
        // Do the conversion
        Object.entries(filter).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            // handle Matchish fields
            if (!specialProps.includes(key)) {
                // setProp side-steps typescript complaining
                setProp(key, valueToMatchOptions(value), result);
            }
            // Handle date fields
            if (dateProps.includes(key)) {
                var dateFieldValue = cloneObject$1(getProp(filter, key));
                if (getProp(filter, key + ".type") === "relative-date") {
                    setProp(key, relativeDateToDateRange(dateFieldValue), result);
                }
                else {
                    setProp(key, dateFieldValue, result);
                }
            }
        });
        // searchUserAccess is boolean, so we check if the prop exists
        // vs checking if the value is truthy
        if (filter.hasOwnProperty("searchUserAccess")) {
            result.searchUserAccess = filter.searchUserAccess;
        }
        if (filter.term) {
            result.term = filter.term;
        }
        return result;
    }
    /**
     * @private
     * Serialize an `IGroupFilterDefinition` into an `ISearchOptions` for use
     * with `searchGroups`
     * @param filter
     * @returns
     */
    function serializeGroupFilterForPortal(filter) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: serializeGroupFilterForPortal will be removed. Work with IFilterGroups<\"group\"> and hubSearch() instead");
        var result = {
            q: "",
            filter: "",
        };
        var dateProps = ["created", "modified"];
        var specialProps = __spreadArrays(["term", "searchUserAccess", "filterType"], dateProps);
        Object.entries(filter).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            // MatchOptions fields
            if (!specialProps.includes(key)) {
                result = mergeSearchOptions$1(result, serializeMatchOptions$1(key, value), "AND");
            }
            // Dates only go into q
            if (dateProps.includes(key)) {
                result = mergeSearchOptions$1(result, serializeDateRange$1(key, value), "AND");
            }
        });
        // searchUserAccess is also a top-level property
        if (filter.hasOwnProperty("searchUserAccess")) {
            result.searchUserAccess = filter.searchUserAccess;
        }
        // add the term
        if (filter.term) {
            result.q = (filter.term + " " + result.q).trim();
        }
        return result;
    }

    // TODO: Remove with _searchContent
    /**
     *
     * Merge `Filter<"user">` objects
     *
     * Useful in components which may get partial filters from a variety of
     * sub-components, which are then combined into a single filter prior
     * to executing the search.
     * @param filters
     * @returns
     */
    function mergeUserFilters(filters) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: mergeUserFilters will be removed. Work with IFilterGroups<\"user\"> and hubSearch() instead");
        // expand all the filters so all prop types are consistent
        var expanded = filters.map(expandUserFilter);
        // now we can merge based on fields
        var dateFields = ["created", "modified", "lastlogin"];
        var specialFields = __spreadArrays(["disabled", "term", "filterType"], dateFields);
        // acc is initialized as Filter<group> but also needs it
        // in the function signature... for reasons?!
        var result = expanded.reduce(function (acc, entry) {
            // process fields
            Object.entries(entry).forEach(function (_a) {
                // Note: getProp/setProp are used to get around
                // typescript issues with string indexing
                var key = _a[0], value = _a[1];
                if (acc.hasOwnProperty(key)) {
                    var existingValue = getProp(acc, key);
                    // if the key is not to a special field
                    if (!specialFields.includes(key)) {
                        // treat as an IMatchOptions
                        setProp(key, mergeMatchOptions(existingValue, value), acc);
                    }
                    else if (dateFields.includes(key)) {
                        // treat as IDateRange
                        setProp(key, mergeDateRange(existingValue, value), acc);
                    }
                    else if (key === "term") {
                        // append terms
                        acc[key] = acc[key] + " " + value;
                    }
                }
                else {
                    // Acc does not have an entry for this yet
                    // so just clone it
                    setProp(key, cloneObject$1(value), acc);
                }
            });
            return acc;
        }, {
            filterType: "user",
        });
        return result;
    }
    /**
     * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
     *
     * Filter's can express their intent in a very terse form, but to ensure consistent structures
     * we expand them into their more verbose form.
     *
     * i.e. `firstname: "John"` expands into `firstname: { any: ["John"]}`
     *
     * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
     * - RelativeDate fields are converted to DateRange<number>
     * @param filter
     * @returns
     */
    function expandUserFilter(filter) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: expandUserFilter will be removed. Work with IFilterGroups<\"user\"> and hubSearch() instead");
        var result = {};
        var dateProps = ["created", "modified", "lastlogin"];
        var specialProps = __spreadArrays(["disabled", "term"], dateProps);
        Object.entries(filter).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            // handle Matchish fields
            if (!specialProps.includes(key)) {
                // setProp side-steps typescript complaining
                setProp(key, valueToMatchOptions(value), result);
            }
            // Handle date fields
            if (dateProps.includes(key)) {
                var dateFieldValue = cloneObject$1(getProp(filter, key));
                if (getProp(filter, key + ".type") === "relative-date") {
                    setProp(key, relativeDateToDateRange(dateFieldValue), result);
                }
                else {
                    setProp(key, dateFieldValue, result);
                }
            }
        });
        // disabled is boolean, so we check if the prop exists
        // vs checking if the value is truthy
        if (filter.hasOwnProperty("disabled")) {
            result.disabled = filter.disabled;
        }
        if (filter.term) {
            result.term = filter.term;
        }
        return result;
    }
    /**
     * @private
     * Serialize an `IUserFilterDefinition` into an `ISearchOptions` for use
     * with `searchUsers`
     * @param filter
     * @returns
     */
    function serializeUserFilterForPortal(filter) {
        // TODO: Remove with _searchContent
        Logger.warn("DEPRECATION: serializeUserFilterForPortal will be removed. Work with IFilterGroups<\"user\"> and hubSearch() instead");
        var result = {
            q: "",
            filter: "",
        };
        var dateProps = ["created", "modified", "lastlogin"];
        var specialProps = __spreadArrays(["term", "filterType"], dateProps);
        Object.entries(filter).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            // MatchOptions fields
            if (!specialProps.includes(key)) {
                result = mergeSearchOptions$1(result, serializeMatchOptions$1(key, value), "AND");
            }
            // Dates only go into q
            if (dateProps.includes(key)) {
                result = mergeSearchOptions$1(result, serializeDateRange$1(key, value), "AND");
            }
        });
        // disabled is also a top-level property
        if (filter.hasOwnProperty("disabled")) {
            result.disabled = filter.disabled;
        }
        // add the term
        if (filter.term) {
            // Note: this is slightly different from other types
            result.q = ("(" + filter.term + ") " + result.q).trim();
        }
        return result;
    }

    // TODO: Remove with _searchContent
    /**
     * @private
     * Search for content via the Portal or Hub API
     * @param filter
     * @param options
     */
    function _searchContent(filter, options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var expanded, api, searchPromise, so_1, props;
            return __generator(this, function (_c) {
                Logger.warn("DEPRECATION: _searchContent will be removed; switch to hubSearch(...)");
                expanded = expandContentFilter(filter);
                api = expandApi(options.api || "arcgis");
                // Portal Search
                if (api.type === "arcgis") {
                    so_1 = serializeContentFilterForPortal(expanded);
                    props = [
                        "authentication",
                        "num",
                        "sortField",
                        "sortOrder",
                        "site",
                        "start",
                    ];
                    // copy the props over
                    props.forEach(function (prop) {
                        if (options.hasOwnProperty(prop)) {
                            so_1[prop] = options[prop];
                        }
                    });
                    // If we don't have auth, ensure we have .portal
                    if (!so_1.authentication) {
                        so_1.portal = api.url + "/sharing/rest";
                    }
                    // DEPRECATION
                    if ((_a = options.aggregations) === null || _a === void 0 ? void 0 : _a.length) {
                        // tslint:disable-next-line:no-console
                        console.warn("IHubSearchOptions.aggregations is deprecated. Please use .aggFields instead.");
                        so_1.countFields = options.aggregations.join(",");
                        so_1.countSize = options.aggLimit || 10;
                    }
                    // Aggregations
                    if ((_b = options.aggFields) === null || _b === void 0 ? void 0 : _b.length) {
                        so_1.countFields = options.aggFields.join(",");
                        so_1.countSize = options.aggLimit || 10;
                    }
                    searchPromise = searchPortal$3(so_1);
                }
                else {
                    // Hub API Search
                    // TODO: Implement hub api content search
                    searchPromise = Promise.resolve({
                        total: 0,
                        results: [],
                        facets: [],
                        hasNext: false,
                        next: function () {
                            // tslint:disable-next-line
                            Promise.resolve(null);
                        },
                    });
                }
                return [2 /*return*/, searchPromise];
            });
        });
    }
    /**
     * Internal portal search, which then converts items to Content, and
     * if a Site was passed, also sets urls
     *
     * @param searchOptions
     * @param site
     * @returns
     */
    function searchPortal$3(searchOptions) {
        var _a;
        var portalUrl = ((_a = searchOptions.authentication) === null || _a === void 0 ? void 0 : _a.portal) || searchOptions.portal;
        var token;
        if (searchOptions.authentication) {
            var us = searchOptions.authentication;
            token = us.token;
        }
        var thumbnailify = function (content) {
            content.thumbnailUrl = getItemThumbnailUrl(content, portalUrl, token);
            return content;
        };
        return searchItems(searchOptions).then(function (resp) {
            var hasNext = resp.nextStart > -1;
            // convert items to IHubContent's
            var content = resp.results.map(itemToContent);
            // if we have a site, add those urls
            if (searchOptions.site) {
                content = content.map(function (entry) {
                    return setContentSiteUrls(entry, searchOptions.site);
                });
            }
            // add thumbnailUrl
            content = content.map(thumbnailify);
            // convert aggregations into facets
            var facets = convertPortalResponseToFacets(resp);
            return {
                total: resp.total,
                results: content,
                facets: facets,
                hasNext: hasNext,
                next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal$3),
            };
        });
    }

    // TODO: Remove with _searchContent
    /**
     * @private
     * Search Groups using Filter<"group">
     *
     * Currently just returns ISearchResult<IGroup>
     * @param filter
     * @param options
     * @returns
     */
    function _searchGroups(filter, options) {
        return __awaiter(this, void 0, void 0, function () {
            var expanded, api, so_1, props;
            return __generator(this, function (_a) {
                Logger.warn("DEPRECATION: _searchGroups will be removed; switch to hubSearch(...)");
                expanded = expandGroupFilter(filter);
                api = expandApi(options.api || "arcgis");
                if (api.type === "arcgis") {
                    so_1 = serializeGroupFilterForPortal(expanded);
                    props = [
                        "authentication",
                        "num",
                        "sortField",
                        "sortOrder",
                        "site",
                        "start",
                    ];
                    // copy the props over
                    props.forEach(function (prop) {
                        if (options.hasOwnProperty(prop)) {
                            so_1[prop] = options[prop];
                        }
                    });
                    // If we don't have auth, ensure we have .portal
                    if (!so_1.authentication) {
                        so_1.portal = api.url + "/sharing/rest";
                    }
                    return [2 /*return*/, searchPortalGroups(so_1)];
                }
                else {
                    throw new Error("_searchGroups is not implemented for non-arcgis apis");
                }
            });
        });
    }
    /**
     * Internal function that searches for groups using the ArcGIS Portal API
     * @param searchOptions
     * @returns
     */
    function searchPortalGroups(searchOptions) {
        var _a;
        var teamLinkify = function (group) {
            group.siteTeamUrl = searchOptions.site.item.url + "/teams/" + group.id + "/about";
            return group;
        };
        var portalUrl = ((_a = searchOptions.authentication) === null || _a === void 0 ? void 0 : _a.portal) || searchOptions.portal;
        var token;
        if (searchOptions.authentication) {
            var us = searchOptions.authentication;
            token = us.token;
        }
        var thumbnailify = function (group) {
            group.thumbnailUrl = getGroupThumbnailUrl(portalUrl, group, token);
            return group;
        };
        // execute the search
        return searchGroups(searchOptions).then(function (response) {
            var _a, _b;
            var hasNext = response.nextStart > -1;
            // upgrade thumbnail url
            var results = response.results.map(thumbnailify);
            // generate the site team url if site url is provided
            if ((_b = (_a = searchOptions.site) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.url) {
                results = response.results.map(teamLinkify);
            }
            return {
                hasNext: hasNext,
                total: response.total,
                results: results,
                next: getNextFunction(searchOptions, response.nextStart, response.total, searchPortalGroups),
            };
        });
    }

    // TODO: Remove with _searchContent
    /**
     * @private
     * Search for Users via the Portal API.
     *
     * **Note** Authentication is required
     *
     * Another trivial comment to force a release
     *
     * Note: in the future, there may be options to search via
     * a Hub specific API
     * @param filter
     * @param options
     * @returns
     */
    function _searchUsers(filter, options) {
        return __awaiter(this, void 0, void 0, function () {
            var expanded, api, searchOptions_1, props;
            return __generator(this, function (_a) {
                Logger.warn("DEPRECATION: _searchUsers will be removed; switch to hubSearch(...)");
                // JS Clients may not pass in authentication
                if (!options.authentication) {
                    throw new Error("Authentication required to search for users.");
                }
                expanded = expandUserFilter(filter);
                api = expandApi(options.api || "arcgis");
                if (api.type === "arcgis") {
                    searchOptions_1 = serializeUserFilterForPortal(expanded);
                    props = [
                        "authentication",
                        "num",
                        "sortField",
                        "sortOrder",
                        "site",
                        "start",
                    ];
                    // copy the props over
                    props.forEach(function (prop) {
                        if (options.hasOwnProperty(prop)) {
                            searchOptions_1[prop] = options[prop];
                        }
                    });
                    return [2 /*return*/, searchPortalUsers(searchOptions_1)];
                }
                else {
                    throw new Error("_searchUsers is not implemented for non-arcgis apis");
                }
            });
        });
    }
    /**
     * Internal function that executes the user search along with
     * some simple enrichments
     * @param searchOptions
     * @returns
     */
    function searchPortalUsers(searchOptions) {
        var portalUrl = searchOptions.authentication.portal;
        var token = searchOptions.authentication.token;
        // Partially applied functions for mapping over the results
        var userLinkify = function (user) {
            user.profileUrl = searchOptions.site.item.url + "/people/" + user.username + "/profile";
            return user;
        };
        var thumbnailify = function (user) {
            if (user.thumbnail) {
                user.thumbnailUrl = getUserThumbnailUrl(portalUrl, user, token);
            }
            return user;
        };
        return searchUsers(searchOptions).then(function (response) {
            var _a, _b;
            var hasNext = response.nextStart > -1;
            // upgrade thumbnail url
            var results = response.results.map(thumbnailify);
            // generate the site team url if site url is provided
            if ((_b = (_a = searchOptions.site) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.url) {
                results = response.results.map(userLinkify);
            }
            return {
                hasNext: hasNext,
                total: response.total,
                results: results,
                next: getNextFunction(searchOptions, response.nextStart, response.total, searchPortalUsers),
            };
        });
    }

    /**
     * @private
     * Apply the sortState to SortOptions
     *
     * @param sortOptions
     * @param sortState
     * @returns
     */
    function applySortState(sortOptions, sortState) {
        var updated = cloneObject$1(sortOptions);
        if (sortState) {
            var _a = sortState.split("|"), label = _a[0], attribute = _a[1], order = _a[2];
            updated.label = label;
            updated.attribute = attribute;
            updated.order = order;
        }
        return updated;
    }
    /**
     * @private
     * Apply FacetState to a Facet
     * @param facet
     * @param state
     * @returns
     */
    function applyFacetState(facet, state) {
        var updated = cloneObject$1(facet);
        switch (facet.display) {
            case "single-select":
                updated = applySingleSelectFacetState(facet, state);
                break;
            case "multi-select":
                updated = applyMultiSelectFacetState(facet, state);
                break;
        }
        return updated;
    }
    /**
     * @private
     * Apply the Facet State onto a single-select facet
     *
     * Intentionally mutates the facet.
     * @param facet
     * @param state
     * @returns
     */
    function applySingleSelectFacetState(facet, state) {
        var updated = cloneObject$1(facet);
        updated.options = updated.options.map(function (o) {
            o.selected = o.key === state[facet.key];
            return o;
        });
        return updated;
    }
    /**
     * @private
     * Serialize single-select facet into IFacetState
     * @param facet
     * @returns
     */
    function serializeSingleSelectFacetState(facet) {
        var state = {};
        var selected = facet.options.find(function (o) { return o.selected; });
        if (selected) {
            state[facet.key] = selected.key;
        }
        else {
            state[facet.key] = null;
        }
        return state;
    }
    /**
     * @private
     * Apply the Facet State onto a multi-select Facet
     *
     * Intentionally mutates the facet.
     * @param facet
     * @param state
     * @returns
     */
    function applyMultiSelectFacetState(facet, state) {
        var _a;
        var updated = cloneObject$1(facet);
        var selectedKeys = ((_a = state[facet.key]) === null || _a === void 0 ? void 0 : _a.split(",")) || [];
        updated.options = updated.options.map(function (o) {
            o.selected = selectedKeys.includes(o.key);
            return o;
        });
        return updated;
    }
    /**
     * @private
     * Serialize multi-select facet into IFacetState
     * @param facet
     * @returns
     */
    function serializeMultiSelectFacetState(facet) {
        var state = {};
        var selected = facet.options.filter(function (o) { return o.selected; });
        var value = selected.map(function (o) { return o.key; }).join(",");
        if (value.length) {
            state[facet.key] = value;
        }
        else {
            state[facet.key] = null;
        }
        return state;
    }
    /**
     * @private
     * Serialize the state of the SortOption into a key/value pair
     *
     * Called from the Sort component
     * @param sort
     * @returns
     */
    function serializeSortState(sort) {
        return sort.label + "|" + sort.attribute + "|" + sort.order;
    }
    /**
     * @private
     * Serialize the state of a facet into a key/value pair
     *
     * Called from the various facet components
     * @param facet
     * @returns
     */
    function serializeFacetState(facet) {
        var state = {};
        switch (facet.display) {
            case "single-select":
                state = serializeSingleSelectFacetState(facet);
                break;
            case "multi-select":
                state = serializeMultiSelectFacetState(facet);
                break;
        }
        return state;
    }

    /**
     * Apply ICollectionState to an ICollection
     *
     * Typically used in a Gallery or Catalog component to
     * set the inital state, based on values deserialized
     * from a query string
     * @param collection
     * @param state
     * @returns
     */
    function applyCollectionState(collection, state) {
        var updated = cloneObject$1(collection);
        // Apply default query
        if (state.query) {
            updated.defaultQuery = state.query;
        }
        // Apply Sort State
        updated.sortOption = applySortState(updated.sortOption, state.sort);
        // Look for state props for the facets and apply them
        updated.facets = updated.facets.map(function (facet) {
            // see if there is a key for this facet on the state
            if (Object.keys(state).includes(facet.key)) {
                var facetState = {};
                facetState[facet.key] = state[facet.key];
                return applyFacetState(facet, facetState);
            }
            else {
                // Ensure all options are not selected
                // because they were not included in the state
                facet.options.forEach(function (opt) {
                    opt.selected = false;
                });
                return facet;
            }
        });
        //
        return updated;
    }
    /**
     * Serialize the current state of a collection into a hash that
     * can be converted into a query string
     * @param collection
     * @returns
     */
    function serializeCollectionState(collection) {
        var state = {};
        if (collection.defaultQuery) {
            state.query = collection.defaultQuery;
        }
        if (collection.sortOption) {
            state.sort = serializeSortState(collection.sortOption);
        }
        var facetState = (collection.facets || []).reduce(function (s, facet) {
            return __assign(__assign({}, s), serializeFacetState(facet));
        }, {});
        return __assign(__assign({}, state), facetState);
    }

    var CATALOG_SCHEMA_VERSION = 1.0;
    /**
     * Apply schema upgrades to Catalog objects
     * @param catalog
     * @returns
     */
    function upgradeCatalogSchema(catalog) {
        var clone = cloneObject$1(catalog);
        if (getProp(clone, "schemaVersion") === CATALOG_SCHEMA_VERSION) {
            return clone;
        }
        else {
            // apply migrations in order
            clone = applyCatalogSchema(clone);
            return clone;
        }
    }
    /**
     * Apply the Catalog schema to the original, unversioned
     * site catalog objects
     * @param original
     * @returns
     */
    function applyCatalogSchema(original) {
        if (getProp(original, "schemaVersion") > 1.0) {
            return original;
        }
        else {
            var catalog = {
                schemaVersion: 1,
                title: "Default Catalog",
                scopes: {
                    item: {
                        targetEntity: "item",
                        filters: [],
                    },
                },
                collections: [],
            };
            var rawGroups = getProp(original, "groups");
            var groups = [];
            if (Array.isArray(rawGroups) && rawGroups.length) {
                groups = rawGroups;
            }
            else if (typeof rawGroups === "string") {
                groups = [rawGroups];
            }
            if (groups.length) {
                catalog.scopes.item.filters.push({
                    predicates: [{ group: groups }],
                });
            }
            return catalog;
        }
    }
    /**
     * DEPRECATED: Use upgradeCatalogSchema(...)
     * @param original
     */
    /* istanbul ignore next */
    function convertCatalog(original) {
        return upgradeCatalogSchema(original);
    }

    /**
     * Determine if a Filter is "empty"
     * @param filter
     * @returns
     */
    function isEmptyFilter(filter) {
        // if it has one property, filterType, it's empty
        return (Object.keys(filter).length === 1 && filter.hasOwnProperty("filterType"));
    }
    /**
     * Determine if a filterGroup is "empty"
     * @param filterGroup
     * @returns
     */
    function isEmptyFilterGroup(filterGroup) {
        // if filters array is empty
        if (filterGroup.filters.length === 0) {
            return true;
        }
        else {
            // if all filters are empty
            var result = filterGroup.filters.reduce(function (acc, entry) {
                if (acc) {
                    acc = isEmptyFilter(entry);
                }
                return acc;
            }, true);
            return result;
        }
    }

    /**
     * @private
     * Expand a predicate
     * @param predicate
     * @returns
     */
    function expandPredicate(predicate) {
        var result = {};
        var dateProps = ["created", "modified", "lastlogin"];
        var copyProps = [
            "filterType",
            "term",
            "searchUserAccess",
            "isopendata",
            "searchUserName",
        ];
        var nonMatchOptionsFields = __spreadArrays(dateProps, copyProps);
        // Do the conversion
        Object.entries(predicate).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            // Handle MatchOptions fields
            if (!nonMatchOptionsFields.includes(key)) {
                setProp(key, valueToMatchOptions(value), result);
            }
            // Handle Date fields
            if (dateProps.includes(key)) {
                var dateFieldValue = cloneObject$1(getProp(predicate, key));
                if (getProp(predicate, key + ".type") === "relative-date") {
                    setProp(key, relativeDateToDateRange(dateFieldValue), result);
                }
                else {
                    setProp(key, dateFieldValue, result);
                }
            }
            // Handle fields that are just copied forward
            if (copyProps.includes(key) && predicate.hasOwnProperty(key)) {
                setProp(key, value, result);
            }
        });
        return result;
    }

    /**
     * Serialize IQuery into ISearchOptions for ArcGIS Portal
     * @param query
     * @returns
     */
    function serializeQueryForPortal(query) {
        var filterSearchOptions = query.filters.map(serializeFilter);
        // remove any empty entries
        var nonEmptyOptions = filterSearchOptions.filter(removeEmptyEntries);
        var result = mergeSearchOptions(nonEmptyOptions, "AND");
        return result;
    }
    /**
     * Predicate to remove things from array
     * @param e
     * @returns
     */
    function removeEmptyEntries(e) {
        return !(typeof e === "undefined" || e === null || e === "");
    }
    function mergeSearchOptions(options, operation) {
        var result = options.reduce(function (acc, entry) {
            // walk the props
            Object.entries(entry).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                // if prop exists and is not empty string
                if (acc[key] && value !== "") {
                    // combine via operation
                    acc[key] = acc[key] + " " + operation + " " + value;
                }
                else {
                    // just copy the value if it's not empty string
                    if (value !== "") {
                        acc[key] = value;
                    }
                }
            });
            return acc;
        }, { q: "" });
        return result;
    }
    /**
     * Serialize the filters in a FitlerGroup into a Portal Query
     * @param filter
     * @returns
     */
    function serializeFilter(filter) {
        var operation = filter.operation || "AND";
        debugger;
        var predicates = filter.predicates.map(expandPredicate);
        var predicateSearchOptions = predicates
            .map(serializePredicate)
            .filter(function (e) { return e !== undefined && e !== null; });
        // combine these searchOptions
        var searchOptions = mergeSearchOptions(predicateSearchOptions, operation);
        // wrap in parens if we have more than one predicate
        if (predicates.length > 1) {
            searchOptions.q = "(" + searchOptions.q + ")";
        }
        return searchOptions;
    }
    /**
     * Serialize a Filter into a Portal Query
     * @param predicate
     * @returns
     */
    function serializePredicate(predicate) {
        var dateProps = ["created", "modified"];
        var boolProps = ["isopendata"];
        var passThroughProps = ["searchUserAccess", "searchUserName"];
        var specialProps = __spreadArrays([
            "filterType",
            "term"
        ], dateProps, boolProps, passThroughProps);
        var portalAllowList = [
            "access",
            "categories",
            "capabilities",
            "created",
            "description",
            "disabled",
            "email",
            "emailstatus",
            "firstname",
            "fullname",
            "group",
            "id",
            "isInvitationOnly",
            "isopendata",
            "joined",
            "lastlogin",
            "lastname",
            "memberType",
            "modified",
            "name",
            "orgid",
            "orgIds",
            "owner",
            "provider",
            "role",
            "searchUserAccess",
            "searchUserName",
            "snippet",
            "tags",
            "term",
            "title",
            "type",
            "typekeywords",
            "userlicensetype",
            "username",
        ];
        // TODO: Look at using reduce vs .map and remove the `.filter`
        var opts = Object.entries(predicate)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            // When serializing for portal we limit predicate properties to
            // a list of known properties that the portal api accepts. This will
            // not attempt to ensure the properties are used in the correct combinations
            if (portalAllowList.includes(key)) {
                var so = { q: "" };
                if (!specialProps.includes(key) && key !== "term") {
                    so.q = serializeMatchOptions(key, value);
                }
                if (dateProps.includes(key)) {
                    so.q = serializeDateRange(key, value);
                }
                if (boolProps.includes(key)) {
                    so.q = key + ":" + value;
                }
                if (passThroughProps.includes(key)) {
                    so[key] = value;
                }
                if (key === "term") {
                    so.q = value;
                }
                return so;
            }
        })
            .filter(removeEmptyEntries);
        // merge up all the searchOptions
        if (opts.length) {
            var searchOptions = mergeSearchOptions(opts, "AND");
            // if (qCount > 1) {
            searchOptions.q = "(" + searchOptions.q + ")";
            // }
            return searchOptions;
        }
        else {
            return null;
        }
    }
    /**
     * Serialize MatchOptions into portal syntax
     * @param key
     * @param value
     * @returns
     */
    function serializeMatchOptions(key, value) {
        var result = "";
        if (value.any) {
            result = "" + serializeStringOrArray("OR", key, value.any);
        }
        if (value.all) {
            result =
                (result ? result + " AND " : "") +
                    ("" + serializeStringOrArray("AND", key, value.all));
        }
        if (value.not) {
            // negate the entries if they are not
            result =
                (result ? result + " AND " : "") +
                    ("" + serializeStringOrArray("OR", "-" + key, value.not));
        }
        return result;
    }
    /**
     * Serialize a date-range into Portal syntax
     * @param key
     * @param range
     * @returns
     */
    function serializeDateRange(key, range) {
        return key + ":[" + range.from + " TO " + range.to + "]";
    }
    /**
     * Serialize a `string` or `string[]` into a string
     * @param join
     * @param key
     * @param value
     * @returns
     */
    function serializeStringOrArray(join, key, value) {
        var q = "";
        if (Array.isArray(value)) {
            q = key + ":\"" + value.join("\" " + join + " " + key + ":\"") + "\"";
            if (value.length > 1) {
                q = "(" + q + ")";
            }
        }
        else {
            q = key + ":\"" + value + "\"";
        }
        return q;
    }

    /**
     * Generic Hub Error with an Error stack as well
     * as an optional serialized OperationStack.
     *
     * Also accepts a `rootCause` Error object
     */
    var HubError = /** @class */ (function (_super) {
        __extends(HubError, _super);
        /**
         * Creates an instance of HubError.
         * @param {string} operation
         * @param {string} [message]
         * @param {Error} [rootCause]
         * @memberof HubError
         */
        function HubError(operation, message, rootCause) {
            var _this = this;
            message = message || "UNKNOWN_ERROR";
            // if the rootCause has a .rootCause, use that so we don't deeply nest
            rootCause = getWithDefault$1(rootCause, "rootCause", rootCause);
            /* Skip coverage on super(...) as per:
               https://github.com/Microsoft/TypeScript/issues/13029
               https://github.com/SitePen/remap-istanbul/issues/106
            */
            /* istanbul ignore next */
            _this = _super.call(this, operation, message, rootCause) || this;
            _this.name = "HubError";
            // if the original error has a stack use it, otherwise create a new
            // stack. Note: a new Stack will make it look like the error origninated
            // in the HubError constructor. This is only an issue in tests but
            // it can be confusing to debug
            _this.stack = getWithDefault$1(rootCause, "stack", new Error().stack);
            return _this;
        }
        return HubError;
    }(OperationError$1));
    var HubError$1 = HubError;

    /**
     * @private
     * Convert a portal aggregation structure into the HubAggregations structure
     * @param searchResults
     * @returns
     */
    function convertPortalAggregations(searchResults) {
        var _a;
        if ((_a = searchResults.aggregations) === null || _a === void 0 ? void 0 : _a.counts) {
            return searchResults.aggregations.counts.map(function (entry) {
                return {
                    mode: "terms",
                    field: entry.fieldName,
                    values: entry.fieldValues,
                };
            });
        }
        else {
            return [];
        }
    }

    /**
     * @private
     * Execute a search and convert to a specific entity
     * @param query
     * @param convertFn
     * @param options
     * @returns
     */
    function searchEntities(query, convertFn, options) {
        var _a;
        // serialize query to searchOptions
        var searchOptions = serializeQueryForPortal(query);
        // Aggregations
        if ((_a = options.aggFields) === null || _a === void 0 ? void 0 : _a.length) {
            searchOptions.countFields = options.aggFields.join(",");
            searchOptions.countSize = options.aggLimit || 10;
        }
        // properties to copy from IHubSearchOptions to the ISearchOptions
        var props = [
            "num",
            "sortField",
            "sortOrder",
            "start",
            "requestOptions",
        ];
        // Include "start" here
        // copy the props over
        props.forEach(function (prop) {
            if (options.hasOwnProperty(prop)) {
                searchOptions[prop] = options[prop];
            }
        });
        // create the entitySearchFn
        var searchFn = createEntitySearchFn(convertFn);
        // Add ArcGIS API
        if (options.api && !options.authentication) {
            var expandedApi = expandApi(options.api);
            searchOptions.portal = expandedApi.url;
        }
        return searchFn(searchOptions);
    }
    /**
     * @private
     * @param convertFn
     * @returns
     */
    function createEntitySearchFn(convertFn) {
        // Return a function that does the search, with a closure over the
        // conversion function. Naming this function is important as it's
        // referenced in the `next` section below
        return function executeSearch(searchOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var response, entities, aggregations;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, searchItems(searchOptions)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, Promise.all(response.results.map(function (itm) {
                                    return convertFn(itm, searchOptions);
                                }))];
                        case 2:
                            entities = _a.sent();
                            aggregations = convertPortalAggregations(response);
                            return [2 /*return*/, {
                                    total: response.total,
                                    results: entities,
                                    aggregations: aggregations,
                                    hasNext: response.nextStart > -1,
                                    next: getNextFunction(searchOptions, response.nextStart, response.total, executeSearch),
                                }];
                    }
                });
            });
        };
    }

    /**
     * Fetch Page specific Enrichments
     * @param item
     * @param include
     * @param requestOptions
     * @returns
     */
    function enrichPageSearchResult(item, include, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var result, DEFAULTS, specs, enrichments, enriched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            access: item.access,
                            id: item.id,
                            type: item.type,
                            name: item.title,
                            owner: item.owner,
                            summary: item.snippet || item.description,
                            createdDate: new Date(item.created),
                            createdDateSource: "item.created",
                            updatedDate: new Date(item.modified),
                            updatedDateSource: "item.modified",
                            family: getFamily(item.type),
                            links: {
                                self: "not-implemented",
                                siteRelative: "not-implemented",
                                thumbnail: "not-implemented",
                            },
                        };
                        DEFAULTS = [];
                        // merge includes
                        include = __spreadArrays(DEFAULTS, include).filter(unique);
                        specs = include.map(parseInclude);
                        enrichments = mapBy("enrichment", specs).filter(unique);
                        enriched = {};
                        if (!enrichments.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetchItemEnrichments(item, enrichments, requestOptions)];
                    case 1:
                        // TODO: Look into caching for the requests in fetchItemEnrichments
                        enriched = _a.sent();
                        _a.label = 2;
                    case 2:
                        // map the enriched props onto the result
                        specs.forEach(function (spec) {
                            result[spec.prop] = getProp(enriched, spec.path);
                        });
                        // Handle Links
                        result.links.thumbnail = getItemThumbnailUrl(item, requestOptions);
                        result.links.self = getItemHomeUrl(result.id, requestOptions);
                        result.links.siteRelative = getHubRelativeUrl(result.type, result.id, item.typeKeywords);
                        return [2 /*return*/, result];
                }
            });
        });
    }

    /**
     * Given a model, return a serialized clone that can be sent to
     * the items api
     * @param {Object} model Item model {item:{}, data:{}}
     */
    function serializeModel(model) {
        var serialized = cloneObject$1(model.item);
        serialized.text = JSON.stringify(model.data);
        return serialized;
    }

    /**
     * Gets the full item/data model for an item id
     * @param {string} id
     * @param {Object} requestOptions
     */
    function getModel(id, requestOptions) {
        return Promise.all([
            getItem(id, requestOptions),
            getItemData(id, requestOptions),
        ]).then(function (result) {
            // shape this into a model
            return {
                item: result[0],
                data: result[1],
            };
        });
    }
    /**
     * Get a model by it's slug
     *
     * This uses the [Filter](https://developers.arcgis.com/rest/users-groups-and-items/search-reference.htm) option of the
     * to search for an item that has a typekeyword of `slug|{slug-value}`
     *
     * This is useful for applications that want to use human-readable urls instead
     * of using item ids.
     *
     * @param slug
     * @param requestOptions
     * @returns
     */
    function getModelBySlug(slug, requestOptions) {
        return getItemBySlug(slug, requestOptions)
            .then(function (item) {
            var prms = [Promise.resolve(item)];
            if (item) {
                prms.push(getItemData(item.id, requestOptions));
            }
            else {
                prms.push(Promise.resolve(null));
            }
            return Promise.all(prms);
        })
            .then(function (result) {
            if (result[0]) {
                return {
                    item: result[0],
                    data: result[1],
                };
            }
            else {
                return null;
            }
        });
    }
    /**
     * Create an item to back and IModel.
     *
     * @param {IModel}
     * @param {IRequestOptions} requestOptions
     * @returns {Promise<IModel>}
     */
    function createModel(model, requestOptions) {
        var clone = cloneObject$1(model);
        var item = cloneObject$1(model.item);
        item.data = cloneObject$1(model.data);
        var opts = __assign({ item: item }, requestOptions);
        return createItem(opts).then(function (response) {
            clone.item.id = response.id;
            clone.item.created = new Date().getTime();
            clone.item.modified = clone.item.created;
            return clone;
        });
    }
    /**
     * Update an IModel. Generic function that will be used across all
     * type-specific update functions
     *
     * @export
     * @param {IModel} "model" object (i.e. `{item:{...}, data:{...}}`)
     * @param {IRequestOptions} requestOptions
     * @returns {Promise<IModel>}
     */
    function updateModel(model, requestOptions) {
        var clone = cloneObject$1(model);
        var item = cloneObject$1(model.item);
        item.data = cloneObject$1(model.data);
        var opts = __assign({ item: item }, requestOptions);
        return updateItem(opts).then(function () {
            // update the modified prop
            // this won't be exact, but it will be very close
            clone.item.modified = new Date().getTime();
            return clone;
        });
    }
    /**
     * Given an Item, fetch the data json and return an IModel
     * @param item
     * @param requestOptions
     * @returns
     */
    function fetchModelFromItem(item, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getItemData(item.id, requestOptions)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                item: item,
                                data: data,
                            }];
                }
            });
        });
    }

    // TODO: work out how to unify content slug fns
    // https: github.com/Esri/hub.js/blob/master/packages/common/src/content/index.ts#L301-L348
    /**
     * Create a slug, namespaced to an org
     * Typically used to lookup items by a human readable name in urls
     *
     * @param title
     * @param orgKey
     * @returns
     */
    function constructSlug(title, orgKey) {
        return orgKey.toLowerCase() + "-" + slugify(title);
    }
    /**
     * Adds/Updates the slug typekeyword
     * Returns a new array of keywords
     * @param typeKeywords
     * @param slug
     * @returns
     */
    function setSlugKeyword(typeKeywords, slug) {
        // remove slug entry from array
        var removed = typeKeywords.filter(function (entry) {
            return !entry.startsWith("slug|");
        });
        // now add it
        removed.push("slug|" + slug);
        return removed;
    }
    /**
     * Get an item by searching for items with a typeKeyword like `slug|{slug-value}`
     *
     * For example, if you pass a slug `"snow-map"` into this function, it will
     * search for items with `slug|snow-map` in it's typeKeywords array,
     *
     * @param slug
     * @param requestOptions
     * @returns
     */
    function getItemBySlug(slug, requestOptions) {
        return findItemsBySlug({ slug: slug }, requestOptions).then(function (results) {
            if (results.length) {
                return results[0];
            }
            else {
                return null;
            }
        });
    }
    /**
     * Find items by slug typeKeywords.
     *
     * Optional exclude parameter accepts the id of an item we expect to
     * have this particular slug. This is used during update calls
     * where we don't know if the slug specifically has been updated, but we
     * don't want a false-postive from the item we are updating
     *
     * @param slug
     * @param requestOptions
     * @returns
     */
    function findItemsBySlug(slugInfo, requestOptions) {
        var opts = {
            filter: "typekeywords:\"slug|" + slugInfo.slug + "\"",
        };
        if (requestOptions.authentication) {
            opts.authentication = requestOptions.authentication;
        }
        else if (requestOptions.portal) {
            opts.portal = requestOptions.portal;
        }
        // We need to check for other items w/ a slug during
        // the update calls. For those scenarios we are interested
        // in any _other_ items which may have a specific slug
        // but not one specific item
        if (slugInfo.exclude) {
            opts.q = "NOT id:" + slugInfo.exclude;
        }
        return searchItems(opts)
            .then(function (response) {
            return response.results;
        })
            .catch(function (e) {
            throw e;
        });
    }
    /**
     * Given a slug, search for items using that slug, incrementing the slug name until
     * a unique value is found
     *
     * For example, if a slug of `"snow-map"` into this function and some item exists
     * with that slug, it would return `"snow-map-1"`.
     *
     * @param slug
     * @param requestOptions
     * @param step
     * @returns
     */
    function getUniqueSlug(slugInfo, requestOptions, step) {
        if (step === void 0) { step = 0; }
        var combinedSlug = slugInfo.slug;
        if (step) {
            combinedSlug = slugInfo.slug + "-" + step;
        }
        return findItemsBySlug({ slug: combinedSlug, exclude: slugInfo.existingId }, requestOptions)
            .then(function (results) {
            if (results.length) {
                step++;
                return getUniqueSlug(slugInfo, requestOptions, step);
            }
            else {
                return combinedSlug;
            }
        })
            .catch(function (e) {
            throw Error("Error in getUniqueSlug " + e);
        });
    }

    /**
     * Manage forward and backward property mappings to
     * streamline conversion between the Hub entities, and
     * the backing IModel
     */
    var PropertyMapper = /** @class */ (function () {
        /**
         * Pass in the mappings between the Entity and
         * it's backing structure (model or otherwise)
         * @param mappings
         */
        function PropertyMapper(mappings) {
            this.mappings = mappings;
        }
        /**
         * Map properties from a model on to the entity object.
         *
         * Used when constructing an entity can from a fetched model,
         * in which case the entity should be an empty object (`{}`).
         *
         * Can also be used to apply changes to an entity from a model,
         * in which case an existing entity can be passed in.
         * @param model
         * @param object
         * @returns
         */
        PropertyMapper.prototype.modelToObject = function (model, object) {
            return mapModelToObject(model, object, this.mappings);
        };
        /**
         * Map properties from an entity object onto a model.
         *
         * Typically the model will already exist, and this
         * method is used to transfer changes to the model
         * prior to storage.
         * @param object
         * @param model
         * @returns
         */
        PropertyMapper.prototype.objectToModel = function (object, model) {
            return mapObjectToModel(object, model, this.mappings);
        };
        return PropertyMapper;
    }());
    /**
     * Generic function to apply properties from an Object
     * (i.e. IHubProject) onto a Model that can be persisted to an Item
     * @param object
     * @param model
     * @param mappings
     * @returns
     */
    function mapObjectToModel(object, model, mappings) {
        return mapProps(object, "objectKey", model, "modelKey", mappings);
    }
    /**
     * Generic function to apply properties from a Model
     * onto an Object (i.e. IHubProject etc)
     * @param model
     * @param object
     * @param mappings
     * @returns
     */
    function mapModelToObject(model, object, mappings) {
        return mapProps(model, "modelKey", object, "objectKey", mappings);
    }
    /**
     * Internal function to map between objects
     * @param source
     * @param sourceKey
     * @param target
     * @param targetKey
     * @param mappings
     * @returns
     */
    function mapProps(source, sourceKey, target, targetKey, mappings) {
        // clone the target
        var clone = cloneObject$1(target);
        // walk the property map array
        mappings.forEach(function (entry) {
            // Verbose b/c typescript hates the use of property indexing with generics
            // i.e. entry<T>[sourceKey] make typescript angry
            var sourcePath = getProp(entry, sourceKey);
            var targetPath = getProp(entry, targetKey);
            // get the value from the source
            var sourceVal = getProp(source, sourcePath);
            // if it's not null or undefined
            if (sourceVal !== null && sourceVal !== undefined) {
                // set it
                deepSet(clone, targetPath, sourceVal);
            }
        });
        return clone;
    }

    var HUB_PROJECT_ITEM_TYPE = "Hub Project";
    /**
     * Default values of a IHubProject
     */
    var DEFAULT_PROJECT = {
        name: "No title provided",
        tags: [],
        typeKeywords: ["Hub Project"],
        status: "inactive",
    };
    /**
     * Default values for a new HubProject Model
     */
    var DEFAULT_PROJECT_MODEL = {
        item: {
            type: HUB_PROJECT_ITEM_TYPE,
            title: "No Title Provided",
            description: "No Description Provided",
            snippet: "",
            tags: [],
            typeKeywords: ["Hub Project"],
            properties: {
                slug: "",
            },
        },
        data: {
            display: "about",
            timeline: {},
            status: "inactive",
            contacts: [],
            schemaVersion: 1,
        },
    };
    /**
     * Returns an Array of IPropertyMap objects
     * We could define these directly, but since the
     * properties of IHubProject map directly to properties
     * on item or data, it's slightly less verbose to
     * generate the structure.
     * @returns
     */
    function getProjectPropertyMap() {
        var itemProps = [
            "created",
            "culture",
            "description",
            "extent",
            "id",
            "modified",
            "owner",
            "snippet",
            "tags",
            "typeKeywords",
            "url",
            "type",
        ];
        var dataProps = [
            "contacts",
            "display",
            "geometry",
            "headerImage",
            "layout",
            "location",
            "status",
        ];
        var map = [];
        itemProps.forEach(function (entry) {
            map.push({ objectKey: entry, modelKey: "item." + entry });
        });
        dataProps.forEach(function (entry) {
            map.push({ objectKey: entry, modelKey: "data." + entry });
        });
        // Deeper mappings
        map.push({
            objectKey: "slug",
            modelKey: "item.properties.slug",
        });
        map.push({
            objectKey: "orgUrlKey",
            modelKey: "item.properties.orgUrlKey",
        });
        map.push({
            objectKey: "name",
            modelKey: "item.title",
        });
        return map;
    }
    /**
     * Create a new Hub Project item
     *
     * Minimal properties are name and org
     *
     * @param project
     * @param requestOptions
     */
    function createProject(partialProject, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var project, _a, mapper, model, newProject;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        project = __assign(__assign({}, DEFAULT_PROJECT), partialProject);
                        // Create a slug from the title if one is not passed in
                        if (!project.slug) {
                            project.slug = constructSlug(project.name, project.orgUrlKey);
                        }
                        // Ensure slug is  unique
                        _a = project;
                        return [4 /*yield*/, getUniqueSlug({ slug: project.slug }, requestOptions)];
                    case 1:
                        // Ensure slug is  unique
                        _a.slug = _b.sent();
                        // add slug to keywords
                        project.typeKeywords = setSlugKeyword(project.typeKeywords, project.slug);
                        mapper = new PropertyMapper(getProjectPropertyMap());
                        model = mapper.objectToModel(project, cloneObject$1(DEFAULT_PROJECT_MODEL));
                        return [4 /*yield*/, createModel(model, requestOptions)];
                    case 2:
                        // create the item
                        model = _b.sent();
                        newProject = mapper.modelToObject(model, {});
                        // and return it
                        return [2 /*return*/, newProject];
                }
            });
        });
    }
    /**
     * Update a Hub Project
     * @param project
     * @param requestOptions
     */
    function updateProject(project, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, model, mapper, modelToUpdate, updatedModel, updatedProject;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // verify that the slug is unique, excluding the current project
                        _a = project;
                        return [4 /*yield*/, getUniqueSlug({ slug: project.slug, existingId: project.id }, requestOptions)];
                    case 1:
                        // verify that the slug is unique, excluding the current project
                        _a.slug = _b.sent();
                        return [4 /*yield*/, getModel(project.id, requestOptions)];
                    case 2:
                        model = _b.sent();
                        mapper = new PropertyMapper(getProjectPropertyMap());
                        modelToUpdate = mapper.objectToModel(project, model);
                        return [4 /*yield*/, updateModel(modelToUpdate, requestOptions)];
                    case 3:
                        updatedModel = _b.sent();
                        updatedProject = mapper.modelToObject(updatedModel, project);
                        // the casting is needed because modelToObject returns a `Partial<T>`
                        // where as this function returns a `T`
                        return [2 /*return*/, updatedProject];
                }
            });
        });
    }
    /**
     * Get a Hub Project by id or slug
     * @param identifier item id or slug
     * @param requestOptions
     */
    function fetchProject(identifier, requestOptions) {
        var getPrms;
        if (isGuid(identifier)) {
            // get item by id
            getPrms = getItem(identifier, requestOptions);
        }
        else {
            getPrms = getItemBySlug(identifier, requestOptions);
        }
        return getPrms.then(function (item) {
            if (!item)
                return null;
            return convertItemToProject(item, requestOptions);
        });
    }
    /**
     * Remove a Hub Project
     * @param id
     * @param requestOptions
     */
    function destroyProject(id, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var ro;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ro = __assign(__assign({}, requestOptions), { id: id });
                        return [4 /*yield*/, removeItem(ro)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Search for Projects, and get IHubProject results
     *
     * Different from `hubSearch` in that this returns the IHubProjects
     *
     * @param filter
     * @param options
     * @returns
     */
    function searchProjects(query, options) {
        return __awaiter(this, void 0, void 0, function () {
            var qry, scopingFilters;
            return __generator(this, function (_a) {
                if (typeof query === "string") {
                    qry = createQueryFromString(query, "term", "item");
                }
                else {
                    qry = cloneObject$1(query);
                }
                scopingFilters = [
                    {
                        predicates: [
                            {
                                type: "Hub Project",
                            },
                        ],
                    },
                ];
                // add filters from the passed in query
                qry.filters = __spreadArrays(scopingFilters, qry.filters);
                return [2 /*return*/, searchEntities(qry, convertItemToProject, options)];
            });
        });
    }
    /**
     * Convert an Hub Project Item into a Hub Project, fetching any additional
     * information that may be required
     * @param item
     * @param auth
     * @returns
     */
    function convertItemToProject(item, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var model, mapper, token, session, prj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchModelFromItem(item, requestOptions)];
                    case 1:
                        model = _a.sent();
                        mapper = new PropertyMapper(getProjectPropertyMap());
                        if (requestOptions.authentication) {
                            session = requestOptions.authentication;
                            token = session.token;
                        }
                        prj = mapper.modelToObject(model, {});
                        prj.thumbnailUrl = getItemThumbnailUrl(model.item, requestOptions, token);
                        return [2 /*return*/, prj];
                }
            });
        });
    }
    /**
     * Fetch project specific enrichments
     * @param item
     * @param include
     * @param requestOptions
     * @returns
     */
    function enrichProjectSearchResult(item, include, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var result, DEFAULTS, specs, enrichments, enriched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            access: item.access,
                            id: item.id,
                            type: item.type,
                            name: item.title,
                            owner: item.owner,
                            summary: item.snippet || item.description,
                            createdDate: new Date(item.created),
                            createdDateSource: "item.created",
                            updatedDate: new Date(item.modified),
                            updatedDateSource: "item.modified",
                            family: getFamily(item.type),
                            links: {
                                self: "not-implemented",
                                siteRelative: "not-implemented",
                                thumbnail: "not-implemented",
                            },
                        };
                        DEFAULTS = [];
                        // merge includes
                        include = __spreadArrays(DEFAULTS, include).filter(unique);
                        specs = include.map(parseInclude);
                        enrichments = mapBy("enrichment", specs).filter(unique);
                        enriched = {};
                        if (!enrichments.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetchItemEnrichments(item, enrichments, requestOptions)];
                    case 1:
                        // TODO: Look into caching for the requests in fetchItemEnrichments
                        enriched = _a.sent();
                        _a.label = 2;
                    case 2:
                        // map the enriched props onto the result
                        specs.forEach(function (spec) {
                            result[spec.prop] = getProp(enriched, spec.path);
                        });
                        // Handle links
                        // TODO: Link handling should be an enrichment
                        result.links.thumbnail = getItemThumbnailUrl(item, requestOptions);
                        result.links.self = getItemHomeUrl(result.id, requestOptions);
                        result.links.siteRelative = getHubRelativeUrl(result.type, result.id, item.typeKeywords);
                        return [2 /*return*/, result];
                }
            });
        });
    }

    /**
     * Upload a file to be used as the thumbnail for an item
     * @param id
     * @param file
     * @param filename
     * @param requestOptions
     */
    function setItemThumbnail(id, file, filename, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = __assign({ item: {
                                id: id,
                            }, params: {
                                thumbnail: file,
                            }, filename: filename }, requestOptions);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, updateItem(opts)];
                    case 2:
                        response = _a.sent();
                        if (!response.success) {
                            throw new HubError$1("Set Project Thumbnail", "Unknown error setting thumbnail.");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        if (err_1 instanceof Error) {
                            throw new HubError$1("Set Project Thumbnail", err_1.message, err_1);
                        }
                        else {
                            throw new HubError$1("Set Project Thumbnail", "Unknown error setting thumbnail.");
                        }
                    case 4: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * Centralized functions used to manage IHubProject instances
     *
     * This class is a convenience wrapper over util functions which
     * are also directly accessible for use in scenarios where
     * classes are inconvenient.
     */
    var HubProjectManager = /** @class */ (function () {
        /**
         * Private so we can employ a factory function should we need
         * async work during creation
         * @param contextOrManager
         */
        function HubProjectManager(contextOrManager) {
            if (contextOrManager instanceof ArcGISContextManager) {
                this._contextManager = contextOrManager;
            }
            else {
                this._context = contextOrManager;
            }
        }
        /**
         * Factory function to construct a new HubProjectManager instance.
         *
         * Note: Used so that we could do async actions in the ctor.
         * @param contextOrManager
         * @returns
         */
        HubProjectManager.init = function (contextOrManager) {
            return new HubProjectManager(contextOrManager);
        };
        Object.defineProperty(HubProjectManager.prototype, "context", {
            /**
             * Getter to abstract how we store the context
             */
            get: function () {
                if (this._contextManager) {
                    return this._contextManager.context;
                }
                else {
                    return this._context;
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Create and store new project.
         *
         * Projects are stored as Items in the Sharing API
         * @param project
         * @param requestOptions
         * @returns
         */
        HubProjectManager.prototype.create = function (project, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (requestOptions || this.context.isAuthenticated) {
                        // ammend in the orgUrlKey
                        if (!project.orgUrlKey) {
                            project.orgUrlKey = this.context.portal.urlKey;
                        }
                        return [2 /*return*/, createProject(project, requestOptions || this.context.userRequestOptions)];
                    }
                    else {
                        throw new HubError$1("Create Project", "Creating Hub Projects requires authentication.");
                    }
                });
            });
        };
        /**
         * Update a project
         * @param project
         * @param requestOptions
         * @returns
         */
        HubProjectManager.prototype.update = function (project, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (requestOptions || this.context.isAuthenticated) {
                        return [2 /*return*/, updateProject(project, requestOptions || this.context.userRequestOptions)];
                    }
                    else {
                        throw new HubError$1("Update Project", "Updating Hub Projects requires authentication.");
                    }
                });
            });
        };
        /**
         * Destroy a project.
         * This permanently removes the backing Item
         * @param id
         * @param requestOptions
         * @returns
         */
        HubProjectManager.prototype.destroy = function (id, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (requestOptions || this.context.isAuthenticated) {
                        return [2 /*return*/, destroyProject(id, requestOptions || this.context.userRequestOptions)];
                    }
                    else {
                        throw new HubError$1("Destroy Project", "Destroying Hub Projects requires authentication.");
                    }
                });
            });
        };
        // DEPRECATED IN FAVOR OF .fetch()
        // TODO: REMOVE AT NEXT MAJOR
        /* istanbul ignore next */
        HubProjectManager.prototype.get = function (identifier, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // tslint:disable-next-line
                    console.warn("HubProjectManager.get is deprecated and will be removed. Use .fetch() instead.");
                    return [2 /*return*/, this.fetch(identifier, requestOptions)];
                });
            });
        };
        /**
         * Fetch a Project via id or it's slug
         *
         * This function does not require a user to be
         * authenticated, but it does require an `IRequestOptions`
         * which contains the portal instance to communicate with
         * @param identifier
         * @param requestOptions
         * @returns
         */
        HubProjectManager.prototype.fetch = function (identifier, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (requestOptions || this.context.requestOptions) {
                        return [2 /*return*/, fetchProject(identifier, requestOptions || this.context.requestOptions)];
                    }
                    else {
                        throw new HubError$1("Fetch Project", "Can not retrieve context.requestOptions from Context Manager. HubProjectManager is configured incorrectly.");
                    }
                });
            });
        };
        /**
         * Search for Projects
         *
         * @param query
         * @param options
         */
        HubProjectManager.prototype.search = function (query, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // if we were not passed auth, and we have a session, use it
                    if (!options.authentication && this.context.session) {
                        options.authentication = this.context.session;
                    }
                    return [2 /*return*/, searchProjects(query, options)];
                });
            });
        };
        /**
         * Set the thumbnail for the Project
         * @param id
         * @param file
         * @param filename
         * @param requestOptions
         * @returns
         */
        HubProjectManager.prototype.updateThumbnail = function (project, file, filename, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var ro;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ro = requestOptions || this.context.userRequestOptions;
                            return [4 /*yield*/, setItemThumbnail(project.id, file, filename, ro)];
                        case 1:
                            _a.sent();
                            // get the item so we have updated props and timestamps
                            return [2 /*return*/, this.fetch(project.id, requestOptions)];
                    }
                });
            });
        };
        /**
         * Convert a Hub Project Item to a IHubProject
         * @param item
         * @param requestOptions
         * @returns
         */
        HubProjectManager.prototype.fromItem = function (item, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var ro;
                return __generator(this, function (_a) {
                    ro = requestOptions || this.context.userRequestOptions;
                    return [2 /*return*/, convertItemToProject(item, ro)];
                });
            });
        };
        return HubProjectManager;
    }());

    /**
     * Add telemetry config object
     * @private
     * @param {object} model Site Model
     * @returns {object}
     */
    function _ensureTelemetry(model) {
        if (getProp(model, "item.properties.schemaVersion") >= 1.4)
            return model;
        var clone = cloneObject$1(model);
        var gacode = getProp(clone, "data.values.gacode");
        clone.data.values.telemetry = {
            consentNotice: {
                isTheme: true,
                consentText: "",
                policyURL: "",
            },
            customAnalytics: {
                ga: {
                    customerTracker: {
                        enabled: Boolean(gacode),
                        id: gacode,
                    },
                },
            },
        };
        deleteProp(clone, "data.values.gacode");
        setProp("item.properties.schemaVersion", 1.4, clone);
        return clone;
    }

    /**
     * Parse a response object, and throw if it contains an error.
     * Just a wrapper to hide some platform idiosyncracies
     * @param {Response} response Response object to parse
     * @private
     */
    function _checkStatusAndParseJson(response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (response.status >= 200 && response.status < 300) {
                    // don't try to parse the body if it's empty
                    // if (response.body) { // the fetch polyfill for IE... does not expose a body property... :(
                    return [2 /*return*/, response.json()];
                    // }
                }
                else {
                    // we're gonna throw, but we need to construct the error
                    return [2 /*return*/, response.json().then(function (json) {
                            if (json.error) {
                                var error = new Error(json.error.title + " :: " + json.error.detail + " :: " + response.status);
                                throw error;
                            }
                            else {
                                throw new Error("Got " + response.status + " " + response.statusText);
                            }
                        })];
                }
            });
        });
    }

    /**
     * Construct the auth header from a hub request options
     * @param {IHubRequestOptions} hubRequestOptions
     * @private
     */
    function _getAuthHeader(hubRequestOptions) {
        var result = {};
        var token = getProp(hubRequestOptions, "authentication.token");
        if (token) {
            result.Authorization = token;
        }
        return result;
    }

    /**
     * Extract the domain service from the request options
     * @param {string} hubApiUrl
     * @private
     */
    function _getDomainServiceUrl(hubApiUrl) {
        var base = hubApiUrl || "https://hub.arcgis.com";
        return base + "/api/v3/domains";
    }

    /**
     * Lookup a domain in Portal
     * @param {string} hostname to locate the site for
     * @param {IRequestOptions} requestOptions
     * @private
     */
    function _lookupPortal(hostname, requestOptions) {
        // for portal we search for a site w/ `hubsubdomain|<domain>` type keyword
        var subdomain = hostname;
        // if this subdomain has a hash in it, knock that off
        if (hostname.indexOf("#/") > -1) {
            subdomain = hostname.split("#/")[1];
        }
        var queryTerm = "hubsubdomain|" + subdomain;
        var opts = Object.assign({
            q: "typekeywords: " + queryTerm,
        }, requestOptions);
        return searchItems(opts)
            .then(function (res) {
            // since the search api stems the terms, we need to verify
            // by looking at the results
            return res.results.filter(function (r) {
                return includes(r.typeKeywords, queryTerm);
            })[0];
        })
            .then(function (site) {
            if (!site)
                throw new Error("site not found");
            return {
                hostname: site.url,
                siteId: site.id,
            };
        });
    }

    /**
     * Create an entry in the domain system
     * @param {IHubDomain} domainEntry Domain hash to be stored
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function addDomain(domainEntry, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            throw new Error("addDomain is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item");
        }
        var headers = _getAuthHeader(hubRequestOptions);
        headers["Content-Type"] = "application/json";
        var url = "" + _getDomainServiceUrl(hubRequestOptions.hubApiUrl);
        // handle case of siteTitle being numeric
        var title = domainEntry.siteTitle;
        if (typeof title === "number") {
            domainEntry.siteTitle = title.toString();
        }
        return fetch(url, {
            method: "POST",
            headers: headers,
            mode: "cors",
            body: JSON.stringify(domainEntry),
        }).then(_checkStatusAndParseJson);
    }

    /**
     * Check if a domain entry exists. Different from lookupDomain
     * in that this will return true/false, where as lookupDomain will
     * return the domain entry or throw. However, lookupDomain can work
     * with ArcGIS Enterprise.
     * Will throw if used in Portal.
     * @param {string} hostname Domain entry to check for
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function domainExists(hostname, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            throw new Error("domainExists is not available in ArcGIS Enterprise.");
        }
        hostname = stripProtocol(hostname);
        var url = _getDomainServiceUrl(hubRequestOptions.hubApiUrl) + "/" + hostname;
        var headers = _getAuthHeader(hubRequestOptions);
        return fetch(url, { method: "GET", headers: headers, mode: "cors" }).then(function (response) { return response.status !== 404; });
    }

    /**
     * Check if an item exists with the specified domain keyword
     * @param {String} hostname to check for
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function domainExistsPortal(hostname, hubRequestOptions) {
        return _lookupPortal(hostname, hubRequestOptions)
            .then(function (_) {
            return true;
        })
            .catch(function (_) {
            return false;
        });
    }

    /**
     * Get a list
     * @param {string} siteId Item id of the Site
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function getDomainsForSite(siteId, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            return Promise.resolve([]);
        }
        var url = _getDomainServiceUrl(hubRequestOptions.hubApiUrl) + "?siteId=" + siteId;
        var headers = _getAuthHeader(hubRequestOptions);
        return fetch(url, { method: "GET", headers: headers, mode: "cors" })
            .then(_checkStatusAndParseJson)
            .catch(function (err) {
            throw Error("Error in getDomainsForSite " + err);
        });
    }

    /**
     * Ensure a unique domain name by checking for and incrementing
     * a subdomain
     * @param {String} subdomain Subdomain to ensure is unique
     * @param {String} baseHostname base hostname
     * @param hubRequestOptions
     * @param {Number} step Step number
     */
    function getUniqueDomainName(subdomain, baseHostname, hubRequestOptions, step) {
        if (step === void 0) { step = 0; }
        var combinedName = subdomain;
        if (step) {
            combinedName = subdomain + "-" + step;
        }
        var hostname = combinedName + "-" + baseHostname;
        return domainExists(hostname, hubRequestOptions).then(function (exists) {
            // if result === true, then we need to step the name...
            if (exists) {
                var nextStep = step + 1;
                return getUniqueDomainName(subdomain, baseHostname, hubRequestOptions, nextStep);
            }
            else {
                return combinedName;
            }
        });
    }

    /**
     * Ensure a unique domain name by checking for and incrementing
     * a subdomain
     * @param {String} subdomain Subdomain to ensure is unique
     * @param {IHubRequestOptions} hubRequestOptions
     * @param {*} step Step number
     */
    function getUniqueDomainNamePortal(subdomain, hubRequestOptions, step) {
        if (step === void 0) { step = 0; }
        var combinedName = subdomain;
        if (step) {
            combinedName = subdomain + "-" + step;
        }
        // now we search for existing items w/ this...
        return domainExistsPortal(combinedName, hubRequestOptions).then(function (exists) {
            if (exists) {
                var nextStep = step + 1;
                return getUniqueDomainNamePortal(subdomain, hubRequestOptions, nextStep);
            }
            else {
                return combinedName;
            }
        });
    }

    /**
     * Determine if a domain entry belongs to a legacy site.
     * This is used to allow customers to "reclaim" domains that
     * were associated with legacy sites which can no longer be
     * edited.
     * @param {IHubDomain} domainEntry Domain Info record
     */
    function isDomainForLegacySite(domainEntry) {
        return !isGuid(domainEntry.siteId);
    }

    /**
     * Fetch a the information about a domain.
     * Different implementation for Portal vs AGO
     * @param {string} hostname of domain record to locate
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function lookupDomain(hostname, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            return _lookupPortal(hostname, hubRequestOptions);
        }
        else {
            var url = _getDomainServiceUrl(hubRequestOptions.hubApiUrl) + "/" + hostname;
            var headers = _getAuthHeader(hubRequestOptions);
            return fetch(url, { method: "GET", headers: headers, mode: "cors" }).then(_checkStatusAndParseJson);
        }
    }

    /**
     * Check to see if a domain is in use by any site other than the
     * one passed in. This is used in various validators while the
     * user is editing properties of the site.
     * @param {string} hostname to check
     * @param {string} siteId Site Id we are checking for
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function isDomainUsedElsewhere(hostname, siteId, hubRequestOptions) {
        return lookupDomain(hostname, hubRequestOptions)
            .then(function (domainEntry) {
            return domainEntry.siteId !== siteId;
        })
            .catch(function () {
            // domain entry not found, ergo not used on another site
            return false;
        });
    }

    /**
     * Validate a custom domain
     * @param {string} hostname to validate
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function isValidDomain(hostname, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            throw new Error("isValidDomain is not available in ArcGIS Enterprise.");
        }
        var url = _getDomainServiceUrl(hubRequestOptions.hubApiUrl) + "/validate?hostname=" + hostname;
        var headers = _getAuthHeader(hubRequestOptions);
        return fetch(url, { method: "GET", headers: headers, mode: "cors" })
            .then(function (response) {
            return response.json();
        })
            .catch(function (e) {
            return {
                success: false,
                input: hostname,
                error: {
                    code: 400,
                    detail: e,
                    message: "lookupFailed",
                },
            };
        });
    }

    /**
     * Remove a domain entry.
     * User must be a member of the org that owns the domain entry.
     * @param {int} domainId Id of the domain entry to remove
     * @param {IHubRequestOptions} hubRequestOptions`dom
     */
    function removeDomain(domainId, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            throw new Error("removeDomain is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item");
        }
        var headers = _getAuthHeader(hubRequestOptions);
        headers["Content-Type"] = "application/json";
        var url = _getDomainServiceUrl(hubRequestOptions.hubApiUrl) + "/" + domainId;
        return fetch(url, { method: "DELETE", headers: headers, mode: "cors" }).then(_checkStatusAndParseJson);
    }

    /**
     * Remove all domain entries by site id.
     * User must be a member of the org that owns the domain entry.
     * @param {int} domainSiteId of the domain entries to remove
     * @param {IHubRequestOptions} hubRequestOptions`dom
     */
    function removeDomainsBySiteId(domainSiteId, hubRequestOptions) {
        // TODO: Can remove this if no longer required
        if (hubRequestOptions.isPortal) {
            throw new Error("removeDomainsBySiteId is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item");
        }
        var headers = _getAuthHeader(hubRequestOptions);
        headers["Content-Type"] = "application/json";
        var url = _getDomainServiceUrl(hubRequestOptions.hubApiUrl) + "/?siteId=" + domainSiteId;
        return fetch(url, { method: "DELETE", headers: headers, mode: "cors" }).then(_checkStatusAndParseJson);
    }

    /**
     * Update an entry in the domain system
     * @param {IHubDomain} domainEntry  Doman object to be updated
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function updateDomain(domainEntry, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            throw new Error("updateDomain is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item");
        }
        var headers = _getAuthHeader(hubRequestOptions);
        headers["Content-Type"] = "application/json";
        var url = _getDomainServiceUrl(hubRequestOptions.hubApiUrl) + "/" + domainEntry.id;
        // handle case of siteTitle being numeric
        var title = domainEntry.siteTitle;
        if (typeof title === "number") {
            domainEntry.siteTitle = title.toString();
        }
        return fetch(url, {
            method: "PUT",
            headers: headers,
            mode: "cors",
            body: JSON.stringify(domainEntry),
        }).then(_checkStatusAndParseJson);
    }

    /**
     * Ensure that a subdomain is not greater than 63 characters in length
     * Subdomains are prep-ended on the org's url key, and the combined
     * length can not exceed 63 chars as per rules of domains.
     * If the requested subdomain + the url key is > 63 chars, we
     * strip off the last 6 chars and replace that w/ random characeters
     * This was an actual reported bug.
     * @param {String} subdomain Proposed subdomain
     * @param {String} urlKey Org url key
     * @private
     */
    function _ensureSafeDomainLength(subdomain, urlKey) {
        var result = cloneObject$1(subdomain);
        var max = 63;
        if (urlKey)
            max = max - (urlKey.length + 1);
        if (result.length > max) {
            result = result.slice(0, max - 6) + "-" + generateRandomString(5);
        }
        return result;
    }

    /**
     * Given a subdomain, ensure that we have a unique hostname
     * incrementing if needed
     * @param {String} subdomain Subdomain to unique-ify
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function ensureUniqueDomainName(subdomain, hubRequestOptions) {
        var prms;
        if (hubRequestOptions.isPortal) {
            prms = getUniqueDomainNamePortal(subdomain, hubRequestOptions);
        }
        else {
            var baseDomain = hubRequestOptions.portalSelf.urlKey + "." + stripProtocol(getHubApiUrl(hubRequestOptions));
            prms = getUniqueDomainName(subdomain, baseDomain, hubRequestOptions);
        }
        return prms.then(function (uniqueDomain) {
            return _ensureSafeDomainLength(uniqueDomain, hubRequestOptions.portalSelf.urlKey);
        });
    }

    /**
     * Given a Site Model, register the domains with the Domain Service.
     *
     * This should only be used when creating a site. To update domains related
     * to a site, use the `addDomain` and `removeDomain` functions directly
     *
     * @param {Object} model site model
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function addSiteDomains(model, hubRequestOptions) {
        if (hubRequestOptions.isPortal) {
            return Promise.resolve([]);
        }
        else {
            var props = ["defaultHostname", "customHostname"];
            return Promise.all(props.reduce(function (acc, prop) {
                var hostname = getProp(model, "data.values." + prop);
                if (hostname) {
                    var domainOpts = {
                        hostname: hostname,
                        clientKey: model.data.values.clientId,
                        orgId: hubRequestOptions.portalSelf.id,
                        orgTitle: hubRequestOptions.portalSelf.name,
                        orgKey: hubRequestOptions.portalSelf.urlKey,
                        siteId: model.item.id,
                        siteTitle: model.item.title,
                        sslOnly: true,
                    };
                    acc.push(addDomain(domainOpts, hubRequestOptions));
                }
                return acc;
            }, []));
        }
    }

    /**
     * Remove an entry from the domain service, based on a hostname
     *
     * Callers must ensure the user is a member of the org that
     * owns the domain entry else the call will fail.
     * @param hostname
     * @param hubRequestOptions
     */
    function removeDomainByHostname(hostname, hubRequestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var domainEntry, id, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (hubRequestOptions.isPortal) {
                            throw new Error("removeDomainByHostname is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, lookupDomain(hostname, hubRequestOptions)];
                    case 2:
                        domainEntry = _a.sent();
                        id = getProp(domainEntry, "id");
                        if (!id) return [3 /*break*/, 4];
                        return [4 /*yield*/, removeDomain(id, hubRequestOptions)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        ex_1 = _a.sent();
                        throw new Error("Error removing domain entry for " + hostname + ": " + ex_1);
                    case 6: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * Builds a draft with a subset of the model properties
     * @param {*} model - item model
     * @param {*} includeList - list of property paths to include in draft object
     */
    function buildDraft(model, includeList) {
        return mergeObjects(model, {}, includeList);
    }

    /**
     * Returns site model given various kinds of identifier
     *
     * @param identifier - a site item ID, site hostname, enterprise site slug, or full site URL
     * @param hubRequestOptions
     */
    function fetchSiteModel(identifier, hubRequestOptions) {
        var prms;
        if (isGuid(identifier)) {
            prms = getSiteById(identifier, hubRequestOptions);
        }
        else {
            var hostnameOrSlug = identifier;
            // get down the the hostname
            hostnameOrSlug = stripProtocol(hostnameOrSlug);
            hostnameOrSlug = hostnameOrSlug.split("/")[0];
            prms = lookupDomain(hostnameOrSlug, hubRequestOptions).then(function (_a) {
                var siteId = _a.siteId;
                return getSiteById(siteId, hubRequestOptions);
            });
        }
        return prms;
    }
    /**
     * @private // keep out of docs
     */
    /* istanbul ignore next */
    function fetchSite(identifier, hubRequestOptions) {
        // tslint:disable-next-line
        console.warn("@esri/hub-common::fetchSite is deprecated. Please use @esri/hub-common::fetchSiteModel instead");
        return fetchSiteModel(identifier, hubRequestOptions);
    }

    /**
     * Get a Site Model by it's Item Id, and apply schema upgrades
     * @param {String} id Site Item Id
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function getSiteById(id, hubRequestOptions) {
        return getModel(id, hubRequestOptions).then(upgradeSiteSchema);
    }

    /**
     * Given two site models, determine the domain changes and apply them
     * @param currentModel
     * @param updatedModel
     * @param requestOptions
     * @private
     */
    function handleDomainChanges(updatedModel, currentModel, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var defaultDomainRecord, domainChanges, domainChangePromises;
            return __generator(this, function (_a) {
                defaultDomainRecord = {
                    clientKey: updatedModel.data.values.clientId,
                    orgId: requestOptions.portalSelf.id,
                    orgTitle: requestOptions.portalSelf.name,
                    orgKey: requestOptions.portalSelf.urlKey,
                    siteId: updatedModel.item.id,
                    siteTitle: updatedModel.item.title,
                    sslOnly: true,
                };
                domainChanges = {
                    remove: [],
                    add: [],
                };
                ["customHostname", "defaultHostname"].forEach(function (key) {
                    var currentValue = getProp(currentModel, "data.values." + key);
                    var updatedValue = getProp(updatedModel, "data.values." + key);
                    if (updatedValue !== currentValue) {
                        domainChanges.remove.push(currentValue);
                        domainChanges.add.push(updatedValue);
                    }
                });
                domainChangePromises = [];
                // handle additions
                domainChanges.add.map(function (hostname) {
                    var domainOpts = __assign({ hostname: hostname }, defaultDomainRecord);
                    domainChangePromises.push(addDomain(domainOpts, requestOptions));
                });
                // handle removals
                domainChanges.remove.map(function (hostname) {
                    domainChangePromises.push(removeDomainByHostname(hostname, requestOptions));
                });
                return [2 /*return*/, Promise.all(domainChangePromises)];
            });
        });
    }

    /**
     * @private
     * Construct a query from a string
     * @param value
     * @param predicateKey
     * @param targetEntity
     * @returns
     */
    function createQueryFromString(value, predicateKey, targetEntity) {
        var predicate = {};
        predicate[predicateKey] = value;
        var qry = {
            targetEntity: targetEntity,
            filters: [
                {
                    predicates: [predicate],
                },
            ],
        };
        return qry;
    }

    var HUB_SITE_ITEM_TYPE = "Hub Site Application";
    var ENTERPRISE_SITE_ITEM_TYPE = "Site Application";
    /**
     * Default values of a IHubSite
     */
    var DEFAULT_SITE = {
        name: "No title provided",
        tags: [],
        typeKeywords: ["Hub Site", "hubSite", "DELETEMESITE"],
        capabilities: [
            "api_explorer",
            "pages",
            "my_data",
            "social_logins",
            "json_chart_card",
            "document_iframes",
            "items_view",
            "app_page",
            "underlinedLinks",
            "globalNav",
            "socialSharing",
        ],
        catalog: {
            groups: [],
        },
        subdomain: "",
        defaultHostname: "",
        customHostname: "",
        clientId: "",
        map: null,
        feeds: {},
        pages: [],
        theme: null,
        contentViews: {
            sidePanelOpen: {
                app: true,
                map: true,
                dataset: true,
                document: true,
                feedback: true,
            },
        },
    };
    /**
     * Default values for a new HubSite Model
     */
    var DEFAULT_SITE_MODEL = {
        item: {
            // type: intentionally left out as we need to
            // set that based on portal/enterprise
            title: "No Title Provided",
            description: "No Description Provided",
            snippet: "",
            tags: [],
            typeKeywords: ["Hub Site", "hubSite", "DELETEMESITE"],
            properties: {
                slug: "",
                orgUrlKey: "",
                defaultHostname: "",
                customHostname: "",
                clientId: "",
                subdomain: "",
                schemaVersion: 1.5,
            },
            url: "",
        },
        data: {
            catalog: {
                groups: [],
            },
            feeds: {},
            values: {
                title: "",
                defaultHostname: "",
                customHostname: "",
                subdomain: "",
                faviconUrl: "",
                uiVersion: "2.4",
                clientId: "",
                map: {
                    basemaps: {},
                },
                defaultExtent: {},
                pages: [],
                theme: {},
                layout: {
                    sections: [],
                    header: {
                        component: {
                            name: "site-header",
                            settings: {
                                fullWidth: false,
                                iframeHeight: "150px",
                                iframeUrl: "",
                                links: [],
                                logoUrl: "",
                                title: "default site",
                                markdown: "",
                                headerType: "default",
                                schemaVersion: 3,
                                showLogo: true,
                                showTitle: true,
                                logo: {
                                    display: {},
                                    state: "valid",
                                },
                                shortTitle: "",
                                menuLinks: [],
                                socialLinks: {
                                    facebook: {},
                                    twitter: {},
                                    instagram: {},
                                    youtube: {},
                                },
                            },
                        },
                        showEditor: false,
                    },
                    footer: {
                        component: {
                            name: "site-footer",
                            settings: {
                                footerType: "none",
                                markdown: "",
                                schemaVersion: 2.1,
                            },
                        },
                        showEditor: false,
                    },
                },
                contentViews: {
                    sidePanelOpen: {
                        app: true,
                        map: true,
                        dataset: true,
                        document: true,
                        feedback: true,
                    },
                },
            },
        },
    };
    /**
     * Returns an Array of IPropertyMap objects
     * We could define these directly, but since the
     * properties of IHubSite map directly to properties
     * on item or data, it's slightly less verbose to
     * generate the structure.
     * @returns
     */
    function getSitePropertyMap() {
        var itemProps = [
            "created",
            "culture",
            "description",
            "extent",
            "id",
            "modified",
            "owner",
            "snippet",
            "tags",
            "typeKeywords",
            "url",
            "type",
        ];
        var map = [];
        itemProps.forEach(function (entry) {
            map.push({ objectKey: entry, modelKey: "item." + entry });
        });
        var dataProps = ["catalog", "feeds"];
        dataProps.forEach(function (entry) {
            map.push({ objectKey: entry, modelKey: "data." + entry });
        });
        var valueProps = [
            "pages",
            "theme",
            "capabilities",
            "subdomain",
            "defaultHostname",
            "customHostname",
            "clientId",
            "defaultExtent",
            "map",
            "telemetry",
            "headerSass",
        ];
        valueProps.forEach(function (entry) {
            map.push({ objectKey: entry, modelKey: "data.values." + entry });
        });
        // Deeper/Indirect mappings
        map.push({
            objectKey: "slug",
            modelKey: "item.properties.slug",
        });
        map.push({
            objectKey: "orgUrlKey",
            modelKey: "item.properties.orgUrlKey",
        });
        map.push({
            objectKey: "name",
            modelKey: "item.title",
        });
        return map;
    }
    // TODO: Add OperationStack & Error Handling
    /**
     * Create a new Hub Site
     *
     * Minimum properties are `name` and `org`
     * @param partialSite
     * @param requestOptions
     */
    function createSite(partialSite, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var site, portal, _a, mapper, model, registration, updatedModel;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        site = __assign(__assign({}, DEFAULT_SITE), partialSite);
                        portal = requestOptions.portalSelf;
                        // Set the type based on the environment we are working in
                        site.type = requestOptions.isPortal
                            ? ENTERPRISE_SITE_ITEM_TYPE
                            : HUB_SITE_ITEM_TYPE;
                        // Create a slug from the title if one is not passed in
                        if (!site.slug) {
                            site.slug = constructSlug(site.name, site.orgUrlKey);
                        }
                        // Ensure slug is  unique
                        // site.slug = await getUniqueSlug({ slug: site.slug }, requestOptions);
                        // add slug to keywords
                        site.typeKeywords = setSlugKeyword(site.typeKeywords, site.slug);
                        if (!site.subdomain) {
                            site.subdomain = slugify(site.name);
                        }
                        _a = site;
                        return [4 /*yield*/, ensureUniqueDomainName(site.subdomain, requestOptions)];
                    case 1:
                        _a.subdomain = _b.sent();
                        // Domains
                        if (!requestOptions.isPortal) {
                            // now that we know the subdomain is available, set the defaultHostname
                            site.defaultHostname = site.subdomain + "-" + portal.urlKey + "." + stripProtocol(getHubApiUrl(requestOptions));
                            // set the url
                            site.url = "https://" + (site.customHostname ? site.customHostname : site.defaultHostname);
                        }
                        else {
                            // Portal Sites use subdomain in hash based router
                            site.typeKeywords.push(("hubsubdomain|" + site.subdomain).toLowerCase());
                            site.url = requestOptions.authentication.portal.replace("/sharing/rest", "/apps/sites") + "/#/" + site.subdomain;
                        }
                        // Note:  We used to use adlib for this, but it's much harder to
                        // use templates with typescript. i.e. you can't assign a string template
                        // to a property defined as `IExtent` without using `as unknown as ...`
                        // which basically removes typechecking
                        site.orgUrlKey = portal.urlKey;
                        // override only if not set...
                        if (!site.theme) {
                            site.theme = getOrgDefaultTheme(portal);
                        }
                        if (!site.defaultExtent) {
                            site.defaultExtent = portal.defaultExtent;
                        }
                        if (!site.culture) {
                            site.culture = portal.culture;
                        }
                        // pull the basemap from portalSelf
                        if (!getProp(site, "map.basemaps.primary")) {
                            setProp("map.basemaps.primary", portal.defaultBasemap, site);
                        }
                        // Put the title into the header
                        if (!getProp(site, "layout.header.component.settings.title")) {
                            setProp("layout.header.component.settings.title", site.name, site);
                        }
                        mapper = new PropertyMapper(getSitePropertyMap());
                        model = mapper.objectToModel(site, cloneObject$1(DEFAULT_SITE_MODEL));
                        return [4 /*yield*/, createModel(model, requestOptions)];
                    case 2:
                        // create the backing item
                        model = _b.sent();
                        return [4 /*yield*/, registerSiteAsApplication(model, requestOptions)];
                    case 3:
                        registration = _b.sent();
                        model.data.values.clientId = registration.client_id;
                        // Register domains
                        return [4 /*yield*/, addSiteDomains(model, requestOptions)];
                    case 4:
                        // Register domains
                        _b.sent();
                        return [4 /*yield*/, updateModel(model, requestOptions)];
                    case 5:
                        updatedModel = _b.sent();
                        // convert the model into a IHubSite and return
                        return [2 /*return*/, mapper.modelToObject(updatedModel, {})];
                }
            });
        });
    }
    /**
     * Update a Hub Site
     *
     * This checks for and applies domain changes
     * @param site
     * @param requestOptions
     * @returns
     */
    function updateSite(site, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var mapper, updatedModel, currentModel, modelToStore, updatedSiteModel, updatedSite;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mapper = new PropertyMapper(getSitePropertyMap());
                        updatedModel = mapper.objectToModel(site, cloneObject$1(DEFAULT_SITE_MODEL));
                        return [4 /*yield*/, getModel(site.id, requestOptions)];
                    case 1:
                        currentModel = _a.sent();
                        // handle any domain changes
                        return [4 /*yield*/, handleDomainChanges(updatedModel, currentModel, requestOptions)];
                    case 2:
                        // handle any domain changes
                        _a.sent();
                        if (updatedModel.item.properties.slug !== currentModel.item.properties.slug) {
                            // ensure slug to keywords
                            updatedModel.item.typeKeywords = setSlugKeyword(updatedModel.item.typeKeywords, updatedModel.item.properties.slug);
                        }
                        modelToStore = mapper.objectToModel(site, currentModel);
                        return [4 /*yield*/, updateModel(modelToStore, requestOptions)];
                    case 3:
                        updatedSiteModel = _a.sent();
                        updatedSite = mapper.modelToObject(updatedSiteModel, site);
                        return [2 /*return*/, updatedSite];
                }
            });
        });
    }
    /**
     * Remove a Hub Site
     *
     * This simply removes the Site item, and it's associated domain records.
     * This does not remove any Teams/Groups or content associated with the
     * Site
     * @param id
     * @param requestOptions
     * @returns
     */
    function destroySite(id, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var ro;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!requestOptions.isPortal) return [3 /*break*/, 2];
                        return [4 /*yield*/, removeDomainsBySiteId(id, requestOptions)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        ro = __assign(__assign({}, requestOptions), { id: id });
                        return [4 /*yield*/, removeItem(ro)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Returns site model given various kinds of identifier
     *
     * @param identifier - a site item ID, site hostname, enterprise site slug, or full site URL
     * @param requestOptions
     * @private // remove when we remove existing fetchSite function
     */
    function _fetchSite(identifier, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var model, mapper, site, token, us;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchSiteModel(identifier, requestOptions)];
                    case 1:
                        model = _a.sent();
                        mapper = new PropertyMapper(getSitePropertyMap());
                        site = mapper.modelToObject(model, {});
                        if (requestOptions.authentication) {
                            us = requestOptions.authentication;
                            token = us.token;
                        }
                        site.thumbnailUrl = getItemThumbnailUrl(model.item, requestOptions, token);
                        return [2 /*return*/, site];
                }
            });
        });
    }
    /**
     * Convert a Hub Site Application item into a Hub Site, fetching any
     * additional information that may be required
     * @param item
     * @param auth
     * @returns
     */
    function convertItemToSite(item, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var model, mapper, token, session, prj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchModelFromItem(item, requestOptions)];
                    case 1:
                        model = _a.sent();
                        mapper = new PropertyMapper(getSitePropertyMap());
                        if (requestOptions.authentication) {
                            session = requestOptions.authentication;
                            token = session.token;
                        }
                        prj = mapper.modelToObject(model, {});
                        prj.thumbnailUrl = getItemThumbnailUrl(model.item, requestOptions, token);
                        return [2 /*return*/, prj];
                }
            });
        });
    }
    /**
     * Search for Sites and get IHubSite results
     * @param filter
     * @param options
     * @returns
     */
    function searchSites(query, options) {
        return __awaiter(this, void 0, void 0, function () {
            var qry, scopingFilters;
            return __generator(this, function (_a) {
                if (typeof query === "string") {
                    qry = createQueryFromString(query, "term", "item");
                }
                else {
                    qry = cloneObject$1(query);
                }
                scopingFilters = [
                    {
                        predicates: [
                            {
                                type: "Hub Project",
                            },
                        ],
                    },
                ];
                // add filters from the passed in query
                qry.filters = __spreadArrays(scopingFilters, qry.filters);
                return [2 /*return*/, searchEntities(qry, convertItemToSite, options)];
            });
        });
    }
    /**
     * Fetch Site specific enrichments
     * @param item
     * @param include
     * @param requestOptions
     * @returns
     */
    function enrichSiteSearchResult(item, include, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var result, DEFAULTS, specs, enrichments, enriched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            access: item.access,
                            id: item.id,
                            type: item.type,
                            name: item.title,
                            owner: item.owner,
                            summary: item.snippet || item.description,
                            createdDate: new Date(item.created),
                            createdDateSource: "item.created",
                            updatedDate: new Date(item.modified),
                            updatedDateSource: "item.modified",
                            family: getFamily(item.type),
                            links: {
                                self: "not-implemented",
                                siteRelative: "not-implemented",
                                thumbnail: "not-implemented",
                            },
                        };
                        DEFAULTS = [];
                        // merge includes
                        include = __spreadArrays(DEFAULTS, include).filter(unique);
                        specs = include.map(parseInclude);
                        enrichments = mapBy("enrichment", specs).filter(unique);
                        enriched = {};
                        if (!enrichments.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetchItemEnrichments(item, enrichments, requestOptions)];
                    case 1:
                        // TODO: Look into caching for the requests in fetchItemEnrichments
                        enriched = _a.sent();
                        _a.label = 2;
                    case 2:
                        // map the enriched props onto the result
                        specs.forEach(function (spec) {
                            result[spec.prop] = getProp(enriched, spec.path);
                        });
                        // Handle links
                        result.links.thumbnail = getItemThumbnailUrl(item, requestOptions);
                        result.links.self = item.url;
                        result.links.siteRelative = getHubRelativeUrl(result.type, result.id, item.typeKeywords);
                        return [2 /*return*/, result];
                }
            });
        });
    }

    var HubSiteManager = /** @class */ (function () {
        /**
         * Private so we can employ a factory function should we need
         * async work during creation
         * @param contextOrManager
         */
        function HubSiteManager(contextOrManager) {
            if (contextOrManager instanceof ArcGISContextManager) {
                this._contextManager = contextOrManager;
            }
            else {
                this._context = contextOrManager;
            }
        }
        /**
         * Factory function to construct a new HubProjectManager instance.
         *
         * Note: Used so that we could do async actions in the ctor.
         * @param contextOrManager
         * @returns
         */
        HubSiteManager.init = function (contextOrManager) {
            return new HubSiteManager(contextOrManager);
        };
        Object.defineProperty(HubSiteManager.prototype, "context", {
            /**
             * Getter to abstract how we store the context
             */
            get: function () {
                if (this._contextManager) {
                    return this._contextManager.context;
                }
                else {
                    return this._context;
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Create and store a new Site
         *
         * This also registers the item for oAuth and
         * registers domain names with the hub Domain system
         *
         * Sites are stored as Items in the Sharing API
         * @param site
         * @param requestOptions
         * @returns
         */
        HubSiteManager.prototype.create = function (site, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (requestOptions || this.context.isAuthenticated) {
                        // ammend in the orgUrlKey
                        if (!site.orgUrlKey) {
                            site.orgUrlKey = this.context.portal.urlKey;
                        }
                        return [2 /*return*/, createSite(site, requestOptions || this.context.hubRequestOptions)];
                    }
                    else {
                        throw new HubError$1("Create Site", "Creating Hub Sites requires authentication.");
                    }
                });
            });
        };
        /**
         * Update a Site
         * @param site
         * @param requestOptions
         * @returns
         */
        HubSiteManager.prototype.update = function (site, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (requestOptions || this.context.isAuthenticated) {
                        return [2 /*return*/, updateSite(site, requestOptions || this.context.hubRequestOptions)];
                    }
                    else {
                        throw new HubError$1("Update Site", "Updating a Hub Site requires authentication.");
                    }
                });
            });
        };
        /**
         * Destroy a Site
         * This permanently removes the backing Item,
         * and clears the domain entries for it.
         * @param id
         * @param requestOptions
         * @returns
         */
        HubSiteManager.prototype.destroy = function (id, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (requestOptions || this.context.isAuthenticated) {
                        return [2 /*return*/, destroySite(id, requestOptions || this.context.hubRequestOptions)];
                    }
                    else {
                        throw new HubError$1("Destroy Site", "Destroying Hub Sites requires authentication.");
                    }
                });
            });
        };
        /**
         * Fetch a Site via Id, slug or domain
         *
         * This function does not require a user to be
         * authenticated, but it does require an `IRequestOptions`
         * which contains the portal instance to communicate with
         * @param identifier
         * @param requestOptions
         * @returns
         */
        HubSiteManager.prototype.fetch = function (identifier, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        if (requestOptions || this.context.hubRequestOptions) {
                            return [2 /*return*/, _fetchSite(identifier, requestOptions || this.context.hubRequestOptions)];
                        }
                        else {
                            throw new HubError$1("Fetch Site", "Can not retrieve context.hubRequestOptions from Context Manager. HubSiteManager is configured incorrectly.");
                        }
                    }
                    catch (ex) {
                        throw new HubError$1("Fetch Site", "Can not retrieve context.hubRequestOptions from Context Manager. HubSiteManager is configured incorrectly.", ex);
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Search for Sites
         *
         * @param filter
         * @param opts
         */
        HubSiteManager.prototype.search = function (query, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // if we were not passed auth, and we have a session, use it
                    if (!options.authentication && this.context.session) {
                        options.authentication = this.context.session;
                    }
                    return [2 /*return*/, searchSites(query, options)];
                });
            });
        };
        /**
         * Set the thumbnail for the Site
         * @param id
         * @param file
         * @param filename
         * @param requestOptions
         * @returns
         */
        HubSiteManager.prototype.updateThumbnail = function (site, file, filename, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var ro;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ro = requestOptions || this.context.userRequestOptions;
                            return [4 /*yield*/, setItemThumbnail(site.id, file, filename, ro)];
                        case 1:
                            _a.sent();
                            // get the item so we have updated props and timestamps
                            return [2 /*return*/, this.fetch(site.id, requestOptions)];
                    }
                });
            });
        };
        /**
         * Convert a Hub Project Item to a IHubProject
         * @param item
         * @param requestOptions
         * @returns
         */
        HubSiteManager.prototype.fromItem = function (item, requestOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var ro;
                return __generator(this, function (_a) {
                    ro = requestOptions || this.context.userRequestOptions;
                    return [2 /*return*/, convertItemToSite(item, ro)];
                });
            });
        };
        return HubSiteManager;
    }());

    /**
     * Register an Item as an application, enabling oAuth flows at custom
     * domains. Only item types with "Application" in the name are valid
     * with this API call.
     * @param {string} itemId Item Id of item to create an application for
     * @param {Array} redirectUris Array of valid redirect uris for the app
     * @param {string} appType Defaults to "browser"
     * @param {IRequestOptions} requestOptions
     */
    function registerBrowserApp(itemId, redirectUris, requestOptions) {
        var url = getPortalApiUrl(requestOptions) + "/oauth2/registerApp";
        var options = {
            method: "POST",
            authentication: requestOptions.authentication,
            params: {
                itemId: itemId,
                appType: "browser",
                redirect_uris: JSON.stringify(redirectUris),
            },
        };
        return request(url, options);
    }

    /**
     * Register the Site item as an application so we can oauth against it
     * @param {string} siteId Item Id of the site
     * @param {Array} uris Arrayf valid uris for the site
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function registerSiteAsApplication(model, hubRequestOptions) {
        // PORTAL-ENV: we can't register sites as `arcgisonline` because it will bust sign in on the portal
        if (hubRequestOptions.isPortal)
            return Promise.resolve({});
        var uris = [model.data.values.defaultHostname];
        if (getProp(model, "data.values.customHostname")) {
            uris.push(model.data.values.customHostname);
        }
        // get both the http and https versions of the urls, just to cover all the bases
        var redirectUris = uris.reduce(function (acc, uri) {
            return acc.concat(_getHttpAndHttpsUris(uri));
        }, []);
        return registerBrowserApp(model.item.id, redirectUris, hubRequestOptions);
    }

    var SITE_SCHEMA_VERSION = 1.5;

    /**
     * Default Site Theme
     */
    var DEFAULT_THEME = {
        header: {
            background: "#fff",
            text: "#4c4c4c",
        },
        body: {
            background: "#fff",
            text: "#4c4c4c",
            link: "#0079c1",
        },
        button: {
            background: "#0079c1",
            text: "#fff",
        },
        logo: {
            small: "",
        },
        fonts: {
            base: {
                url: "",
                family: "Avenir Next",
            },
            heading: {
                url: "",
                family: "Avenir Next",
            },
        },
    };
    /**
     * Return the default theme, extended with values from the Org's shared theme
     * @param {Object} portalSelf Org's Portal object
     */
    function getOrgDefaultTheme(portalSelf) {
        var defaultTheme = cloneObject$1(DEFAULT_THEME);
        var sharedTheme = getProp(portalSelf, "portalProperties.sharedTheme");
        if (sharedTheme) {
            sharedTheme = removeEmptyProps(sharedTheme);
            defaultTheme = extend(defaultTheme, sharedTheme);
        }
        return defaultTheme;
    }

    /**
     * Apply the first schema version to the item
     * @param {Object} model Site Model
     * @private
     */
    function _applySiteSchema(model) {
        // if this has already been thru this step... skip it...
        if (getProp(model, "item.properties.schemaVersion") >= 1)
            return model;
        var clone = cloneObject$1(model);
        // proactively purge old properties
        ["groupId", "title"].forEach(function (prop) {
            delete clone.data.values[prop];
        });
        // ensure item.properties
        if (!clone.item.properties) {
            clone.item.properties = {};
        }
        clone.item.properties.schemaVersion = 1;
        // Groups!
        if (clone.data.values.groups && Array.isArray(clone.data.values.groups)) {
            // we have some groups arrays in prod where the contents are a mix of strings and objects.
            // we need to ensure this is just an array of groupIds...
            var groupIds = clone.data.values.groups
                .map(function (entry) {
                if (typeof entry === "object") {
                    return entry.id;
                }
                else {
                    return entry;
                }
            })
                .filter(function (entry) { return !!entry; });
            // now assign this back to the groups
            clone.data.values.groups = groupIds;
        }
        return clone;
    }

    /**
     * Enforce lowercase domains
     * @param {Object} model Site Model
     * @private
     */
    function _enforceLowercaseDomains(model) {
        // exit if this has been applied...
        if (getProp(model, "item.properties.schemaVersion") >= 1.1)
            return model;
        var clone = cloneObject$1(model);
        // all the possible domain properties must be lower case
        [
            "subdomain",
            "defaultHostname",
            "internalUrl",
            "customHostname",
            "externalUrl",
        ].forEach(function (prop) {
            if (clone.data.values[prop] &&
                typeof clone.data.values[prop] === "string") {
                clone.data.values[prop] = clone.data.values[prop].toLowerCase();
            }
        });
        // bump the schemaVersion
        clone.item.properties.schemaVersion = 1.1;
        return clone;
    }

    /**
     * Move the data.values.groups array into the
     * data.catalog object
     * @param {Object} model Site Model
     * @private
     */
    function _ensureCatalog(model) {
        // early exit
        if (getProp(model, "item.properties.schemaVersion") >= 1.2)
            return model;
        var clone = cloneObject$1(model);
        var catalog = getProp(clone, "data.catalog") || {};
        if (getProp(clone, "data.values.groups")) {
            catalog.groups = cloneObject$1(clone.data.values.groups);
            delete clone.data.values.groups;
        }
        clone.data.catalog = catalog;
        // bump the schemaVersion
        clone.item.properties.schemaVersion = 1.2;
        return clone;
    }

    /**
     * Remove any non-guid entries from the data catalog groups array
     * @param {object} model Site Model
     * @private
     */
    function _purgeNonGuidsFromCatalog(model) {
        if (getProp(model, "item.properties.schemaVersion") >= 1.3)
            return model;
        var clone = cloneObject$1(model);
        var groups = getProp(clone, "data.catalog.groups") || [];
        clone.data.catalog.groups = groups.filter(isGuid);
        clone.item.properties.schemaVersion = 1.3;
        return clone;
    }

    /**
     * Migrates the site so it can store configurations for multiple feed formats
     * (dcat-us-1.1, dcat-ap-2.0.1, etc.). If the site has an existing custom
     * configuration for dcat-us 1.1, a copy of that configuration will be modified
     * to use values from the v3 api instead of values from the index.
     *
     * Structural Impacts:
     * - site.data.feeds will be added.
     * - site.data.feeds.dcatUS11 will be added if site.data.values.dcatConfig exists.
     *
     * @param {object} model Site Model
     * @private
     */
    function _migrateFeedConfig(model) {
        if (getProp(model, "item.properties.schemaVersion") >= 1.5)
            return model;
        var clone = cloneObject$1(model);
        var oldDcatUS11Config = clone.data.values.dcatConfig;
        clone.data.feeds = {};
        if (oldDcatUS11Config) {
            clone.data.feeds.dcatUS11 = _migrateToV3Values(oldDcatUS11Config);
        }
        clone.item.properties.schemaVersion = 1.5;
        return clone;
    }
    var indexValueToV3Value = {
        // Defaults
        "{{default.name}}": "{{name}}",
        "{{default.description}}": "{{description}}",
        "{{item.tags}}": "{{tags}}",
        "{{item.created:toISO}}": "{{created:toISO}}",
        "{{item.modified:toISO}}": "{{modified:toISO}}",
        "{{default.source.source}}": "{{source}}",
        "{{item.owner}}": "{{owner}}",
        "{{org.portalProperties.links.contactUs.url}}": "{{orgContactEmail}}",
        // Custom Values
        "{{org.name}}": "{{orgName}}",
        "{{item.categories}}": "{{categories}}",
        "{{item.licenseInfo}}": "{{licenseInfo}}",
        "{{item.modified}}": "{{modified}}",
        "{{enrichments.categories}}": "{{categories}}",
        "{{default.id}}": "{{id}}",
        "{{item.licenseInfo || No License}}": "{{licenseInfo || No License}}",
        "{{org.portalProperties.links.contactUs.url || mailto:data@tempe.gov}}": "{{orgContactEmail || mailto:data@tempe.gov}}",
        "{{default.description || No Description}}": "{{description || No Description}}",
        "{{item.id}}": "{{id}}",
    };
    function _migrateToV3Values(originalConfig) {
        var migratedConfigString = JSON.stringify(originalConfig);
        var supportedIndexValues = Object.keys(indexValueToV3Value);
        supportedIndexValues.forEach(function (indexValue) {
            // Replace all occurrences of indexValue with the corresponding v3Value
            var v3Value = indexValueToV3Value[indexValue];
            migratedConfigString = migratedConfigString.split(indexValue).join(v3Value);
        });
        return JSON.parse(migratedConfigString);
    }

    /**
     * Upgrades the schema upgrades
     * @param model IModel
     */
    function upgradeSiteSchema(model) {
        if (getProp(model, "item.properties.schemaVersion") === SITE_SCHEMA_VERSION) {
            return model;
        }
        else {
            // apply upgrade functions in order...
            model = _applySiteSchema(model);
            model = _enforceLowercaseDomains(model);
            model = _ensureCatalog(model);
            model = _purgeNonGuidsFromCatalog(model);
            model = _ensureTelemetry(model);
            model = _migrateFeedConfig(model);
            // WARNING - If you are writing a site schema migration,
            // you probably need to apply it to site drafts as well!
            // See https://github.com/Esri/hub.js/issues/498 for more details.
            return model;
        }
    }

    /**
     * @private
     * Portal Search Implementation for Items
     * @param query
     * @param options
     * @returns
     */
    function portalSearchItems(query, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var updatedQuery, so, props;
            return __generator(this, function (_b) {
                if (!options.requestOptions) {
                    throw new HubError$1("portalSearchItems", "options.requestOptions is required.");
                }
                // Expand well-known filterGroups
                debugger;
                updatedQuery = applyWellKnownItemPredicates(query);
                // Expand the individual predicates in each filter
                updatedQuery.filters = updatedQuery.filters.map(function (filter) {
                    filter.predicates = filter.predicates.map(expandPredicate);
                    return filter;
                });
                debugger;
                so = serializeQueryForPortal(updatedQuery);
                props = [
                    "num",
                    "sortField",
                    "sortOrder",
                    "include",
                    "start",
                    "requestOptions",
                ];
                // copy the props over
                props.forEach(function (prop) {
                    if (options.hasOwnProperty(prop)) {
                        so[prop] = options[prop];
                    }
                });
                if (options.requestOptions.authentication) {
                    so.authentication = options.requestOptions.authentication;
                }
                else {
                    so.portal = options.requestOptions.portal;
                }
                // Aggregations
                if ((_a = options.aggFields) === null || _a === void 0 ? void 0 : _a.length) {
                    so.countFields = options.aggFields.join(",");
                    so.countSize = options.aggLimit || 10;
                }
                return [2 /*return*/, searchPortal$2(so)];
            });
        });
    }
    /**
     * Internal portal search, which then converts `IItem`s to `IHubSearchResult`s
     * handling enrichments & includes along the way
     *
     * @param searchOptions
     * @returns
     */
    function searchPortal$2(searchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, fn, results, facets, aggregations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, searchItems(searchOptions)];
                    case 1:
                        resp = _a.sent();
                        fn = function (item) {
                            return itemToSearchResult(item, searchOptions.includes, searchOptions.requestOptions);
                        };
                        return [4 /*yield*/, Promise.all(resp.results.map(fn))];
                    case 2:
                        results = _a.sent();
                        facets = convertPortalItemResponseToFacets(resp);
                        aggregations = convertPortalAggregations(resp);
                        // Construct the return
                        return [2 /*return*/, {
                                total: resp.total,
                                results: results,
                                facets: facets,
                                aggregations: aggregations,
                                hasNext: resp.nextStart > -1,
                                next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal$2),
                            }];
                }
            });
        });
    }
    /**
     * Convert an `IItem` to a `IHubSearchResult`
     * Fetches the enrichments, and attaches them as directed in the `include` list
     * @param item
     * @param includes
     * @param requestOptions
     * @returns
     */
    function itemToSearchResult(item, includes, requestOptions) {
        if (includes === void 0) { includes = []; }
        return __awaiter(this, void 0, void 0, function () {
            var fn;
            return __generator(this, function (_a) {
                fn = enrichContentSearchResult;
                switch (item.type) {
                    case "Hub Site Application":
                    case "Site Application":
                        fn = enrichSiteSearchResult;
                        break;
                    case "Hub Page":
                    case "Site Page":
                        fn = enrichPageSearchResult;
                        break;
                    case "Hub Project":
                        fn = enrichProjectSearchResult;
                        break;
                }
                return [2 /*return*/, fn(item, includes, requestOptions)];
            });
        });
    }
    var WellKnownItemFilters = {
        $application: [
            {
                filterType: "item",
                type: {
                    any: [
                        "Web Mapping Application",
                        "Application",
                        "Insights",
                        "Web Experience",
                    ],
                    not: ["Insights Theme", "Insights Model"],
                },
                typekeywords: {
                    not: ["hubSite", "Story Map"],
                },
            },
            {
                filterType: "item",
                type: "Web Mapping Experience",
                typekeywords: "EXB Experience",
            },
        ],
        $dashboard: [
            {
                filterType: "item",
                type: {
                    any: ["Dashboard"],
                    not: ["Operation View"],
                },
                typekeywords: {
                    not: ["Extension", "ArcGIS Operation View"],
                },
            },
        ],
        $dataset: [
            {
                filterType: "item",
                type: {
                    any: [
                        "Scene Service",
                        "Feature Collection",
                        "Route Layer",
                        "Layer",
                        "Explorer Layer",
                        "Tile Package",
                        "Vector Tile Package",
                        "Scene Package",
                        "Layer Package",
                        "Feature Service",
                        "Stream Service",
                        "Map Service",
                        "Vector Tile Service",
                        "Image Service",
                        "WMS",
                        "WFS",
                        "WMTS",
                        "KML",
                        "KML Collection",
                        "Globe Service",
                        "CSV",
                        "Shapefile",
                        "GeoJson",
                        "Service Definition",
                        "File Geodatabase",
                        "CAD Drawing",
                        "Relational Database Connection",
                    ],
                    not: ["Web Mapping Application", "Geodata Service"],
                },
            },
            {
                filterType: "item",
                typekeywords: ["OGC", "Geodata Service"],
            },
        ],
        $document: [
            {
                filterType: "item",
                type: [
                    "PDF",
                    "Microsoft Excel",
                    "Microsoft Word",
                    "Microsoft Powerpoint",
                    "iWork Keynote",
                    "iWork Pages",
                    "iWork Numbers",
                    "Visio Document",
                    "Document Link",
                ],
            },
        ],
        $initiative: [
            {
                filterType: "item",
                type: "Hub Initiative",
            },
        ],
        $experience: [
            {
                filterType: "item",
                type: "Web Experience",
            },
        ],
        $feedback: [
            {
                filterType: "item",
                type: "Form",
            },
        ],
        $page: [
            {
                filterType: "item",
                typekeywords: "hubPage",
            },
        ],
        $site: [
            {
                filterType: "item",
                type: ["Hub Site Application", "Site Application"],
            },
        ],
        $storymap: [
            {
                filterType: "item",
                type: "Storymap",
            },
            {
                filterType: "item",
                type: "Web Mapping Application",
                typekeywords: "Story Map",
            },
        ],
        $template: [
            {
                filterType: "item",
                type: [
                    "Web Mapping Application",
                    "Hub Initiative",
                    "Hub Initiative Template",
                    "Solution",
                ],
                typekeywords: {
                    any: ["hubInitiativeTemplate", "hubSolutionTemplate", "Template"],
                    not: "Deployed",
                },
            },
        ],
        $webmap: [
            {
                filterType: "item",
                type: {
                    any: ["Web Map", "Web Scene"],
                    not: "Web Mapping Application",
                },
            },
        ],
    };
    /**
     * @private
     * Convert a Filter Group to expand well-known type filters
     *
     * The purpose of this function is to allow for the use of short-hand
     * names for commonly used, complex queries.
     *
     * It works by looking for filters using the .type property, the value
     * of which is a key in the WellKnownItemFilters hash. If found in the
     * hash, the filters array of the active filterGroup is replaced with the
     * filters specified in the hash.
     *
     * NOTE: Any other properties specified in a filter will be removed
     *
     * Only exported to enable extensive testing
     * @param filterGroups
     */
    function applyWellKnownItemPredicates(query) {
        var queryClone = cloneObject$1(query);
        // iterate the filters
        queryClone.filters = queryClone.filters.map(function (filter) {
            // replace predicates with well-known types
            var replacedPredicates = false;
            filter.predicates = filter.predicates.reduce(function (acc, predicate) {
                // if the predicate has a well-known type
                // we replace it with the set of predicates defined
                // for the well-known type
                if (isWellKnownTypeFilter(predicate.type)) {
                    var replacements = lookupTypePredicates(predicate.type);
                    acc = __spreadArrays(acc, replacements);
                    replacedPredicates = true;
                }
                else {
                    // this predicate does not have a well-known type
                    // so we just keep it
                    acc.push(predicate);
                }
                return acc;
            }, []);
            if (replacedPredicates) {
                // Any filter who's predicates were replaced with
                // well-known predicates, needs to use "OR" to ensure
                // correct query logic
                filter.operation = "OR";
            }
            return filter;
        });
        return queryClone;
    }
    /**
     * Is the argument a well-known type "key"
     *
     * Accepts `string`, `string[]` or `IMatchOptions`
     * but only string values can possibly be keys
     * on `WellKnownItemFilters`
     * @param key
     * @returns
     */
    function isWellKnownTypeFilter(key) {
        var result = false;
        if (typeof key === "string") {
            result = key in WellKnownItemFilters;
        }
        return result;
    }
    /**
     * Return the predicates for a well-known type
     * @param key
     * @returns
     */
    function lookupTypePredicates(key) {
        var rawPredicates = WellKnownItemFilters[key];
        // Remove the filterType property as it's not needed in an IPredicate
        var predicates = rawPredicates.map(function (entry) {
            var c = cloneObject$1(entry);
            delete c.filterType;
            return c;
        });
        return predicates;
    }

    // ##    ##  #######  ######## ########
    // ###   ## ##     ##    ##    ##
    // ####  ## ##     ##    ##    ##
    // ## ## ## ##     ##    ##    ######
    // ##  #### ##     ##    ##    ##
    // ##   ### ##     ##    ##    ##
    // ##    ##  #######     ##    ########
    //
    // Since Hub API is still in flux, there is no code coverage for this file
    /**
     * @private
     * Execute item search against the Hub API
     * @param filter
     * @param options
     * @returns
     */
    /* istanbul ignore next */
    function hubSearchItems(filters, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var api, apiUrl, cleanFilters, searchRequest, aggs, session, opts, raw, json, token_1, us, tokenizeThubmnailUrl, conversion, results, facets, response, ex_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        api = expandApi(options.api || "hub");
                        apiUrl = api.url + "/api/items/beta/search";
                        cleanFilters = [];
                        filters.forEach(function (block) {
                            var b = {
                                operation: block.operation,
                                filters: block.filters.map(function (f) {
                                    var c = cloneObject$1(f);
                                    delete c.filterType;
                                    return c;
                                }),
                            };
                            cleanFilters.push(b);
                        });
                        searchRequest = {
                            q: cleanFilters,
                            options: {
                                num: options.num || 10,
                                start: options.start || 1,
                                sortField: options.sortField,
                                sortOrder: options.sortOrder,
                            },
                        };
                        // Add optional props via setProp b/c typescript really does not like
                        // adding properties after defining an object
                        if ((_a = options.aggFields) === null || _a === void 0 ? void 0 : _a.length) {
                            aggs = [
                                {
                                    mode: "terms",
                                    fields: options.aggFields,
                                    num: options.aggLimit || 10,
                                },
                            ];
                            setProp("aggregations", aggs, searchRequest.options);
                        }
                        if (options.authentication) {
                            session = {
                                token: options.authentication.token,
                                portal: options.authentication.portal,
                            };
                            setProp("session", session, searchRequest.options);
                        }
                        opts = {
                            method: "POST",
                            mode: "cors",
                            cache: "no-cache",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(searchRequest),
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, fetch(apiUrl, opts)];
                    case 2:
                        raw = _b.sent();
                        return [4 /*yield*/, raw.json()];
                    case 3:
                        json = _b.sent();
                        if (options.authentication) {
                            us = options.authentication;
                            token_1 = us.token;
                        }
                        tokenizeThubmnailUrl = function (entry) {
                            if (token_1 && entry.attributes.access !== "public") {
                                entry.attributes.thumbnailUrl = entry.attributes.thumbnailUrl + "?token=" + token_1;
                            }
                            return entry;
                        };
                        json.data = json.data.map(tokenizeThubmnailUrl);
                        conversion = function (entry) {
                            return hubContentToSearchResult(jsonApiToHubContent(entry));
                        };
                        return [4 /*yield*/, Promise.all(json.data.map(conversion))];
                    case 4:
                        results = _b.sent();
                        facets = convertHubResponseToFacets(json);
                        response = {
                            total: json.meta.total,
                            results: results,
                            facets: facets,
                            hasNext: json.meta.hasNext,
                            next: function () {
                                // tslint:disable-next-line
                                Promise.resolve(null);
                            },
                        };
                        return [2 /*return*/, Promise.resolve(response)];
                    case 5:
                        ex_1 = _b.sent();
                        // TODO: Turn into a formal error
                        throw ex_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Re-structure a jsonApi data entry into a flat object cast into
     * IHubContent
     * @param data
     * @returns
     */
    /* istanbul ignore next */
    function jsonApiToHubContent(data) {
        var content = cloneObject$1(data.attributes);
        content.id = data.id;
        return content;
    }
    /* istanbul ignore next */
    function hubContentToSearchResult(content) {
        var result = {
            access: content.access,
            id: content.id,
            type: content.type,
            name: content.name,
            owner: content.owner,
            summary: content.snippet || content.description,
            createdDate: new Date(content.createdDate),
            createdDateSource: content.createdDateSource,
            updatedDate: new Date(content.updatedDate),
            updatedDateSource: content.updatedDateSource,
            thumbnailUrl: content.thumbnailUrl,
            metadata: [],
            family: content.family,
            urls: {
                portalHome: "not-implemented",
                relative: "not-implemented",
            },
        };
        // TODO: Per-type plucking of props into the `meta` hash for use in the card components
        return Promise.resolve(result);
    }
    /* istanbul ignore next */
    function convertHubResponseToFacets(response, operation) {
        var _a;
        if (operation === void 0) { operation = "OR"; }
        var result = [];
        if ((_a = response.meta) === null || _a === void 0 ? void 0 : _a.aggregations) {
            var meta = response.meta;
            meta.aggregations.forEach(function (entry) {
                // Dyanmic facets typically "AND" so we are refining
                var facet = {
                    label: entry.field,
                    key: entry.field,
                    aggField: entry.field,
                    display: "multi-select",
                    operation: operation,
                };
                var options = [];
                entry.values.forEach(function (fv) {
                    var filter = {
                        filterType: "item",
                    };
                    // construct the filter based on the operation
                    var matchKey = operation === "OR" ? "any" : "all";
                    var filterMatchOption = {};
                    filterMatchOption[matchKey] = [fv.value];
                    filter[entry.field] = filterMatchOption;
                    // construct the FacetOption
                    var fo = {
                        label: fv.value + " (" + fv.count + ")",
                        key: fv.value,
                        count: fv.count,
                        selected: false,
                        filters: [filter],
                    };
                    options.push(fo);
                });
                facet.options = options;
                result.push(facet);
            });
        }
        return result;
    }

    /**
     * @private
     * Portal Search Implementation for Groups
     * @param query
     * @param options
     * @returns
     */
    function portalSearchGroups(query, options) {
        return __awaiter(this, void 0, void 0, function () {
            var so, props;
            return __generator(this, function (_a) {
                if (!options.requestOptions) {
                    throw new HubError$1("portalSearchGroups", "options.requestOptions is required.");
                }
                // Expand the individual predicates in each filter
                query.filters = query.filters.map(function (filter) {
                    filter.predicates = filter.predicates.map(expandPredicate);
                    return filter;
                });
                so = serializeQueryForPortal(query);
                props = [
                    "num",
                    "sortField",
                    "sortOrder",
                    "include",
                    "start",
                    "requestOptions",
                ];
                // copy the props over
                props.forEach(function (prop) {
                    if (options.hasOwnProperty(prop)) {
                        so[prop] = options[prop];
                    }
                });
                // If we don't have auth, ensure we have .portal
                if (options.requestOptions.authentication) {
                    so.authentication = options.requestOptions.authentication;
                }
                else {
                    so.portal = options.requestOptions.portal;
                }
                return [2 /*return*/, searchPortal$1(so)];
            });
        });
    }
    /**
     * Internal portal search, which then converts `IGroup`s to `IHubSearchResult`s
     * handling enrichments & includes along the way
     *
     * @param searchOptions
     * @returns
     */
    function searchPortal$1(searchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, fn, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, searchGroups(searchOptions)];
                    case 1:
                        resp = _a.sent();
                        fn = function (item) {
                            return groupToSearchResult(item, searchOptions.include, searchOptions.requestOptions);
                        };
                        return [4 /*yield*/, Promise.all(resp.results.map(fn))];
                    case 2:
                        results = _a.sent();
                        // Group Search does not support aggregations
                        // Construct the return
                        return [2 /*return*/, {
                                total: resp.total,
                                results: results,
                                facets: [],
                                hasNext: resp.nextStart > -1,
                                next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal$1),
                            }];
                }
            });
        });
    }
    /**
     * Convert an Item to a IHubSearchResult
     * Fetches the includes and attaches them to the item
     * @param item
     * @param includes
     * @param requestOptions
     * @returns
     */
    function groupToSearchResult(group, includes, requestOptions) {
        if (includes === void 0) { includes = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Delegate to HubGroups module
                // This layer of indirection is not necessary but
                // aligns with how the items search works and
                // allows for future specialization
                return [2 /*return*/, enrichGroupSearchResult(group, includes, requestOptions)];
            });
        });
    }

    /**
     * @private
     * Portal Search Implementation for Users
     * @param filterGroups
     * @param options
     * @returns
     */
    function portalSearchUsers(query, options) {
        return __awaiter(this, void 0, void 0, function () {
            var so, props;
            return __generator(this, function (_a) {
                // requestOptions is always required and user must be authd
                if (!options.requestOptions) {
                    throw new HubError$1("portalSearchUsers", "requestOptions: IHubRequestOptions is required.");
                }
                if (!options.requestOptions.authentication) {
                    throw new HubError$1("portalSearchUsers", "requestOptions must pass authentication.");
                }
                // Expand the individual predicates in each filter
                query.filters = query.filters.map(function (filter) {
                    filter.predicates = filter.predicates.map(expandPredicate);
                    return filter;
                });
                so = serializeQueryForPortal(query);
                props = [
                    "num",
                    "sortField",
                    "sortOrder",
                    "include",
                    "start",
                    "requestOptions",
                ];
                // copy the props over
                props.forEach(function (prop) {
                    if (options.hasOwnProperty(prop)) {
                        so[prop] = options[prop];
                    }
                });
                // Unlike Groups and Item, the Users api *requires* authentication
                // so we set it directly
                so.authentication = options.requestOptions.authentication;
                // Execute search
                return [2 /*return*/, searchPortal(so)];
            });
        });
    }
    /**
     * Internal portal search, which then converts `IGroup`s to `IHubSearchResult`s
     * handling enrichments & includes along the way
     *
     * @param searchOptions
     * @returns
     */
    function searchPortal(searchOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, fn, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, searchUsers(searchOptions)];
                    case 1:
                        resp = _a.sent();
                        fn = function (user) {
                            return userToSearchResult(user, searchOptions.include, searchOptions.requestOptions);
                        };
                        return [4 /*yield*/, Promise.all(resp.results.map(fn))];
                    case 2:
                        results = _a.sent();
                        // Group Search does not support aggregations
                        // Construct the return
                        return [2 /*return*/, {
                                total: resp.total,
                                results: results,
                                facets: [],
                                hasNext: resp.nextStart > -1,
                                next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
                            }];
                }
            });
        });
    }
    /**
     * Convert an Item to a IHubSearchResult
     * Fetches the includes and attaches them to the item
     * @param item
     * @param includes
     * @param requestOptions
     * @returns
     */
    function userToSearchResult(user, includes, requestOptions) {
        if (includes === void 0) { includes = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Delegate to HubGroups module
                // This layer of indirection is not necessary but
                // aligns with how the items search works and
                // allows for future specialization
                return [2 /*return*/, enrichUserSearchResult(user, includes, requestOptions)];
            });
        });
    }

    /**
     * @private
     * TEMPORARY - this function only exists to allow incremental
     * changes and should be removed as soon as arcgis-hub-gallery
     * is changed to call `hubSearch(...)` directly
     *
     * Default's to search ArcGIS Portal but can delegate
     * to Hub API when it's available.
     * @param filterGroups
     * @param options
     * @returns
     */
    function hubSearchQuery(query, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // delegate
                return [2 /*return*/, hubSearch(query, options)];
            });
        });
    }
    /**
     * Main entrypoint for searching via Hub
     *
     * Default's to search ArcGIS Portal but can delegate
     * to Hub API when it's available.
     * @param query
     * @param options
     * @returns
     */
    function hubSearch(query, options) {
        return __awaiter(this, void 0, void 0, function () {
            var filterType, apiType, fnHash, fn;
            return __generator(this, function (_a) {
                // Validate inputs
                if (!query) {
                    throw new HubError$1("hubSearch", "Query is required.");
                }
                if (!query.filters || !query.filters.length) {
                    throw new HubError$1("hubSearch", "Query must contain at least one Filter.");
                }
                if (!options.requestOptions) {
                    throw new HubError$1("hubSearch", "requestOptions: IHubRequestOptions is required.");
                }
                // Ensure includes is an array
                if (!options.include) {
                    options.include = [];
                }
                filterType = query.targetEntity;
                apiType = expandApi(options.api || "arcgis").type;
                fnHash = {
                    arcgis: {
                        item: portalSearchItems,
                        group: portalSearchGroups,
                        user: portalSearchUsers,
                    },
                    "arcgis-hub": {
                        item: hubSearchItems,
                    },
                };
                fn = getProp(fnHash, apiType + "." + filterType);
                if (!fn) {
                    throw new HubError$1("hubSearch", "Search via \"" + filterType + "\" filter against \"" + apiType + "\" api is not implemented. Please ensure \"targetEntity\" is defined on the query.");
                }
                return [2 /*return*/, fn(cloneObject$1(query), options)];
            });
        });
    }

    /**
     * Collection Class
     *
     * Abstracts searching a Collection
     *
     * For more information, check out the [Catalog & Collection Guide](/hub.js/guides/concepts/catalog-collection/)
     */
    var Collection = /** @class */ (function () {
        function Collection(collection, context) {
            this._collection = collection;
            this._context = context;
        }
        /**
         * Create an instance of a Collection from a JSON object
         * @param collection
         * @param context
         * @returns
         */
        Collection.fromJson = function (collection, context) {
            return new Collection(collection, context);
        };
        /**
         * Return the JSON object backing the instance
         * @returns
         */
        Collection.prototype.toJson = function () {
            return cloneObject$1(this._collection);
        };
        Object.defineProperty(Collection.prototype, "label", {
            // Getters
            get: function () {
                return this._collection.label;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "key", {
            get: function () {
                return this._collection.key;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "include", {
            get: function () {
                return this._collection.include || [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "scope", {
            get: function () {
                return this._collection.scope;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "sortField", {
            get: function () {
                return this._collection.sortField || "title";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "sortDirection", {
            get: function () {
                return this._collection.sortDirection || "asc";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Collection.prototype, "targetEntity", {
            get: function () {
                return this._collection.targetEntity;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Search the collection using a string or IQuery
         * @param query
         * @param options
         * @returns
         */
        Collection.prototype.search = function (query, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var qry, opts;
                return __generator(this, function (_a) {
                    if (typeof query === "string") {
                        // construct a query from that...
                        qry = {
                            targetEntity: this._collection.targetEntity,
                            filters: [
                                {
                                    predicates: [
                                        {
                                            term: query,
                                        },
                                    ],
                                },
                            ],
                        };
                    }
                    else {
                        qry = query;
                    }
                    // TODO: What should happen when a Query is passed in that has a targetEntity that doesn't match the collection's targetEntity?
                    // merge the passed in query w/ the scope
                    qry.filters = __spreadArrays(qry.filters, this.scope.filters);
                    opts = cloneObject$1(options);
                    opts.requestOptions = this._context.hubRequestOptions;
                    // inject default sort info if not specified
                    opts.sortField = options.sortField || this.sortField;
                    opts.sortOrder = options.sortOrder || this.sortDirection;
                    // inject default includes if not specified
                    opts.include = options.include || this.include;
                    // execute the search and return results
                    return [2 /*return*/, hubSearch(qry, opts)];
                });
            });
        };
        return Collection;
    }());

    /**
     * Fetch a IHubCatalog from a backing item.
     * This will apply schema upgrades to the structure
     * @param identifier
     * @param requestOptions
     * @returns
     */
    function fetchCatalog(identifier, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var getPrms, url, fetched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // identifier can be a guid or a url
                        if (identifier.indexOf("http") === 0) {
                            url = identifier;
                            // get down the the hostname
                            url = stripProtocol(url);
                            // if url does not include a hash (i.e. it's not portal)
                            // then we want to split on the first slash to get the hostname
                            // lookupDomain will handle the enterprise base urls
                            if (!url.includes("#")) {
                                url = url.split("/")[0];
                            }
                            getPrms = lookupDomain(url, requestOptions)
                                // get the item's data, and read the catalog out of it
                                .then(function (_a) {
                                var siteId = _a.siteId;
                                return getItemData(siteId, requestOptions);
                            })
                                .then(function (data) {
                                return upgradeCatalogSchema(data.catalog || {});
                            });
                        }
                        else if (isGuid(identifier)) {
                            // get the item's data, and read the catalog out of it
                            getPrms = getItemData(identifier, requestOptions).then(function (data) {
                                return upgradeCatalogSchema(data.catalog || {});
                            });
                        }
                        else {
                            throw new HubError$1("Catalog.create", "Identifier must be a url, guid");
                        }
                        return [4 /*yield*/, getPrms];
                    case 1:
                        fetched = _a.sent();
                        return [2 /*return*/, fetched];
                }
            });
        });
    }

    /**
     * Catalog Class
     *
     * Abstracts working with Catalogs and fetching collections with
     * the correct scope applied.
     *
     * For more information, check out the [Catalog & Collection Guide](/hub.js/guides/concepts/catalog-collection/)
     */
    var Catalog = /** @class */ (function () {
        // internal - use static factory methods
        function Catalog(catalog, context) {
            this._catalog = catalog;
            this._context = context;
        }
        /**
         * Create a Collection instance from a Catalog json object, a site url or itemId
         * '''js
         * const catalog = await Catalog.create('https://site-org.hub.arcgis.com', context);
         * '''
         *
         * @param identifier
         * @param context
         * @returns
         */
        Catalog.init = function (identifier, context) {
            return __awaiter(this, void 0, void 0, function () {
                var mgr, fetched;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!context) return [3 /*break*/, 2];
                            return [4 /*yield*/, ArcGISContextManager.create()];
                        case 1:
                            mgr = _a.sent();
                            context = mgr.context;
                            _a.label = 2;
                        case 2: return [4 /*yield*/, fetchCatalog(identifier, context.hubRequestOptions)];
                        case 3:
                            fetched = _a.sent();
                            // return an instance
                            return [2 /*return*/, new Catalog(fetched, context)];
                    }
                });
            });
        };
        /**
         * Create a Catalog instance from a Catalog Json object
         * @param json
         * @param context
         * @returns
         */
        Catalog.fromJson = function (json, context) {
            // ensure it's in the latest structure
            var catalog = upgradeCatalogSchema(json);
            return new Catalog(catalog, context);
        };
        /**
         * Return the JSON object backing the instance
         * @returns
         */
        Catalog.prototype.toJson = function () {
            return cloneObject$1(this._catalog);
        };
        Object.defineProperty(Catalog.prototype, "schemaVersion", {
            /**
             * Return the schema version
             */
            get: function () {
                return this._catalog.schemaVersion;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Catalog.prototype, "title", {
            /**
             * Title getter
             */
            get: function () {
                return this._catalog.title;
            },
            /**
             * Title setter
             */
            set: function (v) {
                this._catalog.title = v;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Catalog.prototype, "scopes", {
            /**
             * Return the existing scopes hash
             */
            get: function () {
                return this._catalog.scopes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Catalog.prototype, "availableScopes", {
            /**
             * Return an array of the entity types available in this Catalog
             */
            get: function () {
                return Object.keys(this.scopes);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Get the scope's query for a particular entity type
         * @param type
         * @returns
         */
        Catalog.prototype.getScope = function (type) {
            return this._catalog.scopes[type];
        };
        /**
         * Set the scope for a specific entity type
         * @param type
         * @param query
         */
        Catalog.prototype.setScope = function (type, query) {
            this._catalog.scopes[type] = query;
        };
        Object.defineProperty(Catalog.prototype, "collections", {
            /**
             * Get the collections array. Returns simple objects not Collection instances
             */
            get: function () {
                return this._catalog.collections || [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Catalog.prototype, "collectionNames", {
            /**
             * Get the names of the collections
             */
            get: function () {
                return mapBy("key", this.collections);
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Get a Collection instance by name
         * @param name
         * @returns
         */
        Catalog.prototype.getCollection = function (name) {
            var json = this.collections.find(function (entry) { return entry.key === name; });
            if (json) {
                // clone it then merge in the associated scope filter
                var clone = cloneObject$1(json);
                var catalogScope = this.getScope(clone.scope.targetEntity);
                if (catalogScope === null || catalogScope === void 0 ? void 0 : catalogScope.filters) {
                    clone.scope.filters = __spreadArrays(clone.scope.filters, catalogScope.filters);
                }
                return Collection.fromJson(clone, this._context);
            }
            else {
                throw new HubError$1("getCollection", "Collection \"" + name + "\" is not present in the Catalog");
            }
        };
        /**
         * Search for Items
         * Will throw if the Catalog does not have a scope defined for items
         * @param query
         * @param options
         * @returns
         */
        Catalog.prototype.searchItems = function (query, options) {
            if (options === void 0) { options = {}; }
            if (!this.getScope("item")) {
                var result = this.getEmptyResult();
                result.messages = [
                    {
                        code: "missingScope",
                        message: "Catalog does not have a scope for items",
                        data: {
                            scope: "item",
                        },
                    },
                ];
                return Promise.resolve(result);
            }
            else {
                // ensure it's an item search
                options.targetEntity = "item";
                return this.search(query, options);
            }
        };
        /**
         * Search for Groups
         * Will throw if the Catalog does not have a scope defined for groups
         * @param query
         * @param options
         * @returns
         */
        Catalog.prototype.searchGroups = function (query, options) {
            if (options === void 0) { options = {}; }
            if (!this.getScope("group")) {
                var result = this.getEmptyResult();
                result.messages = [
                    {
                        code: "missingScope",
                        message: "Catalog does not have a scope for groups",
                        data: {
                            scope: "group",
                        },
                    },
                ];
                return Promise.resolve(result);
            }
            else {
                // ensure it's an group search
                options.targetEntity = "group";
                return this.search(query, options);
            }
        };
        /**
         * Search for Users
         * Will throw if the Catalog does not have a scope defined for users
         * @param query
         * @param options
         * @returns
         */
        Catalog.prototype.searchUsers = function (query, options) {
            if (options === void 0) { options = {}; }
            if (!this.getScope("user")) {
                var result = this.getEmptyResult();
                result.messages = [
                    {
                        code: "missingScope",
                        message: "Catalog does not have a scope for user",
                        data: {
                            scope: "user",
                        },
                    },
                ];
                return Promise.resolve(result);
            }
            else {
                // ensure it's an group search
                options.targetEntity = "user";
                return this.search(query, options);
            }
        };
        /**
         * Execute a search against all the collections in the Catalog
         * @param query
         * @param options
         * @returns
         */
        Catalog.prototype.searchCollections = function (query, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var qry, promiseKeys, promises, responses, hash, i;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            qry = {
                                targetEntity: "item",
                                filters: [
                                    {
                                        predicates: [
                                            {
                                                term: query,
                                            },
                                        ],
                                    },
                                ],
                            };
                            promiseKeys = [];
                            promises = this.collectionNames.map(function (name) {
                                var col = _this.getCollection(name);
                                promiseKeys.push(name);
                                qry.targetEntity = col.targetEntity;
                                return col.search(qry, options);
                            });
                            return [4 /*yield*/, Promise.all(promises)];
                        case 1:
                            responses = _a.sent();
                            hash = {};
                            for (i = 0; i < promiseKeys.length; i++) {
                                hash[promiseKeys[i]] = responses[i];
                            }
                            return [2 /*return*/, hash];
                    }
                });
            });
        };
        /**
         * Execute a search against all the scopes in the Catalog
         * @param query
         * @param options
         * @returns
         */
        Catalog.prototype.searchScopes = function (query, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var qry, promiseKeys, promises, responses, hash, i;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            qry = {
                                targetEntity: "item",
                                filters: [
                                    {
                                        predicates: [
                                            {
                                                term: query,
                                            },
                                        ],
                                    },
                                ],
                            };
                            promiseKeys = [];
                            promises = this.availableScopes.map(function (name) {
                                promiseKeys.push(name);
                                // make clones
                                var qryClone = cloneObject$1(qry);
                                var optsClone = cloneObject$1(options);
                                // set the target entity
                                qryClone.targetEntity = name;
                                optsClone.targetEntity = name;
                                // return the search promise
                                return _this.search(qryClone, optsClone);
                            });
                            return [4 /*yield*/, Promise.all(promises)];
                        case 1:
                            responses = _a.sent();
                            hash = {};
                            for (i = 0; i < promiseKeys.length; i++) {
                                hash[promiseKeys[i]] = responses[i];
                            }
                            return [2 /*return*/, hash];
                    }
                });
            });
        };
        /**
         * Execute a search against the Catalog as a whole
         * @param query
         * @param targetEntity
         * @returns
         */
        Catalog.prototype.search = function (query, options) {
            var targetEntity = options.targetEntity;
            var qry;
            if (typeof query === "string") {
                qry = {
                    targetEntity: targetEntity,
                    filters: [
                        {
                            predicates: [
                                {
                                    term: query,
                                },
                            ],
                        },
                    ],
                };
            }
            else {
                qry = cloneObject$1(query);
            }
            // Now merge in catalog scope level filters
            qry.filters = __spreadArrays(qry.filters, this.getScope(targetEntity).filters);
            var opts = cloneObject$1(options);
            // An Catalog instance always uses the context so we remove/replace any passed in auth
            delete opts.authentication;
            opts.requestOptions = this._context.hubRequestOptions;
            return hubSearch(qry, opts);
        };
        /**
         * Construct an empty result. Returned when a search is performed against an entity type that
         * does not have a scope defined.
         * @returns
         */
        Catalog.prototype.getEmptyResult = function () {
            return {
                results: [],
                total: 0,
                hasNext: false,
                next: null,
            };
        };
        return Catalog;
    }());

    /**
     * Enrich a generic search result
     * @param group
     * @param includes
     * @param requestOptions
     * @returns
     */
    function enrichGroupSearchResult(group, include, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var result, DEFAULTS, specs, enrichments, enriched;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            access: group.access,
                            id: group.id,
                            type: "Group",
                            name: group.title,
                            owner: group.owner,
                            summary: group.snippet || group.description,
                            createdDate: new Date(group.created),
                            createdDateSource: "group.created",
                            updatedDate: new Date(group.modified),
                            updatedDateSource: "group.modified",
                            family: "team",
                            links: {
                                self: "not-implemented",
                                siteRelative: "not-implemented",
                                thumbnail: "not-implemented",
                            },
                        };
                        // Informal Enrichments - basically adding type-specific props
                        // derived directly from the entity
                        result.isSharedUpdate = (group.capabilities || []).includes("updateitemcontrol");
                        result.membershipAccess = group.membershipAccess;
                        result.isOpenData = !!group.isOpenData;
                        DEFAULTS = [];
                        // merge includes
                        include = __spreadArrays(DEFAULTS, include).filter(unique);
                        specs = include.map(parseInclude);
                        enrichments = mapBy("enrichment", specs).filter(unique);
                        enriched = {};
                        if (!enrichments.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetchGroupEnrichments(group, enrichments, requestOptions)];
                    case 1:
                        enriched = _a.sent();
                        _a.label = 2;
                    case 2:
                        // map the enriched props onto the result
                        specs.forEach(function (spec) {
                            result[spec.prop] = getProp(enriched, spec.path);
                        });
                        // Handle links
                        result.links.thumbnail = getGroupThumbnailUrl(requestOptions.portal, group);
                        result.links.self = getGroupHomeUrl(result.id, requestOptions);
                        result.links.siteRelative = "/teams/" + result.id;
                        return [2 /*return*/, result];
                }
            });
        });
    }

    /**
     * Locales supported by the hub
     */
    var HUB_LOCALES = [
        "ar",
        "bs",
        "ca",
        "cs",
        "da",
        "de",
        "en",
        "es",
        "et",
        "el",
        "fi",
        "fr",
        "hr",
        "he",
        "hu",
        "it",
        "id",
        "ja",
        "ko",
        "lt",
        "lv",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-br",
        "pt-pt",
        "ro",
        "ru",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
        "zh",
        "zh-cn",
        "zh-tw",
        "zh-hk"
    ];

    /**
     * Convert a requested locale into a locale we support.
     * i.e. en-ca => en
     * If the requested locale is not available, en will be returned
     * @param {string} requestedLocale Locale we want
     */
    function convertToWellKnownLocale(requestedLocale) {
        if (requestedLocale === void 0) { requestedLocale = "en"; }
        var wellKnownKey = "en";
        // ensure downcase
        requestedLocale = requestedLocale.toLowerCase();
        // see if it's in the hub translations as-is
        if (HUB_LOCALES.indexOf(requestedLocale) > -1) {
            wellKnownKey = requestedLocale;
        }
        else {
            // if we split the requested locale, see if we have the root in the list
            var parts = requestedLocale.split("-");
            if (parts.length > 1 && HUB_LOCALES.indexOf(parts[0]) > -1) {
                wellKnownKey = parts[0];
            }
        }
        return wellKnownKey;
    }

    /**
     * Fetch the Hub translation file for a given locale
     * These are all public urls and should never require auth/tokens etc
     * @param {String} locale Locale code - i.e. `es`
     * @param {Object} portal Portal Self
     */
    function fetchHubTranslation(locale, portal, mode) {
        if (mode === void 0) { mode = "cors"; }
        var assetBase = getHubLocaleAssetUrl(portal);
        var url = (assetBase + "/locales/" + locale + ".json").toLocaleLowerCase();
        // to support web-tier auth, we must always send same-origin credentials
        var options = {
            method: "GET",
            credentials: "same-origin",
            mode: mode
        };
        return fetch(url, options)
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            throw Error("Attempt to fetch locale " + locale + " from " + url + " failed: " + JSON.stringify(err));
        });
    }

    /**
     * Return the culture from the Hub Request Options
     * In priority order: user.culture, portal.culture, en-us
     * @param {IHubRequestOptions} hubRequestOptions
     */
    function getCulture(hubRequestOptions) {
        return (getProp(hubRequestOptions, "portalSelf.user.culture") ||
            getProp(hubRequestOptions, "portalSelf.culture") ||
            "en-us");
    }

    /**
     * Unprotect and Remove an Item
     * Assumes caller has checked that the curernt user should be able to
     * unprotect and remove the item. Underlying calls are failsafe
     * so a failure to unprotect or temove the item will not reject.
     * @param {IUserItemOptions} userItemOptions id and authentication
     * @private
     */
    function _unprotectAndRemoveItem(userItemOptions) {
        var failSafeUnprotect = failSafe(unprotectItem, { success: true });
        var failSafeRemove = failSafe(removeItem, { success: true });
        return failSafeUnprotect(userItemOptions).then(function () {
            return failSafeRemove(userItemOptions);
        });
    }

    /**
     * Apply a hash of properties to an array of items.
     * Extracted to simplify testing.
     * @param {array} items Array of items to apply the properties to
     * @param {object} props hash of properties to apply to the item
     */
    function applyPropertiesToItems(items, props) {
        return items.map(function (item) {
            if (!item.properties) {
                item.properties = {};
            }
            Object.assign(item.properties, props);
            return item;
        });
    }

    /**
     * Delete a property from an object using a deep path
     * MODIFIES PASSED TARGET
     * @param {Object} target Object from which we want to delete the property
     * @param {string} path Dotted path to the property we want to delete
     */
    function deleteProp(target, lookupStr) {
        if (typeof target !== "object" || target === null)
            return;
        if (typeof lookupStr !== "string")
            return;
        var lookupKeys = lookupStr.split(".");
        for (var i = 0; i < lookupKeys.length - 1; i++) {
            if (!target.hasOwnProperty(lookupKeys[i]))
                return;
            target = target[lookupKeys[i]];
        }
        delete target[lookupKeys[lookupKeys.length - 1]];
    }

    /**
     * Update a model's item, wrapped in a failSafe so this will not blow up if
     * the user lacks rights somehow. This should be used in places where there is
     * a high-probability that the current user CAN update the item.
     * @param {Object} model Model object to be updated
     * @param {IRequestOptions} requestOptions
     */
    function failSafeUpdate(model, requestOptions) {
        var failSafedUpdate = failSafe(updateItem, {
            id: model.item.id,
            success: true,
        });
        var opts = Object.assign({ item: serializeModel(model) }, requestOptions);
        return failSafedUpdate(opts);
    }

    /**
     * To streamline passing of either a model id or the model itself, we use this function
     * to extract the model or fetch it, and return it. It uses `failSafe` and if the item
     * is not accessible for whatever reason, will return a model-ish object with `isMissing: true`
     * It is up to the caller to take approriate action
     * @param {String} modelType the type of model to extract from the options hash
     * @param {Object} options Something that extends IRequestOptions
     */
    function getModelFromOptions(modelType, options) {
        var modelProp = modelType + "Model";
        var idProp = modelType + "Id";
        // if the options hash has the model, return it
        if (options[modelProp]) {
            return Promise.resolve(options[modelProp]);
        }
        else {
            if (options[idProp]) {
                var failSafeModel = failSafe(getModel, {
                    item: { id: options[idProp] },
                    isMissing: true,
                });
                return failSafeModel(options[idProp], options);
            }
            else {
                throw new Error("getModelFromOptions requires either a ." + modelProp + " or ." + idProp + " property.");
            }
        }
    }

    /**
    * adlib - v3.0.6 - Thu Dec 17 2020 17:08:08 GMT-0800 (Pacific Standard Time)
    * Copyright (c) 2017-2020 Dave Bouwman / Esri
    * Apache-2.0
    */
    /*    Copyright (c) 2017-2019 Esri Inc.
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
           http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License. */

    /**
     * Return the value of a deep property, using a path.
     */
    var getWithDefault = function (obj, path, defaultValue) {
      if ( defaultValue === void 0 ) defaultValue = undefined;

      return path
      .split('.')
      .reduce(function (o, p) { return o ? o[p] : defaultValue; }, obj);
    };

    /*    Copyright (c) 2017-2019 Esri Inc.
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
           http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License. */

    /**
     * Simply Map over the props of an object
     */
    function mapValues (obj, fn) {
      var keys = Object.keys(obj);
      // console.info(`keys: ${keys}`);
      var newObject = keys.reduce(function(acc, currentKey) {
        // console.log(`   acc: ${JSON.stringify(acc)} curKey: ${currentKey}`);
        acc[currentKey] = fn(obj[currentKey], currentKey, obj);
        return acc;
      }, {});
      // console.info(`  output: ${JSON.stringify(newObject)}`);
      return newObject;
    }

    /*    Copyright (c) 2017-2019 Esri Inc.
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
           http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License. */

    var isDate = function (v) { return v instanceof Date; };

    var isFunction = function (v) { return typeof v === 'function'; };

    var isObject = function (v) { return typeof v === 'object'; };

    var isRegExp = function (v) { return v instanceof RegExp; };

    function deepMapValues(object, callback, propertyPath) {
      propertyPath = propertyPath || '';
      if(Array.isArray(object)){
        return object.map(deepMapValuesIteratee);
      }
      else if(object && isObject(object) && !isDate(object) && !isRegExp(object) && !isFunction(object)){
        return Object.assign({}, object, mapValues(object, deepMapValuesIteratee));
      }
      else {
        var output = callback(object, propertyPath);
        return output;
      }

      function deepMapValuesIteratee(value, key){
        var valuePath = propertyPath ? propertyPath + '.' + key : key;
        return deepMapValues(value, callback, valuePath);
      }
    }

    /*    Copyright (c) 2017-2019 Esri Inc.
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
           http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License. */

    var isObject$1 = function (v) { return typeof v === 'object'; };

    /**
     * Trim a tree decorated with `{{delete:NNN}}`
     */
    function arborist (object, propertyPath) {

      if(Array.isArray(object)){
        // filter out any nulls...
        var arrResults = object.map(iteratee).filter(function (entry) {
          // need to ensure entry is actually NULL vs just falsey
          return entry !== null && entry !== undefined;
        });
        return pruneArray(arrResults);

      } if(object && isObject$1(object) ) {

        return pruneObject(mapValues(object, iteratee));

      } else {

        return getPropertyValue(object);
      }

      function iteratee(value, key){
        return arborist(value);
      }
    }

    /**
     * Prune an array
     * For all the entries in the array...
     *    if the entry is a naked string and contains `{{delete:NNN}}`
     *      get maximum NNN value
     *    then
     *      if maxN === 0
     *        return an empty array
     *      if maxN > 0
     *        return `{{delete:maxN-1}}`
     *    else
     *      return array
     */
    function pruneArray (arrResults) {
      var res = arrResults;
      // is any entry a string w/ {{delete}}?
      var maxLevel = arrResults.reduce(function (maxLevel, e) {
        if (isString(e) && hasDelete(e)) {
          var lvl = getLevel(e);
          if (lvl > maxLevel) {
            maxLevel = lvl;
          }
        }
        return maxLevel;
      }, -1);

      if (maxLevel > -1) {
        if (maxLevel === 0) {
          res = [];
        } else {
          res = "{{delete:" + (maxLevel - 1) + "}}";
        }
      }

      return res;
    }


    function pruneObject (objResults) {
      // console.log(`   pruneObject:: working on ${JSON.stringify(objResults)}`);
      var startVal = {obj: {}, maxLevel: -1 };
      var res;
      // cook a new clone object, and track the maxLevel
      var reduction = Object.keys(objResults).reduce(function (acc, key) {
        var val = objResults[key];
        if (isString(val) && hasDelete(val)) {
          var lvl = getLevel(val);
          if (lvl > acc.maxLevel) {
            acc.maxLevel = lvl;
          }
        } else {
          // only add the prop if it's not a `{{delete:NNN}}`
          acc.obj[key] = val;
        }
        return acc;
      }, startVal);
      // if -1, we return entire object...
      // if 0 we just remove the prop...
      // if 1 we return undefined...
      // if > 1 we return the deleteVal
      if (reduction.maxLevel > 0 ) {
        if (reduction.maxLevel === 1) {
          res = undefined;
        } else {
          res = "{{delete:" + (reduction.maxLevel - 1) + "}}";
        }
      } else {
        res = reduction.obj;
      }

      // console.log(`     returning ${JSON.stringify(res)}`);
      return res;
    }

    /**
     * Get a value for a property, handling the `{{delete:NNN}}` syntax
     */
    function getPropertyValue (val){
      var output = val;

      if (typeof val === 'string') {
        if (hasDelete(val)) {
          output = getDeleteValue(val);
        }
      }
      return output;
    }

    /**
     * Given a string with `{{delete:NNN}}`
     * if NNN === 0 return undefined
     * else return `{{delete:NNN - 1}}`
     */
    function getDeleteValue (val) {
      var output = val;
      var level = getLevel(val);
      if (level === 0) {
        output = undefined;
      } else {
        output = "{{delete:" + level + "}}";
      }
      return output;
    }

    /**
     * Extract the level from a `{{delete:NNN}}`
     */
    var getLevel = function (value) { return parseInt(value.replace(/{|}/g, '').split(':')[1]); };

    /**
     * Simple check if a value has `{{delete` in it
     */
    function hasDelete (value) {
      if (value && typeof value === 'string') {
        return value.indexOf('{{delete') > -1;
      } else {
        return false;
      }
    }

    var isString = function (v) { return typeof v === 'string'; };

    /*   Copyright (c) 2017-2019 Esri Inc.
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
           http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License. */

    /**
     * Optional Transform
     * Supports a declarative syntax for optional template properties
     *
     * {{some.object.key:optional:2}}
     *
     * In this example, if defined, the value of `some.object.key` is used.
     * If not defined, then the optional transform is utilized
     * and a post-processing step is executed which will remove two parent levels
     * from the output structure
     */

    function optionalTransform(key, value, settings, level) {
      if ( level === void 0 ) level = 0;

      // console.log(`optional: ${key}, ${value}, ${level}`);
      var val = value;
      if (!value) {
        val = "{{delete:" + level + "}}";
      }
      return val;
    }

    /*    Copyright (c) 2017-2019 Esri Inc.
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
           http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License. */

    /**
     * ```js
     * import { cloneObject } from "./cloneObject";
     * const original = { foo: "bar" }
     * const copy = cloneObject(original)
     * copy.foo // "bar"
     * copy === original // false
     * ```
     * Make a deep clone, including arrays. Does not handle functions!
     *
     * Copied from @esri/hub-common to avoid bringing along that package's
     * dependencies, @esri/hub-common should be made a dependency if more
     * functions are needed from it in the future
     */
    var cloneObject = function (obj) {
      var clone = {};
      // first check array
      if (Array.isArray(obj)) {
        clone = obj.map(cloneObject);
      } else if (typeof obj === "object") {
        for (var i in obj) {
          if (obj[i] != null && typeof obj[i] === "object") {
            clone[i] = cloneObject(obj[i]);
          } else {
            clone[i] = obj[i];
          }
        }
      } else {
        clone = obj;
      }
      return clone;
    };

    /*    Copyright (c) 2017-2019 Esri Inc.
       Licensed under the Apache License, Version 2.0 (the "License");
       you may not use this file except in compliance with the License.
       You may obtain a copy of the License at
           http://www.apache.org/licenses/LICENSE-2.0
       Unless required by applicable law or agreed to in writing, software
       distributed under the License is distributed on an "AS IS" BASIS,
       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       See the License for the specific language governing permissions and
       limitations under the License. */
    var HANDLEBARS = /{{\s*?[\w].*?}}/g;

    var isString$1 = function (v) { return typeof v === 'string'; };

    function _swap(parameter, settings, transforms) {
      var value;
      // console.info(`_swap: param: ${parameter}`);
      // Parameters can optionally call transform functions
      // e.g. "{{ipsum:translateLatin}}"
      // so extract {{<parameter>:<transformFunction>:<key||value>}}
      var transformCheck = parameter.split(':');
      if (transformCheck.length > 1) {
        // we have a request to use a transform...
        var key = transformCheck[0];
        var fn = transformCheck[1];
        // we default to using the value...
        var param;
        if (transformCheck[2]){
          param = transformCheck[2];
        }
        if(transforms && transforms[fn] && typeof transforms[fn] === 'function') {
          // get the value from the param
          value = getWithDefault(settings, key);
          // transform it...
          value = transforms[fn](key, value, settings, param);
        } else {
          throw new Error(("Attempted to apply non-existant transform " + fn + " on " + key + " with params " + parameter));
        }
      } else {
        // we just get the value
        value = getWithDefault(settings, parameter);
      }
      return value;
    }

    /**
     * Does a propertyPath exist on a target
     */
    function _propertyPathExists (propertyPath, target) {
      // remove any transforms
      var cleanPath = propertyPath.split(':')[0];
      var value = getWithDefault(target, cleanPath, null);
      if (value !== null && value !== undefined) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * Is the value considered valid
     */
    function _isValue (val) {
      return val || val === '' || val === 0;
    }

    // Combine a Template with Settings
    function adlib (template, settings, transforms) {
      if ( transforms === void 0 ) transforms = null;

      transforms = cloneObject(transforms) || {};
      if (transforms.optional) {
        throw new Error('Please do not pass in an `optional` transform; adlib provides that internally.');
      } else {
        transforms.optional = optionalTransform;
      }

      var res = deepMapValues(template, function(templateValue, templatePath){
        // Only string templates
        if (!isString$1(templateValue)) {
          return templateValue;
        }

        // When we match "{{layer.fields..}}"
        var settingsValue;

        var hbsEntries = templateValue.match(HANDLEBARS);

        if (hbsEntries && hbsEntries.length) {
          // console.log(`Got a ${hbsEntries.length} handlebar entries...`);
          // iterate over the entries...
          var values = hbsEntries.map(function (entry) {
            var isStaticValue = false;
            // console.info(`Matched ${entry}...`);
            // strip off the curlies and trim any leading/trailing whitespace...
            var path = entry.replace(/{|}/g, '').trim();
            // check for || which indicate a hiearchy
            if (path.indexOf('||') > -1) {
              var paths = path.split('||').map(function (path) { return path.trim(); });
              var numberOfPaths = paths.length;
              // here we check each option, in order, and return the first with a value in the hash, OR the last
              path = paths.find(function (pathOption, idx) {
                // console.info(`Checking to see if ${pathOption} is in settings hash...`);
                var exists = _propertyPathExists(pathOption, settings);
                if (!exists) {
                  if ((idx + 1) === numberOfPaths) {
                    // console.info(`Got to last entry, and still did not find anything... assuming ${pathOption} is a static value...`);
                    isStaticValue = true;
                    // check if we can convert this into a number...
                    if (!isNaN(pathOption)) {
                      pathOption = parseInt(pathOption);
                    }
                    return pathOption;
                  } else {
                    return false;
                  }
                } else {
                  return pathOption;
                }
              });
            }
            // setup the return value...
            var result = {
              key: entry,
              value: path
            };
            // if we have a valid object path, value comes from _swap
            if (!isStaticValue) {
              var swap = _swap(path, settings, transforms);
              result.value = _isValue(swap) ? swap : entry;
            }
            // console.info(`Value: ${JSON.stringify(result)}`);
            return result;
          });

          values.forEach(function (v) {
            // console.log(`Comparing ${templateValue} with ${v.key}`)
            if (templateValue === v.key) {
              // console.log(`template matches key, returning ${v.value}`);
              // if the value is a string...
              if (typeof v.value === 'string') {
                // and it's numeric-ish
                if(!isNaN(v.value) && v.value !== '') {
                  // and has a . in it...
                  if (v.value.indexOf('.') > -1) {
                    // parse as a float...
                    v.value = parseFloat(v.value);
                  } else {
                    // parse as an int
                    v.value = parseInt(v.value);
                  }
                }
              }
              settingsValue = v.value;
            } else {
              // a little extra regex dance to match the '||' because '|'
              // is a Very Special Regex Character and we need to super
              // escape them for the regex to work
              // console.log(`KEY ${v.key}`);
              // console.log(`TEMPLATE ${templateValue}`);
              templateValue = templateValue.replace(v.key, v.value);
              // console.log(`template did not match key, interpolating value ${v.value} into template to produce ${templateValue}`);
            }
          });

          // if we have a value, let's return that...
          if (_isValue(settingsValue)) {
            // console.log(`We found a value so we return it ${settingsValue}`);
            return settingsValue;
          } else {
            // console.log(`We did not find a value so we return the template ${templateValue}`);
            // but if we don't, lets return the template itself
            return templateValue;
          }
        } else {
          // console.log(`We did not find a hbs match, so we return the template ${templateValue}`);
          // no match, return the templateValue...
          return templateValue;
        }
      });
      return arborist(res);
    }

    /**
     * Interpolates handlebars-style placeholders on an object graph
     * @param template
     * @param settings
     * @param transforms
     */
    function interpolate(template, settings, transforms) {
        return adlib(template, settings, transforms);
    }

    /**
     * Interpolate the item id back into any  {{appid}} instances
     * in the item. Allows for self-referencing in templates
     * @param {object} model Item Model
     */
    function interpolateItemId(model) {
        var settings = { item: { id: model.item.id }, appid: model.item.id };
        var transforms = {
            toISO: function (_, v) {
                return v;
            }
        };
        return interpolate(model, settings, transforms);
    }

    /**
     * Replaces instances of item ids on an item model
     * @param {Object} obj Object graph to traverse
     * @param {string} itemId id to replace with `{{appid}}`
     */
    function replaceItemId(obj, itemId, replacement) {
        if (replacement === void 0) { replacement = "{{appid}}"; }
        var clone = cloneObject$1(obj);
        var re = new RegExp(itemId, "g");
        return deepStringReplace(clone, re, replacement);
    }

    /**
     * Share an item to a set of groups
     * @param {String} itemId Iten Id to share to the groups
     * @param {Array} groups Array of group id's to which the item will be shared
     * @param {String} owner optional Owner username to determine which endpoint to hit
     * @param {*} requestOptions
     */
    function shareItemToGroups(itemId, groups, requestOptions, owner) {
        return Promise.all(groups.map(function (groupId) {
            var opt = Object.assign({}, { id: itemId, groupId: groupId }, requestOptions);
            if (owner) {
                opt.owner = owner;
            }
            return shareItemWithGroup(opt);
        }));
    }

    /**
     * Given a model, determine if it is protected, and unprotect it if it is.
     * Otherwise, just resolve with the same result.
     * @param {Object} model Model Object
     * @param {IRequestOptions} requestOptions
     */
    function unprotectModel(model, requestOptions) {
        if (model.item.protected) {
            var opts = Object.assign({ id: model.item.id }, requestOptions);
            return unprotectItem(opts);
        }
        else {
            // act as though we did it
            return Promise.resolve({ success: true });
        }
    }

    /**
     * Unshare an item from a set of groups
     * @param {String} itemId Item Id to unshare from groups
     * @param {Array} groups Array of group id's from which the item will be unshared
     * @param {String} owner optional Owner username to determine which endpoint to hit
     * @param {IRequestOptions} requestOptions
     */
    function unshareItemFromGroups(itemId, groups, requestOptions, owner) {
        return Promise.all(groups.map(function (groupId) {
            var opt = Object.assign({}, { id: itemId, groupId: groupId }, requestOptions);
            if (owner) {
                opt.owner = owner;
            }
            return unshareItemWithGroup(opt);
        }));
    }

    /**
     * Check if a site/page exists with a specific name
     */
    function doesItemExistWithTitle(itemTitle, options, authMgr) {
        // if options have multiple properties, put them into one string separated with 'AND'
        var optionsQuery = Object.keys(options)
            .map(function (key) {
            return key + ":\"" + options[key] + "\"";
        })
            .join(" AND ");
        var opts = {
            q: "title:\"" + itemTitle + "\" AND " + optionsQuery,
            authentication: authMgr
        };
        return searchItems(opts)
            .then(function (searchResponse) { return searchResponse.results.length > 0; })
            .catch(function (e) {
            throw Error("Error in doesItemExistWithTitle " + e);
        });
    }

    /**
     * Given a title, construct a site/page title that is unique
     * if that title exists, this fn will add a number on the end, and increment until
     * an available title is found
     * @param {string} title site/page title to ensure if unique
     * @param {object} options an object that can be passed in to the q, eg. typekeywords, type
     * @param {object} authMgr auth info tells the function what url to use for the "root" of the API,
     * if missing, it will search against PROD
     * @param {number} step Number to increment. Defaults to 0
     */
    function getUniqueItemTitle(title, options, authMgr, step) {
        if (step === void 0) { step = 0; }
        var combinedName = title;
        if (step) {
            combinedName = title + " " + step;
        }
        return doesItemExistWithTitle(combinedName, options, authMgr)
            .then(function (result) {
            if (result) {
                step++;
                return getUniqueItemTitle(title, options, authMgr, step);
            }
            else {
                return combinedName;
            }
        })
            .catch(function (e) {
            throw Error("Error in getUniqueItemTitle " + e);
        });
    }

    var MAX_NUM = 100;
    /**
     * Fetches all the pages in a search request
     * @param {SearchFunction} searchFunc
     * @param {ISearchOptions} opts
     * @param {number} limit
     * @param {batchSize} number of concurrent requests at a time
     * @returns {Promise<SearchableType[]>}
     */
    function fetchAllPages(searchFunc, opts, limit, batchSize) {
        if (limit === void 0) { limit = -1; }
        var pageSize = opts.num || MAX_NUM;
        var firstStart = opts.start || 1;
        // If a limit is provided, we don't have to use the first request to get the
        // total count before sending things off to batch(). So instead we fake the first
        // response just to set things up.
        var promise = limit === -1
            ? searchFunc(__assign(__assign({}, opts), { num: pageSize, start: firstStart }))
            : Promise.resolve({
                nextStart: firstStart,
                total: limit,
                results: [],
                num: pageSize
            });
        return promise
            .then(function (firstResponse) {
            // no more requests needed, return the first response
            if (firstResponse.nextStart === -1)
                return [firstResponse];
            // generate batch requests for the remaining pages to fetch
            var starts = [];
            for (var i = firstResponse.nextStart; i <= firstResponse.total; i += pageSize) {
                starts.push(i);
            }
            var batchSearchFunc = function (start) {
                return searchFunc(__assign(__assign({}, opts), { start: start, num: pageSize }));
            };
            return batch(starts, batchSearchFunc, batchSize).then(function (responses) { return __spreadArrays([
                firstResponse
            ], responses); });
        })
            .then(function (responses) {
            // merge all the search results into a single array
            var results = responses.reduce(function (acc, response) { return __spreadArrays(acc, response.results); }, []);
            // discard results beyond the limit if applicable
            var clipLimit = limit === -1 ? results.length : limit;
            return results.slice(0, clipLimit);
        });
    }

    var itemPropsNotInTemplates = [
        "id",
        "isOrgItem",
        "proxyFilter",
        "ownerFolder",
        "protected",
        "owner",
        "created",
        "modified",
        "guid",
        "name",
        "access",
        "size",
        "listed",
        "numComments",
        "numRatings",
        "avgRating",
        "numViews",
        "scoreCompleteness",
        "groupDesignations",
        "listed",
        "screenshots",
        "banner",
        "appCategories",
        "industries",
        "languages",
        "largeThumbnail"
    ];
    /**
     * Given an item, remove a standard set of properties not needed in a template
     * TODO: This should land in a templating helper lib in hub.js
     * @param {Object} item Item to be normalized
     */
    function normalizeSolutionTemplateItem(item) {
        var template = cloneObject$1(item);
        itemPropsNotInTemplates.forEach(function (prop) {
            delete template[prop];
        });
        // set a bunch of things we do want
        template.extent = "{{organization.defaultExtentBBox}}";
        return template;
    }

    /**
     * Takes a file, file owner, and file AGO item id along with a size limit
     * Then chunks the file up based on that file limit.
     * The chunks are added to addItemPart calls and added to a queue array.
     *
     * @export
     * @param {*} file File to be uploaded
     * @param {string} owner file owner
     * @param {string} id file ID from AGO
     * @param {number} sizeLimit How large should the chunks be?
     * @param {IUserRequestOptions} requestOptions
     * @return {*}  {IBatch}
     */
    function _prepareUploadRequests(file, owner, id, sizeLimit, requestOptions) {
        var queue = [];
        // part number starts from 1
        var partIndex = 1;
        var sizeIndex = 0;
        // Slice the file data and create an upload request for each part
        while (sizeIndex < file.size) {
            queue.push(__assign({ file: file.slice(sizeIndex, sizeIndex + sizeLimit, file.type), owner: owner,
                id: id, partNum: partIndex }, requestOptions));
            partIndex += 1;
            sizeIndex += sizeLimit;
        }
        return queue.reverse();
    }

    /**
     * Creates an item in online from a local file/item.
     * Upload is multithreaded as the item is chunked up.
     *
     * @export
     * @param {IItemAdd} item Item to be uploaded into online.
     * @param {IUserRequestOptions} requestOptions
     * @return {*}  {Promise<string>} Newly created item id
     */
    function createItemFromFile(item, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var file, createResult, itemId, sizeLimit, uploadQueue, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = item.file;
                        // make a shadow copy of the item parameter and remove the file object
                        // so that it won't trigger the direct upload at the createContent
                        // request
                        item = Object.assign({}, item);
                        delete item.file;
                        return [4 /*yield*/, createItem(__assign({ item: item, filename: file.name, async: true, multipart: true, overwrite: true }, requestOptions))];
                    case 1:
                        createResult = _a.sent();
                        itemId = createResult.id;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        sizeLimit = 6 * 1000 * 1000;
                        uploadQueue = _prepareUploadRequests(file, item.owner, itemId, sizeLimit, requestOptions);
                        // execute up to 5 concurrent requests
                        return [4 /*yield*/, batch(uploadQueue, 
                            // We are doing this to catch individual response failures
                            // and throwing them to stop further xhr's
                            function (opts) { return __awaiter(_this, void 0, void 0, function () {
                                var resp;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, addItemPart(opts)];
                                        case 1:
                                            resp = _a.sent();
                                            // If the response did not return with success then throw an error
                                            if (!resp.success) {
                                                throw new Error("addItemPart failed");
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, 5)];
                    case 3:
                        // execute up to 5 concurrent requests
                        _a.sent();
                        // Commit is called once all parts are uploaded during a multipart add item or update item operation.
                        return [4 /*yield*/, commitItemUpload(__assign({ id: itemId, item: item, owner: item.owner }, requestOptions))];
                    case 4:
                        // Commit is called once all parts are uploaded during a multipart add item or update item operation.
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        // If an error is thrown then cancel item upload
                        return [4 /*yield*/, cancelItemUpload(__assign({ id: itemId, owner: item.owner }, requestOptions))];
                    case 6:
                        // If an error is thrown then cancel item upload
                        _a.sent();
                        throw e_1;
                    case 7: return [2 /*return*/, createResult];
                }
            });
        });
    }

    /**
     * Create AGO item from a URL
     *
     * @export
     * @param {IItemAdd} item Item to be uploaded into online.
     * @param {IUserRequestOptions} requestOptions
     * @return {*}  {Promise<string>} Newly created item ID
     */
    function createItemFromUrl(item, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var createResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, createItem(__assign({ item: item, owner: item.owner, file: item.file, dataUrl: item.dataUrl, text: item.text, multipart: item.multipart, async: item.async }, requestOptions))];
                    case 1:
                        createResult = _a.sent();
                        // return the newly created item id
                        return [2 /*return*/, createResult];
                }
            });
        });
    }

    function delay(milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    }
    /**
     * Helper function which takes an itemId and checks the status
     * of the item every 2 seconds until it is either complete or failed.
     *
     * @export
     * @param {string} itemId AGO item id
     * @param {IUserRequestOptions} requestOptions
     */
    function _waitForItemReady(itemId, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var statusResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, delay(2000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, getItemStatus(__assign({ id: itemId }, requestOptions))];
                    case 2:
                        statusResult = _a.sent();
                        if (statusResult.status === "failed") {
                            throw new Error(statusResult.statusMessage);
                        }
                        _a.label = 3;
                    case 3:
                        if (statusResult.status !== "completed") return [3 /*break*/, 0];
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }

    /**
     * Creates an item in online from either url or file.
     * Once created we wait for the item to be ready (or throw an error if creation failed)
     * If access is not private then we make a call to update that.
     *
     * @export
     * @param {ICreateItemFromUrlOrFileOptions} createItemFromUrlOrFileOptions Input params (item, groups?, requestoptions)
     * @return {*}  {
     *     title: string,
     *     createdItem: ICreateItemResponse,
     *     itemAccessResponse: ISharingResponse,
     *     itemSharingResponse: ISharingResponse[]
     *   } Responses from createdItem, changing item access, and item Sharing to group
     */
    function createItemFromUrlOrFile(createItemFromUrlOrFileOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var item, groups, userRequestOptions, shouldWaitForItemReady, createdItem, itemAccessResponse, itemSharingResponse, failSafeShare_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = createItemFromUrlOrFileOptions.item, groups = createItemFromUrlOrFileOptions.groups, userRequestOptions = __rest(createItemFromUrlOrFileOptions, ["item", "groups"]);
                        shouldWaitForItemReady = item.dataUrl || item.file;
                        if (!item.file) return [3 /*break*/, 2];
                        return [4 /*yield*/, createItemFromFile(item, userRequestOptions)];
                    case 1:
                        createdItem = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, createItemFromUrl(item, userRequestOptions)];
                    case 3:
                        createdItem = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!shouldWaitForItemReady) return [3 /*break*/, 6];
                        return [4 /*yield*/, _waitForItemReady(createdItem.id, userRequestOptions)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!(item.access !== "private")) return [3 /*break*/, 8];
                        return [4 /*yield*/, setItemAccess(__assign({ id: createdItem.id, owner: item.owner, access: item.access }, userRequestOptions))];
                    case 7:
                        itemAccessResponse = _a.sent();
                        _a.label = 8;
                    case 8:
                        if (!(groups === null || groups === void 0 ? void 0 : groups.length)) return [3 /*break*/, 10];
                        failSafeShare_1 = failSafe(shareItemWithGroup);
                        return [4 /*yield*/, Promise.all(groups.map(function (group) {
                                return failSafeShare_1(__assign({ id: createdItem.id, owner: item.owner, groupId: group.id, confirmItemControl: isUpdateGroup(group) }, userRequestOptions));
                            }))];
                    case 9:
                        itemSharingResponse = _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/, {
                            title: item.title,
                            createdItem: createdItem,
                            itemAccessResponse: itemAccessResponse,
                            itemSharingResponse: itemSharingResponse,
                        }];
                }
            });
        });
    }

    /* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Gets the primary input Feature Service for the given
     * Form ID. This will be the Fieldworker view, if it exists,
     * otherwise the source Feature Service.
     * @param {string} formId The Form ID
     * @param requestOptions The request options
     * @returns {Promise<IModel>}
     */
    var getInputFeatureServiceModel = function (formId, requestOptions) {
        return getRelatedItems(__assign({ id: formId, relationshipType: "Survey2Service", direction: "forward" }, requestOptions)).then(function (_a) {
            var featureService = _a.relatedItems[0];
            var model;
            if (featureService) {
                model = { item: featureService };
            }
            return model;
        });
    };

    /* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Fetches a Survey's source Feature Service from a given
     * Fieldworker View ID
     * @param {string} fieldworkerId The Fieldworker View ID
     * @param {IRequestOptions} requestOptions The request options
     * @returns {Promise<IModel>}
     */
    var getSourceFeatureServiceModelFromFieldworker = function (fieldworkerId, requestOptions) {
        return getRelatedItems(__assign({ id: fieldworkerId, relationshipType: "Service2Data", direction: "forward" }, requestOptions)).then(function (_a) {
            var featureService = _a.relatedItems[0];
            var model;
            if (featureService) {
                model = { item: featureService };
            }
            return model;
        });
    };

    /* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Fetches a Survey's Stakeholder View for a given
     * Form ID
     * @param {string} formId A Form ID
     * @param {IRequestOptions} requestOptions The request options
     * @returns {Promise<IModel>}
     */
    var getStakeholderModel = function (formId, requestOptions) {
        return getRelatedItems(__assign({ id: formId, relationshipType: "Survey2Data", direction: "forward" }, requestOptions)).then(function (_a) {
            var stakeholderView = _a.relatedItems[0];
            var model;
            if (stakeholderView) {
                model = { item: stakeholderView };
            }
            return model;
        });
    };

    /**
     * Determines if the provided Feature Service item is a
     * Fieldworker View
     * @param {IItem} featureServiceItem
     * @returns {boolean}
     */
    function isFieldworkerView(featureServiceItem) {
        var hasTypekeyword = function (typeKeyword) {
            return featureServiceItem.typeKeywords.indexOf(typeKeyword) > -1;
        };
        // Survey123 only recently added the "FieldworkerView" typekeyword
        var isFieldworker = hasTypekeyword("FieldworkerView");
        // we should support previously created fieldworkers too
        if (!isFieldworker) {
            var hasExpectedTypeKeywords = [
                "Survey123",
                "Feature Service",
                "View Service",
            ].every(hasTypekeyword);
            isFieldworker =
                hasExpectedTypeKeywords && !hasTypekeyword("StakeholderView");
        }
        return isFieldworker;
    }

    /* Copyright (c) 2020 Environmental Systems Research Institute, Inc.
     * Apache-2.0 */
    /**
     * Builds a dictionary of Survey items for the given Form model
     * @param {string} formId The Form ID of the survey
     * @param {IRequestOptions} requestOptions The request options
     * @returns {Promise<IGetSurveyModelsResponse>}
     */
    var getSurveyModels = function (formItemOrId, requestOptions) {
        var fieldworker;
        var stakeholder;
        var getForm = function () {
            return typeof formItemOrId === "string"
                ? getItem(formItemOrId, requestOptions)
                : Promise.resolve(formItemOrId);
        };
        return getForm().then(function (form) {
            var promises = [
                // the primary input will be the fieldworker (if it exists), otherwise
                // the source feature service.
                getInputFeatureServiceModel(form.id, requestOptions),
                getStakeholderModel(form.id, requestOptions),
            ];
            return Promise.all(promises)
                .then(function (_a) {
                var featureServiceOrFieldworkerModelResult = _a[0], stakeholderResult = _a[1];
                stakeholder = stakeholderResult;
                if (featureServiceOrFieldworkerModelResult &&
                    isFieldworkerView(featureServiceOrFieldworkerModelResult.item)) {
                    fieldworker = featureServiceOrFieldworkerModelResult;
                    // if the primary input is the fieldworker, fetch
                    // the source feature service
                    return getSourceFeatureServiceModelFromFieldworker(fieldworker.item.id, requestOptions);
                }
                else {
                    return featureServiceOrFieldworkerModelResult;
                }
            })
                .then(function (featureService) {
                return {
                    form: { item: form },
                    featureService: featureService,
                    fieldworker: fieldworker,
                    stakeholder: stakeholder,
                };
            });
        });
    };

    /**
     * Hub class can be used as an entry point to managing
     * content, teams, sites, projects etc, in an organization's Hub.
     *
     * ```js
     * import {Hub} from '@esri/hub-common';
     * // create a Hub instance, authenticating as a specific user
     * // working against arcgis online
     * const myHub = await Hub.create({authOptions: {username: "casey", password: "jones"}});
     *
     * myHub.context.currentUser //=> {username: "casey", ...} as IUser
     *
     * const pavingProject = await myHub.projects.create({name: "12th Street Paving"});
     * pavingProject.summary = "This is the 2024 planned paving of 12th Street, between 8th and 11th Ave";
     * await myHub.projects.update(pavingProject);
     * ```
     *
     * This is a convenience class. Hub Managers can be created
     * directly, or the underlying functions can be imported an used
     * as need for scenarios where these class structures introduce
     * unwanted complexity
     */
    var Hub = /** @class */ (function () {
        /**
         * Private so we can employ a factory function to do
         * async work during creation
         * @param contextManager
         */
        function Hub(contextManager) {
            this._contextManager = contextManager;
        }
        /**
         * Factory function to construct a new Hub instance.
         * @param contextManager
         * @returns
         */
        Hub.create = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var opts, mgr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!options.contextManager) return [3 /*break*/, 1];
                            return [2 /*return*/, new Hub(options.contextManager)];
                        case 1:
                            opts = options.managerOptions || {};
                            return [4 /*yield*/, ArcGISContextManager.create(opts)];
                        case 2:
                            mgr = _a.sent();
                            return [2 /*return*/, new Hub(mgr)];
                    }
                });
            });
        };
        Object.defineProperty(Hub.prototype, "context", {
            /**
             * Get the context
             * @readonly
             * @memberof Hub
             */
            get: function () {
                return this._contextManager.context;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Hub.prototype, "projects", {
            /**
             * HubProjectManager for the current Hub
             *
             * @readonly
             * @memberof Hub
             */
            get: function () {
                if (!this._projectManager) {
                    this._projectManager = HubProjectManager.init(this._contextManager);
                }
                return this._projectManager;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Hub.prototype, "sites", {
            /**
             * HubSiteManager for the current Hub
             *
             * @readonly
             * @memberof Hub
             */
            get: function () {
                if (!this._siteManager) {
                    this._siteManager = HubSiteManager.init(this._contextManager);
                }
                return this._siteManager;
            },
            enumerable: false,
            configurable: true
        });
        return Hub;
    }());

    var enrichUserOrg = function (input) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        var opId = stack.start("enrichUserOrg");
        var options = __assign(__assign({}, requestOptions), { 
            // In order to get the correct response, we must pass options.portal
            // as a base portal url (e.g., www.arcgis.com, qaext.arcgis.com, etc)
            // **not** an org portal (i.e. org.maps.arcgis.com).
            portal: getPortalBaseFromOrgUrl(requestOptions.portal) + "/sharing/rest" });
        // TODO: Add Caching
        // Had implemented a simple caching system, but it leads to unstable
        // tests because we can't deterministically clear it
        // if (!orgCache[data.user.orgId]) {
        //   orgCache[data.user.orgId] = fetchOrg(data.user.orgId, options);
        // }
        // return (orgCache[data.user.orgId] as Promise<IPortal>)
        return fetchOrg(data.user.orgId, options)
            .then(function (results) {
            stack.finish(opId);
            return {
                data: __assign(__assign({}, data), {
                    org: results,
                }),
                stack: stack,
                requestOptions: requestOptions,
            };
        })
            .catch(function (error) { return handleEnrichmentError(error, input, opId); });
    };
    /**
     * Simple cache for user org's. This does not expire
     * but that seems reasonable as Org props rarely change
     */
    // This works find at run-time, but it's a problem in tests
    // where we are validating calls. Will work with Randy to
    // create something that's more robust
    // const orgCache: Record<string, any> = {};
    // add the error to the content.errors,
    // log current stack operation as finished with an error
    // and return output that can be piped into the next operation
    var handleEnrichmentError = function (error, input, opId) {
        var data = input.data, stack = input.stack, requestOptions = input.requestOptions;
        stack.finish(opId, { error: error });
        return {
            data: __assign(__assign({}, data), { errors: getEnrichmentErrors(error, data.errors) }),
            stack: stack,
            requestOptions: requestOptions,
        };
    };
    /**
     * Available enrichments for Groups
     */
    var groupEnrichementOperations = {
        org: enrichUserOrg,
    };
    /**
     * Fetch enrichments for Users
     * @param group
     * @param enrichments
     * @param requestOptions
     * @returns
     */
    function fetchUserEnrichments(user, enrichments, requestOptions) {
        // create a pipeline of enrichment operations
        var operations = enrichments.reduce(function (ops, enrichment) {
            var operation = groupEnrichementOperations[enrichment];
            // only include the enrichments that we know how to fetch
            operation && ops.push(operation);
            return ops;
        }, []);
        var pipeline = createOperationPipeline(operations);
        // execute pipeline and return the item and enrichments
        return pipeline({
            data: { user: user },
            stack: new OperationStack$1(),
            requestOptions: requestOptions,
        }).then(function (output) {
            // TODO: send telemetry so we have info on what enrichments are requested and possible errors
            return output.data;
        });
    }

    /**
     * Enrich a User object
     * @param user
     * @param includes
     * @param requestOptions
     * @returns
     */
    function enrichUserSearchResult(user, include, requestOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var result, DEFAULTS, specs, enrichments, enriched, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            access: user.access,
                            id: user.username,
                            type: "User",
                            name: user.fullName,
                            owner: user.username,
                            summary: user.description,
                            createdDate: new Date(user.created),
                            createdDateSource: "user.created",
                            updatedDate: new Date(user.modified),
                            updatedDateSource: "user.modified",
                            family: "people",
                            links: {
                                self: "not-implemented",
                                siteRelative: "not-implemented",
                                thumbnail: "not-implemented",
                            },
                        };
                        DEFAULTS = ["org.name AS orgName"];
                        // merge includes
                        include = __spreadArrays(DEFAULTS, include).filter(unique);
                        specs = include.map(parseInclude);
                        enrichments = mapBy("enrichment", specs).filter(unique);
                        enriched = {};
                        if (!enrichments.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetchUserEnrichments(user, enrichments, requestOptions)];
                    case 1:
                        enriched = _a.sent();
                        _a.label = 2;
                    case 2:
                        // map the enriched props onto the result
                        specs.forEach(function (spec) {
                            result[spec.prop] = getProp(enriched, spec.path);
                        });
                        token = requestOptions.authentication.token;
                        // Handle links
                        result.links.thumbnail = getUserThumbnailUrl(requestOptions.portal, user, token);
                        result.links.self = getUserHomeUrl(result.id, requestOptions);
                        result.links.siteRelative = "/people/" + result.id;
                        return [2 /*return*/, result];
                }
            });
        });
    }

    exports.ArcGISContext = ArcGISContext;
    exports.ArcGISContextManager = ArcGISContextManager;
    exports.Catalog = Catalog;
    exports.Collection = Collection;
    exports.DEFAULT_THEME = DEFAULT_THEME;
    exports.ENTERPRISE_SITE_ITEM_TYPE = ENTERPRISE_SITE_ITEM_TYPE;
    exports.GLOBAL_EXTENT = GLOBAL_EXTENT;
    exports.HUB_CDN_URLMAP = HUB_CDN_URLMAP;
    exports.HUB_LOCALES = HUB_LOCALES;
    exports.HUB_PROJECT_ITEM_TYPE = HUB_PROJECT_ITEM_TYPE;
    exports.HUB_SITE_ITEM_TYPE = HUB_SITE_ITEM_TYPE;
    exports.Hub = Hub;
    exports.HubError = HubError$1;
    exports.HubProjectManager = HubProjectManager;
    exports.HubSiteManager = HubSiteManager;
    exports.Logger = Logger;
    exports.OperationError = OperationError$1;
    exports.OperationStack = OperationStack$1;
    exports.PORTAL_EXPORT_TYPES = PORTAL_EXPORT_TYPES;
    exports.REQUIRED_PRIVS = REQUIRED_PRIVS;
    exports.RemoteServerError = RemoteServerError;
    exports.SEARCH_APIS = SEARCH_APIS;
    exports.SITE_SCHEMA_VERSION = SITE_SCHEMA_VERSION;
    exports.STANDARD_LICENSES = STANDARD_LICENSES;
    exports.WGS84_WKID = WGS84_WKID;
    exports._addTokenToResourceUrl = _addTokenToResourceUrl;
    exports._canEmailUser = _canEmailUser;
    exports._checkStatusAndParseJson = _checkStatusAndParseJson;
    exports._consolidateResults = _consolidateResults;
    exports._deepMapValues = _deepMapValues;
    exports._ensureSafeDomainLength = _ensureSafeDomainLength;
    exports._ensureTelemetry = _ensureTelemetry;
    exports._fetchSite = _fetchSite;
    exports._formatAutoAddResponse = _formatAutoAddResponse;
    exports._getAuthHeader = _getAuthHeader;
    exports._getAutoAddUsers = _getAutoAddUsers;
    exports._getDomainServiceUrl = _getDomainServiceUrl;
    exports._getEmailUsers = _getEmailUsers;
    exports._getHttpAndHttpsUris = _getHttpAndHttpsUris;
    exports._getInviteUsers = _getInviteUsers;
    exports._getLocation = _getLocation;
    exports._isDate = _isDate;
    exports._isFunction = _isFunction;
    exports._isObject = _isObject;
    exports._isOrgAdmin = _isOrgAdmin;
    exports._isRegExp = _isRegExp;
    exports._isString = _isString;
    exports._lookupPortal = _lookupPortal;
    exports._mapValues = _mapValues;
    exports._processAutoAdd = _processAutoAdd;
    exports._processInvite = _processInvite;
    exports._processPrimaryEmail = _processPrimaryEmail;
    exports._processSecondaryEmail = _processSecondaryEmail;
    exports._searchContent = _searchContent;
    exports._searchGroups = _searchGroups;
    exports._searchUsers = _searchUsers;
    exports._unprotectAndRemoveGroup = _unprotectAndRemoveGroup;
    exports._unprotectAndRemoveItem = _unprotectAndRemoveItem;
    exports.addContextToSlug = addContextToSlug;
    exports.addCreateItemTypes = addCreateItemTypes;
    exports.addDays = addDays;
    exports.addDomain = addDomain;
    exports.addSiteDomains = addSiteDomains;
    exports.addSolutionResourceUrlToAssets = addSolutionResourceUrlToAssets;
    exports.addUsersToGroup = addUsersToGroup;
    exports.applyCollectionState = applyCollectionState;
    exports.applyPropertiesToItems = applyPropertiesToItems;
    exports.arrayToObject = arrayToObject;
    exports.atob = abab.atob;
    exports.autoAddUsers = autoAddUsers;
    exports.bBoxToExtent = bBoxToExtent;
    exports.bBoxToPolygon = bBoxToPolygon;
    exports.batch = batch;
    exports.btoa = abab.btoa;
    exports.buildDraft = buildDraft;
    exports.buildExistingExportsPortalQuery = buildExistingExportsPortalQuery;
    exports.buildUrl = buildUrl;
    exports.camelize = camelize;
    exports.canEditEvent = canEditEvent;
    exports.canEditItem = canEditItem;
    exports.canEditSite = canEditSite;
    exports.canEditSiteContent = canEditSiteContent;
    exports.capitalize = capitalize;
    exports.categories = categories;
    exports.chunkArray = chunkArray;
    exports.clearSession = clearSession;
    exports.cloneObject = cloneObject$1;
    exports.completeOAuth2 = completeOAuth2;
    exports.compose = compose;
    exports.composeContent = composeContent;
    exports.constructSlug = constructSlug;
    exports.convertCatalog = convertCatalog;
    exports.convertContentDefinitionToFilter = convertContentDefinitionToFilter;
    exports.convertContentFilterToSearchOptions = convertContentFilterToSearchOptions;
    exports.convertItemToProject = convertItemToProject;
    exports.convertItemToSite = convertItemToSite;
    exports.convertPortalItemResponseToFacets = convertPortalItemResponseToFacets;
    exports.convertPortalResponseToFacets = convertPortalResponseToFacets;
    exports.convertSolutionTemplateResourcesToAssets = convertSolutionTemplateResourcesToAssets;
    exports.convertToWellKnownLocale = convertToWellKnownLocale;
    exports.convertUrlsToAnchorTags = convertUrlsToAnchorTags;
    exports.createExtent = createExtent;
    exports.createId = createId;
    exports.createItemFromFile = createItemFromFile;
    exports.createItemFromUrl = createItemFromUrl;
    exports.createItemFromUrlOrFile = createItemFromUrlOrFile;
    exports.createModel = createModel;
    exports.createOperationPipeline = createOperationPipeline;
    exports.createProject = createProject;
    exports.createSite = createSite;
    exports.dasherize = dasherize;
    exports.datasetToContent = datasetToContent;
    exports.datasetToItem = datasetToItem;
    exports.deepFind = deepFind;
    exports.deepFindById = deepFindById;
    exports.deepSet = deepSet;
    exports.deepStringReplace = deepStringReplace;
    exports.deleteProp = deleteProp;
    exports.destroyProject = destroyProject;
    exports.destroySite = destroySite;
    exports.doesItemExistWithTitle = doesItemExistWithTitle;
    exports.domainExists = domainExists;
    exports.domainExistsPortal = domainExistsPortal;
    exports.emailOrgUsers = emailOrgUsers;
    exports.enrichContentSearchResult = enrichContentSearchResult;
    exports.enrichGroupSearchResult = enrichGroupSearchResult;
    exports.enrichPageSearchResult = enrichPageSearchResult;
    exports.enrichProjectSearchResult = enrichProjectSearchResult;
    exports.enrichSiteSearchResult = enrichSiteSearchResult;
    exports.enrichUserSearchResult = enrichUserSearchResult;
    exports.ensureProp = ensureProp;
    exports.ensureUniqueDomainName = ensureUniqueDomainName;
    exports.ensureUniqueString = ensureUniqueString;
    exports.expandApi = expandApi;
    exports.expandApis = expandApis;
    exports.expandContentFilter = expandContentFilter;
    exports.expandGroupFilter = expandGroupFilter;
    exports.expandTypeField = expandTypeField;
    exports.expandUserFilter = expandUserFilter;
    exports.extend = extend;
    exports.extentToBBox = extentToBBox;
    exports.extentToPolygon = extentToPolygon;
    exports.failSafe = failSafe;
    exports.failSafeUpdate = failSafeUpdate;
    exports.fetchAllPages = fetchAllPages;
    exports.fetchAndUploadResource = fetchAndUploadResource;
    exports.fetchAndUploadThumbnail = fetchAndUploadThumbnail;
    exports.fetchContent = fetchContent;
    exports.fetchHubTranslation = fetchHubTranslation;
    exports.fetchImageAsBlob = fetchImageAsBlob;
    exports.fetchMaxNumUserGroupsLimit = fetchMaxNumUserGroupsLimit;
    exports.fetchModelFromItem = fetchModelFromItem;
    exports.fetchOrg = fetchOrg;
    exports.fetchOrgLimits = fetchOrgLimits;
    exports.fetchProject = fetchProject;
    exports.fetchSite = fetchSite;
    exports.fetchSiteModel = fetchSiteModel;
    exports.filterBy = filterBy;
    exports.findBy = findBy;
    exports.findItemsBySlug = findItemsBySlug;
    exports.flattenArray = flattenArray;
    exports.generateRandomString = generateRandomString;
    exports.getCategory = getCategory;
    exports.getContentIdentifier = getContentIdentifier;
    exports.getContentSiteUrls = getContentSiteUrls;
    exports.getContentTypeIcon = getContentTypeIcon;
    exports.getContentTypeLabel = getContentTypeLabel;
    exports.getCulture = getCulture;
    exports.getDomainsForSite = getDomainsForSite;
    exports.getExportItemTypeKeyword = getExportItemTypeKeyword;
    exports.getExportLayerTypeKeyword = getExportLayerTypeKeyword;
    exports.getExtentCenter = getExtentCenter;
    exports.getFamily = getFamily;
    exports.getGeographicOrgExtent = getGeographicOrgExtent;
    exports.getGroupHomeUrl = getGroupHomeUrl;
    exports.getGroupThumbnailUrl = getGroupThumbnailUrl;
    exports.getHubApiFromPortalUrl = getHubApiFromPortalUrl;
    exports.getHubApiUrl = getHubApiUrl;
    exports.getHubApiUrlFromPortal = getHubApiUrlFromPortal;
    exports.getHubLocaleAssetUrl = getHubLocaleAssetUrl;
    exports.getHubProduct = getHubProduct;
    exports.getHubUrlFromPortal = getHubUrlFromPortal;
    exports.getInputFeatureServiceModel = getInputFeatureServiceModel;
    exports.getItemApiUrl = getItemApiUrl;
    exports.getItemAssets = getItemAssets;
    exports.getItemBySlug = getItemBySlug;
    exports.getItemDataUrl = getItemDataUrl;
    exports.getItemHomeUrl = getItemHomeUrl;
    exports.getItemHubId = getItemHubId;
    exports.getItemHubType = getItemHubType;
    exports.getItemLayer = getItemLayer;
    exports.getItemLayerId = getItemLayerId;
    exports.getItemThumbnailUrl = getItemThumbnailUrl;
    exports.getLayerIdFromUrl = getLayerIdFromUrl;
    exports.getModel = getModel;
    exports.getModelBySlug = getModelBySlug;
    exports.getModelFromOptions = getModelFromOptions;
    exports.getNextFunction = getNextFunction;
    exports.getOrgDefaultTheme = getOrgDefaultTheme;
    exports.getOrgExtentAsBBox = getOrgExtentAsBBox;
    exports.getPortalApiUrl = getPortalApiUrl;
    exports.getPortalBaseFromOrgUrl = getPortalBaseFromOrgUrl;
    exports.getPortalUrl = getPortalUrl;
    exports.getPortalUrls = getPortalUrls;
    exports.getProp = getProp;
    exports.getProps = getProps;
    exports.getProxyUrl = getProxyUrl;
    exports.getServiceTypeFromUrl = getServiceTypeFromUrl;
    exports.getSession = getSession;
    exports.getSiteById = getSiteById;
    exports.getSourceFeatureServiceModelFromFieldworker = getSourceFeatureServiceModelFromFieldworker;
    exports.getSpatialRefTypeKeyword = getSpatialRefTypeKeyword;
    exports.getStakeholderModel = getStakeholderModel;
    exports.getStructuredLicense = getStructuredLicense;
    exports.getSubscriptionType = getSubscriptionType;
    exports.getSurveyModels = getSurveyModels;
    exports.getTypeCategories = getTypeCategories;
    exports.getTypes = getTypes;
    exports.getUniqueDomainName = getUniqueDomainName;
    exports.getUniqueDomainNamePortal = getUniqueDomainNamePortal;
    exports.getUniqueItemTitle = getUniqueItemTitle;
    exports.getUniqueSlug = getUniqueSlug;
    exports.getUserHomeUrl = getUserHomeUrl;
    exports.getUserThumbnailUrl = getUserThumbnailUrl;
    exports.getWithDefault = getWithDefault$1;
    exports.hasBasePriv = hasBasePriv;
    exports.hubApiRequest = hubApiRequest;
    exports.hubApiSearch = hubApiSearch;
    exports.hubSearch = hubSearch;
    exports.hubSearchQuery = hubSearchQuery;
    exports.includes = includes;
    exports.incrementString = incrementString;
    exports.interpolate = interpolate;
    exports.interpolateItemId = interpolateItemId;
    exports.inviteUsers = inviteUsers;
    exports.isBBox = isBBox;
    exports.isDomainForLegacySite = isDomainForLegacySite;
    exports.isDomainUsedElsewhere = isDomainUsedElsewhere;
    exports.isDownloadable = isDownloadable;
    exports.isEmptyFilter = isEmptyFilter;
    exports.isEmptyFilterGroup = isEmptyFilterGroup;
    exports.isExtentCoordinateArray = isExtentCoordinateArray;
    exports.isFeatureService = isFeatureService$1;
    exports.isFieldworkerView = isFieldworkerView;
    exports.isGuid = isGuid;
    exports.isLayerView = isLayerView;
    exports.isMapOrFeatureServerUrl = isMapOrFeatureServerUrl;
    exports.isNil = isNil;
    exports.isSlug = isSlug;
    exports.isUpdateGroup = isUpdateGroup;
    exports.isValidDomain = isValidDomain;
    exports.isValidExtent = isValidExtent;
    exports.itemPropsNotInTemplates = itemPropsNotInTemplates;
    exports.itemToContent = itemToContent;
    exports.last = last;
    exports.lookupDomain = lookupDomain;
    exports.mapBy = mapBy;
    exports.maybeAdd = maybeAdd;
    exports.maybePush = maybePush;
    exports.mergeContentFilter = mergeContentFilter;
    exports.mergeDateRange = mergeDateRange;
    exports.mergeGroupFilters = mergeGroupFilters;
    exports.mergeMatchOptions = mergeMatchOptions;
    exports.mergeObjects = mergeObjects;
    exports.mergeSearchOptions = mergeSearchOptions$1;
    exports.mergeUserFilters = mergeUserFilters;
    exports.normalizeItemType = normalizeItemType;
    exports.normalizeSolutionTemplateItem = normalizeSolutionTemplateItem;
    exports.objectToArray = objectToArray;
    exports.objectToJsonBlob = objectToJsonBlob;
    exports.parseDatasetId = parseDatasetId;
    exports.parseItemCategories = parseItemCategories;
    exports.processRevertableTasks = processRevertableTasks;
    exports.propifyString = propifyString;
    exports.registerBrowserApp = registerBrowserApp;
    exports.registerSiteAsApplication = registerSiteAsApplication;
    exports.relativeDateToDateRange = relativeDateToDateRange;
    exports.removeContextFromSlug = removeContextFromSlug;
    exports.removeDomain = removeDomain;
    exports.removeDomainByHostname = removeDomainByHostname;
    exports.removeDomainsBySiteId = removeDomainsBySiteId;
    exports.removeEmptyProps = removeEmptyProps;
    exports.replaceItemId = replaceItemId;
    exports.runRevertableTask = runRevertableTask;
    exports.saveSession = saveSession;
    exports.searchProjects = searchProjects;
    exports.searchSites = searchSites;
    exports.serializeCollectionState = serializeCollectionState;
    exports.serializeContentFilterForPortal = serializeContentFilterForPortal;
    exports.serializeDateRange = serializeDateRange$1;
    exports.serializeGroupFilterForPortal = serializeGroupFilterForPortal;
    exports.serializeMatchOptions = serializeMatchOptions$1;
    exports.serializeModel = serializeModel;
    exports.serializeQueryForPortal = serializeQueryForPortal;
    exports.serializeSpatialReference = serializeSpatialReference;
    exports.serializeStringOrArray = serializeStringOrArray$1;
    exports.serializeUserFilterForPortal = serializeUserFilterForPortal;
    exports.setContentHubId = setContentHubId;
    exports.setContentSiteUrls = setContentSiteUrls;
    exports.setContentType = setContentType;
    exports.setItemThumbnail = setItemThumbnail;
    exports.setProp = setProp;
    exports.setSlugKeyword = setSlugKeyword;
    exports.shareItemToGroups = shareItemToGroups;
    exports.slugify = slugify;
    exports.stringToBlob = stringToBlob;
    exports.stripProtocol = stripProtocol;
    exports.unique = unique;
    exports.uniqueBy = uniqueBy;
    exports.unprotectModel = unprotectModel;
    exports.unshareItemFromGroups = unshareItemFromGroups;
    exports.updateDomain = updateDomain;
    exports.updateModel = updateModel;
    exports.updateProject = updateProject;
    exports.updateSite = updateSite;
    exports.upgradeCatalogSchema = upgradeCatalogSchema;
    exports.upgradeProtocol = upgradeProtocol;
    exports.upgradeSiteSchema = upgradeSiteSchema;
    exports.uploadResourcesFromUrl = uploadResourcesFromUrl;
    exports.validateUrl = validateUrl;
    exports.valueToMatchOptions = valueToMatchOptions;
    exports.without = without;
    exports.withoutByProp = withoutByProp;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=common.umd.js.map
