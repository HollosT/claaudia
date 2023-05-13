import React from 'react';
import { RouteList } from './routes';
import Introduction from '../../pages/introduction/Introduction';


const introductionRoutes: RouteList = {
    introduction: {
        name: 'Intorduction',
        path: '/introduction',
        element: <Introduction />
    }
}

export default introductionRoutes;