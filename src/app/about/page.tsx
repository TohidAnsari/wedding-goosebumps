"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";

const LOGO_URL = "/logo/Logo.png";

function Slide({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Normal page sections (no snap / full-screen locking)
  return (
    <section className={`py-7 sm:py-9 md:py-12 lg:py-14 xl:py-16 bg-ivory text-charcoal ${className}`}>
      <div className="mx-auto w-full max-w-[1035px] lg:max-w-[1150px] xl:max-w-[1265px] 2xl:max-w-[1380px] px-5 sm:px-7">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-ivory text-charcoal">
      {/* Navbar (on top) */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Slide 1: Hero section with fixed overlapping */}
      <section className="pt-0 pb-0 bg-white text-charcoal">
        <div className="full-bleed">
          <div className="flex flex-col lg:grid lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr] 2xl:grid-cols-[560px_1fr]">
            {/* LEFT: big image */}
            <div className="relative h-[40vh] sm:h-[52vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-white order-2 lg:order-1">
              <Image
                src="/about-page/slide1/main.jpg"
                alt="Wedding Goosebumps"
                fill
                className="object-cover object-center"
                loading="eager"
                priority
              />
            </div>

            {/* RIGHT: content with no overlap */}
            <div className="bg-white min-h-[58vh] lg:h-full px-5 sm:px-7 lg:px-7 xl:px-9 lg:pr-5 xl:pr-7 flex flex-col justify-center py-9 sm:py-12 lg:py-0 order-1 lg:order-2">
              {/* Wordmark */}
              <div className="text-center mb-6 lg:mb-7">
                <h2 className="font-commuter-sans text-[10px] sm:text-[12px] md:text-[13px] tracking-[0.3em] uppercase">
                  WEDDING GOOSEBUMPS
                </h2>
              </div>

              {/* Four images row - ensure they don't get cut */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-6 lg:mb-8">
                {['/about-page/slide1/1.jpg', '/about-page/slide1/2.jpg', '/about-page/slide1/4.jpg', '/about-page/slide1/3.jpg',].map((src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[3/4] bg-[#efe9df] overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`Gallery ${idx + 1}`}
                      fill
                      className="object-cover"
                      loading={idx < 4 ? "eager" : "lazy"}
                      priority={idx < 4}
                    />
                  </div>
                ))}
              </div>

              {/* Headline + subcopy */}
              <div className="max-w-[680px]">
                <h1 className="font-epicene-display font-light uppercase leading-[1.08] text-[25px] sm:text-[32px] md:text-[37px] lg:text-[41px] xl:text-[46px] mb-3.5">
                  WEDDING GOOSEBUMPS
                </h1>
                <p className="font-commuter-sans text-[10px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.3em] text-charcoal/85 mb-3.5">
                  FULL SERVICE DESTINATION WEDDING AND <br className="hidden sm:block" />
                  DESIGN BOUTIQUE
                </p>
                <div className="h-[2px] w-12 sm:w-14 bg-[#D9D5CF] mb-4 sm:mb-5" />
                <p className="font-lora text-[15px] sm:text-[16px] md:text-[17px] leading-[1.7] sm:leading-[1.8] text-charcoal/90">
                  We serve a discerning global clientele who seek more than just a wedding
                  <i>— they seek an unforgettable experience.</i> From first vision to final toast,
                  we navigate cultures, traditions, and trends with ease, creating
                  celebrations that are seamless, soulful, and spectacular in every detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2 - Fixed image cutting */}
      <Slide className="mt-12 lg:mt-16 xl:mt-20">
        <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-7">
          <div className="grid gap-[2.188rem] lg:gap-[2.688rem] xl:gap-[3.188rem] lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] items-start">
            {/* Left image - ensure proper aspect ratio */}
            <div className="relative w-full h-[430px] sm:h-[510px] lg:h-[650px] xl:h-[650px] bg-[#efe9df] overflow-hidden">
              <Image
                src="/about-page/slide2/Photo.jpg"
                alt="Ali Waris Khan"
                fill
                className="object-cover object-center"
                loading="eager"
                priority
              />
            </div>

            {/* Right text column */}
            <div className="max-w-[540px] mt-3 lg:mt-4 lg:pl-0.5">
              <p className="font-cormorant italic text-[16px] sm:text-[17px] md:text-[18px] text-charcoal/80 mb-6">
                Ali has been creating luxury weddings and events since 2010
              </p>

              <p className="font-lora text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] sm:leading-[1.75] text-charcoal/90 mb-7 text-justify">
                With over 15 years in the luxury wedding world, Ali Waris Khan has become one of the
                most trusted names in destination wedding planning and design across India and beyond.
                His approach is rooted in a deep respect for each couple's story, blending meticulous
                planning with an intuitive sense of style and emotion. Over the years, he has built strong
                relationships with the finest venues, artisans, and creative collaborators, ensuring every
                celebration is not only flawlessly executed but also a true reflection of the couple's
                personality, heritage, and dreams.
              </p>

              <h2 className="font-epicene-display font-light uppercase text-[25px] sm:text-[30px] md:text-[35px] lg:text-[37px] leading-[1.15] tracking-wide mb-7">
                His Approach To Wedding <span className="italic lowercase font-light">and</span> Design
              </h2>

              <p className="font-lora italic text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] text-charcoal/80 text-justify">
                Is different in that he offers his couples a truly hands-on experience. He accepts a
                limited number of weddings per year, which allows him to give 100% of his attention to
                each and every couple.<br />
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Decorative divider with infinity symbol */}
      <div className="bg-ivory py-8 sm:py-10 md:py-12 pb-[30px] sm:pb-[38px] md:pb-[46px]">
        <div className="flex items-center gap-3 sm:gap-4 max-w-4xl mx-auto px-6">
          <div className="h-px flex-1 bg-charcoal/20" />
          <span className="text-2xl sm:text-3xl text-[#B5A484]">∞</span>
          <div className="h-px flex-1 bg-charcoal/20" />
        </div>
      </div>

      {/* Slide 3 — Framed statement panel with mobile improvements */}
      <Slide>
        <div className="w-full mt-2 sm:mt-5 lg:mt-8 xl:mt-10 mb-10 sm:mb-15 lg:mb-20 xl:mb-24">
          <div className="mx-auto max-w-5xl bg-white border border-charcoal/10 shadow-sm px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            {/* top divider with monogram */}
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="h-px flex-1 bg-charcoal/20" />
              <span className="font-epicene-display italic text-lg sm:text-xl md:text-2xl text-[#B5A484]">WG</span>
              <div className="h-px flex-1 bg-charcoal/20" />
            </div>

            {/* small uppercase kicker */}
            <p className="text-center font-commuter-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-charcoal/70 mb-2 sm:mb-3">
              WE OFFER BESPOKE EVENT PLANNING SERVICES
            </p>

            {/* big centered headline (responsive size) */}
            <h3 className="text-center font-newsreader uppercase text-charcoal leading-[1.4] sm:leading-[1.5] tracking-[0.05em] sm:tracking-[0.06em] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] max-w-2xl mx-auto">
              TAILORED TO FIT THE NEEDS OF HIS CLIENTS AND GOES ABOVE AND
              BEYOND TO CRAFT A SEAMLESSLY EXECUTED WEDDING PLANNING AND
              DESIGN EXPERIENCE FOR HIS COUPLES AND THEIR GUESTS.
            </h3>

            {/* button */}
            <div className="mt-5 sm:mt-6 flex justify-center">
              <Link
                href="/inquire"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-[#C2A770] hover:bg-[#B79A63] transition-colors text-white tracking-[0.18em] uppercase text-[10px] sm:text-xs font-lora"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 4 — Fixed mobile layout and image cutting */}
      <Slide className="bg-white">
        <div className="full-bleed">
          {/* Mobile: stack vertically with proper spacing */}
          <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr_380px] xl:grid-cols-[280px_1fr_480px] gap-6 lg:gap-6 xl:gap-8">

            {/* LEFT IMAGE - hidden on mobile, proper height on desktop */}
            <div className="relative w-full h-[360px] lg:h-[380px] xl:h-[430px]  hidden lg:block overflow-hidden lg:mt-12">
              <Image
                src="/about-page/slide-4/1.jpg"
                alt="Earlier work"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* TEXT BLOCK - separate on mobile */}
            <div className="relative px-4 sm:px-6 lg:px-6 py-6 lg:py-12">
              {/* Mobile label */}
              <p className="font-commuter-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-charcoal/50 mb-4 lg:hidden">
                HOW IT ALL STARTED
              </p>

              {/* Vertical label - desktop only */}
              <div className="pointer-events-none absolute left-3 top-16 bottom-4 hidden lg:block">
                <div className="h-full w-px bg-charcoal/15" />
                <span
                  className="ml-2 text-[9px] tracking-[0.35em] uppercase text-charcoal/50 absolute top-6"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  HOW IT ALL STARTED
                </span>
              </div>

              <div className="lg:pl-12 xl:pl-16 pr-12">
                <h3 className="font-epicene-display font-light uppercase text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-[1.15] mb-6 lg:mb-8">
                  Prior to starting his own business,
                </h3>

                <p className="font-lora text-[13px] sm:text-[14px] md:text-[14.5px] leading-[1.7] sm:leading-[1.8] text-charcoal/90 mb-8 lg:mb-10 text-justify ">
                  Before founding Wedding Goosebumps, Ali spent years as the Director of a
                  leading events and entertainment company, delivering spectacular celebrations
                  across India and abroad. This role refined his <em>expertise in managing large-scale,
                    high-profile events with precision, creativity, and cultural sensitivity.</em> <br /><br />His ability
                  to remain calm under pressure, think strategically, and adapt seamlessly to
                  diverse settings ensures every wedding — whether in a royal palace, a serene
                  beach resort, or an international destination — is flawlessly executed. Paired with
                  his innate design sensibility and passion for storytelling, Ali offers couples a
                  world-class, five-star experience that transcends borders.
                </p>

                <Link
                  href="/inquire"
                  className="inline-flex items-center justify-center px-5 py-2 border border-[#C2A770] text-[#C2A770] hover:bg-[#C2A770] hover:text-white transition-colors tracking-[0.2em] uppercase text-[10px] sm:text-xs font-lora"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE - proper height, no cutting */}
            <div className="relative h-[50vh] lg:h-[75vh] xl:h-[75vh] bg-[#efe9df] overflow-hidden">
              <Image
                src="/about-page/slide-4/2.jpg"
                alt="Events"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 5 - Video with responsive height */}
      <Slide className="p-0 m-0">
        <div className="relative full-bleed h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
          <video
            src="/videos/about-page-vids/TATSAV VIDHI HIGHLIGHT 20sec 18.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </Slide>

      {/* Slide 6 — Fixed testimonial layout */}
      <Slide className="py-16 lg:py-24">
        <div className="full-bleed">
          <div className="flex flex-col lg:grid lg:grid-cols-[180px_1fr_380px] xl:grid-cols-[240px_1fr_480px] gap-6 lg:gap-10">

            {/* LEFT IMAGE - hidden on mobile, proper height */}
            <div className="relative h-[320px] lg:h-[400px] xl:h-[480px] bg-[#efe9df] hidden lg:block overflow-hidden">
              <Image
                src="/about-page/slide6/1.jpg"
                alt="Detail A"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* CENTER: testimonial block - separate on mobile */}
            <div className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-10 text-left lg:text-right">
              {/* Mobile label */}
              <p className="font-commuter-sans text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-charcoal/50 mb-4 lg:hidden">
                KIND WORDS
              </p>

              {/* vertical label - desktop only */}
              <div className="hidden lg:flex absolute right-0 top-16 bottom-8 items-start">
                <div className="h-full w-px bg-charcoal/15" />
                <span
                  className="ml-3 text-[9px] tracking-[0.35em] uppercase text-charcoal/50 mt-6"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  KIND WORDS
                </span>
              </div>

              <div className="lg:pr-6 lg:-mt-15.5">
                <h5 className="mt-50 text-charcoal text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight mb-6">
                  "Ali is truly a <br />one-of-a-kind planner."
                </h5>
                <p className="font-newsreader text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] sm:leading-[1.8] text-charcoal/90">
                  It would be an understatement to say he was instrumental in bringing our wedding vision to
                  life. Our planning journey with him was effortless, enjoyable, and completely stress-free.
                  Thank you, Ali, for turning our special day into an unforgettable celebration.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE - proper height */}
            <div className="relative h-[50vh] lg:h-[65vh] xl:h-[75vh] bg-[#efe9df] overflow-hidden">
              <Image
                src="/about-page/slide6/main.jpg"
                alt="Testimonial main"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 7 - Fixed image aspect ratios */}
      <Slide className="!py-0 mt-16 lg:mt-18">
        <div className="flex flex-col lg:flex-row -space-y-1 lg:space-y-0 lg:-space-x-1 max-w-none mx-auto px-2 sm:px-4">
          <div className="relative h-[320px] sm:h-[400px] lg:h-[610px] flex-1 max-w-[520px] sm:max-w-[580px] lg:max-w-[680px] mx-auto overflow-hidden">
            <Image src="/about-page/slide7/1.jpg" alt="Gallery Left" fill className="object-contain object-center" loading="lazy" />
          </div>
          <div className="relative h-[320px] sm:h-[400px] lg:h-[610px] flex-1 max-w-[520px] sm:max-w-[580px] lg:max-w-[680px] mx-auto overflow-hidden">
            <Image src="/about-page/slide7/2.jpg" alt="Gallery Right" fill className="object-contain object-center" loading="lazy" />
          </div>
        </div>

        {/* Text section - proper spacing */}
        <div className="relative py-8 lg:py-12 px-4 sm:px-6 lg:px-16 flex flex-col items-start">
          {/* Vertical right label - desktop only */}
          <div className="absolute right-0 top-8 bottom-0 hidden lg:flex items-start">
            <div className="h-full w-px bg-charcoal/15" />
            <span
              className="ml-3 text-[9px] tracking-[0.35em] uppercase text-charcoal/50 mt-6"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              VALUES
            </span>
          </div>

          {/* Main text */}
          <p className="uppercase tracking-[0.25em] text-[9px] sm:text-[10px] md:text-[11px] text-charcoal/70 font-commuter-sans mb-2">
            WE BELIEVE IN
          </p>
          <h2 className="font-epicene-display text-[30px] sm:text-[36px] md:text-[40px] leading-tight text-charcoal mb-3">
            APPROACHABILITY
          </h2>
          <p className="font-newsreader text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] sm:leading-[1.8] text-charcoal/90 max-w-2xl mb-6">
            Our goal is to provide our clients with the utmost level of service throughout the planning
            and design process as there is never a question too big or too small.
          </p>
        </div>
      </Slide>

      {/* Slide 8 — Final CTA with responsive improvements */}
      <Slide className="relative !py-0 full-bleed h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] xl:h-[100vh] overflow-hidden">
        {/* Full background image */}
        <Image
          src="/about-page/slide8/main.jpg"
          alt="Inquire Background"
          fill
          className="object-cover object-[50%_35%]"
          loading="lazy"
        />

        {/* Centered overlay with responsive text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white [&_*]:!text-white px-4">
          <h2
            className="
              font-epicene-display font-light uppercase
              tracking-[0.05em] sm:tracking-[0.06em] leading-[1.06]
              text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px]
              drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
            "
          >
            Inquire to begin
          </h2>

          <Link
            href="/inquire"
            className="
              relative mt-3 inline-block
              font-commuter-sans uppercase tracking-[0.2em] sm:tracking-[0.25em]
              text-[8px] sm:text-[9px] md:text-[10px]
              after:content-[''] after:block after:h-[1px] after:bg-white/90
              after:mt-2 after:w-[110%] after:mx-auto after:translate-x-[-5%]
              hover:after:bg-white transition
            "
          >
            Work with Us
          </Link>
        </div>
      </Slide>
    </main>
  );
}