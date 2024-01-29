import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="cta">
      <p className="cta-text">
        ¿Tienes alguna idea de proyecto? <br className="sm:block hidden" />
        ¡Hablemos!
      </p>
      <Link to="/contact" className="btn">
        Contactar
      </Link>
    </section>
  );
}
