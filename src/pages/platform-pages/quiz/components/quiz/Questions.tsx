import React, { useEffect, useContext } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";


import "survey-core/defaultV2.min.css";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import ProgressBar from "./ProgressBar";
import CurrentHPCs from "./CurrentHPCs";
import FinishedQuiz from "./FinishedQuiz";
import { Loading } from "src/atoms";



const Questions: React.FC = () => {
    const {surveyData,handleCurrentHPCs , handleProgress, currentHPCs, finished, handleFinished, survey, handleSurvey} = useContext(QuestionContext)

    const customStyles = {
      "question": {
        "content": "question-content",
        "answered": "question-answered",
    }
    };

    useEffect(() => {
      const initializedSurvey  = new Model(surveyData);
      initializedSurvey.onValueChanged.add((survey, options) => {

        onSurveyValueChanged(survey, options)
      });

      initializedSurvey.css = customStyles;
      
      handleSurvey(initializedSurvey);

    }, [surveyData]);

    if(!surveyData) {
      return <Loading />
    }



    const onSurveyValueChanged = (survey: Model, options: { name: string }) => {
      const selectedValue = survey.getValue(options.name);
  
      const question = surveyData.pages.find((page) =>
        page.elements.some((element) => element.name === options.name && element.type === 'radiogroup')
      );
  
      if (question) {
        const choice = question.elements[0].choices.find((c) => c.value === selectedValue);
  
        if (choice) {
          const additionalValue = choice.result;
          const progress = choice.progress;

          handleCurrentHPCs(additionalValue);
          handleProgress(progress);
        }
      }
    };

   
    if(survey) {
      survey.onAfterRenderQuestion.add( () => {
        const completeButton = document.querySelector(".sd-navigation__complete-btn") as HTMLElement;
        if(completeButton) {
          completeButton.style.display = currentHPCs.length === 1 ? "block" : "none";
        }
      });
      survey.onComplete.add(() => {
        handleFinished(true)
        survey.clear();
        survey.render();
        
      });
      
      const completeButton = document.querySelector(".sd-navigation__complete-btn") as HTMLElement;
      if(completeButton) {
        completeButton.style.display = currentHPCs.length === 1 ? "block" : "none";
      }

      survey.onAfterRenderPage.add((_, options) => {
        const currentPage = surveyData.pages.find((page) => page.title === options.page.name);
        if (currentPage && currentPage.elements) {
          const choices = currentPage.elements[0].choices;
          if (choices) {
            choices.forEach((choice) => {
              if (choice.popupdescription) {
                const choiceElement = document.querySelector('input[type="radio"][value="' + choice.value + '"]') as HTMLElement;
                if (choiceElement && choiceElement.parentNode instanceof HTMLElement &&!choiceElement.parentNode.dataset.tooltipAdded) {
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
                  
                  parentElement.dataset.tooltipAdded = "true";
                }
              }
            });
          }
        }
      });
      survey.onAfterRenderPage.add(() => {
        const parentEl = document.querySelector('.sv-title-actions__title') as HTMLElement;
        const hint = document.createElement("p");
        hint.className = "quiz-title--hint-body"
        hint.innerHTML = "Select a single answer from the provided options"

        if(parentEl && !parentEl.dataset.addedHint) {
          parentEl.appendChild(hint)
          parentEl.dataset.addedHint = "true"
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
                {survey && 
                <Survey
                  model={survey} 
                 />} 
        
              </div>
              <CurrentHPCs />
          </div>
        }
      </>
    );
  };
  
  export default Questions;