import { useRef, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu"; // 👈 eye icons
import FileUpload from "../../components/FileUpload";
import { Link } from "react-router-dom";
import { FaFileContract } from "react-icons/fa";
import CustomCheckbox from "../../components/MyCustomCheckbox";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [formChecks, setFormChecks] = useState({
    confirmInfo: false,
    agreeTerms: false,
  });
  const [profileImage, setProfileImage] = useState(null); // actual file
  const [files, setFiles] = useState({
    businessDoc: null,
    cnicDoc: null,
    agencyLogo: null,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
    password: "",
    confirmPassword: "",
    company: "",
    companyType: "",
    ntn: "",
    companyPhone: "",
    city: "",
    country: "",
    website: "", // optional
  });

  const [errors, setErrors] = useState({});

  const requiredFields = [
    "name",
    "email",
    "phone",
    "referral",
    "password",
    "confirmPassword",
    "company",
    "companyType",
    "ntn",
    "companyPhone",
    "city",
    "country",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: only numbers
    if (name === "phone" || name === "companyPhone") {
      if (!/^\d*$/.test(value)) return; // allow only digits
    }

    //  numbers and dashes only
    if (name === "ntn") {
      if (!/^[0-9-]*$/.test(value)) return; // allow digits and "-"
    }

    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error while typing
  };

  const validate = () => {
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        // newErrors[field] = "This field is required";
        newErrors[field] = `${field} is required`;
        // console.log(field);
      }
    });


    // Phone & Company Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 11 digits";
    }

    if (!formData.companyPhone.trim()) {
      newErrors.companyPhone = "Company phone is required";
    } else if (!/^\d{11}$/.test(formData.companyPhone)) {
      newErrors.companyPhone = "Company phone must be exactly 11 digits";
    }


    // === pasword validation
    if (formData.password.trim()) {
      if (formData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }
    }

    if (formData.confirmPassword.trim()) {
      if (formData.confirmPassword.length < 6) {
        newErrors.confirmPassword = "Confirm Password must be at least 6 characters";
      }
    }

    // Match check (only if both are entered and valid length)
    if (
      formData.password.trim() &&
      formData.confirmPassword.trim() &&
      formData.password === formData.confirmPassword &&
      formData.password.length >= 6
    ) {
      // if no error (do nothing)
    } else if (
      formData.password.trim() &&
      formData.confirmPassword.trim() &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }




    if (!formChecks.confirmInfo) {
      newErrors.confirmInfo = "Please confirm information is correct";
    }
    if (!formChecks.agreeTerms) {
      newErrors.agreeTerms = "You must agree to Terms & Conditions";
    }

    // Profile Image validation
    if (!profileImage) {
      newErrors.profileImage = "Profile image is required";
    }

    // business profile 3 dropzones
    // file validations
    if (!files.businessDoc) {
      newErrors.businessDoc = "Business document is required";
    }
    if (!files.cnicDoc) {
      newErrors.cnicDoc = "CNIC/Passport is required";
    }

    // last cehck boxes

    if (!formChecks.confirmInfo) newErrors.confirmInfo = "required"
    if (!formChecks.agreeTerms) newErrors.agreeTerms = "required"

    // logo optional → no validation
    return newErrors;
  };

  // Checkbox toggle
  const handleCheckboxChange = (key) => {
    setFormChecks((prev) => ({ ...prev, [key]: !prev[key] }));
    setErrors((prev) => ({ ...prev, [key]: "" })); // clear error
  };

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState("/formProfile.jpg");

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file); // keep actual file
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      toast.warn("Kindly fill all the required fields before submitting.")
      setErrors(validationErrors);
      return;
    }
    const finalData = {
      ...formData,
      ...formChecks,
      profileImage, // actual File object
      files, //  all uploaded files together
    };

    toast.success("Form Submitted.")

    console.log("Submitted Data:", { finalData });
    // console.log(" Submitted Data:", { ...formData, ...formChecks });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row pr-0 lg:pr-8 bg-myWhite-color">
      {/* Left Side - Form */}
      <div className="w-full lg:w-3/5 py-6  md:px-12 lg:overflow-y-auto">
        <div className="  px-5 rounded-xl  bg-myWhite-color">
          {/* Logo */}
          <div className="mb-7 text-center">
            <img
              src="logo.png"
              alt="logo"
              className="h-[70px] w-[220px] object-contain mx-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5 text-center">
            Welcome To Get Set Discover 👋
          </h1>
          <p className="text-gray-600 mb-7 text-sm md:text-base text-center mx-auto w-full md:w-[480px]">
            Simply sign up using valid credentials. Providing false information
            may result in your account being banned.
          </p>
          {/* profile */}
          {/* <div className="relative flex mb-7 items-center w-[95px] h-[95px] rounded-full border-[#007AFC] border-[1.48px]"> */}
          <div className={`relative flex mb-7 items-center w-[95px] h-[95px] rounded-full  border-[1.48px] 
          ${errors.profileImage ? "border-red-400" : "border-[#007AFC]"}
          `}>
            {/* Profile Preview */}
            <img
              src={preview}
              alt="profile"
              className="w-full h-full rounded-full object-cover"
            />

            {/* Hidden Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Change Photo Button */}
            <button
              type="button"
              onClick={handleButtonClick}
              // className="absolute bottom-0 right-0 w-[34px] h-[34px] flex items-center justify-center rounded-full bg-[#007AFC] text-white"
              className={`absolute bottom-0 right-0 w-[34px] h-[34px] flex items-center justify-center rounded-full ${errors.profileImage ? "bg-red-400" : "bg-[#007AFC]"} text-white`}
              title="Change photo"
            >
              <svg
                width="16.59099006652832"
                height="16.59099006652832"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.24484 0.82974C5.16328 0.82974 5.08506 0.86214 5.02739 0.91981L2.47578 3.47143L2.33081 4.05129L2.91067 3.90632L5.46229 1.3547C5.51996 1.29703 5.55236 1.21882 5.55236 1.13726C5.55236 1.0557 5.51996 0.977481 5.46229 0.91981C5.40462 0.86214 5.3264 0.82974 5.24484 0.82974ZM4.63955 0.531969C4.80008 0.371436 5.01781 0.28125 5.24484 0.28125C5.47187 0.28125 5.6896 0.371436 5.85013 0.531969C6.01066 0.692501 6.10085 0.91023 6.10085 1.13726C6.10085 1.36428 6.01066 1.58201 5.85013 1.74255L3.2448 4.34788C3.20965 4.38302 3.16561 4.40796 3.11739 4.42001L2.02041 4.69426C1.92695 4.71762 1.82809 4.69024 1.75998 4.62212C1.69186 4.554 1.66448 4.45514 1.68784 4.36169L1.96208 3.2647C1.97414 3.21648 1.99907 3.17245 2.03422 3.1373L4.63955 0.531969ZM0.275153 1.10399C0.429446 0.949693 0.638712 0.863012 0.856915 0.863012H2.77663C2.92809 0.863012 3.05088 0.985796 3.05088 1.13726C3.05088 1.28872 2.92809 1.4115 2.77663 1.4115H0.856915C0.784181 1.4115 0.714426 1.4404 0.662995 1.49183C0.611564 1.54326 0.58267 1.61301 0.58267 1.68575V5.52518C0.58267 5.59792 0.611564 5.66767 0.662995 5.7191C0.714426 5.77053 0.784181 5.79943 0.856915 5.79943H4.69635C4.76908 5.79943 4.83884 5.77053 4.89027 5.7191C4.9417 5.66767 4.97059 5.59792 4.97059 5.52518V3.60546C4.97059 3.454 5.09338 3.33122 5.24484 3.33122C5.3963 3.33122 5.51908 3.454 5.51908 3.60546V5.52518C5.51908 5.74338 5.4324 5.95265 5.27811 6.10694C5.12382 6.26124 4.91455 6.34792 4.69635 6.34792H0.856915C0.638712 6.34792 0.429446 6.26124 0.275153 6.10694C0.120861 5.95265 0.0341797 5.74338 0.0341797 5.52518V1.68575C0.0341797 1.46754 0.12086 1.25828 0.275153 1.10399Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-sm md:text-base"
          >
            {/* ============  Account Details  ================== */}
            <div className="w-full rounded-[12.75px] border text-[#717182] border-[#0000001A] pb-5">
              <div className="flex items-center gap-x-[6.99px] pl-[21px] pt-[20px] mb-[20px]">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1043 16.1367V14.6784C14.1043 13.9048 13.797 13.163 13.2501 12.616C12.7031 12.069 11.9612 11.7617 11.1877 11.7617H6.81266C6.03911 11.7617 5.29725 12.069 4.75027 12.616C4.20329 13.163 3.896 13.9048 3.896 14.6784V16.1367"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00016 8.84505C10.611 8.84505 11.9168 7.53922 11.9168 5.92839C11.9168 4.31755 10.611 3.01172 9.00016 3.01172C7.38933 3.01172 6.0835 4.31755 6.0835 5.92839C6.0835 7.53922 7.38933 8.84505 9.00016 8.84505Z"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h2 className="font-semibold text-[#0A0A0A] ">
                  Account Details
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-[13px] px-[21px] text-[12.3px]">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A] ">
                    Full Name (as per CNIC) *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name "
                    // className="h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none outline-none"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 ${errors.name ? "outline-red-400 outline-1" : "outline-none"}  border-none `}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs">{errors.name}</span>
                  )}
                </div>
                {/* Email */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A]">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none  ${errors.email ? "outline-red-400 outline-1" : "outline-none"} `}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>
                {/* Phone */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A]">Phone Number *</label>
                  <input
                    type="text"
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Phone Number"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.phone ? "outline-red-400 outline-1" : "outline-none"
                      }`}
                    onChange={handleChange}
                    value={formData.phone}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">{errors.phone}</span>
                  )}
                </div>
                {/* Referral */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A]">Referral Code *</label>
                  <input
                    type="text"
                    name="referral"
                    placeholder="Referral Code"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none  ${errors.referral ? "outline-red-400 outline-1" : "outline-none"} `}
                    onChange={handleChange}
                  />
                  {errors.referral && (
                    <span className="text-red-500 text-xs">
                      {errors.referral}
                    </span>
                  )}
                </div>
                {/* Password */}
                <div className="relative flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A]">Password *</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none  ${errors.password ? "outline-red-400 outline-1" : "outline-none"} `}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[36px] text-gray-500"
                  >
                    {showPassword ? (
                      <LuEye size={14} />
                    ) : (
                      <LuEyeOff size={14} />
                    )}
                  </button>
                  {errors.password && (
                    <span className="text-red-500 text-xs">
                      {errors.password}
                    </span>
                  )}
                </div>
                {/* Confirm Password */}
                <div className="relative flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A]">
                    Confirm Password *
                  </label>
                  <input
                    type={confirmShowPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.confirmPassword ? "outline-red-400 outline-1" : "outline-none"}`}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setConfirmShowPassword(!confirmShowPassword)}
                    className="absolute right-3 top-[36px] text-gray-500"
                  >
                    {confirmShowPassword ? (
                      <LuEye size={14} />
                    ) : (
                      <LuEyeOff size={14} />
                    )}
                  </button>
                  {errors.confirmPassword && (
                    <span className="text-red-500 text-xs">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* =========== Company Detail ================= */}
            <div className="w-full rounded-[12.75px] border text-[#717182] border-[#0000001A] pb-5">
              <div className="flex items-center gap-x-[6.99px] pl-[21px] pt-[20px] mb-[20px]">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.625 16.8216V3.69661C4.625 3.30984 4.77865 2.93891 5.05214 2.66542C5.32563 2.39193 5.69656 2.23828 6.08333 2.23828H11.9167C12.3034 2.23828 12.6744 2.39193 12.9479 2.66542C13.2214 2.93891 13.375 3.30984 13.375 3.69661V16.8216H4.625Z"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.62516 9.53125H3.16683C2.78006 9.53125 2.40912 9.6849 2.13563 9.95839C1.86214 10.2319 1.7085 10.6028 1.7085 10.9896V15.3646C1.7085 15.7514 1.86214 16.1223 2.13563 16.3958C2.40912 16.6693 2.78006 16.8229 3.16683 16.8229H4.62516"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.375 7.34375H14.8333C15.2201 7.34375 15.591 7.4974 15.8645 7.77089C16.138 8.04438 16.2917 8.41531 16.2917 8.80208V15.3646C16.2917 15.7514 16.138 16.1223 15.8645 16.3958C15.591 16.6693 15.2201 16.8229 14.8333 16.8229H13.375"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5415 5.15625H10.4582"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5415 8.07422H10.4582"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5415 10.9883H10.4582"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5415 13.9062H10.4582"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h2 className="font-semibold text-[#0A0A0A] ">
                  Company / Agency Details
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-[13px] px-[21px] text-[12.3px]">
                {/* Company Name */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A]  ">
                    Company / Agency Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company / Agency Name"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.company ? "outline-red-400 outline-1" : "outline-none"}`}
                    onChange={handleChange}
                  />
                  {errors.company && (
                    <span className="text-red-500 text-xs">
                      {errors.company}
                    </span>
                  )}
                </div>
                {/* Company Type */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A] ">Company Type *</label>
                  <input
                    type="text"
                    name="companyType"
                    placeholder="Company Type"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.companyType ? "outline-red-400 outline-1" : "outline-none"}  `}
                    onChange={handleChange}
                  />
                  {errors.companyType && (
                    <span className="text-red-500 text-xs">
                      {errors.companyType}
                    </span>
                  )}
                </div>
                {/* NTN */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A] ">
                    Agency Tax Number (NTN) *
                  </label>
                  <input
                    type="text"
                    name="ntn"
                    placeholder="Agency Tax Number (NTN)"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.ntn ? "outline-red-400 outline-1" : "outline-none"} `}
                    onChange={handleChange}
                  />
                  {errors.ntn && (
                    <span className="text-red-500 text-xs">{errors.ntn}</span>
                  )}
                </div>
                {/* Company Phone */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A] ">
                    Company Phone Number *
                  </label>
                  <input
                    type="text"
                    name="companyPhone"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Company Phone Number"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.companyPhone ? "outline-red-400 outline-1" : "outline-none"
                      }`}
                    onChange={handleChange}
                    value={formData.companyPhone}
                  />
                  {errors.companyPhone && (
                    <span className="text-red-500 text-xs">{errors.companyPhone}</span>
                  )}
                </div>
                {/* City */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A] ">City *</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.city ? "outline-red-400 outline-1" : "outline-none"}`}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <span className="text-red-500 text-xs">{errors.city}</span>
                  )}
                </div>
                {/* Country */}
                <div className="flex flex-col">
                  <label className="font-semibold mb-2 text-[#0A0A0A] ">Country *</label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className={`h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none ${errors.country ? "outline-red-400 outline-1" : "outline-none"}`}
                    onChange={handleChange}
                  />
                  {errors.country && (
                    <span className="text-red-500 text-xs">
                      {errors.country}
                    </span>
                  )}
                </div>
                {/* Website */}
                <div className="flex flex-col md:col-span-2">
                  <label className="font-semibold mb-2 text-[#0A0A0A] ">
                    Website URL (Optional)
                  </label>
                  <input
                    type="text"
                    name="website"
                    placeholder="Website URL"
                    className="h-[32px] bg-[#F3F3F5] rounded-md px-3 border-none outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* =============== Business Verification =============== */}
            <div className="w-full rounded-[12.75px] border border-[#0000001A] pb-5">
              <div className="flex items-center gap-x-[6.99px] pl-[21px] pt-[20px] mb-[20px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1873 1.75391H4.62484C4.23806 1.75391 3.86713 1.90755 3.59364 2.18104C3.32015 2.45453 3.1665 2.82547 3.1665 3.21224V14.8789C3.1665 15.2657 3.32015 15.6366 3.59364 15.9101C3.86713 16.1836 4.23806 16.3372 4.62484 16.3372H13.3748C13.7616 16.3372 14.1325 16.1836 14.406 15.9101C14.6795 15.6366 14.8332 15.2657 14.8332 14.8789V5.39974L11.1873 1.75391Z"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.4585 1.75391V4.67057C10.4585 5.05735 10.6121 5.42828 10.8856 5.70177C11.1591 5.97526 11.5301 6.12891 11.9168 6.12891H14.8335"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.54183 6.85938H6.0835"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9168 9.77734H6.0835"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9168 12.6914H6.0835"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h2 className="font-semibold text-[#0A0A0A] ">
                  Business Verification
                </h2>
              </div>
              <div className="space-y-4 px-[21px]">
                {/* <div className={`space-y-4 px-[21px] ${errors.files && "bg-red-400" } `}> */}
                <FileUpload
                  name="businessDoc"
                  label="Upload Business Registration Document (PDF/JPG)"
                  accept={{ "application/pdf": [], "image/jpeg": [] }}
                  required
                  onFileSelect={(file, name) => {
                    setFiles((prev) => ({ ...prev, [name]: file }));
                    if (file) {
                      setErrors((prev) => {
                        const { [name]: removed, ...rest } = prev;
                        return rest;
                      });
                    }
                  }}
                  error={errors.businessDoc}
                />

                <FileUpload
                  name="cnicDoc"
                  label="Upload CNIC / Passport (Authorized Person)"
                  accept={{ "application/pdf": [], "image/jpeg": [] }}
                  required
                  onFileSelect={(file, name) => {
                    setFiles((prev) => ({ ...prev, [name]: file }));
                    if (file) {
                      setErrors((prev) => {
                        const { [name]: removed, ...rest } = prev;
                        return rest;
                      });
                    }
                  }}
                  error={errors.cnicDoc}
                />

                <FileUpload
                  name="agencyLogo"
                  label="Upload Agency Logo (Optional)"
                  accept={{ "image/png": [], "image/jpeg": [] }}
                  onFileSelect={(file, name) =>
                    setFiles((prev) => ({ ...prev, [name]: file }))
                  }
                />

              </div>
            </div>

            {/* ==========  Agreement ============= */}
            <div className="w-full rounded-[12.75px] border border-[#0000001A] pb-5  space-y-4">
              {/* Heading */}

              <div className="flex items-center gap-x-[6.99px] pl-[21px] pt-[20px] mb-[20px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8332 9.48991C14.8332 13.1357 12.2811 14.9587 9.24775 16.016C9.08891 16.0698 8.91638 16.0672 8.75921 16.0087C5.71859 14.9587 3.1665 13.1357 3.1665 9.48991V4.38574C3.1665 4.19236 3.24333 4.00689 3.38007 3.87015C3.51682 3.7334 3.70228 3.65658 3.89567 3.65658C5.354 3.65658 7.17692 2.78158 8.44567 1.67324C8.60015 1.54126 8.79666 1.46875 8.99984 1.46875C9.20302 1.46875 9.39953 1.54126 9.554 1.67324C10.83 2.78887 12.6457 3.65658 14.104 3.65658C14.2974 3.65658 14.4829 3.7334 14.6196 3.87015C14.7563 4.00689 14.8332 4.19236 14.8332 4.38574V9.48991Z"
                    stroke="#0A0A0A"
                    stroke-width="1.45833"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h2 className="font-semibold text-[#0A0A0A] ">
                  Agreement / Consent
                </h2>
              </div>
              <div className="pl-[21px] flex flex-col gap-y-[14px] ">

                {/* Checkbox 1 */}
                <CustomCheckbox
                  label="I confirm that the above information is correct."
                  checked={formChecks.confirmInfo}
                  onChange={() => handleCheckboxChange("confirmInfo")}
                  error={errors.confirmInfo}
                />

                {/* Checkbox 2 with links inside label */}
                <CustomCheckbox
                  label={
                    <>
                      I agree to the{" "}
                      <Link
                        to="#"
                        className="text-[#030213] font-semibold font-noto text-sm mx-0.5 underline"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="#"
                        className="text-[#030213] font-semibold font-noto text-sm mx-0.5 underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </>
                  }
                  checked={formChecks.agreeTerms}
                  onChange={() => handleCheckboxChange("agreeTerms")}
                  error={errors.agreeTerms}

                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#FF6600] hover:bg-orange-600 font-roboto text-[20px] text-myWhite-color  py-3 rounded-xl transition"
            >
              Sign Up
            </button>

            <p className="text-center text-lg text-secondary-text-color font-roboto ">
              Do you have an account?{" "}
              <Link to="/" className="text-Link hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Sticky Image */}
      <div className="hidden lg:flex items-center lg:w-[40%] sticky top-0 h-screen">
        <img
          src="formImage.jpg"
          alt="signup"
          className="w-full h-[90vh] object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default SignUp;
