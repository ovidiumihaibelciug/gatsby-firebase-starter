import React from 'react';
import classNames from 'classnames';

const Loading= ({
  text = 'Submit',
  disabled = false,
  type,
  onClick,
  className,
}) => {
  return (
      // MUTLI SPINNER 
      <div>
        <div class="multi-spinner-container">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner">
                    <div class="multi-spinner">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Loading;
