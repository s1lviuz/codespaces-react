import React from "react";
import { GetStaticProps } from 'next'
import { iUserProps } from "../../types";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://random-data-api.com/api/v2/users')
    const userData: iUserProps = await res.json()

    return {
        props: userData
    }
}

const UserData: React.FC<iUserProps> = (userData: iUserProps) => {
    return (
        <div>
            <p>Name: {userData.first_name ?? "Não existe."}</p>
            <p>Email: {userData.email ?? "Não possui."}</p>
            <p>Number: {userData.phone_number ?? "Não informado."}</p>
        </div>
    )
}

export default UserData;