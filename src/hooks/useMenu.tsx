import React, { useState, memo } from "react";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { CloseIcon, MenuIcon } from "components/icons";
import colors from "styles/colors";
import { container, mq } from "components/grid";

const useMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  interface MenuModalUIProps {
    children: any;
  }
  const MenuModalUI = ({ children }: MenuModalUIProps) => {
    return (
      <ModalWrapper
        data-open={isMenuOpen}
        onClick={(e) => {
          setMenuOpen(false);
        }}
        id={Math.random().toString()}
        active={isMenuOpen}
      >
        {isMenuOpen && (
          <Global
            styles={css`
              html,
              body {
                overflow: hidden;
              }
            `}
          />
        )}
        <CardModal
          fluid
          maxWidth="60rem"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <AModal active={isMenuOpen}>
            <Column>
              <ModalHeader>
                <span></span>
                <CloseButton
                  onClick={(e) => {
                    setMenuOpen(false);
                  }}
                >
                  Cerrar menú
                  <CloseIcon />
                </CloseButton>
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </Column>
          </AModal>
        </CardModal>
      </ModalWrapper>
    );
  };

  const MenuButtonUI = () => {
    return (
      <MenuButton
        onClick={(e) => {
          setMenuOpen(true);
        }}
      >
        <MenuIcon />
      </MenuButton>
    );
  };

  return {
    MenuModalUI,
    MenuButtonUI,
  };
};

export default useMenu;

interface ModalWrapperProps {
  active: boolean;
}
const ModalWrapper = styled.div`
  ${({ active }: ModalWrapperProps) => css`
    background: transparent;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    z-index: 20000;
    width: 100%;
    display: flex;
    top: 0;
    bottom: 0;
    align-items: baseline;
    justify-content: flex-end;
    ${active
      ? css`
          opacity: 1;
          right: 0;
        `
      : css`
          opacity: 0;
          right: -100%;
        `}
  `}
`;

const CardModal = styled.div`
  ${container}
  min-height: 100%;
  margin: initial;
  background: #fff;
  flex: 1;
  overflow: hidden;
  padding: 0 1.5rem 1.5rem 1.5rem;
  ${mq.sm} {
    padding: 0 3rem 3rem 1.5rem;
  }
  ${mq.md} {
    padding: 0 3.5rem 3.5rem 3.5rem;
  }
  ${mq.xl} {
    padding: 0 4.5rem 4.5rem 4.5rem;
  }
`;

interface AModalProps {
  active: boolean;
}
const AModal = styled.div`
  ${({ active }: AModalProps) => css`
    ${active
      ? css`
          opacity: 1;
          right: 0;
        `
      : css`
          opacity: 0;
          right: -100%;
        `}
  `}
`;

const Column = styled.div`
  padding: 0 1.5rem;
  display: contents;
`;

const ModalHeader = styled.div`
  align-self: baseline;
  text-align: left;
  color: ${colors.green.base};
  font-weight: bold;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 3rem;
  padding: 1.5rem 0;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: ${colors ? colors.gray.dark : "#555552"};
  z-index: 6;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  outline: 0.1rem solid ${colors.gray.light};
  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.3);
    }
  }

  svg {
    height: 2rem;
    fill: currentColor;
    height: 2.5rem;
    width: 2rem;
  }
`;

const ModalBody = styled.div``;

const MenuButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  padding: 1rem;
  cursor: pointer;
`;
