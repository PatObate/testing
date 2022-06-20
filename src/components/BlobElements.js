import styled from "styled-components";

export const Blob1 = styled.div`
  position: absolute;
  left: -23.44vw;
  /* left: -450px; */
  top: 20.83vw;
  /* top: 400px; */
  z-index: 2;
  width: 45.83vw;
  height: 72.92vw;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const Blob2 = styled.div`
  position: absolute;
  right: -23.44vw;
  /* left: -450px; */
  top: 0.52vw;
  /* top: 10px; */
  z-index: 2;
  width: 45.83vw;
  height: 72.92vw;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;
