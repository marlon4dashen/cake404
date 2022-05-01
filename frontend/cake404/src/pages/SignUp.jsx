import React from "react";
import { Component } from "react";
import { Button, TextField, Box, Typography, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import ErrorPopup from "../components/ErrorPopup";
import { useNavigate } from "react-router";


export function withNavigation(Children) {
    return (props) => {
      return <Children {...props} navigate={useNavigate()} />
    }
  }

class SignUp extends Component{
    constructor(props) {
        super(props)
        this.host = 'http://localhost:8080'
        this.state = {
            username: "",
            password: "",
            email: "",
            error: null
        }
    }


    setUsername = (e) => {
        this.setState({username: e.target.value})
    }

    setPassword = (e) => {
        this.setState({password: e.target.value})
    }

    setEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handleError = () => {
        this.setState({error: null})
    }

    handleSubmit = () => {
        this.props.signUp({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })
    }



    render() {
        return(
        <div>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20vh",
                component:"form",
                justifyContent: "space-between"
            }}>
                <Grid  container direction={"column"} spacing={2} sx={{
                    alignItems:"center",
                }}>
                    <Grid item>
                        <Typography
                        sx = {{
                            fontFamily: "Comic Sans MS",
                        }}
                        variant="h4">
                            Create Your Own Account
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                        sx={{
                            width:"25vh",
                        }}
                        label="Username"
                        variant="standard"
                        required
                        name="username"
                        value={this.state.username}
                        onChange={this.setUsername}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        sx={{
                            width:"25vh",
                        }}
                        label="Email"
                        variant="standard"
                        type="email"
                        name="email"
                        required
                        value={this.state.email}
                        onChange={this.setEmail}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        sx={{
                            width:"25vh",
                        }}
                        label="Password"
                        variant="standard"
                        type="password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.setPassword}
                        />
                    </Grid>
                    <Box sx = {{
                        display: "flex",
                        flexDirection:"row",
                        marginTop: "2vh",
                        width:"40%",
                        justifyContent: "space-between"
                    }}>
                        <Button variant="contained" 
                        style={{
                            backgroundColor:"#9c6644"
                        }}>
                        Go Back to Shop
                        </Button>
                        <Button type="submit" variant="contained"
                        style={{
                            backgroundColor:"#9c6644"
                        }}
                        onClick={this.handleSubmit}>
                        Signup
                        </Button>
                    </Box>
                </Grid>

            </Box>

        </div>
        )

    }
}

export default withNavigation(SignUp)