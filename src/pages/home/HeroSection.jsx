import { GoArrowRight } from "react-icons/go";
import bannerBG from "../../assets/banner.png"
import { FaRegPlayCircle } from "react-icons/fa";
import { useState } from "react";



const HeroSection = () => {

  const [showModal, setShowModal] = useState(false)
  

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)




  return (
    <div className="bg-bBg">
      <div className="max-w-screen-2xl  container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center">
        {/* Left side */}
        <div className="lg:w-1/2 lg:text-left text-center ">
          <h1 className=" text-4xl font-bold mb-5 text-gray-800  ">Creative Web Design For Business</h1>
          <p className="text-gray-500 mb-4 text-xl">Join thousands of business already growing with our solutions. Let's help you take your business to the next level</p>

          <div className="flex flex-col md:flex-row justify-center  gap-4 lg:justify-start">
            <button className="bg-primaryBG text-white px-10  justify-center py-4 rounded cursor-pointer font-bold flex items-center space-x-2 "><span>Get Started</span>
            <GoArrowRight />
            </button>
            <button className="border transition text-center hover:bg-primaryBG hover:text-white border-primaryBG text-primaryBG px-10 py-4 rounded cursor-pointer font-bold flex items-center justify-center "><span>Contact us</span>
            
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative">
        <div className="relative group ">
          <img src={bannerBG} alt="banner bg"  className="shadow-lg rounded-lg"/>
          <button onClick={openModal} className="absolute group-hover:opacity-75  inset-0 flex justify-center items-center cursor-pointer"><FaRegPlayCircle className="hover:text-blue-500 text-white text-5xl " /></button>

          {/* <Modal */}
            {
              showModal && (<div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50 ">
                
                <div className="bg-white  rounded-lg relative max-w-xl w-full shadow-md p-5 ">
                  <button onClick={closeModal} className='absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full'>&times;</button>

                  <iframe  className="w-full aspect-video"  width="560" height="315" src="https://www.youtube.com/embed/GMaQPv5ZsR0?si=50TRgKN5N2YeadtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
                
                 </div>)
            }
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
