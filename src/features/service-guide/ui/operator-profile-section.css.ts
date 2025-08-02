import { style } from "@vanilla-extract/css"

export const operatorProfileSection = style({
  marginBottom: "3rem",
})

export const profileCard = style({
  display: "grid",
  gridTemplateColumns: "300px 1fr",
  gap: "3rem",
  padding: "2rem",
  backgroundColor: "#ffffff",
  borderRadius: "1rem",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
  },
})

export const profileImageContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

export const profileImage = style({
  borderRadius: "1rem",
  objectFit: "cover",
})

export const profileImagePlaceholder = style({
  width: "300px",
  height: "300px",
  backgroundColor: "#f3f4f6",
  borderRadius: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9ca3af",
  ":first-child": {
    width: "8rem",
    height: "8rem",
  },
})

export const profileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
})

export const profileName = style({
  fontSize: "1.875rem",
  fontWeight: 700,
  color: "#0f172a",
  marginBottom: "0.25rem",
})

export const profileRole = style({
  fontSize: "1.125rem",
  color: "#64748b",
  marginBottom: "1rem",
})

export const profileSectionTitle = style({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#0f172a",
  marginBottom: "0.75rem",
})

export const profileList = style({
  listStyle: "disc",
  paddingLeft: "1.5rem",
  margin: 0,
})

export const profileListItem = style({
  marginBottom: "0.5rem",
  color: "#475569",
  lineHeight: 1.6,
})

export const profileBio = style({
  color: "#475569",
  lineHeight: 1.6,
})