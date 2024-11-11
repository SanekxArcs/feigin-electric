// components/About.jsx

import Image from "next/image";
import PageTopSection from "../components/PageTopSection";

const About = () => {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <PageTopSection
        title="About Us"
        description="Read more about us. Our vision, mission, success, and many other
            things you might love."
      />
      {/* Our Story Section */}
      <div className="container mx-auto px-6 py-16 my-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pl-8">
            <h2 className="text-5xl font-semibold mb-6 text-fred-800">
              Our Story
            </h2>
            <h3 className="text-5xl font-light mb-6 text-gray-800">
              Running a successful business
            </h3>
            <h3 className="text-5xl mb-6 text-fred-800 italic">since 2014</h3>
            <p className="text-xl mb-6 text-gray-600 text-balance">
              Leo Feigin, a renowned core technology professional having held
              senior positions in the nuclear and aerospace electricity sector,
              laid out the basics for our technology which was first worked out
              and described in 1995.
            </p>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 grid place-content-center">
            <Image
              src="https://feiginelectric.com/wp-content/themes/ecnology/images/store-front-singapore.jpg"
              alt="Our Company"
              width={600}
              height={400}
              className="rounded-lg shadow-l shadow-fgreen-950 h-96 w-auto transition-transform hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 hover:border-t-2 hover:border-b-2 transition-all border-fgreen-500">
            <p className="text-gray-600 text-balance ">
              Establishing a laboratory for component testing and analysis was
              the next logical step in developing an optimization device which,
              through a number of improvements and model updates, resulted in
              today&apos;s patented technology and ECOD model line.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 hover:border-t-2 hover:border-b-2 transition-all border-fgreen-500">
            <p className="text-gray-600 text-balance ">
              Today, Feigin Electric Group of companies operates in many
              countries around the world: EU, Middle East, Southeast Asia, and
              Australia, with a production base in the Rayong industrial cluster
              in Thailand. We continue to enhance our sales network to new
              markets (UK, USA).
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 hover:border-t-2   transition-all border-fred-500">
            <p className="text-gray-600 text-balance ">
              Recognizing that achieving excellence requires unwavering
              dedication, Feigin Electric embarked on a relentless pursuit of
              perfection. Establishing comprehensive client engagement
              strategies was the next logical step in enhancing our services,
              which, through a series of innovative solutions, has culminated in
              the unparalleled client-centric approach that defines our company
              today.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 hover:border-t-2  transition-all border-fred-500">
            <p className="text-gray-600 text-balance ">
              Our customers include factories, production lines, hotels, petrol
              stations, counties, fast-food restaurant chains, and power
              distributors with names such as: <br /> Burger King, KFC,
              McDonald&apos;s, The Pizza Company, Lion Group, Chester&apos;s Grill, Pizza
              Hut, Sturgeon Farm Hua Hin Thailand, Domino&apos;s Pizza, and
              BreadTalk, just to name a few.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
