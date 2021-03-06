import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        console.log(data);
        break;
      case "web":
        setData(webPortfolio);
        console.log(data);
        break;
      case "mobile":
        setData(mobilePortfolio);
        console.log(data);
        break;
      case "design":
        setData(designPortfolio);
        console.log(data);
        break;
      case "content":
        setData(contentPortfolio);
        console.log(data);
        break;
      default:
        setData(featuredPortfolio);
        console.log(data);
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div className='item'>
            <img src={d.img} alt='anything' />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
