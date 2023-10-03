import Footer from "../../components/footer/footer";
import NavigationBar from "../../components/navigation";
import PageNotFound from "../errorPage";

export default function ErrorLayout() {
  return (
    <>
      <NavigationBar />
      <PageNotFound />
      <Footer />
    </>
  );
}
