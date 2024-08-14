import "./App.css";
import companyLogo from "../src/assets/companylogo.png";
import * as React from "react";
import Modal from "@mui/material/Modal";

import LoginModal from "./components/LoginModal";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="body-color">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-[15px] flex justify-between items-center">
          <img src={companyLogo} alt="Logo" className="h-[60px]" />
          <div>
            <button
              onClick={handleOpen}
              className="text-xs border-none font-bold uppercase bg-primary-color text-input-bgcolor rounded-full py-2 px-[20px]"
            >
              Login/ Sign up
            </button>

            <Modal open={open} onClose={handleClose}>
              <LoginModal></LoginModal>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
