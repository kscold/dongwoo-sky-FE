import { style, keyframes } from "@vanilla-extract/css"

// 기본 이미지 컨테이너 - 깔끔하고 자연스럽게
export const imageContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  margin: "0",
  padding: "0",
})

// 단일 이미지 래퍼 - 이미지 비율에 맞춰 자연스럽게
export const singleImageWrapper = style({
  width: "100%",
  maxWidth: "450px",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",

  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  },

  "@media": {
    "(max-width: 480px)": {
      maxWidth: "100%",
      borderRadius: "12px",
    },
  },
})

// 단일 이미지 - 원본 비율 유지하면서 예쁘게
export const singleImage = style({
  width: "100%",
  // height: "auto",
  // maxHeight: "300px",
  objectFit: "contain",
  backgroundColor: "#fff",
  // display: "block",

  // "@media": {
  //   "(max-width: 480px)": {
  //     maxHeight: "250px",
  //   },
  // },
})

// 다중 이미지 그리드 - 깔끔한 정사각형 그리드
export const multiImageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "12px",
  width: "100%",
  maxWidth: "450px",

  "@media": {
    "(max-width: 480px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "8px",
    },
  },
})

export const imageGridItem = style({
  aspectRatio: "1/1",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
  transition: "all 0.3s ease",
  cursor: "pointer",

  ":hover": {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
  },
})

export const gridImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#fff",
  display: "block",
})

// 이미지 확대 모달 애니메이션
const fadeInAnimation = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const zoomInAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "scale(0.8)",
  },
  "100%": {
    opacity: 1,
    transform: "scale(1)",
  },
})

// 확대 모달 오버레이
export const imageModalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10000,
  animation: `${fadeInAnimation} 0.3s ease-out`,
  padding: "20px",
})

// 확대 모달 컨테이너
export const imageModal = style({
  position: "relative",
  maxWidth: "90vw",
  maxHeight: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  animation: `${zoomInAnimation} 0.4s ease-out`,
})

// 확대 모달 닫기 버튼
export const imageModalClose = style({
  position: "absolute",
  top: "-50px",
  right: "0",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  border: "none",
  fontSize: "24px",
  fontWeight: "300",
  cursor: "pointer",
  color: "#333",
  padding: "12px",
  borderRadius: "50%",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  zIndex: 10001,

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "scale(1.1)",
  },
})

// 네비게이션 버튼
export const navButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  border: "none",
  fontSize: "32px",
  fontWeight: "300",
  cursor: "pointer",
  color: "#333",
  padding: "16px",
  borderRadius: "50%",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "56px",
  height: "56px",
  zIndex: 10001,

  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.1)",
  },

  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },

  selectors: {
    "&:disabled:hover": {
      transform: "translateY(-50%)",
    },
  },
})

export const prevButton = style({
  left: "-70px",
  "@media": {
    "(max-width: 768px)": {
      left: "16px",
    },
  },
})

export const nextButton = style({
  right: "-70px",
  "@media": {
    "(max-width: 768px)": {
      right: "16px",
    },
  },
})

// 확대 모달 컨텐츠
export const imageModalContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
})

// 확대 모달 이미지
export const modalImage = style({
  maxWidth: "100%",
  maxHeight: "calc(90vh - 100px)",
  width: "auto",
  height: "auto",
  objectFit: "contain",
  borderRadius: "12px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
  backgroundColor: "#fff",
})

// 이미지 정보 박스
export const imageInfo = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  padding: "16px 24px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(15px)",
  borderRadius: "12px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",

  "@media": {
    "(max-width: 480px)": {
      padding: "12px 16px",
    },
  },
})

export const imageName = style({
  fontSize: "14px",
  fontWeight: "500",
  color: "#333",
  textAlign: "center",
  wordBreak: "break-word",
  lineHeight: "1.4",
})

export const imageCounter = style({
  fontSize: "12px",
  color: "#666",
  fontWeight: "400",
})
