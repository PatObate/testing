import styled from "styled-components";
import AnimatedCursor from "react-animated-cursor";

export const Cursor = styled(AnimatedCursor)`
  @media screen and (max-width: 690px) {
    display: none;
  }
`;
