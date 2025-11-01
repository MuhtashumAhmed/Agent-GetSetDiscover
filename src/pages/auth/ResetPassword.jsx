import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate new password
    if (!formData.newPassword) {
      newErrors.newPassword = "Password is required";
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = "Password must be at least 6 characters";
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // If no errors → success
    if (Object.keys(newErrors).length === 0) {
      toast.success("Password reset successful!");
      navigate("/");
    }
  };

  return (
    <div className="max-w-[434px] px-3 md:px-0">
      {/* Back button */}
      <button onClick={() => navigate("/otp")} className="mb-4">
        <IoArrowBackCircleSharp className="text-2xl text-orange-500" />
      </button>

      {/* Logo */}
      <div className="mb-12">
        <img src="/logo.png" alt="Logo" className="h-12 object-contain -ml-3" />
      </div>

      {/* Title */}
      <h1 className="text-[30px] font-semibold font-poppins mb-[28px] text-[#0C1421]">
        Create New Password
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* New Password */}
        <div className="relative flex flex-col mb-4">
          <label className="text-base mb-2 font-manrope text-[#1B1B1B]">
            Password
          </label>
          <input
            type={isNewPassword ? "text" : "password"}
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            onChange={handleChange}
            autoComplete="off"
            autoSave="off"
            className={`h-[48px] rounded-[12px] border px-4 text-myBlack text-sm ${errors.newPassword ? "border-red-500" : "border-[#D4D7E3]"
              }`}
          />
          <button
            type="button"
            onClick={() => setIsNewPassword(!isNewPassword)}
            className="absolute right-3 top-[50px] text-gray-500"
          >
            {isNewPassword ? <LuEye size={14} /> : <LuEyeOff size={14} />}
          </button>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative flex flex-col">
          <label className="text-base mb-2 font-manrope text-[#1B1B1B]">
            Confirm Password
          </label>
          <input
            type={isConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="off"
            autoSave="off"
            className={`h-[48px] rounded-[12px] border px-4 text-myBlack text-sm ${errors.confirmPassword ? "border-red-500" : "border-[#E6E6E6]"
              }`}
          />
          <button
            type="button"
            onClick={() => setIsConfirmPassword(!isConfirmPassword)}
            className="absolute right-3 top-[50px] text-gray-500"
          >
            {isConfirmPassword ? <LuEye size={14} /> : <LuEyeOff size={14} />}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full text-xl text-white mt-[40px]">
          Create
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
