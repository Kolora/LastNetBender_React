<<<<<<< HEAD
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/CharacterGallery">
        <div>Characters</div>
      </Link>

      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}
=======
import { Link } from "react-router-dom"
export default function NavBar (){
    return(
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/CharacterGallery">
                <div>Charecters</div>
            </Link>

            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    )
}
>>>>>>> 203803b99f004f9592d6cebc40cec5a29a8c2289
