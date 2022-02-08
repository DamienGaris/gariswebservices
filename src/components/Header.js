import Image from 'next/image';
import logo from '../assets/g.png'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex flex-row justify-evenly bg-white items-center sticky top-0 z-10'>
      {/* header left*/}
      <div className='m-2 flex flex-row items-center cursor-pointer'>
        <Link href='/'>
          <Image 
            src={logo} width='50px' height='50px'objectFit='contain'
          />
        </Link>
      </div>
      {/*header right*/}
      <div className='pr-3 flex flex-row space-x-6'>
        <Link href='/'>
          <p className='link'>Acceuil</p>
        </Link>
        <Link href='/services'>
          <p className='link'>Services</p>
        </Link>
        <Link href='/a-propos'>
          <p className='link'>A propos</p>
        </Link>
        <Link href='/contact'>
          <p className='link'>Contact</p>
        </Link>
      </div>    
    </header>

  );
}

export default Header;
