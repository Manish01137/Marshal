import { Link } from "react-router-dom";
const FloatingHireButton = () => (
  <Link to="/hire" className="fixed bottom-8 right-8 z-40 btn-primary shadow-xl shadow-indigo-500/30 text-sm py-3 px-5">
    Hire Developers
  </Link>
);
export default FloatingHireButton;
