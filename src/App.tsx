import React from "react";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="App bg-gradient-to-br from-zinc-900 to-neutral-800 bg-fixed text-zinc-300 p-8">
        <Home />
        <Footer />
      </div>
    </RecoilRoot>
  );
};

export default App;
