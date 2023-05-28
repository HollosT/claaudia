import React, { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import data from "./default";



const SurveyComponent = () => {
    const [ results, setResults] = useState(null)
    const [survey, setSurvey] = useState(null);

    const customStyles = {
      "question": {
        "content": "question-content",
        "answered": "question-answered",
    }
    };

    const onSurveyValueChanged = (survey, options) => {
      console.log(options)

      const selectedValue = survey.getValue(options.name);
  
      const question = data.pages.find((page) =>
        page.elements.some((element) => element.name === options.name && element.type === 'radiogroup')
      );
  
      if (question) {
        // Find the choice object based on the selected value
        const choice = question.elements[0].choices.find((c) => c.value === selectedValue);
  
        if (choice) {
          // Access the additional value for the selected choice
          const additionalValue = choice.result;
          console.log(additionalValue)
          setResults(additionalValue);
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
  

    // console.log(results)
    return (
      <>

        {survey && <Survey model={survey} css={customStyles} />}
        {results && results.map(r => (
          <p key={r}>{r}</p>
        ))}
      </>
    );
  };
  
  export default SurveyComponent;

  
  
  
  
  