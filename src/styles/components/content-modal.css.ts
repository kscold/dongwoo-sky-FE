import { style, keyframes } from "@vanilla-extract/css"

// 애니메이션
const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const slideUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(30px) scale(0.95)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0) scale(1)",
  },
})

// 오버레이 - 높은 z-index로 최상위에 표시
export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10000, // 매우 높은 z-index
  padding: "20px",
  animation: `${fadeIn} 0.2s ease-out`,
})

// 모달 메인 컨테이너
export const modal = style({
  backgroundColor: "#fff",
  borderRadius: "20px",
  maxWidth: "480px",
  width: "100%",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  animation: `${slideUp} 0.3s ease-out`,
  overflow: "hidden",
  position: "relative",

  "@media": {
    "(max-width: 520px)": {
      maxWidth: "calc(100vw - 40px)",
      borderRadius: "16px",
    },
  },
})

// 헤더
export const header = style({
  padding: "24px 24px 16px 24px",
  position: "relative",
  borderBottom: "1px solid #f0f0f0",

  "@media": {
    "(max-width: 520px)": {
      padding: "20px 20px 12px 20px",
    },
  },
})

export const badge = style({
  display: "inline-block",
  backgroundColor: "#e3f2fd",
  color: "#1976d2",
  padding: "6px 12px",
  borderRadius: "12px",
  fontSize: "12px",
  fontWeight: "600",
  marginBottom: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  textAlign: "left", // 뱃지는 왼쪽 정렬
})

export const title = style({
  fontSize: "18px",
  fontWeight: "700",
  color: "#212121",
  margin: "0",
  lineHeight: "1.4",
  textAlign: "center", // 제목은 가운데 정렬

  "@media": {
    "(max-width: 520px)": {
      fontSize: "16px",
    },
  },
})

export const closeBtn = style({
  position: "absolute",
  top: "16px",
  right: "16px",
  background: "none",
  border: "none",
  fontSize: "24px",
  color: "#999",
  cursor: "pointer",
  padding: "8px",
  borderRadius: "50%",
  transition: "all 0.2s ease",
  lineHeight: "1",

  ":hover": {
    backgroundColor: "#f5f5f5",
    color: "#666",
  },
})

// 바디
export const body = style({
  flex: 1,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
})

// 이미지 섹션
export const imageSection = style({
  width: "100%",
  height: "280px", // 고정 높이로 설정
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f8f9fa", // 연한 회색 배경으로 변경
  overflow: "hidden",
  position: "relative",
})

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover", // 이미지가 컨테이너를 완전히 채우도록
  objectPosition: "center",
  display: "block",
  backgroundColor: "transparent", // 투명 배경
})

// 컨텐츠
export const content = style({
  padding: "20px 24px",
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#424242",
  textAlign: "left", // 내용도 왼쪽 정렬로 변경

  "@media": {
    "(max-width: 520px)": {
      padding: "16px 20px",
      fontSize: "14px",
    },
  },
})

// 푸터
export const footer = style({
  padding: "16px 24px 24px 24px",
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  borderTop: "1px solid #f0f0f0",

  "@media": {
    "(max-width: 520px)": {
      padding: "12px 20px 20px 20px",
      flexDirection: "column",
    },
  },
})

export const todayBtn = style({
  backgroundColor: "#f5f5f5",
  color: "#666",
  border: "none",
  borderRadius: "8px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: "#eeeeee",
  },

  "@media": {
    "(max-width: 520px)": {
      padding: "10px 16px",
    },
  },
})

export const confirmBtn = style({
  backgroundColor: "#1976d2",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "12px 24px",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  minWidth: "80px",

  ":hover": {
    backgroundColor: "#1565c0",
  },

  "@media": {
    "(max-width: 520px)": {
      padding: "10px 20px",
    },
  },
})

// 기존 스타일들 (호환성을 위해 유지)
export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  animation: `${fadeIn} 0.2s ease-out`,
  padding: "20px",
  backdropFilter: "blur(8px)",
})

export const modalContent = style({
  backgroundColor: "#ffffff",
  borderRadius: "24px",
  maxWidth: "540px",
  width: "100%",
  maxHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  boxShadow:
    "0 32px 80px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)",
  animation: `${slideUp} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
  overflow: "hidden",
  border: "none",

  "@media": {
    "(max-width: 640px)": {
      maxWidth: "calc(100vw - 32px)",
      borderRadius: "20px",
      maxHeight: "90vh",
    },
  },
})

export const responsiveModalContent = style({
  "@media": {
    "(max-width: 640px)": {
      maxWidth: "calc(100vw - 32px)",
      margin: "16px",
      borderRadius: "16px",
    },
  },
})
