import React from "react";
import { Component } from "react";
import { useNavigate } from "react-router";
import { Card, Box, CardMedia, CardActionArea, CardContent,Typography } from "@mui/material"


function ProductCard(props) {


    const productInfo = props.productInfo
    // productInfo = {
    //     id: 
    //     name: 
    //     image: 
    //     price: 
    // }

    console.log(props)

    const navigate = useNavigate()

    const handleNavigation = (id) => {
        console.log(id)
        navigate('../products?id=' + id)
    }

    return (
        <div>
            <Card>
                <CardActionArea style={{
                    alignItems: 'center'}}
                    onClick={() => handleNavigation(productInfo._id)}
                >
                    <CardMedia
                        component="img"
                        height="400"
                        width="250"
                        image={"http://localhost:8080" + productInfo.image}
                        alt={productInfo.name}
                    />
                    <CardContent> 
                        <Typography gutterBottom variant="h5" component="div" align="center"
                        sx={{
                            color:"text.secondary",
                        }}>
                            {productInfo.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" align="center">
                            {productInfo.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )

}

export default ProductCard