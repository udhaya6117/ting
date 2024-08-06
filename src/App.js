import logo from "../src/img/logo.png";
import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import banner from "../src/img/Frame.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import shop1 from "./img/Image 2.png";
import shop2 from "./img/image 3.png";
import shop3 from "./img/image 4.png";
import shop4 from "./img/image 5.png";
import shop5 from "./img/image 6.png";
import shop6 from "./img/_DSC3817.png";
import { useState, useEffect } from "react";

import earthimg1 from "./img/earth-img/image 7.png";
import earthimg2 from "./img/earth-img/image 8.png";
import earthimg3 from "./img/earth-img/shutterstock_530128414 copy 8.png";
import { Diversity1 } from "@mui/icons-material";

export const imagedhop = [
  {
    img: shop3,
  },
  {
    img: shop2,
  },
  {
    img: shop1,
  },
  {
    img: shop6,
  },
  {
    img: shop5,
  },
  {
    img: shop4,
  },
];

function App() {
  const [headerBackground, setHeaderBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScrollPosition > 0) {
        setHeaderBackground("black");
      } else {
        setHeaderBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <AppBar
        position="fixed"
        className="bar"
        sx={{ backgroundColor: headerBackground }}
      >
        <Toolbar>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigations">
            <text>about</text>
            <text>sustainability</text>
            <text>shop</text>
          </div>
          <div className="iconsplite">
            <div
              className="iconcs"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <ShoppingBagIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <AccountCircleIcon />
              </IconButton>
            </div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div className="bannerdiv" >
        <img src={banner} alt="" loading="lazy" />
        <div className="banner-content">
          <h1>Some People talk about saving the world.</h1>
          <h1> Some act</h1>
        </div>
      </div>

      <div className="Shop-sections">
        <Container>
          <div className="shop-title">
            <h1 className="heading-title">The earth seems pretty pleased!</h1>
            <button className="btn-shopnow"> shop now</button>
          </div>
        </Container>
        <Container>
          <div className="system-verstion">
            <ImageList
              sx={{ width: "100%" }}
              cols={3}
              gap={10}
              className="imglisted"
            >
              {imagedhop.map((item) => (
                <ImageListItem className="img-client" key={item.img}>
                  <img
                    srcSet={item.img}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <div className="mobile-version">
          <ImageList
              sx={{ width: "100%" }}
              cols={2}
              gap={10}
              className="imglisted"
            >
              {imagedhop.map((item) => (
                <ImageListItem className="img-client" key={item.img}>
                  <img
                    srcSet={item.img}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Container>
        <Container>
          <div className="livingupto-earth">
            <h1 className="heading-title"> Living up to earth-standard </h1>
          </div>
          <div className="img-box">
            <div className="earth-img-box">
              <img src={earthimg2} alt=""loading="lazy" />
              <div className="earth-img-box-content">
                <h2>custom craft</h2>
              </div>
              <p className="animate">
                Giving a sustainable form to your creative vision
              </p>
            </div>
            <div className="earth-img-box">
              <img src={earthimg1} alt="" className="x-img" loading="lazy" />
              <div className="earth-img-box-content">
                <h2>atelier</h2>
              </div>
              <p className="animate">
                A sustainable production unit to craft your next ceo-conscious
                collection
              </p>
            </div>
          </div>
          <div className="earth-img-box" style={{ marginTop: "20px" }}>
            <img src={earthimg3} alt="" loading="lazy" />
            <div className="earth-img-box-content">
              <h2>Corporate gifting </h2>
            </div>
            <p className="animate">
              When conscious working translates to conscious gifting
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
