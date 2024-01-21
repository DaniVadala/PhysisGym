import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
// import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import yoga from "@/assets/yoga.jpg";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Disciplinas para todas las edades",
    description:
      "Adaptamos la exigencia y contenido de nuestras clases de Yoga y Taichi para todas las edades. Informate sobre nuestra escuela de Taekwondo para niños y adultos. ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Atención 100% Personalizada",
    description:
      "Contamos con grupos reducidos, donde brindamos asesoramiento y seguimiento individual, adaptando las exigencias para cada caso particular",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Descuentos por grupos familiares",
    description:
      "Promovemos la participación de la familia en las diferentes actividades, con descuentos especiales para grupos familiares y hermanos",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="beneficios" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MAS QUE UN GIMNASIO</HText>
          <p className="my-5 text-sm">
            Las enseñanza de las diferentes disciplinas, se realiza con un
            enfoque holístico basado en la solida formación en valores y en la
            promoción de la salud integral.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto max-w-[50%]"
            alt="benefits-page-graphic"
            // src={BenefitsPageGraphic}
            src={yoga}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    PONETE EN FORMA Y REDUCI TU NIVEL DE{" "}
                    <span className="text-primary-500">STRESS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                En la búsqueda constante de bienestar y salud, cada vez más
                personas se sumergen en las ricas tradiciones de disciplinas
                orientales como las artes marciales y el yoga. Estas prácticas
                milenarias no solo ofrecen una forma única de ejercicio físico,
                sino que también se han convertido en un camino efectivo para
                reducir los niveles de estrés en la vida cotidiana
              </p>
              <p className="mb-5">
                Estas disciplinas orientales ofrecen más que simples rutinas de
                ejercicio; son guías que llevan a una conexión más profunda
                consigo mismo y con el entorno. Al adoptar estas prácticas en la
                vida diaria, se abre la puerta a un bienestar integral,
                permitiendo que cuerpo y mente alcancen su máximo potencial
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Sumate ahora!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
