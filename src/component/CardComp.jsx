import { useEffect, useState } from "react";
import Button from "./Elements/Button/index";

const CardComp = (props) => {
  const { img, name, text, price, onClick, stock } = props;
  const [textStok, setTextStok] = useState("");
  useEffect(() => {
    if (stock > 0 && stock < 5) {
      setTextStok("kurang dari 5");
    } else if (stock > 5) {
      setTextStok("tersedia");
    } else {
      setTextStok("habis");
    }
  }, []);
  return (
    <div className="card w-[400px] bg-[#FFF0E7] shadow-xl backdrop-blur-md">
      <figure className="px-10 pt-10 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl max-h-[9rem] object-cover object-center group-hover:opacity-75"
        />
      </figure>
      <div className="card-body text-gray-900">
        <p className="font-mono text-end text-xs">Stok: {textStok} </p>
        <h3 className="card-title">{name}</h3>
        <p className="text-justify mb-4">{text.substring(0, 120)}...</p>
        <div className="flex justify-evenly gap-32 items-center">
          <p className="mt-1 text-lg font-medium text-gray-900">
            Harga Rp{price}
          </p>
          <Button children="Add to Cart" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default CardComp;
