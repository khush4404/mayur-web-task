import { Button } from "./ui/button";

export function About() {
  return (
    <section id="about" className="py-20 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <p className="text-slate-900 font-semibold mb-2">Welcome to Mayur Web Technology</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About Us</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With over 24 years of experience, [Your Company Name] has been a trusted partner in delivering top-quality services across multiple industries. We specialize in providing expert solutions in recruitment, IT, cleaning, and removal services, connecting service seekers with reliable providers. Our mission is to simplify the process of finding and delivering professional services, ensuring efficiency, reliability, and customer satisfaction.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At [Your Company Name], we are dedicated to excellence, innovation, and connecting you with trusted professionals. Whether you need skilled experts or quality services, we’re here to support your success.
            </p>
            <Button className="bg-[#1B2B6B] hover:bg-[#16225A] text-white px-8 py-3 text-lg font-medium rounded-md shadow-md">
              Read More
            </Button>
          </div>
          {/* About Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1603201667230-bd139210db18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1ODIwNjY4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Business team meeting"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute left-0 bottom-0 translate-x-[-30%] translate-y-[30%]">
              <div className="w-36 h-36 bg-[#1B2B6B] rounded-full flex flex-col items-center justify-center text-white shadow-lg border-4 border-white">
                <span className="text-4xl font-bold text-[#F2B721] mb-1">24+</span>
                <span className="text-base font-semibold text-white leading-tight text-center">
                  Years of<br />Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}