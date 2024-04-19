import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
// import { useState, useEffect } from "react";

function App() {
  // const [flashMessage, setFlashMessage] = useState("");

  // const getFlashMessageFromLocalStorage = () => {
  //   if (localStorage.flashMessage) {
  //     setFlashMessage(localStorage.flashMessage);
  //     localStorage.removeItem("flashMessage");
  //   }
  // };

  // useEffect(getFlashMessageFromLocalStorage, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
