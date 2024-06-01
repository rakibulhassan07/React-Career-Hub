
const Job = ({job}) => {

    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job;
    return (
        <div >
            <img src={logo} alt="" />
            <h2 className="text-base font-extrabold ">{job_title}</h2>
            <p className="text-xl font-semibold ">{company_name}</p>
            <div className="flex gap-4 ">
                <div className="p-2 border-2 border-sky-500 rounded-lg">{remote_or_onsite}</div>
                <div className="p-2 border-2 border-sky-500 rounded-lg">{job_type}</div>
            </div>
            <div className="flex gap-4 ">
                <div className="flex " > <img src="/src/assets/Frame.png" alt="" /> {location}</div>
                <div  className="flex "> <img src="/src/assets/Frame (1).png" alt="" />{salary}</div>
            </div>
            <button className="btn btn-primary">View Details</button>
   
        </div>
    );
};

export default Job;