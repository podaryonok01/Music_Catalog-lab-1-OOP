import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Stack } from '@mui/material';

export default function CardLayout({ linkTo, title, icon }: { linkTo: string, title: string, icon?: React.ReactElement}) {
    return (
        <Link className="link-router" to={linkTo}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" >
                        <Stack direction="row" spacing={2} alignItems="center" >
                            { icon }
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>
                        </Stack>
                        <KeyboardDoubleArrowRightIcon/>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
}