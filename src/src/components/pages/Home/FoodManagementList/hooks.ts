import { useCallback, useMemo, useState } from 'react';
import { FoodManagement } from './types';

/**
 * アコーディオン開閉関数
 *
 * @param isOpen 開閉フラグ
 * @param open アコーディオンを開く
 * @param close アコーディオンを閉じる
 */
export const handleChange = (
  isOpen: boolean,
  open: () => void,
  close: () => void
): void => {
  if (isOpen) {
    close();
    return;
  }
  open();
};

/**
 * 表示する食品リストを作成するカスタムフック
 *
 * @param foodList 全体の食品管理リスト
 *
 * @returns
 */
export const useCreateFoodDisplayList = (
  foodList: FoodManagement[]
): {
  foodDisplayList: FoodManagement[];
  addDisplayList: () => void;
  showMoreButton: boolean;
} => {
  /** 初期表示件数 */
  const INITIAL_LENGTH = 3;
  /** 追加表示件数 */
  const ADD_LENGTH = 10;
  // 初期表示の3件をセットする
  const [displayList, setDisplayList] = useState(
    foodList.slice(0, INITIAL_LENGTH)
  );
  /** 「もっと見る」の表示フラグ */
  const showMoreButton = useMemo(
    () => displayList.length < foodList.length,
    [displayList, foodList]
  );
  // 表示件数の追加
  const addDisplayList = useCallback(() => {
    const addLength = displayList.length + ADD_LENGTH;
    setDisplayList(foodList.slice(0, addLength));
  }, [foodList, displayList]);

  return {
    foodDisplayList: displayList,
    addDisplayList,
    showMoreButton,
  };
};
