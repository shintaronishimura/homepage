import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Top.css'; // CSSファイルをインポート

export const CorporateName = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); // トップページに遷移
    };

    return (
        <div className="corporate-name-container" onClick={handleClick}>
            <img src="/kotouge_icon.ico" alt="Corporate Logo" className="icon" />
            <h2 className="corporateName">古峠工務店</h2>
        </div>

    );
};

