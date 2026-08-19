import { useState } from "react";
import HeadingSection from "../../components/HeadingSection";


const faqs = [
    {
        id: 1,
        question: "Who should use the app?",
        answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
    },
    {
        id: 2,
        question: "What is included with my subscription?",
        answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
    },
    {
        id: 3,
        question: "How do I get paid?",
        answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
    },
    {
        id: 4,
        question: "Is my personal information safe?",
        answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
    },
    {
        id: 5,
        question: "How can we get in touch?",
        answer: "You can contact us via email at support@ourapp.com, or through our live chat available on the website. Our support team is always ready to assist you with any queries you may have."
    }
];

const FAQsHome = () => {
  const [expendedFaq ,setExpendedFaq] = useState(null)

  const toggleFAQ = (id) => {
    if(expendedFaq === id){
      setExpendedFaq(null)
    }else{
      setExpendedFaq(id)
    }
  }
  return (
    <div className="bg-bBg">
        <div className="max-w-screen-2xl container py-20 px-5 mx-auto">
            <HeadingSection subheading="FAQs" heading="Frequently Asked Questions" />


            <div className="w-full max-w-4xl mx-auto ">
              {
                faqs.map((faq) => (
                  <div className="border border-gray-300 mb-4" key={faq.id}>
                    <div onClick={() => toggleFAQ(faq.id)} className="cursor-pointer p-4 justify-between flex transition-all duration-200  items-center bg-gray-50 hover:bg-gray-200">
                      <h3 className="text-lg text-gray-800 font-semibold">{faq.question}</h3>
                      <span className={`transform transition text-gray-800 text-lg font-bold duration-200 ${expendedFaq === faq.id ? "rotate-180" : ""}`}>{expendedFaq === faq.id ? "-" : "+"}</span>

                      {/* answer  */}

                     
                      </div>
                       {
                        expendedFaq === faq.id && <div className="bg-white p-4">
                          <p className="text-gray-500">{faq.answer}</p>
                        </div>
                      }
                    
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default FAQsHome