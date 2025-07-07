import { style } from "@vanilla-extract/css"

export const uploaderContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-md)",
})

export const dropzone = style({
    border: "2px dashed var(--colors-gray-300)",
    borderRadius: "var(--radii-md)",
    padding: "var(--space-xl)",
    textAlign: "center",
    cursor: "pointer",
    transition: "border-color 0.2s, background-color 0.2s",
    backgroundColor: "var(--colors-white)",
    ":hover": {
        borderColor: "var(--colors-blue-500)",
    },
})

export const disabledDropzone = style({
    cursor: "not-allowed",
    backgroundColor: "var(--colors-gray-50)",
    borderColor: "var(--colors-gray-200)",
    ":hover": {
        borderColor: "var(--colors-gray-200)",
    },
})

export const previewContainer = style({
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--space-md)",
    marginTop: "var(--space-md)",
})

export const previewItem = style({
    position: "relative",
    width: "120px",
    height: "120px",
    border: "1px solid var(--colors-gray-200)",
    borderRadius: "var(--radii-md)",
    overflow: "hidden",
})

export const previewImage = style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
})

export const removeButton = style({
    position: "absolute",
    top: "4px",
    right: "4px",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    lineHeight: "1",
    ":hover": {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
})

export const fileName = style({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    fontSize: "var(--font-sizes-xs)",
    padding: `var(--space-xs) var(--space-sm)`,
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
}) 