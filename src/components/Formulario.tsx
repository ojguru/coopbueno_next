import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import HubspotForm from 'react-hubspot-form'
import Loading from 'components/loading'
import { HUBSPOT_ID } from 'lib/constants'
import { ComponentGeneralFormulario } from 'client'

interface FormularioProps {
  formulario: ComponentGeneralFormulario
}
const Formulario = ({ formulario }: FormularioProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  console.log(formulario.formId)

  return loaded ? (
    <Form>
      {formulario.titulo ? <FormHeader>{formulario.titulo}</FormHeader> : null}
      <FormBody>
        <HubspotForm
          portalId={HUBSPOT_ID}
          formId={formulario.formId}
          loading={<Loading />}
        />
      </FormBody>
    </Form>
  ) : (
    <Loading />
  )
}

export default Formulario

const Form = styled.section``

const FormHeader = styled.h4`
  margin: 0;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`

const FormBody = styled.div`
  background-color: white;
  padding: 15px;
`
