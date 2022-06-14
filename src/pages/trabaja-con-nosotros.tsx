import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import HubspotForm from 'react-hubspot-form'
import { container } from 'components/grid'
import Loading from 'components/loading'
import Layout from 'components/Layout'
import { HUBSPOT_ID } from 'lib/constants'

const TrabajaConNosotros = () => {
  const [state, setState] = useState(false)
  useEffect(() => {
    setState(true)
  }, [])
  return (
    <Layout>
      <Section space>
        <Title>Trabaja con nosotros</Title>
        {state ? (
          <HubspotForm
            id="solicitud-empleo"
            portalId={HUBSPOT_ID}
            formId="2f4be6c7-cf07-4ca6-be13-ea67ff4ad4b0"
            loading={<Loading full />}
          />
        ) : null}
      </Section>
    </Layout>
  )
}

export default TrabajaConNosotros

const Section = styled.div`
  ${container}
`

const Title = styled.h1`
  display: none;
`
