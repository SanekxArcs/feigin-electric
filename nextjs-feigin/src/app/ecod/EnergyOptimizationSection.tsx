import { DollarSign, Settings, CheckCircle } from "lucide-react";

export default function EnergyOptimizationSection() {
  const sections = [
    {
      icon: DollarSign,
      title: "Korzyści Finansowe",
      items: [
        { icon: CheckCircle, text: "Obniżenie Wydatków" },
        { icon: CheckCircle, text: "Wydajność Fotowoltaiki" },
      ],
    },
    {
      icon: Settings,
      title: "Korzyści Techniczne",
      items: [
        { icon: CheckCircle, text: "Efektywność Energetyczna" },
        { icon: CheckCircle, text: "Długowieczność Sprzętu" },
      ],
    },
  ];

  return (
    <section className="container px-4 py-12 lg:py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="relative inline-block text-fgreen-950">
            Dlaczego optymalizacja energii jest ważna?
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-fgreen-200 rounded-md"></span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 mx-auto w-1/2 place-content-center lg:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <div key={index} className="lg:col-span-1">
            <Card
              icon={section.icon}
              title={section.title}
              items={section.items}
            />
          </div>
        ))}
      </div>
      <div className="text-center ">
        <div className=" mx-auto w-64" style={{ bottom: "-50px" }}>
          <SvgIcon />
        </div>
        <p className="text-lg md:text-xl font-semibold text-fred-950">
          RÓWNOWAŻNE KORZYŚCI FINANSOWE I TECHNICZNYCH OPTYMALIZACJI ENERGII
        </p>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, items }) {
  return (
    <div className="bg-fgreen-50 rounded-lg p-6 shadow-md hover:bg-fgreen-100 focus:bg-fgreen-200 active:bg-fgreen-300 transition ease-in-out duration-300">
      <h3 className="text-fgreen-700 text-2xl font-semibold mb-4 flex items-center">
        <Icon className="w-6 h-6 mr-2 text-fgreen-600" />
        {title}
      </h3>
      <ul className="list-disc ml-6 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-fred-800 flex items-center hover:text-fred-600 focus:text-fred-500 active:text-fred-400 transition ease-in-out duration-300">
            <item.icon className="w-5 h-5 mr-2 text-fgreen-600" />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SvgIcon() {
  return (
    <svg
      width="266"
      height="159"
      viewBox="0 0 266 159"
      style={{
        fill: "none",
        stroke: "none",
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="items" style={{ isolation: "isolate" }}>
        <g id="blend" style={{ mixBlendMode: "normal" }}>
          <g
            id="g-root-5.cu_sy_18k1r6a1mkzhu7-fill"
            transform="translate(39, 22)"
          />
          <g
            id="g-root-4.cu_sy_18k1r6a1mkzhu6-fill"
            transform="translate(111, 33)"
          >
            <g id="4.cu_sy_18k1r6a1mkzhu6-fill" stroke="none" fill="#f6f6f6">
              <g>
                <path d="M 34.086 22C 34.086 28.627 28.695 34 22.043 34C 15.392 34 10 28.627 10 22C 10 15.373 15.392 10 22.043 10C 28.695 10 34.086 15.373 34.086 22ZM 28 22C 28 25.314 25.314 28 22 28C 18.686 28 16 25.314 16 22C 16 18.686 18.686 16 22 16C 25.314 16 28 18.686 28 22Z" />
              </g>
            </g>
          </g>
          <g
            id="g-root-3.cu_sy_1hf2ac21mkzk79-fill"
            transform="translate(75, 54.3260498046875)"
          >
            <g id="3.cu_sy_1hf2ac21mkzk79-fill" stroke="none" fill="#f6f6f6">
              <g>
                <path d="M 22 78.674011L 94 78.674011C 94 78.674011 73.992 28.166011 65.959 10.058011C 63.725 11.952011 61.073 12.997011 58.043 12.997011C 54.986 12.997011 52.288 11.933011 50.072 10.000011C 42.047 28.114011 22 78.674011 22 78.674011ZM 18 78.679011C 13.582 78.679011 10 82.260011 10 86.679011L 10 88.679011C 10 89.783011 10.895 90.679011 12 90.679011L 104 90.679011C 105.105 90.679011 106 89.783011 106 88.679011L 106 86.679011C 106 82.260011 102.418 78.679011 98 78.679011L 18 78.679011Z" />
              </g>
            </g>
          </g>
          <g
            id="g-root-2.right-bucket_sy_1luvsgi1mkzjf0-fill"
            transform="translate(171, 3)"
          >
            <g
              id="2.right-bucket_sy_1luvsgi1mkzjf0-fill"
              stroke="none"
              fill="#e6f9ff"
            >
              <g>
                <path d="M 10 11.8C 10 10.806 10.806 10 11.8 10L 80.2 10C 81.194 10 82 10.806 82 11.8C 82 20.747 74.747 28 65.8 28L 26.2 28C 17.253 28 10 20.747 10 11.8Z" />
              </g>
            </g>
          </g>
          <g
            id="g-root-1.left-bucket_sy_1luvsgi1mkzjez-fill"
            transform="translate(3, 3)"
          >
            <g
              id="1.left-bucket_sy_1luvsgi1mkzjez-fill"
              stroke="none"
              fill="#e9fbf3"
            >
              <g>
                <path d="M 10 11.8C 10 10.806 10.806 10 11.8 10L 80.2 10C 81.194 10 82 10.806 82 11.8C 82 20.747 74.747 28 65.8 28L 26.2 28C 17.253 28 10 20.747 10 11.8Z" />
              </g>
            </g>
          </g>
          <g
            id="g-root-5.cu_sy_18k1r6a1mkzhu7-stroke"
            transform="translate(39, 22)"
          >
            <g
              id="5.cu_sy_18k1r6a1mkzhu7-stroke"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              stroke="#888888"
              strokeWidth="2"
            >
              <g>
                <path d="M 178 10L 178 24.978C 178 29.395 174.42 32.976 170.003 32.978L 107 33M 10 10L 10 25.025C 10 29.444 13.582 33.025 18 33.025L 82 33.025" />
              </g>
            </g>
          </g>
          <g
            id="g-root-4.cu_sy_18k1r6a1mkzhu6-stroke"
            transform="translate(111, 33)"
          >
            <g
              id="4.cu_sy_18k1r6a1mkzhu6-stroke"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              stroke="#888888"
              strokeWidth="2"
            >
              <g>
                <path d="M 34.086 22C 34.086 28.627 28.695 34 22.043 34C 15.392 34 10 28.627 10 22C 10 15.373 15.392 10 22.043 10C 28.695 10 34.086 15.373 34.086 22ZM 28 22C 28 25.314 25.314 28 22 28C 18.686 28 16 25.314 16 22C 16 18.686 18.686 16 22 16C 25.314 16 28 18.686 28 22Z" />
              </g>
            </g>
          </g>
          <g
            id="g-root-3.cu_sy_1hf2ac21mkzk79-stroke"
            transform="translate(75, 54.3260498046875)"
          >
            <g
              id="3.cu_sy_1hf2ac21mkzk79-stroke"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              stroke="#888888"
              strokeWidth="2"
            >
              <g>
                <path d="M 22 78.674011L 94 78.674011C 94 78.674011 73.992 28.166011 65.959 10.058011C 63.725 11.952011 61.073 12.997011 58.043 12.997011C 54.986 12.997011 52.288 11.933011 50.072 10.000011C 42.047 28.114011 22 78.674011 22 78.674011ZM 18 78.679011C 13.582 78.679011 10 82.260011 10 86.679011L 10 88.679011C 10 89.783011 10.895 90.679011 12 90.679011L 104 90.679011C 105.105 90.679011 106 89.783011 106 88.679011L 106 86.679011C 106 82.260011 102.418 78.679011 98 78.679011L 18 78.679011Z" />
              </g>
            </g>
            <g
              id="3.cu_sy_1hf2ac21mkzk79-stroke"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              stroke="#888888"
              strokeWidth="2"
            >
              <g>
                <path d="M 58 58.679011L 54 62.679011L 54 71.749011C 55.177 71.068011 56.543 70.679011 58 70.679011C 59.457 70.679011 60.823 71.068011 62 71.749011L 62 62.679011L 58 58.679011ZM 62 71.749011C 60.823 71.068011 59.457 70.679011 58 70.679011C 56.543 70.679011 55.177 71.068011 54 71.749011C 51.609 73.132011 50 75.718011 50 78.679011L 66 78.679011C 66 75.718011 64.391 73.132011 62 71.749011ZM 58 49.679011L 58 55.479011M 78.503 58.176011L 74.404 62.274011M 37.497 58.176011L 41.596 62.274011M 64.747 53.468011L 64.003 56.262011M 44.94 56.078011L 46.4 58.591011M 71.031 56.068011L 69.59 58.572011M 51.224 53.478011L 51.978 56.271011" />
              </g>
            </g>
          </g>
          <g
            id="g-root-2.right-bucket_sy_1luvsgi1mkzjf0-stroke"
            transform="translate(171, 3)"
          >
            <g
              id="2.right-bucket_sy_1luvsgi1mkzjf0-stroke"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              stroke="#17b0e3"
              strokeWidth="2"
            >
              <g>
                <path d="M 10 11.8C 10 10.806 10.806 10 11.8 10L 80.2 10C 81.194 10 82 10.806 82 11.8C 82 20.747 74.747 28 65.8 28L 26.2 28C 17.253 28 10 20.747 10 11.8Z" />
              </g>
            </g>
          </g>
          <g
            id="g-root-1.left-bucket_sy_1luvsgi1mkzjez-stroke"
            transform="translate(3, 3)"
          >
            <g
              id="1.left-bucket_sy_1luvsgi1mkzjez-stroke"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              stroke="#3bc482"
              strokeWidth="2"
            >
              <g>
                <path d="M 10 11.8C 10 10.806 10.806 10 11.8 10L 80.2 10C 81.194 10 82 10.806 82 11.8C 82 20.747 74.747 28 65.8 28L 26.2 28C 17.253 28 10 20.747 10 11.8Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
