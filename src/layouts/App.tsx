import React, { useContext, useEffect } from 'react';
import Provider from '../services/router/createRouter';
import QuestionProvider from 'src/services/context/questionnaire/QuestionProvider';
import DefinitionProvider from 'src/services/context/definition/DefinitionProvider';
import ComparisonProvider from 'src/services/context/comparison/ComparisonProvider';
import {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import HPCProvider from 'src/services/context/hpc/HPCProvider';
import { HPCContext } from 'src/services/context/hpc/hpc-context';
import { useFetchData } from 'src/hooks';
import { getAllSystemData } from 'src/services/firebase/firebase.utils';
import { Loading } from 'src/atoms';
const App: React.FC = () => {
 

  
  return (
    <HPCProvider>
      <QuestionProvider>
        <DefinitionProvider>
          <ComparisonProvider>
            <SkeletonTheme
              duration={4}
              baseColor='#DADADA'
              highlightColor='#F9F9F9'
              borderRadius={4}
            >
              <Provider />
            </SkeletonTheme>
          </ComparisonProvider>
        </DefinitionProvider>
      </QuestionProvider>
    </HPCProvider>
  )
}

export default App;
