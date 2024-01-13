import { useState } from "react";
import "./App.css";

const backgrounds = [
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/wall/decor/1280x800@2x.avif?v=MTkuMTIuMjAyMw==",
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/dining/decor/1280x800@2x.avif?v=MTkuMTIuMjAyMw==",
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/living/decor/1280x800@2x.avif?v=MTkuMTIuMjAyMw==",
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
        <img src={backgrounds[currBackground]} alt="Background Image" />
        <img
          className="absolute top-[10%] max-w-[20%] left-[50%] transform translate-x-[-50%]"
          src={poster.image}
          alt="Background Image"
        />

        <button
          onClick={onNext}
          className="absolute left-3 bg-white p-3 rounded-full top-[50%] transform translate-y-[-50%]"
          type="button"
        >
          <LeftIcon />
        </button>
        <button
          onClick={onPrev}
          className="absolute right-3 bg-white p-3 rounded-full top-[50%] translate-y-[-50%]"
          type="button"
        >
          <RightIcon />
        </button>
      </h1>
    </div>
  );
}

export default App;

export const LeftIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
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
    width="24"
    height="24"
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
