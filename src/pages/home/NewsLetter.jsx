import HeadingSection from "../../components/HeadingSection";


const NewsLetter = () => {
  return (
    <div className="py-20 px-5 container max-w-screen-2xl mx-auto">
        <div>
                <HeadingSection heading={"Stay Updated With Our Newsletter"}  description={"Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."} />

                <div className="flex justify-center gap-4">
                    <button className=  "bg-blue-600 text-white px-6 cursor-pointer rounded-lg  py-3 hover:bg-blue-800 transition space-x-2  ">Subscribe Now</button>
                    <button className="border border-blue-600 text-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-200 px-6  py-3">Learn More</button>
                </div>
        </div>
        
    </div>
  )
}

export default NewsLetter