import React, { useEffect } from "react";

export default function useEscKey(key, action) {
  useEffect(() => {
    function onKeyUp(e) {
      if (e.key === key) {
        action();
      }
    }
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);
}
