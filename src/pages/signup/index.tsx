import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <section className="flex justify-center bg-[#11111b]">
      <div className="w-[50%] h-screen relative">
        <div className="w-full h-full top-0 absolute bg-black/50" />
        <img src="login-sect.jpg" className="imgrender" alt="" />
      </div>
      <div className="w-[50%] flex justify-center items-center h-screen bg-[url('/login-bg.png')] bg-cover bg-no-repeat">
        <div className="w-[70%]">
          <div className="flex flex-col items-center gap-5">
            <span className="introheading-1 pb-5 block">SIGNUP</span>
            <span className={`introheading-2 leading-[3.75rem]`}>
              Customer SignUp
            </span>
            <span className="descr-1">
              Porttitor porttitor in orci, cursus parturient dictumst amet, ante
              sagittis. Morbi vulputate nibh arcu id integer diam platea.
            </span>
            <div className="flex flex-col items-center gap-y-5 w-full">
              <input
                type="text"
                name=""
                id=""
                className="w-full px-4 py-2"
                placeholder="Username or Email Address"
                required
              />
              <input
                type="password"
                name=""
                id=""
                className="w-full px-4 py-2"
                placeholder="Password"
                required
              />
              <span className="descr-1 flex justify-start w-full text-primary cursor-pointer text-xs font-medium">
                Forgot Password?
              </span>
              <button type="submit" className="viewallbtn w-full">
                Sign Up
              </button>
            </div>
            <div className="descr-1">
              <span>
                Have an account ? {""}
                <Link to="/login">
                  <span className="text-primary font-medium cursor-pointer">
                    Sign In!
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
