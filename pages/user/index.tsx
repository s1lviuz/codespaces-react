import React from "react";
import { GetStaticProps } from 'next'
import { iUserProps } from "../../types";
import { Card, CardContent, CardHeader, Container, Grid, Paper, Typography } from '@mui/material';
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
        <Card elevation={3}>
            <CardHeader
                avatar={<img src={userData.avatar} alt="Avatar" width={70} height={70} />}
                title={userData.username}
                titleTypographyProps={{ variant: "h5" }}
                subheader={`#${userData.id}`}
                subheaderTypographyProps={{ fontWeight: "bold" }}
                component={Container}
            />
            <CardContent>
                <Container>
                    <Paper variant="outlined" sx={{ padding: "1%", }}>
                        <Grid>
                            <Typography fontWeight="bold" sx={{ marginBottom: "5px" }}><InfoIcon /> About:</Typography>
                            <Grid container sx={{ gap: "5px" }}>
                                <Paper variant="outlined" sx={{ padding: "1%" }}>
                                    <Grid>
                                        <Grid item xs>
                                            <Typography fontWeight="bold"><PersonIcon /> Name:</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{userData.first_name} {userData.last_name}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper variant="outlined" sx={{ padding: "1%" }}>
                                    <Grid>
                                        <Grid item xs>
                                            <Typography fontWeight="bold"><AlternateEmailIcon /> Email:</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{userData.email}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper variant="outlined" sx={{ padding: "1%" }}>
                                    <Grid>
                                        <Grid item xs>
                                            <Typography fontWeight="bold"><LocalPhoneIcon /> Number:</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{userData.phone_number}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper variant="outlined" sx={{ padding: "1%" }}>
                                    <Grid>
                                        <Grid item xs>
                                            <Typography fontWeight="bold"><AssignmentIndIcon /> Social Number:</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{userData.social_insurance_number}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper variant="outlined" sx={{ padding: "1%" }}>
                                    <Grid>
                                        <Grid item xs>
                                            <Typography fontWeight="bold"><TransgenderIcon /> Gender:</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{userData.gender}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper variant="outlined" sx={{ padding: "1%" }}>
                                    <Grid>
                                        <Grid item xs>
                                            <Typography fontWeight="bold"><CakeIcon /> Birth date:</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{moment(userData.date_of_birth).format('L')}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper variant="outlined" sx={{ padding: "1%" }}>
                                    <Grid>
                                        <Grid item xs>
                                            <Typography fontWeight="bold"><BadgeIcon /> Employment:</Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography>{userData.employment.title}</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper variant="outlined" sx={{ padding: "1%", marginTop: "5px" }}>
                        <Grid>
                            <Typography fontWeight="bold" sx={{ marginBottom: "5px" }}><LocalActivityIcon /> Subscription:</Typography>
                            <Grid item xs>
                                <Grid container sx={{ gap: "5px" }}>
                                    <Paper variant="outlined" sx={{ padding: "1%" }}>
                                        <Grid>
                                            <Grid item xs>
                                                <Typography fontWeight="bold"><CardMembershipIcon /> Plan:</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography>{userData.subscription.plan}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper variant="outlined" sx={{ padding: "1%" }}>
                                        <Grid>
                                            <Grid item xs>
                                                <Typography fontWeight="bold"><ChangeCircleIcon /> Status:</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography>{userData.subscription.status}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper variant="outlined" sx={{ padding: "1%" }}>
                                        <Grid>
                                            <Grid item xs>
                                                <Typography fontWeight="bold"><PaidIcon /> Payment method:</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography>{userData.subscription.payment_method}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper variant="outlined" sx={{ padding: "1%" }}>
                                        <Grid>
                                            <Grid item xs>
                                                <Typography fontWeight="bold"><GavelIcon /> Term:</Typography>
                                            </Grid>
                                            <Grid item xs>
                                                <Typography>{userData.subscription.term}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </CardContent>
        </Card>
    )
}

export default UserData;