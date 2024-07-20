import { useState } from "react";

const statesOfIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state.length === 0) {
      alert("Please select valid State");
      return;
    }
    if (
      formData.name.length === 0 ||
      formData.email.length === 0 ||
      formData.phone.length === 0 
    ) {
      alert("Please fill all the fields");
      return;
    }
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen">
      <form
        className="flex flex-col max-w-3xl gap-6 px-6 py-3 mx-5 md:mx-auto my-4 border-2 border-gray-700 rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          id="name"
          type="text"
          className="pl-1 border-2 border-gray-400"
          placeholder="Name*"
          onChange={handleChange}
        />
        <input
          id="email"
          type="email"
          className="pl-1 border-2 border-gray-400"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          id="phone"
          type="number"
          className="pl-1 border-2 border-gray-400"
          placeholder="Phone*"
          onChange={handleChange}
        />
        <select id="state" onChange={handleChange}  className="pl-1 border-2 border-gray-400">
          <option value="">Select State</option>
          {statesOfIndia.map((stateName) => (
            <option key={stateName} value={stateName}>
              {stateName}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-[#08137a] text-white w-32 rounded-sm self-center">Submit</button>
      </form>
    </div>
  );
}
