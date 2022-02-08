import Link from 'next/link'
import Card from './Card';
import {ArrowRightIcon, 
        LightBulbIcon,
        IdentificationIcon,
        PencilAltIcon,
        DesktopComputerIcon
} from '@heroicons/react/outline';

function HomeContent1() {
  return (
    <homecontent className='flex flex-row bg-white mb-32'>
        {/* content full col*/}
        <div className='flex flex-col items-center w-full'>
            {/* ma vision content col*/}
            <div className='flex flex-col items-center pt-32 space-y-8'>
                <h1 className='text-black text-5xl font-bold'>MA VISION</h1>
                <p className='w-4/6 text-center text-lg text-gray-600 leading-9'>A travers mes services, je propose de construire ensemble, votre espace dédié et personnalisé pour communiquer sur votre activité.</p>
                {/*Button vers services*/}
                <Link href='/services'>
                    <button className="bg-transparent hover:text-blue-500 hover:border-blue-500 text-black font-bold py-2 px-4 rounded-full border-4 border-black text-lg flex flex-row items-center">
                        SERVICES <ArrowRightIcon className='h-8 w-8 pl-2'/>
                    </button>
                </Link>
            </div>
            {/* card col*/}
            <div className='flex flex-col space-y-16 md:flex-row md:space-y-0 lg:flex-row lg:space-y-0 pt-20'>
                <Card Icons={LightBulbIcon} title='Un projet' text='Présentez votre activité afin de déterminer ensemble, la solution la plus adéquate pour votre projet.'/>
                <Card Icons={IdentificationIcon} title='Un accompagnement' text='Participez au processus de création de votre site web afin d’enrichir son contenu.'/>
                <Card Icons={PencilAltIcon} title='Une identité digitale' text='Différenciez-vous de la concurrence et construisez votre image numérique afin de vous forger une excellente e-réputation.'/>
                <Card Icons={DesktopComputerIcon} title='Un site web' text='Disposez d’un site web professionnel, sécurisé et adapté à tout support numérique.'/>         
            </div>
        </div>
    </homecontent>

  );
}

export default HomeContent1;
