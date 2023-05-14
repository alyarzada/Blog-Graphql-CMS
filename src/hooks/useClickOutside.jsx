import { useEffect } from "react";

const useClickOutside = (ref, callback) => {
  const clickHandler = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  });
};

export default useClickOutside;
