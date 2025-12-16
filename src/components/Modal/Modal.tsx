"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import { IoMdClose } from "react-icons/io";
import { Portal } from "./Portal";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <Portal id="modal">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={isOpen ? "modal-enter" : "modal-exit"}
            className="fixed inset-0 z-[55] flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-modalBg origin-center"
              variants={{
                hidden: { scaleY: 0 },
                visible: { scaleY: 1 },
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              onClick={onClose}
            />

            <motion.div
              className="relative z-10 w-screen bg-transparent overflow-y-auto h-screen"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.95,
                  transition: {
                    delay: 0,
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 1.5,
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-11 tab:top-[46px] pc:top-[60px] right-4 tab:right-12 pc:right-[56px] w-11 h-11 tab:w-12 tab:h-12 flex justify-center items-center text-white hover:bg-radial-green-50 hover:text-hoverAccent"
                aria-label="Close modal"
              >
                <IoMdClose size={32} />
              </button>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
