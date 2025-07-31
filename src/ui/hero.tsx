import { useEffect, useRef } from "react";

interface HeroProps {
  isTransformed: boolean;
}

function Hero({ isTransformed }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    if (isTransformed) {
      heroElement.style.position = "fixed";
      heroElement.style.top = "0";
      heroElement.style.left = "0";
      heroElement.style.right = "0";
      heroElement.style.zIndex = "50";
      heroElement.style.transition = "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)";
      heroElement.style.transform = "translateY(0)";
    } else {
      heroElement.style.position = "relative";
      heroElement.style.transform = "translateY(0)";
    }
  }, [isTransformed]);

  return (
    <div
      ref={heroRef}
      className={`w-full flex items-center justify-center px-6 ${
        isTransformed ? "py-4" : "h-screen"
      }`}
    >
      <div
        className={`rounded-2xl shadow-lg border border-stone-200 bg-white/80 backdrop-blur-sm transition-all duration-250 ease-in-out ${
          isTransformed
            ? "py-4 px-6 max-w-full transform transition-all"
            : "p-12 max-w-2xl text-center"
        }`}
      >
        <h1
          className={`font-bold text-stone-800 leading-tight font-mono transition-all duration-250 ${
            isTransformed ? "text-2xl" : "text-4xl md:text-5xl"
          }`}
        >
          {isTransformed ? (
            <>
              Automated Generation of{" "}
              <span className="text-amber-700">Binaural Audio</span>
            </>
          ) : (
            <>
              Automated Generation of{" "}
              <span className="text-amber-700">Binaural Audio</span>
            </>
          )}
        </h1>
      </div>
    </div>
  );
}

export default Hero;
