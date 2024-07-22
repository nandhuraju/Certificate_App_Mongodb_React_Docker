import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const { certiId } = useParams();
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/certificates/${certiId}`);
        const data = await response.json();
        setCertificate(data);
      } catch (error) {
        console.error("Error fetching the certificate:", error);
      }
    };

    fetchCertificate();
  }, [certiId]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {certificate ? (
        <div className="bg-white p-10 rounded-lg shadow-lg border-8 border-yellow-500 max-w-3xl">
          <div className="border-b-4 border-yellow-500 mb-4 pb-2">
          <h1 className="text-4xl font-bold text-center">Kerala Blockchain Academy</h1>
            <h1 className="text-4xl font-bold text-center">Certificate of Achievement</h1>
          </div>
          <div className="text-center mb-6">
            <p className="text-2xl font-semibold mb-2">This is to certify that</p>
            <p className="text-3xl font-bold mb-2">{certificate.candName}</p>
            <p className="text-2xl font-semibold mb-4">has successfully completed the</p>
            <p className="text-2xl font-bold mb-2">{certificate.courseName}</p>
            <p className="text-2xl font-semibold mb-4">course with a grade of</p>
            <p className="text-3xl font-bold text-green-600 mb-2">{certificate.grade}</p>
            <p className="text-xl mb-2">Issued on: {certificate.date}</p>
          </div>
          <div className="text-center">
            <p className="text-lg">Certificate ID: {certificate.certiId}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600">Loading certificate details...</p>
      )}
    </div>
  );
};

export default View;
