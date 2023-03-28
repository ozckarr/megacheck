import React from "react";
import BottomRow from "./BottomRow";

function Check({ check }) {
  return (
    <div
      className={`check ${check.background}`}
      style={{
        height: check.height + "cm",
        width: check.width + "cm",
      }}
    >
      <div
        className="checkBorder"
        style={{
          margin: check.margin + "cm",
          padding: check.margin + "cm",
          border: check.thickness + "px solid black",
        }}
      >
        <div className="checkContent">
          <div className="checkRow">
            <div className="checkDate">
              <div className={"checkDateStyle " + check.font}>
                <p style={{ fontSize: check.handwrittenSize + "px" }}>
                  {check.dateText}
                </p>
              </div>
              <p
                className="textToBottom"
                style={{ fontSize: check.fontSize + "px" }}
              >
                Datum:
              </p>
            </div>
          </div>
          <div className="checkRow"></div>
          <div className="checkRow"></div>
          <div className="checkRow"></div>
          <div className="checkRow"></div>
          <div className="checkRow">
            <BottomRow
              aba={check.aba}
              accountNr={check.accountNr}
              checkNr={check.checkNr}
              codeSize={check.codeSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Check;

//checkBlackWhite
