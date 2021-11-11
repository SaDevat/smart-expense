import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Details from './cards/Details'
import Main from './cards/Main'

const Home = () => {
    return (
        <div>
            <SimpleGrid paddingInline={5} columns={3} spacing={5} alignItems="center" height="100vh">
                <Details title="Income"/>
                <Main/>
                <Details title="Expense"/>
            </SimpleGrid>
        </div>
    )
}

export default Home
