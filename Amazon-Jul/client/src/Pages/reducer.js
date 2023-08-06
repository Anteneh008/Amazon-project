export const initialState = {
  basket: [],
  // user: null,
};

// console.log(initialState)

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id} as its not in basket!)`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;


// const numbers = [10, 20, 30, 40, 50];

// const index = numbers.findIndex((element) => element > 30);

// console.log(index); // Output: 3
// In this example, the findIndex method is called on the numbers array. The callback function (element) => element > 30 checks if each element is greater than 30. It returns the index of the first element that satisfies the condition, which is 3 in this case (corresponding to the element 40).


// const numbers = [10, 20, 30, 40, 50];

// const removedElements = numbers.splice(2, 2);

// console.log(numbers); // Output: [10, 20, 50]
// console.log(removedElements); // Output: [30, 40]
// In this example, the splice method is called on the numbers array with start index of 2 and deleteCount of 2. It removes two elements starting from index 2 (elements 30 and 40) and modifies the array in place. The removed elements are returned as an array [30, 40].


// Example 2: Adding elements to an array

// javascript
// Copy code
// const fruits = ['apple', 'banana', 'orange'];

// fruits.splice(1, 0, 'grape', 'kiwi');

// console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'banana', 'orange']
// In this example, the splice method is called on the fruits array to insert two elements ('grape' and 'kiwi') at index 1 without removing any elements. It modifies the array in place and adds the new elements at the specified index.

// Example 3: Replacing elements in an array

// javascript
// Copy code
// const colors = ['red', 'green', 'blue'];

// colors.splice(1, 1, 'yellow');

// console.log(colors); // Output: ['red', 'yellow', 'blue']
// In this example, the splice method is called on the colors array to replace one element at index 1 with the element 'yellow'. It modifies the array in place and replaces the existing element with the new element.

// Here's the syntax for the splice method:

// javascript
// Copy code
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// array: The array on which splice is called.
// start: The index at which to start changing the array. If negative, it is treated as array.length + start. If greater than the array length, it is set to array.length.
// deleteCount (optional): The number of elements to remove starting from the start index. If omitted or 0, no elements are removed.
// item1, item2, ... (optional): The elements to add to the array starting from the start index.
