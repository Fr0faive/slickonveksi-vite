

const CardComp = (props) => {
    const { img, title, text } = props;
    return (
        <div className="card w-96 bg-white/30 shadow-xl backdrop-blur-md">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl max-w-[6rem]" />
            </figure>
            <div className="card-body items-center text-center text-gray-900">
                <h2 className="card-title">{title}</h2>
                <p>{text}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default CardComp;