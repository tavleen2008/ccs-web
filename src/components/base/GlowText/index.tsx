import styled from "styled-components";

interface GlowTextProps {
  color: string;
}

/**
 * Highlights a word in an accent colour. Previously a white word with a neon
 * text-shadow bloom; refined to a crisp accent colour (no glow) for a cleaner,
 * more professional read. Prop name kept as-is for compatibility.
 */
const GlowText = styled.span<GlowTextProps>`
  color: ${(props) => props.color};
`;

export default GlowText;
