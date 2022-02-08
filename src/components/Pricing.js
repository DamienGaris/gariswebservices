import Link from 'next/link'

function Pricing({Icons,title,text }) {
    return (
        <pricing className='flex flex-col py-32 bg-[#F4F4F4F4] items-center space-y-6'>
            <div className='flex flex-col space-y-4 lg:flex-row items-center lg:items-start lg:space-x-12 justify-center'>
                <div className='flex flex-col space-y-6 items-center p-7 border-none border-gray-600 rounded-md shadow-lg text-center w-3/4 lg:w-3/12 '>
                    {/*Pricing card 1*/}
                    <h3 className='text-blue-600 text-2xl font-bold'>Site vitrine Classique</h3>
                    <p className='text-gray-600 font-light'>Développé sous WORDPRESS</p>
                    <h2 className='flex'><p>*</p><h2 className='text-6xl font-bold text-black'>899€</h2></h2>
                    <p className='text-black font-bold'>Domaine + hébergement + email pendant 12 mois</p>
                    <p className='text-black font-bold'>Site responsive</p>
                    <p className='text-black font-bold'>1 à 3 pages</p>
                    <p>Mise en place de contenu (textes et images)</p>
                    <p>Formulaire de contact</p>
                    <p>Certificat de sécurité</p>
                    <p>Référencement</p>
                    <p>Mise en ligne du site</p>
                    <Link href='/contact'>
                        <button className="bg-transparent hover:text-blue-500 hover:border-blue-500 text-black font-bold py-2 px-4 rounded-full border-4 border-black text-lg flex flex-row items-center">
                            Demander un devis
                        </button>
                    </Link>
                </div>
                <div className='flex flex-col space-y-6 items-center p-7 border-none border-gray-600 rounded-md shadow-lg bg-white text-center w-3/4 lg:w-3/12'>
                    {/*Pricing card 2*/}
                    <h3 className='text-red-600 text-2xl font-bold' >Site vitrine Ultime</h3>
                    <p className='text-gray-600 font-light'>Développé sous DIVI</p>
                    <div className='flex'><p>*</p><h2 className='text-6xl font-bold text-black'>1399€</h2></div>
                    <p className='text-black font-bold'>Domaine + hébergement + email pendant 12 mois</p>
                    <p className='text-black font-bold' >Site responsive</p>
                    <p className='text-black font-bold'>1 à 5 pages</p>
                    <p className='text-black font-bold'>Animations</p>
                    <p>Mise en place de contenu (textes et images)</p>
                    <p>Formulaire de contact</p>
                    <p>Certificat de sécurité</p>
                    <p>Référencement</p>
                    <p>Mise en ligne du site</p>
                    <Link href='/contact'>
                        <button className="bg-transparent hover:text-blue-500 hover:border-blue-500 text-black font-bold py-2 px-4 rounded-full border-4 border-black text-lg">
                            Demander un devis
                        </button>
                    </Link>
                </div>
                <div className='flex flex-col space-y-6 items-center p-7 border-none border-gray-600 rounded-md shadow-lg text-center w-3/4 lg:w-3/12'>
                    {/*Pricing card 3*/}
                    <h3 className='text-orange-300 text-2xl font-bold'>Forfait maintenance</h3>
                    <p className='text-gray-600 font-light'>Annuel ou 50€/HEURE**</p>
                    <div className='flex'><p>***</p><h2 className='text-6xl font-bold text-black'>400€</h2></div>
                    <p className='text-black font-bold'>Mise à jour du site et des extensions</p>
                    <p className='text-black font-bold'>Modifications de contenu (textes et images) </p>
                    <p className='text-black font-bold'>Sauvegarde mensuelle de l'intégralité du site</p>
                    <Link href='/contact'>
                        <button className="bg-transparent hover:text-blue-500 hover:border-blue-500 text-black font-bold py-2 px-4 rounded-full border-4 border-black text-lg">
                            Demander un devis
                        </button>
                    </Link>
                </div>  
            </div>
            <div className='w-3/4'>
                <p className='text-sm lg:text-base'><strong>Les tarifs indiqués ci-dessus sont H.T.</strong> *Prix pouvant évoluer selon la demande client. **Temps de travail estimé avec devis à l’appui. ***Maintenance annuelle faisant l’objet d’un engagement de 12 mois. <strong>Au terme du projet,</strong>  vous êtes propriétaire de l’ensemble des fichiers constituant le site internet.</p>
            </div>
        </pricing>
        
    );
}

export default Pricing;
