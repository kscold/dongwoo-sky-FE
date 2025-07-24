import { style } from "@vanilla-extract/css"

import { vars } from "../../common/theme.css"

// 페이지 전체 래퍼 (contact.css.ts와 유사)
export const pageWrapper = style({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  paddingBottom: vars.space.xxxxl,
  fontFamily: vars.fonts.body,
})

export const container = style({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: `${vars.space.md} ${vars.space.lg} 0`,
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space.sm} ${vars.space.md} 0`,
    },
  },
})

// Hero 섹션 (contact.css.ts와 유사)
export const heroSection = style({
  textAlign: "center",
  marginBottom: vars.space.xxl,
  padding: `${vars.space.xxl} ${vars.space.xl}`,
  background: `
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
  `,
  borderRadius: "32px",
  border: "1px solid rgba(226, 232, 240, 0.6)",
  boxShadow:
    "0 20px 60px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
  },
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.xl,
      padding: `${vars.space.xl} ${vars.space.lg}`,
      borderRadius: "24px",
    },
  },
})

export const heroTitle = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: "800",
  marginBottom: vars.space.lg,
  color: vars.colors.primary,
  position: "relative",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.xxxl,
    },
    "(max-width: 480px)": {
      fontSize: vars.fontSizes.xxl,
    },
  },
})

export const heroSubtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textLight,
  marginBottom: vars.space.lg,
  maxWidth: "600px",
  margin: `0 auto ${vars.space.lg} auto`,
  lineHeight: 1.6,
  fontWeight: "500",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSizes.md,
    },
  },
})

// 공통 섹션 컨테이너
export const sectionContainer = style({
  maxWidth: vars.breakpoints.lg, // 콘텐츠 최대 너비
  margin: `0 auto ${vars.space.xxxxl} auto`,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  "@media": {
    "(max-width: 768px)": {
      margin: `0 auto ${vars.space.xxxl} auto`,
    },
  },
})

// 장비 소개 섹션 (Swiper 컨테이너용)
export const equipmentSwiperSection = style({
  marginBottom: vars.space.xxxxl,
  "@media": {
    "(max-width: 768px)": {
      marginBottom: vars.space.xxxl,
    },
  },
})

// 기존 그리드 방식은 제거하고 Swiper로 대체

// 작업 가능 범위 섹션
export const capabilitiesList = style({
  listStyle: "none",
  padding: 0,
  display: "grid",
  gap: vars.space.md,
  marginBottom: vars.space.xxxxl,
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: vars.space.lg,
    },
    "(max-width: 768px)": {
      marginBottom: vars.space.xxxl,
    },
  },
})

export const capabilityItem = style({
  backgroundColor: vars.colors.white,
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xl,
  paddingRight: vars.space.xl,
  borderRadius: vars.radii.lg,
  boxShadow: vars.shadows.md,
  fontSize: vars.fontSizes.lg,
  color: vars.colors.textStrong,
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
})

export const capabilityIcon = style({
  width: vars.fontSizes.xl,
  height: vars.fontSizes.xl,
  color: vars.colors.primary,
  flexShrink: 0,
})

// --- 기존 작업팀 소개 섹션 스타일 제거 또는 주석 처리 ---
/*
export const teamGrid = style({...});
export const teamMemberCard = style({...});
export const teamMemberImagePlaceholder = style({...});
export const teamMemberName = style({...});
export const teamMemberRole = style({...});
export const teamMemberBio = style({...});
export const teamMemberExpertiseContainer = style({...});
export const teamMemberExpertiseList = style({...});
*/

// --- 새로운 작업자 프로필 섹션 스타일 ---
export const operatorProfileSection = style([
  sectionContainer, // 공통 섹션 컨테이너 스타일 재활용
  {
    backgroundColor: vars.colors.white, // 프로필 섹션 배경은 흰색으로
    paddingTop: vars.space.xxxxl,
    paddingBottom: vars.space.xxxxl,
    borderRadius: vars.radii.xl, // 섹션 자체에 둥근 모서리 추가
    boxShadow: vars.shadows.xl, // 섹션에 큰 그림자 효과
    marginTop: vars.space.xxxxl,
    marginBottom: vars.space.xxxxl,
    "@media": {
      "(max-width: 768px)": {
        paddingTop: vars.space.xxxl,
        paddingBottom: vars.space.xxxl,
        marginTop: vars.space.xxxl,
        marginBottom: vars.space.xxxl,
      },
    },
  },
])

export const profileCard = style({
  // 카드 형태가 아닌, 섹션 내부 컨텐츠 레이아웃용
  display: "grid",
  gap: vars.space.xxl,
  alignItems: "flex-start", // 상단 정렬
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "300px 1fr", // 이미지 영역과 정보 영역 분리
    },
  },
})

export const profileImageContainer = style({
  width: "100%",
  maxWidth: "250px", // 9:16 비율에 맞게 최대 너비 조정 (세로로 긴 직사각형)
  margin: "0 auto", // 모바일에서 중앙 정렬
  aspectRatio: "9/16", // 9:16 비율로 변경 (세로로 긴 직사각형)
  borderRadius: vars.radii.xl,
  overflow: "hidden", // 이미지가 컨테이너를 벗어나지 않도록
  "@media": {
    "(min-width: 768px)": {
      margin: "0", // 데스크탑에서는 그리드 아이템이므로 auto 마진 제거
    },
  },
})

export const profileImagePlaceholder = style({
  width: "100%",
  height: "100%", // 컨테이너의 전체 높이 사용
  backgroundColor: vars.colors.gray[200],
  borderRadius: vars.radii.xl,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.colors.gray[300],
  fontSize: vars.fontSizes.xxl, // 아이콘 크기 키움
  fontWeight: vars.fontWeights.medium,
  boxShadow: vars.shadows.inner, // 안쪽 그림자
})

// 실제 이미지를 위한 스타일
export const profileImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: vars.radii.xl,
})

export const profileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
})

export const profileName = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: vars.fontWeights.extrabold,
  color: vars.colors.black,
  lineHeight: vars.lineHeights.heading,
  textAlign: "center", // 모바일에서는 중앙
  "@media": {
    "(min-width: 768px)": {
      textAlign: "left", // 데스크탑에서는 좌측
    },
  },
})

export const profileRole = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.primary,
  textAlign: "center",
  marginBottom: vars.space.md,
  "@media": {
    "(min-width: 768px)": {
      textAlign: "left",
    },
  },
})

export const profileSectionTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  borderBottom: `2px solid ${vars.colors.accent}`,
  paddingBottom: vars.space.sm,
  marginBottom: vars.space.md,
})

export const profileList = style({
  listStyle: "none",
  padding: 0,
  marginLeft: vars.space.md, // 약간의 들여쓰기
})

export const profileListItem = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.text,
  paddingBottom: vars.space.sm,
  position: "relative",
  paddingLeft: vars.space.lg,
  selectors: {
    "&::before": {
      content: '"\u2713"',
      color: vars.colors.primary,
      position: "absolute",
      left: 0,
      fontWeight: vars.fontWeights.bold,
    },
  },
})

export const profileBio = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  whiteSpace: "pre-wrap", // 줄바꿈 유지
})

// 이용 요금 안내 버튼 (contact.css.ts의 submitButton과 유사하게)
export const pricingButtonContainer = style({
  textAlign: "center",
  marginTop: vars.space.xxxxl, // 위 섹션과의 간격
  paddingBottom: vars.space.xxxxl, // 페이지 하단 여백
  "@media": {
    "(max-width: 768px)": {
      marginTop: vars.space.xxxl,
      paddingBottom: vars.space.xxxl,
    },
  },
})

export const pricingButton = style({
  display: "inline-block",
  paddingTop: vars.space.lg,
  paddingBottom: vars.space.lg,
  paddingLeft: vars.space.xxxl,
  paddingRight: vars.space.xxxl,
  fontSize: vars.fontSizes.xl,
  fontWeight: "600",
  borderRadius: "16px",
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  textDecoration: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  border: "none",
  cursor: "pointer",
  outline: "none",
  selectors: {
    "&:hover:not(:disabled)": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    },
    "&:focus-visible": {
      boxShadow: `0 0 0 4px ${vars.colors.primaryTransparent}`,
    },
  },
  "@media": {
    "(min-width: 640px)": {
      padding: `${vars.space.xl} ${vars.space.xxxxl}`,
    },
  },
})

// 서비스 계약 프로세스
export const processSection = style({
  padding: `${vars.space.xxxl} 0`,
  backgroundColor: vars.colors.background,
})

export const processCard = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  padding: vars.space.xl,
  boxShadow: vars.shadows.lg,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space.md,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: vars.shadows.xl,
  },
})

export const processTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginTop: vars.space.sm,
})

export const processDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  flexGrow: 1,
})

export const processIcon = style({
  width: "40px",
  height: "40px",
  color: vars.colors.primary,
})

export const serviceProcessSection = style({
  paddingTop: vars.space.xxxxl,
  paddingBottom: vars.space.xxxxl,
  paddingLeft: vars.space.lg,
  paddingRight: vars.space.lg,
  backgroundColor: vars.colors.backgroundLight,
  marginTop: vars.space.xxxxl,
  marginBottom: vars.space.xxxxl,
  "@media": {
    "(max-width: 768px)": {
      paddingTop: vars.space.xxxl,
      paddingBottom: vars.space.xxxl,
      marginTop: vars.space.xxxl,
      marginBottom: vars.space.xxxl,
    },
  },
})

export const sectionTitle = style({
  fontSize: vars.fontSizes.xxxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  textAlign: "center",
  marginBottom: vars.space.xxxl,
  borderBottom: `2px solid ${vars.colors.accent}`,
  paddingBottom: vars.space.md,
})

export const processGrid = style({
  display: "grid",
  gap: vars.space.xl,
  gridTemplateColumns: "1fr",
  "@media": {
    "(max-width: 767px)": {
      display: "none", // 모바일에서는 숨김
    },
    "(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: vars.space.xxl,
    },
    "(min-width: 1024px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
})

// 모바일에서 슬라이더로 사용할 때의 스타일
export const processSlider = style({
  position: "relative",
  "@media": {
    "(max-width: 767px)": {
      display: "block",
    },
    "(min-width: 768px)": {
      display: "none",
    },
  },
})

export const processStep = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  padding: vars.space.xxl,
  boxShadow: vars.shadows.lg,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.md,
})

export const processStepIcon = style({
  width: "48px",
  height: "48px",
  color: vars.colors.primary,
  marginBottom: vars.space.sm,
})

export const processStepNumber = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.secondary,
  backgroundColor: vars.colors.primaryLight,
  borderRadius: vars.radii.full,
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginBottom: vars.space.md,
})

export const processStepTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  marginTop: vars.space.sm,
})

export const processStepDescription = style({
  fontSize: vars.fontSizes.md,
  color: vars.colors.textLight,
  lineHeight: vars.lineHeights.relaxed,
})
