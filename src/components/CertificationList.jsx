// import content
import { createElement } from "react";
import { content } from "../Content";

const CertificationList = () => {
  const { certificate } = content;

  return (
    <div className="md:container px-5 " id="certificate">
      <h2 className="text-5xl text-center m-5">Certifications</h2>
      <br />
      <div className=" flex justify-center align-middle flex-col gap-10 w-[100%]  flex-wrap">
        {certificate.map((cer, i) => (
          <ul>
          <div
            key={i}
            className="bg-white sm:cursor-pointer relative group  max-w-[640px] flex items-center gap-5 p-5 rounded-md border-2 border-slate-200 h-[70%]"
          >
            <div>
              <img
                src={cer.icon}
                alt="..."
                className="w-20 group-hover:scale-125 duration-200 rounded-sm"
              />
            </div>
            <div>
              {/* <a
                href={cer.link}
                className="w-[400px] text-lg font-bold"
                target="_blank"
              >
                {cer.name}
              </a> */}
              <p className="italic">{}</p>
              <div
                onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                }}
                className="text-xl absolute top-3 right-3"
              ></div>
            </div>
          </div>
          </ul>
        ))}
      </div>
    </div>
    // </section>
  );
};

export default CertificationList;
