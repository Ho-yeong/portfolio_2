import React from 'react';
import styled from 'styled-components';
import ColorMapping from './customColorFn';

const C = {
  Btn: styled.div<{ customColor: string }>`
    position: relative;
    width: 155px;
    height: 50px;
    margin: 20px;

    &:hover > div {
      letter-spacing: 3px;
    }

    &:hover > div::before {
      transform: skewX(45deg) translateX(200%);
    }

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -5px;
      width: 30px;
      height: 10px;
      border-radius: 10px;
      transition: 0.4s;
      ${({ customColor }) => ColorMapping(customColor)}
    }

    &:hover::before {
      bottom: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -5px;
      width: 30px;
      height: 10px;
      border-radius: 10px;
      transition: 0.4s;
      ${({ customColor }) => ColorMapping(customColor)}
    }

    &:hover::after {
      top: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
    }
  `,
  Text: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    color: #fff;
    z-index: 1;
    font-weight: 400;
    letter-spacing: 1px;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(15px);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
      transform: skewX(45deg) translateX(0);
      transition: 0.5s;
    }
  `,
};

interface ICustomBtn {
  text: string;
  customColor: string;
}

const CustomBtn: React.FC<ICustomBtn> = ({ text, customColor }) => {
  return (
    <C.Btn customColor={customColor}>
      <C.Text>{text}</C.Text>
    </C.Btn>
  );
};

export default CustomBtn;
