import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
const handleApplyJob =()=>{
  saveJobApplication(idInt);
  toast('You have applied successfully')
}

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-10 ">Job Details</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border rounded-xl md:col-span-3 p-12">
          <span className="text-xl font-bold">Job Description:</span>{" "}
          {job.job_description}
          <p className="mt-6">
            <span className="text-xl font-bold">Job Responsibility:</span>
            {job.job_responsibility}
          </p>
          <p className="mt-6">
            <span className="text-xl font-bold">Educational Requirements:</span><br />
            {job.educational_requirements}
          </p>
          <p className="mt-6">
            <span className="text-xl font-bold">Experiences:</span><br />
            {job.experiences}
          </p>
        </div>
        <div className="border rounded-xl bg-cyan-200"><h2 className="text-xl font-bold ml-12 mt-4  ">Job Details <hr className="mt-4" /></h2>
        
        <div className="mt-8 ml-4">
             <div  className="flex mb-3"> <img src="/src/assets/Frame (2).png" alt="" /><span className="text-sm font-bold">Salary :</span> {job.salary}</div>
        <div className="flex " > <img src="/src/assets/job bag.png" alt="" /> <span className="text-sm font-bold">Job Title :</span> {job.job_title}</div>
        </div>
        
        <h2 className="text-xl font-bold ml-12 mt-4  ">Contact Information <hr className="mt-4" /></h2>
        <div className="mt-8 ml-4">
             <div  className="flex mb-3"> <img src="/src/assets/phone.png" alt="" /><span className="text-sm font-bold">Phone :</span>{job.contact_information.phone}</div>
        <div className="flex mb-3 " > <img src="/src/assets/mail.png" alt="" /> <span  className="text-sm font-bold">Email :</span> {job.contact_information.email}</div>
        <div className="flex" > <img src="/src/assets/location.png" alt="" /> <span  className="text-sm font-bold">Address :</span> {job.contact_information.address}</div>
        </div> 
        <button onClick={handleApplyJob} className=" mt-12 w-full btn btn-secondary">Apply Now</button>
        </div>
      </div>
       <ToastContainer />
    </div>
  );
};

export default JobDetails;
