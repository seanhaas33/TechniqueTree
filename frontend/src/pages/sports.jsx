import React, { useState } from 'react';
import './sports.css';

const sportsList = [
  {
    name: 'Basketball',
    image: 'https://i.guim.co.uk/img/media/7724418a554c1ba2e25df3efe31caf52167b802e/0_31_2942_1765/master/2942.jpg?width=465&dpr=1&s=none&crop=none',
    categories: ['Dribbling', 'Shooting', 'Passing', 'Defense'],
  },
  {
    name: 'Soccer',
    image: 'https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/news/2024/09/04/Palmer_celeb_Wolves_A_GettyImages-2168388839.jpg',
    categories: ['Shooting', 'Dribbling', 'Passing', 'Goalkeeping'],
  },
  {
    name: 'Tennis',
    image: 'https://media.npr.org/assets/img/2022/08/09/gettyimages-460481071-664b71a2f0a7b96e853d884a1a216345bbb740c3.jpg',
    categories: ['Serving', 'Volleying', 'Baseline Play', 'Footwork'],
  },
  {
    name: 'Baseball',
    image: 'https://s.yimg.com/ny/api/res/1.2/WgycYfiJSYZASvfZgdKj5w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2024-09/ab9e2d90-773f-11ef-bb7f-c2e33b3e5e2d',
    categories: ['Pitching', 'Batting', 'Fielding', 'Catching'],
  },
  {
    name: 'Football',
    image: 'https://s.yimg.com/ny/api/res/1.2/kpU1W4BB7GMkD5a1JOfAxA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2024-10/c27f31d0-9094-11ef-afcf-4f1dfc593643',
    categories: ['Quarterbacking', 'Tackling', 'Running', 'Receiving'],
  },
];

const SportsPage = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div className="sports-container fade-in">
      {!selectedSport ? (
        <div className="sports-list">
          <h1 className="slide-in">Select a Sport</h1>
          <div className="sports-grid slide-in">
            {sportsList.map((sport, index) => (
              <div
                key={index}
                className="sport-card grow"
                onClick={() => handleSportClick(sport)}
              >
                <img src={sport.image} alt={sport.name} />
                <h2>{sport.name}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="categories-view fade-in">
          <h1 className="slide-in">{selectedSport.name} Categories</h1>
          <div className="categories-grid slide-in">
            {selectedSport.categories.map((category, index) => (
              <button key={index} className="category-button grow">
                {category}
              </button>
            ))}
          </div>
          <button className="back-button grow" onClick={() => setSelectedSport(null)}>
            Back to Sports
          </button>
        </div>
      )}
    </div>
  );
};

export default SportsPage;