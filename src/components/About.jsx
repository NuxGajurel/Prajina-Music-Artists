import React from "react";
import prajinaho from "../../public/img/prajinaho.jpg";

const About = () => {
  return (
    <div className="max-w-[340px] sm:max-w-[500px] md:max-w-[800px] mt-5 mx-auto px-3">
      <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-12 shadow-md">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={prajinaho}
            alt=""
            className="rounded-full lg:h-70 lg:w-70 h-60 w-60"
          />
          <h1 className="mt-4 flex justify-center items-center text-2xl text-[#e9204f] ml-6 font-bold">
            Prajina Lamichhane
          </h1>
        </div>

        <div className="mt-0 md:mt-6 w-full md:w-90">
          <p>
            Prajina is a talented singer-songwriter from Nepal. She began her
            professional music career a few years ago and has been making waves
            in the South Asian music scene. Here are some highlights about
            Prajina:
          </p>
          <h2 className="mt-2 text-2xl text-[#af6364]">1.Music Releases :</h2>
          <p className="mt-3">
            <li className="">
              <span className="text-[#af6360]">“Yo Sahar”</span>   : A song about accepting warmth after isolating oneself
            and feelings for a long time. 
                </li>
             <li className="mt-3">
                  <span className="text-[#af6360]">“Bloom|Basanta”</span> : A joyful track that
            aims to make listeners smile. Prajina expresses gratitude to her
            friend and producer, Ronim, for making this project happen
            beautifully.  
             </li>
          </p>
         <h2 className="mt-2 text-2xl text-[#af6364]">2.Collaboration with Badshah :</h2>
         <p className="mt-3">
            <li>Prajina teamed up with renowned Indian rapper Badshah for his highly anticipated album <span className="text-[#af6360]"> “EK THA RAJA”</span>, marking a significant milestone in her career.</li>
         </p>
            <h2 className="mt-2 text-2xl text-[#af6364]">3.YouTube Presence :</h2>
            <p className="mt-3">
            <li>Prajina’s YouTube channel features her music videos and interviews. Her songs evoke feelings and resonate with listeners.</li>
            <li className="mt-3">
    Notable tracks include <span className="text-[#af6360]">“Hami”</span>,  <span className="text-[#af6360]">“Antarikchya”</span>, and <span className="text-[#af6360]">“Don’t Have To”</span>.
            </li>
       </p>
<h2 className="mt-2 text-2xl text-[#af6364]">4.Spotify and Viberate :</h2>
 <p className="mt-3">
    <li>You can find Prajina’s music on <span className="text-[#af6360]">Spotify </span> , where she has a monthly listener base of  <span className="text-[#af6360]">134.4K.</span></li>
 </p>
        </div>
      </div>
    </div>
  );
};

export default About;
