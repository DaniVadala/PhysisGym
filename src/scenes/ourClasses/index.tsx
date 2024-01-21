import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "TAEKWONDO",
    description:
      "El Taekwondo, arte marcial coreano, destaca por su énfasis en técnicas de patadas y golpes, fomentando la agilidad, la fuerza física y mental, y promoviendo la disciplina personal.",
    image: image1,
  },
  {
    name: "YOGA",
    description:
      "El yoga, ancestral práctica de origen hindú, se centra en la conexión mente-cuerpo mediante posturas, respiración y meditación. Sus beneficios incluyen flexibilidad, relajación mental, fortalecimiento muscular y equilibrio emocional",
    image: image2,
  },
  {
    name: "TAICHI",
    description:
      "El Tai Chi, arte marcial chino milenario, se distingue por movimientos fluidos y su enfoque en la energía interna. Promueve la armonía entre mente y cuerpo, mejorando la flexibilidad, equilibrio, y proporcionando beneficios para la salud mental y física.",
    image: image3,
  },
  {
    name: "FISIOTERAPIA",
    description:
      "Nuestra profesora de Yoga, ademas es fisioterapeuta, y brinda tratamientos de rehabilitación, a fin de restablecer el funcionamiento físico mediante ejercicios y técnicas especializadas. Ofrece beneficios como mejora de la movilidad, alivio del dolor, fortalecimiento muscular y recuperación funcional, proporcionando cuidado integral para la salud física",
    image: image4,
  },
  {
    name: "ACUPUNTURA Y REIKI",
    description:
      "La acupuntura y el Reiki, procedimientos terapéuticos distintos, convergen en su objetivo de mejorar la salud. Mientras que la acupuntura, mediante agujas, alivia el dolor y equilibra la energía, el Reiki, canaliza la energía a través de las manos, permitiendo reducir el estrés y promover la armonía energética.",
    image: image5,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="nuestrasclases" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>NUESTRAS CLASES Y SERVICIOS</HText>
            <p className="py-5">
              Explora un universo de bienestar integral en nuestro centro, donde
              convergen disciplinas como Taekwondo para la fuerza y agilidad,
              Tai Chi para el equilibrio energético, Yoga para la armonía
              mente-cuerpo, Reiki para la sanación energética, Acupuntura para
              el alivio físico, y Fisioterapia para la rehabilitación. Sumérgete
              en un espacio que abraza la diversidad terapéutica, ofreciendo un
              enfoque holístico para cultivar tu salud y equilibrio en todos los
              niveles.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))} 
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
