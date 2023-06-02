import React, { useEffect, useState, useContext } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.min.css";
import data from "./constants";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import ProgressBar from "./ProgressBar";
import { Serializer } from "survey-core";
import CurrentHPCs from "./CurrentHPCs";
import FinishedQuiz from "./FinishedQuiz";

Serializer.addProperty("question", "popupdescription:text");
Serializer.addProperty("page", "popupdescription:text");

function showDescription(element) {
    document.getElementById("questionDescriptionText").innerHTML = element.popupdescription;
    var popupEl = document.getElementById("questionDescriptionPopup");
    document.getElementById("questionDescriptionPopupClose").onclick = () => { popupEl.close(); }
    popupEl.showModal();
}


const Questions = () => {
    const {handleCurrentHPCs , handleProgress, currentHPCs, finished, handleFinished} = useContext(QuestionContext)
    const [survey, setSurvey] = useState(null);
  
    const customStyles = {
      "question": {
        "content": "question-content",
        "answered": "question-answered",
        "tooltip": "question-tooltip"
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



    if(survey) {

      survey.onAfterRenderQuestion.add( () => {
        const completeButton = document.querySelector(".sd-navigation__complete-btn");
        if(completeButton) {
          completeButton.style.display = currentHPCs.length === 1 ? "block" : "none";
        }
      });
      survey.onComplete.add(() => {
        handleFinished(true)

        survey.clear();
        survey.render();
        
      });
      
      const completeButton = document.querySelector(".sd-navigation__complete-btn");
      if(completeButton) {
        completeButton.style.display = currentHPCs.length === 1 ? "block" : "none";
      }

      survey.onAfterRenderPage.add((survey, options) => {
        const currentPage = data.pages.find((page) => page.title === options.page.name);
        if (currentPage && currentPage.elements) {
          const choices = currentPage.elements[0].choices;
          if (choices) {
            choices.forEach((choice) => {
              if (choice.popupdescription) {
                const choiceElement = document.querySelector('input[type="radio"][value="' + choice.value + '"]');
                if (choiceElement && !choiceElement.parentNode.dataset.tooltipAdded) {
                  const tooltip = document.createElement("div")
                  tooltip.className = "survey-tooltip";
                  const questionMark = document.createElement("span");
                  questionMark.innerHTML = "?";
                  
                  const toolTipText = document.createElement("p");
                  toolTipText.className = "tooltip-text";
                  toolTipText.innerHTML = choice.popupdescription;

                  tooltip.appendChild(questionMark);
                  tooltip.appendChild(toolTipText);

                  
                  const parentElement = choiceElement.parentNode;
                  parentElement.appendChild(tooltip)
                  
                  parentElement.dataset.tooltipAdded = true;
                }
              }
            });
          }
        }
      });


      
    }


    return (
      <>
        <ProgressBar />
        { finished ?
          <FinishedQuiz />
          :
          <div className="quiz-body u-margin-top-small">
              <div className="survey">
                {survey && <Survey model={survey} />} 
              </div>
              <CurrentHPCs />
          </div>
        }
      </>
    );
  };
  
  export default Questions;