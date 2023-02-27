import React from "react";
import { GetStaticProps } from 'next'
import { iUserProps } from "../../types";
import { Box, Card, CardContent, CardHeader, Container, Grid, Paper, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import TransgenderIcon from '@mui/icons-material/Transgender';
import CakeIcon from '@mui/icons-material/Cake';
import BadgeIcon from '@mui/icons-material/Badge';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PaidIcon from '@mui/icons-material/Paid';
import GavelIcon from '@mui/icons-material/Gavel';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import InfoIcon from '@mui/icons-material/Info';
import moment from "moment";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://random-data-api.com/api/v2/users')
    const userData: iUserProps = await res.json()
    return {
        props: userData
    }
}

const UserData: React.FC<iUserProps> = (userData: iUserProps) => {
    return (
        <Container sx={{ paddingTop: "15vh", justifyItems: "center" }}>
            <Card elevation={8}>
                <CardHeader
                    avatar={<img src={userData.avatar} alt="Avatar" width={100} height={100} />}
                    title={userData.username}
                    titleTypographyProps={{ variant: "h5" }}
                    subheader={`#${userData.id}`}
                    subheaderTypographyProps={{ fontWeight: "bold" }}
                    component={Container}
                />
                <CardContent component={Container}>
                    <Card variant="outlined" sx={{ marginBottom: "10px" }}>
                        <CardHeader
                            title="About:"
                            titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
                            avatar={<InfoIcon />}
                            component={Container}
                        />
                        <CardContent
                            component={Container}
                        >
                            <Grid container spacing={2} columns={9}>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><PersonIcon /> Name:</Typography>
                                        <Typography>{userData.first_name} {userData.last_name}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><AlternateEmailIcon /> Email:</Typography>
                                        <Typography>{userData.email}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><LocalPhoneIcon /> Number:</Typography>
                                        <Typography>{userData.phone_number}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><AssignmentIndIcon /> Social Number:</Typography>
                                        <Typography>{userData.social_insurance_number}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><TransgenderIcon /> Gender:</Typography>
                                        <Typography>{userData.gender}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><CakeIcon /> Birth date:</Typography>
                                        <Typography>{moment(userData.date_of_birth).format('L')}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><BadgeIcon /> Employment:</Typography>
                                        <Typography>{userData.employment.title}</Typography>
                                    </Paper>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <Card variant="outlined">
                        <CardHeader
                            title="Subscription:"
                            titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
                            avatar={<LocalActivityIcon />}
                            component={Container}
                        />
                        <CardContent
                            component={Container}
                        >
                            <Grid container spacing={2} columns={4}>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><CardMembershipIcon /> Plan:</Typography>
                                        <Typography>{userData.subscription.plan}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><ChangeCircleIcon /> Status:</Typography>
                                        <Typography>{userData.subscription.status}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><PaidIcon /> Payment method:</Typography>
                                        <Typography>{userData.subscription.payment_method}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><GavelIcon /> Term:</Typography>
                                        <Typography>{userData.subscription.term}</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </Container>
    )
}

export default UserData;