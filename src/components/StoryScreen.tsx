import React from 'react';
import { BRAND_IMAGES } from '../data/products';
import { ScreenName } from './Header';

interface StoryScreenProps {
  onNavigate: (screen: ScreenName, productId?: string) => void;
}

export const StoryScreen: React.FC<StoryScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Editorial Prologue & Monograph Headline */}
      <section className="relative w-full overflow-hidden bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          {/* Monograph Index Marker */}
          <div className="flex items-center justify-between pb-space-md">
            <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.25em] uppercase">
              Tập I • Hồ Sơ Bản Sắc (Dossier 01)
            </span>
            <span className="font-label-numeric text-label-numeric text-outline tracking-widest">
              N° 2025/VN
            </span>
          </div>

          {/* Main Editorial Headline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end pt-space-sm">
            <div className="lg:col-span-8 space-y-space-sm">
              <p className="font-label-uppercase text-label-uppercase tracking-[0.3em] uppercase text-secondary">
                Unknown Atelier — Manifeste
              </p>
              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary uppercase leading-[1.05] tracking-tight">
                Bags For The
                <br />
                <span className="italic font-normal text-on-surface-variant font-headline-lg">
                  Unwritten
                </span>{' '}
                Stories.
              </h1>
              <p className="font-editorial-quote text-editorial-quote text-on-surface-variant italic max-w-2xl pt-space-xs">
                “Những chiếc túi tạo hình cho những hành trình chưa từng được định trước.”
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end space-y-space-xs">
              <div className="p-space-md bg-surface-container-low">
                <span className="font-label-uppercase text-label-uppercase text-primary uppercase block pb-space-xs">
                  Tuyên Ngôn Cốt Lõi
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  UNKNOWN không định nghĩa người mang. Chúng tôi tạo dựng một kiến trúc tĩnh lặng bằng da thuộc nguyên bản — để chính bạn là người viết tiếp từng trang ký ức lên bề mặt của thời gian.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual Duet (Editorial Asymmetry) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-space-lg items-start">
            <div className="md:col-span-7 relative group">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Editorial black and white portrait of an elegant woman holding an architectural structured leather handbag"
                  src={BRAND_IMAGES.storyHero1}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-space-xs flex justify-between items-baseline">
                <span className="font-label-uppercase text-label-uppercase text-outline tracking-wider uppercase">
                  Fig. 01 — Silhouette in Quietude
                </span>
                <span className="font-label-numeric text-label-numeric text-secondary">
                  Paris • Hà Nội
                </span>
              </div>
            </div>

            <div className="md:col-span-5 md:pt-space-xl space-y-space-md">
              <div className="relative aspect-square overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Close-up still life photograph of warm honey-tan calfskin leather bag sitting in natural sunbeams"
                  src={BRAND_IMAGES.storyHero2}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-space-xs bg-surface-container-high p-space-md">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase">
                  Nguyên Tắc 01
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Sự Tĩnh Lặng Mang Sức Mạnh
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Trong kỷ nguyên của sự ồn ào và những logo phô trương, sự kín đáo tuyệt đối chính là tuyên ngôn quyền lực sâu sắc nhất. Một chiếc túi UNKNOWN chỉ lên tiếng khi chạm vào đầu ngón tay của người thấu cảm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: Brand Vision & Genesis */}
      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Sticky Chapter Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-space-xs pb-space-md lg:pb-0">
              <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.2em] uppercase">
                Chương I
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Tầm Nhìn &amp;
                <br />
                Khởi Nguyên
              </h2>
              <p className="font-label-numeric text-label-numeric text-outline pt-space-xs">
                01 / NGUỒN CẢM HỨNG VƯỢT THỜI GIAN
              </p>
            </div>

            {/* Vision Content & Narrative Flow */}
            <div className="lg:col-span-8 space-y-space-lg">
              <div className="space-y-space-md">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                  Ý niệm về <strong className="font-semibold text-primary">UNKNOWN</strong> được thai nghén từ một câu hỏi giản đơn nhưng ám ảnh:{' '}
                  <em>
                    Điều gì sẽ còn đọng lại khi ta tước bỏ mọi chi tiết trang trí thừa thãi của một chiếc túi xách cao cấp?
                  </em>
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Chúng tôi nhìn thấy người phụ nữ hiện đại chuyển động không ngừng giữa những đô thị náo nhiệt, gánh vác vô vàn vai trò nhưng luôn nuôi dưỡng một nội tâm vững chãi. Họ không cần một món phụ kiện hào nhoáng để chứng minh giá trị bản thân. Họ tìm kiếm một vật phẩm đồng điệu — vừa vặn với nhịp sống thực tế, thanh lịch trong từng chuyển động, và bền bỉ song hành cùng những năm tháng thăng trầm.
                </p>
              </div>

              {/* Editorial Comparative Module */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                <div className="bg-surface p-space-md space-y-space-xs">
                  <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase">
                    Triết Lý Hình Khối
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Hình Học Kiến Trúc
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Lấy cảm hứng từ những đường nét dứt khoát của kiến trúc hiện đại thế kỷ 20: góc cạnh sắc bén cân bằng với những đường bo cong mềm mại của tự nhiên.
                  </p>
                </div>
                <div className="bg-surface p-space-md space-y-space-xs">
                  <span className="font-label-uppercase text-label-uppercase text-secondary tracking-widest uppercase">
                    Tính Ứng Dụng
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Công Năng Thực Tiễn
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Mỗi ngăn chứa, độ mở của khóa bấm kim loại và tỷ trọng quai đeo đều được tính toán theo chuyển động cơ thể, mang lại cảm giác thoải mái suốt ngày dài.
                  </p>
                </div>
              </div>

              {/* Large Horizontal Photographic Inset */}
              <div className="space-y-space-xs">
                <div className="relative aspect-[16/9] overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt="Minimalist design studio desk moodboard with hand-drawn structural bag sketches"
                    src={BRAND_IMAGES.storyDesk}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center text-outline font-label-uppercase text-label-uppercase pt-space-xs">
                  <span>Bản Thảo Khởi Nguyên • Atelier Studio</span>
                  <span>Lưu Trữ Bản Thiết Kế Số 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Design Philosophy - "Less, But Intentional" */}
      <section className="w-full bg-primary text-on-primary py-space-xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          {/* Section Tag */}
          <div className="flex items-center gap-space-sm pb-space-lg">
            <span className="w-8 h-px bg-on-tertiary-container inline-block"></span>
            <span className="font-label-uppercase text-label-uppercase text-on-tertiary-container uppercase tracking-[0.25em]">
              Chương II • Triết Lý Thiết Kế
            </span>
          </div>

          {/* Monograph Large Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7 space-y-space-md">
              <h2 className="font-display-hero text-display-hero-mobile md:text-display-hero text-inverse-on-surface uppercase tracking-tight leading-none">
                “Less, But
                <br />
                <span className="italic text-on-tertiary-container font-editorial-quote font-normal text-headline-lg">
                  Intentional.”
                </span>
              </h2>
              <p className="font-editorial-quote text-editorial-quote text-on-primary-container italic max-w-xl">
                Chọn lọc ít hơn, nhưng mỗi chi tiết đều mang một chủ đích bất biến.
              </p>
              <div className="pt-space-md space-y-space-sm text-on-tertiary-container font-body-md text-body-md max-w-xl">
                <p>
                  Đối với UNKNOWN, chủ nghĩa tối giản không phải là sự nghèo nàn về ý tưởng hay khoảng trống lạnh lùng vô cảm. Đó là sự can đảm loại bỏ những thứ thừa mứa để làm lộ ra bản chất tinh khiết nhất của cấu trúc.
                </p>
                <p>
                  Từng đường may lún nhẹ vào thớ da, từng cạnh viền được đánh bóng bằng sáp ong tự nhiên, hay chiếc móc kim loại mờ không in dấu vân tay — tất cả cùng hòa tấu nên một nhịp điệu kín đáo mà quyến rũ.
                </p>
              </div>
            </div>

            {/* Material Showcase Strip in Dark Mode Surface */}
            <div className="lg:col-span-5 bg-tertiary-container p-space-md space-y-space-md">
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Macro high-resolution tactile texture shot of premium full grain black leather"
                  src={BRAND_IMAGES.storyBlackLeather}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-space-xs text-inverse-on-surface">
                <span className="font-label-uppercase text-label-uppercase text-on-tertiary-container tracking-widest uppercase">
                  Phẩm Chất Chất Liệu
                </span>
                <h4 className="font-headline-sm text-headline-sm">
                  Chất Da Nguyên Bản (Full-Grain)
                </h4>
                <p className="font-body-sm text-body-sm text-on-tertiary-container">
                  Chúng tôi chỉ tuyển chọn những tấm da bò cao cấp thuộc thảo mộc tự nhiên từ các xưởng thuộc da danh tiếng vùng Tuscany, nơi không sử dụng hóa chất che giấu vân da nguyên sơ.
                </p>
              </div>
              <div className="grid grid-cols-3 pt-space-xs gap-space-xs text-center">
                <div className="p-space-xs bg-primary-container">
                  <span className="block font-label-numeric text-label-numeric text-inverse-on-surface tabular-nums">
                    100%
                  </span>
                  <span className="font-label-uppercase text-[9px] text-on-tertiary-container uppercase tracking-wider">
                    Thuộc Thảo Mộc
                  </span>
                </div>
                <div className="p-space-xs bg-primary-container">
                  <span className="block font-label-numeric text-label-numeric text-inverse-on-surface tabular-nums">
                    0,8mm
                  </span>
                  <span className="font-label-uppercase text-[9px] text-on-tertiary-container uppercase tracking-wider">
                    Dung Sai Đường Kim
                  </span>
                </div>
                <div className="p-space-xs bg-primary-container">
                  <span className="block font-label-numeric text-label-numeric text-inverse-on-surface">
                    Vĩnh Cửu
                  </span>
                  <span className="font-label-uppercase text-[9px] text-on-tertiary-container uppercase tracking-wider">
                    Lớp Nước Patina
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: The Craft & Detail (Nghệ thuật Chế Tác) */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          {/* Section Header */}
          <div className="max-w-3xl space-y-space-xs pb-space-lg">
            <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.2em] uppercase">
              Chương III • Bàn Tay Nghệ Nhân
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Sự Khắt Khe Của Đôi Bàn Tay
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Không có sự thỏa hiệp nào trong kỹ nghệ chế tác. Một chiếc túi UNKNOWN mất từ 18 đến 34 giờ lao động tập trung cao độ để hoàn thiện từ những mảnh da cắt tay độc bản.
            </p>
          </div>

          {/* Bento Grid of Atelier Craft */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
            {/* Atelier Step 1: Cutting & Grain Inspection */}
            <div className="md:col-span-4 flex flex-col justify-between bg-surface-container-low p-space-md space-y-space-md group">
              <div className="space-y-space-xs">
                <span className="font-label-numeric text-label-numeric text-outline">
                  01 / TUYỂN CHỌN KHẮT KHE
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Soi Kính &amp; Định Hướng Thớ
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Từng tấm da được kiểm tra dưới nguồn sáng mô phỏng ánh ban ngày để phát hiện những khuyết điểm không mong muốn, đồng thời tận dụng những vết sẹo tự nhiên như dấu ấn cá tính riêng.
                </p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container mt-space-sm">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Hands of an artisan examining an untanned rich brown leather hide"
                  src={BRAND_IMAGES.storyArtisan1}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Atelier Step 2: The Saddle Stitch (Center Anchor) */}
            <div className="md:col-span-4 flex flex-col justify-between bg-surface-container p-space-md space-y-space-md group">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-high mb-space-sm">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Close up artisan hands performing traditional saddle stitch"
                  src={BRAND_IMAGES.storyArtisan2}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-space-xs">
                <span className="font-label-numeric text-label-numeric text-outline">
                  02 / ĐƯỜNG MAY YÊN NGỰA
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Saddle Stitching Thủ Công
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Kỹ thuật khâu tay hai kim chéo nhau với chỉ lanh vuốt sáp ong — cấu trúc mà không máy móc hiện đại nào có thể tái tạo độ bền chắc vĩnh cửu khi một mũi chỉ vô tình đứt gãy.
                </p>
              </div>
            </div>

            {/* Atelier Step 3: Edge Burnishing & Architectural Balance */}
            <div className="md:col-span-4 flex flex-col justify-between bg-surface-container-low p-space-md space-y-space-md group">
              <div className="space-y-space-xs">
                <span className="font-label-numeric text-label-numeric text-outline">
                  03 / HOÀN THIỆN CẠNH DA
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Đánh Cạnh 7 Lớp Tỉ Mỉ
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Mỗi đường viền mép túi trải qua 7 lượt đánh bóng, chà nhám và phủ sơn gốc nước thủ công, tạo nên độ bóng gương satin lì mượt mà không lo nứt nẻ theo thời gian.
                </p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container mt-space-sm">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Extreme macro shot of smooth hand-burnished edge of a luxury leather tote bag"
                  src={BRAND_IMAGES.storyArtisan3}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: The Unwritten Journey (Cam Kết Đồng Hành) */}
      <section className="w-full bg-surface-container py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Visual Storytelling Left Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                <img
                  className="w-full h-full object-cover"
                  alt="Atmospheric documentary photo of a traveler wearing a tailored coat carrying an UNKNOWN structured leather weekender bag"
                  src={BRAND_IMAGES.storyTraveler}
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Overlapping Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 max-w-xs bg-surface-container-lowest p-space-md">
                <span className="font-label-uppercase text-label-uppercase text-secondary uppercase tracking-widest block mb-space-xs">
                  Dấu Ấn Thời Gian
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  “Lớp da theo năm tháng sẽ nhuộm màu nắng gió, phản chiếu chính những chuyến đi của bạn.”
                </p>
              </div>
            </div>

            {/* Text Right Column */}
            <div className="lg:col-span-6 lg:pl-space-md space-y-space-md">
              <div className="space-y-space-xs">
                <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.2em] uppercase">
                  Chương IV • Khế Ước Thời Gian
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Người Bạn Đồng Hành
                  <br />
                  Trong Những Khoảnh Khắc
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Chúng tôi không coi việc hoàn thành một chiếc túi là điểm kết thúc. Ngược lại, ngày chiếc hộp đựng UNKNOWN được mở ra mới chính là khởi đầu của một cuộc đời thực thụ.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Đó là những buổi sáng vội vã tại sân bay cho một cuộc hội ngộ quan trọng; là góc bàn cà phê tĩnh lặng giữa buổi chiều mưa nơi ý tưởng lớn được ký thác vào cuốn sổ tay; là những buổi tối tiệc tùng lấp lánh hay những chuyến đi trốn về miền biển vắng.
              </p>
              {/* Philosophy Bullet Points */}
              <div className="space-y-space-sm pt-space-xs">
                <div className="flex items-start gap-space-sm">
                  <span className="font-label-numeric text-label-numeric text-primary font-bold">
                    01.
                  </span>
                  <div>
                    <h4 className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-wider">
                      Lớp Patina Tự Nhiên
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Thời gian không làm túi cũ đi; thời gian làm túi trở nên độc bản và đậm đà hơn.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="font-label-numeric text-label-numeric text-primary font-bold">
                    02.
                  </span>
                  <div>
                    <h4 className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-wider">
                      Bảo Dưỡng Trọn Đời
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Mọi tạo tác của UNKNOWN đều được chăm sóc, làm sạch và phục hồi tại Atelier của chúng tôi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <span className="font-label-numeric text-label-numeric text-primary font-bold">
                    03.
                  </span>
                  <div>
                    <h4 className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-wider">
                      Vượt Khỏi Mùa Mốt
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Không chạy theo trào lưu ngắn hạn — tồn tại vững bền qua các thập kỷ phong cách.
                    </p>
                  </div>
                </div>
              </div>
              {/* Brand Signature & Seal */}
              <div className="pt-space-md flex items-center justify-between">
                <div>
                  <span className="font-headline-sm text-headline-sm tracking-[0.2em] text-primary uppercase font-normal">
                    UNKNOWN
                  </span>
                  <span className="block font-label-uppercase text-label-uppercase text-secondary tracking-widest text-[10px]">
                    Atelier de Maroquinerie
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-editorial-quote text-editorial-quote italic text-on-surface block">
                    — Người sáng lập
                  </span>
                  <span className="font-label-numeric text-label-numeric text-outline text-[12px]">
                    Hà Nội • 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 5: Curated Call to Action & Collection Gateway */}
      <section className="w-full bg-surface-container-high py-space-xl">
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin text-center space-y-space-md">
          <span className="font-label-uppercase text-label-uppercase text-secondary tracking-[0.3em] uppercase block">
            Lời Mời Đến Không Gian Sáng Tạo
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight max-w-2xl mx-auto">
            Bắt Đầu Viết Nên Câu Chuyện Của Riêng Bạn
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
            Mỗi tác phẩm trong bộ sưu tập hiện tại là sự kết tinh của tư duy hình khối và tình yêu bất tận với nghề thủ công. Mời bạn chạm tay và cảm nhận.
          </p>
          <div className="pt-space-sm flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <button
              type="button"
              onClick={() => onNavigate('collections')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] px-10 py-5 transition-colors duration-300 hover:bg-inverse-surface group cursor-pointer"
            >
              <span>Khám Phá Bộ Sưu Tập</span>
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('checkout')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-primary font-label-uppercase text-label-uppercase uppercase tracking-[0.2em] px-8 py-5 hover:bg-surface-variant transition-colors duration-300 cursor-pointer"
            >
              <span>Đặt Hẹn Tư Vấn Cá Nhân</span>
            </button>
          </div>
          {/* Footnote Metadata */}
          <div className="pt-space-lg flex flex-wrap items-center justify-center gap-space-md text-outline font-label-uppercase text-label-uppercase text-[10px] tracking-widest uppercase">
            <span>• Da Thảo Mộc Nguyên Bản</span>
            <span>• Chế Tác Thủ Công Giới Hạn</span>
            <span>• Bảo Hành Trọn Đời</span>
          </div>
        </div>
      </section>
    </div>
  );
};
