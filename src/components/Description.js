import React from 'react';

export default function Description(props){
    console.log(props)
    const {jobData, value} = props
    const {title, company, duties} = jobData[value]
    // const {title, dates, duties, company} = props.job
    // const jd = duties.map((duty)=>{
    //     return (<p className='job-description'>{duty}</p>)
    // })
    return (
        <section>
            <h2 className='job-title'>{title}</h2>
            <span className='company-name'>{company}</span>
            <p className='duration'></p>
            <div className='job-description-con'>
                {duties.map(duty=>{
                    return (<p key={duty}>{duty}</p>)
                })}
            </div>

            <button className='more-btn'>More Info</button>
        </section>
    )
}