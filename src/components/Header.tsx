import "../style/Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="headerComponent">
      <Link to="/">
        <h1>Triton Search</h1>
      </Link>
      <button onClick={() => navigate("/user-profile")}>User Profile</button>
    </div>
  );
}
