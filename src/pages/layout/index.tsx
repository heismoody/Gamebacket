import { Outlet } from "react-router";
import NavigationBar from "../../components/navigation";
import Footer from "../../components/footer/footer";
import { ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative">
      <NavigationBar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
}
