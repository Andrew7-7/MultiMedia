import { useState } from "react";
import "./App.css";
import trailerVideo from "./assets/Final_Trailer.mp4";
import andrew from "./assets/andrew.jpg";
import alvrian from "./assets/alvrian.jpg";
import eugene from "./assets/eugene.jpg";
import chris from "./assets/chris.jpg";
import arya from "./assets/arya.jpg";
import pierre from "./assets/pierre.jpg";
function App() {
  const [showMovie, setShowMovie] = useState(false);
  const AboutUsCard = ({
    name,
    image,
    role,
  }: {
    name: string;
    image: string;
    role: string;
  }) => {
    return (
      <div className="aboutUsDiv">
        <img className="aboutUsImage" src={image} />
        <p className="aboutUsName">{name}</p>
        <p className="roleName">{role}</p>
      </div>
    );
  };
  return (
    <>
      {showMovie ? (
        <div className="movieOuter">
          <div className="movieDiv">
            <div className="closeDiv">
              <p
                onClick={() => setShowMovie(false)}
                style={{ cursor: "pointer" }}
              >
                X
              </p>
            </div>
            <p>Movie</p>
            <iframe
              className="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nm2m7FiUxto"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : null}
      <div className="header">
        Welcome to our Short Movie
        <p className="madeBy">Made by Kelompok 5</p>
      </div>

      <div className="moviePlace">
        <div className="trailerDiv">
          <p className="title">PINJ*L Trailer</p>
          <video className="video" controls>
            <source src={trailerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="trailerDiv">
          <p className="title">Sinopsis</p>
          <div className="sinopsisDetail">
            di suatu kampus swasta di Indonesia terdapat satu mahasiswa yang
            kecanduan judi online. Teman-temannya mulai curiga dengan mahasiswa
            ini dari perubahan sikap dia dan perubahan cara ia mengeluarkan
            uang. Karena awalnya ia selalu menang, ia makin berani dan berani
            untuk mendeposit lebih banyak uang. Namun, isuatu hari ia kalah dan
            kehilangan semua uangnnya. Ia berusaha memninjam uang ke temannya
            dan tidak berhasil. Lalu ia memilih untuk meminjam uang melalui
            pinjaman online untuk bermain judi online lagi.
          </div>
        </div>
      </div>

      <div
        className="clickMovie"
        onClick={() => {
          setShowMovie(true);
        }}
      >
        Click Here to watch the movie
      </div>

      <div className="aboutUs">
        <p className="aboutUsTitle">About Us</p>
        <div className="bottomDiv">
          <AboutUsCard name={"Andrew"} image={andrew} role="Website" />
          <AboutUsCard
            name={"Eugene Emmanuelle Hervine"}
            image={eugene}
            role="Actor"
          />
          <AboutUsCard
            name={"Arya Yudhistira Ramadhan"}
            image={arya}
            role="Editor"
          />
        </div>
        <div className="bottomDiv">
          <AboutUsCard name={"Pierre Sitorus"} image={pierre} role="Script" />
          <AboutUsCard
            name={"Alvrian Timothius"}
            image={alvrian}
            role="Script"
          />
          <AboutUsCard
            name={"Christopher Jovison"}
            image={chris}
            role="Actor"
          />
        </div>
      </div>
    </>
  );
}

export default App;
