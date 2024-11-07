import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="inner-hero-1">
        <div className="container">
          <div className="wrapper">
            <div className="title-1">About Us</div>
            <p className="desc">
              Read more about us. Our vision, mission, success and many other
              you might love.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story-brief">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <h3 className="title-3">Our Story</h3>
              <p className="title-1">
                Running a successful business <span>since 2014</span>
              </p>
            </div>
            <div className="right">
              <p>
                Leo Feigin, a renowned core technology professional having held
                senior positions in the nuclear and aerospace electricity
                sector, laid out the basics for our technology which was first
                worked out and described in 1995.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story-points">
        <div className="container">
          <div className="wrapper">
            <div className="text-wrapper">
              <ul>
                <li>
                  Establishing a laboratory for component testing and analysis
                  was the next logical step in developing an optimization device
                  which through a number of improvements and model updates
                  resulted in today's patented technology and ECOD model line.
                </li>
                <li>
                  Today Feigin Electric Group of companies operates in many
                  countries around the world EU, Middle East, Southeast East
                  Asia, and Australia, production base in the Rayong industrial
                  cluster in Thailand. Continue to enhance a sale network to the
                  new markets (UK, USA).
                </li>
                <li>
                  Feigin Electric's strive to perfection is second to none, as
                  is our approach towards clients needs.
                </li>
                <li>
                  Our customers include factories, production lines, hotels,
                  petrol stations, counties, fast food restaurant chains and
                  power distributors with names such as Burger King, KFC,
                  McDonalds, The Pizza Company, Lion Group, Chester's Grill,
                  Pizza Hut, Sturgeon Farm Hua Hin Thailand, Dominoz Pizza, and
                  BreadTalk just to name a few.
                </li>
              </ul>
            </div>
            <div className="media-wrapper">
              <Image
                src="https://feiginelectric.com/wp-content/themes/ecnology/images/store-front-singapore.jpg"
                alt="Photo of the store front of Dominos in Singapore"
                width={500} // specify width
                height={300} // specify height
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
