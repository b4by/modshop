import { STRAPI_API_URL } from '../../api/api';
import './index.scss';

const SectionCard = ({items}) => {

  return (
   items.map(item => {
     const imgUrl = `${STRAPI_API_URL}${item.image[0].url}`;
     return (
      <div className="card" key={item.id}>
        <img className="card__img" src={imgUrl} alt="card-item"/>
        <div className="card__description">
          <h2 className="card__name">{item.name}</h2>
          <p className="card__price">USD {item.price.toFixed(2)}</p>
        </div>
      </div>
     )
   })
  );
}

export default SectionCard;