import React from "react";
import styled from "@emotion/styled";

import Header from "components/Header";
import Footer from "components/Footer";

import { ENUM_SERVICIO_CATEGORIA, useQuery } from "client";

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => {
  const servicios =
    useQuery().servicios({
      pagination: {
        pageSize: 100,
      },
      filters: {
        categoria: {
          in: [
            ENUM_SERVICIO_CATEGORIA.ahorro,
            ENUM_SERVICIO_CATEGORIA.prestamos,
            ENUM_SERVICIO_CATEGORIA.facilidades,
          ],
        },
      },
      sort: ["nombre:asc"],
    })?.data || [];

  let footerItems: any = [];
  let headerItems: any = [];

  const menuItems = useQuery()
    .menusMenuItems({
      pagination: {
        pageSize: 100,
      },
      filters: {
        root_menu: {
          slug: {
            in: ["header", "footer"],
          },
        },
      },
      sort: ["order:asc"],
    })
    ?.data.map((item) => {
      const url = item.attributes?.url;
      const target = item.attributes?.target;
      const title = item.attributes?.title;

      if (item.attributes?.root_menu.data?.attributes?.slug === "header") {
        headerItems.push(item);
      } else {
        footerItems.push(item);
      }
    });

  return (
    <>
      <Header menuItems={headerItems} servicios={servicios} />
      <Main>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              // ...{ resultsSearch, setResultsSearch },
            });
          }
          return child;
        })}
      </Main>
      <Footer menuItems={footerItems} />
    </>
  );
};

export default Layout;

const Main = styled.main`
  overflow: hidden;
  min-height: 100vh;
`;
