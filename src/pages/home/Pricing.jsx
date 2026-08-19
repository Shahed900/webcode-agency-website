import { useState } from "react";
import HeadingSection from "../../components/HeadingSection";


const pricingPlans = [
    {
        name: "Freelancer",
        monthlyPrice: 25,
        yearlyPrice: 250, // 25 * 12
        saves: "$25 USD per month, paid annually",
        features: [
            "1 Project",
            "Basic Support",
            "Access to all templates",
            "5GB Storage",
        ],
    },
    {
        name: "Professional",
        monthlyPrice: 65,
        yearlyPrice: 650, // 65 * 12
        saves: "$55 USD per month, paid annually",
        features: [
            "5 Projects",
            "Priority Support",
            "Access to all templates",
            "25GB Storage",
            "Advanced Analytics",
        ],
    },
    {
        name: "Agency",
        monthlyPrice: 95,
        yearlyPrice: 950, // 95 * 12
        saves: "$95 USD per month, paid annually",
        features: [
            "Unlimited Projects",
            "24/7 Support",
            "Access to all templates",
            "Unlimited Storage",
            "Custom Branding",
            "Team Collaboration",
        ],
    },
];

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false)
  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
        <HeadingSection subheading={"Pricing"} heading={"Choose Your Plan"} description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />

        {/* Toggle  */}

        <div className="text-center mb-10">
            <label  className="  inline-flex items-center cursor-pointer  "
            >
                <span className="text-gray-700 mr-3 text-lg ">
                    {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
                </span>

                <div className="relative">
                    <input type="checkbox"  className="sr-only" checked={isYearly} 
                    onChange={() => setIsYearly(!isYearly)} />

                    <div className="toggle-bg bg-gray-300 w-14 h-8 rounded-full"></div>
                    <div className={`toggle-circle bg-blue-600 rounded-full transition-transform duration-300 w-6 h-6 absolute top-1 left-1 ${isYearly ? "translate-x-6 transform" : ""}`}></div>
                </div>
            </label>
        </div>

        {/* pricing plan  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {
                pricingPlans.map((pricing) => (
                    <div key={pricing.name} className="bg-white border shadow-md rounded-lg transition-all hover:shadow-xl duration-200">
                        {/* top */}
                        <div className="p-5 text-center">
                            <h3 className="text-2xl my-3 font-bold text-gray-800">{pricing.name}</h3>
                            <p className="text-gray-600 mt-3">Best for {pricing.name}</p>

                            <div className="mt-5 text-3xl font-bold text-gray-900 ">
                                ${
                                    isYearly ? pricing.yearlyPrice : pricing.monthlyPrice
                                }

                                <span className="text-gray-600 text-sm">/{isYearly ? "year" : "month"}</span>
                                <p className="text-gray-600 text-sm mt-5">{isYearly ? pricing.saves : ""}</p>
                            </div>

                            {/* Button */}

                            <div className="p-5 text-center">
                                <button className="text-white px-6 py-2 transition-all hover:bg-blue-800 rounded-full bg-blue-600">Choose {pricing.name}</button>
                            </div>

                            {/* Feature */}
                            <div className="p-5 md:px-12 md:py-5">

                                <ul className="text-center text-gray-600">
                                    {
                                        pricing.features.map((feature , i) => (
                                            <li key={i} className="flex items-center mb-2">
                                                <svg
                                                    className="w-4 h-4 text-blue-600 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 12l5 5L20 7"
                                                    />
                                                </svg> {feature}
                                            </li>
                                        ))
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        

        
    </div>
  )
}

export default Pricing