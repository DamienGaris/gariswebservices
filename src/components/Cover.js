import Image from 'next/image';
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/outline';

function Cover() {
  return (
    <cover className='flex flex-row'>
      {/* cover left*/}
      <div className='bg-black flex-1'>
          <div className='flex justify-evenly items-start flex-col space-y-12 px-14 py-24 lg:px-28 lg:py-24'>
            <h2 className='text-white font-semibold  text-xl lg:text-2xl md:text-xl'>GARIS WEB SERVICES</h2>
            <h1 className='text-white font-semibold text-5xl lg:text-6xl lg:leading-snug'>CRÉATION DE SITES WEB</h1>
            <p className='text-white font-semibold text-lg lg:text-xl leading-7 lg:leading-10'>Passionné par le développement de site web, je lance mon activité professionnelle afin d’aider les entreprises à construire une image digitale de qualité.</p>
            {/*Button vers a propos*/}
            <Link href='/a-propos'>
                <button className="bg-transparent hover:text-white hover:border-white hover:opacity-80 text-white font-semibold py-1 px-2 lg:py-2 lg:px-4 rounded-full border-4 border-white text-sm lg:text-lg flex flex-row items-center">
                        A PROPOS <ArrowRightIcon className='h-8 w-8 pl-2 '/>
                </button>
            </Link>
          </div>
      </div>
      {/*heacoverder right*/}
      <div className="bg-[url('../assets/cover.jpg')] flex-1 bg-no-repeat bg-cover hidden lg:flex">
      </div>    
    </cover>

  );
}

export default Cover;
