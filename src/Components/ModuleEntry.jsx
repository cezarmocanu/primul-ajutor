import Image from "next/image";
import locationIcon from 'src/assets/location-arrow.png'
import calendar from 'src/assets/calendar.png'
import clock from 'src/assets/clock.png'
import price from 'src/assets/money-bill.png'
import arrowRight from 'src/assets/chevron-right.png'

export default function ModuleEntry ({titluModul, locatieModul, data, ora, pret, durata}) {
    return (
        <div className="module-card flex border-2 justify-between">
            <div className="module-details flex justify-start">
                <div className="left-container flex flex-col px-5">
                    <div className="module-title  p-3">
                        <h1 className="font-bold text-2xl pr-5">{titluModul}</h1>
                    </div>
                    <div className="module-location flex p-3 items-center">
                        <Image
                            src={locationIcon}
                            alt="location"
                        />
                        <h3 className="font-semibold pl-2 text-xl">{locatieModul}</h3>
                    </div>
                </div>
                <div className="center-container flex flex-col px-5">
                    <div className="module-data flex p-3 items-center">
                        <Image
                            src={calendar}
                        />
                        <p className="pl-2">Data: {data}</p>
                    </div>
                    <div className="module-hour p-3">
                        <p className="flex justify-center pl-2">Ora: {ora}</p>
                    </div>
                </div>
                <div className="right-container flex flex-col px-5">
                    <div className="module-price flex p-3 items-center">
                        <Image 
                            src={price}
                        />
                        <p className=" pl-2">Pret: {pret} RON</p>
                    </div>
                    <div className="module-duration flex p-3 items-center">
                        <Image
                            src={clock}
                        />
                        <p className="pl-2">Durata: {durata} ore</p>
                    </div>
                </div>
            </div>
            <div className="go-to-extra-details flex align-middle p-10">
                <button>
                <Image 
                    src={arrowRight}
                />
                </button>
                
            </div>
            
            
        </div>
    )
}