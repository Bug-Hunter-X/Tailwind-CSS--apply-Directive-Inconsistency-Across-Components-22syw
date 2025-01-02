# Tailwind CSS @apply Directive Inconsistency

This repository demonstrates a bug where Tailwind CSS's `@apply` directive behaves inconsistently across components, particularly within a framework like Next.js or Nuxt.js.  The issue revolves around the correct configuration and propagation of `@apply` directives up the component tree.  The `bug.js` file shows the problematic code, and `bugSolution.js` illustrates the fix.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install` (or `yarn install`).
3. Run the development server (as per your framework's instructions).
4. Observe the inconsistent application of styles in different components.

## Solution

The solution involves carefully reviewing how `@apply` directives are used and ensuring the parent component is properly configured to handle them. The `bugSolution.js` shows the corrected code. This might involve adjustments to the component structure or Tailwind configuration, including correctly importing and configuring Tailwind's base styles, components and utilities in the parent component.