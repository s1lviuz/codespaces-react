import React from "react";
import { useRouter } from 'next/router';
import { Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const HomePage: React.FC = () => {
  const router = useRouter()

  return <Card
    variant="outlined"

  >
    <CardHeader
      title="Bem vindo!"
    />
    <CardContent>

    </CardContent>
    <CardActions>
      <Button
        variant="outlined"
        onClick={() => router.push('/user')}
        startIcon={<PersonSearchIcon />}
      >
        Random User
      </Button>
    </CardActions>
  </Card>
}

export default HomePage;