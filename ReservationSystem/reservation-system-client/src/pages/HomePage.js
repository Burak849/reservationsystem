import React from "react";
import PreLoginNavbar from "../components/PreLoginNavbar";
import Makas from '../media/scissor-trans.png';
import Arkaplan from '../media/bg.png';
import "../App.css"; 

function HomePage() {
    return (
        <html>
            <head>
                <script src="https://kit.fontawesome.com/db4729b060.js" crossorigin="anonymous"></script>
            </head>
            <body>
                <div className="HomePage">
                    <PreLoginNavbar />

                    <div>

                        <img src={Arkaplan} alt="BG" />




                    </div>




                    <div>
                    <img src={Makas} alt="Scissor"/>
                    </div>



                </div>
            </body>
        </html>
    );
}

export default HomePage;
