import { useState } from "react";

//1. pass in a `key` value and an `initialValue`
// these will be used in the interior hook
const useLocalStorage = (key, initialValue) => {
  // create hook that passes the above values and
  // uses an anonymous (empty) callback function to...
  const [storedValue, setStoredValue] = useState(() => {
    //a. check if `window.localStorage` has a specific item: `key`
    const item = window.localStorage.getItem(key);
    //b. returns that item from local storage if it exists,
    // else, return the `initialValue`
    return item ? JSON.parse(item) : initialValue;
  });

  //2. our `setValue` function takes a value...
  const setValue = value => {
    // ...and sets it to `storedValue` using the `setStoredValue`
    // in `useState`, which adds it to localStorage!
    // On refresh it will check localStorage to see if the state exists
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
