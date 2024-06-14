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
              <h1 className="text-5xl font-bold mb-2">{article.title}</h1>

              <div className="border-t border-gray-600 flex p-2 w-full justify-between">
                <div className='flex justify-around items-center '>

                  <img src="user-286.png" className="w-10 h-10 rounded-md" />
                  <div className='flex justify-between items-center transition-all'>
                    <div className="leading-4">
                      <h4 className="font-semibold text-gray-500">{article.author}</h4>
                      <span className="text-sm text-gray-500">{article.primarySpecialty}</span>
                    </div>
                  </div>
                </div>

                <div className='flex justify-around items-center text-gray-500'>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}  <Calendar className="w-5 h-5 ml-1" />
                </div>

              </div>


            </div>
            <img src={article.imageUrl} alt="Article" className="mb-4 w-full h-auto object-cover" />

            <div className="prose" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <div className="w-full h-full bg-customDark 
rounded-lg lg:w-1/5 lg:ml-4 mt-4 lg:mt-0 p-2">
            <div className="hidden lg:block text-center">
              <h2 className="text-xl font-bold m-5  text-white">Related Articles</h2>
              {/* Example of Related Articles */}
              <div className="mb-4 items-center">


                <img src="index.jpeg" alt="Related Article" className="mb-2 w-full text-xl  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange">{article.relatedArticleTitle}Mbappe Speaks On World Cup</a>
              </div>
              {/* Repeat for other related articles */}
              <div className="mb-4 items-center">


                <img src="index.jpeg" alt="Related Article" className="mb-2 w-full text-lg  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange">{article.relatedArticleTitle}Mbappe Speaks On World Cup</a>
              </div>

              <div className="mb-4 items-center">


                <img src="index.jpeg" alt="Related Article" className="mb-2 w-full text-lg  h-auto object-cover rounded-lg" />

                <a href="#" className="text-white font-semibold hover:underline hover:text-customOrange">{article.relatedArticleTitle}Mbappe Speaks On World Cup</a>
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
