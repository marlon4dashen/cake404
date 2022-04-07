import { AppBar, IconButton, Toolbar, Box, Typography, 
    Button, Menu, MenuItem, Grid, Card, CardActionArea, CardMedia, CardContent, Avatar } from "@mui/material";
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


export function withNavigation(Children) {
    return (props) => {
      return <Children {...props} navigate={useNavigate()} />
    }
  }

class NavBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loggedin:false,
            shop:false,
            OpenShopMenu: false,
            anchorElUser: null
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

    login = () => {
        this.setState({loggedin: true})
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

    render() {
        return (
            <div className="navbar" onMouseLeave={this.handleCloseShopMenu}>
                <AppBar position="static" sx={{ bgcolor: "#e6ccb2"}}>
                    <Toolbar sx={{
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
                                }}>
                            
                                    {page}
                                </Button>
                            ))}

                        </Box>
                        <Box >
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
                        </Box>
                        {/* <Logo  height="180" width="180"/> */}
                    </Toolbar>
                </AppBar>
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
                                        backgroundColor: "#e6ccb2",
                                        alignItems: 'center'}}>
                                    {/* <CardMedia>
                                        <img src={this.shopmenu[key].img} alt={key} />
                                    </CardMedia> */}
                                    <div style={{ display:'flex', justifyContent:'center' }}>
                                        <Avatar src={this.shopmenu[key].img} sx={{ width: 200, height: 200 }}/>
                                    </div>         
                                        <CardContent style={{backgroundColor: "#e6ccb2"}}> 
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

            </div>

        )
    }



}

export default withNavigation(NavBar)