import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Description(props) {
  const { jobData, value } = props;
  const { title, company, duties } = jobData[value];
  return (
    <section>
      <h2 className="job-title">{title}</h2>
      <span className="company-name">{company}</span>
      <p className="duration"></p>

      {duties.map((duty, index) => {
        return (
          <div className="job-description-con">
            <FaAngleDoubleRight className="icon" />
            <p key={index} className="job-description">
              {duty}
            </p>
          </div>
        );
      })}

      <button className="more-btn">More Info</button>
    </section>
  );
}
