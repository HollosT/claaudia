
// https://reactrouter.com/en/main
// Handeling the navigation app wide
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import PlatformLayout from "../../layouts/PlatformLayout";
import platformRoutes from "./platform-routes";
import IntorductionLayout from "../../layouts/IntroductionLayout";
import introductionRoutes from "./introduction-routes";

// This function determines which layout should be laoded based on the current path

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            // If the local storage has introduction taht measn the user already visited the page so there is no need to show the introduction page
            // Hoem page will be loaded
            const isIntroduction = localStorage.getItem('introduction') === "1";
            if (isIntroduction) {
                return redirect(platformRoutes.home.path);
            } else {
            // If there is no introduction in the local storage the introduction page will be loaded
                return redirect(introductionRoutes.introduction.path);
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
