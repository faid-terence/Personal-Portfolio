import "./qualification.css";
import { useState } from "react";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualificcation section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__secctions">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__active"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Engineering</h3>
                <span className="qualification__subtitle">
                  University of Rwanda
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Technical Team Lead</h3>
                <span className="qualification__subtitle">ATLP- Andela</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  edx (Havard-Online)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">Techly Africa</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Math-Physics and Computer Science
                </h3>
                <span className="qualification__subtitle">Lycee de Kigali</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data new">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">Andela Rwanda</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
