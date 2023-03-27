import React from "react";

function Check({ checkSettings }) {
  return (
    <div
      className="check checkPrimary"
      style={{
        height: checkSettings.height + "cm",
        width: checkSettings.width + "cm",
      }}
    >
      <div
        className="checkBorder"
        style={{
          margin: checkSettings.margin + "cm",
          padding: checkSettings.margin + "cm",
          border: checkSettings.thickness + "px solid black",
        }}
      >
        <div className="checkContent">
          <div className="checkDate">
            <div className="checkRow">
              <div className={"checkDateStyle " + checkSettings.font}>
                {checkSettings.date}
              </div>
              <p>Datum:</p>
            </div>
          </div>
          <div className="checkDate"></div>
          <div className="checkDate"></div>
          <div className="checkDate"></div>
          <div className="checkDate"></div>
          <div className="checkDate"></div>
        </div>
      </div>
    </div>
  );
}

export default Check;

//checkBlackWhite
