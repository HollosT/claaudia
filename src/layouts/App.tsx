import React from 'react';
import Provider from '../services/router/createRouter';
import QuestionProvider from 'src/services/context/questionnaire/QuestionProvider';
import DefinitionProvider from 'src/services/context/definition/DefinitionProvider';
import ComparisonProvider from 'src/services/context/comparison/ComparisonProvider';

const App: React.FC = () => {


  return (
    <QuestionProvider>
      <DefinitionProvider>
        <ComparisonProvider>
          <Provider />
        </ComparisonProvider>
      </DefinitionProvider>
    </QuestionProvider>
  )
}

export default App;
