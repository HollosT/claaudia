import React from 'react';
import { RouteList } from './routes';
import Home from '../../pages/Home';
import Definition from '../../pages/Definition';



const platformRoutes: RouteList = {
    home: {
        name: 'Home',
        path: '/home',
        element: <Home />
    },

    definition: {
        name: 'Definition',
        path: '/definition',
        element: <Definition />
    },
}

export default platformRoutes;