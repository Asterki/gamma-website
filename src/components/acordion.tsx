import * as React from "react";
import { NextPage } from "next";

import { motion } from "framer-motion";

interface ComponentsProps {
    defaultOpen: boolean;
    title: string;
    children: React.ReactNode;
}

const AcordionComponent: NextPage<ComponentsProps> = (props) => {
    const [isOpen, setIsOpen] = React.useState(props.defaultOpen);

    return (
        <div className="w-8/12 text-center bg-neutral-700/10 mt-8 border-b-2 border-neutral-700/20">
            <h1
                onClick={() => setIsOpen(!isOpen)}
                className="select-none cursor-pointer text-white w-full py-2 px-10 md:px-56 text-center shadow-lg text-lg "
            >
                {props.title}
            </h1>
            <motion.div
                variants={{
                    open: {
                        opacity: 1,
                        height: "auto",
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                        },
                    },
                    closed: {
                        opacity: 0,
                        height: 0,
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                        },
                    },
                }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                className="overflow-y-hidden"
            >
                {props.children}
            </motion.div>
        </div>
    );
};

export default AcordionComponent;
