import { style, keyframes } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

// 애니메이션 정의
const fadeInUp = keyframes({
    "0%": {
        opacity: 0,
        transform: "translateY(30px)",
    },
    "100%": {
        opacity: 1,
        transform: "translateY(0)",
    },
})

const slideInRight = keyframes({
    "0%": {
        opacity: 0,
        transform: "translateX(50px)",
    },
    "100%": {
        opacity: 1,
        transform: "translateX(0)",
    },
})

const pulse = keyframes({
    "0%, 100%": {
        transform: "scale(1)",
    },
    "50%": {
        transform: "scale(1.05)",
    },
})

const spin = keyframes({
    "0%": {
        transform: "rotate(0deg)",
    },
    "100%": {
        transform: "rotate(360deg)",
    },
})

// 컨테이너 및 레이아웃
export const container = style({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: `0 ${vars.space.lg}`,
    minHeight: "100vh",
})

export const heroSection = style({
    textAlign: "center",
    padding: `${vars.space.xl} 0`,
    marginBottom: vars.space.lg,
    "@media": {
        "screen and (max-width: 768px)": {
            padding: `${vars.space.lg} 0`,
            marginBottom: vars.space.md,
        },
    },
})

export const heroContent = style({
    maxWidth: "800px",
    margin: "0 auto",
    animation: `${fadeInUp} 0.8s ease-out`,
})

export const mainTitle = style({
    fontSize: "3.5rem",
    fontWeight: "800",
    background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.secondary} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: vars.space.lg,
    lineHeight: 1.2,
    "@media": {
        "screen and (max-width: 768px)": {
            fontSize: "2rem",
            marginBottom: vars.space.md,
        },
    },
})

export const mainSubtitle = style({
    fontSize: "1.25rem",
    color: vars.colors.textLight,
    lineHeight: 1.6,
    marginBottom: vars.space.xl,
    "@media": {
        "screen and (max-width: 768px)": {
            fontSize: "1rem",
            marginBottom: vars.space.lg,
        },
    },
})

export const discountBanner = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.space.md,
    background: `linear-gradient(135deg, ${vars.colors.primaryLight} 0%, ${vars.colors.primaryLight} 100%)`,
    padding: `${vars.space.lg} ${vars.space.xl}`,
    borderRadius: vars.radii.xl,
    border: `2px solid ${vars.colors.primary}`,
    animation: `${pulse} 3s ease-in-out infinite`,
    "@media": {
        "screen and (max-width: 768px)": {
            flexDirection: "column",
            gap: vars.space.sm,
            padding: vars.space.lg,
            textAlign: "center",
        },
    },
})

export const discountIcon = style({
    fontSize: "2rem",
})

export const discountText = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: vars.space.xs,
})

export const discountText_strong = style({
    fontSize: "1.125rem",
    fontWeight: "700",
    color: vars.colors.primary,
})

export const discountText_span = style({
    fontSize: "0.875rem",
    color: vars.colors.textLight,
})

// 섹션 스타일
export const sectionWrapper = style({
    marginBottom: vars.space.xxl,
    animation: `${fadeInUp} 0.6s ease-out`,
    "@media": {
        "screen and (max-width: 768px)": {
            marginBottom: vars.space.lg,
        },
    },
})

export const sectionHeader = style({
    textAlign: "center",
    marginBottom: vars.space.xl,
    "@media": {
        "screen and (max-width: 768px)": {
            marginBottom: vars.space.lg,
        },
    },
})

export const sectionTitle = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.space.md,
    fontSize: "2rem",
    fontWeight: "700",
    color: vars.colors.text,
    marginBottom: vars.space.sm,
    "@media": {
        "screen and (max-width: 768px)": {
            fontSize: "1.5rem",
            gap: vars.space.sm,
        },
    },
})

export const stepNumber = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "700",
    "@media": {
        "screen and (max-width: 768px)": {
            width: "32px",
            height: "32px",
            fontSize: "1rem",
        },
    },
})

export const sectionDescription = style({
    fontSize: "1rem",
    color: vars.colors.textLight,
})

// 장비 선택기
export const equipmentSelector = style({
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: vars.space.md,
    marginBottom: vars.space.lg,
})

export const scrollButton = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "white",
    boxShadow: vars.shadows.md,
    cursor: "pointer",
    fontSize: "1.5rem",
    color: vars.colors.primary,
    transition: "all 0.2s ease",
    zIndex: 2,
    ":hover": {
        transform: "scale(1.1)",
        boxShadow: vars.shadows.lg,
    },
})

export const equipmentScrollContainer = style({
    flex: 1,
    overflow: "hidden",
    borderRadius: vars.radii.lg,
})

export const equipmentList = style({
    display: "flex",
    gap: vars.space.lg,
    overflowX: "auto",
    padding: vars.space.md,
    scrollBehavior: "smooth",
    "::-webkit-scrollbar": {
        display: "none",
    },
    scrollbarWidth: "none",
})

export const equipmentCard = style({
    flexShrink: 0,
    width: "200px",
    background: "white",
    borderRadius: vars.radii.lg,
    padding: vars.space.lg,
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "2px solid transparent",
    boxShadow: vars.shadows.sm,
    ":hover": {
        transform: "translateY(-5px)",
        boxShadow: vars.shadows.lg,
        borderColor: vars.colors.primaryLight,
    },
    "@media": {
        "screen and (max-width: 768px)": {
            width: "160px",
            padding: vars.space.md,
        },
    },
})

export const equipmentCardActive = style({
    borderColor: vars.colors.primary,
    background: `linear-gradient(135deg, ${vars.colors.primaryLight} 0%, white 100%)`,
    transform: "translateY(-5px)",
    boxShadow: vars.shadows.lg,
})

export const equipmentImageWrapper = style({
    width: "100%",
    height: "120px",
    borderRadius: vars.radii.md,
    overflow: "hidden",
    marginBottom: vars.space.md,
    backgroundColor: vars.colors.gray[100],
    "@media": {
        "screen and (max-width: 768px)": {
            height: "100px",
            marginBottom: vars.space.sm,
        },
    },
})

export const equipmentImage = style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
})

export const equipmentImagePlaceholder = style({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: vars.colors.textLight,
})

export const equipmentInfo = style({
    textAlign: "center",
})

export const equipmentName = style({
    fontSize: "1rem",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: vars.space.xs,
    lineHeight: 1.4,
})

export const equipmentPrice = style({
    fontSize: "0.875rem",
    fontWeight: "500",
    color: vars.colors.primary,
})

// 스크롤 인디케이터
export const scrollIndicator = style({
    display: "flex",
    justifyContent: "center",
    gap: vars.space.xs,
})

export const indicatorDot = style({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: vars.colors.gray[300],
    transition: "all 0.2s ease",
})

export const indicatorDotActive = style({
    backgroundColor: vars.colors.primary,
    transform: "scale(1.2)",
})

// 시간 선택기
export const timeSelector = style({
    maxWidth: "600px",
    margin: "0 auto",
    background: "white",
    padding: vars.space.xl,
    borderRadius: vars.radii.xl,
    boxShadow: vars.shadows.md,
    "@media": {
        "screen and (max-width: 768px)": {
            padding: vars.space.lg,
            margin: `0 ${vars.space.md}`,
        },
    },
})

export const timeDisplay = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: vars.space.lg,
})

export const timeLabel = style({
    fontSize: "1rem",
    color: vars.colors.text,
    fontWeight: "500",
})

export const timeValue = style({
    fontSize: "1.5rem",
    fontWeight: "700",
    color: vars.colors.primary,
})

export const timeSlider = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.sm,
})

export const slider = style({
    width: "100%",
    height: "8px",
    borderRadius: "4px",
    background: vars.colors.gray[200],
    outline: "none",
    "::-webkit-slider-thumb": {
        appearance: "none",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
        cursor: "pointer",
        boxShadow: vars.shadows.md,
    },
})

export const sliderLabels = style({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.875rem",
    color: vars.colors.textLight,
})

// 결과 섹션
export const resultSection = style({
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: vars.space.xl,
    "@media": {
        "screen and (max-width: 768px)": {
            gridTemplateColumns: "1fr",
            gap: vars.space.lg,
        },
    },
})

export const priceCard = style({
    background: "white",
    borderRadius: vars.radii.xl,
    padding: vars.space.xl,
    boxShadow: vars.shadows.lg,
    border: `1px solid ${vars.colors.border}`,
    animation: `${slideInRight} 0.6s ease-out`,
    "@media": {
        "screen and (max-width: 768px)": {
            padding: vars.space.lg,
        },
    },
})

export const priceHeader = style({
    marginBottom: vars.space.lg,
})

export const priceTitle = style({
    fontSize: "1.5rem",
    fontWeight: "700",
    color: vars.colors.text,
    marginBottom: vars.space.lg,
    textAlign: "center",
})

export const priceComparison = style({
    display: "flex",
    justifyContent: "space-between",
    gap: vars.space.lg,
    "@media": {
        "screen and (max-width: 768px)": {
            flexDirection: "column",
        },
    },
})

export const originalPrice = style({
    textAlign: "center",
    padding: vars.space.lg,
    borderRadius: vars.radii.lg,
    backgroundColor: vars.colors.gray[50],
    border: `1px solid ${vars.colors.gray[200]}`,
})

export const originalPriceLabel = style({
    display: "block",
    fontSize: "0.875rem",
    color: vars.colors.textLight,
    marginBottom: vars.space.xs,
})

export const originalPriceValue = style({
    display: "block",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: vars.colors.text,
    textDecoration: "line-through",
})

export const discountPrice = style({
    textAlign: "center",
    padding: vars.space.lg,
    borderRadius: vars.radii.lg,
    background: `linear-gradient(135deg, ${vars.colors.primaryLight} 0%, ${vars.colors.primaryLight} 100%)`,
    border: `2px solid ${vars.colors.primary}`,
    position: "relative",
})

export const discountPriceLabel = style({
    display: "block",
    fontSize: "0.875rem",
    color: vars.colors.primary,
    fontWeight: "600",
    marginBottom: vars.space.xs,
})

export const discountPriceValue = style({
    display: "block",
    fontSize: "2rem",
    fontWeight: "800",
    color: vars.colors.primary,
})

export const savings = style({
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: vars.colors.secondary,
    marginTop: vars.space.xs,
})

export const priceBreakdown = style({
    marginBottom: vars.space.lg,
    padding: vars.space.lg,
    backgroundColor: vars.colors.gray[50],
    borderRadius: vars.radii.lg,
})

export const breakdownItem = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${vars.space.sm} 0`,
    borderBottom: `1px solid ${vars.colors.gray[200]}`,
    fontSize: "0.875rem",
    ":last-child": {
        borderBottom: "none",
    },
})

export const priceNote = style({
    display: "flex",
    gap: vars.space.md,
    padding: vars.space.lg,
    backgroundColor: vars.colors.gray[50],
    borderRadius: vars.radii.lg,
    marginBottom: vars.space.lg,
})

export const noteIcon = style({
    fontSize: "1.25rem",
})

export const noteText = style({
    fontSize: "0.875rem",
    color: vars.colors.textLight,
    lineHeight: 1.5,
})

export const ctaSection = style({
    textAlign: "center",
})

export const ctaButton = style({
    width: "100%",
    padding: `${vars.space.lg} ${vars.space.xl}`,
    background: `linear-gradient(135deg, ${vars.colors.primary} 0%, ${vars.colors.primaryDark} 100%)`,
    color: "white",
    border: "none",
    borderRadius: vars.radii.lg,
    fontSize: "1.125rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginBottom: vars.space.md,
    ":hover": {
        transform: "translateY(-2px)",
        boxShadow: vars.shadows.lg,
    },
})

export const ctaSubtext = style({
    fontSize: "0.875rem",
    color: vars.colors.textLight,
    margin: 0,
})

// 장비 상세 정보 카드
export const equipmentDetailCard = style({
    background: "white",
    borderRadius: vars.radii.xl,
    padding: vars.space.xl,
    boxShadow: vars.shadows.md,
    border: `1px solid ${vars.colors.border}`,
})

export const detailTitle = style({
    fontSize: "1.25rem",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: vars.space.lg,
    textAlign: "center",
})

export const detailContent = style({
    display: "flex",
    flexDirection: "column",
    gap: vars.space.lg,
})

export const detailImageWrapper = style({
    width: "100%",
    height: "200px",
    borderRadius: vars.radii.lg,
    overflow: "hidden",
    backgroundColor: vars.colors.gray[100],
})

export const detailImage = style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
})

export const detailImagePlaceholder = style({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    color: vars.colors.textLight,
})

export const detailInfo = style({
    textAlign: "center",
})

export const detailName = style({
    fontSize: "1.25rem",
    fontWeight: "600",
    color: vars.colors.text,
    marginBottom: vars.space.md,
})

export const detailDescription = style({
    fontSize: "0.875rem",
    color: vars.colors.textLight,
    lineHeight: 1.6,
    marginBottom: vars.space.lg,
})

export const detailSpecs = style({
    textAlign: "left",
    padding: vars.space.lg,
    backgroundColor: vars.colors.gray[50],
    borderRadius: vars.radii.lg,
})

// 로딩 상태
export const loadingState = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
    gap: vars.space.lg,
})

export const spinner = style({
    width: "40px",
    height: "40px",
    border: `4px solid ${vars.colors.gray[200]}`,
    borderTop: `4px solid ${vars.colors.primary}`,
    borderRadius: "50%",
    animation: `${spin} 1s linear infinite`,
}) 