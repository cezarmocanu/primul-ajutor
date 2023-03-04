function Header() {
    return(
        <div className="flex-col h-24 bg-[#E22A2A] text-white">
            <div className="flex justify-center text-[24px] p-2">
              <p>Acord Primul Ajutor</p>
            </div>
            <div className="flex justify-center items-center p-2">
              <div className="mx-2 cursor-pointer">CURSURI</div>
              <div className="mx-2 cursor-pointer">LOREM IPSUM</div>
              <div className="mx-2 cursor-pointer">ECHIPA NOASTRA</div>
              <div className="mx-2 cursor-pointer">DESPRE NOI</div>
              <div className="mx-2 cursor-pointer">CONTACT</div>
            </div>      
        </div>
    )
}     

export default Header;