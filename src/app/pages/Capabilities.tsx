import Card from "../components/ui/Card";
import { IPropsCard } from "../components/ui/Card";
const HeroText = () => {
    const dataCard: IPropsCard = {
        props:{
        title: "Cloud Computing",
        titleBgColor: "cyan",
        learn:"Learn Text",
        svgFile:"NO SVG"
        }

    }
    return (
        <section className="h-screen w-screen bg-orange bg-opacity-80 mx-auto   ">
            <div className = "flex flex-row md:grid md:grid-cols-3 md:grid-rows-2 justify-center mx-auto w-10/12 h-full gap-4 py-2">
                <Card props ={dataCard.props}  />
                <Card props ={dataCard.props}  />
                <Card props ={dataCard.props}  />
                <Card props ={dataCard.props}  />

            
            </div>
            
            
        </section>


    )
}

export default HeroText;