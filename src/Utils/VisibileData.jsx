import React from "react";
import VisibilitySensor from "react-visibility-sensor";

const VisibileData = ({ data, onChange }) => {
  return (
    <>
      <VisibilitySensor partialVisibility onChange={onChange}>
        {({ isVisible }) => {
          return isVisible ? <>{data}</> : <h1>Hello</h1>;
        }}
      </VisibilitySensor>
    </>
  );
};

export default VisibileData;
