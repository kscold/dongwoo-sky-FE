import { style, globalStyle } from "@vanilla-extract/css"

// Swiper 글로벌 스타일
globalStyle(".swiper-container", {
  width: "100%",
  height: "100%",
})

globalStyle(".swiper-slide", {
  textAlign: "center",
  fontSize: "18px",
  background: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

globalStyle(".swiper-pagination-bullet", {
  width: "8px",
  height: "8px",
  background: "rgba(10, 56, 117, 0.3)",
})

globalStyle(".swiper-pagination-bullet-active", {
  background: "#0A3875",
  width: "20px",
  borderRadius: "4px",
})

// 장비 스와이퍼 컨테이너
export const equipmentSwiperContainer = style({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 20px",
  position: "relative",
})

// 스와이퍼 래퍼
export const swiperWrapper = style({
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
})

// 장비 카드 스타일
export const equipmentCard = style({
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  borderRadius: "20px",
  padding: "40px",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",

  "::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "4px",
    background: "linear-gradient(90deg, #0A3875 0%, #1565C0 50%, #0E4DA4 100%)",
  },

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "30px 20px",
      height: "450px",
    },
  },
})

// 장비 이미지 컨테이너
export const equipmentImageContainer = style({
  width: "200px",
  height: "200px",
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: "30px",
  background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",

  "@media": {
    "screen and (max-width: 768px)": {
      width: "160px",
      height: "160px",
      marginBottom: "20px",
    },
  },
})

// 장비 이미지
export const equipmentImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",

  ":hover": {
    transform: "scale(1.05)",
  },
})

// 이미지 플레이스홀더
export const imagePlaceholder = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#64748b",
  fontSize: "14px",
  fontWeight: "600",
  textAlign: "center",
  gap: "8px",
})

// 플레이스홀더 아이콘
export const placeholderIcon = style({
  width: "40px",
  height: "40px",
  color: "#94a3b8",
})

// 장비 제목
export const equipmentTitle = style({
  fontSize: "28px",
  fontWeight: "800",
  color: "#0f172a",
  marginBottom: "16px",
  textAlign: "center",
  fontFamily:
    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
})

// 장비 설명
export const equipmentDescription = style({
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#475569",
  textAlign: "center",
  maxWidth: "600px",
  fontWeight: "400",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      lineHeight: "1.5",
    },
  },
})

// 장비 스펙 컨테이너 (추가 정보)
export const equipmentSpecs = style({
  marginTop: "20px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  justifyContent: "center",
})

// 스펙 태그
export const specTag = style({
  background: "rgba(10, 56, 117, 0.1)",
  color: "#0A3875",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "600",
  border: "1px solid rgba(10, 56, 117, 0.2)",
})

// 내비게이션 버튼
export const navigationButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "50px",
  height: "50px",
  background: "rgba(255, 255, 255, 0.9)",
  borderRadius: "50%",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  zIndex: 10,
  transition: "all 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",

  ":hover": {
    background: "#fff",
    transform: "translateY(-50%) scale(1.1)",
  },

  ":active": {
    transform: "translateY(-50%) scale(0.95)",
  },

  "@media": {
    "screen and (max-width: 768px)": {
      width: "40px",
      height: "40px",
    },
  },
})

export const prevButton = style([
  navigationButton,
  {
    left: "20px",

    "@media": {
      "screen and (max-width: 768px)": {
        left: "10px",
      },
    },
  },
])

export const nextButton = style([
  navigationButton,
  {
    right: "20px",

    "@media": {
      "screen and (max-width: 768px)": {
        right: "10px",
      },
    },
  },
])

// 페이지네이션 컨테이너
export const paginationContainer = style({
  marginTop: "30px",
  textAlign: "center",
})

// 로딩 스타일
export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  fontSize: "16px",
  color: "#64748b",
})

// 에러 스타일
export const errorContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  fontSize: "16px",
  color: "#ef4444",
  textAlign: "center",
})
