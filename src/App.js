import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Field from './components/Field';
import FirstFieldGoal from "./components/FirstFieldGoal";
import SecondFieldGoal from "./components/SecondFieldGoal";

function App() {
  // const [ data, setData ] = useState(null);

  const testdata = [
    {article_title: "Article 1", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
    {article_title: "Article 2", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: ""},
    {article_title: "Article 3", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
    {article_title: "Article 4", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
    {article_title: "Article 5", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
    {article_title: "Article 6", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
    {article_title: "Article 7", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"},
    {article_title: "Article 8", article_url: "https://www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_author: "Joe Bruin"}
  ]
  
  // useEffect(() => {
	// 	fetch("<TODO: insert api url here>")
	// 	.then(res => res.json())
	// 	.then(res => setData(res.data['article.aml']))
  // }, [])

  // return data && (
  //   <div className="App">
  //     <Header/>
  //     Hello Daily Bruin!
  //     <Footer/>
  //   </div>
  // );

  return (
    <div className="App">
      <Header/>
      <FirstFieldGoal/>
      <Field articles={testdata}/>
      <SecondFieldGoal/>
      <Footer/>
    </div>
  );
}

export default App;
