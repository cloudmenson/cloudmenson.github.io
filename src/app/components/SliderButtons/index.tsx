import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CSSProperties, FC } from "react";

interface SlickArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  // currentSlide?: number;
  // slideCount?: number;
}

export const NextArrow: FC<SlickArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.4vw",
      width: "2vw",
      height: "2vw",
      right: "4%",
      zIndex: 2,
      backgroundColor: "#000000",
      color: "#ffffff",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <ArrowRight />
  </div>
);

export const PrevArrow: FC<SlickArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={className}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      width: "2vw",
      height: "2vw",
      justifyContent: "center",
      borderRadius: "0.4vw",
      left: "4%",
      zIndex: 2,
      backgroundColor: "#000000",
      color: "#ffffff",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <ArrowLeft />
  </div>
);
