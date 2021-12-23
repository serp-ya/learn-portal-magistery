import * as React from "react";
import { compose } from 'redux';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./modules/header";
import { withProfessions } from './modules/professions';
import { withUser } from "./modules/user";
import { MAIN_PAGE_ROUTE, MainPage } from "./pages/main";

const AppComponent = React.memo(() => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '20px' }}>
        <Routes>
          <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
        </Routes>
      </Container>
    </>
  );
});

export const App = compose<React.FC>(
  withUser,
  withProfessions,
)(AppComponent);
