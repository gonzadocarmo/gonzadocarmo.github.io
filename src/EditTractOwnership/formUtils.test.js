import React from 'react';
import { getFormClassName, renderAddButton } from './formUtils';
import { render, screen } from '@testing-library/react';

describe('form utils', () => {
  describe('getFormClassName', () => {
    it('should return "form-control is-valid"', () => {
      const errors = {};
      const touched = {};
      const fieldName = 'gonzalo';
      const result = getFormClassName(errors, touched, fieldName);
      expect(result).toEqual('form-control is-valid');
    });

    it('should return "form-control is-invalid"', () => {
      const errors = { gonzalo: 'this is the error' };
      const touched = {};
      const fieldName = 'gonzalo';
      const result = getFormClassName(errors, touched, fieldName);
      expect(result).toEqual('form-control is-invalid');
    });
  });
});
