# useThrottle custom hook

let us take an example of resizing the window event, suppose if we resize the window it should make an API call or take some action.

So, for every resize of an window event if the API call is made, it's not a good way.

We can use useThrottle custom hook, it will apply the throttling performance optimization technique to the handleResize function throgh which we can reduce the no. of API calls.

# steps to create useTrottle hook

# Initialise state
Create a state to hold the throttled value using useState.

# Track the last Execution Time
useRef to keep track of the last time the function was executed.

# useEffect for Throttling
    - set up a timer (using setTimeout) to handle the logic
    - Inside the Timer
        - Check the time elapsed since the last execution.
        - If the elapsed time is greater than or equal to the specified delay, update the throttled value and the last execution time.
    - Calculate the remaining time for execution (if any)
    - return Clean up function to clear the timer.
    - return the throttled value from the hook.
