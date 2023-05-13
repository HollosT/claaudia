import React from 'react';
import { RouteList } from './routes';
import Survey from 'src/pages/platform-pages/survey/Survey';
import About from 'src/pages/platform-pages/about/About';
import Cases from 'src/pages/platform-pages/cases/Cases';
import Dictionary from 'src/pages/platform-pages/dictionary/Dictionary';
import Resources from 'src/pages/platform-pages/resources/Resources';
import { DictionaryIcon, ResourcesIcon, SurveyIcon } from 'src/components/navigation/icons';
import CasesIcon from 'src/components/navigation/icons/Cases-icon';
import AboutIcon from 'src/components/navigation/icons/About-icon';

const platformRoutes: RouteList = {
    resources: {
        icon: <ResourcesIcon />,
        name: 'AAU HPC Resources',
        path: '/resources',
        element: <Resources />
    },
    survey: {
        icon: <SurveyIcon />,
        name: 'HPC Survey',
        path: '/survey',
        element: <Survey />
    },
    dictionary: {
        icon: <DictionaryIcon />,
        name: 'Terms dictionary',
        path: '/dictionary',
        element: <Dictionary />
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