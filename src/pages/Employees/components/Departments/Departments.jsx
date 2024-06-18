import React, {useState} from "react";
import "./Departments.styles.css";


const Departments = () => {
    const [visibleGrid, setVisibleGrid] = useState('');

    const handleDevelopersClick = () => {
        setVisibleGrid(visibleGrid === 'developers' ? '' : 'developers');
    };

    const handleDesignersClick = () => {
        setVisibleGrid(visibleGrid === 'designers' ? '' : 'designers');
    };

    const handleAnalystsClick = () => {
        setVisibleGrid(visibleGrid === 'analysts' ? '' : 'analysts');
    };

    return (
        <div className="departments">
            <div className="Developers">
                <button className="dropdown-btn" onClick={handleDevelopersClick}>
                    Разработчики
                    <img src="https://cdn0.iconfinder.com/data/icons/right-direction-1/64/arrow-thin-down-1024.png"/>
                </button>

                <div className="grid-developers-container">
                    <div className="grid-developer-info">
                        <img src="https://koshka.top/uploads/posts/2021-12/1639912735_33-koshka-top-p-siamskii-kotenok-malenkii-34.jpg"/>
                    </div>
                    <div className="grid-developer-info">
                        <p>
                            Фамилия Имя
                        </p>
                        <p>
                            Стек технологий
                        </p>
                        <button className="cv-btn">Посмотреть резюме</button>
                    </div>
                </div>

                <div className={`grid-developers-list ${visibleGrid === 'developers' ? 'visible' : ''}`} >
                    <div className="grid-developers-element">
                        <img
                            src="https://koshka.top/uploads/posts/2021-12/1639912735_33-koshka-top-p-siamskii-kotenok-malenkii-34.jpg"/>
                        <p>
                        Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-developers-element">
                        <img src="https://wp-s.ru/wallpapers/6/3/349076328863727/malenkij-polosatyj-kotenok-s-golubymi-glazami.jpg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-developers-element">
                        <img src="https://w.forfun.com/fetch/46/4611bdfecba3248686877a5b55172d7b.jpeg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-developers-element">
                        <img src="https://w.forfun.com/fetch/2c/2c38ec7c72e3d0094f591d6f735a3b8e.jpeg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-developers-element">
                        <img src="https://get.wallhere.com/photo/1920x1200-px-cute-kitten-1641131.jpg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-developers-element">
                        <img
                            src="https://ornella.club/uploads/posts/2023-02/1675399776_ornella-club-p-trekhtsvetnie-koshki-porodistie-zhivotnie-40.jpg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                </div>
            </div>

            <div class="Designers">
                <button class="dropdown-btn" onClick={handleDesignersClick}>
                    Дизайнеры
                    <img src="https://cdn0.iconfinder.com/data/icons/right-direction-1/64/arrow-thin-down-1024.png"/>
                </button>

                <div className="grid-designers-container">
                    <div className="grid-designer-info">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-of-cartoon-dog-portrait_23-2150907018.jpg?size=626&ext=jpg"/>
                    </div>
                    <div className="grid-designer-info">
                        <p>
                            Фамилия Имя
                        </p>
                        <p>
                            Стек технологий
                        </p>
                        <button className="cv-btn">Посмотреть резюме</button>
                    </div>
                </div>

                <div className={`grid-designers-list ${visibleGrid === 'designers' ? 'visible' : ''}`}>
                    <div className="grid-designers-element">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-of-cartoon-dog-portrait_23-2150907018.jpg?size=626&ext=jpg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-designers-element">
                        <img
                            src="https://img.freepik.com/premium-photo/super-cute-smiling-puppy-shiny-fluffy-empty-background_916626-11161.jpg?size=626&ext=jpg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-designers-element">
                        <img src="https://img.freepik.com/free-photo/cute-dog-with-nature-background_23-2150687007.jpg?size=626&ext=jpg"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-designers-element">
                        <img src="https://img.freepik.com/premium-photo/illustration-of-a-3d-dog-baby-dog_1101614-75.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-designers-element">
                        <img src="https://img.freepik.com/free-photo/adorable-pomeranian-dog-in-studio_23-2150797124.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-designers-element">
                        <img
                            src="https://img.freepik.com/free-photo/adorable-alusky-puppy-on-his-back-in-green-grass_493961-279.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                </div>

            </div>
            <div class="Business-analysts">
                <button class="dropdown-btn" onClick={handleAnalystsClick}>
                    Бизнес-аналитики
                    <img src="https://cdn0.iconfinder.com/data/icons/right-direction-1/64/arrow-thin-down-1024.png"/>
                </button>

                <div className="grid-analysts-container">
                    <div className="grid-analyst-info">
                        <img
                            src="https://img.freepik.com/premium-photo/white-baby-rabbit-ai_936759-13205.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                    </div>
                    <div className="grid-analyst-info">
                        <p>
                            Фамилия Имя
                        </p>
                        <p>
                            Стек технологий
                        </p>
                        <button className="cv-btn">Посмотреть резюме</button>
                    </div>
                </div>

                <div className={`grid-analysts-list ${visibleGrid === 'analysts' ? 'visible' : ''}`}>
                    <div className="grid-analysts-element">
                        <img
                            src="https://img.freepik.com/premium-photo/white-baby-rabbit-ai_936759-13205.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-analysts-element">
                        <img
                            src="https://img.freepik.com/free-photo/easter-celebration-with-cute-bunny_23-2151390703.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-analysts-element">
                        <img src="https://img.freepik.com/premium-photo/little-bunny-holding-an-empty-plate-mock-up_657590-4986.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-analysts-element">
                        <img src="https://img.freepik.com/premium-photo/a-cute-little-liger-holding-a-blank-poster_15259-40.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-analysts-element">
                        <img src="https://img.freepik.com/premium-photo/white-rabbit-pops-head-trough-torn-paper-hole-pastel-color_967785-48281.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                    <div className="grid-analysts-element">
                        <img
                            src="https://img.freepik.com/premium-photo/close-up-of-a-cat-against-yellow-background_1048944-12698817.jpg?size=626&ext=jpg&ga=GA1.1.211317140.1718728111&semt=ais_user"/>
                        <p>
                            Фамилия Имя
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Departments;