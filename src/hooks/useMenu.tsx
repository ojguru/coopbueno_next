import React, { useState } from 'react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import { CloseIcon, MenuIcon } from 'components/icons'
import colors from 'styles/colors'
import { container, mq } from 'components/grid'
import { Spring, config, a } from '@react-spring/web'

const useMenu = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const MenuModalUI = ({ children }) => {
    return (
      <Spring
        reset={isModalOpen}
        reverse={!isModalOpen}
        from={{
          transform: `translate(100%,0)`,
          opacity: 0,
        }}
        to={{
          transform: `translate(0,0)`,
          opacity: 1,
        }}
      >
        {(styles) => (
          <ModalWrapper
            data-open={isModalOpen}
            onClick={closeModal}
            style={styles}
          >
            {isModalOpen && (
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
                e.stopPropagation()
              }}
            >
              <Column>
                <ModalHeader>
                  <span></span>
                  <CloseButton onClick={closeModal}>
                    Cerrar menú
                    <CloseIcon />
                  </CloseButton>
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
              </Column>
            </CardModal>
          </ModalWrapper>
        )}
      </Spring>
    )
  }

  const MenuButtonUI = () => {
    return (
      <MenuButton
        onClick={(e) => {
          setModalOpen(true)
        }}
      >
        <MenuIcon />
      </MenuButton>
    )
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    MenuModalUI,
    MenuButtonUI,
  }
}

export default useMenu

const ModalWrapper = styled(a.div)`
  background: transparent;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  z-index: 20000;

  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: baseline;
  justify-content: flex-end;
`

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
`

const Column = styled.div`
  padding: 0 1.5rem;
  display: contents;
`

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
`

const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: ${colors ? colors.gray.dark : '#555552'};
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
`

const ModalBody = styled.div``

const MenuButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: grid;
  padding: 1rem;
`
