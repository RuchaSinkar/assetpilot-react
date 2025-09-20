import React from 'react';

function FigureGif({ figure }) {
  return (
    <>
      {figure.map((fig, indx) => (
        <figure key={indx}>
          <img
            className="icon"
            src={fig.img}
            data-static={fig.img}
            data-gif={fig.gif}
            alt={fig.alt}
            width="130"
            title={fig.title}
            /*JavaScript for mouse enter-leave*/
            onMouseEnter={(e) => (e.currentTarget.src = fig.gif)}   // swap to GIF
            onMouseLeave={(e) => (e.currentTarget.src = fig.img)}   // swap back
          />
          <figcaption>{fig.name}</figcaption>
          <p className="img-des">{fig.para}</p>
        </figure>
      ))}
    </>
  );
}

export default FigureGif;
