import { useEffect, useState, useRef } from "react";

export default function useFadeIn() {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {

        const appearOptions = {
            threshold: 1,
            rootMargin: "0px 0px -150px 0px"
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(!entry.isIntersecting) {
                    return;
                } else {
                    setVisible(entry.isIntersecting);
                    observer.unobserve(domRef.current);
                }
            });
        }, appearOptions);

        observer.observe(domRef.current);
    })

    return {
        isVisible,
        domRef
    }
}