import { motion } from 'framer-motion';

const BackDrop = ({ children, handleClose }) => {
    return (
        <motion.div
            className="backdrop-wrapper"
            initial={{ opacit: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            onClick={handleClose}
        >
            {children}
        </motion.div>
    );
}

export default BackDrop;