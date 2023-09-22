import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import BackHomeBtn from "../../components/buttons/backHome";

export default function PageNotFound() {
   const error = useRouteError();
  return (
    <section className="flex justify-center items-center bg-[url('/404-bg.jpg')] bg-cover bg-no-repeat relative">
      <div className="w-full h-full bg-black/60 top-0 absolute"/>
        <div className="w-[1161px] flex flex-col gap-y-5 items-start relative py-44">
            <span className="introheading-2 text-[62px]">404</span>
            <span className="introheading-2 text-2xl">Page Not Found</span>
            <p className="descr-1 text-xl">
              {
                isRouteErrorResponse(error) 
                ? "Sorry, we couldn't find the page you are looking for."
                : "Oops! It seems we've encountered an unexpected hiccup in the system."
              }
              </p>
            <Link to="/">
              <BackHomeBtn/>
            </Link>
        </div>
    </section>
  )
}
