import React, { useState, useMemo } from 'react';
import { BRAND_IMAGES, PRODUCTS, Product } from '../data/products';
import { ScreenName } from './Header';

interface CollectionsScreenProps {
  onNavigate: (screen: ScreenName, productId?: string) => void;
  onAddToCart: (product: Product, colorName?: string) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
}

const CATEGORIES = [
  { id: 'ALL', label: `TẤT CẢ (${PRODUCTS.length})` },
  { id: 'TÚI ĐEO VAI', label: 'TÚI ĐEO VAI' },
  { id: 'TÚI CẦM TAY', label: 'TÚI CẦM TAY' },
  { id: 'TÚI TOTE', label: 'TÚI TOTE' },
  { id: 'TÚI ĐEO CHÉO', label: 'TÚI ĐEO CHÉO' },
];

const COLOR_FILTERS = [
  { key: 'all', label: 'Tất cả sắc độ', hex: 'transparent' },
  { key: 'black', label: 'Đen Noir', hex: '#111111' },
  { key: 'espresso', label: 'Nâu Espresso', hex: '#4e4539' },
  { key: 'ecru', label: 'Trắng Ngà Écru', hex: '#e5e2db' },
  { key: 'sand', label: 'Cát Tự Nhiên', hex: '#c2b59b' },
];

export const CollectionsScreen: React.FC<CollectionsScreenProps> = ({
  onNavigate,
  onAddToCart,
  wishlist,
  onToggleWishlist,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');
  const [showAll, setShowAll] = useState(false);
  const [activeSwatches, setActiveSwatches] = useState<Record<string, number>>({});

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];
    if (selectedCategory !== 'ALL') {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (selectedColor !== 'all') {
      list = list.filter((p) => p.colors.some((c) => c.key === selectedColor));
    }
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }
    return list;
  }, [selectedCategory, selectedColor, sortBy]);

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* 1. ARCHIVE CATALOG HEADER */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-space-lg pb-space-md">
        <div className="flex items-center gap-2 mb-space-xs">
          <span className="w-2 h-2 bg-primary inline-block"></span>
          <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.2em] uppercase">
            LƯU TRỮ CHẾ TÁC THỦ CÔNG 2025
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-xl">
            <h1 className="font-display-hero-mobile md:font-headline-lg text-headline-lg text-primary tracking-tight uppercase">
              BỘ SƯU TẬP
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sự đối thoại giữa chủ nghĩa tối giản điêu khắc và da thuộc tự nhiên thượng hạng. Từng thiết kế tôn vinh cấu trúc nguyên bản, mang vẻ đẹp trường tồn cùng năm tháng.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="font-label-uppercase text-[10px] text-outline tracking-[0.2em] uppercase block">
              QUY MÔ TRƯNG BÀY
            </span>
            <span className="font-label-numeric text-label-numeric text-primary font-semibold">
              {filteredProducts.length} TÁC PHẨM ĐƯỢC CHỌN LỌC
            </span>
          </div>
        </div>

        {/* FILTER & SORT TOOLBAR */}
        <div className="mt-space-lg pt-space-md border-t border-outline-variant/40 flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowAll(true);
                }}
                className={`px-4 py-2.5 font-label-uppercase text-[11px] uppercase tracking-[0.15em] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Color & Sort Controls */}
          <div className="flex flex-wrap items-center gap-space-md">
            {/* Color Swatch Filter */}
            <div className="flex items-center gap-2">
              <span className="font-label-uppercase text-[10px] text-secondary uppercase tracking-[0.15em] mr-1">
                SẮC ĐỘ:
              </span>
              {COLOR_FILTERS.map((cf) => (
                <button
                  key={cf.key}
                  type="button"
                  onClick={() => setSelectedColor(cf.key)}
                  title={cf.label}
                  className={`w-5 h-5 flex items-center justify-center border transition-all cursor-pointer ${
                    selectedColor === cf.key
                      ? 'border-primary ring-1 ring-offset-1 ring-primary'
                      : 'border-outline-variant/60 opacity-75 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: cf.key === 'all' ? '#fcf9f2' : cf.hex,
                  }}
                >
                  {cf.key === 'all' && (
                    <span className="material-symbols-outlined text-[13px] text-primary">
                      check
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="font-label-uppercase text-[10px] text-secondary uppercase tracking-[0.15em]">
                SẮP XẾP:
              </span>
              <select
                aria-label="Sắp xếp sản phẩm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-surface-container-low border border-outline-variant/50 px-3 py-1.5 font-label-uppercase text-[11px] text-primary uppercase tracking-[0.12em] focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="newest">MỚI RA MẮT</option>
                <option value="price-asc">GIÁ: THẤP ĐẾN CAO</option>
                <option value="price-desc">GIÁ: CAO ĐẾN THẤP</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATALOG GRID (8 or 12 items) */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-10">
          {displayedProducts.map((product) => {
            const isWished = wishlist.includes(product.id);
            const swatchIdx = activeSwatches[product.id] ?? 0;

            return (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 z-10 font-label-uppercase text-[9px] tracking-[0.18em] px-2.5 py-1 uppercase ${
                        product.badge === 'BÁN CHẠY'
                          ? 'bg-secondary text-on-secondary'
                          : 'bg-primary text-on-primary'
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Heart Button */}
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product.id)}
                    aria-label="Yêu thích"
                    className="absolute top-3 right-3 z-10 w-8 h-8 bg-surface/90 hover:bg-surface flex items-center justify-center text-primary transition-colors cursor-pointer"
                  >
                    <span
                      className="material-symbols-outlined text-[17px]"
                      style={{
                        fontVariationSettings: isWished ? "'FILL' 1" : "'FILL' 0",
                      }}
                    >
                      favorite
                    </span>
                  </button>

                  <img
                    onClick={() => onNavigate('product-detail', product.id)}
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      onAddToCart(product, product.colors[swatchIdx]?.name)
                    }
                    className="absolute bottom-0 inset-x-0 py-3 bg-primary/95 text-on-primary font-label-uppercase text-[10px] uppercase tracking-[0.18em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      shopping_bag
                    </span>
                    Thêm Vào Giỏ Hàng
                  </button>
                </div>

                {/* Metadata below frame */}
                <div className="pt-3 space-y-1.5">
                  <div className="flex items-center justify-between text-secondary font-label-uppercase text-[9px] tracking-[0.15em] uppercase">
                    <span>{product.category}</span>
                    <span>{product.edition}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate('product-detail', product.id)}
                    className="font-headline-sm text-[21px] leading-7 text-primary hover:text-secondary transition-colors text-left block cursor-pointer"
                  >
                    {product.name}
                  </button>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-label-numeric text-label-numeric text-primary font-semibold tabular-nums">
                      {product.homePriceFormatted || product.priceFormatted}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {product.colors.map((c, idx) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() =>
                            setActiveSwatches((prev) => ({
                              ...prev,
                              [product.id]: idx,
                            }))
                          }
                          title={c.name}
                          style={{ backgroundColor: c.hex }}
                          className={`w-3.5 h-3.5 cursor-pointer ${
                            swatchIdx === idx
                              ? 'ring-1 ring-offset-1 ring-primary'
                              : 'border border-outline-variant/60 opacity-75 hover:opacity-100'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-space-xl flex flex-col items-center justify-center space-y-3">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Hiển thị {displayedProducts.length} trên {filteredProducts.length} thiết kế lưu trữ
          </span>
          <div className="w-48 h-[2px] bg-surface-container-highest overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{
                width: `${Math.round(
                  (displayedProducts.length / Math.max(filteredProducts.length, 1)) * 100
                )}%`,
              }}
            />
          </div>
          {!showAll && filteredProducts.length > 8 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="mt-2 px-8 py-4 bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] hover:bg-inverse-surface transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>TẢI THÊM THIẾT KẾ</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_downward
              </span>
            </button>
          )}
        </div>
      </section>

      {/* 3. MATERIAL PROVENANCE EDITORIAL SPREAD (Toscana, Ý) */}
      <section className="w-full bg-surface-container-low py-space-xl mt-space-lg">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden relative">
              <img
                src={BRAND_IMAGES.detailLeather}
                alt="Toscana Vegetable Tanned Leather"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-surface/95 px-4 py-3 max-w-xs">
                <span className="font-label-uppercase text-[10px] tracking-[0.18em] uppercase text-primary block">
                  TOSCANA, Ý
                </span>
                <span className="font-body-sm text-[12px] text-on-surface-variant">
                  Thuộc da thảo mộc thực vật 100%
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-space-lg space-y-space-md">
            <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.25em] uppercase block">
              TRIẾT LÝ NGUYÊN BẢN
            </span>
            <blockquote className="font-editorial-quote text-editorial-quote md:text-[26px] md:leading-[40px] text-primary italic">
              “Chúng tôi tin vào quyền lực của sự tĩnh lặng. Mỗi chiếc túi UNKNOWN được chế tác không phải để gây ấn tượng ồn ào, mà để song hành thầm lặng cùng năm tháng của người sở hữu.”
            </blockquote>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-2xl">
              Sử dụng hoàn toàn phôi da bò tự nhiên đạt chứng nhận LWG (Leather Working Group), được tỉa mép và hoàn thiện hoàn toàn thủ công từ đôi bàn tay của các nghệ nhân bậc thầy có hơn hai mươi năm kinh nghiệm.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors cursor-pointer"
              >
                <span>KHÁM PHÁ QUY TRÌNH ATELIER</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE SERVICE PILLARS */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container-low p-8 space-y-3">
            <span className="material-symbols-outlined text-[24px] text-primary">
              local_shipping
            </span>
            <h3 className="font-headline-sm text-[20px] text-primary uppercase">
              GIAO HÀNG BẢO HIỂM
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Mọi kiện hàng được niêm phong đặc cách, bảo hiểm toàn giá trị và giao hoả tốc đến tận tay quý khách trên toàn quốc.
            </p>
            <span className="font-label-uppercase text-[10px] tracking-[0.18em] text-primary uppercase underline underline-offset-4 block pt-2">
              ĐẶC QUYỀN MIỄN PHÍ
            </span>
          </div>

          <div className="bg-surface-container-low p-8 space-y-3">
            <span className="material-symbols-outlined text-[24px] text-primary">
              inventory_2
            </span>
            <h3 className="font-headline-sm text-[20px] text-primary uppercase">
              ĐÓNG GÓI CHỮ KÝ
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Hộp cứng đenuyền monogram UNKNOWN, túi chống bụi cotton hữu cơ và thẻ chứng nhận phôi da đánh số độc bản.
            </p>
            <span className="font-label-uppercase text-[10px] tracking-[0.18em] text-primary uppercase underline underline-offset-4 block pt-2">
              TIÊU CHUẨN MONOGRAPH
            </span>
          </div>

          <div className="bg-surface-container-low p-8 space-y-3">
            <span className="material-symbols-outlined text-[24px] text-primary">
              autorenew
            </span>
            <h3 className="font-headline-sm text-[20px] text-primary uppercase">
              14 NGÀY THỬ NGHIỆM
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Chính sách đổi trả bảo toàn trải nghiệm trong 14 ngày kèm quyền lợi dưỡng da định kỳ trọn đời tại không gian UNKNOWN.
            </p>
            <span className="font-label-uppercase text-[10px] tracking-[0.18em] text-primary uppercase underline underline-offset-4 block pt-2">
              BẢO DƯỠNG TRỌN ĐỜI
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
