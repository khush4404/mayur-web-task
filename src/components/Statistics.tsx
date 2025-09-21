
export function Statistics() {
  const stats = [
    { value: 8, label: "Years of Quality", suffix: "+" },
    { value: 50, label: "Satisfied Customers", suffix: "+" },
    { value: 25, label: "Range of Products", suffix: "+" },
    { value: 1000, label: "Units Produced & Installed", suffix: "+" }
  ];

  const CircularProgress = ({ value, index, suffix }: { value: number; index: number; suffix: string }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    // Adjust the calculation based on the value range
    const normalizedValue = value > 100 ? 85 : value; // Cap at 85% fill for larger numbers
    const strokeDashoffset = circumference - (normalizedValue / 100) * circumference;

    // Use navy blue and golden yellow colors to match the image
    const colorClass = index % 2 === 0 ? "text-[#1a365d]" : "text-[#ffd700]";

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-300"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={colorClass}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-in-out',
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{value}{suffix}</span>
        </div>
      </div>
    );
  };

  return (
    <section
      id="statistics"
      className="py-20 relative bg-gray-500 bg-center bg-no-repeat z-10"
      data-aos="fade-up"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <CircularProgress value={stat.value} index={index} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}