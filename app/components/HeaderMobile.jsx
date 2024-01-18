'use client'
import Link from "next/link";
import Image from "next/image";
import IconMneu from "../assets/icons/bars-solid (1).svg"
import { usePathname } from "next/navigation";
import Logo from "../assets/images/Logo XL.png"
import {useEffect, useState} from "react";


const navLink = [
    { name: 'Accueil', href:"/home"},
    { name: 'Menu', href:"/menu"},
    { name: 'Contact', href:"/contact"}
]
export default function HeaderMobile(){
    // underline Active link
    const pathname = usePathname();
    const [isActiveMenu, setIsActiveMenu] = useState('false')

    // Function to display inline menu or icon menu depens of the screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    function handleScreenWidth(){
        setScreenWidth(window.innerWidth)
    }

    // function to toogle the mobile menu
    function toogleMenu(){
        setIsActiveMenu(!isActiveMenu)
    }
    // set the screen width each time that the screen is resize
    useEffect(() => {
        window.addEventListener('resize', handleScreenWidth)
        return () =>{
            window.removeEventListener('resize', handleScreenWidth)
        }
    }, []);
    return(
        <div>
            <nav className="px-5 ">
                <div className="flex gap-3 justify-between items-center">
                    <Link href="/home"><Image alt="Logo-Yummi-Nouilles" src={Logo} className="w-16 mr-8"/></Link>
                    {/*Sow inline menu or icon menu depends of the screen width */}
                    {screenWidth <= 1024 ?
                        <div>
                            <Image alt="Icon-Menu" src={IconMneu} onClick={toogleMenu} className="w-6"/>
                        </div>
                        :
                        <div className="flex items-center gap-12 ">
                            {navLink.map((link, index) =>{
                                const isActive =pathname.startsWith(link.href)
                                return(
                                    <Link href={link.href} key={index} className={isActive ? "underline" +
                                        " decoration-orange-700" +
                                        " decoration-2 underline-offset-4 items-center uppercase font-bebas text-2xl" : "items-center uppercase font-bebas text-2xl"}
                                    >
                                        {link.name}
                                    </Link>
                                )})}
                        </div> }
                </div>
                {/*Menu Mobile*/}
                <div className={!isActiveMenu ? "flex flex-col items-center gap-12 absolute top-0 left-0" +
                    " bg-neutral-200 pt-8" +
                    " w-full" +
                    " h-screen" : "hidden"}>
                    {navLink.map((link, index) =>{
                        const isActive =pathname.startsWith(link.href)
                        return(
                            <Link href={link.href} key={index} className={isActive ? "underline" +
                                " decoration-orange-700" +
                                " decoration-2 underline-offset-4 items-center uppercase font-bebas text-2xl" : "items-center uppercase font-bebas text-2xl"}
                                onClick={toogleMenu}
                            >
                                {link.name}
                            </Link>
                        )

                    })}
                </div>
            </nav>
        </div>
    )
}