import Footer from "../../shared/components/layout/Footer";
import Header from "../../shared/components/layout/Header";

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
