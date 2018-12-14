import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;
const Category = styled.div`
  position: relative;
  cursor: pointer;
  img {
    height: 600px;
  }
  p {
    color: #fff;
    font-size: 3rem;
    font-weight: 900;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const CategoriesArr = [
  {
    value: "Gaming",
    label: "gaming",
    img:
      "https://res.cloudinary.com/da91pbpmj/image/upload/v1544302690/art-5-desktop-2x.jpg"
  },
  {
    value: "Social",
    label: "social",
    img:
      "https://res.cloudinary.com/da91pbpmj/image/upload/v1544299619/party-7-desktop-2x.jpg"
  },
  {
    value: "Food & Drink",
    label: "food drink",
    img:
      "https://res.cloudinary.com/da91pbpmj/image/upload/v1544299616/food-3-desktop-2x.jpg"
  },
  {
    value: "Sport & Wellness",
    label: "sport & wellness",
    img:
      "https://res.cloudinary.com/da91pbpmj/image/upload/v1544302605/sports-2-desktop-2x.jpg"
  },
  {
    value: "Business",
    label: "Business",
    img:
      "https://res.cloudinary.com/da91pbpmj/image/upload/v1544302605/business-6-desktop-2x.jpg"
  },
  {
    value: "Parties",
    label: "parties",
    img:
      "https://res.cloudinary.com/da91pbpmj/image/upload/v1544299619/party-7-desktop-2x.jpg"
  }
];

class Categories extends Component {
  render() {
    return (
      <CategoriesWrapper>
        {CategoriesArr.map(category => {
          return (
            <Category key={category.value}>
              <Link
                href={{
                  pathname: "category",
                  query: { query: category.value }
                }}
              >
                <img src={category.img} alt={category.value} />
              </Link>
              <p>{category.value}</p>
            </Category>
          );
        })}
      </CategoriesWrapper>
    );
  }
}

export default Categories;
