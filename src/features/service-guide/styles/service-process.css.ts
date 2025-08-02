import { style } from "@vanilla-extract/css"

import { vars } from "../../../styles/common/theme.css"

// // 서비스 계약 프로세스
// export const serviceProcessSection = style({
//   paddingTop: vars.space.xxxxl,
//   paddingBottom: vars.space.xxxxl,
//   paddingLeft: vars.space.lg,
//   paddingRight: vars.space.lg,
//   backgroundColor: vars.colors.backgroundLight,
//   marginTop: vars.space.xxxxl,
//   marginBottom: vars.space.xxxxl,
//   "@media": {
//     "(max-width: 768px)": {
//       paddingTop: vars.space.xxxl,
//       paddingBottom: vars.space.xxxl,
//       marginTop: vars.space.xxxl,
//       marginBottom: vars.space.xxxl,
//     },
//   },
// });

// export const sectionTitle = style({
//   fontSize: vars.fontSizes.xxxl,
//   fontWeight: vars.fontWeights.bold,
//   color: vars.colors.textStrong,
//   textAlign: "center",
//   marginBottom: vars.space.xxxl,
//   borderBottom: `2px solid ${vars.colors.accent}`,
//   paddingBottom: vars.space.md,
// });

// export const processSection = style({
//   padding: `${vars.space.xxxl} 0`,
//   backgroundColor: vars.colors.background,
// });

// export const processGrid = style({
//   display: "grid",
//   gap: vars.space.xl,
//   gridTemplateColumns: "1fr",
//   "@media": {
//     "(max-width: 767px)": {
//       display: "none", // 모바일에서는 숨김
//     },
//     "(min-width: 768px)": {
//       gridTemplateColumns: "repeat(2, 1fr)",
//       gap: vars.space.xxl,
//     },
//     "(min-width: 1024px)": {
//       gridTemplateColumns: "repeat(4, 1fr)",
//     },
//   },
// });

// // 모바일에서 슬라이더로 사용할 때의 스타일
// export const processSlider = style({
//   position: "relative",
//   "@media": {
//     "(max-width: 767px)": {
//       display: "block",
//     },
//     "(min-width: 768px)": {
//       display: "none",
//     },
//   },
// });

// export const processCard = style({
//   backgroundColor: vars.colors.white,
//   borderRadius: vars.radii.lg,
//   padding: vars.space.xl,
//   boxShadow: vars.shadows.lg,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   textAlign: "center",
//   gap: vars.space.md,
//   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//   ":hover": {
//     transform: "translateY(-5px)",
//     boxShadow: vars.shadows.xl,
//   },
// });

// export const processStep = style({
//   backgroundColor: vars.colors.white,
//   borderRadius: vars.radii.lg,
//   padding: vars.space.xxl,
//   boxShadow: vars.shadows.lg,
//   textAlign: "center",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   gap: vars.space.md,
// });

// export const processTitle = style({
//   fontSize: vars.fontSizes.lg,
//   fontWeight: vars.fontWeights.bold,
//   color: vars.colors.textStrong,
//   marginTop: vars.space.sm,
// });

// export const processDescription = style({
//   fontSize: vars.fontSizes.md,
//   color: vars.colors.text,
//   lineHeight: vars.lineHeights.relaxed,
//   flexGrow: 1,
// });

// export const processIcon = style({
//   width: "40px",
//   height: "40px",
//   color: vars.colors.primary,
// });

// export const processStepIcon = style({
//   width: "48px",
//   height: "48px",
//   color: vars.colors.primary,
//   marginBottom: vars.space.sm,
// });

// export const processStepNumber = style({
//   fontSize: vars.fontSizes.lg,
//   fontWeight: vars.fontWeights.bold,
//   color: vars.colors.secondary,
//   backgroundColor: vars.colors.primaryLight,
//   borderRadius: vars.radii.full,
//   width: "36px",
//   height: "36px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexShrink: 0,
//   marginBottom: vars.space.md,
// });

// export const processStepTitle = style({
//   fontSize: vars.fontSizes.lg,
//   fontWeight: vars.fontWeights.bold,
//   color: vars.colors.textStrong,
//   marginTop: vars.space.sm,
// });

// export const processStepDescription = style({
//   fontSize: vars.fontSizes.md,
//   color: vars.colors.textLight,
//   lineHeight: vars.lineHeights.relaxed,
// });

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

// sectionTitle moved to layout.css to avoid conflicts

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
