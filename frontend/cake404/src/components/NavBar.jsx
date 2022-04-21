import { AppBar, IconButton, Toolbar, Box, Typography, createTheme,
    Button, Menu, MenuItem, Grid, Card, CardActionArea, CardMedia, CardContent, Avatar, ThemeProvider, CssBaseline, rgbToHex } from "@mui/material";
import { height, padding } from "@mui/system";
import React from "react";
import { Component } from "react";
import logo from "../assets/logos/logo1.png";
import formal from "../assets/logos/formal.jpeg";
import everyday from "../assets/logos/everyday.jpeg";
import diet from "../assets/logos/diet.jpeg";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router";
import SignupDrawer from "./SignupDrawer";

export function withNavigation(Children) {
    return (props) => {
      return <Children {...props} navigate={useNavigate()} />
    }
  }

class NavBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            color: false,
            loggedin:false,
            shop:false,
            OpenShopMenu: false,
            anchorElUser: null,
            toggleSignup: false
        }
        this.shopmenu = {
            "Everyday": {
                "img": everyday,
                "description": "Something to satisfy your everyday cravings"
            },
            "Formal" : {
                "img": formal,
                "description": "Celebrate the formality"
            },
            "Diet": {
                "img": diet,
                "description": "Eating is another way of getting fit"
            },
        }

        this.pages = ["Home", "About", "Contact"]
    }

    withColor = createTheme({
        palette: {
            primary : {
                main: "#fefae0"
            },
            background: {
                paper: "#fefae0"
            }
        }
    })

    withoutColor = createTheme({
        palette: {
            primary: {
                main: "rgb(255, 0, 0, 0)"
            },
            background: {
                paper: "rgb(255, 0, 0, 0)"
            }
        }
    })

    login = () => {
        this.setState({toggleSignup: true})
        //log in
    }

    logout = () => {
        this.setState({loggedin: false})
        //log out
    }

    handleOpenShopMenu = (event) => {
        this.setState({OpenShopMenu: true})
        console.log(this.shopmenu.Formal)
    }

    handleOpenUserMenu = (event) => {
        this.setState({anchorElUser: event.currentTarget})
    }

    handleCloseShopMenu = (event) => {
        this.setState({OpenShopMenu: false})
    }

    handleCloseUserMenu = (event) => {
        this.setState({anchorElUser: null})
    }

    pagesOnClick = (page) => {
        this.setState({OpenShopMenu: false})
        this.setState({anchorElUser: null})
        this.props.navigate("../" + page.toLowerCase())
    }

    handleMouseOff = () => {
        this.handleCloseShopMenu()
        this.setState({color: false})
    }

    visibleBar = () => {
        this.setState({color: true})
    }

    closeSignUpPage = (success) => {
        this.setState({toggleSignup: false})
        if (success)
            this.setState({loggedin: true})
    }

    render() {
        return (
            <div>
                <ThemeProvider theme={this.state.color ? this.withColor : this.withoutColor}>
                    <CssBaseline/>
                    <div className="navbar" onMouseEnter={this.visibleBar} onMouseLeave={this.handleMouseOff}>
                        <AppBar position="fixed" color='primary' sx={{ 
                            display: "block",
                            boxShadow: "none"
                            }}>
                            {/* <Toolbar sx={{
                            }}> */}
                            <Box sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                    <Box sx={{
                                    }}>
                                        <img src={logo} alt="" height="180" width="180" />  
                                    </Box>
                                    <Box sx={{ 
                                        justifyContent: "space-between",
                                        flexGrow: "1"
                                    }}>
                                        <Button 
                                        className=""
                                        variant="text"
                                        sx={{
                                            color: "#7f5539",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            fontFamily: "Comic Sans MS"
                                        }}
                                        endIcon={<AddShoppingCartIcon />}
                                        onMouseEnter={this.handleOpenShopMenu}>
                                            Shop
                                        </Button>
                                        {this.pages.map(page => (
                                            <Button 
                                            variant="text"
                                            onClick={() => this.pagesOnClick(page)}
                                            sx={{
                                                color: "#7f5539",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                fontFamily: "Comic Sans MS"
                                            }}>
                                                {page}
                                            </Button>
                                        ))}
                                    </Box>
                                    {this.state.loggedin && <Box >
                                        <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={this.handleOpenUserMenu}
                                        color="inherit"
                                        >
                                        <Avatar src={logo} sx={{ width: "70px", height: "70px"}}></Avatar>
                                        </IconButton>
                                        <Menu
                                        id="menu-appbar"
                                        anchorEl={this.state.anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(this.state.anchorElUser)}
                                        onClose={this.handleCloseUserMenu}
                                        >
                                        <MenuItem sx={{
                                            color: "black"
                                        }} onClick={this.handleCloseUserMenu}>Profile</MenuItem>
                                        <MenuItem sx={{
                                            color: "black"
                                        }} onClick={this.handleCloseUserMenu}>My account</MenuItem>
                                        </Menu>
                                    </Box>}
                                    {!this.state.loggedin && <Box sx={{
                                        paddingRight: "30px"
                                    }}>
                                        <Button 
                                            variant="text"
                                            onClick={this.login}
                                            sx={{
                                                color: "#7f5539",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                fontFamily: "Comic Sans MS"
                                            }}>
                                                SignIn
                                            </Button>
                                    </Box>}
                                </Box>
                                {this.state.OpenShopMenu && <Box 
                                    sx = {{
                                        position: "absolute",
                                        width: "100%"
                                    }}
                                    >
                                        <Grid container >
                                            {Object.keys(this.shopmenu).map(key => (
                                                <Grid item xs={4} > 
                                                    <Card>
                                                        <CardActionArea style={{
                                                            alignItems: 'center'}}>
                                                            <div style={{ display:'flex', justifyContent:'center', marginTop: '10px' }}>
                                                                <Avatar src={this.shopmenu[key].img} sx={{ width: 200, height: 200 }}/>
                                                            </div>         
                                                            <CardContent> 
                                                            <Typography gutterBottom variant="h5" component="div" align="center"
                                                            sx={{
                                                                color:"text.secondary",
                                                            }}>
                                                                {key}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary" align="center"
                                                            sx={{
                                                                fontSize: "15px"
                                                            }}>
                                                                {this.shopmenu[key].description}
                                                            </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>}                  
                            {/* </Toolbar> */}
                        </AppBar>
                    </div>
                </ThemeProvider>
                <SignupDrawer toggle={this.state.toggleSignup} onClose={this.closeSignUpPage}/>
            </div>
        )
    }
}

export default withNavigation(NavBar)