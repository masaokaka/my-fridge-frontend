import { useState } from 'react';

export type UseToggleType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

/**
 * 開閉フラグを作成するカスタムフック
 *
 * @param initialData 初期値 boolean
 */
export const useToggle = (initialData: boolean): UseToggleType => {
  const [isOpen, setIsOpen] = useState(initialData);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
  };
};
