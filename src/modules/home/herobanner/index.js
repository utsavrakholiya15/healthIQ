import React from "react";
import heroimage from '../../../assets/IMAGEs/heroimage.webp';
export default function Herobanner() {
    return (
        <div className="relative font-poppins ">
            {/* image  */}
            <div>
                <img className="w-100% min-h-[450px] block  object-cover" src={heroimage} />
            </div>

            {/* blur */}
            <div className=" absolute top-[0] w-[100%] h-[100%]  bg-[#0000004f]"></div>
            {/* data */}
            <div className="flex flex-col  items-center justify-center text-center absolute top-0 w-[100%] h-[100%] text-white ">
                <h2 className="mb-[20px] mx-auto  max-w-[1020px] font-[600] 
               
                xl:text-[28px]
                lg:text-[22px]
                md:text-[18px]
                sm:text-[14px]   ">Elevating Content Quality Through AI-Driven Algorithms for Healthcare Professionals</h2>
                <p className="max-w-[1050px] mx-auto mb-[30px] 
                
                xl:text-[18px]
                lg:text-[16px] 
                md:text-[14px] 
                sm:text-[12px]">Quality content creation through digital transformation leads to comprehensive professional development and skill enhancement initiatives. Medical professionals are equipped with latest knowledge and skills resulting in enhanced patient experiences.</p>
                {/*box */}
                <div className="font-[500] rounded-[10px] p-[30px]  max-w-[810px] bg-[#ffffff33]">
                    {/* text  */}
                    <p className="mb-3  font-[500] 
                 
                    xl:text-[22px]
                    lg:text-[18px]
                    md:text-[16px]
                    sm:text-[14px]  ">Stay on Top of AI-Driven Industry News & Updates</p>
                    {/*email-box*/}
                    <div className="grid grid-cols-70 gap-[10px]">
                        <input className="  w-[100%] h-[50px] px-[20px] bg-[#ffffff1a] text-white rounded-[6px] border-0 placeholder:text-white placeholder:font-[400] placeholder:text-[16px] 
                          " type="email" placeholder="Email Address" ></input>
                        <button className="2xl:justify-self-end  2xl:text-[16px] font-[400] 2xl:w-[180px] border-0 rounded-[6px] bg-secondary
                        " >Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}