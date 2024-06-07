import { Box, Paper, Typography } from "@mui/material";
import EEAGrid from "../components/EEAGrid";
import GridActionBar from "../components/CustomGridToolbar";

export default function EEAPassport(): JSX.Element {

    return (
        <Box display={'inline-flex'} flexDirection={'column'} gap={'10px'} width={'100%'}>
            <Typography variant="h3">EEA Passports</Typography>
            <Paper elevation={3} square>
                <Box display={'flex'} flexDirection={'column'} width={'100%'}>
                    <EEAGrid />
                </Box>
            </Paper>
        </Box>
    )
}