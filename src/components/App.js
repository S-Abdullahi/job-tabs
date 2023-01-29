import React, { useState, useEffect } from "react";
import Description from "./Description";
import Menu from "./Menu";
import Loading from "./Loading";

export default function App() {
  const [jobData, setJobData] = useState([]);
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0)

  async function fetchData() {
    try {
      const url = "https://course-api.com/react-tabs-project";
      const res = await fetch(url);
      const data = await res.json();
      setJobData(data);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <h1 className="title">Job Description</h1>
        <Loading />
      </>
    );
  }

  const company = jobData.map((data) => data.company);

  function displayJD(comp) {
    const specficJD = jobData.findIndex((data) => data.company === comp);
    setValue(specficJD)
       }


  const companyDisplay = company.map((comp) => {
    return <Menu comp={comp} key={comp} displayJD={displayJD} />;
  });

  return (
    <div>
      <h1 className="title">Job Description</h1>
      <div className="main-con">
        <div>{companyDisplay}</div>
        <Description jobData={jobData} value={value}/>
      </div>
    </div>
  );
}
