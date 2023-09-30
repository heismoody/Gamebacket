import SectionHeader from "../../../components/sectionHeader";
import AddToCartCard from "../homeComponents/addToCartCard";

export default function AccessoriesSection() {
  return (
    <section className="w-full flex justify-center items-center">
        <div className="w-[1161px] py-24">
            <SectionHeader
                name="ACCESSORIES"
                title="Gaming accessories"
                description="Fantasize your gaming experience. Right now !"
                url=""
            />
            <div className="w-full flex justify-between items-center py-10">
                <AddToCartCard
                    imageurl="https://ae01.alicdn.com/kf/H4017813ab3c04c05ad8ff84fce3a0ba9w/Red-Dragon-Gaming-Keyboard-Pad-Msi-RGB-Computer-Mouse-Pad-Gamer-Desk-Mat-Mousepad-Pc-Gamer.jpg"
                    name="Keyboard Mat"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="https://m.media-amazon.com/images/I/61pDShoLXqL._AC_UF894,1000_QL80_.jpg"
                    name="Gaming Mouse"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="product-flights.jpg"
                    name="Ps4 Pad"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="https://assets.xboxservices.com/assets/e7/28/e728989f-75bb-41e4-826b-2465e675f80e.jpg?n=Accessory-Hub_Content-Placement-0_XBX-Spectra-Infinity-Enhanced-Wired-Controller_788x444.jpg"
                    name="PC Xbox Controller"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="dummypost7.jpg"
                    name="Ps4 Console"
                    actualprice="40,000 Tsh"
                />
                <AddToCartCard
                    imageurl="https://m.media-amazon.com/images/I/51p8AEub6BS._AC_UF894,1000_QL80_.jpg"
                    name="Headset"
                    actualprice="40,000 Tsh"
                />
            </div>
        </div>
    </section>
  )
}
