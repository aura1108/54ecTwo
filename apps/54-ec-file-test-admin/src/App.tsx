import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PdfSubmissionList } from "./pdfSubmission/PdfSubmissionList";
import { PdfSubmissionCreate } from "./pdfSubmission/PdfSubmissionCreate";
import { PdfSubmissionEdit } from "./pdfSubmission/PdfSubmissionEdit";
import { PdfSubmissionShow } from "./pdfSubmission/PdfSubmissionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"54ec-file-test"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PdfSubmission"
          list={PdfSubmissionList}
          edit={PdfSubmissionEdit}
          create={PdfSubmissionCreate}
          show={PdfSubmissionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
