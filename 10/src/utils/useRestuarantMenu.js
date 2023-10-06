import { useEffect, useState } from "react";
import { api1, api2 } from "./constants";
import React from "react";

const useRestuarentMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();


    }, [])

    const fetchMenu = async () => {
        const data = await fetch(api1 + resId + api2);
        const json_d = await data.json();
        setresInfo(json_d.data);

    }
    return resInfo;
}
export default useRestuarentMenu;