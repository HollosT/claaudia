import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import PlatformLayout from "../../layouts/PlatformLayout";
import platformRoutes from "./platform-routes";

const router = createBrowserRouter([
    {
        path: "/",
        loader: () => {
            return redirect(platformRoutes.home.path)
        },
        errorElement: <ErrorPage/>
    },
    {
        element: <PlatformLayout />,
        children: Object.values(platformRoutes).map((route) => ({
            path: route.path,
            element: route.element
        }))
    }
]);

const Provider: React.FC = () => <RouterProvider router={router} />;

export default Provider;
