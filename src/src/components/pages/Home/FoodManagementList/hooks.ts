import { useCallback, useMemo, useState } from 'react';
import { FoodManagement } from './types';
import { ACCENT_COLOR, ERROR_COLOR, MAIN_COLOR } from '../../../../style';

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
 * アイコンカラーを選択する関数
 *
 * @param レベル 1: 低, 2: 中, 3: 高
 *
 * @returns カラーコード
 */
export const selectColor = (level: 1 | 2 | 3): string => {
  if (level === 1) {
    return MAIN_COLOR;
  }
  if (level === 2) {
    return ACCENT_COLOR;
  }
  return ERROR_COLOR;
};

/**
 * 表示する食材管理リストを作成するカスタムフック
 *
 * @param foodList 全体の食材管理リスト
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
