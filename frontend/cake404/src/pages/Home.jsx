import React from "react";
import { Component } from "react";
import Box from "@mui/material/Box"
import { createTheme, IconButton, iconButtonClasses } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NavBar from "../components/NavBar";
import {Box, Typography} from "@mui/material"


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {themeOn : true}
    }

    theme1 = createTheme({
        palette: {
            background: {
                default: "#9c6644"
            },
            text: {
                primary: "#F0F8FF"
            }
        }
    })

    theme2 = createTheme({
        palette: {
            background: {
                default: "#F4F1BB"
            },
            text: {
                primary: "#000000"
            }
        }
    })


    changeTheme = () => {
        this.setState({themeOn: !this.state.themeOn})
        console.log(this.state.themeOn)
    }

    render() {
        return (
            <ThemeProvider theme={this.state.themeOn ? this.theme1 : this.theme2}>
                <CssBaseline />
                <div className="home" >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        textAlign: "center",
                        justifyContent: 'center',
                    }}>
                        <div>
                            <h1>Cake 404</h1>
                            <p>Bringing you the alternate dessert-'ive' experience</p>
                        </div>
                        <IconButton sx={{ ml: 1 }} onClick={this.changeTheme} color="inherit">
                            {this.state.themeOn ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                </div>
                <NavBar/>
            </ThemeProvider>
        )
    }
}

export default Home;