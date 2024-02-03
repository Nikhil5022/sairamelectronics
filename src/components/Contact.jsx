import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send the data to a server or perform other actions)
    console.log("Form submitted:", formData);
    // Clear the form after submission
    setFormData({
      message: "",
    });
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40 py-6 pt-10 mt-16">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 m-8 sm:mb-0">
          <p className="text-2xl font-semibold mb-2">Have Questions?</p>
          <p className="mb-4 font-thin text-lg">
            Please feel free to call or email us, or use our contact form to get
            in touch with us. We look forward to hearing from you!
          </p>
          <p className="mb-2">
            Emergency? available 24/7 <br />
            <a href="tel:7075558908" className="text-sky-500">
              Click here to call
            </a>{" "}
            or Dial +91 707-555-8908
          </p>

          <p className="mb-2">Send Us Mail:</p>
          <a
            href="mailto:sairamelectronics7@gmail.com"
            className="text-blue-500 hover:underline"
          >
            sairamelectronics7@gmail.com
          </a>
        </div>
        <div className="w-full sm:w-1/2" style={{ backgroundColor: "#FFFFFF" }}>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
              style={{ display: "flex", alignItems: "center" }}
            >
             
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
