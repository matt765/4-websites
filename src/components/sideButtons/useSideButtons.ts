import { useCallback } from "react";

import { useOpenDescriptionsStore } from "@/store/descState";

const useSideButtons = () => {
  const openDescriptions = useOpenDescriptionsStore(
    (state) => state.openDescriptions
  );
  const addDescription = useOpenDescriptionsStore(
    (state) => state.addDescription
  );
  const removeAllDescriptions = useOpenDescriptionsStore(
    (state) => state.removeAllDescriptions
  );

  const handleBookIconClick = useCallback(() => {
    if (openDescriptions.length === 4) {
      removeAllDescriptions();
    } else {
      [0, 1, 2, 3].forEach((num) => addDescription(num));
    }
  }, [openDescriptions, addDescription, removeAllDescriptions]);

  return { handleBookIconClick };
};

export default useSideButtons;
