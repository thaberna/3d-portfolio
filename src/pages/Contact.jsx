import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (e) => {
    setCurrentAnimation("walk");
  };

  const handleBlur = (e) => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    // Sending email...
    showAlert({
      show: true,
      text: "Mensaje enviado correctamente",
      type: "success",
    });

    setTimeout(() => {
      setCurrentAnimation("idle");
      setForm({ fullname: "", email: "", message: "" });
      hideAlert();
    }, 5000);
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Contacta conmigo</h1>
        <form
          ref={formRef}
          method="post"
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <div>
            <label className="text-black-500 font-semibold">
              Nombre completo
            </label>
            <input
              type="text"
              name="fullname"
              className="input"
              placeholder="Tu nombre completo"
              required
              value={form.fullname}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label className="text-black-500 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="nombre@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <label className="text-black-500 font-semibold">Mensaje</label>
            <textarea
              name="message"
              className="textarea"
              placeholder="Escribe tu mensaje aquí"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Enviando..." : "Enviar formulario"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
