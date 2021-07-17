import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./Layout";
import MainContent from "./components/Newsroom/MainContent";

export default class Newsroom extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Newsroom | KuTumba FC</title>
          </Helmet>
          <Layout>
            <MainContent></MainContent>
          </Layout>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
