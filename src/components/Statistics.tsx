
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
      className="py-20 relative bg-cover bg-center bg-no-repeat z-10"
      style={{
        backgroundColor: '#f8f9fa',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-70 bg-cover" style={{
        backgroundImage: `url('https://vui.unsplash.com/resize?height=256&quality=60&type=auto&url=https%3A%2F%2Fsearched-images.s3.us-west-2.amazonaws.com%2F5e55f276-9a58-4694-9ff5-c1d220a71176%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAQ4GRIA4QZE4I5HUY%252F20250919%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20250919T164100Z%26X-Amz-Expires%3D86400%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Signature%3D946854af7207ac3acb1f0a7f41b6496ab92551787cc8d248839578450ea30926&sign=hxJvYbVMPAUAuhShauNgZZWB6pa0m7_sq32jUWk5mR0')`
      }}></div>

      {/* Content */}
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