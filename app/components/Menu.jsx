import Image from "next/image";
import ItemMenu from "@/app/components/ItemMenu";


export default function Menu({Logo, meals, mealsTitle, mealsList}){
    return(
        <div className="bg-white flex flex-col items-center mx-8 p-5 gap-8">
            <Image alt="logo_Yummy_Nouilles" src={Logo} className="w-16"/>
            {meals.map(meal =>{
                <ItemMenu title={mealsTitle} meals={mealsList}/>
            })}
        </div>
    )
}