import { Box, Drawer, Input, Typography, TextField, Grid, Button, Link, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import { Component } from "react";
import { useNavigate } from "react-router";

export function withNavigation(Children) {
    return (props) => {
      return <Children {...props} navigate={useNavigate()} />
    }
  }


class SignupDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    inputUsername = (e) => {
        this.setState({username: e.target.value})
    }

    inputPassword = (e) => {
        this.setState({password: e.target.value})
    }

    logIn = (e) => {
        //connect backend
    }


    render() {
        return (
            <div className="signup-drawer">
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
                                onClick={() => this.props.onClose(false)}
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
                                            id="username"
                                            label="Username"
                                            name="username"
                                            autoFocus
                                            value={this.state.username}
                                            onChange={this.inputUsername}
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
                                    sx={{
                                        width:"100px",
                                    }}
                                    >Sign In</Button>
                                </Grid>
                                <Grid item>
                                    <Link href="/SignUp" color="text.secondary">
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

export default withNavigation(SignupDrawer)