import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const VerifyLawyer = () => {
  const [FormData, setFormData] = useState({
    registration_number: "",
    year_of_registration: "",
    council_name: "",
  });

  const [isModalOpen, setModalOpen] = useState(false); // New state for modal visibility

  const checkRequestId = async (requestID) => {
    // ... (your existing code for checkRequestId)
  };

  const checkValidationOfCertification = async () => {
    // ... (your existing code for checkValidationOfCertification)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
    checkValidationOfCertification();
  };

  const onChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="abc">
      <div className="mt-8">
        <center>
          <table className="w-8/12 bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Certificate number</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-16 border-b">John Doe</td>
                <td className="py-2 px-16 border-b">123456</td>
                <td className="py-2 px-4 border-b">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
                    NOT VERIFIED
                  </span>
                </td>
                <td className="py-2 px-16 border-b">Probono</td>
                <td className="py-2 px-16 border-b">
                  <button
                    type="button"
                    className="text-blue-500 hover:underline focus:outline-none"
                    onClick={handleOpenModal}
                  >
                    Certificate
                  </button>
                </td>
              </tr>
              {/* You can add more rows dynamically based on your data */}
            </tbody>
          </table>
        </center>
      </div>

      {/* Your Tailwind Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg">
              <div className="text-right">
                <button
                  type="button"
                  className="inline-block text-red-500 font-semibold mr-4 text-2xl hover:text-red-700 focus:outline-none"
                  onClick={handleCloseModal}
                >
                  <FontAwesomeIcon icon={faTimes} />
                  
                </button>
              </div>

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Certificate Details
                </h3>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PSZ7cXhUJJXft1Fos-xO4WApQfEUQuK35Q&usqp=CAU"
                  alt=""
                />
                <center>
                  <h1>LICENSE NO. : WERWE23R232s</h1>
                </center>

                <div className="flex justify-center space-x-4 mt-12 mx-auto">
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-green"
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-red"
                  >
                    Reject
                  </button>
                </div>

                <button
                  type="button"
                  className="inline-block text-red-500 font-semibold hover:text-red-700 focus:outline-none"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default VerifyLawyer;
