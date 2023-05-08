
import '../styles/card.css'

const Card = ({record}) => {
  
  return (
    <div className='card'>
      <a href={record.imageUrl}>
      <img
        src={record.imageUrl}
        className="card-img-top"
        alt="Cover from de disk"
      />

      </a>
      
      <div className="card-body">
        <h5 className="card-title fs-6   ">{record.name}</h5>
        <p className="card-text">
         {record.release}
        </p>
      </div>
    </div>
  );
};

export default Card;
