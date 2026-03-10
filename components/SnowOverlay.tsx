"use client";

import PixelSnow from "./PixelSnow";

export default function SnowOverlay() {
  return (
    <PixelSnow
      color="#e8dcc8"
      flakeSize={0.025}
      minFlakeSize={1.2}
      pixelResolution={450}
      speed={0.8}
      density={0.2}
      direction={115}
      brightness={0.6}
      depthFade={10}
      farPlane={18}
      variant="snowflake"
    />
  );
}
