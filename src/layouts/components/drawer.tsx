import {
    StyledListButton,
    StyledListIcon,
    StyledListItem,
    StyledListText,
} from "../styles";
import {Box, Grid, List, Toolbar, Typography} from "@mui/material";
import {wholeContent} from "./sideMenuData";
import {theme} from "src/theme";
import {useTranslation} from "react-i18next";

interface IProps {
    children?: any;
    handleListItemClick: (event: any, id: number) => void;
    selectedItem: string;
}

export const Drawer = ({handleListItemClick, selectedItem}: IProps) => {
    const {t} = useTranslation('translation')
    return (
        <Grid height={'100%'}>
            <Box>
                <Toolbar>
                    <Box
                        component="img"
                        sx={{
                            padding: "10px",
                            objectFit: "contain",
                            width: "100%",
                            height: "100px",
                            [theme.breakpoints.down("md")]: {
                                height: '100px',
                            }
                        }}
                        alt="NXGEN"
                        src={"https://media.licdn.com/dms/image/v2/D4D0BAQFyiwXoBUvMGw/company-logo_200_200/company-logo_200_200/0/1720425913705/nxgen_technology_ag_logo?e=1746662400&v=beta&t=M0B0Ew2Wj_c9tTxuKUwiMFu2rAAGMnAp9lQFA5CzvCQ"}
                    />
                </Toolbar>
                <Typography padding={'10px 25px 10px 25px'} fontWeight={'bold'}>{'main'}</Typography>
                <List>
                    {wholeContent?.main.map((content) => (
                        <StyledListItem
                            key={content.id}
                            disablePadding
                        >
                            <StyledListButton
                                selected={content?.link === selectedItem}
                                onClick={(event) => handleListItemClick(event, content?.id)}>
                                <StyledListIcon>{content.icon}</StyledListIcon>
                                <StyledListText primary={content.label}/>
                            </StyledListButton>
                        </StyledListItem>
                    ))}
                </List>
            </Box>
        </Grid>
    );
};
