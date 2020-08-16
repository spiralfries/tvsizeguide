import React, { Component } from "react";
import "../../styles/reset.css";
import "./Sizeguide.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import Wrapper from "../../components/wrapper/wrapper";
import Intro from "../../components/intro/intro";
import Loungeimage from "../../components/loungeimage/loungeimage";
import Tvspec from "../../components/tvspec/tvspec";
import Catbutton from "../../components/catbutton/catbutton";
import Sizebutton from "../../components/sizebutton/sizebutton";
import Lounge43Wall from "../../images/lounge43wall.png";
import Lounge50Wall from "../../images/lounge50wall.png";
import Lounge55Wall from "../../images/lounge55wall.png";
import Lounge65Wall from "../../images/lounge65wall.png";
import Lounge75Wall from "../../images/lounge75wall.png";
import Lounge43Stand from "../../images/lounge43stand.png";
import Lounge50Stand from "../../images/lounge50stand.png";
import Lounge55Stand from "../../images/lounge55stand.png";
import Lounge65Stand from "../../images/lounge65stand.png";
import Lounge75Stand from "../../images/lounge75stand.png";

class Tvsizeguide extends Component {
  state = {
    selectedTv: [
      {
        id: 0,
        category: "wall",
        size: "43",
        width: "97",
        height: "56",
        depth: "6",
      },
    ],
    activeCatButton: 0,
    activeSizeButton: 0,
    catButtonIndex: 0,
    sizeButtonIndex: 0,
  };

  render() {
    const tvCategories = [
      { id: 0, category: "wall", catUrl: "/" },
      { id: 1, category: "stand", catUrl: "/stand" },
    ];

    const WallTvData = [
      {
        id: 0,
        category: "wall",
        size: "43",
        width: "97",
        height: "56",
        depth: "6",
      },
      {
        id: 1,
        category: "wall",
        size: "50",
        width: "113",
        height: "65",
        depth: "6",
      },
      {
        id: 2,
        category: "wall",
        size: "55",
        width: "124",
        height: "72",
        depth: "6",
      },
      {
        id: 3,
        category: "wall",
        size: "65",
        width: "146",
        height: "84",
        depth: "6",
      },
      {
        id: 4,
        category: "wall",
        size: "75",
        width: "167",
        height: "96",
        depth: "6",
      },
    ];
    const StandTvData = [
      {
        id: 0,
        category: "stand",
        size: "43",
        width: "197",
        height: "64",
        depth: "35",
      },
      {
        id: 1,
        category: "stand",
        size: "50",
        width: "1113",
        height: "74",
        depth: "35",
      },
      {
        id: 2,
        category: "stand",
        size: "55",
        width: "124",
        height: "80",
        depth: "36",
      },
      {
        id: 3,
        category: "stand",
        size: "65",
        width: "146",
        height: "92",
        depth: "39",
      },
      {
        id: 4,
        category: "stand",
        size: "75",
        width: "167",
        height: "105",
        depth: "39",
      },
    ];

    const WallTypes = [
      Lounge43Wall,
      Lounge50Wall,
      Lounge55Wall,
      Lounge65Wall,
      Lounge75Wall,
    ];

    const StandTypes = [
      Lounge43Stand,
      Lounge50Stand,
      Lounge55Stand,
      Lounge65Stand,
      Lounge75Stand,
    ];

    let intro,
      loungeimage,
      tvSpec,
      categories,
      wallSizes,
      standSizes = null;
    let { activeCatButton } = this.state;
    let { activeSizeButton } = this.state;
    let [{ category, size, width, height, depth }] = this.state.selectedTv;

    const catButtonChangeHandler = (catButtonIndex, category) => {

      this.setState({
        activeCatButton: catButtonIndex
      });

      let activeCategory = null;

      catButtonIndex === 0 ? activeCategory = "wall" : activeCategory = "stand";

      let sizeButtonIndex = this.state.sizeButtonIndex;

            if(activeCategory === "wall") {
              let { id, size, width, height, depth } = WallTvData[sizeButtonIndex];
                this.setState({
                  selectedTv: [
                    {
                      id: id,
                      category: activeCategory,
                      size: size,
                      width: width,
                      height: height,
                      depth: depth
                    },
                  ]
                })
                  
            } else if(category ==="stand") {

              let { id, size, width, height, depth } = StandTvData[sizeButtonIndex];
              this.setState({
                selectedTv: [
                  {
                    id: id,
                    category: activeCategory,
                    size: size,
                    width: width,
                    height: height,
                    depth: depth
                  },
                ]
              })
            };
    };

    const sizeButtonChangeHandler = (sizeButtonIndex, category) => {
      this.setState({
        activeSizeButton: sizeButtonIndex,
      });

      if (category === "wall") {
        let { id, size, width, height, depth } = WallTvData[sizeButtonIndex];

        this.setState({
          selectedTv: [
            {
              id: id,
              category: category,
              size: size,
              width: width,
              height: height,
              depth: depth,
            },
          ],
          sizeButtonIndex: sizeButtonIndex,
        });
      } else if (category === "stand") {
        let { id, category, size, width, height, depth } = StandTvData[
          sizeButtonIndex
        ];

        this.setState({
          selectedTv: [
            {
              id: id,
              category: category,
              size: size,
              width: width,
              height: height,
              depth: depth,
            },
          ],
          sizeButtonIndex: sizeButtonIndex,
        });
      }
    };

    if (tvCategories.length > 0) {
      intro = <Intro />;

      categories = (
        <ul className="CategoryWrapper">
          {tvCategories.map((cat, index) => {
            return (
              <li key={cat.id}>
                <Link to={`${cat.catUrl}`}>
                  <Catbutton
                    label={cat.category}
                    activeCatButton={activeCatButton}
                    catButtonIndex={index}
                    clicked={() => catButtonChangeHandler(index, cat.category)}
                  ></Catbutton>
                </Link>
              </li>
            );
          })}
        </ul>
      );

      wallSizes = (
        <ul className="SizesWrapper">
          {WallTvData.map((tv, index) => {
            return (
              <li key={tv.id}>
                <Sizebutton
                  label={tv.size}
                  activeSizeButton={activeSizeButton}
                  sizeButtonIndex={index}
                  clicked={() => sizeButtonChangeHandler(index, tv.category)}
                ></Sizebutton>
              </li>
            );
          })}
        </ul>
      );

      standSizes = (
        <ul className="SizesWrapper">
          {StandTvData.map((tv, index) => {
            return (
              <li key={tv.id}>
                <Sizebutton
                  label={tv.size}
                  activeSizeButton={activeSizeButton}
                  sizeButtonIndex={index}
                  clicked={() => sizeButtonChangeHandler(index, tv.category)}
                ></Sizebutton>
              </li>
            );
          })}
        </ul>
      );

      tvSpec = (
        <Tvspec
          category={category}
          size={size}
          width={width}
          height={height}
          depth={depth}
        ></Tvspec>
      );

      loungeimage = (
        <div className="LoungeWrapper">
          <Route path="/" exact>
            <Loungeimage
              imgUrl={WallTypes[this.state.sizeButtonIndex]}
              altText="Lounge Image with television"
            ></Loungeimage>
            {wallSizes}
            {tvSpec}
          </Route>
          <Route path="/stand" exact>
            <Loungeimage
              imgUrl={StandTypes[this.state.sizeButtonIndex]}
              altText="Lounge Image with television"
            ></Loungeimage>
            {standSizes}
            {tvSpec}
          </Route>
        </div>
      );
    }
    return (
      <Wrapper>
        {intro}
        <Router>
          {loungeimage}
          {categories}
        </Router>
      </Wrapper>
    );
  }
}
export default Tvsizeguide;