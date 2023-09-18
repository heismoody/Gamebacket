import { Outlet } from "react-router";
import NavigationBar from "../../components/navigation/navigationBar";
import Footer from "../../components/footer/footer";

export default function Layout() {
  return (
    <>
        <NavigationBar/>
            <Outlet/>
        <Footer/>
    </>
  )
}
