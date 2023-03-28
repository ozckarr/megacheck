import React from "react";
import "../fonts/MicrEncoding-ZEDJ.ttf";

function BottomRow({ aba, accountNr, checkNr, codeSize }) {
  return (
    <div className="bottomRowContent">
      <div className="bottomRow">
        <p style={{ fontSize: codeSize + "px" }}>a{aba}a</p>
        <p style={{ fontSize: codeSize + "px" }}>{accountNr}</p>
        <p style={{ fontSize: codeSize + "px" }}>{checkNr}</p>
        <div className="bottomRowFiller"></div>
      </div>
    </div>
  );
}

export default BottomRow;
