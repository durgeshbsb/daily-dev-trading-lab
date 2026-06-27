https://jsdev.space/react-interview-questions-2026/?ref=dailydev#understanding-how-react-actually-renders

# 14 june 2026

so every hook starts with use

- pure functions are those functions which return same output everytime when u give same input irrespective of time
- always use state instead of variable when it is to be dynamic
- Pure functions don’t mutate variables outside of the function’s scope or objects that were created before the call. and if that happens than it's called mutation
- Call useCallback at the top level of your component to cache a function definition between re-renders:
- useState hook is used to manage the state of a component in functional components
- useEffect(setup, dependencies?) is a React Hook that lets you synchronize a component with an external system.
- useCallback Caches your function itself
- useMemo Calls your function and caches its result
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.(a way to create a mutable reference that persists across component re-renders)
- useContext and createContext are used to share data between components without having to pass props down through every level of the component tree
- memoization or memoisation is an optimization technique used primarily to speed up computer programs. It works by storing the results of expensive calls to pure functions, so that these results can be returned quickly should the same inputs occur again. 


# 19 june 2026

react