import React, {useContext } from "react";

import { Serializer } from "survey-core";
import { ReactSurveyElement, ReactElementFactory } from "survey-react-ui";
import { ModelContext } from "./Questions";
import { Divider } from "src/atoms";

Serializer.addProperty("survey", "progressTitle");


const ProgressBar = () => {
  const model = useContext(ModelContext);

  if (!model) {
    return null;
  }

  return (
    <>
      <div className="sv-progressbar-percentage u-margin-bottom-medium">
        <h5 className="sv-progressbar-percentage__title">Your current progress</h5>
        <div className="sv-progressbar-percentage__indicator">
          <div
            className="sv-progressbar-percentage__value-bar"
            style={{ width: model.progressValue + "%" }}
          >
            <div className="sv-progressbar-percentage__value">
              <span>{model.progressValue + "%"}</span>
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