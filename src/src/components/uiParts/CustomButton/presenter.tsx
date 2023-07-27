import { Button, ButtonProps, styled } from '@mui/material';
import { ReactNode } from 'react';

type Props = ButtonProps & {
  children?: ReactNode;
};

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 24,
  height: 40,
  [theme.breakpoints.up('sm')]: {
    height: 50,
  },
}));

const CustomButton = ({ children, ...props }: Props) => (
  <StyledButton {...props} variant="contained">
    {children}
  </StyledButton>
);

export default CustomButton;
