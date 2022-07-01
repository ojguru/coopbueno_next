import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
// import HubspotForm from "react-hubspot-form";
import Loading from "components/loading";
import { HUBSPOT_ID } from "lib/constants";
import { ComponentGeneralFormulario } from "client";

interface FormularioProps {
  formulario?: ComponentGeneralFormulario;
}
const Formulario = ({ formulario }: FormularioProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded && formulario ? (
    <Form>
      {formulario.titulo ? <FormHeader>{formulario.titulo}</FormHeader> : null}

      <FormBody
        dangerouslySetInnerHTML={{
          __html: `
        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
        <script>
          hbspt.forms.create({
            region: "na1",
            portalId: "5494710",
            formId: "a6493626-177e-4b1b-8eb0-d45ccff8da42"
          });
        </script>
      `,
        }}
      >
        {/* <HubspotForm
          portalId={HUBSPOT_ID}
          formId={formulario.formId}
          loading={<Loading />}
        /> */}
      </FormBody>
    </Form>
  ) : (
    <Loading />
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
