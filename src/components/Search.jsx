import { linkIcon } from "../assets";



const Search = ({ handleSubmit, article, setArticle, articleLang, setArticleLang }) => {
  const languages = ['pt', 'en', 'es', 'it', 'fr','ru'];

  return (
    <form
      className="relative flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <img src={ linkIcon } alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />
      <input 
        type="url"
        placeholder="Insira uma URL"
        value={article.url}
        onChange={(e) => {setArticle({
        ...article,
        url: e.target.value
        })}}
        className="url_input peer"
        required
      />      
      <select 
        value={ articleLang }
        className="lang_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
        onChange={(e) => setArticleLang(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>{ lang.toUpperCase() }</option>
        ))}
      </select>   
      <button 
        type="submit" 
        className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
      >
        <p>↵</p>
      </button>   
    </form>
  )
}

export default Search