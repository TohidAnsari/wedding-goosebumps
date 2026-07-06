"use client";

import Image from "next/image";
import Link from "next/link";

const ServiceLevelSection = () => {
  return (
  <section className="bg-[#FFFFFF] text-charcoal py-12 sm:py-15 md:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7 lg:gap-1.2 items-center">

          {/* TEXT SIDE */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end text-center lg:text-right mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase leading-none mb-1.7">
              MEET THE HEART BEHIND{" "}
              <span className="italic lowercase font-light align-baseline">
                the
              </span>{" "}
              GOOSEBUMPS
            </h2>

            <div className="w-16 sm:w-20 md:w-24 h-px bg-charcoal/20 my-4 sm:my-6" />

            <p className="font-lora text-sm sm:text-base leading-relaxed sm:leading-loose max-w-md mb-6 sm:mb-7 lg:mb-9">
            "Ali has this rare gift he sees what matters most. He doesn’t just
              build events, he builds emotion into every corner, every moment. You
              don’t just remember the wedding… you remember how it made you feel."
              With{" "}
              <em className="italic">
                over 15 years of experience and 150+ weddings brought to life,
              </em>{" "}
              Ali Waris Khan is the creative force behind Wedding Goosebumps.
              Known for his emotionally driven approach, Ali turns visions into
              immersive experiences. His deep cultural intuition, trend-forward
              eye, and heart-first planning style make him more than a wedding
              designer — he’s a storyteller in celebration form.
            </p>

            <Link href="/about">
              <p className="font-commuter-sans text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[0.3em] text-gold border-b-[1.4px] border-gold pb-1.2 inline-block hover:border-gold/70 transition-colors duration-300">
THE SOUL OF WEDDING GOOSEBUMPS
</p>
            </Link>
          </div>

          {/* IMAGE SIDE — full image visible, centered */}
          <div className="lg:col-span-3 w-full flex justify-center py-2">
            <Image
                  src="/service-level-section/Copy of MM_09664.jpg"
                  alt="Ali and couple on stairs"
                  width={736}
                  height={1200}
                  className="w-full max-w-[430px] sm:max-w-[406px] md:max-w-[450px] lg:max-w-[468px] h-auto object-contain"
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                  loading="eager"
                  priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceLevelSection;
