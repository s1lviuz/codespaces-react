import React from "react";
import { GetStaticProps } from 'next'
import { iUserProps } from "../../types";
import { Card, CardContent, CardHeader } from '@mui/material';

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://random-data-api.com/api/v2/users')
    const userData: iUserProps = await res.json()
    return {
        props: userData
    }
}

const UserData: React.FC<iUserProps> = (userData: iUserProps) => {
    console.log(userData)
    return (
        <Card>
            <CardHeader
                avatar={<img src={userData.avatar} alt="Avatar" width={50} height={50} />}
                title={userData.username}
            />
            <CardContent>
                <p>Name: {userData.first_name} {userData.last_name}</p>
                <p>Email: {userData.email}</p>
                <p>Number: {userData.phone_number}</p>
            </CardContent>
        </Card>
    )
}

export default UserData;