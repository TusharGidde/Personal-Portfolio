// import content
import { createElement } from "react";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;

  return (
    <section
      className="min-h-[80vh] py-10 flex justify-center items-center bg-bg_light_primary"
      id="skills"
    >
      {/* content */}
      <div className="md:container px-5 ">
  
        <h2 className="text-5xl text-center m-5">{skills.title}</h2>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center mt-6">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-20 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
