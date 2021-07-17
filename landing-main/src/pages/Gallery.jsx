import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./Layout";
import MainContent from "./components/Gallery/MainContent";

export default class Gallery extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Gallery | KuTumba FC</title>
          </Helmet>
          <Layout>
            <MainContent></MainContent>
          </Layout>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
