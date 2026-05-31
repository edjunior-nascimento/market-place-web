import { motion } from "framer-motion";
import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    shouldAnimate?: boolean;
};
export function PageTransition({ children, shouldAnimate = false }: Props) {
    return (

        <motion.div
            initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
            exit={{
                scale: shouldAnimate ? 0.05 : 1,   // diminui
                x: shouldAnimate ? "43%" : 0,     // vai pra direita
                y: shouldAnimate ? "-45%" : 0,    // sobe
                opacity: shouldAnimate ? 0.8 : 0
            }}
            transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.3, 1] // mais suave
            }}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                transformOrigin: "center center" // começa do centro
            }}
        >
            {children}
        </motion.div>

    );
}