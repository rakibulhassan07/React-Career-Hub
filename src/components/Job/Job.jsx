import { Link } from "react-router-dom";

const Job = ({job}) => {

    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-4 ">
                <div className="p-2 border-2 border-sky-500 rounded-lg">{remote_or_onsite}</div>
                <div className="p-2 border-2 border-sky-500 rounded-lg">{job_type}</div>
            </div>
            <div className="flex gap-4 ">
                <div className="flex " > <img src="/src/assets/Frame.png" alt="" /> {location}</div>
                <div  className="flex "> <img src="/src/assets/Frame (1).png" alt="" />{salary}</div>
            </div>

          <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
            
          </div>
        </div>
      </div>
    );
};

export default Job;


