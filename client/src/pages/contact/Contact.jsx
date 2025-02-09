import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const url = "http://localhost:4000";

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const { name, from, message } = formData;
    try {
      const res = await axios.post(`${url}/api/email/send`, {
        name,
        from,
        message,
      });
      console.log(res.data.message);

      if (res.status === 200) {
        setFormData({
          name: "",
          from: "",
          message: "",
        });
        setMessage(res.data.message);
        setError(null);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        setError(message || "An error occured");
      }
    }
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Thanks for taking the time to reach out.</h1>

        <form onSubmit={handleSendEmail}>
          <div className="pair-elements">
            <div className="input-element">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>

            <div className="input-element">
              <span>Email</span>
              <input
                type="email"
                name="from"
                value={formData.from}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>
          </div>

          <div className="input-element">
            <span>Message</span>
            <textarea
              name="message"
              id=""
              value={formData.message}
              onChange={handleChange}
              rows="10"
            ></textarea>
          </div>

          <button>Send</button>
          {error && <p className="error">{error}</p>}
          {message && <p className="success">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
