# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<!-- Some key TakeAways -->
**What Createroot do** 
    React dont create a full DOM copy of browser side by side , it create a VIRTUAL DOM in its memory and whenever any changes occure it compare its DOM with Browser DOM if any changes there that changes will only be made 

**Browser Reload vs React reload**
    Browser reload is like reloding every thing html css js 
    React reload means --> the entire page will not load only the changes will be loden and nodes will be change

**Why React is Optimized**
    React UI create a Tree like structure in its memory , any new render come then it compare with previous tree and then decide which part must be needed changes 

**reconciliation**
    Will check which parts has to be change after comparing the Browser tree and React tree 
    This is only ths thing which called as VIRTUAL DOM behind the sceen
    we are just updating the Selective Parts 

**Why to Introduce Keys**
    Because fiber is the new alogo in that if you want to improve the list performance then you have to use keys 

**Reconciliation versus rendering**
    *Reconciliation* = React ka wo process jisme purane tree aur naye tree ka comparison hota hai aur decide hota hai ki kya update karna hai.
    *Rendering* = Wo step jahan React actual update apply karta hai (DOM update, or React Native view update).

**Fiber**
    The main goal of fiber is to enable react to take use of Scheduling 
        Specially when you need to --> 
            Pause work and come back later 
            assign priority to different types 
            reuse previously completed work 
            abort work when no longer needed 

