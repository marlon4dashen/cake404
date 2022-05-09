import { Typography, Box, ThemeProvider, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { createTheme, IconButton, iconButtonClasses } from "@mui/material";
import { Component } from "react";
import ProductCard from "../components/ProductCard"

class Shop extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }

        this.example = {
            id: "1001",
            name: "Black Forest",
            image: "../assets/products/black_forest.jpeg",
            price: "From $50.00"
        }
    }


    shopTheme = createTheme({
        typography: {
            fontWeight: "bold",
            fontFamily: "Comic Sans MS"
        },
        palette: {
            text: {
                primary: "black"
            }
        }
    })

    render() {
        return (
            <div className="shop">
                <ThemeProvider theme={this.shopTheme}>
                    <CssBaseline />
                    <Box>
                        <Typography variant="h3" color="text.primary" align="center"> Products </Typography>
                        <Box>

                        </Box>
                        <Grid container spacing={24}>
                            <Grid item>
                                <ProductCard  productInfo={this.example}/>
                            </Grid>
                        </Grid>
                    </Box>
                </ThemeProvider>
            </div>
        )
    }
}

export default Shop