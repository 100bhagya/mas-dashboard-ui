import React from "react";
import TopicBar from "../Components/TopicBar";
import WordOfDay from "./WordOfDay";
import SummaryWritingContent from "./SummaryWritingContent";
import { Route, Outlet } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <div className="flex">
        <TopicBar />
        <Outlet />
        {/* <Switch>
    <Route path="/MainMenu/about">
      <SummaryWritingContent />
    </Route>
    <Route path="MainMenu/user">
      <WordOfDay />
    </Route>
    </Switch> */}
      </div>
    </>
  );
};

export default MainMenu;
