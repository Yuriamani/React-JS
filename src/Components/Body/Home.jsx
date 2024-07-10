// Home.js
import React, { useEffect, useState } from 'react';
import Background from "../Background/Background";
import Hero from '../Hero/Hero';



function Home() {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ] 
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
     setHeroCount((count)=>{return count===2?0:count+1})
     }, 3000);
    },[])
  return <>
  <h2>Home Page</h2>
  <Background playStatus={playStatus} heroCount={heroCount}/>
       <Hero
       heroData={heroData[heroCount]}
       heroCount={heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}
       setPlayStatus={setPlayStatus}
       />
  </>;
}

export default Home;
