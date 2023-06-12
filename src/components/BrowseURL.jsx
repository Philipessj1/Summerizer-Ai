import { copy, tick, close } from '../assets';

const BrowseURL = ({ allArticles, setArticle, handleCopy, handleDelete, copied }) => {
  return (
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
      {allArticles.map((item, index) => (
            <div 
              className="link_card"
              key={`link-${index}`}
              onClick={() => setArticle(item)}
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                <img 
                  src={copied === item.url ? tick : copy} 
                  alt="copy_icon" 
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>

              <div className="copy_btn" onClick={() => handleDelete(item.url)}>
                <img 
                  src={ close } 
                  alt="copy_icon" 
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
            </div>
          ))}
    </div>       
  )
}

export default BrowseURL