import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import WelcomePage from "./ui/pages/welcome/WelcomePage";
import LoginPage from "./ui/pages/login/LoginPage";
import NoContentPage from "./ui/pages/noContent/noContent";
import EditPage from "./ui/pages/edit/EditPage";
import NavBar from "./ui/components/NavBar";
import IndexPage from "./ui/pages/index/IndexPage";

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
        element: <EditPage name={'malparido'}/>
    },
    {
        path:'/navBar',
        element: <NavBar></NavBar>
    }

])

export default router