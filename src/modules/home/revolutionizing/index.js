import React from "react";
import revoTop from '../../../assets/IMAGEs/revotop.webp';
import revoBottom from '../../../assets/IMAGEs/revobottom.jpg';
export default function Revolutionizing() {
    return (
        // revolution 
        <div className="  font-poppins bg-image-1 bg-cover bg-no-repeat w-[100%] py-[120px]">
            <div className="container">
                {/* top */}
                {/* flex  */}
                <div className="flex flex-col items-center justify-center  gap-5 border-b-[1px] border-grey pb-[70px]
                xl:flex-row

                animate__animated animate__fadeInUp animate__slow wow
                " data-wow-offset="10" >
                    {/* image  */}
                    <div className="max-w-[500px]">
                        <img className=" w-[100%] rounded-[10px] object-cover" src={revoTop} />
                    </div>
                    {/* data  */}
                    <div>
                        <h6 className="mb-7 max-w-[590px] font-[500]
                        xl:text-[32px]
                        lg:text-[28px]
                        md:text-[20px]
                        sm:text-[16px]   ">Revolutionizing Healthcare Education: HEALTHIQ a Pioneer in Personalized Learning</h6>
                        <p className=" mb-7 max-w-[490px] font-[400] text-grey
                        xl:text-[18px] ">Experience the future of healthcare education with HEALTHIQ. We are at the forefront of a revolution, transforming the way healthcare professionals learn and grow. Our commitment to innovation is reshaping the landscape of healthcare education.</p>
                        <a className="text-primary font-[500]" >View more &gt; &gt; &gt;</a>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex flex-col-reverse items-center justify-center  gap-5 mt-[50px]
                xl:flex-row

                animate__animated animate__fadeInUp animate__slow wow
                "data-wow-offset="10">
                    {/* data  */}
                    <div>
                        <h6 className="mb-7 max-w-[590px] font-[500]
                        xl:text-[32px]
                        lg:text-[28px]
                        md:text-[20px]
                        sm:text-[16px]   ">Revolutionizing Healthcare Education: HEALTHIQ a Pioneer in Personalized Learning</h6>
                        <p className=" mb-7 max-w-[490px] font-[400] text-grey
                        xl:text-[18px] ">Experience the future of healthcare education with HEALTHIQ. We are at the forefront of a revolution, transforming the way healthcare professionals learn and grow. Our commitment to innovation is reshaping the landscape of healthcare education.</p>
                        <a className="text-primary font-[500]" >View more &gt; &gt; &gt;</a>
                    </div>
                    {/* image  */}
                    <div className="max-w-[500px]">
                        <img className=" w-[100%] rounded-[10px] object-cover" src={revoBottom} />
                    </div>

                </div>
            </div>
        </div>
    )
}