'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../assets/images/Logo XL.png"


const navLink = [
    { name: 'Accueil', href:"/home"},
    { name: 'Menu', href:"/menu"},
    { name: 'Contact', href:"/contact"}
]
export default function Header(){
    const pathname = usePathname();

    return(
        <div>
            <nav className="px-5">
                <ul className="flex gap-3 items-center uppercase font-bebas text-2xl">
                    <li><Link href="/"><Image alt="Logo-Yummi-Nouilles" src={Logo} className="w-16 mr-8"/></Link></li>
                    {navLink.map((link, index) =>{
                        const isActive =pathname.startsWith(link.href)
                        return(
                            <Link href={link.href} key={index} className={isActive ? "underline" +
                                " decoration-orange-700" +
                                " decoration-2 underline-offset-4" : ""}>
                                {link.name}
                            </Link>
                            )

                    })}
                </ul>
            </nav>
        </div>
    )
}