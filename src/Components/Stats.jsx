import React, { useState } from "react";
import { ArrowRight, BookOpen, Trophy, Target } from "lucide-react";
import Navbar from "./Navbar";

// Card Component
function Card({ children, className }) {
  return (
    <div className={`bg-white shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
}

// Progress Bar Component
function Progress({ value, className }) {
  return (
    <div className={`relative w-full bg-gray-200 rounded-full ${className}`}>
      <div
        className="absolute left-0 top-0 h-full bg-primary rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

// TabBar Component
function TabBar({ activeTab, onTabClick }) {
  return (
    <div className="flex justify-around border-b border-gray-200 mb-4 overflow-hidden">
      {["Asia Milestone", "Cathay Shop"].map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === tab
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

// CathayShop Component with ProductSlider
function CathayShop() {
  return (
    <div className="text-center py-4 space-y-6 overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-800">Cathay Shop</h3>
      <div className="space-y-4">
        <div className="text-gray-700">
          <span className="text-primary font-semibold">20,000 miles</span> more
          to get an iPhone 16 Pro
        </div>
        <Progress value={75} className="h-2" />
      </div>
      <ProductSlider />
    </div>
  );
}

// ProductSlider Component
function ProductSlider() {
  const products = [
    {
      id: 1,
      name: "AirPods Pro",
      imageUrl:
        "https://m-cdn.phonearena.com/images/hub/274-wide-two_1200/Apple-AirPods-Pro-3-release-date-predictions-price-specs-and-must-know-features.jpg",
    },
    {
      id: 2,
      name: "MacBook Air",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ6r7yXNlCplxyQR6bSFn-tBXHNzv6UYIYMA&s",
    },
    {
      id: 3,
      name: "Dyson Hair Dryer",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKEwatDNWPcit8y6KFSvuQrLerEc8ScHksw&s",
    },
    {
      id: 4,
      name: "Apple Watch",
      imageUrl:
        "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
    },
    {
      id: 5,
      name: "iPhone 16 Pro",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMstSxO3oERgSOYKcmHnV5ulih2bNvsLUJcQ&s",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = React.useRef(null);

  const handleScroll = () => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth;
    const scrollLeft = slider.scrollLeft;
    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(index);
  };

  React.useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProduct = (index) => {
    const slider = sliderRef.current;
    const slideWidth = slider.offsetWidth;
    slider.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    scrollToProduct(activeIndex);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Discover Frequently Targeted Items
      </h3>
      <div className="relative w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`snap-center flex-shrink-0 w-48 h-64 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 ${
                activeIndex === index ? "scale-110" : "scale-90"
              }`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div className="absolute -top-1 -right-1 bg-primary p-1 rounded-full">
                <Target className="h-3 w-3 text-white" />
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="text-xs font-medium text-gray-700">
                {product.name}
              </p>
              <a
                href="https://lifestyle.asiamiles.com/en/HK/p/APP_0493_70001/iphone-16-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs hover:underline mt-1"
              >
                Discover
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Main Component
export default function Component() {
  const [activeTab, setActiveTab] = useState("Asia Milestone");

  return (
    <div className="min-h-screen h-screen w-full bg-gray-50 flex flex-col overflow-hidden">
      <div className="flex-grow p-6 flex flex-col space-y-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="text-3xl  text-gray-900"> Hello, User</div>
          <div>
            <div className="text-3xl  text-gray-900">120</div>
            <div className="text-sm text-gray-500">points earned</div>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-700">
              Gold tier
            </span>
          </div>
        </div>

        <TabBar activeTab={activeTab} onTabClick={setActiveTab} />

        {activeTab === "Asia Milestone" ? (
          <div className="space-y-3 overflow-hidden">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">4 milestones</span>
              <span className="text-gray-500">2/4 completed</span>
            </div>
            <div className="relative">
              <Progress value={50} className="h-2" />
              <div className="absolute flex w-full justify-between top-0 transform -translate-y-1/2 h-4">
                <span className="h-4 w-4 rounded-full bg-primary" />
                <span className="h-4 w-4 rounded-full bg-primary" />
                <span className="h-4 w-4 rounded-full bg-gray-300" />
                <span className="h-4 w-4 rounded-full bg-gray-300" />
              </div>
            </div>
          </div>
        ) : (
          <CathayShop />
        )}

        {/* Only display ActionCards for Asia Milestone */}
        {activeTab === "Asia Milestone" && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { icon: ArrowRight, label: "Next Goal" },
              { icon: ArrowRight, label: "Progress" },
              { icon: ArrowRight, label: "History" },
              { icon: BookOpen, label: "Learn More" },
            ].map((item, idx) => (
              <ActionCard key={idx} Icon={item.icon} label={item.label} />
            ))}
          </div>
        )}
      </div>

      {/* Navbar positioned at the very bottom */}
      <Navbar
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "50px",
          zIndex: 1,
        }}
      />
    </div>
  );
}

// ActionCard Component
function ActionCard({ Icon, label }) {
  return (
    <Card className="p-4 flex flex-col items-center justify-center space-y-2 hover:bg-gray-100 transition-colors cursor-pointer">
      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <span className="text-sm font-medium text-gray-800">{label}</span>
    </Card>
  );
}
