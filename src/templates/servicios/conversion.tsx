import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { container } from 'components/grid'
import HubspotForm from 'react-hubspot-form'
import Loading from 'components/loading'
import { h1 } from 'styles/tipography'
import { Servicio } from 'client'
import { HUBSPOT_ID } from 'lib/constants'

interface ConversionProps {
  servicio: Servicio
}

const Conversion = ({ servicio }: ConversionProps) => {
  const formId = servicio.form
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return formId ? (
    <Section space>
      <Container>
        <Title>Solicitar información</Title>
        <FormBox>
          {loaded ? (
            <HubspotForm
              portalId={HUBSPOT_ID}
              formId={formId}
              loading={<Loading />}
            />
          ) : null}
        </FormBox>
      </Container>
    </Section>
  ) : null
}

export default Conversion

const Section = styled.section`
  ${container}
  padding: 0;
`

const Container = styled.div`
  ${container}
`

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  ${h1}
`

const FormBox = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 4rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  iframe {
    width: 100% !important;
  }
`
