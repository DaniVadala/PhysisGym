
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
<img className="h-10" src="https://upload.wikimedia.org/wikipedia/commons/3/36/Pakua.svg" alt="" />        
  <p className="my-5">
  Descubre tu mejor versión en Physis Gym. Ofrecemos un espacio único donde se fusionan disciplinas como Taekwondo, Tai Chi, Yoga, Reiki, Acupuntura y Fisioterapia. Cultiva tu bienestar físico y emocional con nosotros
          </p>
          <p>© Physis Gym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links Útiles</h4>
          <p className="my-5" >WORLD TAEKWONDO</p> 
          <p className="my-5">ASOCIACIÓN MEDITERRANEA TAEKWONDO</p>
          
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contacto</h4>
          <p className="my-5">Te enviamos información por whatsapp o acercate a nuestro gimnasio</p>
          <p>(000)4000000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;