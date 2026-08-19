

const HeadingSection = ({subheading,heading,description}) => {
  return (
    <div className="my-12 text-center">
        <p className="text-blue-600 uppercase  font-semibold">
          {subheading}
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3 sm:w-3/5 leading-normal lg:leading-snug capitalize mx-auto ">
          {heading}
        </h1>

        {
          description && <p className="text-gray-600 mt-4 sm:w-3/5 text-base mx-auto">
            {description}
          </p>
        }
      </div>
  )
}

export default HeadingSection