import React from 'react';
import './Button.css';
import { Wrapper } from './styles';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <Wrapper>{props.label}</Wrapper>;
};

export default Button;
