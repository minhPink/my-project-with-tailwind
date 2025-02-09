import "./App.css";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Slogan from "./components/Slogan";

function App() {
  return (
    <>
      <h1 className="font-poppin px-4 py-8 bg-gradient-to-b from-purple-950 to-purple-600 text-white">
        <NavBar />
        <Slogan />
        <Content />
      </h1>
    </>
  );
}

export default App;
