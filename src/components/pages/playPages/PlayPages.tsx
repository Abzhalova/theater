import React from "react";
import "./PlayPages.scss";
import { useNavigate } from "react-router-dom";

const PlayPages = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate("/playDetails"); 
  };


  return (
    <section id="play">
      <div className="containet">
        <div className="play">
          <center>
            <h1>Спектакль</h1>
          </center>

          <h3>Өндүрүшкө даярдоо</h3>

          <div className="play--list-1">
            {" "}
            <div  onClick={handleClick} style={{ cursor: "pointer" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBsCprt-r-swVD6YdeT3ud3gDrtYcw4fcfw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
            <div  onClick={handleClick} style={{ cursor: "pointer" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBsCprt-r-swVD6YdeT3ud3gDrtYcw4fcfw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBsCprt-r-swVD6YdeT3ud3gDrtYcw4fcfw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBsCprt-r-swVD6YdeT3ud3gDrtYcw4fcfw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBsCprt-r-swVD6YdeT3ud3gDrtYcw4fcfw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
          </div>
          <h3>Негизги этап</h3>

          <div className="play--list-2">
            {" "}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy8u7XD39ac-gdWvbdnQ3i70Pbjc55NkMYw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>{" "}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy8u7XD39ac-gdWvbdnQ3i70Pbjc55NkMYw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>{" "}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy8u7XD39ac-gdWvbdnQ3i70Pbjc55NkMYw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy8u7XD39ac-gdWvbdnQ3i70Pbjc55NkMYw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>{" "}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy8u7XD39ac-gdWvbdnQ3i70Pbjc55NkMYw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy8u7XD39ac-gdWvbdnQ3i70Pbjc55NkMYw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>{" "}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLy8u7XD39ac-gdWvbdnQ3i70Pbjc55NkMYw&s"
                alt="img"
              />
              <h2>Агындылар</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayPages;
