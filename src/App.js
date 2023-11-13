import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Field from './components/Field';
import FirstFieldGoal from "./components/FirstFieldGoal";
import SecondFieldGoal from "./components/SecondFieldGoal";
import adkins from './images/adkins.cutout 1.png'
import jmj1 from './images/jmj1 1.png'

function App() {
  // const [ data, setData ] = useState(null);

  const testdata = [
    {article_title: "Article 1", article_url: "www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_image: adkins, article_type: "left"},
    {article_title: "Article 2", article_url: "www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_image: jmj1, article_type: "right"},
    {article_title: "article3", article_url: "www.google.com", article_byline: "words words words words words words words words words words words words words words words", article_image: adkins, article_type: "left"},
    {article_title: "article4", article_url: "www.google.com", article_byline: "byline byline", article_image: jmj1, article_type: "right"},
    {article_title: "article5", article_url: "www.google.com", article_byline: "byline byline", article_image: adkins, article_type: "left"},
    {article_title: "article6", article_url: "www.google.com", article_byline: "byline byline", article_image: jmj1, article_type: "right"},
    {article_title: "article7", article_url: "www.google.com", article_byline: "byline byline", article_image: adkins, article_type: "left"},
    {article_title: "article8", article_url: "www.google.com", article_byline: "byline byline", article_image: jmj1, article_type: "right"}
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
