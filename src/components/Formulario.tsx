import React, { useEffect, useState, memo, useCallback } from "react";
import styled from "@emotion/styled";
import Loading from "components/loading";
import { HUBSPOT_ID } from "lib/constants";
import { ComponentGeneralFormulario } from "client";
import Script from "next/script";
import HubspotForm from "react-hubspot-form";

interface FormularioProps {
  formulario?: ComponentGeneralFormulario;
}

const Formulario = ({ formulario }: FormularioProps) => {
  const redirectUrl = formulario?.redireccion ?? null;
  const inlineMessage = formulario?.mensaje ?? null;

  return formulario ? (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
      <Form>
        {formulario.titulo ? (
          <FormHeader>{formulario.titulo}</FormHeader>
        ) : null}
        <FormBody>
          <HubspotForm
            portalId={HUBSPOT_ID}
            formId={formulario.formId}
            loading={<Loading />}
            redirectUrl={redirectUrl}
          />
        </FormBody>
      </Form>
    </>
  ) : null;
};

export default Formulario;

const Form = styled.section``;

const FormHeader = styled.h4`
  margin: 0;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const FormBody = styled.div`
  background-color: white;
  padding: 15px;
`;
