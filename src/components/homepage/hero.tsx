import Image from "next/image";

const Hero = () => {
  return (
    <div className="--HERO CONTAINER-- flex flex-col md:flex-row items-center justify-evenly h-full">
      <div className="--LEFT CONTENT-- w-full md:w-[40%] order-2 md:order-1 md:px-0 px-4 mb-12 md:mb-0 flex flex-col gap-5">
        <h1 className="text-3xl sm:text-5xl font-bold">Rumah jurnal</h1>
        <p>
          Rumah Jurnal UII Dalwa adalah sebuah platform berisi kumpulan
          e-Journal yang terdapat di Universitas Islam Internasional Darullughah
          Wadda wah. e-Journal di Rumah Jurnal UII Dalwa terdiri dari berbagai
          bidang keilmuan seperti Bahasa dan Sastra Arab, Ekonomi, Manajemen
          Pendidikan Islam, Studi Islam, Sejarah Peradaban Islam, Bimbingan dan
          Konseling Islam, Komunikasi Penyiaran Islam, dan Hukum Islam
        </p>
        <button className="btn btn-outline btn-primary">Temukan jurnal</button>
      </div>
      <div className="--RIGHT CONTENT-- w-full order-1 md:order-2 md:w-[40%] flex justify-center h-[280px] md:h-auto my-7 md:my-0">
        <Image
          src="/images/hero-image.png"
          alt="hero-image"
          width="450"
          height="450"
          className="w-[240px] h-[240px] md:h-auto md:w-auto"
          priority={false}
        />
      </div>
    </div>
  );
};
export default Hero;
