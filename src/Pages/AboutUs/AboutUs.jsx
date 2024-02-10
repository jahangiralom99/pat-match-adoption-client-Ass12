import {
  FaAmericanSignLanguageInterpreting,
  FaFacebook,
  FaHeadphones,
  FaHireAHelper,
  FaInstagram,
  FaLinkedinIn,
  FaQuestionCircle,
} from "react-icons/fa";
import TopBar from "../../Components/Common/TopBar";
import ScrollToTop from "react-scroll-to-top";

const AboutUs = () => {
  return (
    <section className={`max-w-screen-xl mx-auto mt-4 px-4`}>
      <ScrollToTop
        className="flex items-center justify-center transition duration-100000"
        color="#ef6f18"
        smooth
      />
      <TopBar value={"About Us"}></TopBar>
      <div className="md:flex justify-center items-center gap-10">
        <div className="space-y-2 flex-[50%] p-5 md:p-0">
          <h2 className="text-xl uppercase font-normal text-[#ef6f18]">
            About US
          </h2>
          <h1 className="text-3xl font-bold">
            We Have 10+ Years Of Experience.
          </h1>
          <h2 className="text-xl font-bold">Let Us Take Care Of Your Pets!</h2>
        </div>
        <div className=" flex-[50%] space-y-6 leading-8 text-[17px] mt-10 md:mt-0">
          <p>
            🐾 Welcome to Our Trusted ----Pet Adoption---- Family with Over 10
            Years of Expertise! 🐾 At Pet Adoption, we take pride in our
            decade-long journey of connecting loving families with furry
            companions. With over 10 years of experience in the world of pet
            adoption, we have become a beacon of hope for animals in need and a
            trusted partner for those seeking to enrich their lives with the joy
            of a new pet.
          </p>
          <p>
            Our experienced team understands the unique needs of both pets and
            adopters. We ve honed our expertise to match the right pet with the
            right family, creating lasting bonds that go beyond a simple
            adoption process.
          </p>
        </div>
      </div>
      <div className="mt-8 md:flex gap-10 items-center justify-center">
        <div className="space-y-2 flex-[50%] p-5 md:p-0 md:text-right">
          <h2 className="text-xl uppercase font-normal text-[#ef6f18]">
            WHO WE ARE
          </h2>
          <h1 className="text-3xl font-bold">Why Choose Us</h1>
          <h2 className="text-xl font-bold">Let Us Take Care Of Your Pets!</h2>
          <p>
            Building Lifelong Connections: It s not just about finding a pet; it
            s about building a lasting connection.
          </p>
          <span className="text-right">
            <img
              className="rounded-lg inline mt-4"
              src="https://i.postimg.cc/V6zYgKt7/banner3.jpg"
              alt=""
            />
          </span>
        </div>
        <div className="flex-[50%] ">
          <div>
            <p className="flex items-center gap-3 text-2xl font-bold hover:text-[#ef6f18] ">
              <FaAmericanSignLanguageInterpreting className="text-6xl text-[#ef6f18] " />
              Care Advices
            </p>
            <p className="md:ml-16">
              Keep your pet active! Regular walks, playtime, and mental
              stimulation are essential for their physical and mental
              well-being. Tailor activities to your pet s energy level and age.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-3 text-xl font-bold hover:text-[#ef6f18] ">
              <FaHeadphones className="text-[50px] text-[#ef6f18] " />
              Customer Supports
            </p>
            <p className="md:ml-16">
              Your feedback is invaluable to us. Whether it s a suggestion for
              improvement or a positive experience you d like to share, we
              welcome your input. It helps us continually enhance our services.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-3 text-xl font-bold hover:text-[#ef6f18] ">
              <FaQuestionCircle className="text-[50px] text-[#ef6f18] " />
              Emergency Services
            </p>
            <p className="md:ml-16">
              Our dedicated rapid response team is available 24/7 to address
              emergency situations. Whether it s a sudden relocation, a crisis
              in the current living situation, or other unforeseen events, we re
              here to help.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-3 text-xl font-bold hover:text-[#ef6f18] ">
              <FaHireAHelper className="text-[50px] text-[#ef6f18] " />
              Veterinary Help
            </p>
            <p className="md:ml-16">
              Before you bring your new companion home, we conduct thorough
              health checks to ensure they are in optimal condition. This
              includes vaccinations, parasite control, and a general wellness
              assessment.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-center text-xl text-[#ef6f18]">OUR EXPERTS</h3>
        <h1 className="text-center text-3xl font-bold">Our Team</h1>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Core Team
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">Welcome</span>
              </span>{" "}
              our talented team of professionals
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://i.postimg.cc/52z047M0/team1.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Oliver Aguilerra
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Training</p>

                  <div className="flex items-center justify-center text-xl space-x-3 text-[#ef6f18]">
                    <p>
                      <FaFacebook />
                    </p>
                    <p>
                      <FaLinkedinIn />
                    </p>
                    <p>
                      <FaInstagram />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://i.postimg.cc/dQdnPvhZ/team2.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Oliver Aguilerra
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Boarding</p>

                  <div className="flex items-center justify-center text-xl space-x-3 text-[#ef6f18]">
                    <p>
                      <FaFacebook />
                    </p>
                    <p>
                      <FaLinkedinIn />
                    </p>
                    <p>
                      <FaInstagram />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://i.postimg.cc/bNVZmSqx/team3.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Scott Colon
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Grooming</p>

                  <div className="flex items-center justify-center text-xl space-x-3 text-[#ef6f18]">
                    <p>
                      <FaFacebook />
                    </p>
                    <p>
                      <FaLinkedinIn />
                    </p>
                    <p>
                      <FaInstagram />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://i.postimg.cc/W3pjRSnh/team4.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    John Harris
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Doggie Day Care</p>

                  <div className="flex items-center justify-center text-xl space-x-3 text-[#ef6f18]">
                    <p>
                      <FaFacebook />
                    </p>
                    <p>
                      <FaLinkedinIn />
                    </p>
                    <p>
                      <FaInstagram />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
