import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const IssueCertificate = () => {
  const [certiId, setCertiId] = useState("");
  const [candName, setCandName] = useState("");
  const [courseName, setCourseName] = useState("Certified Blockchain Associate");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  const submitCertificate = (e) => {
    e.preventDefault();
    const newCertificate = {
      certiId,
      candName,
      courseName,
      grade,
      date,
    };

    addCertificateSubmit(newCertificate);
    toast.success("new certificate added");
    navigate("/");
  };

  const addCertificateSubmit = async (newCertificate) => {
    const res = await fetch("/api/certificates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCertificate),
    });
    return res;
  };

  return (
    <>
      <form onSubmit={submitCertificate}>
        <div className="bg-white h-[600px] w-[1000px] mt-[70px] ml-[400px] rounded-[30px] shadow-xl shadow-gray-600">
          <div className="ml-[350px] text-[30px]">
            <p className="pt-[30px]">ISSUE NEW CERTIFICATE</p>
          </div>

          <p className="ml-[25%] mt-[5%] text-[20px]">
            {" "}
            Select Course* :
            <select
              name="selco"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            >
              <option value="Certified Blockchain Associate" selected>
                Certified Blockchain Associate
              </option>
              <option value="Certified Ethereum Developer">
                Certified Ethereum Developer
              </option>
              <option value="Certified Hyperledger Fabric Developer">
                Certified Hyperledger Fabric Developer
              </option>
            </select>
          </p>

          <p className="ml-[25%] mt-[5%] text-[20px]">
            Certificate ID* :
            <input
              value={certiId}
              onChange={(e) => setCertiId(e.target.value)}
              type="text"
              name="id"
              required
              className="w-[350px] h-[40px] outline outline-slate-300 rounded-[10px]"
            />
          </p>

          <p className="ml-[25%] mt-[5%] text-[20px]">
            Candidate Name* :
            <input
              value={candName}
              onChange={(e) => setCandName(e.target.value)}
              type="text"
              required
              className="w-[350px] h-[40px] outline outline-slate-300 rounded-[10px]"
            />
          </p>

          <p className="ml-[25%] mt-[5%] text-[20px]">
            Select Grade* :
            <select
              name="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </p>
          <p className="ml-[25%] mt-[5%] text-[20px]">
            Issue Date* :
            <input
              type="date"
              name="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </p>

          <div className="ml-[450px] mt-[30px]">
            <button type="submit">
              ISSUE CERTIFICATE
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default IssueCertificate;
