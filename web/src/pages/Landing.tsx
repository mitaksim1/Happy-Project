import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logo from '../images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logo} alt="Happy"/>

            <main>
              <h1>Apportez le bonheur au monde</h1>
              <p>Visitez des orphelinats et changez la journée de plusieurs enfants</p>
            </main>

            <div className="location">
              <strong>Limoges</strong>
              <span>Haute-Vienne</span>
            </div>

            <Link to="/app" className="enter-app">
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>
        </div>
    </div>
    );
}

export default Landing;
