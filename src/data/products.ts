export interface ProductColor {
  name: string;
  hex: string;
  key: 'black' | 'espresso' | 'ecru' | 'sand';
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  category: 'TÚI ĐEO VAI' | 'TÚI CẦM TAY' | 'TÚI TOTE' | 'TÚI ĐEO CHÉO' | 'PHỤ KIỆN DA' | 'PHỤ KIỆN ĐẶC BIỆT';
  edition: string;
  price: number;
  priceFormatted: string;
  homePriceFormatted?: string;
  badge?: string;
  image: string;
  gallery?: {
    url: string;
    caption: string;
  }[];
  colors: ProductColor[];
  hardwareSpec: string;
  leatherSpec: string;
  description: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
    strapDrop: string;
    weight: string;
  };
  stockRemaining: number;
}

export const BRAND_IMAGES = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1VbrQkziIpfoAGhp0nMGrVT6cTBczdsDkE8sZMjrLq_uz7OM3VcmWCF85dJqDT5dOJUxxqytqIHoNAaqaLCVuBRalHwHBuf9iRJogJFzhZdaPInr-dJVEhCRyYIohPVZvx4RKVqCnzhxKBmZsqEj7SPa6QjMGis2mo_S6IQbV2Zx3ALIBI1m_0aPBCrGDqtYKu9fJ9n0RRcuz_ab8FhCSi0TSGeEBcPHwaAjMdMrtMhMShjRbXk2kLYjTs=s0",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-5FO7GgmJ-2ktYzBMW9yQCQ7c9HFWsfouj04T9hWXfCSC7Bcv249oGw3TAuLUVkNhqPSqr8R7ALdODwH4HP3plKsnWXBt_pkUENH87-UoT50_HPfzvd4weoQJrJVCPH-ju61Fp20-JPAQSQxShCTUJczVDV1XYsJgQ-evBu8ExM2csJrbA4z_BYBEel9fKeCor52OufyofyI-47PpsRG1mXFZ_dmED9AIJ_QCd4lymOdUCYP4Y_aGnQ=s0",
  homeHero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW7gbBTiitaeuuAffE-4APJ-9HGhajy2JpOVXzdPTlmgPXrqMJWjK9Nz36IqM7EdEa9DaOCNJq18L92Xt89OXaSY_m6vBo56ffFPVdlSMTFWwFlFV4k-JghBpDmNI5-JfxW5zoZms7Mf4v4BP1By1Fob_2tIHCyN40PICZUnXkac6qrrc7tD6Ybu5gtCb62ZbxY7WCAs3k2L3l-QKjZ7Urd8jwZopAa1yyslQV_Y25GvXqMiT0wb-8Rg=s0",
  homeSplitStory: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUggejee27wRWy8bVkviJ8UyKoC4P2HLsBfupQOq0kZ0wWlDOoPEpn4fi2FXIA3Fzq91C2omeMzMNUE5Cj9t0DnzZwVEn63V4Zuh_ABEIVbhcI-Qz4pcpqlbYLqSbqDnY6ZhiHjwB5X5cWs2IISHbyIomr6Cf6v-DPz1QfBydrJ4ctL2q18Gmz3auRR9pOPSh84fJbukroC_n1vXwPK1aB98I0O29bpFcOESbLkScce403Tyb0wWU-FA=s0",
  catClassics: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTOxKU1n2WjmzC7i4ynV6RuU1D4Z0wXqPkNbFlaPbmq3tCCs33Ykc-oGfB4AvNNiPsDZCKJJPNs7MYUuaCl0trLrwG1coXFcSRskNiudndOxg841cgOOn_65Njl5eT3k_Y13v7jjdtQ808ErjUbHOIQW9eq3o5TFlT6N6MJa3kkEg2du1K9MHK0lubWm6rxZ-Ngvl-IbzrnLY_1Hh1LnSehZL2JJhdzL9jBcREAiw6iwnUdNhHH2U_dg=s0",
  catEveryday: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtpBHKVQ-Sz7N8sZ62x5oZvM6HzP24u83wQQDNK13ajyE9Ybtziz2bAkFWiDo7nghiRtni8z2nWdW79aThZ8lzyDJ7KM6xBJurXfztRu7RJMxwHKvF62RdGDPD0DWz5vrEv499jAVBztWfq7PWmXUmK6OtVWvx4v2R_SQ_tVVn5q1bls_FYYlKq7-6G8LLjfvVGoambzWYOS5__stiiQX5xzBZGtE91ZlmThfsGgwss7DDxhVu8KUJqw=s0",
  catStatement: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSyWl1gOOKy7anySPbna5oayLX-l05Gb_WBL1bW78xSCPmLpao_jjB7tgeNln-8-lZ2Wu6nA-aGSnhfxfue0T91y27kfZ-x3aMiU7RxGLHqqdNakTrP3-DWJSLERW_g-BxILo6r-hmGYLREU9I-euoFZka0zbOxV2uqlo7ynLM96wVPliFAWyqV2brH5DaOjz411BSomV3UYhotXd87FUgtGE_aPxCHauZNL3D8q4zAHdojoOg3gqK0g=s0",
  detailEdge: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbiJ7DUd9ElydfwdN8rUGfhcEed-AUVwahz0Nq1bngLmiy2XpkEvE4yyX3Lx43oe6deqOq2nmEGnnKW_7Be8dUvHp0TFIMvHffDojrPyVHHtFDvyRMZXr5f8IJu51hDxhdZyagyzgOKSr8wqSLSR_jwEwbsZfrxxGVLkmkf7Ay0i9WBfHDJWyBgA9QRYP82LD8BpFZYDXtRMQ1MLC03vjAhoGcwhCed88z2uMJbno2tBkPRgLdWB18rg=s0",
  detailStitch: "https://lh3.googleusercontent.com/aida-public/AB6AXuATJDAGR9D5XU6d-r2Y6ER_EiSVYHKALa-v2Layi-aK9TjVJ5XAVi3IVUC8ELrFMlF3cspKDzz1p1ymLYIudxadhzsk-EhiXuK0RpaRXYBbQ-C4-D38wHQaqF5GBlNqbAcTYgVP7wAIfXD_C2jBpBmlu8iIfOoQJpNp7L4aRPq-ne0kAp721ENFkkn00sRk9m8kJ1PDjqE8XIflM6Eb6Q07S9rQqZcO4Yhhp6SZzii2EIESU4H2DKY73Q=s0",
  detailHardware: "https://lh3.googleusercontent.com/aida-public/AB6AXuClxOneIsEEFpzn4JAwhHFwRixzK72Xa7hn2BK4ascaMpx1maQoy0UL-RIvySu0FT9H1Zq9sXZWC8YaYiI-7xHgT2_rr-o_RM1KmEidNkauJOV5AbC7Ss9UXF_y6KdhAdhDnhu_FJ4p_qpp20nS5Uwv37dkCH8C-mEwnQ1pt0-OcQeqIBnhGhKsKeihSTcrZXQmI6eeTi8s5IuphDTsIJnjDJkx4OsplFqKj3w6hPK__4Tt1KcwrslZeA=s0",
  detailLeather: "https://lh3.googleusercontent.com/aida-public/AB6AXuACJYwhJxB6pcw4W6kihIpXv7l2r1I_zb7-0FPvzqjns_ppp1hebQ1-KlvYVZh1aqlC-s1bjMR6mYlGS-CNOBJCLstLWZVzYHz6yufShkP6YzPd1MnC78HmDva5Q3hDFm8QYbR7E3Pzo-1ogyVp12YUdQlaNz0LJcVOHoE01hGYOoeZI5KKBDV5lBdm-bfLR7dFFzOfffl9hENhYtlgW4iscnhyMYxLGEIkDsDlZ0JXXEJSrFLjkTqXPQ=s0",
  campaignBanner: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_xrG98OKankaOYl5sDI0FaaWLhnY5VjqYshthVEWw189J7q-faE9xwXCG_eCN9H3iYvkMosMAX_B3CwnWTQIkqiLtdthiTtkfUjFY37nXG3_RrQEb1Y2OVJFwydivp9sdsXJ1Y6gYFqp4rpHSIKn4MKxKLj_M8RnAYI2OnohS4p_Pa5xh4dhz4L-YY_VzFKCINI4P7FKCAaOedlvYKuowGrMhmlq6JyEX3ZVO6fOItqzFfeeXLWEKUw=s0",
  storyHero1: "https://lh3.googleusercontent.com/aida-public/AB6AXuApjINQ9eGLB1vexwn9TRuJ0CDKsfSE8c-LvI7BIgkCG7_j5PSMV3OKdggro7_586vr8Akyrp4gztqOOBCjUEd1BnJ5muSAIpAn1O_OwRzjrr9ms4eopX6ngY1cQ46w241BlP7UR8Ir6C-XmptiW-vuNvhUnCP6jxQFMpA3gdJ_EouKP_mh-meocJax7N9f7jdnaWAJ4YctoEri2UHfnwHOvyeCpfZiUJuSdNCntarFEE8FUixLXHKBTQ=s0",
  storyHero2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKW4Kyqo58Mu48a7d9UhWxbVD5_ZbeAeBnOrUd5ME6vXqBpgymuN71o1diKD7X23IOXHieWicCvkiocuu_pyBCG5PS9CGFQABD-blVxG22Rojk5YcayOXZ2EyD73Ne1xSb9xo2VFpkOpEsEzQL-k5Ph7aqm6VHQ0AMx2GOkH2jl7IpFjq-QYFRgx12LMVw7jZMABRPNr0IZYeiRN7eF32d7Fsuojb0_4nawpYcPnJAX7ztOyXzenLi8w=s0",
  storyDesk: "https://lh3.googleusercontent.com/aida-public/AB6AXuCF-qCQ4adkGfQ4yU13xd6hbopo6jZlWWqQ5B3W3Vn-zjS6YKXhZ44nkS4sGULDfzD2nNW07xHIwIRRjSqSfBhZ_Z_JYwoBaQCS7NukOhch09fGzKj3S1eMU52Z3ae0RHabtHr_ISHkyzRULOAzSm80Vz6o8d3KCOMWmyCuZE4ikwaf2iG0gBOD5O8BJ8Dz0NtYv_0q4D8su4uUbB34SJ1jitms0lLAfywGSCThc_qvS9neXbuLfdbLnw=s0",
  storyBlackLeather: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9W_wnDnyt1fIs4qS4LVwjV_6QgmkhSsw9ZnvOtZ3S-z18tmqbxJqltuS4rkk9WROeyb-fDy612zpDI4hYlDsKfp5-c-J-8xLmCsElypzt26tuq-gxeYVyaNNaJfTuZhz4X-QvmJGiNWYZ6QAAmpyqs82VoaW8LbGDbaEi6KIolFkG9bVmX8hVTUrTbqPjwFyVz9YE0_jsUMeyYWXa97L27iE1iVj3uJGhgRmpMX6wssHREjR4AZ3ZHQ=s0",
  storyArtisan1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrPaGata1hDQVUYWk-mPK1m6Gq-Qbs4cyy38NobIDy9tah7ECrVcy87UnGnHCdJ9lzUXTrcsKaXNlaG_bD9eiDq33Im8kXrw_uTzDiZxNMhvzUoujlKrJHIukPfEgmKS02AeiAf6FE6G5tRQjaR-itJDOKN7QxwRnD2q7xOUesgHkdIUUTlTgu-JCtPHr24Jztz_NVq5CAm8CaOzU4vuXqvCQNUeNh7ffSZ1jbCItB2KS7G9SV8l9SuQ=s0",
  storyArtisan2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVjQjYg4mMSCtwPXVi5ZZG5DoPMLrX5xKRtrb2tL8MFW8bA2xgfJp25Krs01I0ki5k66llYECylHV6GHikLD1HVuB37Om8OQdFq7QcPGL9gy5pFibcZc7Do8nwOGmeYYXRGBqskUOnLG2bG1HPot65kaf7pT3Fz-jjh9IctxS4244dck_rOQGNB4GUKSRz4Ea9LNJKPkaSA2o0LCmL7kCNkgD349zo_rSEMfBulmJr3rxwymdS3lgFTw=s0",
  storyArtisan3: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2WsG7yM6SY0wTMQw-uNBqDCeHzA2ZO7Ed6eOY2_UpM5tOMSv7UVBuFpMthRLoglZbXVEnetMDbotFFNmzVmbJJkXGp4GAa3WUE0XdCVDkYW4Z0ETkrkeiVs93fSmmCW_pYOVqKnh1XqH9cromRXQTYSB2ge4pUHHwUJc59S-Vgnf08hLkDAktix2GDXD1NKnjM6vF8bJLt8PEwsOH52V9GcHqymJ0T0cCeXD4x59qUf3yCB5fznDIiA=s0",
  storyTraveler: "https://lh3.googleusercontent.com/aida-public/AB6AXuARUha8droJODIUBcLdRvMNvviFaDwT51KsfphikUIHKstdBftnqCXITGlzKrhlto5ALEHSVt4S9uTX2Q9F3RULJ_twgKEFSkmmhEKgxaz5KRRSzTY9FWnHP7EAmnAbgBsj3eCRY70hEbp86keZLiNYVi0VLoK9PtWGUKsEzISnusiwGNQdEnOqBY1qJDt8Xxkp5LKTANtU5wOwZsHJ4QnAjmLBicQ_tfvaJXzHVn83UNK4dKmP0B6fjw=s0",
};

export const PRODUCTS: Product[] = [
  {
    id: 'the-muse',
    sku: 'UNK-MS-01',
    name: 'THE MUSE',
    subtitle: 'Túi đeo vai cấu trúc hình học',
    category: 'TÚI ĐEO VAI',
    edition: 'PHIÊN BẢN 01',
    price: 1250000,
    priceFormatted: '1.250.000 VNĐ',
    homePriceFormatted: '1.250.000 VNĐ',
    badge: 'MỚI RA MẮT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDquVF8TqRUjwABd6Xd_LPU2igaOyjXZLG16YsRedm97kY_SmghmkeguxUEsNJqQTYBOhea_LXoX2t_3P7WkOVzrh_czwDiXdfb1AsOdNRLFiNwMN0Me_hqr59Rf_bDKglBWJHgWXvDbbuiJnMnKCOcTjPve2kvTF7XiPt2ul06ocgiFRDZJHrGbB3qC4JhjKS56JMdWR8fI_aVPNk2dWPTrWTLv5-0ClCPOJ2u-JnNGAhy8EIrGM_Ziw=s0',
    gallery: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDquVF8TqRUjwABd6Xd_LPU2igaOyjXZLG16YsRedm97kY_SmghmkeguxUEsNJqQTYBOhea_LXoX2t_3P7WkOVzrh_czwDiXdfb1AsOdNRLFiNwMN0Me_hqr59Rf_bDKglBWJHgWXvDbbuiJnMnKCOcTjPve2kvTF7XiPt2ul06ocgiFRDZJHrGbB3qC4JhjKS56JMdWR8fI_aVPNk2dWPTrWTLv5-0ClCPOJ2u-JnNGAhy8EIrGM_Ziw=s0',
        caption: 'GÓC NHÌN 01 • KIẾN TRÚC & HÌNH KHỐI'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUggejee27wRWy8bVkviJ8UyKoC4P2HLsBfupQOq0kZ0wWlDOoPEpn4fi2FXIA3Fzq91C2omeMzMNUE5Cj9t0DnzZwVEn63V4Zuh_ABEIVbhcI-Qz4pcpqlbYLqSbqDnY6ZhiHjwB5X5cWs2IISHbyIomr6Cf6v-DPz1QfBydrJ4ctL2q18Gmz3auRR9pOPSh84fJbukroC_n1vXwPK1aB98I0O29bpFcOESbLkScce403Tyb0wWU-FA=s0',
        caption: 'GÓC NHÌN 02 • CHUYỂN ĐỘNG'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClxOneIsEEFpzn4JAwhHFwRixzK72Xa7hn2BK4ascaMpx1maQoy0UL-RIvySu0FT9H1Zq9sXZWC8YaYiI-7xHgT2_rr-o_RM1KmEidNkauJOV5AbC7Ss9UXF_y6KdhAdhDnhu_FJ4p_qpp20nS5Uwv37dkCH8C-mEwnQ1pt0-OcQeqIBnhGhKsKeihSTcrZXQmI6eeTi8s5IuphDTsIJnjDJkx4OsplFqKj3w6hPK__4Tt1KcwrslZeA=s0',
        caption: 'GÓC NHÌN 03 • KHÓA MẠ MỜ'
      },
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbiJ7DUd9ElydfwdN8rUGfhcEed-AUVwahz0Nq1bngLmiy2XpkEvE4yyX3Lx43oe6deqOq2nmEGnnKW_7Be8dUvHp0TFIMvHffDojrPyVHHtFDvyRMZXr5f8IJu51hDxhdZyagyzgOKSr8wqSLSR_jwEwbsZfrxxGVLkmkf7Ay0i9WBfHDJWyBgA9QRYP82LD8BpFZYDXtRMQ1MLC03vjAhoGcwhCed88z2uMJbno2tBkPRgLdWB18rg=s0',
        caption: 'GÓC NHÌN 04 • NGĂN TRONG & LỚP LÓT DA LỘN'
      }
    ],
    colors: [
      { name: 'Đen Huyền Bí (Noir Black)', hex: '#000000', key: 'black' },
      { name: 'Trắng Ngà (Écru Ivory)', hex: '#e5e2db', key: 'ecru' },
      { name: 'Cà Phê Mộc (Taupe)', hex: '#8b7d6b', key: 'sand' }
    ],
    hardwareSpec: 'Khóa đồng thau mạ niken đánh mờ',
    leatherSpec: 'Da bê thuộc thảo mộc Ý',
    description: [
      'Chiếc túi mang cấu trúc hình học mềm mại, đồng hành qua những chuyển động thường nhật. Lấy cảm hứng từ hình thái điêu khắc đương đại của chủ nghĩa Tối giản (Minimalism) thập niên 90, The Muse tạo lập sự cân bằng hoàn hảo giữa tính cấu trúc vững chãi và cảm giác mềm mại khi chạm vào.',
      'Phần đáy uốn cong tinh tế ôm lấy cơ thể khi đeo dưới vai, đồng thời đường viền được sơn mép thủ công qua 5 lớp tỉ mỉ, giúp bảo toàn phom dáng vượt thời gian.'
    ],
    dimensions: {
      width: '26 cm',
      height: '18 cm',
      depth: '8.5 cm',
      strapDrop: '24 - 32 cm (Điều chỉnh 5 nấc)',
      weight: '480g'
    },
    stockRemaining: 4
  },
  {
    id: 'the-noir',
    sku: 'UNK-NR-01',
    name: 'THE NOIR',
    subtitle: 'Túi xách tay phom đứng tối giản',
    category: 'TÚI CẦM TAY',
    edition: 'CỔ ĐIỂN',
    price: 5200000,
    priceFormatted: '5.200.000 VNĐ',
    homePriceFormatted: '1.450.000 VNĐ',
    badge: 'BÁN CHẠY',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVx1Q09hIcMN0Fa2_EEl-uQ-1R9Avm1vg9o94UdXqUwD-8RJa2qREKQJyL4JAWKjQmjbe7MVqvVzXvUVRxQ0FOEZyv3UTMkcIEOBbhtvhfICQVa27SgOfULuGDRsxp-uXVWo4Q5SueBjExVpZrVO3qZ2pLcphhyQauBpnYSM8fxRufr_dMMZpQgUA9HBVRr05tIIR-dcIXvOivdfWnDmTRabxx-6v45T2GZCabENYBwNaiCa1i42RIkg=s0',
    colors: [
      { name: 'Đen Huyền Bí (Noir Black)', hex: '#000000', key: 'black' },
      { name: 'Da Bò Mộc (Sand)', hex: '#b59e84', key: 'sand' }
    ],
    hardwareSpec: 'Khóa vuông mạ palladium nguyên khối',
    leatherSpec: 'Da bò Full-grain thảo mộc nguyên tấm',
    description: [
      'Thiết kế túi cầm tay mang ngôn ngữ kiến trúc thanh lịch với tỷ lệ vàng chuẩn mực. Từng góc cạnh được định hình sắc nét kết hợp khóa cài vuông biểu tượng.',
      'Không gian bên trong rộng rãi với ngăn khóa kéo riêng biệt, phù hợp cho cả những buổi gặp gỡ trang trọng lẫn ngày làm việc năng động.'
    ],
    dimensions: {
      width: '28 cm',
      height: '20 cm',
      depth: '10 cm',
      strapDrop: '12 cm (Quai xách) / 48 cm (Dây đeo rời)',
      weight: '560g'
    },
    stockRemaining: 3
  },
  {
    id: 'the-ecru',
    sku: 'UNK-EC-02',
    name: 'THE ÉCRU',
    subtitle: 'Túi đeo vai màu trắng ngà thanh thoát',
    category: 'TÚI ĐEO CHÉO',
    edition: 'PHIÊN BẢN 02',
    price: 4650000,
    priceFormatted: '4.650.000 VNĐ',
    homePriceFormatted: '1.150.000 VNĐ',
    badge: 'MỚI RA MẮT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp2DGo6SS2Lqkp1H7PMiNwjMTvdmoRMaKd-nshPZxJiJv_5EQtw1brdThqoCxOiKje372K9mhw1cRb8bnE3VWnJ4Vz7hQH-kwLi0VYTT25w4dN9Hp3K4FyLq1YhgTO6yA8Gq8NEvTFhrfQvXZe_7ugDxOI6GLC8_80O-xnitW33z53yft5zHCr3grAoChH1ntZQQqw0H9guNfCvNMpHdGWStE32fb6xvyZf4TYmfvM2ljWU52HNLgTtw=s0',
    colors: [
      { name: 'Trắng Ngà (Écru Ivory)', hex: '#f1eee7', key: 'ecru' },
      { name: 'Cát Tự Nhiên (Warm Sand)', hex: '#d2c4b4', key: 'sand' }
    ],
    hardwareSpec: 'Chốt khóa ẩn mạ titan nhẹ nhàng',
    leatherSpec: 'Da thuộc thảo mộc nguyên bản',
    description: [
      'Sắc trắng ngà tự nhiên của đá vôi vùng Địa Trung Hải được tái hiện trên nền da bê mềm mịn. Nắp gập bất đối xứng tạo điểm nhấn thị giác tinh tế mà không cần bất kỳ chi tiết kim loại phô trương nào.',
      'Lớp sơn cạnh màu kem ấm được pha chế thủ công đồng điệu tuyệt đối với bề mặt da.'
    ],
    dimensions: {
      width: '24 cm',
      height: '16 cm',
      depth: '7.5 cm',
      strapDrop: '45 - 55 cm',
      weight: '420g'
    },
    stockRemaining: 5
  },
  {
    id: 'the-everyday',
    sku: 'UNK-EV-01',
    name: 'THE EVERYDAY',
    subtitle: 'Thiết kế linh hoạt ngày thường',
    category: 'TÚI ĐEO VAI',
    edition: 'THIẾT YẾU',
    price: 3950000,
    priceFormatted: '3.950.000 VNĐ',
    homePriceFormatted: '890.000 VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJIH4_mQ9tnsCepBuNZFwSSZGq8hGLImgyAdQozh-kxim5IVHNpB4mn9IcOjkUqUh6CtSdg6RA9Ucve2OYc9hpRZapjMYO2abQlOC6ClMa4LgVKGDbOLWuV_LzQI_Iini_1aoV4ICRfcF47tqKfqaq9bo5aIV3uCdk0yeImywO-CSDtUlOaxH-7ZTembPZ-iIowSqUYDKZmRefB2JdNhU_5KWF1Pw-H0YmPei31ZrW2fbgrgBqMmS8VQ=s0',
    colors: [
      { name: 'Cà Phê Mộc (Espresso)', hex: '#4e4539', key: 'espresso' },
      { name: 'Đen Thuần (Noir)', hex: '#000000', key: 'black' },
      { name: 'Cát Tự Nhiên (Sand)', hex: '#d2c4b4', key: 'sand' }
    ],
    hardwareSpec: 'Khoen đồng thau nguyên khối xước mờ',
    leatherSpec: 'Da bò hạt mềm tự nhiên (Soft Pebbled)',
    description: [
      'Phom dáng bucket mềm mại kết hợp đáy định hình vững vàng, The Everyday được chế tác cho nhịp sống tự do và phóng khoáng.',
      'Sức chứa linh hoạt cho sổ tay, máy tính bảng nhỏ và vật dụng cá nhân thiết yếu từ sáng đến tối.'
    ],
    dimensions: {
      width: '22 cm',
      height: '25 cm',
      depth: '14 cm',
      strapDrop: '30 - 52 cm',
      weight: '510g'
    },
    stockRemaining: 7
  },
  {
    id: 'the-atelier',
    sku: 'UNK-AT-01',
    name: 'THE ATELIER',
    subtitle: 'Cặp xách kiến trúc chế tác giới hạn',
    category: 'TÚI CẦM TAY',
    edition: 'KỶ VẬT ATELIER',
    price: 1550000,
    priceFormatted: '1.550.000 VNĐ',
    badge: 'PHIÊN BẢN GIỚI HẠN',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTOxKU1n2WjmzC7i4ynV6RuU1D4Z0wXqPkNbFlaPbmq3tCCs33Ykc-oGfB4AvNNiPsDZCKJJPNs7MYUuaCl0trLrwG1coXFcSRskNiudndOxg841cgOOn_65Njl5eT3k_Y13v7jjdtQ808ErjUbHOIQW9eq3o5TFlT6N6MJa3kkEg2du1K9MHK0lubWm6rxZ-Ngvl-IbzrnLY_1Hh1LnSehZL2JJhdzL9jBcREAiw6iwnUdNhHH2U_dg=s0',
    colors: [
      { name: 'Đen Huyền Bí (Noir Black)', hex: '#000000', key: 'black' },
      { name: 'Nâu Gỗ Sồi (Espresso)', hex: '#3a2f28', key: 'espresso' }
    ],
    hardwareSpec: 'Khóa cài đồng thau đánh bóng thủ công',
    leatherSpec: 'Da bê Box-calf thuộc thảo mộc Tuscany',
    description: [
      'Tác phẩm đỉnh cao từ xưởng chế tác UNKNOWN, đòi hỏi 34 giờ khâu tay Saddle Stitch liên tục bởi nghệ nhân trưởng.',
      'Thiết kế giữ trọn vẹn nét uy nghiêm của những chiếc cặp tài liệu cổ điển thế kỷ 20 nhưng được tinh giản tối đa về đường nét.'
    ],
    dimensions: {
      width: '34 cm',
      height: '26 cm',
      depth: '11 cm',
      strapDrop: '10 cm (Quai xách tay)',
      weight: '790g'
    },
    stockRemaining: 2
  },
  {
    id: 'the-minimal-tote',
    sku: 'UNK-MT-01',
    name: 'THE MINIMAL TOTE',
    subtitle: 'Túi Tote phom lớn thanh lịch đa dụng',
    category: 'TÚI TOTE',
    edition: 'ĐA DỤNG',
    price: 1350000,
    priceFormatted: '1.350.000 VNĐ',
    badge: 'BÁN CHẠY',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtpBHKVQ-Sz7N8sZ62x5oZvM6HzP24u83wQQDNK13ajyE9Ybtziz2bAkFWiDo7nghiRtni8z2nWdW79aThZ8lzyDJ7KM6xBJurXfztRu7RJMxwHKvF62RdGDPD0DWz5vrEv499jAVBztWfq7PWmXUmK6OtVWvx4v2R_SQ_tVVn5q1bls_FYYlKq7-6G8LLjfvVGoambzWYOS5__stiiQX5xzBZGtE91ZlmThfsGgwss7DDxhVu8KUJqw=s0',
    colors: [
      { name: 'Cát Tự Nhiên (Warm Taupe)', hex: '#d2c4b4', key: 'sand' },
      { name: 'Đen Huyền Bí (Noir Black)', hex: '#000000', key: 'black' }
    ],
    hardwareSpec: 'Khuy bấm từ tính ẩn dưới lớp da',
    leatherSpec: 'Da bò nguyên tấm dẻo dai (Supple Full-Grain)',
    description: [
      'Không gian khoáng đạt dành cho máy tính xách tay 15 inch, tài liệu kiến trúc và hành trang cho những chuyến công tác ngắn ngày.',
      'Quai đeo được gia cố hai lớp da khâu tay giúp phân tán trọng lượng êm ái trên bờ vai.'
    ],
    dimensions: {
      width: '38 cm',
      height: '31 cm',
      depth: '15 cm',
      strapDrop: '27 cm',
      weight: '680g'
    },
    stockRemaining: 6
  },
  {
    id: 'the-larche',
    sku: 'UNK-LA-01',
    name: "THE L'ARCHE",
    subtitle: 'Túi vòm điêu khắc lấy cảm hứng kiến trúc',
    category: 'TÚI ĐEO VAI',
    edition: 'HÌNH KHỐI KIẾN TRÚC',
    price: 1290000,
    priceFormatted: '1.290.000 VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSyWl1gOOKy7anySPbna5oayLX-l05Gb_WBL1bW78xSCPmLpao_jjB7tgeNln-8-lZ2Wu6nA-aGSnhfxfue0T91y27kfZ-x3aMiU7RxGLHqqdNakTrP3-DWJSLERW_g-BxILo6r-hmGYLREU9I-euoFZka0zbOxV2uqlo7ynLM96wVPliFAWyqV2brH5DaOjz411BSomV3UYhotXd87FUgtGE_aPxCHauZNL3D8q4zAHdojoOg3gqK0g=s0',
    colors: [
      { name: 'Đen Huyền Bí (Noir Black)', hex: '#000000', key: 'black' },
      { name: 'Nâu Trầm (Espresso)', hex: '#4e4539', key: 'espresso' }
    ],
    hardwareSpec: 'Khóa vòm ẩn mạ satin mờ',
    leatherSpec: 'Da bê nguyên tấm định hình nhiệt',
    description: [
      'Đường cong vòm cổng cổ điển giao thoa cùng mặt phẳng kỷ hà hiện đại. The L\'Arche như một tác phẩm điêu khắc thu nhỏ trên tay người phụ nữ.',
      'Kỹ thuật định hình khuôn gỗ truyền thống giúp túi giữ phom dáng vĩnh cửu mà không cần cốt nhựa công nghiệp.'
    ],
    dimensions: {
      width: '23 cm',
      height: '21 cm',
      depth: '9 cm',
      strapDrop: '14 cm / 48 cm',
      weight: '460g'
    },
    stockRemaining: 3
  },
  {
    id: 'the-monochrome',
    sku: 'UNK-MC-01',
    name: 'THE MONOCHROME',
    subtitle: 'Túi đeo chéo đơn sắc tối giản tuyệt đối',
    category: 'TÚI ĐEO CHÉO',
    edition: 'PHIÊN BẢN 01',
    price: 1190000,
    priceFormatted: '1.190.000 VNĐ',
    badge: 'MỚI RA MẮT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKW4Kyqo58Mu48a7d9UhWxbVD5_ZbeAeBnOrUd5ME6vXqBpgymuN71o1diKD7X23IOXHieWicCvkiocuu_pyBCG5PS9CGFQABD-blVxG22Rojk5YcayOXZ2EyD73Ne1xSb9xo2VFpkOpEsEzQL-k5Ph7aqm6VHQ0AMx2GOkH2jl7IpFjq-QYFRgx12LMVw7jZMABRPNr0IZYeiRN7eF32d7Fsuojb0_4nawpYcPnJAX7ztOyXzenLi8w=s0',
    colors: [
      { name: 'Trắng Ngà (Écru Ivory)', hex: '#f1eee7', key: 'ecru' },
      { name: 'Nâu Mộc (Espresso)', hex: '#4e4539', key: 'espresso' }
    ],
    hardwareSpec: 'Không chi tiết kim loại lộ diện',
    leatherSpec: 'Da Nappa thảo mộc siêu mềm',
    description: [
      'Sự thuần khiết của sắc độ đơn sắc: từ bề mặt da, chỉ khâu lanh cho đến lớp sơn cạnh 7 lớp đều mang cùng một tông màu duy nhất.',
      'Nhẹ nhàng, gọn gàng và ôm sát theo từng bước chân dạo phố.'
    ],
    dimensions: {
      width: '21 cm',
      height: '14 cm',
      depth: '6.5 cm',
      strapDrop: '50 cm',
      weight: '340g'
    },
    stockRemaining: 8
  },
  {
    id: 'slim-folio-cardholder',
    sku: 'UNK-SF-01',
    name: 'Slim Folio Cardholder',
    subtitle: 'Ví đựng thẻ thủ công siêu mỏng',
    category: 'PHỤ KIỆN DA',
    edition: 'PHỤ KIỆN DA',
    price: 1450000,
    priceFormatted: '1.450.000 VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACJYwhJxB6pcw4W6kihIpXv7l2r1I_zb7-0FPvzqjns_ppp1hebQ1-KlvYVZh1aqlC-s1bjMR6mYlGS-CNOBJCLstLWZVzYHz6yufShkP6YzPd1MnC78HmDva5Q3hDFm8QYbR7E3Pzo-1ogyVp12YUdQlaNz0LJcVOHoE01hGYOoeZI5KKBDV5lBdm-bfLR7dFFzOfffl9hENhYtlgW4iscnhyMYxLGEIkDsDlZ0JXXEJSrFLjkTqXPQ=s0',
    colors: [
      { name: 'Cà Phê Mộc (Taupe)', hex: '#675d50', key: 'sand' },
      { name: 'Đen Noir', hex: '#000000', key: 'black' }
    ],
    hardwareSpec: 'Không sử dụng kim loại',
    leatherSpec: 'Da bê lạng mỏng 0.6mm khâu tay',
    description: [
      'Gồm 4 ngăn thẻ vát góc kiến trúc và 1 ngăn chính giữa. Từng mép da được lạng mỏng và đánh sáp ong bóng mượt.',
      'Món phụ kiện nhỏ gọn thể hiện trọn vẹn triết lý chế tác của UNKNOWN.'
    ],
    dimensions: {
      width: '10.2 cm',
      height: '7.5 cm',
      depth: '0.4 cm',
      strapDrop: 'Không áp dụng',
      weight: '45g'
    },
    stockRemaining: 12
  },
  {
    id: 'monogram-key-clochette',
    sku: 'UNK-KC-01',
    name: 'Monogram Key Clochette',
    subtitle: 'Bao da treo chìa khóa & charm chữ lồng',
    category: 'PHỤ KIỆN ĐẶC BIỆT',
    edition: 'PHỤ KIỆN ĐẶC BIỆT',
    price: 950000,
    priceFormatted: '950.000 VNĐ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbiJ7DUd9ElydfwdN8rUGfhcEed-AUVwahz0Nq1bngLmiy2XpkEvE4yyX3Lx43oe6deqOq2nmEGnnKW_7Be8dUvHp0TFIMvHffDojrPyVHHtFDvyRMZXr5f8IJu51hDxhdZyagyzgOKSr8wqSLSR_jwEwbsZfrxxGVLkmkf7Ay0i9WBfHDJWyBgA9QRYP82LD8BpFZYDXtRMQ1MLC03vjAhoGcwhCed88z2uMJbno2tBkPRgLdWB18rg=s0',
    colors: [
      { name: 'Da Bò Mộc (Saddle Tan)', hex: '#b59e84', key: 'sand' },
      { name: 'Đen Noir', hex: '#000000', key: 'black' }
    ],
    hardwareSpec: 'Móc đồng thau & thẻ charm khắc chữ M/U',
    leatherSpec: 'Da thảo mộc Tuscany dày 2.0mm',
    description: [
      'Phụ kiện điểm xuyết hoàn hảo cho mọi chiếc túi UNKNOWN hoặc sử dụng như dây đeo chìa khóa cá nhân.',
      'Hỗ trợ khắc chữ cái tên riêng miễn phí tại xưởng.'
    ],
    dimensions: {
      width: '6.5 cm',
      height: '18 cm',
      depth: '1.5 cm',
      strapDrop: '12 cm',
      weight: '60g'
    },
    stockRemaining: 9
  }
];
