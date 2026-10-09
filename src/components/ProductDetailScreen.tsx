import React, { useState } from 'react';
import { BRAND_IMAGES, PRODUCTS, Product } from '../data/products';
import { ScreenName } from './Header';

interface ProductDetailScreenProps {
  product: Product;
  onNavigate: (screen: ScreenName, productId?: string) => void;
  onAddToCart: (product: Product, colorName: string, quantity: number) => void;
  isWished: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onNavigate,
  onAddToCart,
  isWished,
  onToggleWishlist,
}) => {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string>('description');
  const [stylistModalOpen, setStylistModalOpen] = useState(false);

  const selectedColor = product.colors[selectedColorIdx] || product.colors[0];

  const gallery = product.gallery || [
    { url: product.image, caption: 'GÓC NHÌN 01 • KIẾN TRÚC & HÌNH KHỐI' },
    { url: BRAND_IMAGES.homeSplitStory, caption: 'GÓC NHÌN 02 • CHUYỂN ĐỘNG' },
    { url: BRAND_IMAGES.detailHardware, caption: 'GÓC NHÌN 03 • KHÓA MẠ MỜ' },
    { url: BRAND_IMAGES.detailEdge, caption: 'GÓC NHÌN 04 • NGĂN TRONG & LỚP LÓT DA LỘN' },
  ];

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-sm flex flex-wrap items-center justify-between gap-2 text-secondary font-label-uppercase text-[10px] tracking-[0.2em] uppercase">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            TRANG CHỦ
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => onNavigate('collections')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            BỘ SƯU TẬP 01
          </button>
          <span>/</span>
          <span className="text-primary font-bold">{product.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary inline-block"></span>
          <span>CHẾ TÁC GIỚI HẠN • SERIE ATELIER 2025</span>
        </div>
      </div>

      {/* Main PDP Split Grid */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left 7 Columns: Editorial Gallery */}
          <div className="lg:col-span-7 space-y-space-md">
            {/* View 01: Full Feature */}
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
              <img
                src={gallery[0].url}
                alt={gallery[0].caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-surface/90 px-3 py-1.5 font-label-uppercase text-[10px] tracking-[0.18em] text-primary uppercase">
                {gallery[0].caption}
              </div>
            </div>

            {/* View 02 & View 03: 2-Column Duet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
                <img
                  src={gallery[1]?.url || product.image}
                  alt={gallery[1]?.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-surface/90 px-2.5 py-1 font-label-uppercase text-[9px] tracking-[0.15em] text-primary uppercase">
                  {gallery[1]?.caption}
                </div>
              </div>
              <div className="relative aspect-[4/5] bg-surface-container overflow-hidden">
                <img
                  src={gallery[2]?.url || BRAND_IMAGES.detailHardware}
                  alt={gallery[2]?.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-surface/90 px-2.5 py-1 font-label-uppercase text-[9px] tracking-[0.15em] text-primary uppercase">
                  {gallery[2]?.caption}
                </div>
              </div>
            </div>

            {/* View 04: Wide Interior & Suede Lining */}
            <div className="relative aspect-[16/10] bg-surface-container overflow-hidden">
              <img
                src={gallery[3]?.url || BRAND_IMAGES.detailEdge}
                alt={gallery[3]?.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-surface/90 px-3 py-1.5 font-label-uppercase text-[10px] tracking-[0.18em] text-primary uppercase">
                {gallery[3]?.caption}
              </div>
            </div>

            {/* Tannery Certificate Banner */}
            <div className="bg-surface-container-low p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-outline-variant/30">
              <div className="space-y-1">
                <span className="font-label-uppercase text-[10px] tracking-[0.2em] text-primary uppercase block">
                  CHỨNG CHỈ DA THUỘC
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Da bê nguyên tấm Full-grain nhập khẩu trực tiếp từ vùng Tuscany, Ý.
                </p>
              </div>
              <div className="flex items-center gap-2 text-secondary font-label-uppercase text-[10px] tracking-[0.15em] uppercase shrink-0">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>CHỨNG THỰC THỦ CÔNG</span>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Sticky Contiguous Purchase Module */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/30 space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-label-uppercase text-[10px] tracking-[0.2em] text-secondary uppercase">
                BỘ SƯU TẬP 01 / {product.category}
              </span>
              <span className="px-2.5 py-1 bg-surface-container text-primary font-label-uppercase text-[9px] tracking-[0.15em] uppercase">
                CÓ SẴN
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight uppercase">
                {product.name}
              </h1>
              <p className="font-label-uppercase text-[10px] tracking-[0.2em] text-outline uppercase">
                STRUCTURED SHOULDER BAG • {product.sku}
              </p>
            </div>

            <div className="flex items-baseline gap-4 pt-2 border-t border-outline-variant/30">
              <span className="font-headline-md text-[28px] text-primary tabular-nums">
                {product.homePriceFormatted || '1.250.000 VNĐ'}
              </span>
              <span className="font-body-sm text-[12px] text-on-surface-variant">
                (Đã bao gồm thuế GTGT &amp; hộp bảo quản)
              </span>
            </div>

            {/* Color Selection */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center justify-between font-label-uppercase text-[10px] tracking-[0.15em] uppercase">
                <span className="text-secondary">MÀU SẮC TUYỂN CHỌN:</span>
                <span className="text-primary font-bold">{selectedColor.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((c, idx) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColorIdx(idx)}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                    className={`w-8 h-8 cursor-pointer transition-all ${
                      selectedColorIdx === idx
                        ? 'ring-2 ring-offset-2 ring-primary'
                        : 'border border-outline-variant opacity-80 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity & Wishlist Row */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between font-label-uppercase text-[10px] tracking-[0.15em] uppercase">
                <span className="text-secondary">SỐ LƯỢNG:</span>
                <span className="text-secondary">
                  CÒN {product.stockRemaining} CHIẾC TRONG XƯỞNG ĐỢT 1
                </span>
              </div>

              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-5 flex items-center justify-between bg-surface-container-low border border-outline-variant/50 px-3 py-2.5">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-primary hover:text-secondary px-1 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="font-label-numeric text-label-numeric text-primary tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-primary hover:text-secondary px-1 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product.id)}
                  className="col-span-7 flex items-center justify-center gap-2 bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/50 font-label-uppercase text-[11px] tracking-[0.15em] uppercase text-primary transition-colors cursor-pointer"
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{
                      fontVariationSettings: isWished ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    favorite
                  </span>
                  <span>{isWished ? 'ĐÃ LƯU YÊU THÍCH' : 'YÊU THÍCH'}</span>
                </button>
              </div>
            </div>

            {/* Primary & Express Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => onAddToCart(product, selectedColor.name, quantity)}
                className="w-full py-4 bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] hover:bg-inverse-surface transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  shopping_bag
                </span>
                <span>THÊM VÀO GIỎ HÀNG</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onAddToCart(product, selectedColor.name, quantity);
                  onNavigate('checkout');
                }}
                className="w-full py-4 bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] transition-colors cursor-pointer"
              >
                MUA NGAY • GIAO HỎA TỐC
              </button>
            </div>

            {/* Trust Micro Badges */}
            <div className="flex items-center justify-between pt-2 pb-4 border-b border-outline-variant/30 text-on-surface-variant font-body-sm text-[12px]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  local_shipping
                </span>
                <span>Miễn phí giao hàng toàn quốc</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">
                  verified_user
                </span>
                <span>Bảo hành da trọn đời</span>
              </div>
            </div>

            {/* Accordion Details */}
            <div className="divide-y divide-outline-variant/30">
              {/* Accordion 1 */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex items-center justify-between font-label-uppercase text-[11px] tracking-[0.15em] text-primary uppercase py-1 cursor-pointer"
                >
                  <span>MÔ TẢ &amp; CẢM HỨNG THIẾT KẾ</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {openAccordion === 'description' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'description' && (
                  <div className="pt-3 space-y-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {product.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 2 */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion('dimensions')}
                  className="w-full flex items-center justify-between font-label-uppercase text-[11px] tracking-[0.15em] text-primary uppercase py-1 cursor-pointer"
                >
                  <span>KÍCH THƯỚC &amp; TRỌNG LƯỢNG</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {openAccordion === 'dimensions' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'dimensions' && (
                  <div className="pt-3 space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                    <p>• Chiều ngang: {product.dimensions.width}</p>
                    <p>• Chiều cao: {product.dimensions.height}</p>
                    <p>• Độ sâu đáy: {product.dimensions.depth}</p>
                    <p>• Độ dài quai đeo: {product.dimensions.strapDrop}</p>
                    <p>• Trọng lượng tịnh: {product.dimensions.weight}</p>
                    <p>• Phụ kiện kim loại: {product.hardwareSpec}</p>
                  </div>
                )}
              </div>

              {/* Accordion 3 */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion('care')}
                  className="w-full flex items-center justify-between font-label-uppercase text-[11px] tracking-[0.15em] text-primary uppercase py-1 cursor-pointer"
                >
                  <span>HƯỚNG DẪN CHĂM SÓC &amp; BẢO QUẢN</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {openAccordion === 'care' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'care' && (
                  <div className="pt-3 space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <p>
                      Lau nhẹ bề mặt bằng khăn cotton khô mềm sau mỗi lần sử dụng. Bảo quản trong túi vải lanh hữu cơ đi kèm ở nơi thoáng mát, tránh ánh nắng trực tiếp.
                    </p>
                    <p>
                      Quý khách được hưởng đặc quyền làm sạch và dưỡng sáp ong miễn phí định kỳ mỗi 6 tháng tại UNKNOWN Atelier.
                    </p>
                  </div>
                )}
              </div>

              {/* Accordion 4 */}
              <div className="py-3">
                <button
                  type="button"
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex items-center justify-between font-label-uppercase text-[11px] tracking-[0.15em] text-primary uppercase py-1 cursor-pointer"
                >
                  <span>GIAO HÀNG, HOÀN TRẢ &amp; BẢO HÀNH</span>
                  <span className="material-symbols-outlined text-[18px]">
                    {openAccordion === 'shipping' ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openAccordion === 'shipping' && (
                  <div className="pt-3 space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                    <p>
                      • Giao hoả tốc nội thành Hà Nội &amp; TP. Hồ Chí Minh trong 2-4 giờ (dịch vụ Găng Tay Trắng).
                    </p>
                    <p>
                      • Giao tiêu chuẩn bảo hiểm toàn quốc từ 24-48 giờ làm việc.
                    </p>
                    <p>
                      • Đổi trả miễn phí trong 14 ngày nếu sản phẩm còn nguyên tem niêm phong.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Stylist Concierge Box */}
            <div className="bg-surface-container-low p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  support_agent
                </span>
                <div>
                  <span className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary uppercase block">
                    TƯ VẤN RIÊNG CÙNG STYLIST
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Hỗ trợ phối trang phục &amp; quay cận cảnh
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStylistModalOpen((v) => !v)}
                className="font-label-uppercase text-[10px] tracking-[0.15em] text-primary uppercase underline underline-offset-4 hover:text-secondary cursor-pointer shrink-0"
              >
                {stylistModalOpen ? 'ĐÓNG' : 'LIÊN HỆ NGAY'}
              </button>
            </div>

            {stylistModalOpen && (
              <div className="p-4 bg-surface-container text-body-sm space-y-2 border border-outline-variant/40">
                <p className="font-semibold text-primary">
                  Atelier Concierge — Hà Nội &amp; TP.HCM
                </p>
                <p className="text-on-surface-variant">
                  Hotline / Zalo Private: <strong>090 482 1925</strong> (09:00 – 21:00)
                </p>
                <p className="text-on-surface-variant">
                  Chuyên viên của chúng tôi sẵn sàng gửi video cận cảnh phôi da thực tế dưới ánh sáng tự nhiên ngay lập tức.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Editorial Quote & Craftsmanship Section */}
      <section className="w-full bg-surface-container-low py-space-xl mt-space-lg">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 space-y-space-md">
            <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.25em] uppercase block">
              TRIẾT LÝ HÌNH KHỐI
            </span>
            <blockquote className="font-editorial-quote text-editorial-quote text-primary italic">
              “Sự tĩnh lặng không phải là khoảng trống, mà là nơi mọi chi tiết thừa thãi được buông bỏ để nhường chỗ cho vẻ đẹp trường tồn.”
            </blockquote>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Mỗi chiếc túi {product.name} trải qua hơn 36 giờ tạo hình tại xưởng bởi hai nghệ nhân bậc thầy, phối hợp giữa đường cắt laser vi điểm và mũi khâu thủ công yên ả.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[16/9] bg-primary overflow-hidden">
              <img
                src={BRAND_IMAGES.storyArtisan2}
                alt="Artisan Saddle Stitching"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products (SẢN PHẨM CÓ THỂ BẠN SẼ THÍCH) */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-lg gap-4">
          <div>
            <span className="font-label-uppercase text-[10px] tracking-[0.25em] text-secondary uppercase block mb-1">
              BỘ PHỐI HỢP ĐỒNG BỘ
            </span>
            <h2 className="font-headline-md text-headline-md text-primary uppercase">
              SẢN PHẨM CÓ THỂ BẠN SẼ THÍCH
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('collections')}
            className="font-label-uppercase text-[10px] tracking-[0.18em] text-primary uppercase underline underline-offset-4 hover:text-secondary cursor-pointer self-start sm:self-auto"
          >
            XEM TẤT CẢ BỘ SƯU TẬP →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {relatedProducts.map((rel) => (
            <div
              key={rel.id}
              onClick={() => onNavigate('product-detail', rel.id)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/5] bg-surface-container overflow-hidden">
                <img
                  src={rel.image}
                  alt={rel.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="pt-3 space-y-1">
                <span className="font-label-uppercase text-[9px] tracking-[0.18em] text-secondary uppercase block">
                  {rel.edition}
                </span>
                <h3 className="font-headline-sm text-[20px] text-primary group-hover:text-secondary transition-colors">
                  {rel.name}
                </h3>
                <span className="font-label-numeric text-label-numeric text-primary font-semibold block tabular-nums">
                  {rel.priceFormatted}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
