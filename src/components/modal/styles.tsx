import { styled, Box } from "@mui/material";
import i18n from "src/i18n";

export const uploaderModalStyle=(size?:string, isRtl?: boolean) =>{
 //  let responsiveWidth;
 //  if(size=='sm')
 //    responsiveWidth='30%'
 // else if(size=='md')
 //    responsiveWidth='60%'
 // else if (size=='lg')
 //    responsiveWidth='80%'
 //  else
 //    responsiveWidth='40%'

  return {
  position: 'relative' as 'relative',
  top: '50%',
  left: i18n.language === 'ar' ? '10%' : '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '95%',
  overflowY: 'auto',
  zIndex:'10'
}};
export const uploaderModalMobileStyle={
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 2,
  maxHeight: '95%',
  overflowY: 'scroll',
  borderRadius: '15px',
};

export const StyledTitle = styled(Box)<{}>(({ theme }) => ({
	color: theme.palette.primary.main,
	fontWeight: "700",
	fontSize: "1.375rem",
}));

export const StyledMessage = styled(Box)<{}>(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: "700",
    fontSize: "1rem",
}));

