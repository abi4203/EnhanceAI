import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Ec from "./Cc";
import Footer from "./Footer";
import Contact from "./Contact";
import Purchase from "./Purchase";
import Index from "./Index";
import Tools from "./Tools";
import test from "./TEST";
//login
import Home from "./login/Home";
import Login from "./login/Login";
import Signup from "./login/Signup";
import ProtectedRoute from "./login/ProtectedRoute";
import { UserAuthContextProvider } from "./login/UserAuthContext";
//login
import Cc from "./Ec";
import Clean from "./Clean";
import Fix from "./fix";
import sec from "./sec";
import sec1 from "./sec1";
import sec2 from "./sec2";
import "bootstrap/dist/css/bootstrap.min.css";
import EcAbi from "./EcAbi";
import AceEditor from "react-ace";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        {/* <Route
        element={
          <ProtectedRoute> */}
        <UserAuthContextProvider>
          <Header />
        </UserAuthContextProvider>
        {/* </ProtectedRoute>
        }
      /> */}

        <UserAuthContextProvider>
          <Routes>
            <Route path="/login" element={<Login title="hi abi" />} />
            <Route path="/eca" element={<EcAbi />} />

            {/* <Route path="/home" element={<Home />} /> */}

            {/* <Route
                    path="/Account"
                    element={
                      // <ProtectedRoute>
                        <Header />
                      // </ProtectedRoute>
                    }
                  /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Index />} />
            <Route path="/fix" element={<Fix />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/tools" element={<Tools />} />
            {/* <Route path="/Account"  element={Header} /> */}
            <Route path="/Ec" element={<Ec />} />
            <Route path="/Cc" element={<Cc />} />
            <Route path="/Clean" element={<Clean />} />
            <Route path="/test" element={<test />} />
            <Route path="/sec" element={<sec />} />
            <Route path="/sec1" element={<sec1 />} />
            <Route path="/sec2" element={<sec2 />} />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
