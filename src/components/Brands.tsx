export function Brands() {
  const brands = [
    { name: "Microsoft", logo: "adani.png" },
    {
      name: "Samsung", logo: "sintex.png"
    },
    { name: "Oracle", logo: "tata.png" },
    { name: "Dell", logo: "lt.png" },
    { name: "Adobe", logo: "arvind.png" },
    { name: "Cisco", logo: "reliance.png" }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-white mb-4 font-bold uppercase tracking-wide">
            BRANDS THAT TRUST US
          </h2>
        </div>

        <div className="grid  grid-cols-6 justify-between items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white rounded-lg w-[138px] h-[124px] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src={`/${brand.logo}`} alt={brand.name} className="max-h-10 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}