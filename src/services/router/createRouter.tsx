import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import PlatformLayout from "../../layouts/PlatformLayout";
import platformRoutes from "./platform-routes";
import IntorductionLayout from "../../layouts/IntroductionLayout";
import introductionRoutes from "./introduction-routes";

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            const isIntroduction = localStorage.getItem('introduction') === "1"
            if(isIntroduction) {
                return redirect(platformRoutes.home.path)
            } else {
                return redirect(introductionRoutes.introduction.path)
            }
        },
        errorElement: <ErrorPage/>
    },
    {
        element: <PlatformLayout />,
        children: Object.values(platformRoutes).map((route) => ({
            path: route.path,
            element: route.element
        }))
    },
    {
        element: <IntorductionLayout />,
        children: Object.values(introductionRoutes).map((route) => ({
            path: route.path,
            element: route.element
        }))
    }
]);

const Provider: React.FC = () => <RouterProvider router={router} />;

export default Provider;
