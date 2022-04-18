import { Box, Drawer, Input, Typography, TextField, Grid, Button, Link } from "@mui/material";
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
                        <Typography
                        sx={{
                            fontFamily: "Comic Sans MS",
                            marginLeft: "3vh",
                            paddingTop: "2vh"
                        }}
                        variant="h3" >
                            Login
                        </Typography>
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
                                            variant="outlined"
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
                                            variant="outlined"
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
                            </Grid>
                            <Link href="/SignUp" 
                            sx={{
                                paddingTop: "5px"
                            }}>
                                Don't have an account?
                            </Link>
                        </Box>
                    </Box>
                </Drawer>
            </div>

        )
    }
}

export default withNavigation(SignupDrawer)