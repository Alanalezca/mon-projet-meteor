import React, { useState, memo } from 'react';
import { Meteor } from 'meteor/meteor';

const Enfant = React.memo(({maVariable2, monHandler}) => {
    console.log("/ ! / render de l'enfant");

    return (
        <>
            
        </>
    );
}, (prevProps, nextProps) => {
    // Comparaison personnalisée : vérifier si `maVariable2` a réellement changé
    return prevProps.maVariable2.id === nextProps.maVariable2.id && prevProps.maVariable2.nom === nextProps.maVariable2.nom;
  });

export default Enfant;