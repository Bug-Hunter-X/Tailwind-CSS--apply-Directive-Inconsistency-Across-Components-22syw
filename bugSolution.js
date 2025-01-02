The solution involves ensuring that the parent component is properly configured to use Tailwind's `@apply` directives. This might require adjustments to how the parent component is structured or additional configuration in your Tailwind setup.

Here's an example of how to correctly structure your components to resolve this issue:

// bugSolution.js

// Parent Component (corrected):
import './globals.css' //Important to include this file in the parent component

function ParentComponent() {
  return (
    <div className="bg-gray-100">
      <ChildComponent />
    </div>
  );
}

// Child Component:
function ChildComponent() {
  return (
    <div className="@apply rounded-lg p-4 bg-white shadow-md">
      {/* Content */}
    </div>
  );
}

//Ensure your `tailwind.config.js` is correctly set up.
export default ParentComponent; 