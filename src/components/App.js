import React, { useState, useEffect } from "react";
import Description from "./Description";
import Menu from "./Menu";
import Loading from "./Loading";

export default function App() {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

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

  //handle click function
  function displayJD(ind) {
    setValue(ind);
  }

  //display job company
  const companyDisplay = jobData.map((menu, index) => {
    return (
      <Menu
        menu={menu}
        key={index}
        index={index}
        displayJD={displayJD}
        value={value}
      />
    );
  });

  return (
    <div>
      <h1 className="title">Job Description</h1>
      <div className="main-con">
        <div className="menu-con">{companyDisplay}</div>
        <Description jobData={jobData} value={value} />
      </div>
    </div>
  );
}
