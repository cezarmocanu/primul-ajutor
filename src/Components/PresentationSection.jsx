import Image from "next/image";
import firstAidKit from 'src/assets/firstAidKit.png'

export default function PresentationSection () {

    return (
        <div className="presentation-section flex py-5 mx-2 mb-5 justify-around border-2 border-t-red-500">
            <div className="description-text w-5/12 p-10 pb-20 mt-5 flex-col bg-red-500 text-white">
                <div>
                    <h1 className="text-3xl pb-5 font-semibold">Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae ipsam asperiores amet neque inventore perspiciatis totam
                    molestias praesentium impedit consectetur maiores ullam exercitationem sint,
                    corporis dolorum nulla eligendi rerum?</p>
                </div>
                <div className="flex justify-center">
                    <button className="mt-10 font-semibold border-2 border-white p-1 px-20">Afla mai multe</button>
                </div>
            </div>
            <div className="description-photo w-5/12 mt-5 mb-10">
                <Image
                    src={firstAidKit}
                    alt="firstAidKit"
                    width="350px"
                    height="350px"
                    className="rounded-2xl shadow-[-30px_30px_0_0_rgba(0,0,0,0.3)] shadow-red-300"
                />
            </div>
        </div>
    )
}