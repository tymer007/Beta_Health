import './App.css'
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import './bootstrap.min.css'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AboutUs from './components/AboutUs.jsx';
import WriterProfile from './pages/WriterProfile';
import SignUp from './pages/forms/SignUp.jsx';
import DashboardWriterProfile from './dashboard/DashboardWriterProfile.jsx';
import DashboardWriterConsultations from './dashboard/DashboardConsultations.jsx';
import DashboardWriteArticle from './dashboard/DashboardWriteArticle.jsx';
import DashboardWriteArticle2 from './dashboard/DashboardWriteArticle2.jsx';
import CardCarousel from './components/CardCarousel.jsx';
import TopArticles from './components/TopArticles.jsx';
import Login from './pages/forms/Login.jsx';
import LoginDashboard from './pages/forms/LoginDashboard.jsx';
import ApplicationForm from './pages/forms/ApplicationForm.jsx';
import ArticlePage from './pages/ArticlePage.jsx';

function App() {

  // const [count, setCount] = useState(0)

  return (
    <>
      {/* 
      <div><Header /></div>
      <div><Footer /></div> 
      <div><DashboardWriteArticle2 /></div> 
      
    */}

      <div><TopArticles /></div>
      <div><CardCarousel /></div>
      <div><AboutUs /></div>
      <div><ArticlePage /></div>
      <div><WriterProfile /></div>
      <div><SignUp /></div>
      <div><Login /></div>
      <div><ApplicationForm /></div>
      <div><LoginDashboard /></div>
      <div><DashboardWriteArticle /></div>
      <div><DashboardWriterConsultations /></div>
      <div><DashboardWriterProfile /></div>

    </>
  )
}

export default App