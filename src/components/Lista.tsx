import * as React from 'react'
import styled from '@emotion/styled'
import { mq } from 'components/grid'
import { ComponentGeneralLista } from 'client'

interface ListaProps {
  lista: ComponentGeneralLista
}
const Lista = ({ lista }: ListaProps) => {
  return (
    <Section>
      <Title>{lista.titulo}</Title>
      <List>
        {lista.items().map((benefit, index) => {
          return <Item key={index}>{benefit.texto}</Item>
        })}
      </List>
    </Section>
  )
}

export default Lista

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`

const Section = styled.section`
  ${mq.lg} {
    grid-column: 1 / span 2;
  }
`

const List = styled.ul`
  display: grid;
  gap: 1.5rem 3rem;
  margin: 0;
  padding: 0;
  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`

const Item = styled.li``
