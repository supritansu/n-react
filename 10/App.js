import React from "react";
import ReactDOM from "react-dom";

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
    return (
        <div className="app">
            <Header />

            <Outlet />
        </div>
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