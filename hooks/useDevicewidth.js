import { useState, useEffect } from 'react';

const useDeviceWidth = (maxWidth) => {
  const isClient = typeof window === 'object';

  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 0);
  const [isWidthExceeded, setIsWidthExceeded] = useState(isClient ? window.innerWidth > maxWidth : false);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsWidthExceeded(newWidth > maxWidth);
  };

  useEffect(() => {
    if (isClient) {
      // Attach event listener on mount
      window.addEventListener('resize', handleResize);

      // Detach event listener on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [maxWidth, isClient]);

  return isWidthExceeded;
};

export default useDeviceWidth;
