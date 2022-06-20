import React from "react";
import styled from "@emotion/styled";

import Header from "components/Header";
import Footer from "components/Footer";

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <NextSeo {...props.seo} /> */}
      <Header />

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

      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  overflow: hidden;
`;
