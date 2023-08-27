/* eslint-disable react/jsx-key */
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
const Works = () => {
  return (
    <>
    <div className="work__filters">
      {projectsNav.map((item, index) => {
        return (
          <span className="work__item" key={index}>
            {item.name}
          </span>
        );
      })}
    </div>
    <div className="work__container container grid">
        {projectsData.map((item)=> {
            return <WorkItems item={item} key={item.id}/>
        })}
    </div>
    </>
  );
};

export default Works;
