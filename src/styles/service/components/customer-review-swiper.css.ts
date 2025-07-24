import { style, globalStyle } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

export const swiperSection = style({
  width: "100%",
  maxWidth: "100vw",
  marginTop: vars.space.xxxxl,
  marginBottom: vars.space.xxxxl,
  padding: `${vars.space.xxxxl} ${vars.space.xxl}`,
  paddingBottom: `calc(${vars.space.xxxxl} + 60px)`,
  overflow: "visible",
  boxSizing: "border-box",
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.xl,
  boxShadow: vars.shadows.lg,
  position: "relative",
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.xxxl,
      marginBottom: vars.space.xxxl,
      padding: `${vars.space.xxxl} ${vars.space.xl}`,
      paddingBottom: `calc(${vars.space.xxxl} + 50px)`,
    },
    "(max-width: 480px)": {
      marginTop: vars.space.xxl,
      marginBottom: vars.space.xxl,
      padding: `${vars.space.xxl} ${vars.space.lg}`,
      paddingBottom: `calc(${vars.space.xxl} + 40px)`,
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
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: vars.space.md,
      marginBottom: vars.space.xl,
      alignItems: "flex-start",
      paddingBottom: vars.space.md,
    },
    "screen and (max-width: 480px)": {
      gap: vars.space.md,
      marginBottom: vars.space.lg,
    },
  },
})

export const sectionTitleContainer = style({
  flex: 1,
  "@media": {
    "screen and (max-width: 768px)": {
      flex: "1",
      minWidth: "0",
    },
  },
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: vars.fontWeights.extrabold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
  lineHeight: vars.lineHeights.heading,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.xxxl,
      marginBottom: vars.space.sm,
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.xxl,
      marginBottom: vars.space.sm,
    },
  },
})

export const sectionDescription = style({
  fontSize: vars.fontSizes.xl,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
  maxWidth: "600px",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.lg,
      marginBottom: vars.space.md,
      maxWidth: "none",
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.md,
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
  width: "100%",
  maxWidth: "100%",
  overflow: "visible",
  boxSizing: "border-box",
  height: "650px",
  minHeight: "650px",
  "@media": {
    "screen and (max-width: 768px)": {
      paddingBottom: vars.space.lg,
      paddingTop: vars.space.sm,
      margin: "0 -12px",
      padding: "12px 12px",
      borderRadius: vars.radii.xl,
      background:
        "linear-gradient(135deg, rgba(168, 85, 247, 0.02) 0%, rgba(236, 72, 153, 0.02) 100%)",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(168, 85, 247, 0.05)",
      overflow: "visible",
      height: "610px",
      minHeight: "610px",
    },
    "screen and (max-width: 480px)": {
      paddingBottom: vars.space.md,
      margin: "0 -8px",
      padding: "8px 8px",
      height: "570px",
      minHeight: "570px",
    },
  },
})

export const swiperWrapper = style({
  paddingBottom: vars.space.xxxl,
  paddingTop: vars.space.xl,
  width: "100%",
  maxWidth: "100%",
  overflow: "visible",
  boxSizing: "border-box",
  height: "620px",
  minHeight: "620px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  "@media": {
    "(max-width: 768px)": {
      paddingBottom: vars.space.xxl,
      paddingTop: vars.space.lg,
      borderRadius: vars.radii.lg,
      padding: "20px 0",
      overflow: "hidden",
      height: "580px",
      minHeight: "580px",
    },
    "(max-width: 480px)": {
      paddingBottom: vars.space.xl,
      padding: "16px 0",
      height: "540px",
      minHeight: "540px",
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
  width: "auto",
  maxWidth: "calc(100% - 40px)",
  textAlign: "center",
  padding: "0 20px",
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

export const swiperSlide = style({
  height: "500px",
  display: "flex",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  minHeight: "500px",
  flexShrink: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      height: "460px",
      minHeight: "460px",
    },
    "screen and (max-width: 480px)": {
      height: "420px",
      minHeight: "420px",
    },
  },
})

export const reviewCard = style({
  display: "block",
  width: "100%",
  height: "500px",
  minHeight: "500px",
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
      height: "460px",
      minHeight: "460px",
      borderRadius: vars.radii.xl,
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(30px)",
      boxShadow:
        "0 8px 32px rgba(59, 130, 246, 0.08), 0 4px 16px rgba(168, 85, 247, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.4)",
      transform: "scale(1.02)",
      ":hover": {
        transform: "translateY(-6px) scale(1.03)",
        boxShadow:
          "0 16px 48px rgba(59, 130, 246, 0.12), 0 8px 24px rgba(168, 85, 247, 0.08)",
        borderColor: "rgba(59, 130, 246, 0.2)",
      },
    },
    "screen and (max-width: 480px)": {
      height: "420px",
      minHeight: "420px",
      borderRadius: vars.radii.lg,
      transform: "scale(1.01)",
      ":hover": {
        transform: "translateY(-4px) scale(1.02)",
        boxShadow:
          "0 12px 32px rgba(59, 130, 246, 0.1), 0 6px 16px rgba(168, 85, 247, 0.06)",
      },
    },
  },
})

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

export const cardTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  lineHeight: vars.lineHeights.heading,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  flex: 1,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.lg,
      lineHeight: "1.4",
      fontWeight: vars.fontWeights.bold,
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
})

export const starIcon = style({
  width: "16px",
  height: "16px",
  fill: "currentColor",
})

export const meta = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
  marginBottom: vars.space.sm,
})

export const metaItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const metaIcon = style({
  width: "16px",
  height: "16px",
  color: vars.colors.secondary,
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
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  marginBottom: vars.space.sm,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: vars.fontSizes.sm,
      lineHeight: "1.5",
      WebkitLineClamp: 3,
      marginBottom: vars.space.sm,
      color: vars.colors.textStrong,
      fontWeight: vars.fontWeights.medium,
    },
    "screen and (max-width: 480px)": {
      fontSize: vars.fontSizes.xs,
      lineHeight: "1.4",
      WebkitLineClamp: 2,
    },
  },
})

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "auto",
  paddingTop: vars.space.sm,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
})

export const date = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
})

export const navButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 20,
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
      width: "40px",
      height: "40px",
      display: "flex",
      top: "95px", // imageContainer 높이 180px의 정중앙 (90px + 5px 조정)
    },
    "screen and (max-width: 480px)": {
      top: "95px", // imageContainer 높이 160px의 정중앙 (80px + 5px 조정)
    },
    "screen and (max-width: 375px)": {
      top: "85px", // imageContainer 높이 140px의 정중앙 (70px + 5px 조정)
    },
  },
})

export const prevButton = style({
  left: "-24px",
  "@media": {
    "screen and (max-width: 768px)": {
      left: "20px", // 좌측 여백 늘리기
    },
  },
})

export const nextButton = style({
  right: "-24px",
  "@media": {
    "screen and (max-width: 768px)": {
      right: "20px", // 우측 여백 늘리기
    },
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
