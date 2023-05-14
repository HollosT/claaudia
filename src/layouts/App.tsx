import React from 'react';
import Provider from '../services/router/createRouter';
import QuestionProvider from 'src/services/context/question/QuestionProvider';



const App: React.FC = () => {
  
  return (
    <QuestionProvider>
      <Provider />
    </QuestionProvider>
  )
}

export default App;
