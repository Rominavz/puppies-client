import styled from "styled-components";
import { LinkTo } from "../styles/Link";

export const DogContainer = styled.div`
  width: 310px;
  position: relative;
  overflow: hidden;
 /*  backdrop-filter: blur(13px) saturate(100%); */
  background-color: #fcfaf9;
  border-radius: 0rem;
  transition: all .5s ease-in-out;
  img {
    width: 100%;
    height: 215px;
    object-fit: cover;
    z-index: -1;
    /* border-radius: 1rem 1rem 0 0; */
  }
  :hover {
    transform: translate(0, -10px);
  }
  h3 {
    font-family: 'Fraunces', serif;
    text-align: center;
    margin-bottom: 1%;
    margin-top: -0.5%;
    
  }
`;

export const Details = styled(LinkTo)`
  color: var(--text-color);
`;

export const Info = styled.div`
  margin-top: 0;
  
  /* word-wrap: break-word; */
  
  position: absolute;
  top: 139%;
  left:81%;
  transform: translate(-50%, -50%);
  transition: all .5s ease-in-out;
  
  h2 {
    margin-bottom: 0rem;
    font-family: 'Commissioner', sans-serif;
  }
  p {
    font-size: 0.7rem;
    font-weight: bold;
    font-family: 'Commissioner', sans-serif;
  }
  span {
      font-size: 0.7rem;
      font-family: 'Commissioner', sans-serif;
      font-weight: bold;
  }
  
  :hover{
    top: 92px;
  }

`;
export const Icono = styled.div`
background: none;
text-align: right;
font-weight: bold;

`;
export const Bkg = styled.div`
background: linear-gradient(318deg, rgba(240,237,237,1) 0%, rgba(243,243,246,0.465721322708771) 100%);
/* border-radius: 0 0 0.8rem 0.8rem; */
height: 217px;
padding: 0.1rem;

`;
