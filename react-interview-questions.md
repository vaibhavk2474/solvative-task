
# How Virtual DOM is Created by React?

## 1. Initial Rendering

When a React component renders for the first time:

- **Component Definition:** You define your React component as a function or a class.
- **JSX:** You use JSX (JavaScript XML) to describe what the UI should look like. For example:

  ```jsx
  const MyComponent = () => (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
  ```

- **React.createElement:** JSX gets compiled to `React.createElement` calls. The above JSX code compiles to:

  ```javascript
  const MyComponent = () => React.createElement('div', null, 
    React.createElement('h1', null, 'Hello, World!')
  );
  ```

- **Virtual DOM Creation:** `React.createElement` returns a plain JavaScript object representing the Virtual DOM tree. This object contains:
  - The type of the element (e.g., `'div'`, `'h1'`).
  - The properties/attributes of the element (e.g., `null` in this case).
  - The children of the element (e.g., another `React.createElement` call for the `h1` element).

## 2. Rendering to the Actual DOM

- **ReactDOM.render:** The `ReactDOM.render` function takes this Virtual DOM tree and converts it to the actual DOM nodes, inserting them into the browser's DOM.

  ```javascript
  ReactDOM.render(<MyComponent />, document.getElementById('root'));
  ```

## 3. Updates and Reconciliation

When a component's state or props change, React needs to update the UI to reflect these changes.

- **Re-rendering:** React re-executes the component function to produce a new Virtual DOM tree.
- **Diffing Algorithm:** React compares the new Virtual DOM tree with the previous one using a diffing algorithm. This process is called "reconciliation."
  - It identifies what has changed (e.g., new elements, removed elements, updated elements).
- **Batch Updates:** Instead of updating the DOM immediately, React batches updates for better performance.

## 4. Applying Changes

- **Efficient DOM Updates:** React computes the minimal set of changes required and updates the actual DOM in a single batch.
  - For example, if only the text inside an `h1` element changed, React will only update the text node instead of re-rendering the entire tree.

## Summary

- **Virtual DOM Creation:** Through `React.createElement` calls from JSX.
- **Initial Rendering:** Converts Virtual DOM to actual DOM.
- **Updates/Reconciliation:** On state/props change, React diffs the new Virtual DOM with the old one.
- **Efficient DOM Updates:** Applies the minimal set of changes to the actual DOM.
