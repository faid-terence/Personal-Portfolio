import React, { useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const projectsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalProjects = projectsData.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const visibleProjects = projectsData.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span className="work__item" key={index}>
            {item.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {visibleProjects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </>
  );
};

export default Works;
