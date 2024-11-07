import {
  LineChart,
  Lightbulb,
  Wrench ,
  Shield,
  Leaf,
  Sun,
  Gauge,
  Settings,
  FileArchive ,
  Bolt
} from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Ecod() {
  return (
    <>
      {/* Hero Section */}
       <div className="container mx-auto space-y-10 p-6">
      {/* Hero Section */}
      <section className="inner-hero bg-gray-100 text-center py-10">
        <Card>
          <CardHeader className="text-center">
            <h1 className="text-3xl font-semibold">
              ECOD Smart Optimizer
            </h1>
            <p className="mt-2">
              Optimize Your Energy. Extend Lifespan. Save Costs.
            </p>
          </CardHeader>
        </Card>
      </section>

      {/* Product Overview */}
      <section className="product-overview bg-white py-10">
        <Card className="text-center">
          <CardHeader>
            <h2  className="text-2xl font-semibold">
              Revolutionary Energy Optimization
            </h2>
          </CardHeader>
          <CardContent>
            <p className="mt-2">
              The Ecod Smart Optimizer reduces energy consumption by maintaining
              the voltage at the optimal level, saving{" "}
              <span className="font-semibold">6-14%</span> on electricity bills.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Product Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center">
            <div className="text-wrapper">
            <h2 className="text-xl font-semibold">
              Saves 6-14% on <br /> Energy Bills
            </h2>
            <p className="mt-2">
              Cut down your electricity costs by 6-14%. The Ecod Smart Optimizer
              helps you maintain optimal voltage levels, ensuring efficient
              energy use without compromising performance.
            </p>
          </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/ecod/ecod-product.png"
                alt="ECOD Energy Optimizer"
                className="w-full"
                width={500} // specify width
                height={300} // specify height
              />
            </div>
          </div>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <LineChart className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-4">Return on Investment in 1-3 Years</span>
            </li>
            <li className="flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-4">Reduce Energy Consumption</span>
            </li>
            <li className="flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Wrench  className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-4">Gain Extended Equipment Lifespan</span>
            </li>
            <li className="flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-4">Protect Equipment</span>
            </li>
            <li className="flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-4">
                Reduce CO<sub>2</sub> Emissions
              </span>
            </li>
            <li className="flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Sun className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-4">Integrate Solar Panels with the Grid</span>
            </li>
            <li className="flex items-center">
              <div className="p-4 bg-gray-100 rounded-full">
                <Gauge className="h-6 w-6 text-green-600" />
              </div>
              <span className="ml-4">Gain Increased Efficiency</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Product Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Benefits of ECOD</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center">
                <Lightbulb className="h-8 w-8 text-green-600" />
                <h3 className="ml-4 text-xl font-semibold">Energy Savings</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Reduce energy bills by up to 14% with the Ecod Smart Optimizer’s
                optimized voltage control system.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center">
                <Settings className="h-8 w-8 text-green-600" />
                <h3 className="ml-4 text-xl font-semibold">
                  Equipment Lifespan
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Keep electrical devices running longer by maintaining stable
                voltage levels and reducing equipment stress.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center">
                <FileArchive  className="h-8 w-8 text-green-600" />
                <h3 className="ml-4 text-xl font-semibold">
                  Compact and Efficient
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                The Ecod Smart Optimizer features a smaller, lighter design that
                integrates seamlessly into your system.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center">
                <Bolt className="h-8 w-8 text-green-600" />
                <h3 className="ml-4 text-xl font-semibold">Voltage Control</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Optimizes voltage levels to minimize energy waste and deliver
                consistently high efficiency across your equipment.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center">
                <Wrench  className="h-8 w-8 text-green-600" />
                <h3 className="ml-4 text-xl font-semibold">
                  Effortless Installation
                </h3>
              </div>
              <p className="mt-4 text-gray-600">
                Integrate the Ecod Smart Optimizer easily, without requiring
                special permits or complex installation procedures.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-green-600" />
                <h3 className="ml-4 text-xl font-semibold">Maintenance-Free</h3>
              </div>
              <p className="mt-4 text-gray-600">
                No ongoing maintenance is required, providing a reliable,
                hassle-free solution for years of consistent performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Solutions */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold">
                ECOD Helps You to Tackle the Most Common Power Quality Issues
              </h2>
              <ul className="mt-8 space-y-6">
                <li>
                  <h3 className="text-xl font-semibold">Reactive Power</h3>
                  <p className="mt-2 text-gray-600">
                    The phase angle between the current and voltage waveforms in
                    an AC system. It is used to develop magnetic fields in
                    motors and can cause a low power factor.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Harmonics</h3>
                  <p className="mt-2 text-gray-600">
                    Multiples of the supply frequency, e.g., the fifth harmonic
                    would be 250 Hz when the supply frequency is 50 Hz. They are
                    caused by electronic loads such as variable speed drives and
                    UPS systems.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Network Imbalance</h3>
                  <p className="mt-2 text-gray-600">
                    Differences in voltage between lines, caused by single-phase
                    loads, phase-to-phase loads, and unbalanced three-phase
                    loads, such as welding equipment.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Surges</h3>
                  <p className="mt-2 text-gray-600">
                    A sudden change in the sine wave that occurs in both voltage
                    and current waveforms. They are caused by switching devices
                    and the starting and stopping of high-power equipment.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Voltage Variations</h3>
                  <p className="mt-2 text-gray-600">
                    Include sags, swells, surges, and interruptions. Line
                    voltage is higher or lower than nominal for a short period.
                    They are caused by network faults, switching of capacitive
                    loads, and excessive loads.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold">Flicker</h3>
                  <p className="mt-2 text-gray-600">
                    Random or repetitive changes in voltage. Caused by mills,
                    electric arc furnaces (EAF), welding equipment, and
                    shredders.
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/power-quality-issues.png"
                alt="Power Quality Issues"
                className="w-full"
                width={500} // specify width
                height={300} // specify height
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Principle */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            <span className="text-green-600">ECOD</span> Operating Principle
          </h2>
          <div className="mt-12 space-y-12">
            <div className="md:flex md:items-center">
              <div className="md:w-1/2">
                <p className="text-xl font-semibold">Current Voltage Graph</p>
                <p className="mt-4 text-gray-600">
                  The patented <strong>ECOD</strong> technology operates on a
                  principle where an electronic controller regulates the
                  direction of current in the coil of each transformer (one per
                  phase), monitoring and balancing the network parameters. This
                  is aimed at maintaining maximum efficiency with minimal power
                  losses in the network.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="https://feiginelectric.com/wp-content/themes/ecnology/images/voltage_graph.jpg"
                  alt="Current Voltage Graph"
                  className="w-full"
                  width={500} // specify width
                  height={300} // specify height
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/2">
                <p className="text-xl font-semibold">Efficiency Graph</p>
                <p className="mt-4 text-gray-600">
                  According to the diagram, we can clearly see that the
                  efficiency of the air conditioner at a voltage of 210 to 220 V
                  is close to 100%. This means that at this voltage, the air
                  conditioner utilizes electrical energy optimally, achieving
                  nearly 100% efficiency.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="https://feiginelectric.com/wp-content/themes/ecnology/images/ecod-efficiency-graph-efficiency-vs-volt.png"
                  alt="Efficiency Graph"
                  className="w-full"
                  width={500} // specify width
                  height={300} // specify height
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Benefits Compared to Competitors
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-4">Feature</th>
                  <th className="border-b p-4">
                    Traditional Voltage Optimizers
                  </th>
                  <th className="border-b p-4">ECOD Voltage Optimizer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-4">Technology</td>
                  <td className="border-b p-4">
                    Basic voltage regulation using transformers with specific
                    capacities.
                  </td>
                  <td className="border-b p-4">
                    Unique, patented technology regulating current in
                    transformer windings.
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-4">Size and Weight</td>
                  <td className="border-b p-4">
                    Large and heavy due to transformer size.
                  </td>
                  <td className="border-b p-4">
                    Three times smaller and lighter.
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-4">Energy Loss</td>
                  <td className="border-b p-4">
                    Higher losses due to larger size and weight.
                  </td>
                  <td className="border-b p-4">
                    Reduces losses by more than six times, improving efficiency.
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-4">Energy Optimization</td>
                  <td className="border-b p-4">
                    Focuses on voltage optimization but is not very effective at
                    minimizing losses.
                  </td>
                  <td className="border-b p-4">
                    Optimizes energy (kWh), peak power (kW), and reactive power
                    (kVAr).
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-4">Installation</td>
                  <td className="border-b p-4">
                    Limited flexibility due to large size.
                  </td>
                  <td className="border-b p-4">
                    Compact design for easy integration in various environments.
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-4">Energy Savings</td>
                  <td className="border-b p-4">
                    Potential savings of around 4%, inconsistent, and often used
                    internally.
                  </td>
                  <td className="border-b p-4">
                    Consistent savings of 6-14% on selected loads.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Monitoring Platform */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            Web-Based Monitoring Platform for{" "}
            <span className="text-green-600">ECOD System</span>
          </h2>
          <div className="mt-12 md:flex md:items-center">
            <div className="md:w-1/2">
              <ul className="list-disc list-inside space-y-4 text-gray-600">
                <li>
                  <strong>Live tracking of electricity consumption:</strong>{" "}
                  Monitor your energy usage in real time, down to each device or
                  equipment.
                </li>
                <li>
                  <strong>Detailed reports:</strong> Access historical data to
                  understand energy trends and performance over time.
                </li>
                <li>
                  <strong>Cost-saving insights:</strong> See how much
                  electricity you are saving with the ECOD system, including
                  breakdowns by device or time period.
                </li>
                <li>
                  <strong>Remote control and management:</strong> Monitor and
                  adjust the system settings remotely via the platform.
                </li>
                <li>
                  <strong>Compatibility with energy meters:</strong> The
                  platform integrates with energy meters, providing accurate
                  readings on energy consumption and voltage optimization.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                The web-platform is available in the following languages:
                Polish, English, Chinese, French
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/ecod/feigin-electric-monitoring-platform.png"
                alt="ECOD System Monitoring Platform"
                className="w-full"
                width={500} // specify width
                height={300} // specify height
              />
            </div>
          </div>
        </div>
      </section>

      {/* ECOD Models */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-3xl font-bold text-center">
            Product Line <span className="text-red-600">EC</span>
            <span className="text-green-600">OD</span>
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-4">Model</th>
                  <th className="border-b p-4">
                    Nominal Current per Phase (A)
                  </th>
                  <th className="border-b p-4">
                    Nominal Current per Phase (A)
                  </th>
                  <th className="border-b p-4">Dimensions (H*D*W, mm)</th>
                  <th className="border-b p-4">Weight (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b p-4">ECOD-ML-35-50</td>
                  <td className="border-b p-4">50</td>
                  <td className="border-b p-4">35</td>
                  <td className="border-b p-4">200*200*600</td>
                  <td className="border-b p-4">45</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
