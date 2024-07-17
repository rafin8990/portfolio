import React from "react";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const project = useLoaderData();
  //   console.log(project);
  return (
    <div>
      <div>
        <div>
          <div
            className="hero h-[400px]"
            style={{ backgroundImage: `url(${project?.imageLinks[0]})` }}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="bg-white p-10 rounded-xl">
                <h1 className="mb-5 text-4xl font-bold text-cyan-900">
                  {project?.projectName}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5">
            {project?.imageLinks?.map((link, key) => (
              <div
                key={key}
                className="w-full bg-base-100 shadow-2xl border border-cyan-900 rounded-xl "
              >
                <img className="rounded-xl" src={link} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-semibold text-cyan-600 text-center underline">
            About This Project
          </h1>
          <p className="text-center text-lg font-bold my-5">
            {project?.startDate} - {project?.endDate}
          </p>
          <div className="flex justify-center mt-10">
            <div className=" text-xl ">
              {project?.projectDetails?.map((data, i) => (
                <li key={i}>{data}</li>
              ))}
              <li>Technology Used : {project?.technology}</li>
            </div>
          </div>
          {project?.problemFaced ? (
            <div className="bg-cyan-200 p-10 my-5">
              <div className="mt-5">
                <h1 className="text-2xl text-cyan-700 text-center font-bold underline">
                  Problem Faced{" "}
                </h1>
                <p className="text-center text-gray-700">
                  {project?.problemFaced}
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl text-cyan-700 text-center font-bold underline">
                  How to Solved?{" "}
                </h1>
                <p className="text-center text-gray-700">{project?.solution}</p>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className=" py-10 flex justify-center">
            <div className="card-actions">
              {project?.gitClient ? (
                <a href={project?.gitClient}>
                  <button className="btn btn-secondary">github client</button>
                </a>
              ) : (
                ""
              )}
              {project?.gitServer ? (
                <a href={project?.gitServer}>
                  <button className="btn btn-success">Github Server</button>
                </a>
              ) : (
                ""
              )}

              <a href={project?.liveLink}>
                <button className="btn btn-primary">live link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
