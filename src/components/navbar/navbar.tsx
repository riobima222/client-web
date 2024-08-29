import { getImage } from "@/utils/firebase/getImage";
import ClientNavbar from "./clientNavbar";

interface Props {
  scroll: {
    scrollToDaftarBuku: () => void;
    scrollToKontak: () => void;
  };
}

const Navbar = ({ scroll }: Props) => {
  return <ClientNavbar scroll={scroll} />;
};
export default Navbar;
