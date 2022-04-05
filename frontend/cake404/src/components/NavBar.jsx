import { AppBar, IconButton, Toolbar, Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { Component } from "react";
import { ReactComponent as Logo } from "../assets/logos/logo1.svg";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

class NavBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loggedin:false,
            shop:false,
            anchorElShop: null,
            anchorElUser: null
        }
        this.shoplist = ["l1", "l2", "l3"]
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
        this.setState({anchorElShop: event.currentTarget})
        console.log(event.currentTarget)
    }

    handleOpenUserMenu = (event) => {
        this.setState({anchorElUser: event.currentTarget})
    }

    handleCloseShopMenu = (event) => {
        this.setState({anchorElShop: null})
    }

    handleCloseUserMenu = (event) => {
        this.setState({anchorElUser: null})
    }

    render() {
        return (
            <div className="navbar">
                <AppBar position="static" sx={{ bgcolor: "#ffe8d6"}}>
                    <Toolbar>
                        <Logo  height="200" width="200"/>
                        <Box sx={{ 
                            display:"flex",
                            flexDirection: "row"
                         }}>
                            <Button 
                            className=""
                            variant="text"
                            startIcon={<AddShoppingCartIcon />}
                            onMouseEnter={this.handleOpenShopMenu}>
                                Shop
                            </Button>
                            <Menu
                              id="menu-appbar"
                              anchorEl={this.state.anchorElShop}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              keepMounted
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                              }}
                              open={Boolean(this.state.anchorElShop)}
                              onClose={this.handleCloseShopMenu}
                              sx={{
                                display: "block"
                              }}
                            >
                              {this.shoplist.map((item) => (
                                <MenuItem key={item} onClick={this.handleCloseShopMenu}>
                                  <Typography textAlign="center">{item}</Typography>
                                </MenuItem>
                              ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>

        )
    }



}

export default NavBar