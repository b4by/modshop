import './index.scss';
import SectionCard from '../SectionCard';

const Section = ({ products }) => {

  return (
    products.map(category => {
      return (
        <div className="section" key={category.id}>
          <h2 className="section__title">{category.name}</h2>
          <div className="section__content">
            <SectionCard items={category.items}/>
          </div>
        </div>
      )
    })
  )
}

export default Section;