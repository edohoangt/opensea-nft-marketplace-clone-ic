import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";

function App() {
  //   const nftId = "rrkah-fqaaa-aaaaa-aaaaq-cai";

  return (
    <div className="App">
      <Header />
      {/* <Item id={nftId} /> */}
      <Footer />
    </div>
  );
}

export default App;
