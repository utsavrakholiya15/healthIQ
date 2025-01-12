import React from "react";
import emailIcon from '../../assets/ICONs/email.svg';
import passwordIcon from '../../assets/ICONs/password.svg';
export default function LoginPage() {
    return (
        <div className="font-poppins">
                <div className=" flex justify-end  w-[100%] bg-login-bg ">
                    <div className="shadow-login-page bg-white w-[723px] py-[60px] px-[120px] min-h-[842px] rounded-tl-[64px] rounded-bl-[64px] ">
                        {/* title */}
                        <h1 className="text-center text-[34px] font-[500] mb-[10px] pb-[30px]  ">Login to your Account</h1>
                        {/* form  */}
                        <form>
                            {/* email */}
                            <label className=" text-[14px] ">Email<span className="text-[red]" > *</span></label>
                            {/* email-box */}
                            <div className=" flex items-center relative  mt-[10px] mb-[20px] " >
                                <input className="h-[50px] w-[100%]  pl-[60px]  border-[1px] border-[#a0a0a080] rounded-[8px]   " type="email" placeholder="Enter your email"  ></input>
                                <img className="absolute top-[36%] left-[16px]   h-[16px] border-r-[1px] border-[#a0a0a0] pr-[14px]  " src={emailIcon} />
                            </div>
                            {/* password */}
                            <label className=" text-[14px] ">Password<span className="text-[red]" > *</span></label>
                            {/* password-box */}
                            <div className=" flex items-center relative  mt-[10px] mb-[10px] " >
                                <input className="h-[50px] w-[100%]  pl-[62px]  border-[1px] border-[#a0a0a080] rounded-[8px]   " type="password" placeholder="Enter your password"  ></input>
                                <img className="  absolute top-[36%] left-[16px]   h-[17px] border-r-[1px] border-[#a0a0a0] pr-[15px]  " src={passwordIcon} />
                            </div>
                            {/* forget-password */}
                            <div className="w-[100%] flex justify-end ">
                                <a className="text-secondary text-[15px] font-[500] cursor-pointer leading-[24px] ">Forget password?</a>
                            </div>
                            {/* login-button */}
                            <div className="text-center mt-[20px] ">
                                <button className=" bg-secondary w-[100%] h-[50px]  text-white text-[18px] font-[400] rounded-[6px] border-[0] mb-[10px]  " >Login</button>
                                <p className="cursor-pointer" >Don't have account yet?<span className="text-secondary font-[500] " > New Account</span></p>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}