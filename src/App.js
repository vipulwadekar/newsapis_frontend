
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'
import Search from './components/Search';
import axios from "axios";
import { useEffect, useState } from 'react';
function App() {
  const [businessData, setBusinessData] = useState([]);
  const API_KEY = "ef93b4561dc14c8bb183f03ab1f8dbcc"
  // axios.get(`https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=${API_KEY}`)
  const getBusinessNews = async () => {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`)
    // const businessData = data
    setBusinessData(data.articles)
    console.log("data.articles", data.articles)

  }
  useEffect(() => {

    getBusinessNews();
    console.log("use effect", businessData)
  }, [])

  // const getEntertainmentNews = async () => {
  //   const { entertainementData } = await axios.get(`https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=${API_KEY}`)
  //   console.log(entertainementData.sources)
  // }

  // const getTechnologyNews = async () => {
  //   const { technologyData } = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=technology&apiKey=${API_KEY}`)
  //   console.log(technologyData)
  // }
  return (
    <>
      <Nav></Nav>
      <Search></Search>
      <Cards businessData={businessData}></Cards>
    </>



  );
}

export default App;
