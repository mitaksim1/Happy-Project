import React, { useState, FormEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from "react-icons/fi";

import '../styles/pages/create-orphanage.css';
import Sidebar from '../components/Sidebar';
import mapIcon from "../utils/mapIcon";

export default function CreateOrphanage() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);

  function handleMapClick(event: LeafletMouseEvent) {
    // Getting latitude and longitude in the map 
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
}

function handleSubmit(event: FormEvent) {
  event.preventDefault();

  console.log({
    position,
    name, 
    about, 
    instructions,
    opening_hours
  });
}
 
  return (
    <div id="page-create-orphanage">
     <Sidebar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" 
              />

              {/* Condition to display marker icon in the map */}
              { position.latitude !== 0 && (
                <Marker 
                interactive={false} 
                icon={mapIcon} 
                position={[
                  position.latitude, 
                  position.longitude
                ]} 
                />
              )} 
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nom</label>
              <input 
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">A propos <span>Maximum 300 caractères</span></label>
              <textarea 
                id="name"   
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)} 
              />
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
              <textarea 
                id="instructions" 
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horaires d'ouvertures</label>
              <input 
                id="opening_hours" 
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Ouvert le weekend</label>

              <div className="button-select">
                <button 
                  type="button" 
                  className={open_on_weekends ? "active" : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                    Oui
                </button>

                <button 
                  type="button"
                  className={!open_on_weekends ? "active" : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                    Non
                </button>
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
