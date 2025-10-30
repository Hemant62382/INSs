import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlacementComponent = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data for stats and companies
  const mockData = {
    stats: {
      placementRate: "100%",
      averagePackage: "4 LPA",
      highestPackage: "12 LPA",
      totalStudents: "1000+",
    },
    companies: [
      { id: 1, name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
      { id: 2, name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
      { id: 3, name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
      { id: 4, name: "HCL", logo: "https://logo.clearbit.com/hcl.com" },
      {
        id: 5,
        name: "Accenture",
        logo: "https://logo.clearbit.com/accenture.com",
      },
      { id: 6, name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
      { id: 7, name: "Cisco", logo: "https://logo.clearbit.com/cisco.com" },
      { id: 8, name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    ],
    placements: [
      {
        _id: "1",
        name: "Zeesan",
        company: "TCS",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        isActive: true,
      },
      {
        _id: "2",
        name: "Sandeep Rawat",
        company: "Infosys",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        isActive: true,
      },
      {
        _id: "3",
        name: "Priya Sharma",
        company: "Wipro",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        isActive: true,
      },
      {
        _id: "4",
        name: "Rohit Mehta",
        company: "HCL",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        isActive: true,
      },
      {
        _id: "4",
        name: "Rohit ",
        company: "Wipro",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        isActive: true,
      },
    ],
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  // Instead of fetch, use mock data
  useEffect(() => {
    setTimeout(() => {
      const activePlacements = mockData.placements.filter(
        (placement) => placement.isActive && placement.image
      );
      setPlacements(activePlacements);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 flex flex-col items-center justify-center">
      <div
        className="absolute -top-35 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        style={{ animation: "blob 8s infinite", animationTimingFunction: "ease-in-out", animationDelay: "0s" }}
      ></div>

      <div
        className="absolute top-20 -right-32 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"
        style={{ animation: "blob 8s infinite", animationTimingFunction: "ease-in-out", animationDelay: "2s" }}
      ></div>

      <div
        className="absolute bottom-10 left-20 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl"
        style={{ animation: "blob 8s infinite", animationTimingFunction: "ease-in-out", animationDelay: "4s" }}
      ></div>
   
      



      <div className="container mx-auto px-4 mt-16">
        {/* Stats Section */}
        <section className="mb-26">
          <div className="relative rounded-2xl bg-gradient-to-r from-indigo-500 via-orange-800 to-cyan-800 p-[2px] shadow-xl">
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 relative overflow-hidden">
              {/* Animated background blobs */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-400/20 blur-3xl rounded-full animate-pulse"></div>

              <h2 className="text-3xl font-bold text-white mb-10 text-center relative z-10">
                🚀 Our Placement Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {Object.entries(mockData.stats).map(([key, value], i) => (
                  <div
                    key={key}
                    className="  p-6 bg-white/10 hover:bg-white/20 border border-white rounded-2xl 
                       text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                  >
                  

                    {/* Icon placeholder (optional, can replace with real icons) */}
                    <div className="mb-3 text-4xl">
                      {i === 0 && "🎯"}
                      {i === 1 && "💼"}
                      {i === 2 && "🏆"}
                      {i === 3 && "👨‍🎓"}
                    </div>

                    <p className="text-sm text-blue-100 font-medium mb-1 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="text-3xl font-bold text-white drop-shadow-md">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Carousel Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Our Recruiters
          </h2>
          <div className="bg-white/50 p-6 rounded-xl shadow-sm">
            <Slider {...carouselSettings}>
              {mockData.companies.map((company) => (
                <div key={company.id} className="px-2 ">
                  <div className="flex flex-col  items-center justify-center h-20  group relative">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className=" max-h-16 max-w-full object-contain group-hover:scale-110 transition-transform duration-300 border border-white/30 rounded-2xl p-2"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/150?text=" +
                          company.name;
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col rounded-2xl items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                    <h2 className="text-xl font-semibold">{company.name}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Placed Students Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Our Placed Students
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {placements.map((placement, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={placement.image}
                    alt={placement.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Section */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-all duration-300">
                  <p className="text-lg font-semibold text-white drop-shadow-md">
                    {placement.name}
                  </p>
                  <p className="text-sm text-gray-200">{placement.company}</p>
                </div>

                {/* Hidden Info (Visible on Hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <p className="text-xl font-semibold">{placement.name}</p>
                  <p className="text-sm text-gray-300 mb-2">
                    {placement.company}
                  </p>
                  {placement.package && (
                    <p className="text-sm bg-white/20 px-3 py-1 rounded-full mt-1">
                      💰 {placement.package}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlacementComponent;
