import Image from "next/image";

const CarLayout = (props:any)=>{
    return(
     
                <div className="sm:flex sm:flex-col gap-1 bg-sky-800 p-4 rounded-2xl">
                    <Image src={props.CarImg} alt={props.CarName} width={600} height={600}  />
                    <h1 className="text-center text-white font-semibold text-xl mt-2">{props.CarName}</h1>
                    <p className="text-white text-center font-bold">{props.CarPrice}</p>
                    <p className="text-white text-center font-semibold">{props.CarReview}</p>
                </div>
    )
}

export default CarLayout