import { Box, Card, CardActions, CardContent, Paper, Typography } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import LloydsLogo from "../assets/hot-wheels-vector-logo-removebg-preview.png"

const data = [
    { value: 5, label: 'United Kingdom' },
    { value: 10, label: 'Germany' },
    { value: 15, label: 'Ireland' },
    { value: 20, label: 'Jersey' },
  ];
  
  const size = {
    width: 500,
    height: 300,
  };

export default function Dashboard(): JSX.Element {
    return (
        <div>
            <Paper elevation={3} sx={{ padding: '10px', position: 'relative' }}>
                <Typography>Dashboard Content</Typography>
                <Box display={'inline-flex'} width={'100%'} justifyContent={'center'} gap={'20px'}>
                    <Card sx={{ backgroundColor: '#F44336', color: '#fff', width: '250px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                        <CardContent>
                            <Typography variant="h3" component="div">
                            12
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ position: 'absolute', bottom: '10px'}}>
                            <Typography variant="body2">Overdue</Typography>
                        </CardActions>
                    </Card>
                    <Card sx={{ backgroundColor: '#FFbb33', color: '#fff', width: '250px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                        <CardContent>
                            <Typography variant="h3" component="div">
                            42
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ position: 'absolute', bottom: '10px'}}>
                            <Typography variant="body2">Needs Update</Typography>
                        </CardActions>
                    </Card>
                    <Card sx={{ backgroundColor: '#086c4c', color: '#fff', width: '250px', height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                        <CardContent>
                            <Typography variant="h3" component="div">
                            404
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ position: 'absolute', bottom: '10px'}}>
                            <Typography variant="body2">Up To Date</Typography>
                        </CardActions>
                    </Card>
                </Box>
                <Box marginTop={'40px'} width={'100%'} display={'flex'} justifyContent={'center'}>
                    <PieChart
                        series={[
                            {
                            arcLabel: (item) => `${item.label} (${item.value})`,
                            arcLabelMinAngle: 45,
                            data,
                            },
                        ]}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontWeight: 'bold',
                            },
                        }}
                        {...size}
                    />
                </Box>
                <img src={LloydsLogo} alt="Lloyds Logo" style={{width: '300px', height: '150px'}}/>
            </Paper>
        </div>
    )
}