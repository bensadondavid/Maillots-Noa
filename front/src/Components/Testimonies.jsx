import React, { useEffect, useState } from "react";

const Testimonies = () => {

  const testimonies = [
    {
      name: "Leah M.",
      location: "Paris",
      text: "J'adore le design unique et la qualité des matériaux utilisés. Le maillot de bain reste confortable même après plusieurs heures de baignade.",
    },
    {
      name: "Yael B.",
      location: "Tel Aviv",
      text: "The customer service is exceptional. They helped me find the right size and the product arrived quickly and in perfect condition.",
    },
    {
      name: "Sarah C.",
      location: "Jerusalem",
      text: "המגוון של הדגמים מרשים מאוד. הצבעים זוהרים והבד נעים מאוד ללבישה.",
    },
    {
      name: "Rivka S.",
      location: "Lyon",
      text: "Excellent rapport qualité-prix. La livraison a été rapide et les maillots de bain sont encore mieux en vrai que sur les photos.",
    },
    {
      name: "Esther G.",
      location: "Haifa",
      text: "I'm very satisfied with my purchase. The sizes are perfect and the swimsuits really flatter the figure.",
    },
    {
      name: "Naomi K.",
      location: "Marseille",
      text: "La qualité des maillots de bain est exceptionnelle et le service client est très professionnel. Je recommande vivement !",
    },
    {
      name: "Miriam D.",
      location: "Ramat Gan",
      text: "הבגדים מדהימים והשירות נהדר. המשלוח היה מהיר והכל הגיע במצב מושלם.",
    },
    {
      name: "Hannah L.",
      location: "Nice",
      text: "The designs are trendy and the quality is excellent. I'm happy with my purchase and recommend this brand.",
    },
    {
      name: "Rachel T.",
      location: "Beersheba",
      text: "אני אוהבת את הצבעים והעיצובים המיוחדים. הבד איכותי ונעים על העור.",
    }
  ];
  const [index, setIndex] = useState(0);

  const PreviousItem = () => {
    setIndex(previousIndex => (previousIndex === 0 ? testimonies.length - 1 : previousIndex - 1));
  };

  const NextItem = () => {
    setIndex(previousIndex => (previousIndex === testimonies.length - 1 ? 0 : previousIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NextItem();
    }, 6000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <div className="testimonies-container">
      <div className="testimonies-elements" key={index}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24" width="120" height="24">
          <path fill="#000000" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          <path fill="#000000" d="M36 17.27L42.18 21l-1.64-7.03L46 9.24l-7.19-.61L36 2l-2.81 6.63L26 9.24l5.46 4.73L29.82 21z"/>
          <path fill="#000000" d="M60 17.27L66.18 21l-1.64-7.03L70 9.24l-7.19-.61L60 2l-2.81 6.63L50 9.24l5.46 4.73L53.82 21z"/>
          <path fill="#000000" d="M84 17.27L90.18 21l-1.64-7.03L94 9.24l-7.19-.61L84 2l-2.81 6.63L74 9.24l5.46 4.73L77.82 21z"/>
          <path fill="#000000" d="M108 17.27L114.18 21l-1.64-7.03L118 9.24l-7.19-.61L108 2l-2.81 6.63L98 9.24l5.46 4.73L101.82 21z"/>
          <path d="M0 0h120v24H0z" fill="none"/>
        </svg>
        <p>{testimonies[index].text}</p>
        <p className="testimonie-name">{testimonies[index].name}, {testimonies[index].location}</p>
        <button className="previous-button" onClick={PreviousItem}> &lt; </button>
        <button className="next-button" onClick={NextItem}>&gt;</button>
      </div>
    </div>
    </>
  );
};

export default Testimonies;