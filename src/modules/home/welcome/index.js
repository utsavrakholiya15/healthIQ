import React from "react";
import welcome from '../../../assets/VIDEOs/video-ai.mp4';
export default function Welcome() {
    return (
        <div className="font-poppins">
            {/* bg  */}
            <div className="w-[100%] py-5 bg-lGradient block  ">
                <div className="container flex justify-center">
                    <video src={welcome} controls ></video>
                </div>
            </div>
        </div>
    )
}