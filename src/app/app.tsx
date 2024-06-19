import './app.css';
import {MantineProvider} from "@mantine/core";
import {theme} from '../theme'
import {Outlet} from "react-router-dom";

export type AppProps = {};


const App = () => {
    return <MantineProvider theme={theme}>
        <Outlet/>
    </MantineProvider>
};

export default App;
