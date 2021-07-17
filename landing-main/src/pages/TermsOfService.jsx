import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./Layout";
import MainContent from "./components/TermsOfService/MainContent";

export default class TermsOfService extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Terms Of Service | KuTumba FC</title>
          </Helmet>
          <Layout>
            <MainContent></MainContent>
          </Layout>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
