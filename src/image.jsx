import { useState } from "react";
import image from "./assets/image.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image1.jpg";
import image4 from "./assets/image4.jpg";

function Home() {
  const [normal, setNormal] = useState("");

  return (
    <>
      <div
        style={{
          height: "200px",
          width: "200px",
          backgroundImage: `url(${normal})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          border: "1px solid black"
        }}
      ></div>

      <button onClick={() => setNormal(image)}>Click 1</button>
      <button onClick={() => setNormal(image2)}>Click 2</button>
      <button onClick={() => setNormal(image3)}>Click 3</button>
      <button onClick={() => setNormal(image4)}>Click 4</button>

    </>
  );
}

export default Home;
