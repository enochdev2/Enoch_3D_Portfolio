import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollExperience from "../common/ScrollExperience";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <ScrollExperience />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
