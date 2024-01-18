import Banner from "@/app/components/Banner";
import ContactSection from "@/app/components/ContactSection";
import Restaurants from "../assets/data/restaurants.json";

export default function Contact(){
    return(
        <section className="mt-10 flex flex-col gap-10">
            <Banner />
            <div className="text-center">
                <div>
                    <h2 className="font-bebas text-4xl mb-10">Nos adresses</h2>
                    {Restaurants && Restaurants.map(restaurant =>{
                        return(
                            <div className="mb-5 ">
                                <h4 className="font-bold text-lg">{restaurant.name}</h4>
                                <p>{restaurant.adress}</p>
                                <p>{restaurant.city}</p>
                                <p>{restaurant.phone}</p>
                                <p>{restaurant.opening}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <ContactSection />
        </section>
    )
}