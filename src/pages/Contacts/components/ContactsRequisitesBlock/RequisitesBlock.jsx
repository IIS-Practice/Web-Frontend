import React from 'react';
import './RequisitesBlock.styles.css';
import Button from "@components/shared/Button";

const RequisitesBlock = ({ title, requisites, downloadLink }) => {

    const requisitesLines = requisites.split('\n');

    return (
        <div className="requisites-block">
            <div className="requisites-content">
                <h3>{title}</h3>

                {requisitesLines.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="requisites-download">
                <Button type="submit">Отправить</Button>
            </div>
        </div>
    );
};

export default RequisitesBlock;
