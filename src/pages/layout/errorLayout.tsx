import Footer from "../../components/footer/footer";
import NavigationBar from "../../components/navigation/navigationBar";
import PageNotFound from "../errorPage";

export default function ErrorLayout() {
  return (
    <>
      <NavigationBar/>
        <PageNotFound/>
      <Footer/>
    </>
  )
}
