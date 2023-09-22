import SectionHeader from "../../../components/sectionHeader";
import TrendCard from "./trendCard";

export default function Trending() {
  return (
    <section className="w-full flex justify-center items-center bg-[#07070c] py-20">
        <div className="w-[1161px]">
            <SectionHeader
                name="TRENDING"
                title='Trending Now'
                description='Discover the Latest Trends and Stay Ahead of the Curve.'
            />
            <div className="flex justify-between items-center py-16">
                <TrendCard
                    imageurl="trend1.jpg"
                    name="Warrior Queen"
                    promoprice="15,000 Tsh"
                    actualprice="20,000 Tsh"
                />
                <TrendCard
                    imageurl="trend2.jpg"
                    name="Basketball 2K2"
                    promoprice="15,000 Tsh"
                    actualprice="20,000 Tsh"
                />
                <TrendCard
                    imageurl="trend3.jpg"
                    name="MotorCross Race Deluxe"
                    promoprice="15,000 Tsh"
                    actualprice="20,000 Tsh"
                />
                <TrendCard
                    imageurl="trend4.jpg"
                    name="Special Forces: Dark Ops"
                    promoprice="15,000 Tsh"
                    actualprice="20,000 Tsh"
                />
            </div>
        </div>
    </section>
  )
}
