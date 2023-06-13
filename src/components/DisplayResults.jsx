import { loader } from '../assets';

const DisplayResults = ({ isFetching, error, article }) => {
  return (
    <div className="my-10 max-w-full flex justify-center items-center">
        { isFetching ? (
          <img 
            src={ loader } 
            alt="loader"
            className="w-20 h-20 object-contain"
          />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Bem, isso não deveria ter acontecido...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                <span className="blue_gradient">Resumo</span> do Artigo
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">
                  { article.summary }
                </p>
              </div>
            </div>
          )
        ) }
      </div>
  )
}

export default DisplayResults