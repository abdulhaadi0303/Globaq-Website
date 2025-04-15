import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Try different scrolling methods
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // For modern browsers
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto" // or "smooth" for animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;