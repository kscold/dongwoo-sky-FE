import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/common/theme.css";
import { sectionContainer } from "./layout.css";

// 작업자 프로필 섹션
export const operatorProfileSection = style([
  sectionContainer, // 공통 섹션 컴테이너 스타일 재활용
  {
    backgroundColor: vars.colors.white, // 프로필 섹션 배경은 흰색으로
    paddingTop: vars.space.xxxl,
    paddingBottom: vars.space.xxxl,
    borderRadius: vars.radii.xl, // 섹션 자체에 둥근 모서리 추가
    boxShadow: vars.shadows.xl, // 섹션에 큰 그림자 효과
  },
]);

export const profileCard = style({
  // 카드 형태가 아닌, 섹션 내부 컴텐츠 레이아웃용
  display: "grid",
  gap: vars.space.xxl,
  alignItems: "flex-start", // 상단 정렬
  "@media": {
    "(min-width: 768px)": {
      gridTemplateColumns: "300px 1fr", // 이미지 영역과 정보 영역 분리
    },
  },
});

export const profileImageContainer = style({
  width: "100%",
  maxWidth: "300px", // 이미지 최대 너비 (모바일에서는 중앙 정렬될 수 있도록)
  margin: "0 auto", // 모바일에서 중앙 정렬
  "@media": {
    "(min-width: 768px)": {
      margin: "0", // 데스크톱에서는 그리드 아이템이므로 auto 마진 제거
    },
  },
});

export const profileImagePlaceholder = style({
  width: "100%",
  paddingBottom: "100%", // 정사각형 비율 유지 (이미지 대신 사용)
  backgroundColor: vars.colors.gray[200],
  borderRadius: vars.radii.xl,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.colors.gray[300],
  fontSize: vars.fontSizes.xxl, // 아이콘 크기 키움
  fontWeight: vars.fontWeights.medium,
  boxShadow: vars.shadows.inner, // 안쪽 그림자
});

// 실제 이미지를 위한 스타일
export const profileImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: vars.radii.xl,
});

export const profileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
});

export const profileName = style({
  fontSize: vars.fontSizes.xxxxl,
  fontWeight: vars.fontWeights.extrabold,
  color: vars.colors.primary,
  lineHeight: vars.lineHeights.heading,
  textAlign: "center", // 모바일에서는 중앙
  "@media": {
    "(min-width: 768px)": {
      textAlign: "left", // 데스크톱에서는 좌측
    },
  },
});

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
});

export const profileSectionTitle = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.textStrong,
  borderBottom: `2px solid ${vars.colors.accent}`,
  paddingBottom: vars.space.sm,
  marginBottom: vars.space.md,
});

export const profileList = style({
  listStyle: "none",
  padding: 0,
  marginLeft: vars.space.md, // 약간의 들여쓰기
});

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
});

export const profileBio = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.text,
  lineHeight: vars.lineHeights.relaxed,
  whiteSpace: "pre-wrap", // 줄바꿈 유지
});
