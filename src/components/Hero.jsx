import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden ">
      <div className="min-h-screen relative  flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
          <h1 className="text-7xl  absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[#5696d6]">
          </h1>

        </div>

        {/* first col */}
        <div className="min-h-screen flex items-center justify-center mt-10">
          <div className="container grid md:grid-cols-2 gap-10 items-center  ">
            {/* First column */}
            <div className=" ml-10 pb-16 px-6 pt-5  text-[#5696d6]" data-aos="fade-down">
              <h2 className="text-[51px] md:text-[73px] lg:text-33xl">
                {hero.title}
              </h2>

              <br />
              <div className="flex flex-col gap-10 mt-5 m-5">
                {hero.hero_content.map((content, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-10 ${i === 1 && "flex-row-reverse text-right"
                      }`}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl">
                      {content.count}
                    </h3>


                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-0 p-5">
                <div className="flex justify-center -mt-1 mr-10">
                  <a href="https://drive.google.com/file/d/16GXB0BMrvB6gwwdbv3s0EXf-2_TMYRjc/view?usp=sharing" target="_blank" className="btn hover:bg-blue-500 hover:text-white hover:border-white transition duration-300 ease-in-out ">
                    {hero.btnText}
                  </a>
                </div>
                {hero.social_media.map((social_media, i) => (
                  <div key={i} className="mr-5">
                    <a
                      href={social_media.link} target="_blank"
                      className="rounded-full hover:text-white hover:border-white transition duration-300 ease-in-out text-black border-2  border-gray-300 text-2xl bg-transparent hover:bg-blue-500 text-white px-3 p-2"
                    >
                      <i className={`bx bxl-${social_media.name}`} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Second column */}
            <div className="md:h-[40rem],m-0 h-96 flex justify-center items-center border rounded-full overflow-hidden  ">
              <img
                src={hero.image}
                data-aos="slide-up"
                alt="..."
                className=" width: 200%;   height: 100%;"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
