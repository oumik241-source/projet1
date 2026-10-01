import {useState} from "react";
function App(){
    const[livres,setLivres]=useState([
  {id: 1,titre: "Antigone",prix: 150,editeur: "Editions de la Table Ronde",auteur: "Jean Anouilh",photo: "src\img\Antigone.webp"},
  {id: 2, titre: "La boite a merveilles",prix: 90,editeur: "Editions du Seuil",auteur: "Ahmed Sefrioui",photo: "src\img\la boite a merveilles.jpg"},
  {id: 3, titre: "Le Dernier Jour d'un condamne",prix: 30,editeur: "Charles Gosselin",auteur: "Victor Hugo",photo: "src\img\le dernaire jour d'un condamne.jpg"}
  ]);
  
}
  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [auteur, setAuteur] = useState("");

  // Ajouter un livre
  const AjouterLivre = () => {
    if (titre === "" || prix === "" || auteur === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    if (Number(prix) <= 0) {
      alert("Le prix doit être supérieur à 0");
      return;
    }

    const L = {
      id: Date.now(),
      titre: titre,
      prix: Number(prix),
      auteur: auteur,
      photo: "",
    };

    setLivres([...livres, L]);

    setTitre("");
    setPrix("");
    setAuteur("");
  };

  const SupprimerLivre = (index) => {
    setLivres(livres.filter((_, i) => i !== index));
  };

  const ModifierLivre = (index) => {
    setTitre(livres[index].titre);
    setPrix(livres[index].prix);
    setAuteur(livres[index].auteur);
  };

  return (
    <div>
      <h1>Gestion des livres</h1>

      <input
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        placeholder="Titre"
      />

      <input
        type="number"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        placeholder="Prix"
      />

      <input
        value={auteur}
        onChange={(e) => setAuteur(e.target.value)}
        placeholder="Auteur"
      />

      <button onClick={AjouterLivre}>
        Ajouter
      </button>

      <br />
      <br />

      <table border="1">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Prix</th>
            <th>Auteur</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {livres.map((livre, index) => (
            <tr key={livre.id}>
              <td>{livre.titre}</td>
              <td>{livre.prix} DH</td>
              <td>{livre.auteur}</td>
          <td> {livre.photo &&(
            <img src={livre.photo} 
            alt={livre.titre}
             width="80" /> )} 
          </td>
               
        

              <td>
                <button
                  onClick={() => SupprimerLivre(index)}
                >
                  Supprimer
                </button>

                <button
                  onClick={() => ModifierLivre(index)}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


export default App;