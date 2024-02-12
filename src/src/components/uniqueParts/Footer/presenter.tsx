import { Box, styled } from '@mui/material';
import { FOOTER_HEIGHT_MOBILE, FOOTER_HEIGHT_PC } from '../../../const';
import { MAIN_COLOR, WHITE_COLOR } from '../../../style';

const StyledFooter = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: FOOTER_HEIGHT_PC,
    fontSize: 16,
    fontWeight: 'bold',
  },
  height: FOOTER_HEIGHT_MOBILE,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 'bold',
}));

interface Props {
  isPublicPage: boolean;
}

/** フッター */
const Footer = ({ isPublicPage }: Props) => (
  <StyledFooter
    sx={{
      bgcolor: isPublicPage ? MAIN_COLOR : undefined,
      color: isPublicPage ? WHITE_COLOR : undefined,
    }}
  >
    ©️2022 MyFridge. All Rights Reserved.
  </StyledFooter>
);
export default Footer;
