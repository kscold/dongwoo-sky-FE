import { style, keyframes, globalStyle } from "@vanilla-extract/css";

import { vars } from "../common/theme.css";

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
});

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
});

export const uploaderContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
});

// admin-home 스타일과 호환되는 스타일들
export const label = style({
  display: "block",
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  color: vars.colors.text,
  marginBottom: vars.space.xs,
});

export const imageUploadContainer = style({
  border: `2px dashed ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  padding: vars.space.lg,
  textAlign: "center",
  transition: "border-color 0.2s ease, background-color 0.2s ease",
  background: vars.colors.background,
  ":hover": {
    borderColor: vars.colors.primary,
    background: vars.colors.backgroundLight,
  },
});

export const hiddenInput = style({
  display: "none",
});

export const uploadButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.secondary,
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",
  fontSize: vars.fontSizes.sm,
  fontWeight: "500",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },

  ":disabled": {
    backgroundColor: vars.colors.disabled,
    cursor: "not-allowed",
  },
});

export const imageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: vars.space.md,
  marginTop: vars.space.md,
});

export const imageItem = style({
  position: "relative",
  borderRadius: vars.radii.md,
  overflow: "hidden",
  border: `1px solid ${vars.colors.border}`,
  transition: "box-shadow 0.2s ease",
  ":hover": {
    boxShadow: vars.shadows.md,
  },
});

export const previewImage = style({
  width: "100%",
  height: "140px",
  objectFit: "cover",
});

export const deleteButton = style({
  position: "absolute",
  top: "6px",
  right: "6px",
  background: "rgba(239, 68, 68, 0.9)",
  color: "white",
  border: "none",
  borderRadius: vars.radii.sm,
  width: "24px",
  height: "24px",
  cursor: "pointer",
  fontSize: vars.fontSizes.xs,
  fontWeight: "500",
  transition: "background-color 0.2s ease",
  ":hover": {
    background: vars.colors.danger,
  },
});

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
});

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
});

// 드롭존 호버 상태
globalStyle(`${dropzone}:hover`, {
  borderColor: vars.colors.primary,
  backgroundColor: vars.colors.primaryLight,
  transform: "translateY(-2px)",
  boxShadow: `0 10px 25px -5px rgba(14, 77, 164, 0.1), 0 8px 10px -6px rgba(14, 77, 164, 0.1)`,
});

globalStyle(`${dropzone}:hover:before`, {
  opacity: 1,
});

export const dragActive = style({
  borderColor: vars.colors.secondary,
  backgroundColor: vars.colors.primaryLight,
  transform: "scale(1.02)",
  boxShadow: `0 20px 25px -5px rgba(0, 194, 184, 0.1), 0 8px 10px -6px rgba(0, 194, 184, 0.1)`,
  animation: `${pulseAnimation} 2s infinite`,
});

export const disabled = style({
  cursor: "not-allowed",
  opacity: 0.5,
  backgroundColor: vars.colors.gray[50],
  borderColor: vars.colors.gray[200],
  backgroundImage: "none",
});

// 비활성화 상태 스타일
globalStyle(`${disabled}:hover`, {
  borderColor: vars.colors.gray[200],
  backgroundColor: vars.colors.gray[50],
  transform: "none",
  boxShadow: "none",
});

globalStyle(`${disabled}:before`, {
  display: "none",
});

export const dropzoneContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.lg,
  padding: vars.space.md,
  position: "relative",
  zIndex: 1,
});

export const uploadIcon = style({
  fontSize: "64px",
  marginBottom: vars.space.sm,
  transition: "all 0.3s ease",
  filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
});

globalStyle(`${uploadIcon}:hover`, {
  transform: "scale(1.1) rotate(5deg)",
});

export const uploadText = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.sm,
});

export const primaryText = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.text,
  marginBottom: vars.space.xs,
  background: `linear-gradient(135deg, ${vars.colors.text} 0%, ${vars.colors.primary} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

export const secondaryText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  textAlign: "center",
  lineHeight: vars.lineHeights.relaxed,
  maxWidth: "300px",
});

export const dragText = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.secondary,
  animation: `${bounceAnimation} 1s infinite`,
  textShadow: `0 2px 4px rgba(0, 194, 184, 0.3)`,
});

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
});

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
});

// 브라우즈 버튼 호버 상태
globalStyle(`${browseButton}:hover`, {
  backgroundColor: vars.colors.primaryDark,
  transform: "translateY(-2px)",
  boxShadow: `0 8px 25px 0 rgba(14, 77, 164, 0.35)`,
});

globalStyle(`${browseButton}:hover:before`, {
  left: "100%",
});

globalStyle(`${browseButton}:active`, {
  transform: "translateY(0)",
  boxShadow: `0 2px 10px 0 rgba(14, 77, 164, 0.3)`,
});

globalStyle(`${browseButton}:disabled`, {
  backgroundColor: vars.colors.gray[300],
  cursor: "not-allowed",
  transform: "none",
  boxShadow: "none",
});

export const previewSection = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.colors.border}`,
});

export const previewTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.text,
  marginBottom: vars.space.md,
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
});

export const previewContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: vars.space.md,
});

export const previewItem = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  padding: vars.space.sm,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
  transition: "all 0.2s ease",

  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: vars.shadows.md,
  },
});

export const imageContainer = style({
  position: "relative",
  borderRadius: vars.radii.md,
  overflow: "hidden",
  aspectRatio: "1",
  backgroundColor: vars.colors.gray[50],
});

export const removeButton = style({
  position: "absolute",
  top: "4px",
  right: "4px",
  width: "20px",
  height: "20px",
  backgroundColor: "rgba(239, 68, 68, 0.9)",
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  cursor: "pointer",
  fontSize: vars.fontSizes.xs,
  fontWeight: vars.fontWeights.bold,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.danger,
    transform: "scale(1.1)",
  },
});

export const fileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
  padding: vars.space.xs,
});

export const fileName = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.text,
  fontWeight: vars.fontWeights.medium,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textAlign: "center",
});

export const fileStatus = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
  textAlign: "center",
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.background,
  borderRadius: vars.radii.sm,
  fontWeight: vars.fontWeights.medium,
});

// 이미지 로드 실패 시 표시되는 스타일
globalStyle(`${previewImage}:hover`, {
  transform: "scale(1.05)",
  transition: "transform 0.2s ease",
});
