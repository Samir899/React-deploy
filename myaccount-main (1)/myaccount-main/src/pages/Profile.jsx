import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./Layout";
import MainContent from "./components/Profile/MainContent";

export default class Profile extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Profile | KuTumba FC</title>
          </Helmet>
          <Layout>
            <MainContent></MainContent>
          </Layout>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
