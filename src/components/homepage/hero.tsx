import Image from "next/image";

const Hero = () => {
  return (
    <div className="--HERO CONTAINER-- flex items-center justify-evenly h-full">
      <div className="--LEFT CONTENT-- w-[40%] flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Rumah jurnal</h1>
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
      <div className="--RIGHT CONTENT-- w-[40%] flex justify-center">
        <Image
          src="/images/hero-image.png"
          alt="hero-image"
          width="500"
          height="500"
          className="h-[450px] w-[450px]"
        />
      </div>
    </div>
  );
};
export default Hero;
