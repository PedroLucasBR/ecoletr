import React from 'react';
import { FiLogOut, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div id="page-done">
            <div className="content-done">
                <main>
                    <FiCheckCircle />
                    <h1>Cadastro concluído!</h1>

                    <Link to="/">
                        <span>
                            <FiLogOut />
                        </span>
                        <strong>Voltar para Home</strong>

                    </Link>
                </main>
            </div>
        </div >
    );
}

export default Home;