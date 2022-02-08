
function Card({Icons,title,text }) {
    return (
        <div className="flex flex-col items-center space-y-3">
            {Icons && <Icons className='h-20 w-20 text-blue-500 font-light'/>}
            <h3 className='text-black text-2xl font-bold text-center '>{title}</h3>
            <p className="text-gray-600 text-lg w-4/6 text-center leading-8">{text}</p>
        </div>
    );
}

export default Card;