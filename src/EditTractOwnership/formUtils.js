import React from 'react';
import { Button } from 'react-bootstrap';
import { getIn, ErrorMessage } from 'formik';
import classnames from 'classnames';

export const FormErrorMessage = ({ fieldName }) => (
  <ErrorMessage name={fieldName}>
    {(msg) => <div className="invalid-feedback">{msg}</div>}
  </ErrorMessage>
);

export const getFormClassName = (errors, touched, fieldName) => {
  const isInvalid = getIn(errors, fieldName);
  return classnames('form-control', {
    'is-valid': !isInvalid,
    'is-invalid': isInvalid,
  });
};
