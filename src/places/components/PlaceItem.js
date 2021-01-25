import { useState } from 'react'

import './PlaceItem.css'
import Card from '../../shared/components/UIElement/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElement/Modal'
// import Map from '../../shared/components/UIElement/Map'

const PlaceItem = ({ id, image, title, description, address, creator, coordinate }) => {
  const [showMap, setShowMap] = useState(false)

  return (
    <>
      <Modal show={showMap}
             onCancel={() => setShowMap(false)}
             header={address}
             contentClass="place-item__modal-content"
             footerClass="place-item__modal-actions"
             footer={<Button onClick={() => setShowMap(false)}>CLOSE</Button>}
      >
        <div className="map-container">
          {/*<Map center={coordinate} zoom={16}/>*/}
          <h1>The map</h1>
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title}/>
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={() => setShowMap(true)}>VIEW ON MAP</Button>
            <Button to={`/places/${id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  )
}

export default PlaceItem
