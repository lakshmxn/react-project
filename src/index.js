import React from "react";
import ReactDOM from "react-dom/client";
import TopAppBar from "./components/TopAppBar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Error from "./components/Error";
import AboutContainer from "./components/AboutContainer";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"; 

const App = () => {
    return (
        <div className="app">
            <TopAppBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Container/>,
            },
            {
                path: "about",
                element: <AboutContainer />,
            }
        ],
        errorElement:<Error/>,
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);