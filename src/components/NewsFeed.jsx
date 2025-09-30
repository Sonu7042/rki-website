import React, { useEffect, useState } from "react";
import img1 from '../assets/Home_pics/img1.jpg';
import img2 from '../assets/Home_pics/img2.jpg';
import img3 from '../assets/Home_pics/img3.jpg';
import latestnews1 from '../assets/latestnews_elan_1.webp';
import latestnews2 from '../assets/latestnews_elan_2.webp';
import latestnews3 from '../assets/latestnews_elan_3.webp';

const newsFeeds = [
  { img: latestnews1, category: "Room", title: "10 Brilliant Ways To Decorate Your Home", date: "June 24, 2024" },
  { img: latestnews2, category: "Interior", title: "The Most Inspiring Interior Design Of 2024", date: "June 21, 2024" },
  { img: latestnews3, category: "Estate", title: "Recent Commercial Real Estate Transactions", date: "June 22, 2024" },
];

const NewsFeed = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="bg-[#f6fbfc] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <span className="text-[#fed233] text-sm font-medium block mb-2">Client's Testimonial</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-8">Latest News Feeds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsFeeds.map((feed, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-lg shadow-md flex flex-col overflow-hidden border border-[#fed233]/20 transition hover:shadow-lg ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } transition-opacity transition-transform duration-700 ease-out motion-safe motion-reduce:transition-none`}
            >
              <img src={feed.img} alt={feed.title} className="w-full h-48 object-cover" />
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2 text-[#fed233] text-xs font-medium">
                  <span>by: Admin</span>
                  <span>•</span>
                  <span>{feed.category}</span>
                </div>
                <h3 className="text-lg font-bold text-[#212121] mb-4">{feed.title}</h3>
                <p className="text-gray-500 flex-grow">
                  {/* Optional description */}
                </p>
                {/* Optional footer elements */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
