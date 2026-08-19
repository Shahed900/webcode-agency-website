import HeadingSection from "../../components/HeadingSection";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook } from "react-icons/fa";


const LogoSection = () => {
    
    const logos = [
        { icon: FaApple, name: "Apple" },
        { icon: FaGoogle, name: "Google" },
        { icon: FaAmazon, name: "Amazon" },
        { icon: FaMicrosoft, name: "Microsoft" },
        { icon: FaFacebook, name: "Facebook" },
    ]
  return (
    <div className="bg-bBg">
      <div className="max-w-screen-2xl container py-20 px-5 mx-auto ">
        <HeadingSection
          subheading="Our trusted partners"
          heading="Companies we have worked with"
          description="We have paetnered with some of the most inovative and leading companies to bring the best solutions to you"
        />


        <div className="mt-15 overflow-hidden border-y-2 border-gray-300 p-6">
            <div className="flex justify-around  my-5 space-x-8 md:space-x-14  animate-logo ">
                {
                    logos.map((logo,index) => (
                        <div key={index} className="p-6 rounded-full  flex justify-center items-center w-28 h-28 shadow-md hover:scale-125 transform transition bg-white ">
                                <logo.icon className="text-blue-500 text-4xl"/>
                                
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
