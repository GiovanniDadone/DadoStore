import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className='min-h-screen max-w-2xl mx-auto px-8 py-6'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
