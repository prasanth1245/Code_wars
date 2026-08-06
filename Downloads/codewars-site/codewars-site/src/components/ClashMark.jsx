import logo from "../assets/logo.jpeg";
import "./ClashMark.css";

/**
 * ClashMark — renders the CODE WARS logo image.
 */
export default function ClashMark({ size = 48, className = "", animated = false }) {
  return (
    <img
      src={logo}
      alt="MARVELCODE WARS emblem"
      width={size}
      height={size}
      className={`clash-mark ${animated ? "clash-mark--animated" : ""} ${className}`}
    />
  );
}