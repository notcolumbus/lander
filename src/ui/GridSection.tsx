interface GridSectionProps {
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
}

function GridSection({
  title,
  content,
  imageUrl,
  imageAlt,
  reverse = false,
}: GridSectionProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 ${
        reverse ? "lg:grid-flow-dense" : ""
      }`}
    >
      <div className={reverse ? "lg:col-start-2" : ""}>
        <h2 className="text-4xl font-bold mb-8 font-mono text-orange-700">
          {title}
        </h2>
        <p className="text-xl text-stone-700 leading-relaxed">{content}</p>
      </div>

      <div
        className={`rounded-xl overflow-hidden min-h-[400px] ${
          reverse ? "lg:col-start-1" : ""
        }`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div className="bg-stone-100 rounded-xl p-12 flex items-center justify-center min-h-[400px] text-stone-500 font-mono text-center">
            <div>
              <div className="text-8xl mb-6">🎵</div>
              <p className="text-lg">Image Placeholder</p>
              <p className="text-sm mt-3">{imageAlt || title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GridSection;
