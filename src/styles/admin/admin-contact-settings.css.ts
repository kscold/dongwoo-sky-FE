import { style } from "@vanilla-extract/css";
import { vars } from "../common/theme.css";

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: vars.space.lg,
});

export const header = style({
  marginBottom: vars.space.xl,
  textAlign: "center",
});

export const title = style({
  fontSize: vars.fontSizes.xxl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.gray[900],
  marginBottom: vars.space.sm,
});

export const subtitle = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.gray[600],
});

export const form = style({
  backgroundColor: vars.colors.white,
  borderRadius: vars.radii.lg,
  padding: vars.space.xl,
  boxShadow: vars.shadows.md,
});

export const section = style({
  marginBottom: vars.space.xl,
  paddingBottom: vars.space.xl,
  borderBottom: `1px solid ${vars.colors.gray[200]}`,

  ":last-child": {
    borderBottom: "none",
    marginBottom: 0,
    paddingBottom: 0,
  },
});

export const sectionTitle = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: vars.fontWeights.semibold,
  color: vars.colors.gray[900],
  marginBottom: vars.space.lg,
});

export const formGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: vars.space.lg,
});

export const formGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const label = style({
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  color: vars.colors.gray[700],
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
});

export const input = style({
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  transition: "border-color 0.2s ease",

  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },

  ":disabled": {
    backgroundColor: vars.colors.gray[100],
    color: vars.colors.gray[500],
    cursor: "not-allowed",
  },
});

export const textarea = style({
  padding: vars.space.sm,
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  resize: "vertical",
  minHeight: "100px",
  transition: "border-color 0.2s ease",

  ":focus": {
    outline: "none",
    borderColor: vars.colors.primary,
    boxShadow: `0 0 0 3px ${vars.colors.primaryTransparent}`,
  },

  ":disabled": {
    backgroundColor: vars.colors.gray[100],
    color: vars.colors.gray[500],
    cursor: "not-allowed",
  },
});

export const checkbox = style({
  width: "16px",
  height: "16px",
  accentColor: vars.colors.primary,
});

export const colorInput = style({
  width: "60px",
  height: "40px",
  padding: "2px",
  border: `1px solid ${vars.colors.gray[300]}`,
  borderRadius: vars.radii.md,
  cursor: "pointer",

  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const helpText = style({
  fontSize: vars.fontSizes.sm,
  color: vars.colors.gray[500],
  marginTop: vars.space.xs,
});

export const discordSection = style({
  backgroundColor: vars.colors.gray[50],
  padding: vars.space.lg,
  borderRadius: vars.radii.md,
  border: `1px solid ${vars.colors.gray[200]}`,
});

export const testButton = style({
  backgroundColor: vars.colors.success,
  color: vars.colors.white,
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.sm,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.success,
    opacity: 0.9,
  },
});

export const actionButtons = style({
  display: "flex",
  gap: vars.space.md,
  justifyContent: "center",
  marginTop: vars.space.xl,
  paddingTop: vars.space.xl,
  borderTop: `1px solid ${vars.colors.gray[200]}`,
});

export const editButton = style({
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.lg}`,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.primaryDark,
  },
});

export const saveButton = style({
  backgroundColor: vars.colors.success,
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.lg}`,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.success,
    opacity: 0.9,
  },

  ":disabled": {
    backgroundColor: vars.colors.gray[400],
    cursor: "not-allowed",
  },
});

export const cancelButton = style({
  backgroundColor: vars.colors.gray[500],
  color: vars.colors.white,
  padding: `${vars.space.md} ${vars.space.lg}`,
  border: "none",
  borderRadius: vars.radii.md,
  fontSize: vars.fontSizes.md,
  fontWeight: vars.fontWeights.medium,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  ":hover": {
    backgroundColor: vars.colors.gray[600],
  },
});

export const loadingContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px",
  fontSize: vars.fontSizes.lg,
  color: vars.colors.gray[600],
});

export const errorContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px",
  fontSize: vars.fontSizes.lg,
  color: vars.colors.error,
});
