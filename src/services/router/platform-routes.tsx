import React from 'react';
import { RouteList } from './routes';
import Matchmaking from 'src/pages/platform-pages/quiz/Matchmaking';
import About from 'src/pages/platform-pages/about/About';
import Cases from 'src/pages/platform-pages/cases/Cases';
import Definition from 'src/pages/platform-pages/definition/Definition';
import Resources from 'src/pages/platform-pages/resources/Resources';
import { DictionaryIcon, HomeIcon, ResourcesIcon, SurveyIcon } from 'src/components/navigation/icons';
import CasesIcon from 'src/components/navigation/icons/Cases-icon';
import AboutIcon from 'src/components/navigation/icons/About-icon';
import Home from 'src/pages/platform-pages/home/Home';
import { AICloud, LocalMachine, Strato, UCloud } from 'src/pages/platform-pages/resources/components/details';
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
        name: 'AAU HPC Resources',
        path: '/resources',
        element: <Resources />
    },
    matchmaking: {
        icon: <SurveyIcon />,
        name: 'HPC Matching quiz',
        path: '/matchmaking',
        element: <Matchmaking />
    },
    dictionary: {
        icon: <DictionaryIcon />,
        name: 'Definition library',
        path: '/definition',
        element: <Definition />
    },
    cases: {
        icon: <CasesIcon />,
        name: 'Use cases',
        path: '/cases',
        element: <Cases />
    },
    about: {
        icon: <AboutIcon />,
        name: 'About HPC',
        path: '/about',
        element: <About />
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
    localmachine: {
        show: false,
        name: 'Local Machine',
        path: '/localmachine',
        element: <LocalMachine />
    },
    comparison: {
        show: false,
        name: 'Comparison',
        path: '/comparison',
        element: <Comparison />
    },
}

export default platformRoutes;