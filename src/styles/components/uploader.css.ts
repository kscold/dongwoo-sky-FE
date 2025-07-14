import { style, keyframes, globalStyle } from "@vanilla-extract/css"

import { vars } from "../common/theme.css"

const bounceAnimation = keyframes({
  "0%, 20%, 50%, 80%, 100%": {
    transform: "translateY(0)",
  },
  "40%": {
    transform: "translateY(-5px)",
  },
  "60%": {
    transform: "translateY(-3px)",
  },
})

const pulseAnimation = keyframes({
  "0%": {
    boxShadow: `0 0 0 0 ${vars.colors.primaryTransparent}`,
  },
  "70%": {
    boxShadow: `0 0 0 20px rgba(14, 77, 164, 0)`,
  },
  "100%": {
    boxShadow: `0 0 0 0 rgba(14, 77, 164, 0)`,
  },
})

export const uploaderContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const dropzone = style({
  border: `2px dashed ${vars.colors.border}`,
  borderRadius: vars.radii.xl,
  padding: `${vars.space.xxl} ${vars.space.xl}`,
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  backgroundColor: vars.colors.background,
  position: "relative",
  overflow: "hidden",
})

// 드롭존 호버 전 상태
globalStyle(`${dropzone}:before`, {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(135deg, ${vars.colors.primaryTransparent} 0%, transparent 100%)`,
  opacity: 0,
  transition: "opacity 0.3s ease",
})

// 드롭존 호버 상태
globalStyle(`${dropzone}:hover`, {
  borderColor: vars.colors.primary,
  backgroundColor: vars.colors.primaryLight,
  transform: "translateY(-2px)",
  boxShadow: `0 10px 25px -5px rgba(14, 77, 164, 0.1), 0 8px 10px -6px rgba(14, 77, 164, 0.1)`,
})

globalStyle(`${dropzone}:hover:before`, {
  opacity: 1,
})

export const dragActive = style({
  borderColor: vars.colors.secondary,
  backgroundColor: vars.colors.primaryLight,
  transform: "scale(1.02)",
  boxShadow: `0 20px 25px -5px rgba(0, 194, 184, 0.1), 0 8px 10px -6px rgba(0, 194, 184, 0.1)`,
  animation: `${pulseAnimation} 2s infinite`,
})

export const disabled = style({
  cursor: "not-allowed",
  opacity: 0.5,
  backgroundColor: vars.colors.gray[50],
  borderColor: vars.colors.gray[200],
  backgroundImage: "none",
})

// 비활성화 상태 스타일
globalStyle(`${disabled}:hover`, {
  borderColor: vars.colors.gray[200],
  backgroundColor: vars.colors.gray[50],
  transform: "none",
  boxShadow: "none",
})

globalStyle(`${disabled}:before`, {
  display: "none",
})

export const dropzoneContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.lg,
  padding: vars.space.md,
  position: "relative",
  zIndex: 1,
})

export const uploadIcon = style({
  fontSize: "64px",
  marginBottom: vars.space.sm,
  transition: "all 0.3s ease",
  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
})

globalStyle(`${uploadIcon}:hover`, {
  transform: "scale(1.1) rotate(5deg)",
})

export const uploadText = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.sm,
})

export const primaryText = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text,
  marginBottom: vars.space.xs,
  background: `linear-gradient(135deg, ${vars.colors.text} 0%, ${vars.colors.primary} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
})

export const secondaryText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  textAlign: "center",
  lineHeight: vars.lineHeights.relaxed,
  maxWidth: "300px",
})

export const dragText = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.secondary,
  animation: `${bounceAnimation} 1s infinite`,
  textShadow: `0 2px 4px rgba(0, 194, 184, 0.3)`,
})

export const browseButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.full,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.semibold,
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  marginTop: vars.space.md,
  boxShadow: `0 4px 14px 0 rgba(14, 77, 164, 0.25)`,
  position: "relative",
  overflow: "hidden",
})

// 브라우즈 버튼 전 효과
globalStyle(`${browseButton}:before`, {
  content: '""',
  position: "absolute",
  top: 0,
  left: "-100%",
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
  transition: "left 0.5s",
})

// 브라우즈 버튼 호버 상태
globalStyle(`${browseButton}:hover`, {
  backgroundColor: vars.colors.primaryDark,
  transform: "translateY(-2px)",
  boxShadow: `0 8px 25px 0 rgba(14, 77, 164, 0.35)`,
})

globalStyle(`${browseButton}:hover:before`, {
  left: "100%",
})

globalStyle(`${browseButton}:active`, {
  transform: "translateY(0)",
  boxShadow: `0 2px 10px 0 rgba(14, 77, 164, 0.3)`,
})

globalStyle(`${browseButton}:disabled`, {
  opacity: 0.6,
  cursor: "not-allowed",
})

globalStyle(`${browseButton}:disabled:hover`, {
  backgroundColor: vars.colors.primary,
  transform: "none",
  boxShadow: `0 4px 14px 0 rgba(14, 77, 164, 0.25)`,
})

globalStyle(`${browseButton}:disabled:before`, {
  display: "none",
})

export const previewSection = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.background,
  borderRadius: vars.radii.xl,
  border: `1px solid ${vars.colors.borderLight}`,
})

export const previewTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text,
  marginBottom: vars.space.lg,
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

globalStyle(`${previewTitle}:before`, {
  content: '"📋"',
  fontSize: vars.fontSizes.md,
})

export const previewContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: vars.space.lg,
})

export const previewItem = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.xl,
  padding: vars.space.lg,
  boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
  border: `1px solid ${vars.colors.borderLight}`,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
})

// 프리뷰 아이템 상단 바
globalStyle(`${previewItem}:before`, {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "3px",
  background: `linear-gradient(90deg, ${vars.colors.primary}, ${vars.colors.secondary})`,
})

// 프리뷰 아이템 호버 상태
globalStyle(`${previewItem}:hover`, {
  boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
  transform: "translateY(-4px)",
})

export const imageContainer = style({
  position: "relative",
  width: "100%",
  height: "140px",
  borderRadius: vars.radii.lg,
  overflow: "hidden",
  marginBottom: vars.space.md,
  backgroundColor: vars.colors.gray[50],
  boxShadow: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)`,
})

export const previewImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "all 0.3s ease",
})

globalStyle(`${previewImage}:hover`, {
  transform: "scale(1.05)",
})

export const removeButton = style({
  position: "absolute",
  top: vars.space.sm,
  right: vars.space.sm,
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  backgroundColor: "rgba(220, 38, 38, 0.9)",
  color: vars.colors.white,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: "bold",
  lineHeight: 1,
  transition: "all 0.3s ease",
  backdropFilter: "blur(8px)",
  boxShadow: `0 2px 8px rgba(220, 38, 38, 0.3)`,
})

globalStyle(`${removeButton}:hover`, {
  backgroundColor: "rgba(220, 38, 38, 1)",
  transform: "scale(1.1)",
  boxShadow: `0 4px 12px rgba(220, 38, 38, 0.4)`,
})

globalStyle(`${removeButton}:active`, {
  transform: "scale(0.95)",
})

globalStyle(`${removeButton}:disabled`, {
  opacity: 0.5,
  cursor: "not-allowed",
})

globalStyle(`${removeButton}:disabled:hover`, {
  backgroundColor: "rgba(220, 38, 38, 0.9)",
  transform: "none",
  boxShadow: `0 2px 8px rgba(220, 38, 38, 0.3)`,
})

export const fileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const fileName = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.text,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineHeight: vars.lineHeights.normal,
})

export const fileStatus = style({
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.primary,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: vars.radii.full,
  textAlign: "center",
  border: `1px solid ${vars.colors.primary}`,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
})
