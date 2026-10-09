import React, { useState } from 'react';
import { CartItem } from './CartScreen';
import { ScreenName } from './Header';

interface CheckoutScreenProps {
  items: CartItem[];
  monogram: string;
  onNavigate: (screen: ScreenName, productId?: string) => void;
  onOrderSuccess: () => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  items,
  monogram,
  onNavigate,
  onOrderSuccess,
}) => {
  const [emailOrPhone, setEmailOrPhone] = useState('nguyenvana@gmail.com');
  const [subscribeVip, setSubscribeVip] = useState(true);
  const [fullName, setFullName] = useState('Nguyễn Văn A');
  const [address, setAddress] = useState('Căn hộ 12B, Tháp Diamond, 34 Lê Duẩn');
  const [city, setCity] = useState('TP. Hồ Chí Minh');
  const [district, setDistrict] = useState('Quận 1');
  const [note, setNote] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'express' | 'standard'>('express');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'vietqr' | 'cod'>('card');
  const [cardNumber, setCardNumber] = useState('4111 •••• •••• 8892');
  const [cardExpiry, setCardExpiry] = useState('08 / 28');
  const [cardCvv, setCardCvv] = useState('888');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discount = promoApplied ? 500000 : 0;
  const finalTotal = Math.max(0, subtotal - discount);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderCompleted(true);
    onOrderSuccess();
  };

  if (orderCompleted) {
    return (
      <div className="min-h-screen bg-surface flex flex-col justify-between">
        <div className="py-6 border-b border-outline-variant/30 text-center">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="font-headline-md text-headline-md tracking-[0.25em] uppercase text-primary cursor-pointer"
          >
            UNKNOWN
          </button>
        </div>

        <div className="max-w-2xl mx-auto px-margin-mobile py-space-xl text-center space-y-6">
          <div className="w-14 h-14 bg-primary text-on-primary mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px]">check</span>
          </div>
          <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.25em] uppercase block">
            XÁC NHẬN LƯU TRỮ • MÃ ĐƠN #UNK-2025-089
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Cảm Ơn Quý Khách Đã Đồng Hành Cùng UNKNOWN
          </h1>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Đơn hàng tuyển chọn của <strong>{fullName}</strong> đã được chuyển tới Xưởng Chế Tác UNKNOWN. Nghệ nhân của chúng tôi đang kiểm tra lần cuối từng đường kim và đóng gói hộp cứng Archivist kèm chứng thư.
          </p>

          <div className="bg-surface-container-low p-6 text-left space-y-2 font-body-sm border border-outline-variant/40">
            <div className="flex justify-between">
              <span className="text-secondary">Người nhận:</span>
              <span className="text-primary font-medium">{fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Địa chỉ bàn giao:</span>
              <span className="text-primary font-medium">
                {address}, {district}, {city}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Phương thức vận chuyển:</span>
              <span className="text-primary font-medium">
                {shippingMethod === 'express'
                  ? 'Chuyển Phát Hỏa Tốc Nội Thành (Găng Tay Trắng)'
                  : 'Giao Hàng Tiêu Chuẩn Bảo Hiểm Toàn Quốc'}
              </span>
            </div>
            {monogram && (
              <div className="flex justify-between">
                <span className="text-secondary">Khắc chữ lồng Bespoke:</span>
                <span className="text-primary font-bold">{monogram}</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-outline-variant/30">
              <span className="text-primary font-semibold">Tổng thanh toán:</span>
              <span className="font-label-numeric text-primary font-bold tabular-nums">
                {finalTotal.toLocaleString('vi-VN')} VNĐ
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="px-10 py-4 bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] hover:bg-inverse-surface transition-colors cursor-pointer"
            >
              TRỞ VỀ TRANG CHỦ
            </button>
            <button
              type="button"
              onClick={() => onNavigate('collections')}
              className="px-8 py-4 border border-primary text-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
            >
              TIẾP TỤC KHÁM PHÁ
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-6 border-t border-outline-variant/30 flex justify-between text-[12px] text-secondary">
          <span>Chính Sách Hoàn Trả 14 Ngày • Bảo Mật Thông Tin Khách Hàng</span>
          <span>UNKNOWN ATELIER © 2025</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between">
      {/* Minimalist Centered Checkout Header matching Image 9 */}
      <div>
        <div className="py-6 border-b border-outline-variant/30 text-center">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="font-headline-md text-[28px] tracking-[0.25em] uppercase text-primary cursor-pointer"
          >
            UNKNOWN
          </button>
        </div>

        {/* Sub-bar with Back to Bag & SSL Badge */}
        <div className="max-w-6xl mx-auto w-full px-margin-mobile md:px-margin py-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('cart')}
            className="flex items-center gap-2 font-label-uppercase text-[11px] tracking-[0.15em] uppercase text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <span>← QUAY LẠI TÚI ĐỒ</span>
          </button>

          <div className="px-3.5 py-1.5 bg-surface-container-low border border-outline-variant/40 flex items-center gap-2 font-label-uppercase text-[10px] tracking-[0.15em] text-primary uppercase">
            <span className="material-symbols-outlined text-[14px]">lock</span>
            <span>MÃ HÓA BẢO MẬT SSL 256-BIT</span>
          </div>
        </div>

        {/* Main 2-Column Checkout Funnel */}
        <form
          onSubmit={handleSubmitOrder}
          className="max-w-6xl mx-auto w-full px-margin-mobile md:px-margin pb-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start"
        >
          {/* Left 7 Columns: Step 1 - 4 Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Thông Tin Khách Hàng */}
            <div className="bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/30 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary text-on-primary font-label-numeric text-[12px] flex items-center justify-center rounded-full">
                    1
                  </span>
                  <h2 className="font-headline-sm text-[22px] text-primary">
                    Thông Tin Khách Hàng
                  </h2>
                </div>
                <span className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase">
                  BẮT BUỘC
                </span>
              </div>

              <div className="space-y-2">
                <label className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase block">
                  ĐỊA CHỈ EMAIL HOẶC SỐ ĐIỆN THOẠI
                </label>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-primary focus:outline-none border border-transparent focus:border-primary"
                />
              </div>

              <label className="flex items-center gap-3 cursor-pointer select-none pt-1">
                <input
                  type="checkbox"
                  checked={subscribeVip}
                  onChange={(e) => setSubscribeVip(e.target.checked)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="font-body-sm text-on-surface-variant">
                  Nhận ấn phẩm riêng, thông báo bộ sưu tập giới hạn và đặc quyền UNKNOWN
                </span>
              </label>
            </div>

            {/* Step 2: Địa Chỉ Giao Hàng */}
            <div className="bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/30 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary text-on-primary font-label-numeric text-[12px] flex items-center justify-center rounded-full">
                    2
                  </span>
                  <h2 className="font-headline-sm text-[22px] text-primary">
                    Địa Chỉ Giao Hàng
                  </h2>
                </div>
                <span className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase">
                  CHẾ TÁC TẬN NƠI
                </span>
              </div>

              <div className="space-y-2">
                <label className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase block">
                  HỌ VÀ TÊN NGƯỜI NHẬN
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-primary focus:outline-none border border-transparent focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase block">
                  ĐỊA CHỈ CHI TIẾT (SỐ NHÀ, TÊN ĐƯỜNG, TÒA NHÀ)
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-primary focus:outline-none border border-transparent focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase block">
                    TỈNH / THÀNH PHỐ
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-primary focus:outline-none border border-transparent focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase block">
                    QUẬN / HUYỆN
                  </label>
                  <input
                    type="text"
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-primary focus:outline-none border border-transparent focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase block">
                  GHI CHÚ GIAO HÀNG (TÙY CHỌN)
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Yêu cầu kiểm tra bao bì niêm phong trước khi nhận..."
                  className="w-full bg-surface-container-low px-4 py-3.5 font-body-md text-primary placeholder:text-outline focus:outline-none border border-transparent focus:border-primary"
                />
              </div>
            </div>

            {/* Step 3: Phương Thức Vận Chuyển */}
            <div className="bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/30 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary text-on-primary font-label-numeric text-[12px] flex items-center justify-center rounded-full">
                    3
                  </span>
                  <h2 className="font-headline-sm text-[22px] text-primary">
                    Phương Thức Vận Chuyển
                  </h2>
                </div>
                <span className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase">
                  BẢO HIỂM 100%
                </span>
              </div>

              <div className="space-y-3">
                <label
                  onClick={() => setShippingMethod('express')}
                  className={`p-4 flex items-start justify-between gap-4 cursor-pointer border transition-colors ${
                    shippingMethod === 'express'
                      ? 'bg-surface-container-low border-primary'
                      : 'bg-surface-container-low/50 border-transparent hover:border-outline-variant'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === 'express'}
                      onChange={() => setShippingMethod('express')}
                      className="mt-1 accent-primary"
                    />
                    <div>
                      <span className="font-body-md font-semibold text-primary block">
                        Chuyển Phát Hỏa Tốc Nội Thành (Găng Tay Trắng)
                      </span>
                      <span className="font-body-sm text-on-surface-variant">
                        Nhận trong 2 - 4 giờ, bàn giao trực tiếp kèm hộp quà độc bản
                      </span>
                    </div>
                  </div>
                  <span className="font-label-uppercase text-[11px] tracking-[0.12em] text-primary font-bold shrink-0">
                    MIỄN PHÍ
                  </span>
                </label>

                <label
                  onClick={() => setShippingMethod('standard')}
                  className={`p-4 flex items-start justify-between gap-4 cursor-pointer border transition-colors ${
                    shippingMethod === 'standard'
                      ? 'bg-surface-container-low border-primary'
                      : 'bg-surface-container-low/50 border-transparent hover:border-outline-variant'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === 'standard'}
                      onChange={() => setShippingMethod('standard')}
                      className="mt-1 accent-primary"
                    />
                    <div>
                      <span className="font-body-md font-semibold text-primary block">
                        Giao Hàng Tiêu Chuẩn Bảo Hiểm Toàn Quốc
                      </span>
                      <span className="font-body-sm text-on-surface-variant">
                        24 - 48 giờ làm việc, niêm phong sáp và chứng nhận xuất xưởng
                      </span>
                    </div>
                  </div>
                  <span className="font-label-uppercase text-[11px] tracking-[0.12em] text-primary font-bold shrink-0">
                    MIỄN PHÍ
                  </span>
                </label>
              </div>
            </div>

            {/* Step 4: Phương Thức Thanh Toán */}
            <div className="bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/30 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary text-on-primary font-label-numeric text-[12px] flex items-center justify-center rounded-full">
                    4
                  </span>
                  <h2 className="font-headline-sm text-[22px] text-primary">
                    Phương Thức Thanh Toán
                  </h2>
                </div>
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  verified_user
                </span>
              </div>

              <div className="space-y-3">
                {/* Credit Card Option */}
                <div
                  className={`p-5 border transition-colors space-y-4 ${
                    paymentMethod === 'card'
                      ? 'bg-surface-container-low border-primary'
                      : 'bg-surface-container-low/50 border-transparent'
                  }`}
                >
                  <label
                    onClick={() => setPaymentMethod('card')}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-primary"
                      />
                      <span className="font-body-md font-semibold text-primary">
                        Thẻ Quốc Tế (Visa / Mastercard / Amex)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-label-uppercase text-[9px] text-secondary">
                      <span className="px-2 py-0.5 bg-surface border border-outline-variant/40">
                        VISA
                      </span>
                      <span className="px-2 py-0.5 bg-surface border border-outline-variant/40">
                        MC
                      </span>
                    </div>
                  </label>

                  {paymentMethod === 'card' && (
                    <div className="space-y-3 pt-2">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Số thẻ (xxxx xxxx xxxx xxxx)"
                        className="w-full bg-surface px-4 py-3 font-body-sm text-primary border border-outline-variant/40 focus:outline-none focus:border-primary"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM / YY"
                          className="w-full bg-surface px-4 py-3 font-body-sm text-primary border border-outline-variant/40 focus:outline-none focus:border-primary"
                        />
                        <input
                          type="text"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="CVV"
                          className="w-full bg-surface px-4 py-3 font-body-sm text-primary border border-outline-variant/40 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* VietQR Option */}
                <label
                  onClick={() => setPaymentMethod('vietqr')}
                  className={`p-4 flex items-center justify-between cursor-pointer border transition-colors ${
                    paymentMethod === 'vietqr'
                      ? 'bg-surface-container-low border-primary'
                      : 'bg-surface-container-low/50 border-transparent hover:border-outline-variant'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'vietqr'}
                      onChange={() => setPaymentMethod('vietqr')}
                      className="accent-primary"
                    />
                    <span className="font-body-md font-medium text-primary">
                      Chuyển Khoản Trực Tiếp Qua VietQR
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    qr_code_2
                  </span>
                </label>

                {/* COD Option */}
                <label
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 flex items-center justify-between cursor-pointer border transition-colors ${
                    paymentMethod === 'cod'
                      ? 'bg-surface-container-low border-primary'
                      : 'bg-surface-container-low/50 border-transparent hover:border-outline-variant'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-primary"
                    />
                    <span className="font-body-md font-medium text-primary">
                      Thanh Toán Khi Nhận Hàng (COD Cao Cấp)
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    payments
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Đơn Hàng Tuyển Chọn Sticky Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-10 space-y-5">
            <div className="bg-surface-container-lowest p-6 md:p-8 border border-outline-variant/30 space-y-6">
              <div className="flex items-baseline justify-between">
                <h2 className="font-headline-sm text-[22px] text-primary">
                  Đơn Hàng Tuyển Chọn
                </h2>
                <span className="font-label-uppercase text-[10px] tracking-[0.15em] text-secondary uppercase">
                  {items.reduce((acc, i) => acc + i.quantity, 0)} ẤN PHẨM
                </span>
              </div>

              {/* Item List */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <div className="relative w-16 h-20 bg-surface-container shrink-0">
                      <span className="absolute -top-1.5 -left-1.5 z-10 w-5 h-5 bg-primary text-on-primary font-label-numeric text-[10px] rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline-sm text-[17px] text-primary truncate">
                        {item.product.name}
                      </h4>
                      <p className="font-body-sm text-[12px] text-on-surface-variant truncate">
                        {item.product.leatherSpec} / {item.colorName}
                      </p>
                      <span className="font-label-numeric text-[13px] text-primary font-semibold block mt-0.5 tabular-nums">
                        {(item.product.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* VIP Promo Input */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="MÃ ƯU ĐÃI NGHỆ NHÂN / VIP"
                  className="flex-1 bg-surface-container-low px-3.5 py-2.5 font-label-uppercase text-[10px] tracking-[0.12em] uppercase text-primary placeholder:text-outline focus:outline-none border border-transparent focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (promoCode.trim()) setPromoApplied(true);
                  }}
                  className="px-5 py-2.5 bg-primary text-on-primary font-label-uppercase text-[10px] tracking-[0.15em] uppercase hover:bg-inverse-surface transition-colors cursor-pointer shrink-0"
                >
                  ÁP DỤNG
                </button>
              </div>

              {/* Subtotals */}
              <div className="space-y-2.5 pt-4 border-t border-outline-variant/30 font-body-sm text-[13px]">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Tạm tính</span>
                  <span className="font-label-numeric text-primary font-semibold tabular-nums">
                    {subtotal.toLocaleString('vi-VN')} VNĐ
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-secondary">
                    <span>Đặc quyền VIP Atelier</span>
                    <span className="tabular-nums">-500.000 VNĐ</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Vận chuyển bảo đảm</span>
                  <span className="font-label-uppercase text-[10px] tracking-[0.12em] text-primary font-semibold">
                    MIỄN PHÍ
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">
                    Bao bì quà tặng &amp; Chứng nhận
                  </span>
                  <span className="font-label-uppercase text-[10px] tracking-[0.12em] text-secondary">
                    BAO GỒM
                  </span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="pt-4 border-t border-outline-variant/30 flex items-baseline justify-between">
                <span className="font-headline-sm text-[20px] text-primary">
                  Tổng Cộng
                </span>
                <div className="text-right">
                  <span className="font-headline-md text-[30px] text-primary tabular-nums">
                    {finalTotal.toLocaleString('vi-VN')}
                  </span>{' '}
                  <span className="font-label-uppercase text-[11px] text-secondary">
                    VNĐ
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-on-primary font-label-uppercase text-[11px] tracking-[0.2em] uppercase hover:bg-inverse-surface transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ĐẶT HÀNG &amp; HOÀN TẤT THANH TOÁN</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>

              <p className="text-center font-body-sm text-[11px] text-outline">
                Giao diện bản mẫu chính thức thương hiệu UNKNOWN. Mọi quyền được bảo lưu.
              </p>
            </div>

            {/* Bespoke Certificate Card */}
            <div className="bg-surface-container-low p-5 flex items-start gap-3 border border-outline-variant/20">
              <span className="material-symbols-outlined text-[22px] text-primary mt-0.5">
                workspace_premium
              </span>
              <div className="space-y-1">
                <h4 className="font-headline-sm text-[16px] text-primary">
                  Chứng Nhận Thủ Công Độc Bản
                </h4>
                <p className="font-body-sm text-[12px] text-on-surface-variant">
                  Mỗi chiếc túi đều được khắc số hiệu xưởng riêng biệt cùng chế độ bảo dưỡng trọn đời tại UNKNOWN Atelier.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Minimalist Checkout Footer matching Image 9 */}
      <footer className="max-w-6xl mx-auto w-full px-margin-mobile md:px-margin py-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-[12px] text-secondary">
        <div className="flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={() => onNavigate('story')}
            className="hover:text-primary cursor-pointer"
          >
            Chính Sách Hoàn Trả 14 Ngày
          </button>
          <button
            type="button"
            onClick={() => onNavigate('story')}
            className="hover:text-primary cursor-pointer"
          >
            Bảo Mật Thông Tin Khách Hàng
          </button>
          <button
            type="button"
            onClick={() => onNavigate('story')}
            className="hover:text-primary cursor-pointer"
          >
            Điều Khoản Dịch Vụ
          </button>
        </div>
        <span className="font-label-uppercase text-[10px] tracking-[0.15em] uppercase">
          UNKNOWN ATELIER © 2025
        </span>
      </footer>
    </div>
  );
};
