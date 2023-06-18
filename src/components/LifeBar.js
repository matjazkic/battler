import React from "react";
import './LifeBar.css'

const LifeBar = (props) =>
{





    return (
      <div className="outter-lifebar">
        <div className="inner-lifebar">
          <div className="fill-lifebar" style={{ height: props.remaningLife1 }}>
            {" "}
          </div>
        </div>
      </div>
    );

}

export default LifeBar;