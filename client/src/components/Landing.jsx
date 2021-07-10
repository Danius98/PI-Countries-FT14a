import React from 'react';
import { useHistory } from "react-router-dom";
import Button from "./Button";

function Landing() {
    const history = useHistory();
return (
    <main>
      <Button>
             <Link to="/Country">Home</Link>
      </Button>
    </main>
)
}

export default Landing;