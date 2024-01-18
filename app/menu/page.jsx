import Image from "next/image";

import Banner from "@/app/components/Banner";
import Contact from "../components/Contact";
import Logo from "../assets/images/Logo XL.png";
import AllMeals from '../assets/data/menu.json';
export default function PageMenu(){
    return(
        <section className="mt-10 flex flex-col gap-10">
            <Banner />
            <h2 className="font-bebas text-5xl text-center mb-10">Menu</h2>
            <div className="bg-white mx-8 flex flex-col items-center p-8">
                <Image alt="Logo_Yummy_Nouilles" src={Logo} className="w-16"/>
                {AllMeals && AllMeals.map((meal, index) =>(
                    <div className="text-center flex flex-col gap-6" key={index}>
                        <h4 className="underline decoration-orange-700 decoration-2 underline-offset-4 font-bebas text-2xl mt-4">{meal.title}</h4>
                        <p className="text-sm">{meal.meals[0]}</p>
                        <p className="text-sm">{meal.meals[1]}</p>
                        <p className="text-sm">{meal.meals[2]}</p>
                    </div>
                ))}
            </div>
            <Contact/>
        </section>
    )
}