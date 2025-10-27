
const Hamburger = () =>{
    return(
        <div className="flex flex-col pt-[100px]">
            <nav id="hamburger"className="z-10 flex flex-col gap-[5px]">
                  {/* Hamburger */}
                <div className="w-[30px] h-[4px] bg-[#a52e2e] hover:bg-[#653535]"></div>
                <div className="w-[30px] h-[4px] bg-[#a52e2e] hover:bg-[#653535]"></div>
                <div className="w-[30px] h-[4px] bg-[#a52e2e] hover:bg-[#653535] "></div>
            </nav>
        </div>
    )

}
export default Hamburger; 
