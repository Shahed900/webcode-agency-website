import { Link } from "react-router";
import HeadingSection from "../../components/HeadingSection";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    image: "/images/members/person1.png",
    name: "John Doe",
    role: "CEO",
    linkedIn: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
  },
  {
    id: 2,
    image: "/images/members/person2.png",
    name: "Jane Smith",
    role: "CTO",
    linkedIn: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
  },
  {
    id: 3,
    image: "/images/members/person3.png",
    name: "Mark Johnson",
    role: "Designer",
    linkedIn: "https://linkedin.com/in/markjohnson",
    twitter: "https://twitter.com/markjohnson",
    instagram: "https://instagram.com/markjohnson",
    facebook: "https://facebook.com/markjohnson",
  },
  {
    id: 4,
    image: "/images/members/person4.png",
    name: "Emily Carter",
    role: "Developer",
    linkedIn: "https://linkedin.com/in/emilycarter",
    twitter: "https://twitter.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    facebook: "https://facebook.com/emilycarter",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-bBg">
      <div className="max-w-screen-2xl container  mx-auto py-20 px-5">
        <HeadingSection subheading="Our Team" heading="Meet The Experts" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((team) => (
            <div
              key={team.id}
              className=" bg-white overflow-hidden rounded-lg shadow-md  "
            >
              <img
                src={team.image}
                alt={team.name}
                className="h-56 w-full object-cover "
              />

              <div className="p-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 mt-3">
                  {team.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{team.role}</p>

                <div className="flex items-center space-x-3 mt-3">
                  <Link to={team.facebook}>
                    <FaFacebook className="text-blue-500 hover:text-blue-800 size-5" />
                  </Link>
                  <Link to={team.instagram}>
                    <FaInstagram className="text-blue-500 hover:text-blue-800 size-5" />
                  </Link>
                  <Link to={team.linkedIn}>
                    <FaLinkedin className="text-blue-500 hover:text-blue-800 size-5" />
                  </Link>
                  <Link to={team.twitter}>
                    <FaTwitter className="text-blue-500 hover:text-blue-800 size-5" />
                  </Link>
                </div>
                <button className="py-2 px-6 bg-blue-500 hover:bg-blue-800   mt-5 rounded-full ">Contact {team.name.split(" ")[1]}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
