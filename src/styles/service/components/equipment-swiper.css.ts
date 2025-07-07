import { style, globalStyle } from "@vanilla-extract/css"
import { vars } from "@/styles/common/theme.css"

export const swiperContainer = style({
  position: "relative",
  paddingBottom: "60px",
})

export const swiperWrapper = style({
  // Swiper 래퍼 스타일
})

export const swiperSlide = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  boxShadow: vars.shadows.md,
  transition: "transform 0.3s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
})

export const imageContainer = style({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 10",
  backgroundColor: vars.colors.gray[100],
})

export const image = style({
  objectFit: "cover",
  borderRadius: `${vars.radii.lg} ${vars.radii.lg} 0 0`,
})

export const equipmentImage = style({
  objectFit: "cover",
})

export const slideContent = style({
  padding: vars.space.lg,
})

export const slideTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
})

export const slideInfo = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  fontWeight: vars.fontWeights.medium,
})

export const infoContainer = style({
  padding: vars.space.md,
})

export const equipmentName = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.sm,
})

export const equipmentDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  height: "60px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  lineHeight: "1.5",
})

export const navButton = style({
  position: "absolute",
  top: "40%",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: vars.radii.full,
  backgroundColor: "rgba(30, 41, 59, 0.6)",
  color: vars.colors.white,
  transition: `all ${vars.transitions.fast}`,
  border: `1px solid rgba(255, 255, 255, 0.2)`,

  selectors: {
    "&:hover": {
      backgroundColor: "rgba(30, 41, 59, 0.8)",
      transform: "translateY(-50%) scale(1.05)",
      borderColor: `rgba(255, 255, 255, 0.4)`,
    },
  },
})

export const prevButton = style({
  left: "1rem",
})

export const nextButton = style({
  right: "1rem",
})

export const navIcon = style({
  width: "24px",
  height: "24px",
})

export const swiperButton = style({
  position: "absolute",
  top: "40%",
  transform: "translateY(-50%)",
  zIndex: 10,
  width: "44px",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: vars.radii.full,
  backgroundColor: "rgba(30, 41, 59, 0.6)",
  color: vars.colors.white,
  transition: `all ${vars.transitions.fast}`,
  border: `1px solid rgba(255, 255, 255, 0.2)`,

  selectors: {
    "&:hover": {
      backgroundColor: "rgba(30, 41, 59, 0.8)",
      transform: "translateY(-50%) scale(1.05)",
      borderColor: `rgba(255, 255, 255, 0.4)`,
    },
  },
})

globalStyle(`${navButton} > svg`, {
  width: "24px",
  height: "24px",
})

globalStyle(`${swiperButton} > svg`, {
  width: "24px",
  height: "24px",
})

globalStyle(".swiper-button-disabled", {
  opacity: 0.4,
  cursor: "not-allowed",
  pointerEvents: "none",
})

export const swiperButtonPrev = style([
  swiperButton,
  {
    left: "1rem",
  },
])
export const swiperButtonNext = style([
  swiperButton,
  {
    right: "1rem",
  },
])

export const swiperPagination = style({
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  paddingTop: vars.space.lg,
})

globalStyle('.swiper-pagination', {
  bottom: "20px !important",
})

globalStyle(`${swiperPagination} .swiper-pagination-bullet`, {
  backgroundColor: vars.colors.gray[300],
  opacity: 1,
  width: "8px",
  height: "8px",
  transition: `all ${vars.transitions.fast}`,
})

globalStyle(`${swiperPagination} .swiper-pagination-bullet-active`, {
  backgroundColor: vars.colors.primary,
  width: "24px",
  borderRadius: vars.radii.full,
})

globalStyle('.swiper-button-prev::after, .swiper-button-next::after', {
  display: 'none',
})

globalStyle('.swiper-pagination-bullet', {
  backgroundColor: `${vars.colors.gray[300]} !important`,
  opacity: "1 !important",
  width: "8px !important",
  height: "8px !important",
  transition: `all ${vars.transitions.fast} !important`,
})

globalStyle('.swiper-pagination-bullet-active', {
  backgroundColor: `${vars.colors.primary} !important`,
  width: "24px !important",
  borderRadius: `${vars.radii.full} !important`,
})
