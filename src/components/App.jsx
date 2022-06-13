import React from "react";
import Header from "./Header/Header";
import styles from './app.module.css'
import CenterItems from "./CenterItems/CenterItems";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
   <Header/>
   <CenterItems/>
   <Footer/>
    </div>
  );
}

export default App;
