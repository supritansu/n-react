import { useEffect } from "react";
import { useState } from "react";
const useOnlinestatus = () => {
    const [onlinestatus, setOnlinestatus] = useState(true);
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlinestatus(true)
        });
        window.addEventListener("offline", () => {
            setOnlinestatus(false)
        });

    });

    return onlinestatus;
}
export default useOnlinestatus;