import React, { useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import data from "./default";



const SurveyComponent = () => {

  
    
    const survey = new Model(data);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });

    const [surveyData, setSurveyData] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);

    const onSurveyValueChanged = (survey, options) => {
      setSelectedValue(options.value);
    };
    return (
      <>
        <Survey
          model={survey}
          onValueChanged={onSurveyValueChanged}
          onComplete={(survey) => setSurveyData(survey.data)}
          goNextPageAutomatic={false}
          className={{ root: 'custom-survey', question: 'custom-question' }}
        />
        {selectedValue && (
        <div>
          <h2>Selected Value:</h2>
          <p>{selectedValue}</p>
        </div>
        )}

        {surveyData && (
          <div>
            <h2>Survey Data:</h2>
            <pre>{JSON.stringify(surveyData, null, 2)}</pre>
          </div>
        )}
      </>
    
    );

}

export default SurveyComponent;