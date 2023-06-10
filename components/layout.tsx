import { Nav } from "../components/navbar/navbar";
import { Footer } from "../components/footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
