import { Grid } from "@mui/material";
import { StyledEmptyGrid, EmptyOverlayGridStyle } from "./style";

const EmptyOverlayGrid = () => {
    return (
        <StyledEmptyGrid item container>
            <Grid item xs={12}>
                <EmptyOverlayGridStyle>Data Is Empty</EmptyOverlayGridStyle>
            </Grid>
            <Grid item xs={12}>
                <EmptyOverlayGridStyle>There are no data or matching data.</EmptyOverlayGridStyle>
            </Grid>
        </StyledEmptyGrid>
    )
}
export default EmptyOverlayGrid;