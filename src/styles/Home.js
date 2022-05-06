import styled from "styled-components";
import background from '../assets/background.png'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.6rem 0;
  h2 {
    color: var(--text-color);
  }
`;

export const NoResult = styled.div`
  border-radius: 1rem;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  padding: 1.5rem 1rem;
  text-align: center;
  img {
    width: 100%;
  }
`;
export const ContainerHome = styled.div`
  padding: 0.75rem;
  min-height: 100vh;
  
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    /* opacity: 0.5;
    z-index: 1; */
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Btnprinc = styled.div`
font-size: 10px;
`;
