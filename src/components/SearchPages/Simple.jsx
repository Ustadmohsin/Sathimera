import React, { useState } from "react";
import { motion } from "framer-motion";
import Searchnav from "../Searchnav";

function SimplePage() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [religion, setReligion] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Parameters:", { gender, age, religion });
  };

  return (
    <>
      <div>
        <Searchnav />
        <motion.div
          className="container mx-auto p-4 md:p-6 bg-green-200 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-2xl md:text-3xl font-bold mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Simple Search
          </motion.h1>

          <motion.form
            onSubmit={handleSearch}
            className="max-w-md mx-auto space-y-6 bg-white p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Gender Selection */}
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Age Input */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
              />
            </div>

            {/* Religion Selection */}
            <div>
              <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                Religion
              </label>
              <select
                id="religion"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
              >
                <option value="">Select Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-500 transition"
              >
                Search
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
}

export default SimplePage;
