import { keyframes } from "@vanilla-extract/css";

// 애니메이션 정의
export const fadeInUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const slideInRight = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(50px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateX(0)",
  },
});

export const pulse = keyframes({
  "0%, 100%": {
    transform: "scale(1)",
  },
  "50%": {
    transform: "scale(1.02)",
  },
});

export const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});
