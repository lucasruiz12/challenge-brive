import React from 'react';
import './style.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                © 2022 Copyright
                <br />
                Hecho por <a className='signature' href="http://linkedin.com/in/lucasgabrielruiz">Lucas Ruiz</a>
            </div>
        </footer>
    )
}


// function Footer() {
//     return (
//         <>
//             <footer className="bg-light text-center text-lg-start">
//                 <div className="text-center p-3" style={{marginTop:"300px"}}>
//                     © 2022 Copyright
//                     <br />
//                     Hecho por <a className="text-dark" href="http://linkedin.com/in/lucasgabrielruiz">Lucas Ruiz</a>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer;