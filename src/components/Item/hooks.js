import { useState } from "react";

export const useHooks = () => { 
    const [isHover, setIsHover] = useState(false);
    const handleHover = () => {
        setIsHover(!isHover);
    }
    return {handleHover, isHover};
}