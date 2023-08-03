import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TicTacToe from "./pages/TicTacToe.jsx";
import Error from "./pages/Error.jsx";
import Weather from "./pages/Weather.jsx";
import Calculator from "./pages/Calculator.jsx";
import Memesmory from "./pages/Memes-mory.jsx";


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Error />,
        },
        {
            path: "tic-tac-toe",
            element: <TicTacToe />,
        },
        {
            path: "weather",
            element: <Weather />,
        },
        {
            path: "calculator",
            element: <Calculator />,
        },
        {
            path: "memes-mory",
            element: <Memesmory />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;