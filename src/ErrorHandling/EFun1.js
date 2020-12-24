import React from "react";
import ErrClass from "./ErrClass";
import Fun2 from "./EFun2";
function EFun1() {
  let email = "safroze112gmail.com";
  return (
    <ErrClass>
      <Fun2 email={email}></Fun2>
    </ErrClass>
  );
}

export default EFun1;
