import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Location from '../assets/icons/location-dot-solid.svg'

const icons = [
    {
        name: 'instagram',
        image: Instagram,
        link: "https://www.instagram.com/"
    },
    {
        name: 'Facebook',
        image: Facebook,
        link: "https://www.facebook.com/?locale=fr_FR"
    },
    {
        name: 'Location',
        image: Location,
        link: "https://www.google.fr/maps/@45.7348544,4.83328,15z?entry=ttu"
    }
]

import Image from "next/image";
export default function Footer(){
    return(
        <footer className="flex w-full justify-end text-white bg-black h-44 items-center px-5 gap-5">
            {icons.map((icon) =>{
                return (
                    <a href={icon.link}><Image alt={icon.name} src={icon.image} className="w-5" target="_blank"/></a>
                )
            })}
        </footer>
    )
}