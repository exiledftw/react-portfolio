import profilePic from "../assets/image.png"

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture." />
            <h2 className="card-title">ExiledFTW</h2>
            <p className="card-text">I am a Software Engineer and a Gamer.</p>

        </div>
    );

}

export default Card;
