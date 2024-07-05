import { useState, useEffect} from 'react'
import './App.css'
import useThrottle from './hooks/use-throttle';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      }
    );
    // Any expensive operation or an API Call
    console.log('Expensive API call');
  };

  const throttledHandleResize = useThrottle(handleResize, 1000);
  
  useEffect(() => {
    window.addEventListener('resize', throttledHandleResize);

    return () => {
      window.removeEventListener('resize', throttledHandleResize);
    }
  }, []);
  return (
    <div>
      Window Size: {windowSize.width} X {windowSize.height}
    </div>
  )
}

export default App
