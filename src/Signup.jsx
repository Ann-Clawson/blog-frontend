import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Name: <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="mb-3">
          Email: <input name="email" type="email" />
        </div>
        <div className="mb-3">
          Password: <input name="password" type="password" />
        </div>
        <div className="mb-3">
          Password confirmation: <input name="password_confirmation" type="password" />
        </div>
        <button className="btn btn-light btn-outline-dark" type="submit">
          Sign Up!
        </button>
      </form>
    </div>
  );
}
