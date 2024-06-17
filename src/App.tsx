import { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile-icon-design-free-vector.jpg";
import trailerVideo from "./assets/Final_Trailer.mp4";
function App() {
  const [showMovie, setShowMovie] = useState(false);
  const AboutUsCard = ({ name, image }: { name: string; image: string }) => {
    return (
      <div className="aboutUsDiv">
        <img className="aboutUsImage" src={image} />
        <p className="aboutUsName">{name}</p>
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
            <video width="600" controls>
              {/* <source
            src={`${process.env.PUBLIC_URL}/sample.mp4`}
            type="video/mp4"
          /> */}
              Your browser does not support the video tag.
            </video>
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
          <video width="600" controls>
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
          <AboutUsCard name={"Andrew"} image={profileImage} />
          <AboutUsCard
            name={"Eugene Emmanuelle Hervine"}
            image={profileImage}
          />
          <AboutUsCard name={"Arya Yudhistira Ramadhan"} image={profileImage} />
        </div>
        <div className="bottomDiv">
          <AboutUsCard name={"Pierre Sitorus"} image={profileImage} />
          <AboutUsCard name={"Alvrian Timothius"} image={profileImage} />
          <AboutUsCard name={"Christopher Jovison"} image={profileImage} />
        </div>
      </div>
    </>
  );
}

export default App;
