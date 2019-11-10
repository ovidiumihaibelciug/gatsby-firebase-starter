import React from 'react';

const Loading = () => (
  <div className="spinner__container">
    <div className="spinner__container__inner">
      <div className="spinner">
        <div className="set-one">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="set-two">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
