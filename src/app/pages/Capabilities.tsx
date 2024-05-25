import Card from "../components/ui/Card";
import { IPropsCard } from "../components/ui/Card";
const HeroText = () => {
    


    
    const cardData:IPropsCard[] = [
        {title: "Cloud Computing",
        subTitle:"Leverage the power of the cloud to grow your business",
        titleBgColor: "text-blue",
        learn:"Learn more",
        svgFile:"NO SVG"},
        {title: "Web Development",
        subTitle:"Move your business to the Web, reach out to millions of customers",
        titleBgColor: "text-orange",
        learn:"Learn Text",
        svgFile:"NO SVG"},
        {title: "Data Enginering ",
        subTitle:"Create sophisticated pipelines to connect your data",
        titleBgColor: "text-red",
        learn:"Learn Text",
        svgFile:"NO SVG"},
        {title: "Enterprise Performance Management",
        subTitle:"We are specialist in implementing automated planning solutions",
        titleBgColor: "text-orange",
        learn:"Learn Text",
        svgFile:"NO SVG"},
        {title: "Business Inteligence",
        subTitle:"Finf the data insights that cal help you to outpace the competitors",
        titleBgColor: "text-red",
        learn:"Learn Text",
        svgFile:"NO SVG"},
        {title: "Mobile Development",
        subTitle:"Connect with mobile users through mobile applications",
        titleBgColor: "text-blue",
        learn:"Learn Text",
        svgFile:"NO SVG"},
    
    ]



    return (
        <section className="h-max w-screen bg-orange bg-opacity-80 mx-auto   ">
            <div className = "flex flex-col sm:grid   sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 justify-center mx-auto w-10/12 h-max gap-4 py-2">
                {
                cardData.map( (item,index) =>{

                    return(
                        <Card 
                            key = {index}
                            title={item.title}
                            subTitle={item.subTitle}
                            titleBgColor={item.titleBgColor}
                            learn={item.learn}
                            svgFile={item.svgFile}
                            
                            />
                    )
                }


                    
                )
            }
            
            </div>
            
            
        </section>


    )
}

export default HeroText;