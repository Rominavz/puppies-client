import styled, { keyframes } from "styled-components";
import background from '../assets/background.png'

export const Load = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-left:-11.7%;
  }
  padding: 0.75rem;
  min-height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  background-color: #1FAABB00;
  border: 0.5rem solid transparent;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border-left-color: #f86c7f;
  animation: ${spin} 1s linear infinite;
  margin: 2rem;
  
`;
