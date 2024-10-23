import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './contact.css';

const Form = ({
  emailValue,
  messageValue,
  handleChange,
  handleSubmit,
  notificationType
}) => {
  const notificationClasses = classNames (
    'contact-form-notification',
    {'contact-form-notification-failure' : notificationType === 'failed' },
    {'contact-form-notification-success' : notificationType === 'submitted' }
  );

  let notificationMessage;

  switch (notificationType) {
    case 'submitting':
      notificationMessage = 'Hang on… Submitting now.';
      break;
    case 'failed':
      notificationMessage = 'Oh no! We couldn’t submit your form. Something went wrong.';
      break;
    case 'submitted':
      notificationMessage = 'Successfully submitted!';
      break;
    default:
      notificationMessage = '';
  }

  return (
 
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-group">
        <label htmlFor="email">Your email address</label>
        <input
          name="email"
          id="email"
          placeholder="Your email"
          type="email"
          value={emailValue}
          onChange={handleChange}
        />
      </div>
      <div className="contact-form-group">
        <label htmlFor="message">Your message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          value={messageValue}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      {notificationType &&
        <div className={notificationClasses}>{notificationMessage}</div>
      }
    </form>
    
  )
};

Form.propTypes = {
  emailValue: PropTypes.string.isRequired,
  messageValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  notificationType: PropTypes.oneOf(['', 'submitting', 'submitted', 'failed'])
};

export default Form;