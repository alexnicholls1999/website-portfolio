import { useEffect, useState, useRef } from "react";

function fadeIn(entries, visibile, observer, ref) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            visibile(entry.isIntersecting);
            observer.unobserve(ref.current);
        }
    })
}

export default function useFadeIn() {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
      const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -100px 0px"
      };
  
      const observer = new IntersectionObserver((entries) => {
        fadeIn(entries, setVisible, observer, domRef);
      }, appearOptions);
  
      observer.observe(domRef.current);
    });
  
    return {
      isVisible,
      domRef
    };
  }