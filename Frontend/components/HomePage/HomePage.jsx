import HomePageCard from "./HomePageCard";

const HomePage = () => {
  return (
    <div>
      <HomePageCard
        Img="https://i.imgur.com/Eqdsrml.png"
        Header="Eastern Dishes"
        Description="Rich in flavors and history "
        Reversed={true}
        category="eastern"
      />
      <HomePageCard
        Img="https://i.imgur.com/m1rk0qZ.png"
        Header="Western Dishes"
        Description="Filling in summer, winter, fall and spring "
        Reversed={false}
        category="western"
      />
      <HomePageCard
        Img="https://i.imgur.com/ynpI9dr.png"
        Header="Drinks"
        Description="Wash down your meal with a cold drink"
        Reversed={true}
        category="drinks"
      />
    </div>
  );
};

export default HomePage;
