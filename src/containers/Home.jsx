import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const Home = ({ myList, trends, originals }) => {
  const lists = [myList, trends, originals];
  const categories = ["Mi Lista", "Tendencias", "Originales"];

  return (
    <div className="home">
      <Search isHome />
      {categories.map((category, index) => {
        return (
          lists[index].length > 0 && (
            <Categories key={category} title={category}>
              <Carousel>
                {lists[index].map((item) => {
                  return (
                    <CarouselItem
                      key={item.id}
                      {...item}
                      type={category === "Mi Lista" ? true : false}
                    />
                  );
                })}
              </Carousel>
            </Categories>
          )
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
