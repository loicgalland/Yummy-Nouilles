export default function ItemMenu({title, meals}){
    return(
        <div>
            <h4 className="underline decoration-orange-700 decoration-2 underline-offset-4 font-bebas text-xl text-center">{title}</h4>
            {meals && meals.map(meal =>{
                <p>{meal}</p>
            })}
        </div>
    )
}