import React from "react";
import ReactDOM from "react-dom";
function Portal() {
  return ReactDOM.createPortal(
    <div>
      <h2>This is Portal Component</h2>
    </div>,
    document.getElementById("portal")
  );
}

export default Portal;

//modal 