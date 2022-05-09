import { Box, Drawer, Input, Typography, TextField, Grid, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import { Component } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ErrorPopup from "./ErrorPopup";

export function withNavigation(Children) {
    return (props) => {
      return <Children {...props} navigate={useNavigate()} />
    }
  }


class LogInDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: null
        }

        this.host = "http://localhost:8080"
    }

    inputEmail = (e) => {
        this.setState({email: e.target.value})
    }

    inputPassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleError = () => {
        this.setState({error: null})
    }

    logIn = () => {
        this.props.logIn({email: this.state.email, password: this.state.password})
        this.props.onClose()
    }

    render() {
        return (
            <div className="signup-drawer">
                <ErrorPopup error={this.state.error} onHandle={this.handleError}/>
                <Drawer
                anchor="right"
                open={this.props.toggle}>
                    <Box sx={{
                        width: "100vh"
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            flexGrow: "1"
                        }}>
                            <Typography
                            sx={{
                                fontFamily: "Comic Sans MS",
                                marginLeft: "3vh",
                                paddingTop: "2vh"
                            }}
                            variant="h3" >
                                Login
                            </Typography>
                            <IconButton 
                                aria-label="close-signup" 
                                onClick={() => this.props.onClose()}
                                sx={{
                                    marginRight: "3vh",
                                    paddingTop: "2vh"
                                }}>
                                <CloseIcon fontSize="large" sx={{ color: "black" }}/>
                            </IconButton>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "10vh",
                            component:"form",
                            justifyContent: "space-between",
                            '& .MuiTextField-root': { width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >               
                            <Grid  container direction={"column"} spacing={2} sx={{
                                alignItems:"center",
                            }}>
                                <Grid item>
                                    <TextField
                                            variant="standard"
                                            id="email"
                                            label="Email"
                                            name="email"
                                            autoFocus
                                            value={this.state.email}
                                            onChange={this.inputEmail}
                                            />
                                </Grid>
                                <Grid item>
                                    <TextField
                                            variant="standard"
                                            id="password"
                                            label="Password"
                                            name="password"
                                            autoFocus
                                            value={this.state.password}
                                            onChange={this.inputPassword}
                                            />
                                </Grid>
                                <Grid item>
                                    <Button 
                                    variant="contained"
                                    size="medium"
                                    onClick={this.logIn}
                                    style={{
                                        backgroundColor:"#9c6644",
                                        width: "100px"
                                    }}
                                    >Sign In</Button>
                                </Grid>
                                <Grid item>
                                    <Link to={{pathname: "/signup"}} onClick={this.props.onClose} >
                                        Don't have an account?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Drawer>
            </div>

        )
    }
}

export default withNavigation(LogInDrawer)