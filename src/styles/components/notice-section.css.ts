import { keyframes, style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

const pulse = keyframes({
  "0%, 80%, 100%": {
    transform: "scale(0)",
  },
  "40%": {
    transform: "scale(1.0)",
  },
})

// 기본 컨테이너
export const container = style({
  maxWidth: "800px",
  margin: "0 auto",
  padding: vars.space.lg,
})

// 헤더 스타일
export const header = style({
  textAlign: "center",
  marginBottom: vars.space.xl,
})

export const title = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
})

export const meta = style({
  display: "flex",
  justifyContent: "center",
  gap: vars.space.md,
  color: vars.colors.textLight,
  fontSize: vars.fontSizes.sm,
})

// 내용 스타일
export const content = style({
  lineHeight: 1.8,
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  marginBottom: vars.space.xl,
})

// 첨부파일 스타일
export const attachmentSection = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.md,
})

export const attachmentTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  marginBottom: vars.space.md,
  color: vars.colors.textStrong,
})

export const attachmentList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
})

export const attachmentItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space.md,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.sm,
  border: `1px solid ${vars.colors.border}`,
})

// 버튼 스타일
export const backButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.sm,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  textDecoration: "none",
  borderRadius: vars.radii.md,
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

// 상태 스타일
export const loading = style({
  textAlign: "center",
  padding: vars.space.xl,
  color: vars.colors.textLight,
})

export const error = style({
  textAlign: "center",
  padding: vars.space.xl,
  color: "#dc2626",
  backgroundColor: "#fef2f2",
  borderRadius: vars.radii.md,
  border: "1px solid #fecaca",
})

export const noticeCard = style({
  padding: vars.space.lg,
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.border}`,
  textDecoration: "none",
  color: "inherit",
  transition: "transform 0.2s, box-shadow 0.2s",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
})

export const empty = style({
  textAlign: "center",
  padding: vars.space.xxl,
  color: vars.colors.textLight,
})

export const noticeSection = style({
  paddingTop: vars.space.xxxl,
  paddingBottom: vars.space.xxxxl,
  backgroundColor: vars.colors.backgroundLight,
})

export const noticeContainer = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${vars.space.lg}`,

  "@media": {
    "(max-width: 768px)": {
      padding: `0 ${vars.space.md}`,
    },
  },
})

export const noticeSectionHeader = style({
  textAlign: "center",
  marginBottom: vars.space.xxxl,
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,

  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxl,
    },
  },
})

export const sectionSubtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
})

export const noticeGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: vars.space.xl,
  marginBottom: vars.space.xl,

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: vars.space.lg,
    },
  },
})

export const noticeCardFeatured = style({
  border: `2px solid ${vars.colors.secondary}`,
  background: `linear-gradient(135deg, ${vars.colors.white} 0%, #f8fffe 100%)`,
})

export const noticeCardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.md,
})

export const noticeBadge = style({
  backgroundColor: vars.colors.secondary,
  color: vars.colors.white,
  padding: "0.25rem 0.75rem",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
})

export const noticeDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.primary,
  marginBottom: vars.space.sm,
  lineHeight: "1.3",
})

export const noticeExcerpt = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  marginBottom: vars.space.md,
})

export const noticeCardFooter = style({
  display: "flex",
  justifyContent: "flex-end",
})

export const readMoreText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.primary,
  fontWeight: vars.fontWeights.medium,
})

export const noticeLoadingContainer = style({
  textAlign: "center",
  padding: vars.space.xxxl,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.md,
})

export const noticeLoadingSpinner = style({
  display: "flex",
  justifyContent: "center",
  gap: "4px",
})

export const noticeLoadingSpinnerDot = style({
  width: "8px",
  height: "8px",
  backgroundColor: vars.colors.secondary,
  borderRadius: "50%",
  animation: `${pulse} 1.4s ease-in-out infinite both`,

  selectors: {
    "&:nth-child(1)": {
      animationDelay: "-0.32s",
    },
    "&:nth-child(2)": {
      animationDelay: "-0.16s",
    },
    "&:nth-child(3)": {
      animationDelay: "0s",
    },
  },
})

export const noticeErrorContainer = style({
  textAlign: "center",
  padding: vars.space.xxxl,
  backgroundColor: "#fef2f2",
  borderRadius: vars.radii.lg,
  border: "1px solid #fecaca",
})

export const noticeErrorIcon = style({
  fontSize: "2rem",
  marginBottom: vars.space.md,
})

export const noticeErrorSubtext = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginTop: vars.space.sm,
})

export const noticeEmptyContainer = style({
  textAlign: "center",
  padding: vars.space.xxxl,
  backgroundColor: "#f9fafb",
  borderRadius: vars.radii.lg,
  border: "2px dashed #d1d5db",
})

export const noticeEmptyIcon = style({
  fontSize: "2rem",
  marginBottom: vars.space.md,
})

export const noticeEmptySubtext = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
  marginTop: vars.space.sm,
})

export const noticeViewMore = style({
  textAlign: "center",
  marginTop: vars.space.xl,
})

export const viewMoreButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.xl}`,
  borderRadius: vars.radii.md,
  textDecoration: "none",
  fontWeight: vars.fontWeights.medium,
  transition: "all 0.3s ease",
  display: "inline-block",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
    transform: "translateY(-2px)",
  },
})

export const noticeEmptyMessage = style({
  textAlign: "center",
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  paddingTop: vars.space.xl,
  paddingBottom: vars.space.xl,
})

// 기존 스타일들 유지를 위한 레거시 스타일
export const noticeList = style({
  listStyle: "none",
  padding: 0,
  maxWidth: vars.breakpoints.md,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const noticeItem = style({
  backgroundColor: vars.colors.white,
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xl,
  paddingRight: vars.space.xl,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  selectors: {
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: vars.shadows.lg,
    },
  },
})

export const noticeLink = style({
  textDecoration: "none",
  color: "inherit",
  display: "block",
})

// 공지사항 상세 페이지 추가 스타일들
export const noticeHeader = style({
  marginBottom: vars.space.lg,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const noticeDetail = style({
  backgroundColor: vars.colors.white,
  padding: vars.space.xl,
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.colors.border}`,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
})

export const detailTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
  lineHeight: "1.3",
})

export const detailInfo = style({
  marginBottom: vars.space.lg,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const detailDate = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const detailContent = style({
  fontSize: vars.fontSizes.md,
  lineHeight: "1.8",
  color: vars.colors.text,
  marginBottom: vars.space.xl,
  whiteSpace: "pre-wrap",
})

export const detailAttachments = style({
  marginTop: vars.space.xl,
  padding: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  borderRadius: vars.radii.lg,
})

export const attachmentsTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.textStrong,
  marginBottom: vars.space.md,
})

export const attachmentsList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
})

export const imageAttachment = style({
  textAlign: "center",
  marginBottom: vars.space.md,
})

export const attachmentImage = style({
  maxWidth: "100%",
  height: "auto",
  borderRadius: vars.radii.md,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
})

export const attachmentLink = style({
  color: vars.colors.primary,
  textDecoration: "none",
  fontSize: vars.fontSizes.sm,
  ":hover": {
    textDecoration: "underline",
  },
})

export const retryButton = style({
  marginTop: vars.space.md,
  padding: `${vars.space.sm} ${vars.space.lg}`,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
})

export const noticeInfo = style({
  marginBottom: vars.space.sm,
  fontSize: vars.fontSizes.sm,
  color: vars.colors.textLight,
})

export const noticeContent = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.text,
  lineHeight: "1.6",
  marginBottom: vars.space.sm,
})

export const attachmentInfo = style({
  fontSize: vars.fontSizes.xs,
  color: vars.colors.primary,
  backgroundColor: vars.colors.accent,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radii.sm,
  display: "inline-block",
})

export const emptyState = style({
  padding: vars.space.xxl,
  textAlign: "center",
  color: vars.colors.textLight,
})
