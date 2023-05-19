import React from 'react';
import Provider from '../services/router/createRouter';
import QuestionProvider from 'src/services/context/questionnaire/QuestionProvider';
import DefinitionProvider from 'src/services/context/definition/DefinitionProvider';

const App: React.FC = () => {


  return (
    <QuestionProvider>
      <DefinitionProvider>
        <Provider />
      </DefinitionProvider>
    </QuestionProvider>
  )
}

export default App;
