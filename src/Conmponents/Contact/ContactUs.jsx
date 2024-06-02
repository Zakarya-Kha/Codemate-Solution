import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input type="text" placeholder="First Name" className="w-full md:w-1/2 p-3 border rounded-md" />
          <input type="text" placeholder="Last Name" className="w-full md:w-1/2 p-3 border rounded-md" />
        </div>
        <input type="email" placeholder="Business Email" className="w-full p-3 border rounded-md mb-4" />
        <div className="flex items-center border rounded-md mb-4">
          <select className="p-3 border-r">
            <option>+966</option>
            {/* Add more options as needed */}
          </select>
          <input type="text" placeholder="Phone Number" className="w-full p-3" />
        </div>
        <input type="text" placeholder="Organization" className="w-full p-3 border rounded-md mb-4" />
        <textarea placeholder="Message" className="w-full p-3 border rounded-md mb-4"></textarea>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">May we provide you with personalized communications about select products and services?</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">I have read the <a href="#" className="text-blue-500">Privacy Policy</a> and agree to its terms</span>
          </label>
        </div>
        <button className="w-full p-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-md">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
