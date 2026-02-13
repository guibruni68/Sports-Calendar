import { useState, useEffect, useCallback } from "react";
import { BannerHero } from "../BannerHero";
import type { BannerHeroSize } from "../BannerHero";
import bannerHeroBg from "../../assets/banner-hero-bg.png";
import "./BannerCarousel.css";


interface BannerCarouselProps {
  sport?: string;
  size?: BannerHeroSize;
  alt?: string;
}

export function BannerCarousel({
  sport,
  size = "Default",
  alt = "Banner",
}: BannerCarouselProps) {
  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ── Fetch banners ── */
  useEffect(() => {
    const controller = new AbortController();
    const url = sport ? `/api/banners?sport=${encodeURIComponent(sport)}` : "/api/banners";

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const urls: string[] = data.records
          ?.map(
            (r: { fields: { "img-banner"?: { url: string }[] } }) =>
              r.fields["img-banner"]?.[0]?.url
          )
          .filter(Boolean) as string[];

        if (urls.length > 0) setImages(urls);
      })
      .catch(() => {});

    return () => controller.abort();
  }, [sport]);

  /* ── Auto-rotate ── */
  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(id);
  }, [images.length]);

  const goTo = useCallback((index: number) => setActiveIndex(index), []);

  /* ── Fallback: static image while loading or if API returns empty ── */
  const slides = images.length > 0 ? images : [bannerHeroBg];

  return (
    <div className="bannerCarousel">
      <div className="bannerCarousel__track">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`bannerCarousel__slide ${i === activeIndex ? "bannerCarousel__slide--active" : ""}`}
          >
            <BannerHero imageSrc={src} alt={`${alt} ${i + 1}`} size={size} />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="bannerCarousel__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`bannerCarousel__dot ${i === activeIndex ? "bannerCarousel__dot--active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
