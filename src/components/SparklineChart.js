import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { colors } from "../styles/styles";

function getCoordinates(points, width, height, padding) {
  const max = Math.max(...points, 1);
  const min = Math.min(...points, max);
  const range = Math.max(max - min, 1);
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  return points.map((point, index) => {
    const x = padding + (index / Math.max(points.length - 1, 1)) * innerWidth;
    const y = padding + (1 - (point - min) / range) * innerHeight;
    return { x, y };
  });
}

function buildSmoothPath(coordinates) {
  return coordinates.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }

    const previous = coordinates[index - 1];
    const controlX = (previous.x + point.x) / 2;
    return `${path} C ${controlX} ${previous.y}, ${controlX} ${point.y}, ${point.x} ${point.y}`;
  }, "");
}

export function SparklineChart({ points, width = 320, height = 170 }) {
  const padding = 18;
  const coordinates = getCoordinates(points, width, height, padding);
  const linePath = buildSmoothPath(coordinates);
  const first = coordinates[0];
  const last = coordinates[coordinates.length - 1];
  const baseline = height - padding;
  const areaPath = `${linePath} L ${last.x} ${baseline} L ${first.x} ${baseline} Z`;

  return (
    <Svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <Defs>
        <LinearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <Stop offset="0" stopColor={colors.primary} stopOpacity="0.32" />
          <Stop offset="1" stopColor={colors.primary} stopOpacity="0.03" />
        </LinearGradient>
      </Defs>
      <Path d={areaPath} fill="url(#sparkFill)" />
      <Path d={linePath} fill="none" stroke={colors.primary} strokeLinecap="round" strokeWidth={4} />
    </Svg>
  );
}
