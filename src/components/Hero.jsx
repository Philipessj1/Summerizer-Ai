import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={ logo } alt="sumz_logo" className='w-28 object-contain'/>

        <button
          type='button'
          onClick={() => window.open('https://github.com/philipessj1', '_blank')}
          className="black_btn"
        >
          GitHub
        </button>
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