/* eslint-disable react/prop-types */
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#00df9a]" size={30} />
);

const Footer = () => {
  const items = [
    // Social media icons
    { type: "icon", icon: FaFacebookSquare },
    { type: "icon", icon: FaInstagram },
    { type: "icon", icon: FaTwitterSquare },
    { type: "icon", icon: FaGithubSquare },
    { type: "icon", icon: FaDribbbleSquare },
    // Footer sections
    {
      type: "section",
      title: "Solutions",
      items: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      type: "section",
      title: "Support",
      items: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      type: "section",
      title: "Company",
      items: ["About", "Blog", "Jobs", "Press", "Careers"],
    },
    { type: "section", title: "Legal", items: ["Claim", "Policy", "Terms"] },
  ];

  return (
    <footer className=" ">
      <div className="max-w-screen-xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 ">
        {/* Left section with brand and social icons */}
        <div className="px-6">
          <img
            className="w-40 h-30"
            src="https://i.postimg.cc/9fyR3mvn/logo-pat-removebg-preview.png"
            alt=""
          />
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex flex-wrap justify-between md:w-[75%] my-6">
            {/* Mapping over social icons and rendering the SocialIcon component */}
            {items.map((item, index) =>
              item.type === "icon" ? (
                <SocialIcon key={index} icon={item.icon} />
              ) : null
            )}
          </div>
        </div>
        {/* Right section with footer content organized in sections */}
        <div className="lg:col-span-2 md:flex md:justify-between gap-7 px-6 mt-6">
          {/* Mapping over sections and rendering content */}
          {items.map((item, index) =>
            item.type === "section" ? (
              <div key={index}>
                <h6 className="font-medium text-gray-600 text-xl">
                  {item.title}
                </h6>
                <ul>
                  {/* Mapping over items in each section */}
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="py-2 text-sm">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
