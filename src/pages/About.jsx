import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaRocket, FaTshirt, FaAward, FaCrown, FaBriefcase, FaLightbulb, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const timelineData = [
    {
      year: "2014",
      title: "First YouTube Upload",
      icon: <FaYoutube />,
      color: "bg-red-500"
    },
    {
      year: "2018",
      title: "Became Full-time Content Creator",
      icon: <FaRocket />,
      color: "bg-yellow-400"
    },
    {
      year: "2020",
      title: "Launched Brands: Layers & BurnerBits",
      icon: <FaTshirt />,
      color: "bg-indigo-500"
    },
    {
      year: "2021",
      title: "Crossed 5M Subscribers",
      icon: <FaAward />,
      color: "bg-green-500"
    },
    {
      year: "2022",
      title: "Hit 10M Subscriber Milestone",
      icon: <FaCrown />,
      color: "bg-orange-500"
    },
    {
      year: "2023",
      title: "Expanded Into Techburner Studios",
      icon: <FaBriefcase />,
      color: "bg-pink-600"
    },
    {
      year: "2024",
      title: "Launched New Tech Channel + Office Vlogs",
      icon: <FaLightbulb />,
      color: "bg-teal-500"
    },
    {
      year: "2024",
      title: "Launched Anarc Watch Brand",
      icon: <FaStore />,
      color: "bg-lime-600"
    },
    {
      year: "2025",
      title: "Opened Tech Product Retail Experience Store",
      icon: <FaStore />,
      color: "bg-purple-600"
    }
  ];


  return (
    <section className="min-h-screen bg-transparent text-[#FCEF91] px-6 py-12 tracking-[0.125em]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section - Modern Awwwards Style */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#18181b] rounded-br-[12rem] rounded-tl-[12rem] rounded-xl">
          {/* Animated background blobs */}
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-[#FCEF91]/40 via-[#E6521F]/30 to-transparent rounded-full blur-3xl opacity-70 animate-blob pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-gradient-to-tr from-[#E6521F]/30 via-[#FCEF91]/20 to-transparent rounded-full blur-2xl opacity-60 animate-blob2 pointer-events-none" />
          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-8">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-black leading-tight tracking-tight mb-8 whitespace-pre-line"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-[#FCEF91] via-[#E6521F] to-[#FCEF91] bg-clip-text text-transparent animate-gradient-x px-2 font-black">
                Tech Burner
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-2xl max-w-2xl text-white/80 font-medium mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Engineer turned <span className="text-[#E6521F] font-semibold">tech entertainer</span>, making gadgets fun and relatable since 2014.
            </motion.p>
            <motion.a
              href="#stats"
              className="inline-block mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FCEF91] via-[#E6521F] to-[#FCEF91] text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            >
              See My Journey
            </motion.a>
          </div>
          <style>{`
            @keyframes gradient-x {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 4s ease-in-out infinite;
            }
            @keyframes blob {
              0%, 100% { transform: scale(1); opacity: 0.7; }
              50% { transform: scale(1.15); opacity: 1; }
            }
            .animate-blob {
              animation: blob 7s ease-in-out infinite;
            }
            @keyframes blob2 {
              0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
              50% { transform: scale(1.1) rotate(20deg); opacity: 0.9; }
            }
            .animate-blob2 {
              animation: blob2 8s ease-in-out infinite;
            }
          `}</style>
        </section>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.img
            src="/tech3.jpg"
            alt="Tech Burner"
            className="rounded-none shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <motion.div
            className="space-y-4 text-lg flex flex-col justify-between h-full"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            <p className="text-[#E6521F] text-lg font-semibold tracking-loose"><strong className="text-6xl text-[#FCEF91]">Full Name</strong>  <br />Shlok Srivastava</p>
            <p className="text-[#E6521F] text-lg font-semibold tracking-loose"><strong className="text-6xl text-[#FCEF91]">Hometown</strong> <br /> New Delhi, India</p>
            <p className="text-[#E6521F] text-lg font-semibold tracking-loose"><strong className="text-6xl text-[#FCEF91]">Education</strong> <br /> B.Tech in Mechanical Engineering – SRM University</p>
            <p className="text-[#E6521F] text-lg font-semibold tracking-loose"><strong className="text-6xl text-[#FCEF91]">Started YouTube</strong> <br /> 2014 (as a hobby)</p>
            <p className="text-[#E6521F] text-lg font-semibold tracking-loose"><strong className="text-6xl text-[#FCEF91]">Main Channel</strong> <br /> Tech Burner – 10M+ Subs</p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.section
          className="w-full flex justify-center items-center py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl px-6 sm:px-10 py-10 w-full max-w-5xl border border-[#FCEF91]/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-[#FCEF91] drop-shadow-lg tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              🔥 Tech Burner in Numbers
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {/* Animated Stat Item */}
              {[
                { icon: '🎥', label: 'Videos', value: 1500, suffix: '+' },
                { icon: '👥', label: 'Subscribers', value: 10, suffix: 'M+' },
                { icon: '📸', label: 'Instagram Fam', value: 2, suffix: 'M+' },
                { icon: '🧢', label: 'Brand', value: 'Layers', isText: true },
                { icon: '📱', label: 'App', value: 'Overlays', isText: true },
                { icon: '🏆', label: 'Award', value: 'Diamond Play Button', isText: true },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-white/5 rounded-xl py-6 px-2 shadow-md hover:scale-105 transition-transform duration-300 border border-[#FCEF91]/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-4xl sm:text-5xl mb-2 drop-shadow-lg animate-pulse">{stat.icon}</span>
                  {stat.isText ? (
                    <span className="text-xl sm:text-2xl font-bold text-[#E6521F] mb-1">{stat.value}</span>
                  ) : (
                    <motion.span
                      className="text-3xl sm:text-4xl font-extrabold text-[#FCEF91] mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                    >
                      {stat.value}
                      <span className="text-2xl align-super">{stat.suffix}</span>
                    </motion.span>
                  )}
                  <span className="text-base sm:text-lg text-white/80 font-medium tracking-wide mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Channels & Brands */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
        >
          <h2 className="text-3xl font-bold">🎬 Channels & Products</h2>
          {/* <ul className="list-disc pl-6 text-lg">
            <li className="flex items-center gap-3">
              <strong>Tech Burner</strong>
              <span>– Main tech channel</span>
              <button
                onClick={() => window.open("https://www.youtube.com/@TechBurner", "_blank")}>
                <FaYoutube className="text-red-600 cursor-pointer text-xl" />
              </button>
            </li>
            <li className="flex items-center gap-3">
              <strong>Tech Burner Shorts</strong>
              <span>– Main tech channel</span>
              <button
                onClick={() => window.open("https://www.youtube.com/@techburnershort.s", "_blank")}>
                <FaYoutube className="text-red-600 cursor-pointer text-xl" />
              </button>
            </li>
            <li className="flex items-center gap-3">
              <strong>BurnerBits</strong>
              <span></span> – Shorts & Clips
              <button
                onClick={() => window.open("https://www.youtube.com/@burnerbiits", "_blank")}>
                <FaYoutube className="text-red-600 cursor-pointer text-xl" />
              </button>
            </li>
            <li className="flex items-center gap-3">
              <strong>Shlok Life</strong>
              <span>– Personal channel</span>
              <button
                onClick={() => window.open("https://www.youtube.com/@shlok_life", "_blank")}>
                <FaYoutube className="text-red-600 cursor-pointer text-xl" />
              </button>
            </li>
            <li className="flex items-center gap-3">
              <strong>Layers</strong>
              <span> – Clothing for creators </span>
              <button
                onClick={() => window.open("https://www.youtube.com/@TechBurner/videos", "_blank")}>
                <FaYoutube className="text-red-600 cursor-pointer text-xl" />
              </button>
            </li>
            <li className="flex items-center gap-3">
              <strong>Overlays</strong>
              <span>– Wallpaper & setup app</span>
              <button
                onClick={() => window.open("https://www.youtube.com/@TechBurner/videos", "_blank")}>
                <FaYoutube className="text-red-600 cursor-pointer text-xl" />
              </button>
            </li>
          </ul> */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 1.5,
              ease: "anticipate"
            }}
            className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8 rounded-xl tracking-widest">
            {/* <Card
             className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start!">
                <p className="text-4xl text-[#fff]/60 uppercase font-bold">Tech Burner</p>
                <h4 className="text-white font-medium text-large">Main Tech Channel</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://i.ytimg.com/an_webp/vEz9Rx6yu8I/mqdefault_6s.webp?du=3000&sqp=CILF58MG&rs=AOn4CLCRjkGMWoJ-U3bQv7bLq-vbIGOj6A"
              />
            </Card> */}
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start! p-2">
                <p className="text-4xl text-[#fff]/60 uppercase font-bold">Tech Burner</p>
                <h4 className="text-white font-medium text-large">Main Tech Channel</h4>
              </CardHeader>
              <motion.img
                src={isHovered
                  ? "https://i.ytimg.com/an_webp/VQeySLmSMhc/mqdefault_6s.webp?du=3000&sqp=CMOSh8QG&rs=AOn4CLD7tJ5IHgt52ID18ApJ6g29i7Aecg" // gif
                  : "https://i.ytimg.com/vi/vEz9Rx6yu8I/maxresdefault.jpg"} // static image
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0.8, scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start! p-2">
                <p className="text-4xl text-white/60 uppercase font-bold">Tech Burner Shorts</p>
                <h4 className="text-white font-medium text-large">Main tech shorts channel</h4>
              </CardHeader>
              <motion.img
                src={isHovered1
                  ? "https://i.ytimg.com/an_webp/1USExPyX9ds/mqdefault_6s.webp?du=3000&sqp=COGph8QG&rs=AOn4CLAk80tj4NhbEOcCLKyKnCLG3tLp1w" // gif
                  : "https://i.ytimg.com/vi/lhORDlvi_UA/oardefault.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLDB7_1w6YVWpAW7cphCmxf5I9-DAg"} // static image
                alt="Card background"
                className="z-0 w-full h-full object-cover object-[50%_7%]"
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: isHovered1 ? 1 : 0.8, scale: isHovered1 ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start! p-2">
                <p className="text-4xl text-white/60 uppercase font-bold">BurnerBits</p>
                <h4 className="text-white font-medium text-large">Shorts & Clips
                </h4>
              </CardHeader>
              <motion.img
                src={isHovered2
                  ? "https://i.ytimg.com/an_webp/3-hEHTPfUWY/mqdefault_6s.webp?du=3000&sqp=CPKTh8QG&rs=AOn4CLAslXJCOKPmJhKpGDQ_ngBTcCyOYw" // gif
                  : "https://yt3.googleusercontent.com/aGwnust-77fb4NBJAzClyiH-3X7XOK2nXosg24ELFbT385xuysXXw38y3N5bhAGqtbCwVNVh=s160-c-k-c0x00ffffff-no-rj"}// static image
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: isHovered2 ? 1 : 0.8, scale: isHovered2 ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
            </Card>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
              <CardHeader className="absolute z-10 top-1 flex-col items-start p-2">
                <p className="text-4xl text-white/60 uppercase font-bold">Overlays</p>
                <h4 className="text-black leading-none font-medium text-base">Shop Men’s T-shirts, Oversized T-shirts, Joggers, Shorts, Jackets, Hoodies and Sweatshirts. Join Overlays to CHANGE, to set yourself Free. Build your future with FREEDOM stitched into every design.</h4>
              </CardHeader>
              <motion.img
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://overlaysnow.com/cdn/shop/files/BD0A0172.jpg?v=1747033230&width=800"
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: isHovered3 ? 1 : 0.8, scale: isHovered3 ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardFooter className="absolute bg-white/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Go to store.</p>
                </div>
                <Link to="/overlays" className="text-tiny" color="primary" radius="full" size="sm">
                  Visit Store
                </Link>
              </CardFooter>
            </Card>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
              <CardHeader className="absolute z-10 top-1 flex-col items-start p-2">
                <p className="text-4xl text-white/60 uppercase font-bold">Layers</p>
                <h4 className="text-white/90 font-medium text-base leading-none">Anarc smartwatch, straps, and skins at Layers. Unique octagonal design, stainless steel body, accurate data using 6-axis sensor, heart rate monitor and more. Shop now!</h4>
              </CardHeader>
              <motion.img
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src="https://www.layers.shop/cdn/shop/files/anarc_1.webp?v=1730701300"
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: isHovered4 ? 1 : 0.8, scale: isHovered4 ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex grow gap-2 items-center p-0">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="https://www.layers.shop/cdn/shop/files/15bbeadc3fe958cb7a2eec4172ebaac27e7758fe_2.png?v=1750926551"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Anarc </p>
                    <p className="text-tiny text-white/60">Get anarc watch.</p>
                  </div>
                </div>
                <Link to="/anarc-details" radius="full px-3" size="sm">
                  Buy Now
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>

        {/* Eye-catching Timeline */}
        <motion.section
          className="relative w-screen overflow-x-hidden px-0 py-16 min-h-[80vh]"
          // style={{ background: '#18181b' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-20"></div>
          <div className="w-full px-0 sm:px-4 md:px-12 lg:px-32 xl:px-48 2xl:px-64 relative z-10">
            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold mb-16 flex items-center gap-3 tracking-tight text-center justify-start text-[#FCEF91] drop-shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block animate-pulse">🕒</span> TIMELINE
            </motion.h2>

            <div className="relative flex flex-col gap-16">
              {/* Vertical animated gradient line */}
              <div className="hidden sm:block absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 z-0">
                <div className="h-full w-full bg-gradient-to-b from-[#FCEF91] via-[#E6521F] to-[#FCEF91] animate-gradient-move rounded-full blur-[1.5px] shadow-2xl"></div>
              </div>
              {timelineData.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    className={`relative flex flex-col sm:flex-row items-center sm:items-stretch ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} group`}
                    initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.18 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot with Glow */}
                    <div
                      className={`z-20 flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#FCEF91] shadow-2xl bg-[#E6521F] absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 animate-glow`}
                      style={{ boxShadow: `0 0 32px 8px #FCEF91` }}
                    >
                      <span className="text-3xl text-[#FCEF91] drop-shadow-lg">{event.icon}</span>
                    </div>
                    {/* Card */}
                    <div
                      className={`mt-20 sm:mt-0 sm:max-w-[48%] w-full ${isLeft ? 'sm:ml-12 sm:mr-auto' : 'sm:mr-12 sm:ml-auto'} bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl px-8 py-7 border-l-8 border-[#FCEF91] hover:scale-[1.03] transition-transform duration-300 relative`}
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#FCEF91] mb-2 drop-shadow">{event.year}</div>
                      <div className="text-black/50 text-xl sm:text-2xl font-bold mb-2 tracking-wider drop-shadow">{event.title}</div>
                      {event.description && (
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed font-medium drop-shadow-sm">{event.description}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          {/* Keyframes for animated gradient and glow */}
          <style>{`
            @keyframes gradient-move {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
            .animate-gradient-move {
              background-size: 200% 200%;
              animation: gradient-move 3s linear infinite alternate;
            }
            @keyframes glow {
              0%, 100% { box-shadow: 0 0 32px 8px #FCEF91, 0 0 0 0 #E6521F; }
              50% { box-shadow: 0 0 48px 16px #E6521F, 0 0 0 0 #FCEF91; }
            }
            .animate-glow {
              animation: glow 2.5s ease-in-out infinite;
            }
          `}</style>
        </motion.section>

        {/* CTA */}
        <motion.div
          className="text-center space-y-4 mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl">Want to collaborate, sponsor, or just say hi?</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:contact@techburner.in"
            className="bg-yellow-300 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition"
          >
            📩 Contact Me
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
