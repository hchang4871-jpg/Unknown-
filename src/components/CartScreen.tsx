import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ScreenName } from './Header';

export interface CartItem {
  product: Product;
  colorName: string;
  colorHex: string;
  quantity: number;
  tagLabel: string;
}

interface CartScreenProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onResetDefaultCart: () => void;
  onClearCart: () => void;
  monogram: string;
  onChangeMonogram: (val: string) => void;
  onNavigate: (screen: ScreenName, productId?: string) => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onResetDefaultCart,
  onClearCart,
  monogram,
  onChangeMonogram,
  onNavigate,
}) => {
  const [monogramInput, setMonogramInput] = useState(monogram);
  const [monogramSaved, setMonogramSaved] = useState(Boolean(monogram));
  const [savedForLater, setSavedForLater] = useState<string[]>([]);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const formattedSubtotal = subtotal.toLocaleString('vi-VN') + ' VNĐ';

  const handleApplyMonogram = (e: React.FormEvent) => {
    e.preventDefault();
    onChangeMonogram(monogramInput.toUpperCase().slice(0, 3));
    setMonogramSaved(true);
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Sub-announcement bar matching Image 7 */}
      <div className="bg-surface-container-high border-b border-outline-variant/30 py-2.5 px-margin-mobile md:px-margin">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-label-uppercase tracking-[0.16em] uppercase text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[15px] text-primary">
              verified
            </span>
            <span>
              CHẾ TÁC GIỚI HẠN THỦ CÔNG — ĐƠN HÀNG ĐỦ ĐIỀU KIỆN NHẬN BAO BÌ ĐỘC BẢN UNKNOWN
            </span>
          </div>
          <button
            type="button"
            onClick={() => (items.length > 0 ? onClearCart() : onResetDefaultCart())}
            className="underline underline-offset-4 text-primary hover:text-secondary cursor-pointer shrink-0"
          >
            {items.length > 0 ? 'XEM GIAO DIỆN GIỎ HÀNG TRỐNG' : 'KHÔI PHỤC GIỎ HÀNG MẪU (2 SẢN PHẨM)'}
          </button>
        </div>
      </div>

      {/* Main Cart Section */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-lg">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-space-md border-b border-outline-variant/40 gap-4">
          <div className="space-y-1">
            <span className="font-label-uppercase text-[10px] tracking-[0.2em] text-secondary uppercase block">
              LƯU TRỮ TUYỂN CHỌN / KHO LƯU TRỮ CÁ NHÂN
            </span>
            <div className="flex items-baseline gap-3">
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase tracking-tight">
                GIỎ HÀNG CỦA BẠN
              </h1>
              <span className="font-body-md text-on-surface-variant">
                ({items.reduce((acc, i) => acc + i.quantity, 0)} sản phẩm)
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('collections')}
            className="font-label-uppercase text-[10px] tracking-[0.18em] text-primary uppercase underline underline-offset-8 hover:text-secondary cursor-pointer self-start sm:self-auto"
          >
            ← TIẾP TỤC KHÁM PHÁ BỘ SƯU TẬP
          </button>
        </div>

        {items.length === 0 ? (
          <div className="py-space-xl text-center space-y-6 bg-surface-container-low my-space-md p-8">
            <span className="material-symbols-outlined text-[40px] text-secondary">
              shopping_bag
            </span>
            <div className="space-y-2 max-w-md mx-auto">
              <h2 className="font-headline-md text-headline-sm text-primary uppercase">
                Kho Lưu Trữ Của Bạn Đang Trống
              </h2>
              <p className="font-body-sm text-on-surface-variant">
                Hãy khám phá các thiết kế chế tác thủ công trong Bộ Sưu Tập 2025 hoặc khôi phục hai tác phẩm mẫu (The Muse &amp; The Écru).
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onResetDefaultCart}
                className="px-8 py-4 bg-primary text-on-primary font-label-uppercase text-[11px] tracking-[0.2em] uppercase hover:bg-inverse-surface transition-colors cursor-pointer"
              >
                KHÔI PHỤC 2 TÁC PHẨM MẪU
              </button>
              <button
                type="button"
                onClick={() => onNavigate('collections')}
                className="px-8 py-4 border border-primary text-primary font-label-uppercase text-[11px] tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
              >
                XEM BỘ SƯU TẬP
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter pt-space-lg items-start">
            {/* Left 7 Columns: Itemized Archive List & Bespoke Services */}
            <div className="lg:col-span-7 space-y-space-md">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-surface-container-low p-6 flex flex-col sm:flex-row gap-6 border border-outline-variant/20"
                >
                  {/* Thumbnail */}
                  <div
                    onClick={() => onNavigate('product-detail', item.product.id)}
                    className="relative w-full sm:w-36 aspect-[4/5] bg-surface-container shrink-0 overflow-hidden cursor-pointer"
                  >
                    <span className="absolute top-2 left-2 z-10 bg-primary text-on-primary font-label-uppercase text-[8px] tracking-[0.15em] px-2 py-0.5 uppercase">
                      {item.tagLabel}
                    </span>
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase">
                          MÃ LƯU TRỮ: {item.product.sku}
                        </span>
                        <span className="font-label-numeric text-label-numeric text-primary font-semibold tabular-nums">
                          {(item.product.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                        </span>
                      </div>

                      <h3
                        onClick={() => onNavigate('product-detail', item.product.id)}
                        className="font-headline-sm text-headline-sm text-primary mt-1 cursor-pointer hover:text-secondary transition-colors"
                      >
                        {item.product.name}
                      </h3>

                      <div className="mt-2 space-y-1 font-body-sm text-[13px] text-on-surface-variant">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 inline-block border border-outline-variant"
                            style={{ backgroundColor: item.colorHex }}
                          />
                          <span>
                            Sắc thái: <strong className="text-primary">{item.colorName}</strong> ({item.product.leatherSpec})
                          </span>
                        </div>
                        <p>Phụ kiện kim loại: {item.product.hardwareSpec}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-outline-variant/30">
                      <div className="flex items-center gap-3 bg-surface px-3 py-1.5 border border-outline-variant/40">
                        <span className="font-label-uppercase text-[9px] tracking-[0.15em] text-secondary uppercase">
                          SỐ LƯỢNG
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="text-primary hover:text-secondary px-1 cursor-pointer"
                        >
                          −
                        </button>
                        <span className="font-label-numeric text-[13px] text-primary tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="text-primary hover:text-secondary px-1 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4 font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase">
                        <button
                          type="button"
                          onClick={() =>
                            setSavedForLater((prev) =>
                              prev.includes(item.product.id)
                                ? prev.filter((id) => id !== item.product.id)
                                : [...prev, item.product.id]
                            )
                          }
                          className="flex items-center gap-1 hover:text-primary cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            bookmark
                          </span>
                          <span>
                            {savedForLater.includes(item.product.id) ? 'ĐÃ LƯU' : 'LƯU LẠI'}
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="flex items-center gap-1 hover:text-error cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            close
                          </span>
                          <span>XÓA</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Archivist Packaging Inclusion Box */}
              <div className="bg-surface-container-low p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-outline-variant/20">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[22px] text-primary mt-0.5">
                    inventory_2
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-body-md font-semibold text-primary">
                      Đặc quyền Hộp Đóng Gói UNKNOWN Archivist
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Tất cả sản phẩm đều được bọc trong túi vải lanh hữu cơ, hộp cứng dập chìm gia huy và thiệp thư tay xác thực.
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-surface border border-outline-variant/50 font-label-uppercase text-[9px] tracking-[0.15em] text-primary uppercase whitespace-nowrap shrink-0">
                  MẶC ĐỊNH BAO GỒM
                </span>
              </div>

              {/* Bespoke Monogram Input Box */}
              <div className="bg-surface-container-low p-6 space-y-4 border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">
                      edit_note
                    </span>
                    <span className="font-label-uppercase text-[11px] tracking-[0.15em] text-primary uppercase">
                      KHẮC TÊN NGHỆ NHÂN &amp; CHỮ LỒNG (BESPOKE MONOGRAM)
                    </span>
                  </div>
                  <span className="font-label-uppercase text-[9px] tracking-[0.15em] text-secondary uppercase">
                    MIỄN PHÍ DỊCH VỤ
                  </span>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Khắc dập chìm tối đa 3 chữ cái viết hoa trên móc thẻ da đồng bộ kèm túi.
                </p>

                <form onSubmit={handleApplyMonogram} className="flex flex-wrap items-center gap-3">
                  <input
                    type="text"
                    maxLength={4}
                    value={monogramInput}
                    onChange={(e) => {
                      setMonogramInput(e.target.value.toUpperCase());
                      setMonogramSaved(false);
                    }}
                    placeholder="V Í  D Ụ :  U ."
                    className="w-40 bg-surface px-4 py-2.5 border border-outline-variant/60 font-headline-sm text-[16px] tracking-[0.3em] uppercase text-primary focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-surface-container-highest hover:bg-primary hover:text-on-primary font-label-uppercase text-[10px] tracking-[0.18em] uppercase text-primary transition-colors cursor-pointer"
                  >
                    {monogramSaved && monogramInput ? `ĐÃ ÁP DỤNG (${monogramInput})` : 'ÁP DỤNG KÝ HIỆU'}
                  </button>
                </form>
              </div>
            </div>

            {/* Right 5 Columns: Order Summary (TỔNG QUAN ĐƠN HÀNG) */}
            <div className="lg:col-span-5 space-y-space-md">
              <div className="bg-surface-container-low p-6 md:p-8 border border-outline-variant/30 space-y-6">
                <h2 className="font-headline-sm text-headline-sm text-primary uppercase tracking-wide">
                  TỔNG QUAN ĐƠN HÀNG
                </h2>

                <div className="space-y-3 font-body-sm text-body-sm border-b border-outline-variant/30 pb-6">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Tạm tính giỏ hàng</span>
                    <span className="font-label-numeric text-primary font-semibold tabular-nums">
                      {formattedSubtotal}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="text-on-surface-variant block">
                        Vận chuyển tiêu chuẩn
                      </span>
                      <span className="text-[11px] text-outline">
                        Bảo hiểm trọn gói giá trị cao
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary font-bold block">
                        MIỄN PHÍ
                      </span>
                      <span className="text-[11px] text-outline line-through tabular-nums">
                        120.000 VNĐ
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">
                      Đóng gói quà tặng cao cấp
                    </span>
                    <span className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary font-bold">
                      ĐÃ BAO GỒM
                    </span>
                  </div>

                  {monogram && (
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">
                        Khắc chữ lồng Bespoke ({monogram})
                      </span>
                      <span className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary font-bold">
                        MIỄN PHÍ
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Thuế GTGT (VAT 8%)</span>
                    <span className="text-outline">Đã tính vào giá niêm yết</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-end">
                  <span className="font-headline-sm text-[18px] text-primary uppercase">
                    TỔNG THANH
                    <br />
                    TOÁN
                  </span>
                  <div className="text-right">
                    <span className="font-headline-md text-[32px] text-primary block leading-none tabular-nums">
                      { subtotal.toLocaleString('vi-VN') }
                    </span>
                    <span className="font-headline-sm text-[20px] text-primary uppercase">
                      VNĐ
                    </span>
                    <span className="block font-label-uppercase text-[9px] tracking-[0.15em] text-outline mt-1">
                      ĐÃ BAO GỒM TOÀN BỘ DỊCH VỤ
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('checkout')}
                    className="w-full py-4 bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] hover:bg-inverse-surface transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>TIẾN HÀNH THANH TOÁN</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('collections')}
                    className="w-full py-3 text-center font-label-uppercase text-[10px] tracking-[0.2em] uppercase text-primary hover:text-secondary transition-colors cursor-pointer"
                  >
                    TIẾP TỤC MUA SẮM
                  </button>
                </div>

                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between font-label-uppercase text-[9px] tracking-[0.15em] text-outline uppercase">
                  <span>CHẤP NHẬN:</span>
                  <div className="flex items-center gap-3 text-primary">
                    <span>VIETQR</span>
                    <span>VISA</span>
                    <span>MASTERCARD</span>
                    <span>APPLE PAY</span>
                  </div>
                </div>
              </div>

              {/* Security & Insurance Guarantees */}
              <div className="px-2 space-y-4 font-body-sm text-[12px] text-on-surface-variant">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                    lock
                  </span>
                  <div>
                    <strong className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary uppercase block">
                      BẢO MẬT GIAO DỊCH TUYỆT ĐỐI
                    </strong>
                    <p>
                      Mã hóa chuẩn PCI-DSS 256-bit cao cấp nhất cho mọi kênh thanh toán trực tuyến.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                    local_shipping
                  </span>
                  <div>
                    <strong className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary uppercase block">
                      VẬN CHUYỂN CÓ BẢO HIỂM 100%
                    </strong>
                    <p>
                      Bồi hoàn đầy đủ hoặc chế tác thay thế ngay lập tức trong trường hợp thất lạc hoặc hư hại khi vận chuyển.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                    support_agent
                  </span>
                  <div>
                    <strong className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary uppercase block">
                      HỖ TRỢ KHÁCH HÀNG 24/7
                    </strong>
                    <p>
                      Chuyên viên tư vấn Atelier riêng biệt luôn sẵn sàng hỗ trợ trực tuyến qua hotline hoặc Zalo Concierge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Bottom Philosophy Quote Box matching Image 7 */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-space-lg">
        <div className="bg-surface-container-low p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-label-uppercase text-[10px] tracking-[0.25em] text-secondary uppercase block">
              TRIẾT LÝ CHẾ TÁC
            </span>
            <blockquote className="font-editorial-quote text-editorial-quote text-primary italic">
              &ldquo;Mỗi vết cắt, mỗi đường may tại UNKNOWN không đơn thuần tạo ra một phụ kiện, mà lưu giữ sự tôn nghiêm của thời gian và vẻ tĩnh lặng tuyệt đối của da thật nguyên bản.&rdquo;
            </blockquote>
            <span className="font-label-uppercase text-[10px] tracking-[0.2em] text-outline uppercase block pt-1">
              — ATELIER TRƯỞNG UNKNOWN, HÀ NỘI
            </span>
          </div>

          <div className="lg:col-span-4 flex flex-row lg:flex-col items-start lg:items-end justify-between gap-6 border-t lg:border-t-0 lg:border-l border-outline-variant/40 pt-4 lg:pt-0 lg:pl-8">
            <div className="text-left lg:text-right">
              <span className="font-headline-md text-[28px] text-primary block tabular-nums">
                100%
              </span>
              <span className="font-label-uppercase text-[9px] tracking-[0.18em] text-secondary uppercase">
                THỦ CÔNG TẠI VIỆT NAM
              </span>
            </div>
            <div className="text-left lg:text-right">
              <span className="font-headline-md text-[28px] text-primary block">
                TRỌN ĐỜI
              </span>
              <span className="font-label-uppercase text-[9px] tracking-[0.18em] text-secondary uppercase">
                BẢO HÀNH ĐƯỜNG CHỈ &amp; DA
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
