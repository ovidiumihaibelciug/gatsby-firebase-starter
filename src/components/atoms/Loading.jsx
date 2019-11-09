import React from 'react';

const Loading = () => (
  <div className="spinner__container">
    <div className="spinner__container__inner">
      <div class="spinner">
        <div class="set-one">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div class="set-two">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Loading;
