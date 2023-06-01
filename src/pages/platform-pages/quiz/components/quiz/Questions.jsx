import React, { useEffect, useState, useContext, createContext } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.min.css";
import data from "./constants";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import ProgressBar from "./ProgressBar";
import CurrentHPCs from "./CurrentHPCs";


export const ModelContext = createContext();

const Questions = () => {
    const {handleCurrentHPCs , handleProgress} = useContext(QuestionContext)
    const [survey, setSurvey] = useState(null);
  
    const customStyles = {
      "question": {
        "content": "question-content",
        "answered": "question-answered",
    }
    };

    const onSurveyValueChanged = (survey, options) => {

      const selectedValue = survey.getValue(options.name);
  
      const question = data.pages.find((page) =>
        page.elements.some((element) => element.name === options.name && element.type === 'radiogroup')
      );
  
      if (question) {
        const choice = question.elements[0].choices.find((c) => c.value === selectedValue);
  
        if (choice) {
          const additionalValue = choice.result;
          const progress = choice.progress;
          handleCurrentHPCs(additionalValue);
          handleProgress(progress)
        }
      }
    };

 
    
    useEffect(() => {
      const initializedSurvey = new Model(data);
      initializedSurvey.onValueChanged.add((survey, options) => {

        onSurveyValueChanged(survey, options)
      });

      initializedSurvey.css = customStyles;
  
      setSurvey(initializedSurvey);
    }, []);
  

    return (
      <ModelContext.Provider value={survey}>
            <ProgressBar />
        <div className="quiz-body u-margin-top-small">
            <div className="survey">
              {survey && <Survey model={survey} />} 
            </div>
            <CurrentHPCs />
        </div>
      </ModelContext.Provider>
    );
  };
  
  export default Questions;