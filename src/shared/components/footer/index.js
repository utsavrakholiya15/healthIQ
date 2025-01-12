import React from "react";
import footerlogo from '../../../assets/LOGOs/footerlogo.svg';
import facebook from '../../../assets/LOGOs/facebook.svg';
import instagram from '../../../assets/LOGOs/instagram.svg';
import xLogo from '../../../assets/LOGOs/xlogo.svg';
import whatsapp from '../../../assets/LOGOs/whatsaap.svg';
import linkdin from '../../../assets/LOGOs/linkdin.svg';
export default function Footer() {
    return (
        <footer className="font-poppins bg-lGradient py-[80px] text-white ">
            {/* cotainer - grid */}
            <div className="container grid xl:grid-cols-300 gap-[75px] 
            grid-cols-1    ">
                {/* logo  */}
                <div className="w-[300px] justify-self-center ">
                    <img src={footerlogo} />
                    <p className="text-[14px] font-[400] leading-6 text-white mt-[25px]">HEALTHIQ is an AI-powered healthcare education platform, providing personalized learning and real-time industry insights for healthcare professionals.</p>
                </div>
                {/* data  */}
                {/* grid  */}
                <div className="flex flex-col justify-between gap-5 max-w-[700px] justify-self-center 
                lg:flex-row   " >
                    <div className=" min-w-[170px] flex flex-col gap-[10px]">
                        <a>Home</a>
                        <a>Service</a>
                        <a>Vision & Mission</a>
                        <a>Blogs</a>
                    </div>
                    <div className="min-w-[170px] flex flex-col gap-[10px]">
                        <a>Courses</a>
                        <a>FAQ</a>
                        <a>About</a>
                        <a>Investor Relations</a>
                        <a>Cookie preferences</a>
                    </div>
                    <div className="min-w-[170px] flex flex-col gap-[10px]">
                        <a>Jobs</a>
                        <a>Legal Notices</a>
                        <a>Speed Test</a>
                        <a>Help Center</a>
                        <a>Account</a>
                    </div>
                    <div className="min-w-[170px] flex flex-col gap-[10px]">
                        <a>Follow Us</a>
                        <div className="flex gap-3 flex-wrap">
                            <img src={facebook} />
                            <img src={xLogo} />
                            <img src={whatsapp} />
                            <img src={instagram} />
                            <img src={linkdin} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}