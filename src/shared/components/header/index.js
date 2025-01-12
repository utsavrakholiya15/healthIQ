import React from "react";
import headerlogo from '../../../assets/LOGOs/headerlogo.svg';
import menubar from '../../../assets/ICONs/menubar.png';
export default function Header() {
    return (
        <header className=" font-poppins sticky top-0 z-10 bg-white ">
            <div className="container">
                {/* header  */}
                <div className="flex justify-between items-center  py-[18px]
                   ">
                    {/* logo  */}
                    <img className="w-[170px]" src={headerlogo} />
                    {/* nav  */}
                    <nav className="hidden xl:flex text-[16px] font-[500] text-grey   gap-[25px]
                           ">
                        <a className=" text-primary ">Home</a>
                        <a>Solution</a>
                        <a>Services</a>
                        <a>Events</a>
                        <a>FAQ</a>
                        <a>About Us</a>
                        <a>Contact Us</a>
                        <div className="flex gap-[10px]">
                            <a className="text-[#c72323]" >EN</a>
                            <a>|</a>
                            <a>JP</a>
                        </div>
                    </nav>
                    {/* buttons  */}
                    <div className="flex gap-5 items-center">
                        <button className="hidden sm:block  border-0 rounded-[6px] text-[16px] font-[500] leading-[21px]   text-white   bg-secondary  py-[9px] px-[35px]  ">Login</button>
                        <button className="hidden sm:block  border-0 rounded-[6px] text-[16px] font-[500] leading-[21px]   text-white   bg-secondary  py-[9px] px-[24px]  ">Sign Up</button>
                        {/* menubar  */}
                        <div className="block w-[30px] h-[30px]
                         xl:hidden   ">
                            <img className="w-[100%]" src={menubar} />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}