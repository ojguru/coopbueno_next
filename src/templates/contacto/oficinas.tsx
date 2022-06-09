import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import Link from 'next/link'
import { PhoneIcon, ClockIcon } from 'components/icons'
import { SucursalEntity } from 'client'
import colors from 'styles/colors'

interface OficinasProps {
  sucursales: SucursalEntity[]
}
const Oficinas = ({ sucursales }: OficinasProps) => {
  return sucursales.length ? (
    <>
      <StyledSection>
        <Container space>
          <Subtitle>Habla con nosotros</Subtitle>
          {sucursales.map((item, index) => {
            const sucursal = item.attributes

            return (
              <Sucursal key={index}>
                <SucursalName>{sucursal.nombre}</SucursalName>
                <SucursalSchedule>
                  <ClockIcon />
                  <InfoWrapper>{sucursal.horario}</InfoWrapper>
                </SucursalSchedule>
                <SucursalPhoneBox>
                  <PhoneIcon />
                  <PhoneList>
                    {sucursal.telefonos().map((item, index) => {
                      const phone = item.telefono

                      return (
                        <Link href={`tel:+${phone}`} key={index} passHref>
                          <SucursalPhone>{phone}</SucursalPhone>
                        </Link>
                      )
                    })}
                  </PhoneList>
                </SucursalPhoneBox>
              </Sucursal>
            )
          })}
        </Container>
      </StyledSection>
    </>
  ) : null
}

export default Oficinas

const StyledSection = styled.section`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30rem;
    padding-bottom: 30rem;
    background-color: ${colors.primary.base};
    box-shadow: 0 1.5rem 5rem ${colors.primary.base};
    border-radius: 5rem;
    transform: translate(15%, 15%);
    z-index: -1;
    opacity: 0.7;
    transform: translate(50%, -20%) rotate(30deg);
  }
`

const Container = styled.div`
  ${container}
  display: grid;
  flex-wrap: wrap;
  gap: 3rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`

const Subtitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 4rem;
  width: 100%;
  max-width: 100%;
  ${mq.md} {
    grid-column: 1 / span 2;
  }
`

const Sucursal = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.15);
`

const SucursalName = styled.p`
  margin-bottom: 0;
  text-transform: uppercase;
`

const iconStyle = css`
  display: flex;
  align-items: flex-start;
  line-height: 1.8rem;
  margin: 1rem auto;
  svg {
    flex-basis: 1.8rem;
    width: 2.5rem;
    margin-right: 1rem;
  }
`

const SucursalPhoneBox = styled.div`
  ${iconStyle}
`
const PhoneList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const SucursalPhone = styled.a`
  text-decoration: none;
  display: inline-block;
`

const InfoWrapper = styled.span`
  display: inline-block;
  vertical-align: top;
  flex: 1;
`

const SucursalSchedule = styled.p`
  ${iconStyle}
`
