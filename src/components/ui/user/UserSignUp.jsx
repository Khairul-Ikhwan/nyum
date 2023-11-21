import { useState } from "react";
import Layout from "../../../layouts/userTypes/Layout";

export default function UserSignUp() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your form submission logic here
    if (checkPasswordInput()) {
      // Passwords match, proceed with submission
      setMessage("form submitted");

      // Add additional logic to handle form submission
      console.log("Form submitted with data:", formData);
    } else {
      // Passwords don't match, handle accordingly
      console.log("Passwords do not match");
      setMessage("Passwords do not match");
    }
  };

  const checkPasswordInput = () => {
    return formData.password === formData.confirmPassword;
  };

  return (
    <Layout>
      <h1>User Sign Up</h1>

      <div style={{ width: "250px" }}>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            placeholder="Name"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            placeholder="Email Address"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            placeholder="Password"
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            placeholder="Confirm Password"
            required
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{message}</p>
        <p>{JSON.stringify(formData)}</p>
      </div>
    </Layout>
  );
}
