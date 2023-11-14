import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Field from './components/Field';
import FirstFieldGoal from './components/FirstFieldGoal';
import SecondFieldGoal from './components/SecondFieldGoal.js';

function App() {
  //const [ data, setData ] = useState(null);
  
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

  const data = {blurb_text: "words, words, words, words, words", interactive:"interactive box"}
  return (
    <div className="App">
      <Header/>
      <FirstFieldGoal text={data}/>
      <Field/>
      <SecondFieldGoal interactive={data}/>
      <Footer/>
    </div>
  );
}

export default App;
