import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa6";
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

  return (
    <section className="min-h-screen bg-transparent text-[#FCEF91] px-6 py-12 tracking-[0.125em]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section */}
        <motion.div
          className="text-center space-y-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-5xl font-bold">
            Hi, I'm <span className="text-[#E6521F]">Tech Burner</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Engineer turned tech entertainer, making gadgets fun and relatable since 2014.
          </p>
        </motion.div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.img
            src="/tech3.jpg"
            alt="Tech Burner"
            className="rounded-2xl shadow-xl"
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
        <motion.div
          className="bg-white text-black rounded-xl p-8 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">🔥 Tech Burner in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center font-semibold">
            <div>🎥 1500+ Videos</div>
            <div>👥 10M+ Subscribers</div>
            <div>📸 2M+ Instagram Fam</div>
            <div>🧢 Brand: Layers</div>
            <div>📱 App: Overlays</div>
            <div>🏆 Diamond Play Button</div>
          </div>
        </motion.div>

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
                  ? "https://i.ytimg.com/an_webp/vEz9Rx6yu8I/mqdefault_6s.webp?du=3000&sqp=CILF58MG&rs=AOn4CLCRjkGMWoJ-U3bQv7bLq-vbIGOj6A" // gif
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
                  ? "https://i.ytimg.com/an_webp/glEAB6ou8Gw/mqdefault_6s.webp?du=3000&sqp=CJDp58MG&rs=AOn4CLCNAeOSibbR38FwKX4MCqnh8AfuPA" // gif
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
                  ? "https://i.ytimg.com/an_webp/d2Rc7DrUs9M/mqdefault_6s.webp?du=3000&sqp=CNX558MG&rs=AOn4CLB0PtMWxlPfkPyv1y2ndPYWeqpYyw" // gif
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
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Get notified.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
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
                <div className="flex grow gap-2 items-center p-2">
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
                <Button radius="full px-3" size="sm">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
        >
          <h2 className="text-3xl font-bold">🕒 Timeline</h2>
          <ul className="list-inside list-disc text-lg space-y-1">
            <li>2014: First YouTube upload</li>
            <li>2018: Full-time content creator</li>
            <li>2020: Launched Layers & BurnerBits</li>
            <li>2022: 10M subscribers milestone</li>
          </ul>
        </motion.div>

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
