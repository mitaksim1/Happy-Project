import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory } from 'react-router-dom';
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanage.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function Orphanage() {
  const { goBack } = useHistory();

  return (
    <div id="page-orphanage">
      <aside>
        <img src={mapMarkerImg} alt="Happy" />

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <div className="orphanage-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
            <button type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das meninas" />
            </button>
          </div>
          
          <div className="orphanage-details-content">
            <h1>La maison des enfants</h1>
            <p>Assiste des enfants de 6 à 15 ans qui se trouvent en situation de risuqe et/ou en détresse sociale.</p>

            <div className="map-container">
              <Map 
                center={[-27.2092052,-49.6401092]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                />
                <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
              </Map>

              <footer>
                <a href="">Voir le trajet dans Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instructions de visite</h2>
            <p>Venez quand vous pouvez et apporter beaucoup d'amour à ses enfants</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Lundi à vendredi <br />
                8h às 18h
              </div>
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Nous sommes ouvert les <br />
                weekends
              </div>
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Contactez-nous!
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}