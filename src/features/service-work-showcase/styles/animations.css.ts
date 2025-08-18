import { keyframes } from "@vanilla-extract/css";

// 스피너 애니메이션
export const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});