import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Field from './components/Field';
import FirstFieldGoal from "./components/FirstFieldGoal";
import SecondFieldGoal from "./components/SecondFieldGoal";

function App() {
   const [ data, setData ] = useState(null);

  // const testdata = [
  //   {article_title: "Article 1", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
  //   {article_title: "Article 2", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: ""},
  //   {article_title: "Article 3", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
  //   {article_title: "Article 4", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
  //   {article_title: "Article 5", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
  //   {article_title: "Article 6", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
  //   {article_title: "Article 7", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
  //   {article_title: "Article 8", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"}
  // ]
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  const BG = styled.div`
    background: #5A8124;
  `

  return data && (
    <div className="App">
      <BG>
      <Header/>
      <Landing data={data}></Landing>
      <FirstFieldGoal text={data.first_field_goal[0]}/>
      <Field articles={data.articles}></Field>
      <SecondFieldGoal interactive={data.second_field_goal[0]}/>
      <Footer/>
      </BG>
    </div>
  );
}

export default App;
