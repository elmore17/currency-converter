import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react'
import { Enviroment } from '../../shared/util'


export const MainPage = () =>{
    const [count, setCount] = useState(0);
    return(
        <Container>
            <Typography variant='h1'>Vite + React</Typography>
            <Box className="card">
                <Button variant='contained' onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </Button>
                <Typography variant='body1'>
                Edit <code>src/App.jsx</code> and save to test HMR
                </Typography>
            </Box>
            <Typography variant='body1' className="read-the-docs">
                Click on the Vite and React logos to learn more
            </Typography>
        </Container>
    )
}