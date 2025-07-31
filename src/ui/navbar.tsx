interface NavbarProps {
  isFloating: boolean;
}

function Navbar({ isFloating }: NavbarProps) {
  return (
    <div className="flex justify-center">
      <div
        className={`p-4 m-4 font-mono font-bold text-stone-800 transition-all duration-300 ease-in-out ${
          isFloating
            ? "fixed top-0 z-50 shadow-lg border border-stone-300 backdrop-blur-sm rounded-full text-xl"
            : "relative text-3xl"
        }`}
      >
        Automated Generation of{" "}
        <span className="text-orange-700">Binaural Audio</span>
      </div>
    </div>
  );
}

export default Navbar;
