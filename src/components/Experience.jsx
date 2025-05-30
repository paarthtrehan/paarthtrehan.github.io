import { EXPERIENCES } from "../index";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-semibold">Experience</h2>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {exp.role} @ <span className="text-cyan-300">{exp.company}</span>
              </h6>
              <p className="mb-3 text-neutral-400">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="rounded bg-neutral-900 px-2 py-1 text-sm text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
