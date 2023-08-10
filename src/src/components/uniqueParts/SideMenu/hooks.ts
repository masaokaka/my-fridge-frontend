import { CSSObject, Theme } from '@mui/material';
import { MAIN_COLOR } from '../../../style';

/** サイドメニューの横幅 */
export const DRAWER_WIDTH = 240;

/**
 * 開いた時のスタイル指定を返却する関数
 *
 * @function
 * @param theme マテリアルUIのTheme
 * @return CSSオブジェクト
 */
export const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  backgroundColor: MAIN_COLOR,
  boxShadow: '8px 8px 0px #0000001A',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

/**
 * 閉じた時のスタイル指定を返却する関数
 *
 * @function
 * @param theme マテリアルUIのTheme
 * @return CSSオブジェクト
 */
export const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: MAIN_COLOR,
  boxShadow: '8px 8px 0px #0000001A',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
