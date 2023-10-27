import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import UserContext from "./src/utils/context";
import "./index.css";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestuarantMenu from "./src/components/RestuarantMenu";

//import Grocery from "./src/components/Grocery";
import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./src/components/Grocery"));


const AppLayout = () => {
    useEffect(() => {
        const data = {
            name: "Suprit"
        }
        setusername(data.name)
    }, [])
    const [username, setusername] = useState()
    return (
        <UserContext.Provider value={{ loggedinUser: username }}><div className="app">
            <Header />

            <Outlet />
        </div></UserContext.Provider>

    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/about",
                element: <About />,


            }, {
                path: "/",
                element: <Body />,


            }, {
                path: "/grocerry",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,


            }],
        errorElement: <Error />

    },
    {
        path: "/restuarant/:resId",
        element: <RestuarantMenu />,


    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />)