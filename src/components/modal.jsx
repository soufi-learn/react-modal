import Backdrop from "./backdrop";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

const dropIn = {
    initial: {
        y: "-100%",
        oapcity: 0,
    },

    visible: {
        y: "0",
        oapcity: 1,
    },

    exit: {
        scale: 0,
        oapcity: 0,
    },
};

const Modal = ({ handleClose }) => {
    return ReactDOM.createPortal(
        <Backdrop handleClose={handleClose}>
            <motion.div
                className="modal-wrapper"
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="initial"
                animate="visible"
                exit="exit"
            >
                <button onClick={handleClose} className="close-btn">
                    <FaTimes />
                </button>

                <p>
                    this is modal content! this is modal content! this is modal content!
                    this is modal content! this is modal content! this is modal content!
                    this is modal content! this is modal content! this is modal content!
                    this is modal content! this is modal content! this is modal content!
                    this is modal content! this is modal content! this is modal content!
                    this is modal content!{" "}
                </p>
            </motion.div>
        </Backdrop>,
        document.getElementById("modal-container")
    );
};

export default Modal;
