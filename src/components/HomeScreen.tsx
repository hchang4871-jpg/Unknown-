import React, { useState } from 'react';
import { BRAND_IMAGES, PRODUCTS, Product } from '../data/products';
import { ScreenName } from './Header';

interface HomeScreenProps {
  onNavigate: (screen: ScreenName, productId?: string) => void;
  onAddToCart: (product: Product, colorName?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onAddToCart }) => {
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>({});

  const featuredProducts = PRODUCTS.slice(0, 4);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Asymmetric Vogue / Kinfolk Editorial Pacing) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-margin-mobile md:px-margin py-space-lg md:py-space-xl overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Text Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10 space-y-space-md order-2 lg:order-1 pr-0 lg:pr-space-sm">
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <span className="w-8 h-[1px] bg-outline-variant"></span>
              <span className="font-label-uppercase text-label-uppercase uppercase tracking-[0.25em] text-secondary">
                ARCHIVAL CHAPTER 01
              </span>
            </div>
            <div className="space-y-space-xs">
              <span className="font-label-uppercase text-label-uppercase uppercase tracking-[0.3em] text-on-surface-variant block">
                UNKNOWN ATELIER
              </span>
              <h1 className="font-headline-lg text-headline-lg lg:text-display-hero leading-tight text-on-surface tracking-tight">
                BAGS FOR THE <br />
                <span className="italic font-light">UNWRITTEN</span> <br />
                STORIES
              </h1>
            </div>
            <p className="font-editorial-quote text-editorial-quote text-secondary italic max-w-md">
              “Không chỉ là một chiếc túi, mà còn là một phần trong chương tiếp theo của bạn.”
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Chế tác thủ công từ dòng da bò thuộc thảo mộc nguyên bản, tôn vinh hình khối kiến trúc tĩnh lặng và nhịp sống tự do.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
              <button
                type="button"
                onClick={() => onNavigate('collections')}
                className="inline-flex justify-center items-center px-8 py-4 bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] hover:bg-inverse-surface transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
              >
                KHÁM PHÁ BỘ SƯU TẬP
              </button>
              <button
                type="button"
                onClick={() => onNavigate('story')}
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent text-primary border-b border-primary hover:bg-surface-container transition-all duration-300 font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] cursor-pointer whitespace-nowrap shrink-0"
              >
                CÂU CHUYỆN CỦA CHÚNG TÔI
              </button>
            </div>
            {/* Micro Detail Footnote */}
            <div className="pt-space-md flex items-center gap-space-md text-secondary font-label-numeric text-label-numeric">
              <span>EDITION 2025</span>
              <span aria-hidden="true">•</span>
              <span>HANOI • FLORENCE</span>
            </div>
          </div>

          {/* Editorial Image Column with Soft Shadow and Offset Card */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div
              onClick={() => onNavigate('product-detail', 'the-muse')}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-surface-container cursor-pointer group"
            >
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                alt="Editorial portrait of an elegant East Asian woman wearing minimal black bespoke tailoring, holding a sculptural black leather structured shoulder bag by UNKNOWN"
                src={BRAND_IMAGES.homeHero}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-inverse-on-surface">
                <div>
                  <span className="font-label-uppercase text-label-uppercase tracking-[0.2em] uppercase opacity-80 block">
                    FIG. 01 — THE SCULPT
                  </span>
                  <span className="font-headline-sm text-headline-sm">Kỷ Nguyên Tĩnh Lặng</span>
                </div>
                <span className="font-label-numeric text-label-numeric tracking-widest uppercase opacity-80">
                  LOOK 04 / SERIE NOIR
                </span>
              </div>
            </div>
            {/* Floating Architectural Monogram Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-surface-container-high p-6 flex-col items-center justify-center space-y-1">
              <span className="font-headline-sm text-headline-sm tracking-[0.2em]">U.</span>
              <span className="font-label-uppercase text-[9px] tracking-[0.25em] text-secondary">
                SERIES I
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE COLLECTION (Interactive Product Grid) */}
      <section className="px-margin-mobile md:px-margin py-space-xl bg-surface" id="collection">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.25em] block mb-2">
                BỘ SƯU TẬP TUYỂN CHỌN
              </span>
              <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
                THE COLLECTION
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Những thiết kế vượt qua xu hướng. Những chiếc túi đồng hành cùng bạn qua năm tháng với phom dáng kiến trúc nguyên bản.
            </p>
          </div>

          {/* 4-Column Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {featuredProducts.map((product) => {
              const activeColorIdx = selectedColors[product.id] ?? 0;
              return (
                <div key={product.id} className="group flex flex-col bg-surface">
                  <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
                    {product.badge && (
                      <span
                        className={`absolute top-4 left-4 z-10 font-label-uppercase text-[10px] tracking-widest px-2.5 py-1 uppercase ${
                          product.badge === 'BÁN CHẠY'
                            ? 'bg-surface-container-high text-on-surface'
                            : 'bg-primary text-on-primary'
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <img
                      onClick={() => onNavigate('product-detail', product.id)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                      alt={product.name}
                      src={product.image}
                      referrerPolicy="no-referrer"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        onAddToCart(product, product.colors[activeColorIdx]?.name)
                      }
                      className="absolute bottom-0 inset-x-0 py-3 bg-primary/95 text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        shopping_bag
                      </span>
                      Thêm Vào Giỏ Nhanh
                    </button>
                  </div>
                  <div className="pt-space-sm space-y-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <button
                        type="button"
                        onClick={() => onNavigate('product-detail', product.id)}
                        className="font-headline-sm text-headline-sm text-on-surface hover:text-secondary transition-colors text-left cursor-pointer"
                      >
                        {product.name}
                      </button>
                      <span className="font-label-numeric text-label-numeric text-on-surface tabular-nums whitespace-nowrap">
                        {product.homePriceFormatted || product.priceFormatted}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {product.subtitle}
                    </p>
                    {/* Swatches */}
                    <div className="flex items-center gap-2 pt-2">
                      {product.colors.map((color, idx) => (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() =>
                            setSelectedColors((prev) => ({
                              ...prev,
                              [product.id]: idx,
                            }))
                          }
                          aria-label={color.name}
                          title={color.name}
                          style={{ backgroundColor: color.hex }}
                          className={`w-3.5 h-3.5 rounded-none cursor-pointer transition-opacity ${
                            activeColorIdx === idx
                              ? 'ring-1 ring-offset-2 ring-primary opacity-100'
                              : 'opacity-70 hover:opacity-100 border border-outline-variant/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All CTA */}
          <div className="mt-space-lg text-center">
            <button
              type="button"
              onClick={() => onNavigate('collections')}
              className="inline-flex items-center px-10 py-4 bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary transition-all duration-300 font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] cursor-pointer"
            >
              XEM TẤT CẢ SẢN PHẨM ({PRODUCTS.length})
            </button>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL SPLIT STORY (Brand Heritage Narrative) */}
      <section className="w-full bg-surface-container-low overflow-hidden" id="story">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px] items-stretch">
          {/* Split Left: Cinematic Photography */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto">
            <img
              className="w-full h-full object-cover object-center"
              alt="Cinematic street scene of an elegant Asian woman carrying an UNKNOWN handbag"
              src={BRAND_IMAGES.homeSplitStory}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 bg-surface/90 backdrop-blur-sm p-4 max-w-xs">
              <span className="font-label-uppercase text-[10px] tracking-widest uppercase text-secondary block">
                KHOẢNH KHẮC
              </span>
              <p className="font-body-sm text-body-sm text-on-surface">
                Những bước chân chậm rãi giữa thành phố tấp nập.
              </p>
            </div>
          </div>

          {/* Split Right: Curated Copy Block */}
          <div className="lg:col-span-6 flex flex-col justify-center px-margin-mobile md:px-margin py-space-xl space-y-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.25em]">
                HÀNH TRÌNH TĨNH LẶNG
              </span>
              <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
                MỘT VẬT DỤNG THƯỜNG NGÀY.
                <br />
                MỘT CÂU CHUYỆN RIÊNG.
              </h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Có những điều dần trở thành một phần của chúng ta mà không cần lên tiếng. UNKNOWN tạo nên những chiếc túi đồng hành cùng bạn qua những buổi sáng bình yên, những con phố xa lạ và tất cả những điều vẫn đang chờ được khám phá.
            </p>
            <p className="font-body-md text-body-md text-secondary">
              Mỗi chi tiết đều được chăm chút bởi đôi bàn tay của các nghệ nhân truyền đời — nơi từng đường kim mũi chỉ là một lời cam kết về phẩm giá trường tồn, loại bỏ hoàn toàn sự ồn ào của logo hay họa tiết phô trương.
            </p>
            <div className="pt-space-xs">
              <button
                type="button"
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-3 font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] text-primary group cursor-pointer"
              >
                <span className="underline underline-offset-8 decoration-outline-variant group-hover:decoration-primary transition-colors">
                  KHÁM PHÁ THẾ GIỚI UNKNOWN
                </span>
                <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND PHILOSOPHY (Centered Monograph Spread) */}
      <section className="px-margin-mobile md:px-margin py-space-xl bg-surface-container flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto space-y-space-md">
          <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.3em] uppercase block">
            TRIẾT LÝ SÁNG TẠO
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-display-hero-mobile text-on-surface tracking-tight uppercase">
            FOR THE STORIES YET TO BE WRITTEN.
          </h2>
          <div className="w-12 h-[1px] bg-outline-variant mx-auto"></div>
          <p className="font-editorial-quote text-editorial-quote text-on-surface-variant leading-relaxed italic">
            “Chúng tôi tin vào việc lựa chọn ít hơn nhưng có chủ đích. Tin vào những phom dáng vượt qua mùa mốt và những món đồ ngày càng trở nên đặc biệt theo thời gian. UNKNOWN là lời mời bạn tự viết nên câu chuyện của riêng mình.”
          </p>
          {/* Minimalist Monogram Stamp */}
          <div className="pt-space-md flex flex-col items-center">
            <span className="font-headline-sm text-headline-sm tracking-[0.3em] uppercase text-primary">
              UNKNOWN
            </span>
            <span className="font-label-uppercase text-[10px] tracking-[0.4em] text-secondary mt-1">
              ATELIER ARCHIVE
            </span>
          </div>
        </div>
      </section>

      {/* 5. CURATED CATEGORIES (Golden Ratio Visual Portals) */}
      <section className="px-margin-mobile md:px-margin py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-space-lg">
            <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.25em] block mb-2">
              DANH MỤC TUYỂN CHỌN
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
              KHÁM PHÁ THEO PHONG CÁCH
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Category 1 */}
            <div
              onClick={() => onNavigate('collections')}
              className="group relative flex flex-col bg-surface-container-low overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="THE CLASSICS"
                  src={BRAND_IMAGES.catClassics}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-inverse-on-surface">
                  <span className="font-label-uppercase text-[10px] tracking-[0.25em] uppercase opacity-80 mb-2">
                    SERIES 01
                  </span>
                  <h3 className="font-headline-md text-headline-md tracking-tight uppercase">
                    THE CLASSICS
                  </h3>
                  <p className="font-body-sm text-body-sm opacity-90 mt-1 mb-4">
                    Những phom dáng kinh điển, thanh lịch và không lỗi mốt.
                  </p>
                  <div className="flex items-center gap-2 font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] text-inverse-on-surface group-hover:translate-x-1 transition-transform">
                    <span>KHÁM PHÁ</span>
                    <span className="material-symbols-outlined text-[16px]">east</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 2 */}
            <div
              onClick={() => onNavigate('collections')}
              className="group relative flex flex-col bg-surface-container-low overflow-hidden md:-mt-6 cursor-pointer"
            >
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="EVERYDAY ICONS"
                  src={BRAND_IMAGES.catEveryday}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-inverse-on-surface">
                  <span className="font-label-uppercase text-[10px] tracking-[0.25em] uppercase opacity-80 mb-2">
                    SERIES 02
                  </span>
                  <h3 className="font-headline-md text-headline-md tracking-tight uppercase">
                    EVERYDAY ICONS
                  </h3>
                  <p className="font-body-sm text-body-sm opacity-90 mt-1 mb-4">
                    Những chiếc túi bền bỉ dành cho nhịp sống thường nhật.
                  </p>
                  <div className="flex items-center gap-2 font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] text-inverse-on-surface group-hover:translate-x-1 transition-transform">
                    <span>KHÁM PHÁ</span>
                    <span className="material-symbols-outlined text-[16px]">east</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category 3 */}
            <div
              onClick={() => onNavigate('collections')}
              className="group relative flex flex-col bg-surface-container-low overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="THE STATEMENT"
                  src={BRAND_IMAGES.catStatement}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-colors duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-inverse-on-surface">
                  <span className="font-label-uppercase text-[10px] tracking-[0.25em] uppercase opacity-80 mb-2">
                    SERIES 03
                  </span>
                  <h3 className="font-headline-md text-headline-md tracking-tight uppercase">
                    THE STATEMENT
                  </h3>
                  <p className="font-body-sm text-body-sm opacity-90 mt-1 mb-4">
                    Những thiết kế có cá tính nhưng vẫn giữ trọn nét tinh tế.
                  </p>
                  <div className="flex items-center gap-2 font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] text-inverse-on-surface group-hover:translate-x-1 transition-transform">
                    <span>KHÁM PHÁ</span>
                    <span className="material-symbols-outlined text-[16px]">east</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CRAFTSMANSHIP & DETAIL GRID (Macro Technical Monograph) */}
      <section className="px-margin-mobile md:px-margin py-space-xl bg-surface-container-high">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-space-lg space-y-space-xs">
            <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.25em]">
              CHẾ TÁC &amp; CHI TIẾT
            </span>
            <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
              BEAUTY IN EVERY DETAIL.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Phom dáng được cân nhắc. Chi tiết được chọn lọc. Một ngôn ngữ thiết kế nhẹ nhàng nhưng đủ sức đồng hành cùng bạn theo thời gian.
            </p>
          </div>

          {/* Macro Grid 4 Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="space-y-space-sm bg-surface p-6">
              <div className="aspect-square bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Đường Viền Sơn Cạnh"
                  src={BRAND_IMAGES.detailEdge}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-label-uppercase text-[10px] text-secondary tracking-widest block uppercase">
                  KỸ NGHỆ 01
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                  Đường Viền Sơn Cạnh
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Bảy lớp sơn mài thủ công kết hợp đánh bóng sáp ong tự nhiên tạo độ êm ái tuyệt đối khi tiếp xúc.
                </p>
              </div>
            </div>

            <div className="space-y-space-sm bg-surface p-6">
              <div className="aspect-square bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Mũi Chỉ Saddle Stitch"
                  src={BRAND_IMAGES.detailStitch}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-label-uppercase text-[10px] text-secondary tracking-widest block uppercase">
                  KỸ NGHỆ 02
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                  Mũi Chỉ Saddle Stitch
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Khâu tay hai kim với chỉ lanh phủ sáp, giữ cho đường may không bung tuột sau hàng thập kỷ.
                </p>
              </div>
            </div>

            <div className="space-y-space-sm bg-surface p-6">
              <div className="aspect-square bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Khóa Đồng Mạ Mờ"
                  src={BRAND_IMAGES.detailHardware}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-label-uppercase text-[10px] text-secondary tracking-widest block uppercase">
                  KỸ NGHỆ 03
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                  Khóa Đồng Mạ Mờ
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Gia công từ đồng thau nguyên khối, xử lý bề mặt satin dịu mắt chống oxy hóa và chống bám vân tay.
                </p>
              </div>
            </div>

            <div className="space-y-space-sm bg-surface p-6">
              <div className="aspect-square bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Da Thuộc Thảo Mộc"
                  src={BRAND_IMAGES.detailLeather}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-label-uppercase text-[10px] text-secondary tracking-widest block uppercase">
                  KỸ NGHỆ 04
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                  Da Thuộc Thảo Mộc
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Tuyển chọn từ các xưởng thuộc da vùng Tuscany, hình thành lớp patina đậm đà và bóng mịn theo thời gian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CAMPAIGN BANNER (Full-Bleed Monograph Banner) */}
      <section className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden">
        <img
          src={BRAND_IMAGES.campaignBanner}
          alt="Carry What Matters Campaign"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile md:px-margin text-center text-inverse-on-surface space-y-space-md py-space-xl">
          <span className="font-label-uppercase text-label-uppercase tracking-[0.3em] uppercase opacity-90 block">
            CHIẾN DỊCH 2025
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-display-hero uppercase tracking-tight">
            CARRY WHAT MATTERS.
          </h2>
          <p className="font-editorial-quote text-editorial-quote max-w-xl mx-auto italic font-light opacity-95">
            “Cuộc sống của bạn. Nhịp điệu của bạn. Câu chuyện của bạn.”
          </p>
          <div className="pt-space-xs">
            <button
              type="button"
              onClick={() => onNavigate('collections')}
              className="inline-flex items-center px-10 py-4 bg-inverse-on-surface text-primary hover:bg-surface-container transition-all duration-300 font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] cursor-pointer"
            >
              TÌM CHIẾC TÚI UNKNOWN CỦA BẠN
            </button>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER DISPATCH (Letters From UNKNOWN) */}
      <section className="px-margin-mobile md:px-margin py-space-xl bg-surface">
        <div className="max-w-3xl mx-auto text-center space-y-space-md">
          <div className="space-y-space-xs">
            <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-[0.25em]">
              THƯ TỪ XƯỞNG CHẾ TÁC
            </span>
            <h2 className="font-headline-md text-headline-md tracking-tight text-on-surface">
              LETTERS FROM UNKNOWN
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
              Khám phá những bộ sưu tập mới, chiến dịch hình ảnh riêng tư và những mẩu chuyện từ thế giới UNKNOWN được gửi gắm định kỳ.
            </p>
          </div>
          {/* Minimalist Subscription Form */}
          <form className="max-w-md mx-auto pt-space-xs space-y-4" onSubmit={handleNewsletter}>
            <div className="relative flex items-center">
              <input
                aria-label="Địa chỉ email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full py-3.5 pr-28 bg-transparent border-b border-outline text-on-surface font-body-md placeholder:text-outline focus:border-primary focus:outline-none transition-colors"
                placeholder="Địa chỉ email của bạn..."
                required
                type="email"
              />
              <button
                className="absolute right-0 py-2 px-4 bg-primary text-on-primary font-label-uppercase text-[11px] uppercase tracking-[0.2em] hover:bg-inverse-surface transition-colors cursor-pointer"
                type="submit"
              >
                ĐĂNG KÝ
              </button>
            </div>
            {newsletterSubscribed && (
              <div className="text-secondary font-body-sm text-body-sm pt-2">
                Cảm ơn bạn đã đồng hành cùng UNKNOWN. Thư chào đón đang được chuyển tới bạn.
              </div>
            )}
            <p className="font-body-sm text-[12px] text-outline leading-tight">
              Bằng việc đăng ký, bạn đồng ý với chính sách quyền riêng tư. Bạn có thể huỷ theo dõi bất kỳ lúc nào.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};
