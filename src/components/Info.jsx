import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hola, soy <span className="font-semibold">Thanys</span> 🖖
      <br />
      Desarrollador front-end a tiempo completo.
    </h1>
  ),
  2: (
    <InfoBox
      text="Más de 15 años a mis espaldas como desarrollador de aplicaciones web."
      link="/about"
      btnText="Más info"
    />
  ),
  3: (
    <InfoBox
      text="Todo un arsenal de proyectos realizados a lo largo de mi carrera profesional."
      link="/projects"
      btnText="Ver proyectos"
    />
  ),
  4: (
    <InfoBox
      text="¿Nos tomamos un ☕ y hablamos? Yo invito."
      link="/contact"
      btnText="Contacta"
    />
  ),
};

export default function Info({ currentStage }) {
  return renderContent[currentStage] || null;
}
