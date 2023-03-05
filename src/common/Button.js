import styled from "styled-components";
import { Theme } from "./Theme";

export default function Button({ variant, size, children }) {
  return (
    <ButtonComponent variant={variant} size={size}>
      {children}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button`
  font-size: ${Theme.typography.fontSize.button};
  line-height: ${Theme.typography.lineHeight.caption};
  font-weight: ${Theme.typography.fontWeights.semiBold};
  width: ${({ size }) => Theme.button.size[size].width};
  height: 45px;
  background-color: ${({ variant }) => Theme.button[variant].backgroundColor};
  color: ${({ variant }) => Theme.button[variant].color};
  border: ${({ variant }) => Theme.button[variant].border};
  border-radius: 30px;
  display: block;
  opacity: ${({ variant }) => Theme.button[variant].opacity};
  cursor: pointer;
  :hover {
    color: ${({ variant }) => Theme.button[variant].hover.color};
    border: ${({ variant }) => Theme.button[variant].hover.border};
    background-color: ${({ variant }) =>
      Theme.button[variant].hover.backgroundColor};
    transition: ${({ variant }) => Theme.button[variant].hover.transition};
  }
  :focus {
    box-shadow: ${({ variant }) => Theme.button[variant].focus.boxShadow};
    outline: ${({ variant }) => Theme.button[variant].focus.outline};
    text-shadow: ${({ variant }) => Theme.button[variant].focus.textShadow};
  }
  :active {
    color: ${({ variant }) => Theme.button[variant].active.color};
    border: ${({ variant }) => Theme.button[variant].active.border};
    background-color: ${({ variant }) =>
      Theme.button[variant].active.backgroundColor};
    text-shadow: ${({ variant }) => Theme.button[variant].active.textShadow};
  }
`;
