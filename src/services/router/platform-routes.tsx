import React from 'react';
import { RouteList } from './routes';
import Survey from 'src/pages/platform-pages/quiz/Survey';
import About from 'src/pages/platform-pages/about/About';
import Cases from 'src/pages/platform-pages/cases/Cases';
import Definition from 'src/pages/platform-pages/definition/Definition';
import Resources from 'src/pages/platform-pages/resources/Resources';
import { DictionaryIcon, HomeIcon, ResourcesIcon, SurveyIcon } from 'src/components/navigation/icons';
import CasesIcon from 'src/components/navigation/icons/Cases-icon';
import AboutIcon from 'src/components/navigation/icons/About-icon';
import Home from 'src/pages/platform-pages/home/Home';

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
    quiz: {
        icon: <SurveyIcon />,
        name: 'HPC Matching quiz',
        path: '/quiz',
        element: <Survey />
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
}

export default platformRoutes;