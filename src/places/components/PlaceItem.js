import { useState } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import './PlaceItem.css'

const PlaceItem = ({ id, image, title, description, address, creatorId, coordinates }) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return <div>
    <Modal
      show={showMap}
      onCancel={closeMapHandler}
      header={address}
      contentClass='place-item__modal-content'
      footerClass='place-item__modal-actions'
      footer={<Button onClick={closeMapHandler}>닫기</Button>}
    >
      <div className='map-container'>
        <Map center={coordinates} zoom={16} />
      </div>
    </Modal>
    <li className='place-item'>
      <div className='place-item__content'>
        <div className='place-item__image'>
          <img src={image} alt={title} />
        </div>
        <div className='place-item__info'>
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className='place-item__actions'>
          <Button inverse onClick={openMapHandler}>지도에서 보기</Button>
          <Button to={`/places/${id}`}>수정</Button>
          <Button danger>삭제</Button>
        </div>
      </div>
    </li>
  </div>
};

export default PlaceItem;