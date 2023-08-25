import { Box, styled } from '@mui/material';
import { FOOTER_HEIGHT_MOBILE, FOOTER_HEIGHT_PC } from '../../../const';

const StyledFooter = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: FOOTER_HEIGHT_PC,
    fontSize: 14,
  },
  height: FOOTER_HEIGHT_MOBILE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
}));

/** フッター */
const Footer = () => (
  <StyledFooter>©️2022 MyFridge. All Rights Reserved.</StyledFooter>
);
export default Footer;
