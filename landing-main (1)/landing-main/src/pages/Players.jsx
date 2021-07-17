import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./Layout";
import MainContent from "./components/Players/MainContent";

export default class Players extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Players | KuTumba FC</title>
          </Helmet>
          <Layout>
            <MainContent></MainContent>
          </Layout>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
