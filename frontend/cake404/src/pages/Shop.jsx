import { Typography, Box, ThemeProvider, CssBaseline, Grid, Select, MenuItem, TextField } from "@mui/material";
import React from "react";
import {
    useParams
  } from "react-router-dom";
import { createTheme, IconButton, iconButtonClasses } from "@mui/material";
import { Component } from "react";
import ProductCard from "../components/ProductCard"


export function withRouter(Children) {
    return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
    }
  }



class Shop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sortby: "Alphabetically",
            searchby: "",
            products: []
        }

        this.example = {
            id: "1001",
            name: "Black Forest",
            image: "../assets/products/black_forest.jpeg",
            price: "From $50.00"
        }

        
    }

    componentDidMount() {

        const select = this.props.match.params.select

        fetch("http://localhost:8080/collection/" + select)
          .then(res => {
            res.json().then(resData => {
                console.log(resData)
                this.setState({
                    products: resData
                })
                console.log(this.state)
            })
          })
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
        
    changeSort = (e) => {
        this.setState({
            sortby: e.target.value
        })
    }

    render() {
        return (
            <div className="shop">
                <ThemeProvider theme={this.shopTheme}>
                    <CssBaseline />
                    <Box>
                        <Typography variant="h3" color="text.primary" align="center"> Products </Typography>
                        <Box sx={{
                            margin: "5vh",
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Box sx={{
                                width: "20%",
                                marginRight: "5vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}>
                                <Typography variant="h5">
                                    Sort By
                                </Typography>
                                <Select
                                    value={this.state.sortby}
                                    onChange={this.changeSort}
                                >
                                    <MenuItem value={'Alphabetically'}>
                                        Alphabetically A-Z
                                    </MenuItem>
                                    <MenuItem value={'Price'}>
                                        Price
                                    </MenuItem>
                                </Select>
                                <Typography variant="h5">
                                    Filter By
                                </Typography>
                                <TextField />
                            </Box>
                            <Grid container spacing={24}>
                                {this.state.products.map(p => {
                                    return (
                                        <Grid item>
                                            <ProductCard  productInfo={p}/>
                                        </Grid>
                                    )
                                })}                              
                            </Grid>
                        </Box>
                    </Box>
                </ThemeProvider>
            </div>
        )
    }
}

export default withRouter(Shop)