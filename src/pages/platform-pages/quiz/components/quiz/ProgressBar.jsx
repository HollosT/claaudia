import React, {useContext } from "react";

import { Serializer } from "survey-core";
import { ReactSurveyElement, ReactElementFactory } from "survey-react-ui";
import { ModelContext } from "./Questions";
import { Divider } from "src/atoms";
import { QuestionContext } from "src/services/context/questionnaire/question-context";

Serializer.addProperty("survey", "progressTitle");


const ProgressBar = () => {
  const {progress} = useContext(QuestionContext);

  const progressVale = 100 - Math.round((Number(progress) / 9) * 100);

  return (
    <>
      <div className="sv-progressbar-percentage u-margin-bottom-medium">
        <h5 className="sv-progressbar-percentage__title">Remaining questions: {progress}</h5>
        <div className="sv-progressbar-percentage__indicator">
          <div
            className="sv-progressbar-percentage__value-bar"
            style={{ width: progressVale + "%" }}
          >
            <div className="sv-progressbar-percentage__value">
              <span>{progressVale + "%"}</span>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ProgressBar;


ReactElementFactory.Instance.registerElement("sv-progressbar-percentage", props => {
    return React.createElement(ProgressBar, props);
  });