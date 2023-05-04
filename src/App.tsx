import React from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App bg-gradient-to-br from-zinc-900 to-neutral-800 bg-fixed text-zinc-300 p-4">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
