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
  width: ${({ size }) => Theme.button.size[size].width};
  height: 45px;
  background-color: ${({ variant }) => Theme.button[variant].backgroundColor};
  color: ${({ variant }) => Theme.button[variant].color};
  border: ${({ variant }) => Theme.button[variant].border};
  border-radius: 30px;
  display: block;
  cursor: pointer;
  :hover {
    color: ${({ variant }) => Theme.button[variant].hover.color};
  }
`;
