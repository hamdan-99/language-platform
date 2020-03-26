import React from "react";

const UserLogin = () => {
  return (
    <div>
      <form>
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="Email"
          
        />
        <input
          type="password"
          placeholder="Password"
          
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default UserLogin;
