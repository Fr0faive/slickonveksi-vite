import ButtonComp from "./ButtonComp";


const CardComp = (props) => {
    const { img, title, text, price } = props;
    return (
        <div className="card w-96 bg-white/30 shadow-xl backdrop-blur-md">
            
            <figure className="px-10 pt-10 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                <img src={img} alt="Shoes" className="rounded-xl max-h-[9rem] object-cover object-center group-hover:opacity-75" />
            </figure>
            <div className="card-body text-gray-900">
                <h3 className="card-title">{title}</h3>
                <p className="text-justify mb-4">{text.substring(0, 120)}...</p>
                <div className="flex justify-evenly gap-9 items-center">
                    <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
                    <ButtonComp children="Add to Cart"/>
                </div>
            </div>
        </div>
    );
}

export default CardComp;