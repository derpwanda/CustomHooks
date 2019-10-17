import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

// //BEFORE USE LOCAL STORAGE
// // 1. We take initialValue as a parameter
// export const useInput = initialValue => {
//   //2. initialValue is passed to the useState hook
//   // which returns an array with the `value` variable and
//   // `setValue` function
//   const [value, setValue] = useState(initialValue);

//   //3. `handleChanges` is a function that uses the `setValue`
//   // function to update state to a new value.
//   const handleChanges = updatedValue => {
//     setValue(updatedValue);
//   };

//   //4. We then return an array from the custom hook that
//   // contains the value `variable`, the `setValue` function and
//   // `handleChanges` function
//   return [value, setValue, handleChanges];
// };

// // above is a custom hook that allows us to update data
// // it can be used in several functions/components to update data as needed

//AFTER USE LOCAL STORAGE
export const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  };
  return [value, setValue, handleChanges];
};

//Now in our useInput hooks in CustomForn, we need to add a unique key
// for each input to be used in localStorage
