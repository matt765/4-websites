export const sizes = {
    verySmall: 480, // Small mobile
    small: 640, // Mobile
    medium: 768, // Tablet
    large: 1024, // Laptop
    xlarge: 1280, // Desktop
    xxlarge: 1400, // Large Desktop
    xxxlarge: 1600, // Very large Desktop
  };
  
  export const devices = {
    max480: `(max-width: ${sizes.verySmall}px)`,
    max640: `(max-width: ${sizes.small}px)`,
    max768: `(max-width: ${sizes.medium}px)`,
    max1024: `(max-width: ${sizes.large}px)`,
    max1280: `(max-width: ${sizes.xlarge}px)`,
    max1400: `(max-width: ${sizes.xxlarge}px)`,
    max1600: `(max-width: ${sizes.xxxlarge}px)`,
  };