import { useState } from 'react';
import { logo, dark_logo, sun, moon } from '../assets';
import { useEffect } from 'react';

const Hero = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('dark-theme');

    if (localTheme) setDarkTheme(localTheme === 'true' ? true : false);
  }, [])

  useEffect(() => {
    if (darkTheme) document.body.classList.add('dark');
    else document.body.classList.remove('dark');

    localStorage.setItem('dark-theme', darkTheme ? 'true' : 'false');
  }, [darkTheme]);

  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={ darkTheme ? dark_logo : logo } alt="sumz_logo" className='w-28 object-contain'/>

        <div className='flex gap-5'>
          <button
            className='dark:text-white text-gray-500'
            onClick={() => setDarkTheme(!darkTheme)}
          >
            <img src={ darkTheme ? moon : sun } alt="theme-logo" className='h-[25px]' />
          </button>

          <button
            type='button'
            onClick={() => window.open('https://github.com/philipessj1', '_blank')}
            className="black_btn"
          >
            GitHub
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Resuma artigos com o <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplifique sua leitura com o Summerize, um resumidor de artigos de código aberto que transforma artigos longos em resumos claros e concisos.
      </h2>
    </header>
  )
}

export default Hero