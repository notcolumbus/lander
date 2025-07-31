interface NavbarProps {
  isFloating: boolean;
}

function Navbar({ isFloating }: NavbarProps) {
  return (
    <div className="flex justify-center">
      <div
        className={`p-4 m-4 font-mono font-bold text-stone-800 transition-all duration-500 ease-out transform ${
          isFloating
            ? "fixed top-0 z-50 shadow-2xl border border-stone-300 backdrop-blur-md rounded-full text-xl  scale-95 px-6 py-3"
            : "relative text-3xl bg-transparent scale-100 px-4 py-4"
        }`}
      >
        Automated Generation of{" "}
        <span
          className={`text-orange-600 transition-all duration-500 ease-out ${
            isFloating ? "text-orange-500" : "text-orange-600"
          }`}
        >
          Binaural Audio
        </span>
      </div>
    </div>
  );
}

export default Navbar;
