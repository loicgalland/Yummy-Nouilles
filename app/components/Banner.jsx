import Cta from "@/app/components/Cta";
export default function Banner(){
    return(
        <div className="flex flex-col h-56 bg-orange-700 justify-center items-center gap-6">
            <p className="font-semibold text-white text-xl">Commandez maintenant !</p>
            <Cta text="click & collect"/>
        </div>
    )
}