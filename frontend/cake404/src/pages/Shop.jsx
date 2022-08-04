import { Typography, Box, ThemeProvider, CssBaseline, Grid, Select, MenuItem, TextField, Card } from "@mui/material";
import React from "react";
import {
    useParams,
    useNavigate
  } from "react-router-dom";
import { createTheme, IconButton, iconButtonClasses } from "@mui/material";
import { Component } from "react";
import ProductCard from "../components/ProductCard"


export function withRouter(Children) {
    return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} navigate={useNavigate()} />
    }
}



class Shop extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sortby: this.sortAlpha,
            searchby: "",
            products: [],
            select: ""
        }
    }

    componentDidMount() {
        const select = this.props.match.params.select
        this.fetchShopItems(select)
    }

    componentDidUpdate(prevProps){
        const select = this.props.match.params.select
        if (select !== prevProps.match.params.select){
            this.fetchShopItems(select) 
        }
 
    }


    fetchShopItems = (select) => {
        fetch("http://localhost:8080/collection/select/" + select)
          .then(res => {
            res.json().then(resData => {
                this.setState({
                    products: resData,
                    select: select
                })
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

    sortAlpha = () => {
        this.state.products.sort((a, b) => (a.name > b.name ? 1 : -1))
    }

    sortPrice = () => {
        this.state.products.sort((a, b) => a.price - b.price)
    }

    search = (e) => {
        this.setState({
            searchby: e.target.value
        })
    }

    render() {
        return (
            <div className="shop">
                <ThemeProvider theme={this.shopTheme}>
                    <CssBaseline />
                    <Box>
                        <Typography variant="h3" color="text.primary" align="center"> {this.select} Products </Typography>
                        <Box sx={{
                            margin: "5vh",
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <Box sx={{
                                width: "20%",
                                height: "50%",
                                paddingTop: "1vh",
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
                                    sx={{marginTop: "3vh"}}
                                >
                                    <MenuItem value={this.sortAlpha}>
                                        Alphabetically A-Z
                                    </MenuItem>
                                    <MenuItem value={this.sortPrice}>
                                        Price Low to High
                                    </MenuItem>
                                </Select>
                                <Typography variant="h5" mt={3}>
                                    Filter By
                                </Typography>
                                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.search} sx={{marginTop: "3vh"}} focused/>
                            </Box>
                            {this.state.sortby()}
                            <Grid container spacing={10}>
                                {this.state.products.filter(p => p.name.toLowerCase().includes(this.state.searchby)).map(p => {
                                    return (
                                        <Grid item xs={4}>
                                            <ProductCard productInfo={p}/>
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