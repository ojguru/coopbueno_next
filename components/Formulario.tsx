"use client";

import React, { useContext, useEffect, useState } from "react";
import Loading from "@/components/loading";
import { HUBSPOT_ID } from "@/lib/constants";
import { ComponentGeneralFormulario } from "@/gql/graphql";
import Script from "next/script";
import { useInView } from "react-intersection-observer";
import Editor from "./editor.js/Editor";
import { renderToString } from "react-dom/server";
import { ThemeContext } from "./ThemeProvider";
import styles from "./formulario.module.scss";

interface FormularioProps {
  formulario?: ComponentGeneralFormulario;
}

const Formulario = ({ formulario }: FormularioProps) => {
  const { hsFormLoaded, setHsFormLoaded, startTime }: any =
    useContext(ThemeContext);
  const [formActive, setFormActive] = useState("");

  // Se renderiza el mensaje en una variable, porque la propiedad inlineMessage de hubspot
  // no acepta componentes de react.
  const mensaje = renderToString(<Editor content={formulario?.mensaje} />);

  const hsOptions = {
    region: "na1",
    portalId: `${HUBSPOT_ID}`,
    formId: formulario?.formId,
    target: `.form-${formulario?.formId}`,
    redirectUrl: formulario?.redireccion || null,
    inlineMessage: mensaje || null,
  };

  const titulo = formulario?.titulo;

  const [ref, inView] = useInView({ initialInView: false });

  useEffect(() => {
    if (inView && !hsFormLoaded && !window.hbspt) {
      if (Date.now() - startTime > 5000) {
        setHsFormLoaded(true);
      } else {
        setTimeout(() => {
          setHsFormLoaded(true);
        }, 5000);
      }
    }
  }, [hsFormLoaded, setHsFormLoaded, startTime, inView]);

  return (
    <section className={styles.form} ref={ref}>
      {hsFormLoaded ? (
        <>
          {titulo ? <h4 className={styles.formHeader}>{titulo}</h4> : null}

          <div className={styles.formBody}>
            <div className={`form-${formulario?.formId}`} />
          </div>

          {/* Ejecuta el script cada vez que se renderiza el componente */}
          <Script
            id="hsFormLoader"
            src="//js.hsforms.net/forms/v2.js?pre=1"
            strategy="lazyOnload"
            defer
            onReady={() => {
              if (formulario?.formId && !(formulario.formId === formActive)) {
                window.hbspt?.forms?.create(hsOptions);
                setFormActive(formulario?.formId);
              }

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
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Formulario;
