import pic from '../assets/profile.jpg';

function Card () {
    return (
        <div className="card">
            <img src={pic} alt="placeholder" />
            <h2>Zafir</h2>
            <p>student</p>
        </div>
    )
}

export default Card;