import { useState } from "react";
import "./App.css";

const backgrounds = [
  {
    id: "1",
    large:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/wall/decor/1280x800@2x.avif?v=MTkuMTIuMjAyMw==",
    small:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/wall/thumbs/thumbnail@2x.avif?v=MjguMTEuMjAyMw==",
  },
  {
    id: "1",
    large:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/dining/decor/1280x800@2x.avif?v=MTkuMTIuMjAyMw==",
    small:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/dining/thumbs/thumbnail@2x.avif?v=MjguMTEuMjAyMw==",
  },
  {
    id: "1",
    large:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/living/decor/1280x800@2x.avif?v=MTkuMTIuMjAyMw==",
    small:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/living/thumbs/thumbnail@2x.avif?v=MjguMTEuMjAyMw==",
  },
];

const poster = {
  image:
    "https://static.displate.com/560x784/displate/2023-03-03/afdfcd5380d9f8e90b5b9b579229a122_999f277e8239a1a3962b6cc8a2bdfb68.avif",
};
function App() {
  const [currBackground, setCurrBackground] = useState(0);

  const onNext = () => {
    if (currBackground === backgrounds.length - 1) {
      return;
    }
    setCurrBackground((p) => p + 1);
  };

  const onPrev = () => {
    if (currBackground === 0) {
      return;
    }
    setCurrBackground((p) => p - 1);
  };

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold underline">
        <img src={backgrounds[currBackground].large} alt="Background Image" />
        <img
          className="absolute top-[10%] max-w-[20%] left-[50%] transform translate-x-[-50%]"
          src={poster.image}
          alt="Background Image"
        />
        <div className="top-10 left-10 absolute flex gap-4 flex-col">
          {backgrounds.map((background, index) => (
            <button
              className="relative border-2 border-white shadow-xl cursor-pointer"
              key={index}
              type="button"
              onClick={() => {
                setCurrBackground(index);
              }}
            >
              <img
                src={poster.image}
                className="w-[30px] h-[41px] absolute top-[7px] transform translate-x-[-50%] left-[50%]"
              />
              <img
                src={background.small}
                className="w-[62px] h-[62px] shadow-xl"
              />
            </button>
          ))}
        </div>
        <div className="absolute bottom-[7%] left-[50%] transform translate-x-[-50%] bg-white rounded-full">
          <button onClick={onNext} className="p-3 rounded-full" type="button">
            <LeftIcon />
          </button>
          <button onClick={onPrev} className="p-3 rounded-full" type="button">
            <RightIcon />
          </button>
        </div>
      </h1>
    </div>
  );
}

export default App;

export const LeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
};

export const RightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
