export const checkIfSmallLaptop = () => {
    if (typeof window !== "undefined") {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      return (
        viewportHeight > 550 &&
        viewportHeight < 850 &&
        viewportWidth < 1650 &&
        viewportWidth > 1350
      );
    }
    return false;
  };
  