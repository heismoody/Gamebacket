import SectionHeader from "../../../components/sectionHeader";
import TrendCard from "./trendCard";

export default function Trending() {
  return (
    <section className="w-full flex justify-center items-center bg-[#07070c] py-20">
        <div className="w-[1161px] mobile:w-[90%]">
            <SectionHeader
                name="TRENDING"
                title='Trending Now'
                description='Discover the Latest Trends and Stay Ahead of the Curve.'
                url=""
            />
            <div className="grid grid-cols-4 gap-x-[34px] mobile:gap-2 mobile:grid-cols-2 py-16">
                <TrendCard
                    imageurl="trend1.jpg"
                    name="Warrior Queen"
                    promoprice = {15000}
                    actualprice = {20000}
                />
                <TrendCard
                    imageurl="trend2.jpg"
                    name="Basketball 2K2"
                    promoprice = {15000}
                    actualprice = {20000}
                />
                <TrendCard
                    imageurl="trend3.jpg"
                    name="MotorCross Race Deluxe"
                    promoprice = {15000}
                    actualprice = {20000}
                />
                <TrendCard
                    imageurl="trend4.jpg"
                    name="Special Forces: Dark Ops"
                    promoprice = {15000}
                    actualprice = {20000}
                />
            </div>
        </div>
    </section>
  )
}
