import React from "react";
import { Typography, Box, ThemeProvider, CssBaseline, Grid, Select, MenuItem, TextField, Card, Button } from "@mui/material";
import { Component } from "react";
import { createTheme, IconButton, iconButtonClasses } from "@mui/material";
import {
    useParams,
    useSearchParams
  } from "react-router-dom";

export function withRouter(Children) {
    return (props) => {
      const match = { params: useParams(), query: useSearchParams() };
      return <Children {...props} match={match} />
    }
}

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: []
        }
    }
    componentDidMount() {
        const [search] = this.props.match.query
        const id = search.get('id')
        console.log(id)
        this.fetchItem(id)
        console.log(this.state)
    }

    fetchItem = (id) => {
        fetch("http://localhost:8080/collection/?id=" + id)
          .then(res => {
            res.json().then(resData => {
                console.log(resData)
                this.setState({
                    product: resData[0],
                })
            })
        })
    }

    shopTheme = createTheme({
        typography: {
            fontWeight: "bold",
            fontFamily: "Times New Roman"
        },
        palette: {
            text: {
                primary: "#373737"
            }
        }
    })
    render() {
        return (
            <div className="shop">
                <ThemeProvider theme={this.shopTheme}>
                    <CssBaseline />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginLeft: "30vh"
                    }}>
                        <Box
                            component="img"
                            sx={{
                                height: 600,
                                width: 600
                            }}
                            alt="item pic"
                            src= {"http://localhost:8080" + this.state.product.image}
                        />
                        <Box sx={{
                            width: "80%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            marginLeft: "10vh"
                        }}>
                            <Typography variant="h4"> {this.state.product.name} </Typography> 
                            <Typography variant="h4" pt={3}> ${this.state.product.price} </Typography> 
                            <Box sx={{
                                marginTop: "3vh"
                            }}>
                                <Typography variant="h6"> Quantity </Typography>
                                {/* <input type="number" name="numericInput" min="0" max="10" /> */}
                                <TextField
                                    type='number'
                                    required
                                    inputProps={{ max: 10, min: 0 }}
                                    sx={{
                                        marginTop: "1vh"
                                    }}
                                    variant='outlined' />
                            </Box>
                            <Button                                        
                                variant="contained"
                                sx={{
                                    width: "30%",
                                    marginTop: "10vh",
                                    bgcolor: "#7f4357",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    fontFamily: "Comic Sans MS"
                                }}> Add to Cart</Button>
                        </Box>
                    </Box>
                </ThemeProvider>
            </div>
        )
    }
}

export default withRouter(Product);