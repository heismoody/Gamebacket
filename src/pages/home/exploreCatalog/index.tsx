import CardDetail from "../homeComponents/cardDetail";

export default function ExploreCatalog() {
  return (
    <section className="w-full flex justify-center items-center relative overflow-x-clip">
        <div className="w-[1161px] h-[430px] flex justify-center items-start z-50">
            <div className="w-[60%] h-[460px] ">
                <img src="catalog-sect.jpg" alt="" className="imgrender"/>
            </div>
            <div className="bg-[url('bg-catalog.png')] w-[40%] p-16">
                <CardDetail
                name="CATALOG"
                title="Explore More Our Catalog"
                description="Unlock a World of Gaming Excellence – Delve into the Rich Tapestry of Our Extensive Catalog, Where Thrills Await at Every Click. Browse, Choose, and Conquer!"
                btnName="Learn More"
                catalog
                />
            </div>
        </div>
        <div className="absolute -bottom-44 -right-12 z-0">
          <img src="shape-ellipse.png" alt="" />
        </div>
    </section>
  )
}
