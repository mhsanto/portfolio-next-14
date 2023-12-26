import { useState, useEffect } from 'react';

const useDeviceWidth = (maxWidth) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isWidthExceeded, setIsWidthExceeded] = useState(window.innerWidth <= maxWidth);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsWidthExceeded(newWidth > maxWidth);
  };

  useEffect(() => {
    // Attach event listener on mount
    window.addEventListener('resize', handleResize);

    // Detach event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxWidth]);

  return isWidthExceeded;
};

export default useDeviceWidth;