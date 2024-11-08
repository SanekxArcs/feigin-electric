

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import UnleashedVoltageSvg from "./assets/napkin-selection (1).svg";
import separatorSvg from "./assets/layered-waves-haikei.svg";
import ECODSmartOptimizer from "./assets//WhatsApp Image 2023-11-14 at 19.35.55.png";
import Image from "next/image";
import ScrollingLogos from "./components/ScrollingLogos";

const Home = () => {
  return (
    <>
      <section className="flex flex-row items-center justify-center gap-20 px-32 mt-32 text-center h-svh">
        <div className="w-1/2 overflow-hidden shadow-xl rounded-3xl ring-2 ring-offset-4 ring-red-800">
        </div>
        <div className="flex flex-col text-left ">
          <div className="mb-10 ">
            <h1 className="mb-5 text-5xl font-bold">
              Revolutionizing Energy Efficiency
            </h1>
            <p className="w-1/2">
              Our smart energy optimization solutions are designed to save
              energy, enhance equipment lifespan, and make a positive
              environmental impact.
            </p>
          </div>

          <div>
            <Button className="bg-red-400 rounded-full hover:bg-red-500 hover:ring-1 ring-offset-2 ring-red-600">
              View Case Studies <ChevronRight />
            </Button>
          </div>
        </div>
      </section>
       <ScrollingLogos/>

      <section className="flex flex-row items-center justify-center gap-10 py-32">
        <div className="w-1/2 text-left">
          <h2 className="mb-5 text-5xl font-bold">Unleashed Voltage</h2>
          <ul className="list-disc list-outside">
            <li className="mb-4 text-balance">
              Electricity optimization is not just about the bill, but a
              sophisticated approach towards competitiveness, equipment
              protection, and environmental impact.
            </li>
            <li className="mb-4 text-balance">
              The power supply by your electricity company in charge is rarely
              steady and much less optimal as it should be within the
              established standards of 220/230 V or 110/120V.
            </li>
            <li className="mb-4 text-balance">
              Rather than that is it almost always more or less within a range
              of plus/minus 5 to 10%. Large cities get the worst of it as the
              voltage is usually close to the upper tolerance limit.
            </li>
            <li className="mb-4 text-balance">
              In a simple example in a country where 230V is taken as a basis in
              the network, there will be a value between 232-242V and even more.
            </li>
            <li className="mb-4 text-balance">
              As distributors increase the voltage in order to control drops at
              peak power consumption and reduce losses in the transmission
              lines, your appliances and equipment work harder, heat up, and
              suffer short lifespans while your electricity bill swells up.
              Higher voltage equals wasted power, as the excess voltage is
              dissipated as heat from devices.
            </li>
            <li className="mb-4 text-balance">
              Many devices are designed to operate best at the lower voltage
              range, so subjecting them to higher voltages wears them down,
              requiring replacement. Such voltage increase is the main cause of
              inefficient electricity usage, and while the end-user and
              environment shoulder the downside, the distributor reaps the
              benefits.
            </li>
          </ul>
        </div>
        <div className="grid h-96 place-content-start">
          <Image
            src={UnleashedVoltageSvg}
            alt="Feigin Electric"
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="flex flex-row items-center justify-center gap-10 my-60 bg-gray-50">
        <div className="relative grid w-1/2 scale-125 place-content-center">
          <div className="absolute flex items-center justify-start -translate-x-20 top-1/2 left-1/2">
            <svg
              id="visual1"
              viewBox="0 0 100 100"
              width="300"
              height="300"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              className="absolute animate-spin-slow"
            >
              <g transform="translate(48.098809204717895 49.676855306886964)">
                <path
                  d="M44.2 26.6C30.6 49 -25.4 48 -39.8 25.1C-54.3 2.2 -27.1 -42.7 0.9 -42.2C28.9 -41.7 57.7 4.2 44.2 26.6"
                  fill="#dc2626"
                ></path>
              </g>
            </svg>
            <svg
              id="visual1"
              viewBox="0 0 100 100"
              width="250"
              height="250"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              className="absolute -translate-x-20 animate-spin-slow"
            >
              <g transform="translate(48.098809204717895 49.676855306886964)">
                <path
                  d="M44.2 26.6C30.6 49 -25.4 48 -39.8 25.1C-54.3 2.2 -27.1 -42.7 0.9 -42.2C28.9 -41.7 57.7 4.2 44.2 26.6"
                  fill="#ef4444"
                ></path>
              </g>
            </svg>
            <svg
              id="visual1"
              viewBox="0 0 100 100"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              className="absolute -translate-x-20 animate-spin-slow"
            >
              <g transform="translate(48.098809204717895 49.676855306886964)">
                <path
                  d="M44.2 26.6C30.6 49 -25.4 48 -39.8 25.1C-54.3 2.2 -27.1 -42.7 0.9 -42.2C28.9 -41.7 57.7 4.2 44.2 26.6"
                  fill="#f87171"
                ></path>
              </g>
            </svg>
          </div>
          <Image
            className="relative z-10 translate-x-20 w-96"
            src={ECODSmartOptimizer}
            alt="ECOD Smart Optimizer"
          />
        </div>
        <div className="grid w-1/2 place-content-center">
          <h3 className="mb-6 font-bold text-emerald-700 text-7xl">
            Ecod Smart Optimizer
          </h3>
          <p className="mb-4 text-3xl font-medium text-gray-700">
            Unlock Energy Efficiency &amp; Reduce Costs
          </p>
          <ul className="mb-5 ml-5 text-xl list-disc list-outside">
            <li>Achieves energy savings of 6-14%</li>
            <li>Maintain optimal voltage levels</li>
            <li>Extends equipment lifespan</li>
            <li>Protects against excessive voltage</li>
            <li>Reduces carbon emissions</li>
            <li>No additional maintenance required</li>
            <li>Integrates seamlessly with existing systems</li>
          </ul>
          <div>
            <Button className="bg-red-400 rounded-full hover:bg-red-500 hover:ring-1 ring-offset-2 ring-red-600">
              <a href="/ecod">Learn More</a>
              <ChevronRight />
            </Button>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col items-center justify-center h-screen text-center">
        <div className="my-32 goals">
          <p className="mb-8 text-3xl font-semibold">10 Years of Innovation</p>
          <div className="p-6 bg-white rounded-lg shadow-lg expandable-card expanded">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Our mission</AccordionTrigger>
                <AccordionContent>
                  Our mission is to empower both individuals and businesses to
                  attain significant savings on their electricity bills through
                  the utilization of our technology.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Our Goal</AccordionTrigger>
                <AccordionContent>
                  <ul className="text-gray-700 list-disc list-inside">
                    <li>6 - 14% electricity bill savings</li>
                    <li>Quick return on investment</li>
                    <li>
                      Enhancing power supply reliability and efficiency through
                      precision voltage control within devices.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
            </div>
      </section> */}
    </>
  );
};

export default Home;
