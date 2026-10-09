/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS, Product } from './data/products';
import { Header, ScreenName } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { CollectionsScreen } from './components/CollectionsScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { StoryScreen } from './components/StoryScreen';
import { CartScreen, CartItem } from './components/CartScreen';
import { CheckoutScreen } from './components/CheckoutScreen';

const INITIAL_CART: CartItem[] = [
  {
    product: PRODUCTS[0], // THE MUSE (4.850.000 VNĐ)
    colorName: 'Noir Black',
    colorHex: '#000000',
    quantity: 1,
    tagLabel: 'CHẾ TÁC ĐỘC BẢN',
  },
  {
    product: PRODUCTS[2], // THE ÉCRU (4.650.000 VNĐ)
    colorName: 'Écru Ivory',
    colorHex: '#f1eee7',
    quantity: 1,
    tagLabel: 'KỶ PHỤC 01',
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('the-muse');
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);
  const [wishlist, setWishlist] = useState<string[]>(['the-muse']);
  const [monogram, setMonogram] = useState<string>('U.');
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toast, setToast] = useState<{ title: string; desc: string } | null>(null);

  const showToast = (title: string, desc: string) => {
    setToast({ title, desc });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const handleNavigate = (screen: ScreenName, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (
    product: Product,
    colorName?: string,
    quantity: number = 1
  ) => {
    const chosenColor =
      product.colors.find((c) => c.name === colorName) || product.colors[0];

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [
        ...prev,
        {
          product,
          colorName: chosenColor.name,
          colorHex: chosenColor.hex,
          quantity,
          tagLabel: 'CHẾ TÁC ĐỘC BẢN',
        },
      ];
    });

    showToast(
      product.name,
      `${product.priceFormatted} — Đã lưu vào giỏ hàng của bạn`
    );
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const product = PRODUCTS.find((p) => p.id === productId);
      if (product) {
        showToast(
          exists ? 'ĐÃ XÓA KHỎI YÊU THÍCH' : 'ĐÃ LƯU YÊU THÍCH',
          product.name
        );
      }
      return exists ? prev.filter((id) => id !== productId) : [...prev, productId];
    });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const selectedProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const searchResults = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {currentScreen !== 'checkout' && (
        <Header
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          cartCount={totalCartCount}
          onOpenCartDrawer={() => setCartDrawerOpen(true)}
          onOpenSearch={() => setSearchModalOpen(true)}
        />
      )}

      <main className="w-full flex-1 bg-surface">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onAddToCart={(product, color) => handleAddToCart(product, color, 1)}
          />
        )}

        {currentScreen === 'collections' && (
          <CollectionsScreen
            onNavigate={handleNavigate}
            onAddToCart={(product, color) => handleAddToCart(product, color, 1)}
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentScreen === 'product-detail' && (
          <ProductDetailScreen
            product={selectedProduct}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            isWished={wishlist.includes(selectedProduct.id)}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentScreen === 'story' && (
          <StoryScreen onNavigate={handleNavigate} />
        )}

        {currentScreen === 'cart' && (
          <CartScreen
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onResetDefaultCart={() => setCartItems(INITIAL_CART)}
            onClearCart={() => setCartItems([])}
            monogram={monogram}
            onChangeMonogram={setMonogram}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            items={cartItems.length > 0 ? cartItems : INITIAL_CART}
            monogram={monogram}
            onNavigate={handleNavigate}
            onOrderSuccess={() =>
              showToast(
                'ĐẶT HÀNG THÀNH CÔNG',
                'Xưởng chế tác UNKNOWN đã tiếp nhận đơn hàng của bạn.'
              )
            }
          />
        )}
      </main>

      {currentScreen !== 'checkout' && <Footer onNavigate={handleNavigate} />}

      {/* Archival Slide-Over Cart Drawer */}
      {cartDrawerOpen && (
        <aside className="fixed inset-0 z-50">
          <div
            onClick={() => setCartDrawerOpen(false)}
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-surface-container-lowest text-on-surface flex flex-col border-l border-outline-variant/40">
            <div className="h-20 px-space-md flex items-center justify-between border-b border-outline-variant/30">
              <span className="font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] text-primary">
                Giỏ hàng lưu trữ ({totalCartCount})
              </span>
              <button
                type="button"
                onClick={() => setCartDrawerOpen(false)}
                aria-label="Đóng giỏ hàng"
                className="p-1 text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="flex-1 px-space-md py-space-md overflow-y-auto space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 pb-4 border-b border-outline-variant/30"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-24 object-cover bg-surface-container"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-headline-sm text-[18px] text-primary">
                        {item.product.name}
                      </h4>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        {item.colorName}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-label-numeric text-[13px] text-primary tabular-nums">
                        SL: {item.quantity}
                      </span>
                      <span className="font-label-numeric text-[13px] text-primary font-semibold tabular-nums">
                        {(item.product.price * item.quantity).toLocaleString('vi-VN')} VNĐ
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-space-md bg-surface-container-low space-y-space-sm border-t border-outline-variant/30">
              <div className="flex justify-between font-label-uppercase text-label-uppercase uppercase text-on-surface-variant">
                <span>Tổng phụ</span>
                <span className="font-label-numeric text-label-numeric text-on-surface tabular-nums">
                  {cartSubtotal.toLocaleString('vi-VN')} VNĐ
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCartDrawerOpen(false);
                  handleNavigate('cart');
                }}
                className="block w-full py-3.5 bg-surface border border-primary text-primary text-center font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] hover:bg-surface-container transition-colors cursor-pointer"
              >
                Xem chi tiết giỏ hàng
              </button>
              <button
                type="button"
                onClick={() => {
                  setCartDrawerOpen(false);
                  handleNavigate('checkout');
                }}
                className="block w-full py-3.5 bg-primary text-on-primary text-center font-label-uppercase text-label-uppercase uppercase tracking-[0.15em] hover:bg-inverse-surface transition-colors cursor-pointer"
              >
                Tiến hành thanh toán
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Search Overlay Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div
            onClick={() => setSearchModalOpen(false)}
            className="absolute inset-0 bg-primary/30 backdrop-blur-xs"
          />
          <div className="relative z-10 w-full max-w-2xl bg-surface p-6 md:p-8 border border-outline-variant shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-primary pb-3">
              <div className="flex items-center gap-3 flex-1">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  search
                </span>
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm theo tên túi (The Muse, The Écru, Tote...)"
                  className="w-full bg-transparent font-body-md text-primary placeholder:text-outline focus:outline-none"
                />
              </div>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="text-secondary hover:text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto divide-y divide-outline-variant/30">
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSearchModalOpen(false);
                    handleNavigate('product-detail', item.id);
                  }}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-surface-container-low px-2 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-14 object-cover bg-surface-container"
                    />
                    <div>
                      <h4 className="font-headline-sm text-[17px] text-primary">
                        {item.name}
                      </h4>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-label-numeric text-[13px] text-primary tabular-nums">
                    {item.priceFormatted}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Cart Notification Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary p-4 flex items-center gap-4 transition-all duration-300">
          <span className="material-symbols-outlined text-[20px]">check_circle</span>
          <div>
            <span className="font-label-uppercase text-[11px] tracking-wider block">
              {toast.title}
            </span>
            <span className="font-body-sm text-body-sm opacity-80">
              {toast.desc}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
