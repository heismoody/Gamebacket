import { Outlet } from "react-router";
import NavigationBar from "../../components/navigation/navigationBar";
import Footer from "../../components/footer/footer";
import { ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <>
        <NavigationBar/>
          <ScrollRestoration/>
            <Outlet/>
        <Footer/>
    </>
  )
}
