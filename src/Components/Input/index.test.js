import Input from './';
import { getName } from './';
import { getLimiteDate } from './';
import { render, screen, fireEvent } from '@testing-library/react';

it('Should return a string in lowerCamelCase', () => {
  const name = 'charlesVeneau';
  expect(getName('Charles veneau')).toEqual(name);
});

it('Should return a date minus the year passed in as a parameter in the YYYY-MM-DD format', () => {
  const param = 4;
  //   Set result has today's date minus param number of year
  const result = `2018-12-02`;
  expect(getLimiteDate(param)).toEqual(result);
});

describe('The input component', () => {
  const changeState = jest.fn();
  it('Should render without crashing', () => {
    render(<Input handleChange={changeState} name="Last Name" type="text" />);
  });
  it('Should have a isValid class if the input has a valid text value', () => {
    render(<Input handleChange={changeState} name="Last Name" type="text" />);
    const input = screen.getByLabelText('lastName');
    fireEvent.change(input, { target: { value: 'Veneau' } });
    expect(input).not.toHaveClass('border-red-500');
    expect(changeState).toBeCalled();
  });
  it('Should have a isValid class if the input has a valid zipCode value', () => {
    render(<Input handleChange={changeState} name="Zip Code" type="text" />);
    const input = screen.getByLabelText('zipCode');
    fireEvent.change(input, { target: { value: '92000' } });
    expect(input).not.toHaveClass('border-red-500');
    expect(changeState).toBeCalled();
  });
  it('Should have a isValid class if the input has a valid street value', () => {
    render(<Input handleChange={changeState} name="street" type="text" />);
    const input = screen.getByLabelText('street');
    fireEvent.change(input, { target: { value: '2 rue de grimoux' } });
    expect(input).not.toHaveClass('border-red-500');
    expect(changeState).toBeCalled();
  });
});
