import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter} from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find us on</h2>
      <div className="join join-vertical flex *:bg-base-100 *:justify-start">
        <button className="btn join-item "><FaFacebook/> Facebook</button>
        <button className="btn join-item "><FaSquareXTwitter /> X</button>
        <button className="btn join-item "><FaInstagram/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;