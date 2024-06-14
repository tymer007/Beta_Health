import React, { useEffect, useState } from 'react';
import { Share2, Calendar, User, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import Loader from '../components/Loader';
import axios from 'axios';


  const ArticlePage = () => {
    const [article, setArticle] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);

    useEffect(() => {
      // Fetch the main article
      axios.get('https://health-4-u5fi.onrender.com/api/betta/article/666ab92f41901db162cbb33e')
        .then(response => {
          setArticle(response.data);
          // Fetch related articles based on some criteria, e.g., same category
          return axios.get(`/api/articles?category=${response.data.category}`);
        })
        .then(response => setRelatedArticles(response.data))
        .catch(error => console.error(error));
    }, []);

    if (!article) return <div><Loader /></div>;

    return (
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/5">
            <div className="mb-4">
              <h1 className="text-5xl font-bold mb-2">{article.title}How to avoid Breast Cancer</h1>

              <div className="border-t border-gray-600 flex p-2 w-full justify-between">
                <div className='flex justify-around items-center '>

                  <img src="user-286.png" className="w-10 h-10 rounded-md" />
                  <div className='flex justify-between items-center transition-all'>
                    <div className="leading-4">
                      <h4 className="font-semibold text-gray-500">{article.author}Emily Carter</h4>
                      <span className="text-sm text-gray-500">{article.primarySpecialty}Gynaecologist</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-around items-center text-gray-500'>
                  28th May, 2024
                  {/* {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}  <Calendar className="w-5 h-5 ml-1" /> */}
                </div>

              </div>


            </div>
            <img src="happywomen.jpeg" alt="Article" className="mb-4 w-4/5 h-auto object-cover" />

            <div className="prose" dangerouslySetInnerHTML={{ __html: article.content }} />
            <strong>Introduction</strong>
        <p>Breast cancer remains one of the most prevalent and impactful diseases affecting women worldwide. Despite its high incidence, ongoing research and advancements in medical science offer hope through improved diagnostic techniques, innovative treatments, and effective preventive measures.</p>

        <strong>New Diagnostic Techniques</strong>
        <p>Early detection is crucial in the fight against breast cancer. Recent advancements in diagnostic technology, such as 3D mammography and molecular breast imaging, have significantly improved the accuracy of detecting early-stage breast cancer. These technologies allow for better visualization of breast tissue, enabling more precise identification of abnormalities.</p>

        <strong>Innovative Treatment Options</strong>
        <p>The treatment landscape for breast cancer has evolved dramatically over the past decade. Targeted therapies, immunotherapy, and personalized medicine have revolutionized the approach to treating different types of breast cancer. For instance, HER2-positive breast cancers, which were once considered difficult to treat, now have multiple targeted treatment options that have significantly improved patient outcomes.</p>

        <strong>Preventive Measures</strong>
        <p>Prevention is a critical aspect of reducing breast cancer risk. Lifestyle changes, such as maintaining a healthy weight, regular physical activity, and limiting alcohol consumption, can lower the risk. Additionally, genetic testing for BRCA1 and BRCA2 mutations helps identify individuals at higher risk, enabling proactive monitoring and preventive measures, such as prophylactic surgeries or chemoprevention.</p>
        <img src="Pregnant.jpg" alt="Related Article" className="mb-2 w-3/5 text-center  h-auto object-cover rounded-lg" />

        <strong>Emotional and Psychological Support</strong>
        <p>Breast cancer diagnosis and treatment can be emotionally and psychologically challenging. Support systems, including counseling, support groups, and mental health services, play a vital role in helping patients navigate their journey. Survivor stories and peer support groups provide encouragement and practical advice, fostering a sense of community and resilience.</p>

        <strong>Conclusion</strong>
        <p>The ongoing advancements in breast cancer research and treatment bring hope and optimism to millions of women worldwide. By staying informed and proactive, individuals can better manage their health and well-being. This article aims to educate and empower readers with the knowledge needed to navigate the complexities of breast cancer with hope and resilience.</p>
          </div>

          <div className="w-full h-full bg-customDark 
rounded-lg lg:w-1/5 lg:ml-4 mt-4 lg:mt-0 p-2">
            <div className="hidden lg:block text-center">
              <h2 className="text-xl font-bold m-5  text-white">Related Articles</h2>
              {/* Example of Related Articles */}
              <div className="mb-4 items-center">


                <img src="Pregnant.jpg" alt="Related Article" className="mb-2 w-full text-xl  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange">{article.relatedArticleTitle}Does taking antibiotics during pregnancy harm an unborn child?</a>
              </div>
              {/* Repeat for other related articles */}
              <div className="mb-4 items-center">


                <img src="drugs.jpg" alt="Related Article" className="mb-2 w-full text-lg  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange">{article.relatedArticleTitle}How to administer quick and effective first aid</a>
              </div>

              <div className="mb-4 items-center">


                <img src="openwound.png" alt="Related Article" className="mb-2 w-full text-lg  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange">{article.relatedArticleTitle}What is the best antiseptic used to treat open wounds?</a>
              </div>
            </div>
          </div>
        </div>

        <div className='font-bold text-gray-500 mt-4'>Share this Article</div>

        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-500"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-gray-500"><Twitter className="w-5 h-5" /></a>
          {/* Other share icons */}
        </div>
      </div>
    );
  };

  export default ArticlePage;
