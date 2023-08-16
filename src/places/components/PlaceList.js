import PlaceItem from './PlaceItem';
import './PlaceList.css'

const PlaceList = ({ items }) => {
  if (items.length === 0) {
    return <div>
      <div className='place-list center'>
        <h2>장소가 없습니다. <br />추가하시겠습니까??</h2>
        <button>장소를 공유해주세요</button>
      </div>
    </div>
  }

  return <ul className='place-list'>
    {items.map((place) => <PlaceItem
      key={place.id}
      id={place.id}
      image={place.imageUrl}
      title={place.title}
      description={place.description}
      address={place.address}
      creatorId={place.creator}
      coordinates={place.location}
    />)}
  </ul>
};

export default PlaceList;