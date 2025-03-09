import { content } from "../Content";

const Education = () => {
  const { education } = content;
  return (
    <section className="mb-20" id="education">
      <div className="md:container px-5 pt-14">
        <h2 className="title text-center">
          {education.title}
        </h2>
        <br />
        
          {education.education_content.map((content, i) => (
            <a href={content.link} target="_blank">
              <div
                className={` duration-500 bg-bg_light_primary mx-8 my-4 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col`}
              >
                <img src={content.img} alt="..." className="h-24" />
                <div>
                  <p className="sm:text-base text-sm">{content.college}</p>
                  <br />
                  <h6>{content.name}</h6>
                  <br></br>
                  <h6>{content.CGPA}</h6>
                </div>
              </div>
              </a>
          ))}
      </div>
    </section>  );
};

export default Education;
