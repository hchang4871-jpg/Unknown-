import React from 'react';
import { BRAND_IMAGES } from '../data/products';

export type ScreenName = 'home' | 'collections' | 'product-detail' | 'story' | 'cart' | 'checkout';

interface HeaderProps {
  currentScreen: ScreenName;
  onNavigate: (screen: ScreenName, productId?: string) => void;
  cartCount: number;
  onOpenCartDrawer: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCartDrawer,
  onOpenSearch,
}) => {
  return (
    <>
      <div
        onClick={() => onNavigate('collections')}
        className="bg-tertiary-container text-inverse-on-surface text-center py-2 px-margin-mobile md:px-margin font-label-uppercase text-label-uppercase tracking-[0.2em] uppercase select-none transition-colors duration-300 cursor-pointer hover:bg-primary"
      >
        GIỚI THIỆU BỘ SƯU TẬP ĐẦU TIÊN — KHÁM PHÁ UNKNOWN
      </div>
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-md transition-all duration-300 border-b border-outline-variant/20">
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-8">
          {/* Zone 1: Navigation Links */}
          <nav className="hidden md:flex items-center gap-space-md">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`font-label-uppercase text-label-uppercase transition-colors uppercase tracking-[0.15em] whitespace-nowrap shrink-0 cursor-pointer ${
                currentScreen === 'home'
                  ? 'text-primary font-bold underline underline-offset-8 decoration-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Cửa hàng
            </button>
            <button
              type="button"
              onClick={() => onNavigate('collections')}
              className={`font-label-uppercase text-label-uppercase transition-colors uppercase tracking-[0.15em] whitespace-nowrap shrink-0 cursor-pointer ${
                currentScreen === 'collections' || currentScreen === 'product-detail'
                  ? 'text-primary font-bold underline underline-offset-8 decoration-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Bộ sưu tập
            </button>
            <button
              type="button"
              onClick={() => onNavigate('story')}
              className={`font-label-uppercase text-label-uppercase transition-colors uppercase tracking-[0.15em] whitespace-nowrap shrink-0 cursor-pointer ${
                currentScreen === 'story'
                  ? 'text-primary font-bold underline underline-offset-8 decoration-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Câu chuyện
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() =>
                onNavigate(
                  currentScreen === 'home'
                    ? 'collections'
                    : currentScreen === 'collections'
                    ? 'story'
                    : 'home'
                )
              }
              aria-label="Chuyển trang"
              className="p-1 text-on-surface hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-[22px]">menu</span>
            </button>
          </div>

          {/* Zone 2: Brand Wordmark */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group cursor-pointer focus:outline-none"
            >
              <img
                alt="UNKNOWN Monogram Wordmark"
                className="h-8 w-auto object-contain"
                src={BRAND_IMAGES.logo}
                referrerPolicy="no-referrer"
              />
              <span className="font-headline-sm text-headline-sm tracking-[0.18em] uppercase text-primary font-normal hidden sm:inline-block whitespace-nowrap shrink-0">
                UNKNOWN
              </span>
            </button>
          </div>

          {/* Zone 3: Search, Profile, Cart */}
          <div className="flex items-center gap-space-sm md:gap-space-md shrink-0">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Tìm kiếm"
              className="flex items-center text-on-surface-variant hover:text-on-surface transition-colors p-1.5 focus:outline-none cursor-pointer whitespace-nowrap shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span className="hidden lg:inline ml-1 font-label-uppercase text-label-uppercase uppercase">
                Tìm kiếm
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('cart')}
              aria-label="Hồ sơ lưu trữ cá nhân"
              title="Kho lưu trữ cá nhân"
              className="flex items-center text-on-surface-variant hover:text-on-surface transition-colors p-1 cursor-pointer shrink-0"
            >
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
                src={BRAND_IMAGES.avatar}
                referrerPolicy="no-referrer"
              />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('cart')}
              onContextMenu={(e) => {
                e.preventDefault();
                onOpenCartDrawer();
              }}
              aria-label="Giỏ hàng"
              className={`relative flex items-center transition-colors p-1.5 focus:outline-none group cursor-pointer whitespace-nowrap shrink-0 ${
                currentScreen === 'cart'
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              <span className="hidden lg:inline ml-1 font-label-uppercase text-label-uppercase uppercase">
                Giỏ hàng
              </span>
              <span className="ml-1.5 font-label-numeric text-[11px] leading-none px-1.5 py-0.5 bg-primary text-on-primary rounded-full tabular-nums">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Sub-bar quick screen switcher for effortless review of all 6 screens */}
        <div className="bg-surface-container-low border-t border-outline-variant/30 py-1.5 px-margin-mobile md:px-margin">
          <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-4">
            <span className="font-label-uppercase text-[10px] text-secondary uppercase tracking-[0.2em] whitespace-nowrap shrink-0 hidden sm:inline">
              Danh mục màn hình lưu trữ:
            </span>
            <div className="flex items-center gap-2 sm:gap-4 mx-auto sm:mx-0">
              {[
                { id: 'home', label: '01. Trang Chủ (Home)' },
                { id: 'collections', label: '02. Bộ Sưu Tập (Catalog)' },
                { id: 'product-detail', label: '03. Chi Tiết (The Muse)' },
                { id: 'story', label: '04. Câu Chuyện (Manifeste)' },
                { id: 'cart', label: `05. Giỏ Hàng (${cartCount})` },
                { id: 'checkout', label: '06. Thanh Toán (Checkout)' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id as ScreenName, 'the-muse')}
                  className={`px-2.5 py-1 font-label-uppercase text-[10px] uppercase tracking-[0.12em] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    currentScreen === item.id
                      ? 'bg-primary text-on-primary'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
