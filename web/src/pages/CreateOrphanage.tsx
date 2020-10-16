import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

import { FiPlus } from "react-icons/fi";

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/create-orphanage.css';
import Sidebar from '../components/Sidebar';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function CreateOrphanage() {
 

  return (
    <div id="page-create-orphanage">
     <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" 
              />

              <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nom</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">A propos <span>Maximum 300 caractères</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Photos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visites</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instructions</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nom</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Ouvert le weekend</label>

              <div className="button-select">
                <button type="button" className="active">Oui</button>
                <button type="button">Non</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmer
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
