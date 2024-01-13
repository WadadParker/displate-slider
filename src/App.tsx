import { useState } from "react";
import "./App.css";
import clsx from "clsx";

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
  {
    id: "1",
    large:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/alone/decor/800x482.png?v=MTkuMTIuMjAyMw==",
    small:
      "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroSlider/alone/thumbs/thumbnail.jpg?v=MjguMTEuMjAyMw==",
  },
];

const poster = {
  image:
    "https://static.displate.com/560x784/displate/2023-03-03/afdfcd5380d9f8e90b5b9b579229a122_999f277e8239a1a3962b6cc8a2bdfb68.avif",
  title: "Cherry Blossom Japan Art",
  description:
    "Vibrant neon colors depict Japanese scenery with cherry blossoms and mountains in this Displate artwork. Japanese Artwork and Wallart",
  currencySymbol: "$",
  amount: 74,
};
function App() {
  const [currBackground, setCurrBackground] = useState(0);
  const [type, setType] = useState<"matt" | "gloss">("matt");
  const [frame, setFrame] = useState<
    "none" | "natural" | "graphite" | "white" | "black"
  >("none");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const isFrameNone = frame === "none";
  const isFrameNatural = frame === "natural";
  const isFrameGraphite = frame === "graphite";
  const isFrameWhite = frame === "white";
  const isFrameBlack = frame === "black";

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

  const isGloss = type === "gloss";

  return (
    <>
      <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: `url(${backgrounds[currBackground].large})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "40% center",
          backgroundSize: "cover",
        }}
      >
        <img
          className="absolute top-[10%] w-[284px] h-[394px] left-[60%] md:left-[50%] transform translate-x-[-50%]"
          src={poster.image}
          alt="Background Image"
        />
        {isGloss && (
          <img
            src={GLOSS_MASK}
            className="absolute top-[10%] max-w-[20%] left-[50%] transform translate-x-[-50%]"
          />
        )}
        {/* Carousel Thumbnails */}
        <div className="md:top-10 bottom-10 left-10 absolute flex gap-4 flex-row md:flex-col">
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
        {/* Carousel Buttons */}
        <div className="absolute bottom-[15%] md:bottom-[5%] left-[50%] transform translate-x-[-50%] bg-white rounded-full">
          <button onClick={onNext} className="p-3 rounded-full" type="button">
            <LeftIcon />
          </button>
          <button onClick={onPrev} className="p-3 rounded-full" type="button">
            <RightIcon />
          </button>
        </div>
        {/* Cart */}
        <div className="hidden lg:block p-6 w-[360px] top-[2.5%] h-[95%] right-4 absolute bg-white rounded-xl">
          <h1 className="mb-1 font-semibold text-[24px]">{poster.title}</h1>
          <div className="flex">
            <p className="text-[14px]">
              {!isDescriptionExpanded && poster.description.length > 33
                ? poster.description.slice(0, 33) + "..."
                : poster.description}
            </p>
            <button
              onClick={() => {
                setIsDescriptionExpanded((prevState) => !prevState);
              }}
              className="text-[#1185ed] text-[14px] whitespace-nowrap"
            >
              Read {isDescriptionExpanded ? "less" : "more"}
            </button>
          </div>

          <div className="mt-4 font-semibold">
            <p className="text-[16px]">Go matte or gloss</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => {
                  setType("matt");
                }}
                type="button"
              >
                <img
                  className={clsx(
                    "border hover:border-blue-500 rounded-full",
                    type === "matt" && "border-blue-600"
                  )}
                  src={MATTE_SRC}
                />
              </button>
              <button
                onClick={() => {
                  setType("gloss");
                }}
                type="button"
              >
                <img
                  className="border hover:border-blue-500 rounded-full"
                  src={GLOSS_SRC}
                />
              </button>
            </div>
          </div>

          <div className="mt-4 font-semibold">
            <p className="text-[16px]">Add frame</p>
            <div className="flex gap-2 mt-2">
              {FRAMES_SRC.map((src, i) => (
                <img
                  className={`w-10 h-10 rounded-full border hover:border-blue-500`}
                  src={src}
                  key={i}
                />
              ))}
            </div>
          </div>

          <p className="text-[24px] mt-4 font-semibold">
            {poster.currencySymbol}
            {poster.amount}
          </p>
        </div>
      </div>
      <div className="p-6 bg-white rounded-xl">
        <h1 className="mb-1 font-semibold text-[24px]">{poster.title}</h1>
        <div className="flex">
          <p className="text-[14px]">
            {!isDescriptionExpanded && poster.description.length > 33
              ? poster.description.slice(0, 33) + "..."
              : poster.description}
          </p>
          <button
            onClick={() => {
              setIsDescriptionExpanded((prevState) => !prevState);
            }}
            className="text-[#1185ed] text-[14px] whitespace-nowrap"
          >
            Read {isDescriptionExpanded ? "less" : "more"}
          </button>
        </div>

        <div className="mt-4 font-semibold">
          <p className="text-[16px]">Go matte or gloss</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => {
                setType("matt");
              }}
              type="button"
            >
              <img
                className={clsx(
                  "border hover:border-blue-500 rounded-full",
                  type === "matt" && "border-blue-600"
                )}
                src={MATTE_SRC}
              />
            </button>
            <button
              onClick={() => {
                setType("gloss");
              }}
              type="button"
            >
              <img
                className="border hover:border-blue-500 rounded-full"
                src={GLOSS_SRC}
              />
            </button>
          </div>
        </div>

        <div className="mt-4 font-semibold">
          <p className="text-[16px]">Add frame</p>
          <div className="flex gap-2 mt-2">
            {FRAMES_SRC.map((src, i) => (
              <img
                className={`w-10 h-10 rounded-full border hover:border-blue-500`}
                src={src}
                key={i}
              />
            ))}
          </div>
        </div>

        <p className="text-[24px] mt-4 font-semibold">
          {poster.currencySymbol}
          {poster.amount}
        </p>
      </div>
    </>
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

export const GLOSS_MASK =
  "https://assets-static-prod.displate.com/next-assets/public/images/hero/gloss/gloss_v.png";

export const MATTE_SRC =
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroOptions/finish_matte.svg";
export const GLOSS_SRC =
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/HeroOptions/finish_gloss.svg";

export const FRAMES_SRC = [
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/no_frame.png",
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/natural_wood_frame.png",
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/graphite_frame.png",
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/white_wood_frame.png",
  "https://assets-static-prod.displate.com/next-assets/public/images/pdp/black_wood_frame.png",
];
