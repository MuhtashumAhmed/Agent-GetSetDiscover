import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    toast.info("OTP sent to your email!");
    navigate("/otp");
  };

  return (
    <div className="px-4 sm:px-0 max-w-[434px]">
      <button onClick={() => navigate("/")} className="mb-4">
        <IoArrowBackCircleSharp className="text-2xl text-orange-500" />
      </button>

      <div className="mb-8">
        <img src="/logo.png" alt="Logo" className="h-12 object-contain -ml-3" />
      </div>
      <h1 className="text-[26px] font-semibold font-poppins mb-[28px] text-myBlack ">Forgot Password</h1>
      <p className="text-[#838383] text-[15px] mb-8">
        Enter the email associated with your account and
we’ll send an email with code to reset your password
      </p>
      <form onSubmit={handleSubmit}>
        <label className="text-base mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          autoComplete="off"
          autoCorrect="off"
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          className="h-[48px] rounded-[12px] border border-[#D4D7E3] text-myBlack px-4 text-sm w-full"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <Button type="submit"  className="w-full text-xl text-white mt-[40px]">
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
