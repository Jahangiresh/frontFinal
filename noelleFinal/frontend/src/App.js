import "./app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cartpage from "./pages/Cartpage";
import Blogdetails from "./pages/Blogdetails";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const params = useParams();
  console.log(params + "param");
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/blog/details" element={<Blogdetails />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
