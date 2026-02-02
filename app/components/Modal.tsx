import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function Modal({ title, children, isOpen, setIsOpen }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return createPortal(
    isOpen ? (
      <dialog
        className="fixed left-0 top-0 w-full h-full z-50 overflow-auto backdrop-blur-sm flex justify-center items-center transition-opacity duration-500"
        style={{
          background: "rgba(0, 0, 0, 0.7)",
        }}
        onClick={handleClose}
      >
        <div
          className="mx-4 my-8 p-8 rounded-lg shadow-lg max-w-screen-lg max-h-[90vh] overflow-y-auto"
          style={{
            background: "rgb(var(--color-bg))",
            border: "1px solid rgba(var(--color-primary), 0.2)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <h1 
              className="font-bold text-xl"
              style={{ color: "rgb(var(--color-text))" }}
            >
              {title}
            </h1>
            <button
              type="button"
              className="hover:opacity-70 focus:outline-none transition-opacity"
              style={{ color: "rgb(var(--color-muted))" }}
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center">{children}</div>
        </div>
      </dialog>
    ) : null,
    modalRoot
  );
}

export default Modal;
