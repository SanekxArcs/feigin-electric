import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="mt-4 text-lg">
              Read more about us. Our vision, mission, success and many other
              you might love.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturer Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div>
            <h6 className="text-xl font-semibold">Manufacturer</h6>
            <p className="mt-4 text-gray-700">
              Feigin Electric Co., Ltd (Thailand)
              <br />
              Tax ID: 0215557005844
              <br />
              BOI permission: 2564(2)2557
              <br />
              Email: info@feiginelectric.com
              <br />
              Web: feiginelectric.com
            </p>
          </div>
        </div>
      </section>

      {/* Sales Offices Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h5 className="text-2xl font-bold mb-8">Sales Offices</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office 1 */}
            <div className="flex items-start">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/location-europe.png"
                alt="Map of Europe"
                className="w-16 h-16 mr-4"
                width={500} // specify width
                height={300}
              />
              <div>
                <h6 className="text-xl font-semibold">Europe</h6>
                <p className="mt-2 text-gray-700">
                  Feigin Electric Sp z o.o. (Poland)
                  <br />
                  NIP: 9512603226
                  <br />
                  Email: office@feiginelectric.com
                  <br />
                  Web: feiginelectric.com
                </p>
              </div>
            </div>
            {/* Office 2 */}
            <div className="flex items-start">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/location-middle-east.png"
                alt="Map of Middle East"
                className="w-16 h-16 mr-4"
                width={500} // specify width
                height={300}
              />
              <div>
                <h6 className="text-xl font-semibold">Middle East</h6>
                <p className="mt-2 text-gray-700">
                  Ecnology Electronic Trading Ltd (Dubai)
                  <br />
                  Trade License: 1216211
                  <br />
                  Email: Vishnukrishna@ecnology.co
                  <br />
                  Web: ecnology.co
                </p>
              </div>
            </div>
            {/* Office 3 */}
            <div className="flex items-start">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/location-south-east-asia.png"
                alt="Map of South East Asia"
                className="w-16 h-16 mr-4"
                width={500} // specify width
                height={300}
              />
              <div>
                <h6 className="text-xl font-semibold">
                  South East Asia (Exclude Thailand)
                </h6>
                <p className="mt-2 text-gray-700">
                  Coefficient Alpha Pte. Ltd (Singapore)
                  <br />
                  UEN: 202225166K
                  <br />
                  Web: coefficientalpha.com.sg
                </p>
              </div>
            </div>
            {/* Office 4 */}
            <div className="flex items-start">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/location-balkan-map.png"
                alt="Map of Balkan"
                className="w-16 h-16 mr-4"
                width={500} // specify width
                height={300}
              />
              <div>
                <h6 className="text-xl font-semibold">Balkan Countries</h6>
                <p className="mt-2 text-gray-700">
                  B -TECH (Kosovo)
                  <br />
                  Email: vullnet.pylla@b-tech.al
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mt-4 text-xl font-semibold">Location</h4>
              <p className="mt-2 text-gray-700">
                Sunshine Business Park
                <br />
                Sector-94, Poland
              </p>
            </div>
            {/* Card 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mt-4 text-xl font-semibold">Phone</h4>
              <p className="mt-2 text-gray-700">
                <a href="tel:+8805550108">+88(0) 555-0108</a>
                <br />
                <a href="tel:+8805550108">+88(0) 555-0108</a>
              </p>
            </div>
            {/* Card 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mt-4 text-xl font-semibold">Email</h4>
              <p className="mt-2 text-gray-700">
                <a href="mailto:info@feiginelectric.com">
                  info@feiginelectric.com
                </a>
                <br />
                <a href="mailto:support@feiginelectric.com">
                  support@feiginelectric.com
                </a>
              </p>
            </div>
            {/* Card 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="mt-4 text-xl font-semibold">Visit between</h4>
              <p className="mt-2 text-gray-700">
                Mon - Sat: 8.00-5.00
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold">Send Us A Message</h3>
              <p className="mt-4 text-gray-700">
                Give us a chance to serve and bring magic to your brand.
              </p>
              {/* Contact Form */}
              <form className="mt-8 space-y-6">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="customerName"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email address</label>
                  <input
                    type="email"
                    name="customerEmail"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="customerTel"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Comments</label>
                  <textarea
                    name="customerMessage"
                    rows="5"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              {/* Placeholder for animation */}
              <div
                id="contact-lottie-animation"
                className="w-full h-64 bg-gray-200"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
