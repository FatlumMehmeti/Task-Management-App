import Navbar from "./components/Navbar/Navbar.tsx";

import "./App.css";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      {/* <BoardPage /> */} <div className="style" style={{width: 100, height: 100, backgroundColor: "white"}}>fjolaa</div>
    </>
  );
  //  if(currentPage === "dashboard") {
  //   <DashboardLayout />
  // }
  // if(currentPage === "board") {
  //   <BoardLayout />
  // }
}

