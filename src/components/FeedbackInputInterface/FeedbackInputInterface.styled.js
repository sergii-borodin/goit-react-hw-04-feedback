import styled from "styled-components";

export const ControlsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Button = styled.button`
padding: 0 10px;
  border-radius: 10px;
  &:hover {
    color: white;
    background-color: tomato;
  }
`;