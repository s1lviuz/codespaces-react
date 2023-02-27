import React from "react";
import { useRouter } from 'next/router';
import { Button, Card, CardActions, CardContent, CardHeader, Container } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const HomePage: React.FC = () => {
  const router = useRouter()

  return <Container maxWidth="sm">
    <Card
      component={Container}
      elevation={10}
    >
      <CardHeader
        title="😁 Welcome! 😁"
        titleTypographyProps={{ textAlign: "center" }}
      />
      <CardContent>

      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          onClick={() => router.push('/user')}
          startIcon={<PersonSearchIcon />}
          sx={{ marginBottom: "10px", color: "black", borderColor: "black", "&:hover": { borderColor: "black" } }}
        >
          Random User
        </Button>
      </CardActions>
    </Card>
  </Container>
}

export default HomePage;