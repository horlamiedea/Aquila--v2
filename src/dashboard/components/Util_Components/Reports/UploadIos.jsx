import React from "react";
import { BsCloudUpload } from "react-icons/bs";
import { useStateContext } from "Context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

const UploadIos = () => {
  
  const { reports } = useStateContext();

  const navigate = useNavigate();

  return (
    <div
      
      className=" flex justify-center shadow-lg shadow-secondary-500/500  w-[48%]  p-4 h-80 rounded-md bg-neutral-50 border border-x-grey border-y-grey"
    >
      {!reports?.data?.data?.ios && (
        <div onClick={() => navigate("/upload-scan")} className="flex flex-col justify-center items-center ">
          <BsCloudUpload className="text-4xl " />
          <p>Click here to upload an IOS file</p>
        </div>
      )}
      {reports?.data?.data?.ios && (
        <div className="p-5 m-5">
          <p>File Name :{reports?.data?.data?.ios?.FILE_NAME} </p>
          <p>Hash : {reports?.data?.data?.ios?.SIZE}</p>
          <p>Sha5 : {reports?.data?.data?.ios?.MD5}</p>
          <p>App Name : {reports?.data?.data?.ios?.APP_NAME}</p>
          <Link to="/dashboard/report-ios">
          <button className="bg-secondary p-2 text-white">View Full Report</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UploadIos;