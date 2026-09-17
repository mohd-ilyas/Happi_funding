import { useState } from "react";

export default function ImageSlider({ media, title }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((s) => (s + 1) % media.length);
  const prevSlide = () => setCurrentSlide((s) => (s - 1 + media.length) % media.length);

  return (
    <div className="flex flex-col space-y-4">
      <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md relative bg-black">
        <img id="slideshow-img" src={media[currentSlide]} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-y-0 left-0 flex items-center px-2">
          <button
            onClick={prevSlide}
            className="w-9 h-9 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-75 transition"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          <button
            onClick={nextSlide}
            className="w-9 h-9 rounded-full bg-black bg-opacity-50 text-white flex items-center justify-center hover:bg-opacity-75 transition"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {media.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-20 h-16 rounded-xl overflow-hidden cursor-pointer border-2 ${
              idx === currentSlide ? "theme-olive-border" : "border-transparent"
            } shadow-sm`}
          >
            <img src={img} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
