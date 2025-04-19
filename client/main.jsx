import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Assure-toi que React 18 est utilisé
import 'boxicons/css/boxicons.min.css';
import  { AppRoutes } from '/imports/ui/App';

Meteor.startup(() => {
  if (window.bootstrap) {
    console.error('Bootstrap est chargé');
  } else {
    console.error('Bootstrap n\'est pas chargé');
  }
  console.log(window.bootstrap);
  if (window.Popper) {
    console.log('Popper est chargé et prêt à l\'emploi');
  } else {
    console.log('Popper n\'est pas chargé');
  }
  const container = document.getElementById('react-target');
  if (container) {
    const root = createRoot(container);  // Crée une instance de root avec createRoot
    root.render(<AppRoutes />);  // Utilise root.render() pour afficher l'application
  }
});