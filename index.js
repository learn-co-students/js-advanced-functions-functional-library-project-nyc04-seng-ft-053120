let fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, iteratee) {
      let newCollection;

      if (collection instanceof Array) {
        newCollection = collection.slice();
      } else {
        newCollection = Object.values(collection);
      }

      for (let i = 0; i < newCollection.length; i++) {
        iteratee(newCollection[i]);
      }
      return collection;
    },

    map: function (collection, callbackFn) {
      let newCollection;
      let result = [];

      if (collection instanceof Array) {
        newCollection = collection.slice();
      } else {
        newCollection = Object.values(collection);
      }

      for (let i = 0; i < newCollection.length; i++) {
        result.push(callbackFn(newCollection[i]));
      }

      return result;
    },

    reduce: function (collection, callback, acc) {
      let collectionCopy = collection.slice();
      let total = acc;
      if (!total) {
        total = collectionCopy[0];
        collectionCopy = collectionCopy.slice(1);
      }

      for (let element of collectionCopy) {
        total = callback(total, element);
      }
      return total;
    },

    find: function (collection, predicate) {
      let newCollection;

      if (collection instanceof Array) {
        newCollection = collection.slice();
      } else {
        newCollection = Object.values(collection);
      }

      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          return newCollection[i];
        }
      }
    },

    filter: function (collection, predicate) {
      let newCollection;

      if (collection instanceof Array) {
        newCollection = collection.slice();
      } else {
        newCollection = Object.values(collection);
      }
      let results = [];
      for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
          results.push(newCollection[i]);
        }
      }
      return results;
    },

    size: function (collection) {
      return collection instanceof Array
        ? collection.length
        : Object.values(collection).length;
    },

    first: function (array, n) {
      return n ? array.slice(0, n) : array[0];
    },

    last: function (array, n) {
      return n ? array.slice(-n) : array[array.length - 1];
    },

    compact: function (array) {
      let results = [];

      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          results.push(array[i]);
        }
      }
      return results;
    },

    sortBy(array, callback) {
      return array.slice().sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten(array, shallow) {
      let result = [];
      if (arguments[1] === true) {
        for (let element of array) {
          if (Array.isArray(element)) {
            result.push(...element);
          } else {
            result.push(element);
          }
        }
      } else {
        for (let element of array) {
          if (Array.isArray(element)) {
            result = result.concat(fi.flatten(element));
          } else {
            result.push(element);
          }
        }
      }
      return result;
    },

    simpleUniq: function (array) {
      const result = [];
      for (const elem of array) {
        if (!result.includes(elem)) {
          result.push(elem);
        }
      }
      return result;
    },

    uniq: function (arr, sorted, callback) {
      let [array, isSorted, callbackFn] = arguments;
      if ((array && isSorted) || arguments.length === 1) {
        return fi.simpleUniq(array);
      } else {
        const allResultingVals = [];
        const uniqueElementArr = [];
        for (const elem of array) {
          if (!allResultingVals.includes(callbackFn(elem))) {
            uniqueElementArr.push(elem);
            allResultingVals.push(callbackFn(elem));
          }
        }
        return uniqueElementArr;
      }
    },

    keys: function (object) {
      let result = [];

      for (let key in object) {
        result.push(key);
      }
      return result;
    },

    values: function (object) {
      let result = [];

      for (let key in object) {
        result.push(object[key]);
      }
      return result;
    },

    functions: function (object) {
      let result = [];

      for (let key in object) {
        if (typeof object[key] === "function") {
          result.push(object[key]);
        }
      }
      return result.sort();
    },
  };
})();

fi.libraryMethod();