import React from 'react';
import { RouteList } from './routes';
import Matchmaking from 'src/pages/platform-pages/quiz/Matchmaking';
import Cases from 'src/pages/platform-pages/cases/Cases';
import Definition from 'src/pages/platform-pages/definition/Definition';
import Resources from 'src/pages/platform-pages/resources/Resources';
import { DictionaryIcon, HomeIcon, ResourcesIcon, SurveyIcon } from 'src/components/navigation/icons';
import CasesIcon from 'src/components/navigation/icons/Cases-icon';
import Home from 'src/pages/platform-pages/home/Home';
import { AICloud, Strato, UCloud } from 'src/pages/platform-pages/resources/components/details';
import { Comparison } from 'src/pages/platform-pages/resources/components/comparison';
import { Quiz } from 'src/pages/platform-pages/quiz/components/quiz';


const platformRoutes: RouteList = {
    home: {
        icon: <HomeIcon />,
        name: 'Home',
        path: '/home',
        element: <Home />
    },
    resources: {
        icon: <ResourcesIcon />,
        name: 'HPC Resources',
        path: '/resources',
        element: <Resources />
    },
    matchmaking: {
        icon: <SurveyIcon />,
        name: 'HPC Matchmaking Quiz',
        path: '/matchmaking',
        element: <Matchmaking />
    },
    dictionary: {
        icon: <DictionaryIcon />,
        name: 'Definition Library',
        path: '/definition',
        element: <Definition />
    },
    cases: {
        icon: <CasesIcon />,
        name: 'Use Cases',
        path: '/cases',
        element: <Cases />
    },

    strato: {
        show: false,
        name: 'Strato',
        path: '/strato',
        element: <Strato />
    },
    quiz: {
        show: false,
        name: 'Quiz',
        path: '/quiz',
        element: <Quiz />
    },
    aicloud: {
        show: false,
        name: 'AI Cloud',
        path: '/aicloud',
        element: <AICloud />
    },
    ucloud: {
        show: false,
        name: 'UCloud',
        path: '/ucloud',
        element: <UCloud />
    },
    comparison: {
        show: false,
        name: 'Comparison',
        path: '/comparison',
        element: <Comparison />
    },
}

export default platformRoutes;