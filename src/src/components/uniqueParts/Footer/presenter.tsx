import { Box, styled } from '@mui/material';

export const footerHeight = { pc: 127, mobile: 50 };

const StyledFooter = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: footerHeight.pc,
    fontSize: 14,
  },
  height: footerHeight.mobile,
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
