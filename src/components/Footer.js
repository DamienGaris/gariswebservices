import Link from 'next/link'
import Image from 'next/image'
import InstaLogo from '../assets/instagram.png'
import FbLogo from '../assets/facebook.png'

function Footer({Icons,title,text }) {
    return (
        <footer className="flex flex-col h-28 bg-black justify-evenly">
            {/*top*/}
            <div className="flex flex-row space-x-3 px-48">
                <Link href='/mentions'>
                    <p className='text-lg text-gray-300 hover:text-gray-500 cursor-pointer'>Mention légales</p>
                </Link>
                <Link href='/politique' >
                    <p className='text-lg text-gray-300 hover:text-gray-500 cursor-pointer'>Conditions générales</p>
                </Link>
            </div>
            {/*bottom*/}
            <div className="flex flex-row px-48 justify-between">
                <p className="text-sm text-gray-400">© Garis Damien - 2022</p>
                <div className='flex space-x-5'>
                    <Link href='https://www.instagram.com/gariswebservices/?hl=fr' >
                        <Image 
                            src={InstaLogo} width='25px' height='25px' objectFit='contain' className='cursor-pointer'
                        />
                    </Link>
                    <Link href='https://www.facebook.com/gariswebservices/' className="cursor-pointer">
                        <Image 
                            src={FbLogo} width='50px' height='25px' objectFit='contain' className='cursor-pointer'
                        />
                    </Link>
                </div>
                

            </div>
            
        </footer>
    );
}

export default Footer;