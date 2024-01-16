import Image from 'next/image';

import Banner from "@/app/components/Banner";
import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";

import Logo from "../assets/images/Logo XL.png";
import Restaurants from "../assets/data/restaurants.json"
import PhotoSocial from "../assets/data/photoSocial.json"

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
        <section>
            <div className="flex items-center justify-center gap-20 mt-52">
                <div className="flex flex-col gap-5">
                    <h1 className="text-7xl uppercase font-bebas">Yummi Nouilles</h1>
                    <span className="font-semibold text-lg mb-2">Les nouilles les plus <span className="text-orange-700">yummy</span> de tout Paris</span>
                    <Cta text="Click & Collect"></Cta>
                </div>
                <div>
                    <Image src={Logo} alt="Yummi-Nouilles-Logo"/>
                </div>
            </div>
        </section>
       <section>
           <h2 className="underline decoration-orange-700 decoration-2 underline-offset-4 font-bebas text-2xl text-center mb-10">Nos adresses</h2>
           <div className="flex justify-center gap-28">
               {Restaurants && Restaurants.map((restaurant, index) => {
                   return(
                       <div key={index}>
                           <img src={restaurant.image} alt={restaurant.name}/>
                           <h3 className="font-bold">{restaurant.name}</h3>
                           <p className="font-medium">{restaurant.adress}</p>
                           <p className="font-medium">{restaurant.city}</p>
                       </div>
                   )
               })}
           </div>
       </section>
        <Banner/>
        <section className="px-10 text-center">
            <h2 className="underline decoration-orange-700 decoration-2 underline-offset-4 font-bebas text-2xl text-center mb-10">
                Notre Savoir-faire
            </h2>
            <p className="font-medium">
                Depuis près de 10 ans maintenant, nous partageons avec vous les meilleures recettes. Nos plats ont tous été
                conçus, et affinés au fil des années et des goûts. Nous vous apportons le meilleur de l’Asie de l’Est en plein coeur de
                Paris. Chaque année, nous reprenons tous nos plats pour les améliorer, les modifier et qu’ils vous plaisent toujours
                plus. Nous espérons que vous vous régalerez en dégustant nos plats.
            </p>
        </section>
        <section className="flex flex-col items-center">
            <h2 className="underline decoration-orange-700 decoration-2 underline-offset-4 font-bebas text-2xl text-center mb-10">
                Retrouvez nous sur les réseaux Sociaux
            </h2>
            <div className="flex gap-16 flex-wrap max-w-6xl justify-center">
                {
                    PhotoSocial && PhotoSocial.map(photo => {
                        return(
                            <img src={photo} alt={photo}/>
                        )
                    })
                }
            </div>

        </section>
        <section className="px-10 text-center">
            <h2 className="underline decoration-orange-700 decoration-2 underline-offset-4 font-bebas text-2xl text-center mb-10">
                Contactez-nous
            </h2>
            <p className="font-medium">
                Vous souhaitez nous poser une question, nous faire un feedback, ou tout simplement nous contacter ?<br/>
                Écrivez-nous à <strong className="hover:cursor-pointer"><a href="mailto:yummy@noodles.fr">yummy@noodles.fr</a></strong> ou appelez nous au <strong>01 13 86 23 42</strong>
            </p>
        </section>
        <Footer></Footer>
    </main>
  )
}
