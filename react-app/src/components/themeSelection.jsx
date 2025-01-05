import React, { useEffect, useState } from "react";

const ThemeSelection = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [checked, setChecked] = useState(theme == "dark");
  const [themes, setThemes] = useState([
    { name: "Light", value: "light" },
    { name: "Dark", value: "dark" },
  ]);

  useEffect(() => {
    if (checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [checked]);

  return (
    <label
      htmlFor="theme-selector"
      style={{
        cursor: "pointer",
        aspectRatio: 1 / 1,
        border: "2px solid gray",
        padding: "7px",
        borderRadius: "100%",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ion-icon name={checked ? "moon" : "sunny"}></ion-icon>
      <input
        type="checkBox"
        value={checked}
        id="theme-selector"
        onChange={() => setChecked(!checked)}
        style={{ position: "absolute", visibility: "hidden" }}
      />
    </label>
  );
};

export default ThemeSelection;
