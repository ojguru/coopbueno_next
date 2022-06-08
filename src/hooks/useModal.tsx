import React, { useState } from 'react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import { CloseIcon } from 'components/icons'
import colors from 'styles/colors'
import { fadeIn, slideDown } from 'styles/animations'
import { container, mq } from 'components/grid'

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const ModalUI = ({ title, children, size = '80rem' }) => {
    return (
      <ModalWrapper data-open={isModalOpen} onClick={closeModal}>
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
          maxWidth={size}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Column>
            <ModalHeader>
              {title ? <ModalTitle>{title}</ModalTitle> : <div></div>}
              <CloseButton onClick={closeModal}>
                <CloseIcon />
              </CloseButton>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </Column>
        </CardModal>
      </ModalWrapper>
    )
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    ModalUI,
  }
}

export default useModal

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 20000;
  animation: ${fadeIn} 0.2s ease-out;

  &[data-open='true'] {
    display: flex;
    left: 0;
    opacity: 1;
    right: 0;
    transition: opacity 0.25s ease-out;
    align-items: baseline;
    justify-content: center;
  }
`

const CardModal = styled.div`
  ${container}
  background: #fff;
  margin: 0 1rem;
  margin-top: 15vh;
  margin-bottom: 15vh;
  border-radius: 5px;
  animation: ${slideDown} 0.4s ease-out;
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
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 200%;
    height: 100%;
    background-color: ${colors.gray.lighter};
    z-index: 0;
    transform: translate(-50%, 0);
  }
`

const ModalTitle = styled.h4`
  margin: 0;
  font-weight: 600;
  position: relative;
  text-transform: uppercase;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: ${colors ? colors.gray.dark : '#555552'};
  z-index: 6;
  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.3);
    }
  }

  svg {
    height: 2rem;
    transition: transform 0.15s ease-in-out;
    fill: currentColor;
    height: 2.5rem;
    width: 2rem;
  }
`

const ModalBody = styled.div``
