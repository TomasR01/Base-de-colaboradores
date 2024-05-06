import { useEffect } from "react";

const Alert = ({ mensaje, tipo, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div className={`alert alert-${tipo}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
