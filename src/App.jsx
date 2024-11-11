import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import TrendingNews from "./Components/Trending News/Trending News";
import RecentNews from "./Components/Recent News/Recent News";
import ClubsRanking from "./Components/Clubs Ranking/Clubs Ranking";
import SportsArticle from "./Components/Sports Article/Sports Article";

function App() {
  return (<>
      <Navbar />
      <Home/>
    <Category />
    < TrendingNews/>
    <RecentNews/>
    <ClubsRanking />
    <SportsArticle />
    </>
  );
}

export default App;
