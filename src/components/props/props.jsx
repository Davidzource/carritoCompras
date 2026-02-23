import React from "react";
import "./props.css";

/* Componente reutilizable */
function AvatarProfile({ personName, personImageUrl }) {
return (
    <div className="avatarProfileContainer">
      <img
        className="avatarProfileImage"
        src={personImageUrl}
        alt={personName}
      />
      <h3 className="avatarProfileName">{personName}</h3>
    </div>
  );
}

/* Componente principal */
function Props() {
    const scientistsList = [
        {
        personName: "Katsuko Saruhashi",
        personImageUrl: "https://i.imgur.com/YfeOqp2.jpg",
        },
        {
        personName: "Aklilu Lemma",
        personImageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
        },
        {
        personName: "Lin Lanying",
        personImageUrl: "https://i.imgur.com/5XgJ6FAs.jpg",
        },
    ];

    return (
        <section className="propsMainContainer">
        <h1 className="propsMainTitle">Props React</h1>

        <p className="propsMainDescription">
            Este componente demuestra el uso de <strong>props</strong> en React.
            Cada Avatar recibe datos desde el componente padre, permitiendo
            reutilizar el mismo componente con diferente información.
        </p>

        <div className="avatarsWrapper">
            {scientistsList.map((scientist, index) => (
            <AvatarProfile
                key={index}
                personName={scientist.personName}
                personImageUrl={scientist.personImageUrl}
            />
            ))}
        </div>
        </section>
    );
}

export default Props;