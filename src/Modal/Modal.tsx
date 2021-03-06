import React, { FunctionComponent, useRef, useEffect } from "react";

// Types
import { ModalProps } from "./Modal.types";

// Styled components
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent
} from './styles/Modal_Style';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal: FunctionComponent<ModalProps> = ({
  title = 'Modal Title',
  content = "Modal Content",
  overlayClick = true,
  show,
  close,
  width
}) => {

  // Ref
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef !== null && !e.target.closest(`#${modalRef.current.id}`) && overlayClick) {
      close();
    }
  };

  //Click Listener
  useEffect(() => {
    document.addEventListener('click', handleOverlayClick);
    return () => {
      document.removeEventListener('click', handleOverlayClick);
    }
  }, [])

  return (
    <>
      { show && (
        <ModalOverlay data-testid="Modal_Test">
          <ModalContainer id="ModalUI" ref={modalRef} width={width}>
            <ModalHeader>
              <p>{title}</p>
              <FontAwesomeIcon icon={faTimes} onClick={() => close()} />
            </ModalHeader>
            <ModalContent>
              <p>{content}</p>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )
      }
    </>
  )
}

export default Modal;