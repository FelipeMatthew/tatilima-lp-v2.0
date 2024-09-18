import "../styles/components/mainSectionTati.scss";
import logoTituloMain from "../assets/images/logoMain.png";
import ProfileMainImg from "../assets/images/ProfileMainImg.png";

const MainSectionTati = () => {
  return (
    <>
    <section className="container">
            <img src={ProfileMainImg} className="imgMainProfile"/>
        <div className="textContainer">
            <h1>Ceo Studio Tati Lima & Mentora</h1>
            <img src={logoTituloMain}  />
            <div className="scrollDown">
                <span>Role para baixo</span>
            </div>
        </div>
      
    </section>

     
    </>
  );
};

export default MainSectionTati;
