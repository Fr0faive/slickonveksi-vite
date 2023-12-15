import Button from "../Elements/Button";
import { Link } from "react-router-dom";

const HeroLayout = () => {
  return (
    <div className="hero min-h-screen bg-[#FFF0E7] isolate px-6 pt-0 lg:px-8">
      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <div className="py-20 hero-content max-w-screen-2xl flex-col grow lg:flex-row items-center rounded-lg">
        <div className="md:mx-7 ml-2 mr-2 w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-black">
            Slickonveksi.
          </h1>
          <p className="pt-6 text-black text-xl text-justify">
            Temukan gaya dan kenyamanan dengan koleksi terbaik kami dari produk
            konveksi. Slickonveksi membawa sentuhan eksklusif dan keunggulan
            kualitas ke dalam setiap potongan pakaian kami. Dibuat dengan teliti
            oleh para ahli konveksi kami, setiap produk menjadi manifestasi gaya
            dan fungsionalitas.
          </p>
          <Link to={"/product"}>
            <Button children="Pesan Sekarang" />
          </Link>
        </div>
        <div className="bg-[#FFD7C3] rounded-b-full rounded-t-[700px] w-1/2 flex justify-center">
          <img
            src="./assets/hero-img.png"
            className="max-w-full max-h-fit mx-10 hidden md:inline"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;
