import React from "react";
import { useInput } from "../hooks/useInput";

const CustomForm = () => {
  // see how we use our custom hook 'useInput' below in several hooks
  // Due to array destructuring the name doesn't need to match
  // the custom hook. Variables just need to be in the correct
  // position :[value, setValue, handleChanges]
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");

  //function that resets our inputs after submission
  const resetValues = e => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <form onSubmit={resetValues}>
      <input
        className="username-text"
        id="username"
        name="username"
        // updates the input as we type
        onChange={e => handleUsername(e.target.value)}
        placeholder="Username"
        type="text"
        // assigns the changes to a particular variable
        value={username}
      />
      <input
        className="password-test"
        id="password"
        name="password"
        onChange={e => handlePassword(e.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <input
        className="email-text"
        id="email"
        name="email"
        onChange={e => handleEmail(e.target.value)}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
