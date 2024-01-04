import { useState, useEffect } from "react";
import axios from "axios";

function LocationServerData(props) {
  return (
    <main className="main-container">
      <div className="location-list">
        {props.locationServerState.map((location) => (
          <div className="location-content" key={location.eid}>
            <div className="big-image-container">
              <img src={location.photos[0]} alt="image-Location" />
            </div>
            <div className="text-container">
              <h2 className="text-title">{location.title}</h2>
              <p className="text-description">
                {location.description.substring(0, 100)}
              </p>
              <a className="read-more" href={location.url}>
                อ่านต่อ
              </a>
              <div className="tag-container">
                <span>หมวด</span>
                {location.tags.map((tag, index) =>
                  index === location.tags.length - 1 ? (
                    <>
                      <span>และ</span>
                      <a href="#" key={index}>
                        {tag}
                      </a>
                    </>
                  ) : (
                    <a key={index} href="#">
                      {tag}
                    </a>
                  )
                )}
              </div>
              <div className="mini-image-container">
                <img src={location.photos[1]} alt="image-Location" />
                <img src={location.photos[2]} alt="image-Location" />
                <img src={location.photos[3]} alt="image-Location" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default LocationServerData;
