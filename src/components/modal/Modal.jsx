import { useEffect } from "react";
import "./modal.css";

export default function Modal({
  showModal,
  closeModal,
  children,
  backgroundImg,
}) {
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [showModal]);

  return (
    <>
      {showModal && (
        <div className="modal">
          <div
            className="modal-body"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: "cover",
            }}
          >
            <div className="modal-utility">
              <button onClick={closeModal}>X</button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
