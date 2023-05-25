import React from 'react';
import Provider from '../services/router/createRouter';
import QuestionProvider from 'src/services/context/questionnaire/QuestionProvider';
import DefinitionProvider from 'src/services/context/definition/DefinitionProvider';
import ComparisonProvider from 'src/services/context/comparison/ComparisonProvider';
import {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const App: React.FC = () => {


  return (
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
  )
}

export default App;
