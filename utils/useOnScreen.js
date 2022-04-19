import { useEffect, useState } from "react";

function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible

    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        let observerRefValue = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold: 1,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
            observerRefValue = ref.current;
        }
        return () => {
            if (observerRefValue) observer.unobserve(observerRefValue);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
}

export default useOnScreen;