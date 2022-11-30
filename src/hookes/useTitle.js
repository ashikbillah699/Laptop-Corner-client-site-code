import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Laptop Corner`
    }, [title])
};

export default useTitle;