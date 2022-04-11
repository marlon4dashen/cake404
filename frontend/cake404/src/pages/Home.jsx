import React from "react";
import { Component } from "react";
import Box from "@mui/material/Box"
import { createTheme, IconButton, iconButtonClasses } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NavBar from "../components/NavBar";
import CakeBg1 from "../assets/backgrounds/cake_bg.jpeg"
import CakeBg2 from "../assets/backgrounds/cake_bg2.png"
import CakeBg3 from "../assets/backgrounds/cake_bg3.jpeg"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {themeOn : true}
        this.imageList = [
            {
              url: CakeBg1,
              caption: 'Slide 1'
            },
            {
              url: CakeBg2,
              caption: 'Slide 2'
            },
            {
              url: CakeBg3,
              caption: 'Slide 3'
            },
          ];
    }

    theme1 = createTheme({
        palette: {
            background: {
                default: "#9c6644"
            },
            text: {
                primary: "#F0F8FF"
            }
        }
    })

    theme2 = createTheme({
        palette: {
            background: {
                default: "#F4F1BB"
            },
            text: {
                primary: "#000000"
            }
        }
    })


    changeTheme = () => {
        this.setState({themeOn: !this.state.themeOn})
        console.log(this.state.themeOn)
    }

    render() {
        return (
            // <ThemeProvider theme={this.state.themeOn ? this.theme1 : this.theme2}>
            //     <CssBaseline />
                
                <div class="home" >
                    <NavBar/>
                    <Slide>
                     {this.imageList.map((slideImage, index)=> (
                        <div className="each-slide" key={index}>
                          <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                          </div>
                        </div>
                      ))} 
                    </Slide>
                </div>
                
            // </ThemeProvider>
        )
    }
}

export default Home;