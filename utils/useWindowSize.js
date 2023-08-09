
import { useCallback, useState, useEffect } from "react";

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    const handleResize = useCallback(() => {
        const hasWindow = typeof window !== undefined;
        if (hasWindow) {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
    }, []);

    useEffect(() => {
        const hasWindow = typeof window !== undefined;
        if (hasWindow) {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });

            window.addEventListener("resize", handleResize)
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [handleResize]);

    return windowSize;
}

export default useWindowSize;