import { Outlet } from "react-router-dom";

const SignInLayout = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFFFFF]">
      <div className="w-full max-w-8xl flex flex-col lg:flex-row lg:items-center lg:min-h-screen">
        
        {/* Left side → dynamic content */}
        <div className="w-full mx-auto md:w-2/3 flex items-center justify-center px-0 py-0 lg:py-0">
          <Outlet />  {/* Screen will render here */}
        </div>

        {/* Right side image */}
        <div className="hidden lg:flex lg:w-[100%] h-screen items-center justify-center pr-4">
          <img
            src="formImage.jpg"
            alt="Decorative"
            className="w-[100dwv] h-[90dvh] rounded-2xl object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default SignInLayout;
