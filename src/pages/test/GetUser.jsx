import Layout from "../../layouts/userTypes/Layout";
import { useState, useEffect } from "react";

export default function GetUser() {
  const [users, setUsers] = useState([]);
  const [merchantIdInput, setMerchantIdInput] = useState("");
  const [merchantData, setMerchantData] = useState([]);

  const fetchAllUsers = async () => {
    try {
      const response = await fetch("/api/users/getAllUsers/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const usersWithFormattedDate = data.users.map((user) => ({
        ...user,
        created_date: new Date(user.created_date).toLocaleString("en-SG", {
          timeZone: "Asia/Singapore", // Replace with your desired timezone
        }),
      }));

      setUsers(usersWithFormattedDate);
    } catch (error) {
      console.log("Error fetching users:", error);

      // Log or display the response text for debugging
    }
  };

  const handleMerchantIdChange = (event) => {
    setMerchantIdInput(event.target.value);
  };

  const handleMerchantSubmit = (event) => {
    event.preventDefault();
    if (!merchantIdInput) {
      alert("Why empty da?");
    } else {
      getMerchant();
    }
  };

  const getMerchant = async () => {
    try {
      const response = await fetch("/api/merchants/get-merchant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          merchantId: merchantIdInput,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error fetching merchant: ${response.status}`);
      }

      const foundMerchant = await response.json();
      setMerchantData(foundMerchant.foundMerchant);
      console.log("Merchant: ", merchantData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <Layout>
      <h1>This is where we test the get users</h1>
      <div>
        <h2>These are all the user emails</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user._id}, {user.email}, {user.name},{user.created_date}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2> Merchant</h2>
        <form onSubmit={handleMerchantSubmit}>
          <input
            placeholder="Merchant Id"
            value={merchantIdInput}
            onChange={handleMerchantIdChange}
          />
          <button type="submit">Get Merchant</button>
        </form>

        {merchantData || merchantData.length > 0 ? (
          <div>
            <p>Merchant ID: {merchantData._id}</p>
            <p>Merchant Name: {merchantData.storeName}</p>
          </div>
        ) : (
          <p>No merchant data available.</p>
        )}
      </div>
    </Layout>
  );
}
