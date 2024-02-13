import { TypographyProps, Typography } from '@mui/material';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

type Props = TypographyProps & LinkProps;

// const StyledTypography = styled(Typography)(({ theme }) => ({}));

/** 共通リンク
 */
const CustomLink = ({ children, to, fontSize }: Props) => (
  <Typography component={RouterLink} to={to} fontSize={fontSize}>
    {children}
  </Typography>
);

export default CustomLink;
