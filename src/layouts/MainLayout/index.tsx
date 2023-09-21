import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface MainLayoutProps {
  className?: string;
}

const MainLayout: React.FC<React.PropsWithChildren<MainLayoutProps>> = ({ className = "", children }) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
