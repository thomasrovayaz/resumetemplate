import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const PorfolioItem = ({
  name,
  description,
  images,
  video,
  backgroundColor,
  company,
  logo,
  tags,
  url,
  months,
  quote,
}) => {
  const [t] = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="portfolio-item">
      <div className="overlay">
        <div className="portfolio-item-meta">
          <img className="logo" src={`${logo}`} />
          <h4 className="title">{name}</h4>
          <h5 className="description">{description}</h5>
          <div className="tags">
            <div
              className="tag time"
              style={{ borderColor: backgroundColor, color: backgroundColor }}
            >
              {t("months", { count: months })}
            </div>
            {tags &&
              tags.map((tag, idx) => (
                <div className="tag" style={{ backgroundColor }} key={idx}>
                  {tag}
                </div>
              ))}
          </div>
          {quote && (
            <div className="quote">
              <i className="fa fa-quote-left" />
              <div className="text">{quote.text}</div>
              <div className="author">{quote.author}</div>
            </div>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {t("viewProject")}
          </a>
        </div>
      </div>
      <div className="img-container" style={{ backgroundColor }}>
        {images &&
          images.map(({ url }, idx) => {
            return (
              <img
                key={idx}
                onClick={() =>
                  setActiveSlide((activeSlide + 1) % images.length)
                }
                src={`${url}`}
                style={{ display: idx !== activeSlide ? "none" : "block" }}
                className="item-img"
              />
            );
          })}
        {video}
      </div>
    </div>
  );
};
const Porfolio = ({ resumeData }) => {
  const [t] = useTranslation();
  return (
    <section id="portfolio">
      <h1>{t("works")}</h1>
      <div className="divider" />
      {resumeData.portfolio &&
        resumeData.portfolio.map((item) => <PorfolioItem {...item} />)}
    </section>
  );
};
export default Porfolio;
