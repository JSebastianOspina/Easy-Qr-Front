import {createBrowserRouter} from "react-router-dom";
import WelcomePage from "./ui/pages/welcome/WelcomePage";
import LoginPage from "./ui/pages/login/LoginPage";
import NoContentPage from "./ui/pages/noContent/noContent";
import EditPage from "./ui/pages/edit/EditPage";
import IndexPage from "./ui/pages/index/IndexPage";
import ShowQR from "./ui/pages/showQR/ShowQR";

const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage/>
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/no-content',
        element: <NoContentPage/>
    },
    {
        path:'/index',
        element: <IndexPage />
    },
    {
        path: '/edit',
        element: <EditPage/>
    },
    {
        path: '/show-qr',
        element: <ShowQR/>
    },

])

export default router