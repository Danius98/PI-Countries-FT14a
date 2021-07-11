import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import Button from "./Button";

function Landing() {
    const history = useHistory();
return (
    <main>
      <Button>
             <Link to="/Country"><h1>Bienvenido, clickea para continuar</h1></Link>
      </Button>
    </main>
)
}

export default Landing;