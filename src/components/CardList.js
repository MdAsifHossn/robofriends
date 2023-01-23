import React from "react";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <div
            className="tc bg-light-green dib br3 pa3 ma2 grow shadow5"
            key={i}
          >
            <img
              alt="Robots"
              src={`https://robohash.org/${user.id}?size=200x200`}
            />
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
