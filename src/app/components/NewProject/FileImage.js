import { Delete } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";

export default function FileImage({ item ,deleteImage}) {
  var url = process.env.REACT_APP_DATABASE_URL;
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      style={{ position: "relative" }}
      class="container"
      onMouseOver={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        width={250}
        src={`https://mielproje.com.tr/api/upload/${item.path}`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        style={{
          filter: showButton && " blur(3px) grayscale(50%)",
        }}
        loading="lazy"
      />
      {showButton && (
        <button
          onClick={() => deleteImage(item.id)}
          style={{
            backgroundColor: "transparent",
            borderRadius: "5px",
            borderColor: "transparent",

            position: "absolute",
            color: "white",
            top: "45%",
            left: "36%",
            zIndex: 99,
          }}
          class="btn"
        >
          <Delete />
        </button>
      )}
    </div>
  );
}
