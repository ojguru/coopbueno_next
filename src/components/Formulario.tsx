import React, { Suspense } from "react";
import styled from "@emotion/styled";
import Loading from "components/loading";
import { HUBSPOT_ID } from "lib/constants";
import { ComponentGeneralFormulario } from "client";
import Script from "next/script";

interface FormularioProps {
  formulario?: ComponentGeneralFormulario;
}

const Formulario = ({ formulario }: FormularioProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Script
        id="hsForm"
        src="//js.hsforms.net/forms/v2.js?pre=1"
        type="text/javascript"
        strategy="lazyOnload"
        onReady={() => {
          let arg = {
            region: "na1",
            portalId: `${HUBSPOT_ID}`,
            formId: formulario?.formId,
            target: `.form-${formulario?.formId}`,
            redirectUrl: formulario?.redireccion || null,
            inlineMessage: formulario?.mensaje || null,
          };

          window.hbspt?.forms?.create(arg);

          const getJQuery = async () => {
            setTimeout(() => {
              fetch("https://code.jquery.com/jquery-3.6.0.min.js")
                .then((res) => res.text())
                .then((res) => {
                  window.eval(res);
                });
            }, 4000);
          };

          if (!window?.jQuery) {
            getJQuery();
          }
        }}
      />
      <Form>
        {formulario?.titulo ? (
          <FormHeader>{formulario?.titulo}</FormHeader>
        ) : null}
        <FormBody>
          <div className={`form-${formulario?.formId}`} />
        </FormBody>
      </Form>
    </Suspense>
  );
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
