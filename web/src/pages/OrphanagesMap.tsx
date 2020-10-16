import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Map"/>

                    <h2>Choisissez un orphelinat dans la carte</h2>
                    <p>Plusieurs enfants attendent votre visite</p>
                </header>

                <footer>
                    <strong>Limoges</strong>
                    <span>Haute-Vienne</span>
                </footer>
            </aside>

            <Map
                center={[45.8489856, 1.277952]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                />

                <Marker
                    icon={mapIcon}
                    position={[45.8489856, 1.277952 ]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        La maison des enfants
                        <Link className="map-link" to="orphanages/1">
                            <FiArrowRight size={20} color="FFF" />
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;