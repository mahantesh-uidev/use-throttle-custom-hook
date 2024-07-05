import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
    const [throttledValue, setThrottledValue] = useState(value);

    const lastExecuted = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
          const now = Date.now(); // this will give us the current time
        
          const timeElapsed = now - lastExecuted.current;

          if(timeElapsed >= delay){
            setThrottledValue(value);
            // will update the last executed to current time
            lastExecuted.current = now;
          }

        }, delay - (Date.now() - lastExecuted.current)); // So it will keep updated with the current time

        return () => {
            clearTimeout(handler);
        }
    }, [delay, value]);

    return throttledValue;
}

export default useThrottle;