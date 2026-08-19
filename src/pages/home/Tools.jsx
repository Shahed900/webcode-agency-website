import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";

const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to fit your project requirements.",
  },
  {
    icon: FiCode,
    title: "Developer-Friendly",
    description: "Optimized for developers with clean and efficient code.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Build tools that look great on any device and screen size.",
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connect with cloud services for better productivity.",
  },
];

const Tools = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto  py-20 px-5 ">
      <div className="mt-12 text-center">
        <p className="text-blue-600 uppercase  font-semibold">
          The tools you need
        </p>
        <h1 className="text-gray-800 text-3xl font-bold mt-3 lg:text-4xl ">
          All-in-one Solution for Your Projects
        </h1>
      </div>

      {/* Project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center  text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all cursor-pointer "
          >
            <tool.icon className="text-blue-500 text-4xl mt-4 font-medium" />
            <h3 className="text-gray-900 text-lg mt-2 font-bold">
              {tool.title}
            </h3>
            <p className="text-gray-500 mt-2">{tool.description}</p>
          </div>
        ))}

        

      </div>
{/* Button */}
      <div className="text-center mt-8">
          <button className="bg-primaryBG text-white px-10   py-4 rounded cursor-pointer font-bold space-x-2 ">
            Explore more
          </button>
        </div>
    </div>
  );
};

export default Tools;
