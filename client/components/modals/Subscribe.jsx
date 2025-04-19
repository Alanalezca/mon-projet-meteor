import React, { useState, useRef, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useToastContext } from "../context/contextToast";
import { useHistory } from 'react-router-dom';
import FloatingLabel from '../inputs/FloatingInput';
import './../../main.css';
import './Login.module.css';

const SubscribeForm = () => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saisieOK, setSaisieOK] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const { showToast } = useToastContext();

  // Utilisation de useRef pour l'icône de fermeture
  const closeModalIconRefSubscribe = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Empêche la soumission si nécessaire
      soumissionFormCreationCompte(event); // Appel de la fonction pour valider la création de compte
    }
  };

  useEffect(() => {
    if(pseudo != '' && email != '' && password != '' && email.includes("@") && password.length >= 6) {
      setSaisieOK(true);
    } else {
      setSaisieOK(false);
    }
  }, [pseudo, email, password]);

  const soumissionFormCreationCompte = async (event) => {
    console.log('tentative de connexion');
    event.preventDefault();

    // Vérifie que Accounts est bien importé
    if (typeof Accounts === "undefined") {
      console.error("Meteor.Accounts n'est pas disponible !");
      return;
    }

    if(pseudo != '' && email != '' && password != '' && email.includes("@") && password.length >= 6) {
      Accounts.createUser({username: pseudo, email: email, password: password}, (err) => {
          if (err) {
            console.error("Erreur lors de la création du compte :", err.reason);
          } else {
            console.log("Compte créé avec succès !");
            
            // Fermer le modal si l'icône existe
            if (closeModalIconRefSubscribe.current) {
              closeModalIconRefSubscribe.current.click();
            }

            // Fermer proprement le modal avec Bootstrap (alternative)
            const modalElement = document.getElementById("modalSubscribe");
            if (modalElement) {
              const modalInstance = bootstrap.Modal.getInstance(modalElement);
              if (modalInstance) modalInstance.hide();
            }
            showToast('success', 'Notification', 'Création profil', `Votre profil ${pseudo} a bien été créé !`);
            // Rediriger l'utilisateur vers la page actuelle sans rechargement
            history.replace(history.location.pathname);
          }
      });
    };
  };

  return (
    <>
      <div className="modal" id="modalSubscribe" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bgcolorC modalTopBordBotTransparent">
              <h5 className="modal-title">S'enregistrer</h5>
              <i className='bx bxs-x-square bxNormalOrange bxTopRight' ref={closeModalIconRefSubscribe} data-bs-dismiss="modal"></i>
            </div>

            <div className="modal-body bgcolorC">
              <form onSubmit={soumissionFormCreationCompte} onKeyDown={handleKeyPress}>
                <FloatingLabel strLibelleLabel="Identifiant" strTypeInput="text" value={pseudo} cbOnChange={(e) => setPseudo(e.target.value)} touchePressForCB={"Enter"}/>
                <FloatingLabel strLibelleLabel="Email" strTypeInput="email" value={email} cbOnChange={(e) => setEmail(e.target.value)} touchePressForCB={"Enter"}/>
                <FloatingLabel strLibelleLabel="Mot de passe" strTypeInput="password" value={password} cbOnChange={(e) => setPassword(e.target.value)} touchePressForCB={"Enter"}/>
              </form>
            </div>

            <div className="modal-footer LoginModalBot">
              <button type="button" id="btnValiderCreationCompte" className={`btn btn-primary ${saisieOK ? 'btn-ColorA' : 'btn-ColorInactif'}`} onClick={saisieOK ? soumissionFormCreationCompte : null} data-bs-dismiss={saisieOK ? "modal" : ""}>
                Valider l'enregistrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
