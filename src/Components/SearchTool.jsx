
import Image from "next/image";
import ModuleEntry from "./ModuleEntry";
import box from 'src/assets/box.png';
import calendarWhite from 'src/assets/calendar-white.png';

export default function SearchTool ({titluModul, }) {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    return (
        <div>
            <div className="search-module flex justify-between bg-red-500 px-5 py-2">
                <div className="flex flex-col px-5 modal-content">
                    <div className="choose-module flex py-2 items-center">
                        <Image
                            src={box}
                            alt="box"
                        />
                        <label className="font-bold text-xl ml-2">Modul</label>
                    </div>
                        <select name="Modul" id="modul-select" className='border-2 input-text'>
                            <option value="">Alege un modul</option>
                            <option>{titluModul}</option>
                        </select>
                </div>
                <div className="modul-data flex">
                    <div>
                        <div className="label flex py-2 items-center">
                            <Image 
                                src={calendarWhite}
                                alt="calendar"
                                />
                            <label className="ml-2">Din data de:</label>
                        </div>
                        <input
                            type="date"
                            className='border-2 input-text'
                            value={today}
                        />
                    </div>
                    <div className="ml-2">
                        <div className="label flex py-2 items-center">
                            <Image 
                                src={calendarWhite}
                                alt="calendar"
                            />
                            <label className="ml-2">Pana in data de:</label>
                        </div>
                        <input
                            type="date"
                            className='border-2 input-text'
                            value={today}
                        />
                    </div>
                </div>
            </div>
           <ModuleEntry 
                titluModul="Primul Ajutor al Adultului"
                locatieModul="Bucuresti"
                data="14/03/2023"
                ora="14:00"
                durata="2"
                pret="150"
            />
        </div>
    )
}

{/* <option value="adult">Primul Ajutor al Adultului</option>
                            <option value="copil">Primul Ajutor al copilului</option>
                            <option value="comune">Urgente Medicale Comune</option>
                            <option value="animal">Primul Ajutor al Animalului</option>
                            <option value="outdoor">Urgente Outdoor si Traumatisme</option> */}