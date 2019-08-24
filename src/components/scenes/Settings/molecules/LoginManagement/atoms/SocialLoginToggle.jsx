import React from 'react';
import classNames from 'classnames';

const SocialLoginToggle = ({
  onlyOneLeft,
  isEnabled,
  signInMethod,
  onLink,
  onUnlink,
}) =>
  isEnabled ? (
    <button
      type="button"
      className={classNames(
        'provider',
        `provider--${signInMethod.name}`,
      )}
      onClick={() => onUnlink(signInMethod.id)}
    >
      <span>Deactivate</span> {<signInMethod.Icon />}
    </button>
  ) : (
    <button
      type="button"
      className={classNames(
        'provider',
        `provider--${signInMethod.name}`,
      )}
      onClick={() => onLink(signInMethod.provider)}
    >
      {<signInMethod.Icon />}
    </button>
  );

export default SocialLoginToggle;
