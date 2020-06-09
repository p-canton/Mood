import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const node = document.querySelector('.mdl-layout__inner-container');
    if(node)node.scrollTop = 0;
  }, [pathname]);

  return null;
}
