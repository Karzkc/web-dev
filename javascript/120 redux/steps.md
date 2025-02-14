# Redux Step-by-Step Approach

### 1. Create a Store

- Set up the Redux store using `configureStore` from Redux Toolkit.

### 2. Wrap the App Component in Provider (`main.jsx`)

- Import `Provider` from `react-redux` and wrap the root component (`App`) inside it.

### 3. Create a Slice

- Define a Redux slice using `createSlice`.
- The slice should include an **initial state**, **reducers**, and **actions**.

### 4. Register the Reducer Inside the Store

- Import the slice reducer and add it to the `store` configuration.

### 5. Handle Click Event (With or Without Payload)

#### (a) Click Handler Function

- Define a function that will trigger the action dispatch.

#### (b) Dispatch an Action

- Call `dispatch(action())` inside the click handler.

#### (c) Action is Forwarded from Store to Reducer

- The dispatched action reaches the reducer function.

#### (d) State is Forwarded from Reducer to Store

- The reducer processes the action and updates the state.

### 6. Reducer Function

- The reducer executes logic based on the action type.

### 7. State Value Updation

- The state is updated inside the Redux store.

### 8. UI Update

- The updated state is reflected in the UI using `useSelector`.
