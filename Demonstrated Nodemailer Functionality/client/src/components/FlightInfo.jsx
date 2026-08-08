import React from "react";
import {useState} from "react";

function flightInfo() {
  const [formData, setFormData] = useState({
    flightNumber: "",
    flightDate: "",
    departureCity: "",
    arrivalCity: "",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.text();
    alert("Mail sent successfully!!!");
    
  };


return (

    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
    <form onSubmit={handleSubmit}
    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-500">
      Flight Information
    </h2>
        <label className="block mb-1 font-medium text-gray-700">Enter Flight Number:</label>
        <input type="text" value={formData.flightNumber} onChange={handleChange} name="flightNumber"
        className="w-full border border-gray-300 rounded-md p-2 mb-4" />
        <label className="block mb-1 font-medium text-gray-700">Enter Flight Date:</label>
        <input type="date" value={formData.flightDate} onChange={handleChange} name="flightDate"
        className="w-full border border-gray-300 rounded-md p-2 mb-4" />
        <label className="block mb-1 font-medium text-gray-700">Departure City:</label>
        <input type="text" value={formData.departureCity} onChange={handleChange} name="departureCity"
        className="w-full border border-gray-300 rounded-md p-2 mb-4" />
        <label className="block mb-1 font-medium text-gray-700">Arrival City:</label>
        <input type="text" value={formData.arrivalCity} onChange={handleChange} name="arrivalCity"
        className="w-full border border-gray-300 rounded-md p-2 mb-4" />
        <label className="block mb-1 font-medium text-gray-700">Email:</label>
        <input type="email" value={formData.email} onChange={handleChange} name="email"
        className="w-full border border-gray-300 rounded-md p-2 mb-4" />
        <button type = "submit"
        className="w-full bg-purple-500 text-white py-2 rounded-md">Submit
        </button>
        </form>
    </div>
 
)
}
export default flightInfo;
