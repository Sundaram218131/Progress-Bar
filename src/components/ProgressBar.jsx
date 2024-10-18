import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value < 100) {
      const timer = setTimeout(() => {
        setValue((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [value]);

  return (
    <>
      <div className="container">
        <h1>Progress Bar</h1>
        <div className="progress">
          <div className="progress_bar">
            <div style={{ width: `${value.toFixed()}%` }}>
              <div
                className="progress_text"
                style={{ color: value > 49 ? "white" : "black" }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={value.toFixed()}
              >
                {value}%
              </div>
            </div>
          </div>
        </div>
        <div className="status">
          {value < 100 ? <div>Loading...</div> : <div>Completed!</div>}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
