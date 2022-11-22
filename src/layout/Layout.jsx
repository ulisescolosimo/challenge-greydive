import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

function Layout(props) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white">
        <Header />
      </header>
      <body className="min-h-[90vh]">{props.children}</body>
      <footer className="bg-black text-white sticky bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
