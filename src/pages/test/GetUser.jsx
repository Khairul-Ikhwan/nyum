import Layout from "../../layouts/userTypes/Layout";
import { useState, useEffect } from "react";

export default function GetUser() {
  const [users, setUsers] = useState([]);
  const [userIdInput, setUserIdInput] = useState("");
  const [cartData, setCartData] = useState([]);

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
      console.error("Error fetching users:", error);

      // Log or display the response text for debugging
    }
  };

  const getCart = async () => {
    try {
      const response = await fetch("/api/users/get-cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-id": userIdInput,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const retrievedCart = await response.json();

      setCartData(retrievedCart);
      console.log("Cart Data: ", cartData);
    } catch (error) {
      console.error("Error fetching user's cart", error);
    }
  };

  const handleUserIdChange = (event) => {
    setUserIdInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    getCart();
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
        <form onSubmit={handleSubmit}>
          <input
            placeholder="User Id"
            value={userIdInput}
            onChange={handleUserIdChange}
          ></input>
          <button type="submit">Get Cart</button>
        </form>
      </div>
      <div>
        <h2>User&apos;s Cart</h2>
        {cartData.cart &&
        cartData.cart.products &&
        cartData.cart.products.length > 0 ? (
          <table
            style={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th>Merchant Name</th>
                <th>Product Name</th>
                <th>Variant Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartData.cart.products.map((product) => (
                <tr key={product._id}>
                  <td>{product.merchantName}</td>
                  <td>{product.productName}</td>
                  <td>{product.variants[0].variantName}</td>
                  <td>{product.variants[0].quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </Layout>
  );
}
