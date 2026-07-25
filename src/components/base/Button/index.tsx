import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

interface ButtonColors {
  color: string;
  hoverColor: string;
  width: number;
  boxShadow: string;
}

type Props = ComponentPropsWithoutRef<"button"> & ButtonColors;

const ButtonContainer = styled.div<ButtonColors>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.text.dark.white};
  padding: 8px 32px 10px 32px;
  background: ${(props) => props.color};
  width: ${(props) => props.width}px;
  transition: background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: 0 0 10px ${(props) => props.boxShadow};
    background: ${(props) => props.hoverColor};
  }
`;

const ButtonText = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.dark.white};
`;

const Button: React.FC<Props> = ({
  color,
  hoverColor,
  width,
  boxShadow,
  ...props
}) => (
  <ButtonContainer
    color={color}
    hoverColor={hoverColor}
    width={width}
    boxShadow={boxShadow}
  >
    <ButtonText>{props.children}</ButtonText>
  </ButtonContainer>
);

export default Button;
