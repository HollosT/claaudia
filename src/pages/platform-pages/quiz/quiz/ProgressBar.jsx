import React, {useContext } from "react";

import { Serializer } from "survey-core";
import { ReactSurveyElement, ReactElementFactory } from "survey-react-ui";
import { ModelContext } from "./Questions";

Serializer.addProperty("survey", "progressTitle");


const ProgressBar = () => {
  const model = useContext(ModelContext);

  if (!model) {
    return null;
  }

  return (
    <div className="sv-progressbar-percentage">
      <div className="sv-progressbar-percentage__title">
        <span>{model.progressTitle}</span>
      </div>
      <div className="sv-progressbar-percentage__indicator">
        <div
          className="sv-progressbar-percentage__value-bar"
          style={{ width: model.progressValue + "%" }}
        ></div>
      </div>
      <div className="sv-progressbar-percentage__value">
        <span>{model.progressValue + "%"}</span>
      </div>
    </div>
  );
};

export default ProgressBar;


ReactElementFactory.Instance.registerElement("sv-progressbar-percentage", props => {
    return React.createElement(ProgressBar, props);
  });