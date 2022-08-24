
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'
import Search from './components/Search';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


function App() {
  const [businessData, setBusinessData] = useState([]);
  const [entertainmentData, setEntertainmentData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);
  const [searchText, setSearchText] = useState('');
  console.log('xsssssssxxxx', searchText)
  // const API_KEY = "fa4fbad0ae5645a08bd2503bcd0b33c4"

  // axios.get(`https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=${API_KEY}`)
  const getBusinessNews = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/news-api`)
    console.log("===========", response)
    // setBusinessData(response)

    setBusinessData(response.data.Newsdata)
    // localStorage.setItem('businessData', JSON.stringify(response.data.articles))

    // console.log("Business_data", response.data.articles)
    // const items = JSON.parse(localStorage.getItem('businessData'));
    // if (items) {
    //   setBusinessData(items);
    // }
  }
  const getEntertainmentNews = async () => {
    // const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`)
    // setEntertainmentData(data.articles)
    // localStorage.setItem('entertainmentData', JSON.stringify(data.articles))
    // console.log("Entertainement_data.articles", data.articles)
    // const items = JSON.parse(localStorage.getItem('entertainmentData'));
    // if (items) {
    //   setEntertainmentData(items);
    // }
  }

  const getTechnologyNews = async () => {
    // const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${API_KEY}`)
    // setTechnologyData(data.articles)
    // localStorage.setItem('technologyData', JSON.stringify(data.articles))
    // console.log("Technology_data.articles", data.articles)
    const items = JSON.parse(localStorage.getItem('technologyData'));
    if (items) {
      setTechnologyData(items);
    }
  }
  useEffect(() => {

    getBusinessNews();
    // getEntertainmentNews();
    // getTechnologyNews()
  }, [])



  return (
    <>
      <Nav></Nav>
      <Search setSearchText={setSearchText}></Search>
      <>
      </>
      <Routes>
        <Route path='/business' element={<Cards businessData={businessData} searchText={searchText} name="Business" />} />
        <Route path='/entertainment' element={<Cards businessData={entertainmentData} searchText={searchText} name="Entertainment" />} />
        <Route path='/technology' element={<Cards businessData={technologyData} searchText={searchText} name="Technology" />} />
        {/* <Route path='/LandingPage/<id>' element={<LandingPage landingData={landingData} />} /> */}
        <Route path='/LandingPage/:id' element={<LandingPage />} />
        <Route path="/Sign-in" element={<SignIn />}></Route>
        <Route path="/Sign-up" element={<SignUp />}></Route>
      </Routes>


    </>



  );
}

export default App;
