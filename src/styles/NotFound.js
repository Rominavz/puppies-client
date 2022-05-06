import styled from "styled-components";
import { LinkTo } from "../styles/Link";

export const PageNotFound = styled.div`
  color: var(--text-color);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 35%;
    margin: 6rem 0;
  }
  h2{
    margin-top:-7%;
    margin-left:-10%;
  }
`;

export const LinkBack = styled(LinkTo)`
  position: absolute;
  left: 1rem;
  top: 1rem;
`;