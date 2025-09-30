import React from "react";
import img1 from '../assets/Home_pics/img1.jpg'
import img2 from '../assets/Home_pics/img2.jpg'
import img3 from '../assets/Home_pics/img3.jpg'
import latestnews1 from  '../assets/latestnews_elan_1.webp'
import latestnews2 from  '../assets/latestnews_elan_2.webp'
import latestnews3 from  '../assets/latestnews_elan_3.webp'

const newsFeeds = [
  {
    img: latestnews1,
    category: "Room",
    title: "10 Brilliant Ways To Decorate Your Home",
    date: "June 24, 2024",
  },
  {
    img: latestnews2,
    category: "Interior",
    title: "The Most Inspiring Interior Design Of 2024",
    date: "June 21, 2024",
  },
  {
    img: latestnews3,
    category: "Estate",
    title: "Recent Commercial Real Estate Transactions",
    date: "June 22, 2024",
  },
];

const NewsFeed = () => (
  <section className="bg-[#f6fbfc] py-12 md:mt-20">
    <div className="max-w-7xl mx-auto px-4">
      <span className="text-[#fed233] text-sm font-medium block mb-2">News & Blogs</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-8">Leatest News Feeds</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsFeeds.map((feed, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg overflow-hidden flex flex-col transition hover:shadow-lg border border-[#fed233]/20"
          >
            <img src={feed.img} alt={feed.title} className="w-full h-44 sm:h-48 object-cover" />

            <div className="px-6 py-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2 text-[#fed233] text-xs font-medium">
                <span>by: Admin</span>
                <span className="mx-2">•</span>
                <span>{feed.category}</span>
              </div>

              <div className="font-bold text-lg mb-4 text-[#212121]">{feed.title}</div>

              <div className="flex items-center justify-between text-sm mt-auto">
                <div className="flex items-center gap-2">
                  {/* <span className="text-xl">📅</span>
                  <span className="text-[#888c94]">{feed.date}</span> */}
                </div>

                <a
                  href="#"
                  className="text-[#fed233] font-semibold hover:underline transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fed233] focus-visible:ring-offset-2 rounded"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NewsFeed;
