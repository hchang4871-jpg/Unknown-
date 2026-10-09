import React from 'react';
import { ScreenName } from './Header';

interface FooterProps {
  onNavigate: (screen: ScreenName, productId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-tertiary-container text-inverse-on-surface mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 flex flex-col justify-between space-y-space-md">
            <div>
              <span className="font-headline-md text-headline-md tracking-[0.2em] uppercase text-inverse-on-surface block mb-space-xs">
                UNKNOWN
              </span>
              <p className="font-body-sm text-body-sm text-on-tertiary-container max-w-sm">
                Nghệ thuật chế tác da thủ công tĩnh lặng, tôn vinh hình khối kiến trúc và vẻ đẹp trường tồn qua từng đường nét nguyên bản.
              </p>
            </div>
            <div className="flex items-center gap-space-sm text-on-tertiary-container">
              <span className="font-label-uppercase text-label-uppercase uppercase tracking-wider text-inverse-on-surface">
                Khu vực / Tiền tệ:
              </span>
              <span className="font-label-numeric text-label-numeric text-inverse-on-surface underline decoration-outline-variant underline-offset-4 cursor-pointer hover:text-on-secondary transition-colors">
                VNĐ (Việt Nam)
              </span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-space-sm">
            <h3 className="font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] text-inverse-on-surface">
              Cửa hàng
            </h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-tertiary-container">
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('collections')}
                  className="text-left cursor-pointer"
                >
                  Bộ sưu tập túi xách
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('collections')}
                  className="text-left cursor-pointer"
                >
                  Phụ kiện da thủ công
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('product-detail', 'the-atelier')}
                  className="text-left cursor-pointer"
                >
                  Tác phẩm đặt hàng riêng
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('collections')}
                  className="text-left cursor-pointer"
                >
                  Lưu trữ Archive
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-space-sm">
            <h3 className="font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] text-inverse-on-surface">
              Về chúng tôi
            </h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-tertiary-container">
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="text-left cursor-pointer"
                >
                  Triết lý thiết kế
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="text-left cursor-pointer"
                >
                  Nguồn gốc chất liệu da
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="text-left cursor-pointer"
                >
                  Xưởng chế tác &amp; Nghệ nhân
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="text-left cursor-pointer"
                >
                  Tính bền vững trường tồn
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-space-sm">
            <h3 className="font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] text-inverse-on-surface">
              Hỗ trợ khách hàng
            </h3>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-tertiary-container">
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="text-left cursor-pointer"
                >
                  Dịch vụ bảo dưỡng &amp; Trọn đời
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('cart')}
                  className="text-left cursor-pointer"
                >
                  Chính sách vận chuyển &amp; Hoàn trả
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('checkout')}
                  className="text-left cursor-pointer"
                >
                  Hẹn lịch tư vấn cá nhân
                </button>
              </li>
              <li className="hover:text-inverse-on-surface transition-colors">
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="text-left cursor-pointer"
                >
                  Điều khoản &amp; Pháp lý
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-space-xl pt-space-md border-t border-on-tertiary-container/20 flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-tertiary-container font-body-sm text-body-sm">
          <div className="font-label-uppercase text-label-uppercase uppercase tracking-wider text-[10px]">
            © 2025 UNKNOWN ATELIER. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.
          </div>
          <div className="flex items-center gap-space-md font-label-uppercase text-label-uppercase uppercase tracking-widest text-[11px]">
            <button
              type="button"
              onClick={() => onNavigate('story')}
              className="hover:text-inverse-on-surface transition-colors cursor-pointer"
            >
              Instagram
            </button>
            <button
              type="button"
              onClick={() => onNavigate('story')}
              className="hover:text-inverse-on-surface transition-colors cursor-pointer"
            >
              TikTok
            </button>
            <button
              type="button"
              onClick={() => onNavigate('story')}
              className="hover:text-inverse-on-surface transition-colors cursor-pointer"
            >
              Pinterest
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
