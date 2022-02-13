import Image from 'next/image'
import img from '../assets/apropos.png'
import Link from 'next/link'
import {ArrowRightIcon} from '@heroicons/react/outline';

function HomeSectionAPropos({Icons,title,text }) {
    return (
        <homsection className="flex flex-row items-center justify-center space-x-24 mb-32 mt-32 px-32">
            {/*rightsection */}
            <Image  
                src={img}
                alt="Picture of tech stuff"
                width={1000}
                height={1000}
            />
            <div className='flex flex-col space-y-8 '>
                <h2 className='text-black text-5xl font-bold leading-tight'>A PROPOS DE <br></br>GARIS WEB SERVICES</h2>
                <p>Garis Web Services c’est avant tout un jeune passionné qui souhaite mettre au service des entreprises et des indépendants, ses compétences en matière de site web.</p>
                <p>Fondé en 2022, Garis Web Services a pour vocation de contribuer à la réussite de nombreux professionnels.</p>
                 {/*Button vers a propos*/}
                 <Link href='/services'>
                    <button className="bg-transparent hover:text-blue-500 hover:border-blue-500 text-black font-bold py-2 px-4 rounded-full border-4 border-black text-lg flex flex-row justify-center items-center w-44">
                        A PROPOS <ArrowRightIcon className='h-8 w-8 pl-2'/>
                    </button>
                </Link>
            </div>

        </homsection>
    );
}

export default HomeSectionAPropos;