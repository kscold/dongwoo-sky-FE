import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "@/styles/theme.css"

export const container = style({
  padding: vars.space.xl,
  maxWidth: "1200px",
  margin: "0 auto",
})

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const title = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  margin: 0,
})

export const actions = style({
  display: "flex",
  gap: vars.space.md,
})

export const createButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const backButton = style({
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: "transparent",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const tableContainer = style({
  overflowX: "auto",
})

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: vars.space.md,
  fontSize: vars.fontSizes.sm,
})

export const tableCell = style({
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
  textAlign: "left",
})

export const tableHeader = style({
  padding: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
  textAlign: "left",
  backgroundColor: vars.colors.backgroundLight,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
})

export const tableRow = style({
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

export const titleCell = style({
  fontWeight: vars.fontWeights.medium,
  maxWidth: "300px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
})

export const statusPublished = style({
  backgroundColor: vars.colors.success,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const statusDraft = style({
  backgroundColor: vars.colors.textLight,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const modalActive = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const modalInactive = style({
  backgroundColor: vars.colors.textLight,
  color: vars.colors.white,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  border: "none",
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const editButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.accent,
  color: vars.colors.primary,
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  textDecoration: "none",
  marginRight: vars.space.sm,
  display: "inline-block",
})

export const deleteButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  backgroundColor: vars.colors.gray[50],
  color: vars.colors.danger,
  border: `1px solid ${vars.colors.danger}`,
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.xs,
  cursor: "pointer",
})

export const loading = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
})

export const error = style({
  padding: vars.space.xl,
  backgroundColor: vars.colors.gray[50],
  color: vars.colors.danger,
  borderRadius: vars.radii.md,
})

export const empty = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
})

// 모달 애니메이션
const fadeInAnimation = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
})

const slideInUpAnimation = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(20px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
})

// 모달 스타일 - 애플 디자인 시스템 기반
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
  animation: `${fadeInAnimation} 0.2s ease-out`,
  padding: vars.space.lg,
  backdropFilter: "blur(8px)",
})

export const modalContent = style({
  backgroundColor: "#ffffff",
  borderRadius: "20px",
  maxWidth: "520px",
  width: "100%",
  maxHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  boxShadow:
    "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)",
  animation: `${slideInUpAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
  overflow: "hidden",
  border: "1px solid rgba(0, 0, 0, 0.06)",
})

export const responsiveModalContent = style({
  "@media": {
    "(max-width: 640px)": {
      maxWidth: "calc(100vw - 32px)",
      margin: vars.space.md,
      borderRadius: "16px",
    },
  },
})

export const modalHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 24px 0 24px",
  backgroundColor: "#ffffff",
})

export const modalHeaderContent = style({
  flex: 1,
  marginRight: vars.space.md,
})

export const modalBadge = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "6px 12px",
  backgroundColor: "#E6F2FF",
  borderRadius: "12px",
  fontSize: "13px",
  fontWeight: "600",
  color: "#0E4DA4",
  marginBottom: "12px",
  border: "1px solid rgba(14, 77, 164, 0.1)",
})

export const modalTitle = style({
  fontSize: "22px",
  fontWeight: "700",
  color: "#1D1D1F",
  margin: 0,
  lineHeight: "1.3",
  letterSpacing: "-0.022em",
})

export const modalDate = style({
  display: "none", // 날짜 숨김
})

export const closeButton = style({
  background: "#F5F5F7",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "#86868B",
  padding: "8px",
  borderRadius: "50%",
  transition: "all 0.2s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  ":hover": {
    backgroundColor: "#E8E8ED",
    color: "#1D1D1F",
  },
})
export const modalBody = style({
  padding: "24px",
  overflow: "auto",
  flex: 1,
  backgroundColor: "#ffffff",
})

export const noticeContent = style({
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#1D1D1F",
  whiteSpace: "pre-wrap",
  fontWeight: "400",
  letterSpacing: "-0.01em",
})

export const modalFooter = style({
  padding: "16px 24px 24px 24px",
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  backgroundColor: "#ffffff",
})

export const todayCloseButton = style({
  backgroundColor: "#F5F5F7",
  color: "#86868B",
  border: "none",
  borderRadius: "12px",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#E8E8ED",
    color: "#1D1D1F",
  },
})

export const confirmButton = style({
  backgroundColor: "#0E4DA4",
  color: "white",
  border: "none",
  borderRadius: "12px",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: "#0A3A7F",
  },
})

// 첨부파일 스타일 - 애플 디자인
export const attachmentsSection = style({
  marginTop: "20px",
  padding: "16px",
  backgroundColor: "#F5F5F7",
  borderRadius: "12px",
  border: "none",
})

export const attachmentsTitle = style({
  fontSize: "15px",
  fontWeight: "600",
  color: "#1D1D1F",
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
})

export const attachmentsList = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
})

export const attachmentItem = style({
  backgroundColor: "white",
  borderRadius: "8px",
  overflow: "hidden",
  border: "1px solid rgba(0, 0, 0, 0.06)",
  transition: "all 0.2s ease",
  ":hover": {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
})

export const imageAttachmentWrapper = style({
  display: "flex",
  alignItems: "center",
  padding: "12px",
  gap: "12px",
})

export const attachmentPreviewImage = style({
  width: "48px",
  height: "48px",
  objectFit: "cover",
  borderRadius: "8px",
  border: "1px solid rgba(0, 0, 0, 0.06)",
  backgroundColor: "#F5F5F7",
  display: "block",
})

export const attachmentInfo = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
})

export const attachmentName = style({
  fontSize: "14px",
  fontWeight: "500",
  color: "#1D1D1F",
  wordBreak: "break-word",
  lineHeight: "1.3",
})

export const downloadLink = style({
  display: "none", // 다운로드 링크 숨김
})

export const fileAttachmentLink = style({
  display: "flex",
  alignItems: "center",
  padding: "12px",
  gap: "12px",
  textDecoration: "none",
  color: "inherit",
  transition: "all 0.2s ease",
  cursor: "default",
  ":hover": {
    backgroundColor: "#F9F9F9",
  },
})

export const fileIcon = style({
  fontSize: "18px",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F5F5F7",
  borderRadius: "8px",
  border: "1px solid rgba(0, 0, 0, 0.06)",
  color: "#86868B",
})

export const attachmentSize = style({
  fontSize: "13px",
  color: "#86868B",
  fontWeight: "400",
})

export const downloadIcon = style({
  display: "none", // 다운로드 아이콘 숨김
})

// 폼 스타일
export const form = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: vars.space.xl,
})

export const formGroup = style({
  marginBottom: vars.space.lg,
})

export const label = style({
  display: "block",
  marginBottom: vars.space.sm,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.textStrong,
})

export const input = style({
  width: "100%",
  padding: vars.space.md,
  fontSize: vars.fontSizes.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const textarea = style({
  width: "100%",
  padding: vars.space.md,
  fontSize: vars.fontSizes.md,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  minHeight: "200px",
  resize: "vertical",
  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },
})

export const formRow = style({
  display: "flex",
  gap: vars.space.lg,
  "@media": {
    "(max-width: 640px)": {
      flexDirection: "column",
    },
  },
})

export const checkboxGroup = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
})

export const checkbox = style({
  width: "16px",
  height: "16px",
})

export const checkboxLabel = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
})

export const fileInput = style({
  width: "100%",
  padding: vars.space.md,
  fontSize: vars.fontSizes.sm,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
})

export const helpText = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.textLight,
  marginTop: vars.space.xs,
})

export const formActions = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "flex-end",
  marginTop: vars.space.xl,
})

export const submitButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const cancelButton = style({
  padding: `${vars.space.md} ${vars.space.xl}`,
  backgroundColor: "transparent",
  color: vars.colors.text,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.backgroundLight,
  },
})

// 공지사항 상세 페이지 스타일
export const noticeHeader = style({
  padding: vars.space.xl,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const noticeDetail = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: vars.space.xl,
})

export const detailTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
})

export const detailInfo = style({
  display: "flex",
  gap: vars.space.lg,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const detailDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const detailContent = style({
  fontSize: vars.fontSizes.md,
  lineHeight: vars.lineHeights.relaxed,
  color: vars.colors.text,
  marginTop: vars.space.xl,
  whiteSpace: "pre-wrap",
})

export const detailAttachments = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.md,
})

// 중복 제거됨 - 이미 위에 정의되어 있음

// 공지사항 목록 스타일
export const retryButton = style({
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.sm,
  fontSize: vars.fontSizes.sm,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const noticeList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
})

export const noticeItem = style({
  padding: vars.space.lg,
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: vars.radii.md,
  transition: "all 0.2s ease",
  ":hover": {
    borderColor: vars.colors.primary,
    boxShadow: `0 4px 12px ${vars.colors.shadow}`,
  },
})

export const noticeLink = style({
  textDecoration: "none",
  color: "inherit",
  display: "block",
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.sm,
})

export const noticeInfo = style({
  display: "flex",
  gap: vars.space.md,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

// 중복 제거됨 - 이미 위에 정의되어 있음

export const emptyState = style({
  textAlign: "center",
  padding: vars.space.xxl,
  color: vars.colors.textLight,
})

// 공지사항 상세 페이지용 추가 스타일
export const imageAttachment = style({
  position: "relative",
  marginBottom: vars.space.md,
})

export const attachmentImage = style({
  width: "100%",
  height: "auto",
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
})

export const attachmentLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.md}`,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.md,
  textDecoration: "none",
  color: vars.colors.primary,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  transition: "all 0.2s ease",
  ":hover": {
    backgroundColor: vars.colors.primary,
    color: vars.colors.white,
  },
})
