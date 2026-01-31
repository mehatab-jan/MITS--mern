import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSignup}>
        <h2>Signup</h2>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Signup</button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
