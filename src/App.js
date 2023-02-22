// LIBRATIES
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// COMPONENTS
import Modal from "./components/modal";

// STYLES
import "./styles/modal.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="modal-container">
      <h2 className="modal-title">
        Lovely Modal , Created By{" "}
        <a href="https://instagram.com/soufi_learn" className="soufi-link">
          Soufi Learn
        </a>
      </h2>

      <motion.button
        className="open-btn"
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 1 }}
        onClick={() => setModalOpen(!modalOpen)}
      >
        Open Modal
      </motion.button>

      <AnimatePresence>
        {modalOpen && <Modal handleClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
