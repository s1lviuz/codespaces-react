import React from "react";
import { GetStaticProps } from 'next'
import { iUserProps } from "../../types";
import { Button, Card, CardContent, CardHeader, Container, Grid, Paper, Typography } from '@mui/material';
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
import CodeIcon from '@mui/icons-material/Code';
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
        <Container>
            <Card elevation={8} component={Container}>
                <CardHeader
                    avatar={<img src={userData.avatar} alt="Avatar" width={100} height={100} />}
                    title={userData.username}
                    titleTypographyProps={{ variant: "h5" }}
                    subheader={`#${userData.id}`}
                    subheaderTypographyProps={{ fontWeight: "bold" }}
                />
                <CardContent>
                    <Card component={Container} variant="outlined" sx={{ marginBottom: "10px" }}>
                        <CardHeader
                            title="About:"
                            titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
                            avatar={<InfoIcon />}
                        />
                        <CardContent
                        >
                            <Grid container spacing={2} columns={9}>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><PersonIcon /> Name:</Typography>
                                        <Typography textAlign="center">{userData.first_name} {userData.last_name}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><AlternateEmailIcon /> Email:</Typography>
                                        <Typography textAlign="center">{userData.email}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><LocalPhoneIcon /> Number:</Typography>
                                        <Typography textAlign="center">{userData.phone_number}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><AssignmentIndIcon /> Social Number:</Typography>
                                        <Typography textAlign="center">{userData.social_insurance_number}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><TransgenderIcon /> Gender:</Typography>
                                        <Typography textAlign="center">{userData.gender}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><CakeIcon /> Birth date:</Typography>
                                        <Typography textAlign="center">{moment(userData.date_of_birth).format('L')}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><BadgeIcon /> Employment:</Typography>
                                        <Typography textAlign="center">{userData.employment.title}</Typography>
                                    </Paper>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                    <Card component={Container} variant="outlined">
                        <CardHeader
                            title="Subscription:"
                            titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
                            avatar={<LocalActivityIcon />}
                        />
                        <CardContent
                        >
                            <Grid container spacing={2} columns={4}>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><CardMembershipIcon /> Plan:</Typography>
                                        <Typography textAlign="center">{userData.subscription.plan}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><ChangeCircleIcon /> Status:</Typography>
                                        <Typography textAlign="center">{userData.subscription.status}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><PaidIcon /> Payment method:</Typography>
                                        <Typography textAlign="center">{userData.subscription.payment_method}</Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={1}>
                                    <Paper variant="outlined" sx={{ padding: "5%" }}>
                                        <Typography fontWeight="bold"><GavelIcon /> Term:</Typography>
                                        <Typography textAlign="center">{userData.subscription.term}</Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Button
                        href="https://github.com/s1lviuz/codespaces-react"
                        variant="contained"
                        target="_blank"
                        color="primary"
                        endIcon={<CodeIcon />}
                        sx={{
                            background: "black",
                            '&:hover': {
                                backgroundColor: 'black',
                            },
                            marginTop: "10px"
                        }}
                    >
                        Source code
                    </Button>
                </CardContent>
            </Card>
        </Container>

    )
}

export default UserData;