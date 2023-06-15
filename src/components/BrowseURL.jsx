import { copy, tick, close, dark_copy, dark_close, dark_tick } from '../assets';

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
                  className="w-[40%] h-[40%] object-contain dark:hidden"
                />
                <img 
                  src={copied === item.url ? dark_tick : dark_copy} 
                  alt="copy_icon" 
                  className="w-[40%] h-[40%] object-contain hidden dark:block"
                />
              </div>
              <p className='flex-1 font-satoshi dark:text-blue-500 text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>

              <div className="copy_btn" onClick={() => handleDelete(item.url)}>
                <img 
                  src={ close } 
                  alt="copy_icon" 
                  className="w-[40%] h-[40%] object-contain dark:hidden"
                />
                <img 
                  src={ dark_close } 
                  alt="copy_icon" 
                  className="w-[40%] h-[40%] object-contain hidden dark:block"
                />
              </div>
            </div>
          ))}
    </div>       
  )
}

export default BrowseURL