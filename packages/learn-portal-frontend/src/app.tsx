import * as React from "react";
import { compose } from "redux";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./modules/header";
import { withProfessions } from "./modules/professions";
import { withSkills } from "./modules/skills";
import { withUser } from "./modules/user";
import { MAIN_PAGE_ROUTE, MainPage } from "./pages/main";
import {
  SELECTED_SKILL_ID_PARAM_NAME,
  SelectedSkillPage,
} from "./pages/selected-skill";
import {
  SELECTED_LECTION_ID_PARAM_NAME,
  SELECTED_LECTION_PAGE_ROUTE,
  SelectedLectionPage,
} from "./pages/selected-lection";
import { SKILLS_PAGE_ROUTE, SkillsPage } from "./pages/skills";

const AppComponent = React.memo(() => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: "20px" }}>
        <Routes>
          <Route path={MAIN_PAGE_ROUTE} element={<MainPage />} />
          <Route path={SKILLS_PAGE_ROUTE} element={<SkillsPage />} />
          <Route
            path={`${SKILLS_PAGE_ROUTE}/:${SELECTED_SKILL_ID_PARAM_NAME}`}
            element={<SelectedSkillPage />}
          />
          <Route
            path={`${SELECTED_LECTION_PAGE_ROUTE}/:${SELECTED_LECTION_ID_PARAM_NAME}`}
            element={<SelectedLectionPage />}
          />
        </Routes>
      </Container>
    </>
  );
});

export const App = compose<React.FC>(
  withUser,
  withProfessions,
  withSkills
)(AppComponent);
