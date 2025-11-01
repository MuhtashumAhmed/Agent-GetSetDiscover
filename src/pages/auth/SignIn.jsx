import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { toast } from "react-toastify";
import { LuEye, LuEyeOff } from "react-icons/lu";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast.success("Login successful!");
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[389px] px-6 lg:px-3">
      <div className="mb-10">
        <img src="logo.png" alt="Logo" className="h-12 object-contain -ml-3" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-text-color font-quicksand tracking-[1px] mb-[28px]">
        Welcome Back 👋
      </h1>
      <p className="text-secondary-text-color font-roboto text-xs sm:text-[15px] mb-8">
        Today is a new day. It's your day. Sign in to become a millionaire.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label className="block mb-1 text-[16px] text-[#0C1421]">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            autoCorrect="off"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 px-4 rounded-xl border text-myBlack  ${
              errors.email ? "border-red-500" : "border-[#D4D7E3]"
            } bg-[#F7FBFF]`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block mb-1 text-[16px]  text-[#0C1421]">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="MyPassword"
            value={formData.password}
            onChange={handleChange}
            className={`w-full h-12 px-4 rounded-xl text-myBlack border ${
              errors.password ? "border-red-500" : "border-[#D4D7E3]"
            } bg-[#F7FBFF]`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[45px] text-gray-500"
          >
            {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <Link
          to="/forgot"
          target="_blank"
          className="text-Link text-right block hover:underline"
        >
          Forgot Password?
        </Link>

        <Button type="submit" className="w-full text-xl text-white">
          Sign In
        </Button>
      </form>

      <p className="text-center mt-6 text-myBlack">
        Don't you have an account?{" "}
        <Link to="/signup" target="_blank" className="text-Link hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
