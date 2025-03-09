import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    // <section className="flex justify-center items-center bg-bg_light_primary pt-10 min-h-[90vh]" id="projects">
    <div
      className=" md:container px-5  mt-10 flex flex-col justify-between"
      id="projects"
    >
      <div>
        <h2 className="text-5xl text-center m-5">{Projects.title}</h2>
        <br />
      </div>
      <div className="flex items-center lg:flex-row ">
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          modules={[Pagination]}
          autoplay={{ delay: 500 }}
          slidesPerView={1} // Initially, show only 1 slide
          breakpoints={{
            640: {
              slidesPerView: 1, // On smaller screens (640px width and below), show only 1 slide
              spaceBetween: 10, // Reduce space between slides on smaller screens
            },
            768: {
              slidesPerView: 2, // Adjusted to show 2 slides on medium-sized screens
              spaceBetween: 20, // Default space between slides
            },
            1024: {
              slidesPerView: 3, // On larger screens (1024px width and below), show 3 slides
              spaceBetween: 20, // Default space between slides
            },
          }}
          className="rounded-3xl pb-16 max-w-8xl drop-shadow-primary self-start"
        >
          {Projects.project_content.map((content, i) => (
            <SwiperSlide
              key={i}
              className="bg-white w-full sm:w-80 md:w-96 rounded-3xl p-5 border-2 border-blue-300  max-h-fit"
            >
              <img
                src={content.image}
                alt="..."
                className="rounded-2xl drop-shadow-red w-[90%] h-[90%] "
              />
              <div className="flex flex-col gap-3 mt-5">
                <h5 className="font-bold font-Poppins">{content.title}</h5>

                {content.link != " " ? (
                  <a
                    href={content.link}
                    className="font-bold text-black-500 flex items-center justify-left"
                  >
                    <h6>Live Project </h6>
                    <i className="bx bx-right-arrow-alt text-3xl"></i>
                  </a>
                ) : (
                  <div style={{ width: "auto", height: "24px" }}></div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    // </section>
  );
};

export default Projects;
