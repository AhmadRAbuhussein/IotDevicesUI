
import {Grid} from "@mui/material"
const ComingSoonImage = () => (
    <Grid
        item
        xs={12}
        component="img"
        sx={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
        }}
        alt="Coming Soon"
        src={"/comingSoon.gif"}
    />
);

export default ComingSoonImage