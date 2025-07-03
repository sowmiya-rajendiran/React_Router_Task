## Project Name
- 🛒 React Shopping Cart Using Router
- This is a simple React application that demonstrates how to add items to a shopping cart and calculate the total price.

## 🚀 Features
- Add items to the cart
- Prevent duplicate items
- Display cart items using React Router
- Calculate total cart price
- Add quentity of product

## 🧱 Technologies Used
- React JS (Functional Components)
- JavaScript
- useState Hook
- useEffect Hook
- Tailwind Css
- useNavigate
- useLocation
- React Router

## How It Works
- A list of available products is rendered using fetch data. Each product have a title, price, and an "Add to Cart" button.
-  When a user clicks "Add to Cart", the product is added to the cartItems state using React's `useState` hook.  
   - If the item already exists in the cart, an Remove from Cart button is shown.
- Before adding an item, checks if the item already exists in the cart using `.find()`.
-  Display added cart items using a React Router. 
- The total price is dynamically calculated using JavaScript's `.reduce()` 
- This application enables routing between the Product page and the Cart page.

## My Code 
## HTML
- All components are rendered into the DOM through a single index.html file.

## Tailwind Css
- Tailwind CSS can be installed in a Vite project using the official setup steps.
- Used for styling the shopping cart.

## React Hook 
- useState is used to manage the state of the cart items.
- The `useEffect` hook is used to handle side effects in the application, such as: API calling.
- The useNavigate hook is used to navigate between pages and passing state.
- The useLocation hook is used in the cart page for getting data using `location.state` .


## React Router
- Install React Router library to navigate between pages without reloading.
- Using createBrowserRouter and RouterProvider . 

## Deployed Link
- https://react-router-1-task.netlify.app/