import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const PageTransition = ({ children }) => {
  return (
    <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -60 }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
>
  {children}
</motion.div>
  );
};

export default PageTransition;