import React, { useState } from "react";

function UseModal() {
  const [toggleModal, setToggleModal] = useState(false);
  const [characterId, setCharacterId] = useState<string | null>(null);

  const changeModalInfo = (id: string) => {
    setCharacterId(id);
    setToggleModal(true);
  };

  return {
    toggleModal,
    setToggleModal,
    changeModalInfo,
    characterId,
  };
}

export default UseModal;
