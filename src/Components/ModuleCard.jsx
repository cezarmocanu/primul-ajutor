import primAjutorOutdoor from'/src/assets/primAjutorOutdoor.png'

function ModuleCard ({moduleTitle, moduleDescription}) {
    return(
        <div className="flex-col h-2/3 w-1/3 bg-white rounded-md drop-shadow-xl">
            <div className='flex justify-center px-5 py-8'>
                <img                
                src={primAjutorOutdoor}
                alt="primAjutorOutdoor"
                className='flex object-cover'          
                />
            </div>
        
            <div className='flex p-3 justify-center text-lg'>{moduleTitle}</div> 

            <div className='flex justify-center text-justify px-8'>
                <p>
                    {moduleDescription}
                </p>
            </div>
            <div className='flex justify-center h-1/3 p-8 text-[#E22A2A] text-xl cursor-pointer'>
                <p>Afla mai multe</p>
            </div>
        </div>      
    )
}

export default ModuleCard;