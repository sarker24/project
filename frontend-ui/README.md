# Frontend UI [WIP]

## Conventions

### Components
- prefer controlled components over uncontrolled. [read about it here](https://reactjs.org/docs/forms.html#controlled-components)
- Use functional components instead of class components
- Wrap components inside React.forwardRef HOC, so we can reach the native dom element, if necessary, from client apps
- Wrap component inside React.memo HOC, if rendering component is costly (only as optimisation)
- Currently, to save time, we dont do unit tests

### Naming components
- Use PascalCase eg Button
- Add 3 files
  - 1 file for the component eg. ``Button.tsx``
  - 1 file for story eg. ``Button.stories.tsx``
  - 1 file to export the component ``index.tsx`` (to avoid having lots of index.tsx tabs)
  
### Class names
- To avoid having long string literals, group the classes
  - By base classes that apply always
  - By state classes that apply in specified states, eg. ``:hover, :active, :focus, :disabled``
  - By color classes, eg. ``text-primary, bg-success, border-warning``
    - color classes must be written without string interpolation or purge plugin will mess up your styling

### Spacings
- If one element is closely related to another element, use spacing of 2 between the elements, eg. ``ml-2``
  - eg. label with an icon 
- If one element is closely related to a group of elements, use spacing of 3 between the element and group, eg. ``ml3``
  - eg. input group with an icon
  
### Classnames
- **Don't** add className prop to the elements. We want to have control over all components.

### External Libraries
- Consolidate the other developers before importing a new library into the project. We want to implement as many components as we can in-house without using external libraries. 

## Set up

1. Run install.sh script to set up fontawesome dependency, you will need access key to fontawesome. You only need to run this script once

## Git hooks
- We have three different git hooks added to this project to help us with some trivial tasks
  - prepare-commit-msg: Will automatically add the jira issue to the beginning of the commit message if its missing, or set the correct one if it not matches the branch
  - pre-commit: Will lint all staged files and try to fix them. **If your commit fails, it's probably due to a linting error**
  - pre-push: Will run 'npm run build' and add all changed files from the lib folder to the commit, and then push it afterwards


