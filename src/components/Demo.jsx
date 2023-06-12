import { useState, useEffect } from "react";
import Search from "./Search";
import BrowseURL from "./BrowseURL";
import DisplayResults from "./DisplayResults";

import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  });

  const [allArticles, setAllArticles] = useState([]);
  const [articleLang, setArticleLang] = useState('pt');
  const [copied, setCopied] = useState('');
  
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    /* Get localStorage data */
    const localStorageArticles = JSON.parse(localStorage.getItem('articles'));

    if (localStorageArticles) {
      setAllArticles(localStorageArticles);
    }
  }, []);

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  }

  const handleDelete = (deleteUrl) => {
    const updatedArticles = allArticles.filter((data) => data.url !== deleteUrl);

    setAllArticles(updatedArticles);

    localStorage.setItem('articles', JSON.stringify(updatedArticles));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ 
      articleUrl: article.url, articleLang: articleLang 
    });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      
      <div className="flex flex-col w-full gap-2">
        {/* Search */}

        <Search 
          article={ article } 
          handleSubmit={ handleSubmit } 
          setArticle={setArticle}
          articleLang={ articleLang }
          setArticleLang={ setArticleLang }
        />
        {/* Browse URL History */}

        <BrowseURL 
          allArticles={ allArticles } 
          setArticle={ setArticle }
          handleCopy={ handleCopy }
          handleDelete={ handleDelete }
          copied={ copied }
        />
      </div>
      {/* Display Results */}

      <DisplayResults 
        article={ article } 
        isFetching={ isFetching } 
        error={ error } 
      />
    </section>
  )
}

export default Demo