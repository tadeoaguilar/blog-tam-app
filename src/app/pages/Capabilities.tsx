import Card from "../components/ui/Card";
import { IPropsCard } from "../components/ui/Card";
const HeroText = () => {
    


    
    const cardData:IPropsCard[] = [
        {title: "Cloud Computing",
        subTitle:"Leverage the power of the cloud to grow your business",
        titleBgColor: "text-blue",
        learn:"Learn more",
        svgFile:"/shield.svg"},
        {title: "Web Development",
        subTitle:"Move your business to the Web, reach out to millions of customers",
        titleBgColor: "text-orange",
        learn:"Learn Text",
        svgFile:"/WebSphere.svg"},
        {title: "Data Enginering ",
        subTitle:"Create sophisticated pipelines to connect your data",
        titleBgColor: "text-red",
        learn:"Learn Text",
        svgFile:"/data.svg"},
        {title: "Financial Solutions",
        subTitle:"We are specialist in implementing automated planning solutions",
        titleBgColor: "text-orange",
        learn:"Learn Text",
        svgFile:"/LogoFinance.svg"},
        {title: "Business Inteligence",
        subTitle:"Finf the data insights that cal help you to outpace the competitors",
        titleBgColor: "text-red",
        learn:"Learn Text",
        svgFile:"/LogoBI.svg"},
        {title: "Mobile Development",
        subTitle:"Connect with mobile users through mobile applications",
        titleBgColor: "text-blue",
        learn:"Learn Text",
        svgFile:"/LogoMobile.svg"},
    
    ]



    return (
        <section className="h-full w-screen sm:h-screen bg-grape mx-auto flex flex-col items-center justify-center ">
            <div className = "h-full grid grid-cols-1 grid-rows-6   sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 justify-center mx-auto w-10/12  gap-8  my-4 drop-shadow-xl ">
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