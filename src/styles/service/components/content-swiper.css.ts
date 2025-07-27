import { style, globalStyle } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const swiperSection = style({
  width: "100%",
  flex: 1,
  margin: 0,
  padding: `${vars.space.lg} ${vars.space.md}`,
  paddingBottom: `${vars.space.lg}`,
  overflow: "visible",
  boxSizing: "border-box",
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.xl,
  boxShadow: vars.shadows.lg,
  position: "relative",
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.xl,
      marginBottom: vars.space.xl,
      padding: `${vars.space.lg} ${vars.space.sm}`,
      paddingBottom: `${vars.space.md}`,
      maxWidth: "100%",
    },
    "(max-width: 480px)": {
      marginTop: vars.space.lg,
      marginBottom: vars.space.lg,
      padding: `${vars.space.md} ${vars.space.xs}`,
      paddingBottom: `${vars.space.sm}`,
    },
  },
})

export const sectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginBottom: vars.space.xxxl,
  gap: vars.space.xl,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.colors.gray[200]}`,
  minHeight: "120px",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: vars.space.md,
      marginBottom: vars.space.xl,
      alignItems: "flex-start",
      paddingBottom: vars.space.md,
      minHeight: "auto",
    },
    "screen and (max-width: 480px)": {
      gap: vars.space.md,
      marginBottom: vars.space.lg,
    },
  },
})

export const sectionTitleContainer = style({
  flex: 1,
  minHeight: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  "@media": {
    "screen and (max-width: 768px)": {
      flex: "1",
      minWidth: "0",
      minHeight: "auto",
      justifyContent: "flex-start",
    },
  },
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.extrabold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
  lineHeight: vars.lineHeights.heading,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xxl,
      marginBottom: vars.space.sm,
      whiteSpace: "normal",
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.xl,
      marginBottom: vars.space.sm,
    },
  },
})

export const sectionDescription = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
  maxWidth: "600px",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.md,
      marginBottom: vars.space.md,
      maxWidth: "none",
      WebkitLineClamp: 3,
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.sm,
      lineHeight: "1.5",
    },
  },
})

export const viewAllButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderRadius: vars.radii.xl,
  textDecoration: "none",
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  transition: "all 0.3s ease",
  boxShadow: vars.shadows.lg,
  border: `2px solid transparent`,
  "::after": {
    content: "→",
    fontSize: "1.2em",
    transition: "transform 0.3s ease",
  },
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-3px)",
    boxShadow: vars.shadows.xl,
    borderColor: vars.colors.primary,
  },
  // ":hover::after": {
  //   transform: "translateX(4px)",
  // },
  "@media": {
    "(max-width: 768px)": {
      alignSelf: "flex-start",
      padding: `${vars.space.sm} ${vars.space.lg}`,
      fontSize: vars.fontSizes.md,
      borderRadius: vars.radii.lg,
      minHeight: "40px",
      boxShadow: vars.shadows.md,
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.sm,
      minHeight: "36px",
      padding: `${vars.space.xs} ${vars.space.md}`,
    },
  },
})

export const swiperContainer = style({
  position: "relative",
  paddingBottom: vars.space.xl,
  paddingTop: vars.space.md,
  paddingLeft: "60px",
  paddingRight: "60px",
  width: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  "@media": {
    "screen and (min-width: 1200px)": {
      paddingLeft: "80px",
      paddingRight: "80px",
      overflow: "hidden",
    },
    "screen and (max-width: 1199px)": {
      paddingLeft: "40px",
      paddingRight: "40px",
      overflow: "hidden",
    },
    "screen and (max-width: 768px)": {
      paddingBottom: vars.space.lg,
      paddingTop: vars.space.sm,
      paddingLeft: "60px",
      paddingRight: "60px",
      margin: "0",
      overflow: "hidden",
    },
    "screen and (max-width: 480px)": {
      paddingBottom: vars.space.md,
      paddingLeft: "50px",
      paddingRight: "50px",
      margin: "0",
    },
  },
})

export const swiperWrapper = style({
  paddingBottom: "60px",
  paddingTop: vars.space.lg,
  paddingLeft: "0",
  paddingRight: "0",
  width: "100%",
  maxWidth: "100%",
  overflow: "visible",
  boxSizing: "border-box",
  height: "520px",
  minHeight: "520px",
  position: "relative",
  display: "block",
  "@media": {
    "(max-width: 768px)": {
      paddingBottom: "50px",
      paddingTop: vars.space.md,
      borderRadius: vars.radii.lg,
      overflow: "hidden",
      height: "480px",
      minHeight: "480px",
    },
    "(max-width: 480px)": {
      paddingBottom: "40px",
      paddingTop: vars.space.sm,
      height: "450px",
      minHeight: "450px",
    },
  },
})

export const pagination = style({
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: vars.space.sm,
  zIndex: 15,
  height: "32px",
  minHeight: "32px",
  width: "fit-content",
  textAlign: "center",
  padding: "0 12px",
  "@media": {
    "(max-width: 768px)": {
      bottom: "15px",
      height: "28px",
      minHeight: "28px",
      maxWidth: "calc(100% - 24px)",
      padding: "0 12px",
    },
    "(max-width: 480px)": {
      bottom: "10px",
      height: "24px",
      minHeight: "24px",
      maxWidth: "calc(100% - 16px)",
      padding: "0 8px",
    },
  },
})

export const paginationBullet = style({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: vars.colors.gray[300],
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: vars.colors.primary,
    transform: "scale(1.2)",
  },
  "@media": {
    "(max-width: 768px)": {
      width: "10px",
      height: "10px",
    },
  },
})

export const paginationBulletActive = style({
  backgroundColor: vars.colors.primary,
  transform: "scale(1.2)",
})

// 모든 화면에서 Swiper 요소들의 overflow를 visible로 설정
globalStyle(`${swiperWrapper} .swiper`, {
  overflow: "visible",
})

globalStyle(`${swiperWrapper} .swiper-wrapper`, {
  overflow: "visible",
})

globalStyle(`${swiperWrapper} .swiper-slide`, {
  overflow: "visible",
})

// 모바일에서 강제로 1개씩만 보이도록 설정
globalStyle(`@media (max-width: 768px) .swiper-slide`, {
  width: "100% !important",
  flex: "0 0 100% !important",
})

globalStyle(`@media (max-width: 480px) .swiper-slide`, {
  width: "100% !important",
  flex: "0 0 100% !important",
})

// Swiper pagination 완전 중앙 정렬 및 데이터 없을 때도 표시
globalStyle(".customer-review-pagination", {
  position: "absolute",
  bottom: "12px",
  left: "0",
  right: "0",
  margin: "0 auto",
  width: "fit-content",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 25,
  minHeight: "24px",
  padding: "0 8px",
})

globalStyle(".customer-review-pagination .swiper-pagination-bullet", {
  width: "12px",
  height: "12px",
  margin: "0 6px",
  backgroundColor: "#cbd5e1",
  opacity: 1,
  borderRadius: "50%",
  transition: "all 0.3s ease",
  display: "inline-block",
  cursor: "pointer",
})

globalStyle(".customer-review-pagination .swiper-pagination-bullet-active", {
  backgroundColor: vars.colors.primary,
  transform: "scale(1.2)",
  boxShadow: `0 0 6px ${vars.colors.primary}`,
})

globalStyle(".work-showcase-pagination", {
  position: "absolute",
  bottom: "12px",
  left: "0",
  right: "0",
  margin: "0 auto",
  width: "fit-content",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 25,
  minHeight: "24px",
  padding: "0 8px",
})

globalStyle(".work-showcase-pagination .swiper-pagination-bullet", {
  width: "12px",
  height: "12px",
  margin: "0 6px",
  backgroundColor: "#cbd5e1",
  opacity: 1,
  borderRadius: "50%",
  transition: "all 0.3s ease",
  display: "inline-block",
  cursor: "pointer",
})

globalStyle(".work-showcase-pagination .swiper-pagination-bullet-active", {
  backgroundColor: vars.colors.primary,
  transform: "scale(1.2)",
  boxShadow: `0 0 6px ${vars.colors.primary}`,
})

// 모바일 페이지네이션 스타일 조정
globalStyle(".customer-review-pagination", {
  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "8px",
      minHeight: "20px",
    },
    "screen and (max-width: 480px)": {
      bottom: "6px",
      minHeight: "18px",
    },
  },
})

globalStyle(".work-showcase-pagination", {
  "@media": {
    "screen and (max-width: 768px)": {
      bottom: "8px",
      minHeight: "20px",
    },
    "screen and (max-width: 480px)": {
      bottom: "6px",
      minHeight: "18px",
    },
  },
})

globalStyle(".customer-review-pagination .swiper-pagination-bullet", {
  "@media": {
    "screen and (max-width: 768px)": {
      width: "8px",
      height: "8px",
      margin: "0 2px",
    },
    "screen and (max-width: 480px)": {
      width: "6px",
      height: "6px",
      margin: "0 2px",
    },
  },
})

globalStyle(".work-showcase-pagination .swiper-pagination-bullet", {
  "@media": {
    "screen and (max-width: 768px)": {
      width: "8px",
      height: "8px",
      margin: "0 2px",
    },
    "screen and (max-width: 480px)": {
      width: "6px",
      height: "6px",
      margin: "0 2px",
    },
  },
})

export const swiperSlide = style({
  display: "flex",
  width: "100%",
  boxSizing: "border-box",
  minHeight: "500px",
  flex: "0 0 auto",
  flexShrink: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      minHeight: "460px",
      width: "100% !important",
      flex: "0 0 100% !important",
    },
    "screen and (max-width: 480px)": {
      minHeight: "420px",
      width: "100% !important",
      flex: "0 0 100% !important",
    },
  },
})

export const reviewCard = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  minHeight: "420px",
  background: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(20px)",
  borderRadius: vars.radii.xl,
  overflow: "hidden",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
    borderColor: "rgba(59, 130, 246, 0.3)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      minHeight: "400px",
      borderRadius: vars.radii.lg,
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(30px)",
      boxShadow:
        "0 8px 32px rgba(59, 130, 246, 0.08), 0 4px 16px rgba(168, 85, 247, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      ":hover": {
        transform: "translateY(-6px)",
        boxShadow:
          "0 16px 48px rgba(59, 130, 246, 0.12), 0 8px 24px rgba(168, 85, 247, 0.08)",
        borderColor: "rgba(59, 130, 246, 0.2)",
      },
    },
    "screen and (max-width: 480px)": {
      minHeight: "380px",
      borderRadius: vars.radii.md,
      ":hover": {
        transform: "translateY(-4px)",
        boxShadow:
          "0 12px 32px rgba(59, 130, 246, 0.1), 0 6px 16px rgba(168, 85, 247, 0.06)",
      },
    },
  },
})

export const card = reviewCard

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: "180px",
  backgroundColor: vars.colors.gray[100],
  overflow: "hidden",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "180px",
      borderRadius: `${vars.radii.xl} ${vars.radii.xl} 0 0`,
      background:
        "linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
    },
    "screen and (max-width: 480px)": {
      height: "160px",
      borderRadius: `${vars.radii.lg} ${vars.radii.lg} 0 0`,
    },
    "screen and (max-width: 375px)": {
      height: "140px",
    },
  },
})

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: `${vars.radii.xl} ${vars.radii.xl} 0 0`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "@media": {
    "screen and (max-width: 768px)": {
      borderRadius: `${vars.radii.xl} ${vars.radii.xl} 0 0`,
      filter: "brightness(1.05) saturate(1.1)",
    },
    "screen and (max-width: 480px)": {
      borderRadius: `${vars.radii.lg} ${vars.radii.lg} 0 0`,
    },
  },
})

export const imagePlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  color: vars.colors.secondary,
  backgroundColor: `linear-gradient(135deg, ${vars.colors.primaryLight} 0%, ${vars.colors.secondary} 100%)`,
})

export const cardContent = style({
  padding: vars.space.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  "@media": {
    "screen and (max-width: 768px)": {
      padding: vars.space.lg,
      gap: vars.space.sm,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.95) 100%)",
      backdropFilter: "blur(10px)",
    },
    "screen and (max-width: 480px)": {
      padding: vars.space.md,
      gap: vars.space.xs,
    },
  },
})

export const cardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: vars.space.sm,
  gap: vars.space.md,
})

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "auto",
  paddingTop: vars.space.sm,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
})

export const cardTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: "#000000",
  lineHeight: vars.lineHeights.heading,
  marginBottom: vars.space.sm,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.lg,
      marginBottom: vars.space.sm,
      lineHeight: "1.4",
      fontWeight: vars.fontWeights.bold,
      color: "#000000",
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.md,
      lineHeight: "1.3",
    },
  },
})

export const rating = style({
  display: "flex",
  gap: "2px",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "1px",
    },
  },
})

export const starIcon = style({
  width: "16px",
  height: "16px",
  fill: "currentColor",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "14px",
      height: "14px",
    },
  },
})

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
  marginBottom: vars.space.sm,
  "@media": {
    "screen and (max-width: 768px)": {
      gap: "2px",
      marginBottom: vars.space.xs,
    },
  },
})

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
      gap: "4px",
    },
  },
})

export const metaIcon = style({
  width: "16px",
  height: "16px",
  color: vars.colors.primary,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "14px",
      height: "14px",
    },
  },
})

export const serviceIcon = style({
  fontSize: vars.fontSizes.sm,
})

export const description = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  marginBottom: vars.space.sm,
  minHeight: "2.4em",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.sm,
      lineHeight: "1.5",
      WebkitLineClamp: 2,
      marginBottom: vars.space.sm,
      color: vars.colors.textStrong,
      fontWeight: vars.fontWeights.medium,
      minHeight: "2.4em",
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.xs,
      lineHeight: "1.4",
      WebkitLineClamp: 2,
      minHeight: "2.2em",
    },
  },
})

export const stats = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "auto",
  paddingTop: vars.space.sm,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
  "@media": {
    "screen and (max-width: 768px)": {
      paddingTop: vars.space.xs,
    },
  },
})

export const stat = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xs,
      gap: "4px",
    },
  },
})

export const statIcon = style({
  width: "16px",
  height: "16px",
  color: vars.colors.secondary,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "14px",
      height: "14px",
    },
  },
})

export const locationIcon = style({
  fontSize: vars.fontSizes.sm,
})

export const date = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "10px",
    },
  },
})

export const navButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 30,
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.1)",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.15)",
  },
  "@media": {
    "screen and (max-width: 768px)": {
      width: "44px",
      height: "44px",
      display: "flex",
      top: "50%",
      transform: "translateY(-50%)",
    },
    "screen and (max-width: 480px)": {
      width: "40px",
      height: "40px",
      top: "50%",
    },
  },
})

export const prevButton = style({
  position: "absolute",
  left: "10px",
  top: "45%",
  transform: "translateY(-50%)",
  zIndex: 30,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 16px rgba(168, 85, 247, 0.2)",
  backdropFilter: "blur(10px)",
  "@media": {
    "screen and (min-width: 1200px)": {
      left: "15px",
      width: "44px",
      height: "44px",
    },
    "screen and (max-width: 1199px)": {
      left: "8px",
      width: "38px",
      height: "38px",
    },
    "screen and (max-width: 768px)": {
      left: "15px",
      top: "40%",
      width: "36px",
      height: "36px",
      zIndex: 35,
    },
    "screen and (max-width: 480px)": {
      left: "12px",
      top: "35%",
      width: "32px",
      height: "32px",
    },
  },
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-50%) scale(1.1)",
  },
  ":active": {
    transform: "translateY(-50%) scale(0.9)",
  },
})

export const nextButton = style({
  position: "absolute",
  right: "10px",
  top: "45%",
  transform: "translateY(-50%)",
  zIndex: 30,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 16px rgba(168, 85, 247, 0.2)",
  backdropFilter: "blur(10px)",
  "@media": {
    "screen and (min-width: 1200px)": {
      right: "15px",
      width: "44px",
      height: "44px",
    },
    "screen and (max-width: 1199px)": {
      right: "8px",
      width: "38px",
      height: "38px",
    },
    "screen and (max-width: 768px)": {
      right: "15px",
      top: "40%",
      width: "36px",
      height: "36px",
      zIndex: 35,
    },
    "screen and (max-width: 480px)": {
      right: "12px",
      top: "35%",
      width: "32px",
      height: "32px",
    },
  },
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-50%) scale(1.1)",
  },
  ":active": {
    transform: "translateY(-50%) scale(0.9)",
  },
})

export const navIcon = style({
  width: "24px",
  height: "24px",
  color: vars.colors.primary,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "20px",
      height: "20px",
    },
  },
})
