import { style } from "@vanilla-extract/css"
import { vars } from "../common/theme.css"

export const dashboardContainer = style({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  padding: vars.space.xl,
})

export const dashboardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: vars.space.xxxl,
  padding: vars.space.xl,
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
})

export const dashboardTitle = style({
  fontSize: "2.5rem",
  fontWeight: "700",
  color: "white",
  margin: "0",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
})

export const headerActions = style({
  display: "flex",
  gap: vars.space.md,
})

export const viewSiteButton = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: "rgba(255, 255, 255, 0.2)",
  color: "white",
  textDecoration: "none",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  fontWeight: "600",
  fontSize: "0.9rem",
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
  ":hover": {
    background: "rgba(255, 255, 255, 0.3)",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
})

export const logoutButton = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  background: "linear-gradient(45deg, #ff6b6b, #ee5a24)",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontWeight: "600",
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 20px rgba(238, 90, 36, 0.4)",
  },
})

export const statsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: vars.space.xl,
  marginBottom: vars.space.xxxl,
})

export const statCard = style({
  padding: vars.space.xl,
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
  },
})

export const statTitle = style({
  fontSize: "1rem",
  fontWeight: "500",
  color: "rgba(255, 255, 255, 0.8)",
  marginBottom: vars.space.sm,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
})

export const statValue = style({
  fontSize: "3rem",
  fontWeight: "800",
  color: "white",
  margin: "0",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
})

export const dashboardContent = style({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  padding: vars.space.xxl,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
})

export const sectionTitle = style({
  fontSize: "1.8rem",
  fontWeight: "700",
  color: "white",
  marginBottom: vars.space.xl,
  textAlign: "center",
})

export const menuGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: vars.space.xl,
})

export const menuCard = style({
  display: "flex",
  alignItems: "center",
  padding: vars.space.xl,
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  textDecoration: "none",
  color: "white",
  transition: "all 0.3s ease",
  ":hover": {
    background: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-3px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
})

export const menuIconWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60px",
  height: "60px",
  background: "linear-gradient(45deg, #667eea, #764ba2)",
  borderRadius: "16px",
  marginRight: vars.space.lg,
  boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
})

export const menuIcon = style({
  fontSize: "1.5rem",
})

export const menuInfo = style({
  flex: 1,
})

export const menuTitle = style({
  fontSize: "1.2rem",
  fontWeight: "700",
  marginBottom: vars.space.xs,
  color: "white",
})

export const menuDescription = style({
  fontSize: "0.9rem",
  color: "rgba(255, 255, 255, 0.7)",
  lineHeight: "1.5",
})

export const menuAction = style({
  marginLeft: vars.space.md,
})

export const actionArrow = style({
  fontSize: "1.2rem",
  color: "rgba(255, 255, 255, 0.6)",
  transition: "all 0.3s ease",
})
