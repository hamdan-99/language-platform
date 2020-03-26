import React, {useState} from "react";

const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email,
      password
    }
    setUser(userData)
  }
  return (
    <div>
      <form
        onSubmit = {handleSubmit}
      >
        <h2>LOGIN</h2>
        <input
            type="text"
            placeholder="Email"
            onChance = { event => setEmail(event.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            onChance = { event => setPassword(event.target.value)}
        />
        <button
            type="submit"> LOGIN </button>
      </form>
    </div>
  );
};

export default UserLogin;
