import "./App.css";
import companyLogo from "../src/assets/companylogo.png";

function App() {
  return (
    <div className="body-color">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-[15px] flex justify-between items-center">
          <img src={companyLogo} alt="Logo" className="h-[60px]" />
          <div>
            <button className="text-xs border-none font-bold uppercase bg-primary-color text-input-bgcolor rounded-full py-2 px-[20px]">
              Login/ Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
