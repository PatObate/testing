import styled from "styled-components";
import add from "../svg/blueplus.svg";
import React from "react";

export const AccordionContainer = styled.div`
  overflow: hidden;
  width: 24.69vw;
  /* width: 474px; */
  border-radius: 1.3vw;
  /* border-radius: 25px; */
  background: #f0f0ec;
  color: black;
  margin-bottom: 1.04vw;
  /* margin-bottom: 20px; */
`;

const Inner = styled.div`
  position: absolute;
  padding: 0vw 1.46vw 2.76vw 1.46vw;
  /* padding: 0px 28px 53px 28px; */
  color: black;
`;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.22vw;
  /* height: 81px; */
  padding: 0vw 1.46vw;
  /* padding: 0 28px; */
  font-size: 0.83vw;
  /* font-size: 16px; */
  font-family: "Inter", sans-serif;
  font-weight: 500;
  text-align: left;
  background: #f0f0ec;
  color: inherit;
  cursor: pointer;
`;

const HeaderIcon = styled.img`
  transition: all 0.2s;
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  font-family: "Inter", sans-serif;
  height: ${(props) => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.35s;
`;

export const AccordionContent = ({
  onClick,
  itemName,
  itemContent,
  isActive,
}) => {
  return (
    <React.Fragment>
      <Header onClick={onClick}>
        {itemName}
        <HeaderIcon isActive={isActive} src={add} />
      </Header>
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </React.Fragment>
  );
};
