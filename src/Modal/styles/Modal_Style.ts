import styled from "styled-components";

interface ModalContainerProps {
  width: number;
}

export const ModalOverlay = styled.div`
    position: fixed;
    display: block;
    overflow: auto;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 20;
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  margin: 5% auto;
  background-color: #fff;
  border-radius: 8px;
  width:${({width}) => width ? `${width}px` : 'fit-content'} ;
  position: relative;
  color: #000;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 10px 20px;
  background-color: #dadada;
  border-radius: 8px 7px 0 0;
`;

export const ModalContent = styled.div`
  padding: 10px 20px;
`;