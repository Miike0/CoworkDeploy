import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';

function NoticeOfPrivacyModal() {

  const [show, setShow] = useState(false);

  return (
    <>
        <Button variant="text" onClick={() => setShow(true)}>Aviso de privacidad</Button>
        
        <Modal show={show} onHide={() => setShow(false)} animation={true} className='modal-container' fullscreen={true}>
          <Modal.Header closeButton>
            <Modal.Title className='modal-title'>AVISO DE PRIVACIDAD</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1 className="cowork">CoWork</h1>
            <p className="contacto">Contacto: Por medio de correo electrónico, en cualquiera de las siguientes direcciones; miguel.alvarez4093@alumnos.udg.mx, jose.diaz7449@alumnos.udg.mx, y christian.soto4752@alunmnos.udg.mx</p>
            <p className="ultimaActualizacion">Última actualización: 3 de mayo de 2023</p>
            <p className="valorPrivacidad">
              En CoWork valoramos su privacidad y nos comprometemos a proteger sus datos personales conforme a la Ley de Protección de Datos Personales en Posesión de los Particulares. Este Aviso de Privacidad tiene como finalidad informarle sobre cómo recopilamos, utilizamos, compartimos y protegemos sus datos personales, así como sus derechos en relación con dicha información.
            </p>
            <ol className="categorias">

              <li className="categiria">
                Datos personales que recopilamos
                <ul className="infoUl">
                  <p className="text">Podemos recopilar los siguientes datos personales cuando usted interactúa con CoWork o utiliza nuestros servicios:</p>
                  <li className="textList">Información de contacto básica, como su nombre, y correo electrónico;</li>
                  <li className="textList">Información de navegación, como su dirección IP, información de cookies y otros identificadores de dispositivos;</li>
                </ul>
              </li>

              <li className="categiria">
                Finalidades del tratamiento de datos personales
                <ul className="infoUl">
                  <p className="text">Podemos utilizar sus datos personales para las siguientes finalidades:</p>
                  <li className="textList">Procesar su solicitud de servicios o productos y brindarle soporte técnico o atención al cliente;</li>
                  <li className="textList">Cumplir con nuestras obligaciones legales;</li>
                  <li className="textList">Mejorar nuestros servicios y productos, y personalizar su experiencia con nosotros;</li>
                  <li className="textList">Enviarle información comercial y promocional sobre nuestros productos y servicios, siempre y cuando haya consentido previamente recibirla;</li>
                  <li className="textList">Proteger nuestros derechos y propiedad.</li>
                </ul>
              </li>

              <li className="categiria">
                Compartición de datos personales
                <ul className="infoUl">
                  <p className="text">Podemos compartir sus datos personales con terceros en las siguientes circunstancias:</p>
                  <li className="textList">Con nuestros proveedores de servicios y asesores, que nos ayudan a administrar nuestras operaciones y proporcionar soporte técnico y atención al cliente;</li>
                  <li className="textList">Con autoridades gubernamentales o fiscales, en caso de que sea necesario cumplir con nuestras obligaciones legales;</li>
                  <li className="textList">Con cualquier otra persona o entidad en caso de que tengamos su consentimiento previo para hacerlo y exista una razón válida justificada.</li>
                </ul>
              </li>

              <li className="categiria">
                Medidas de seguridad para proteger sus datos personales
                <ul className="infoUl">
                  <p className="text">Tomamos medidas técnicas, administrativas y físicas para proteger sus datos personales contra el acceso no autorizado, la pérdida, el uso indebido, la alteración o la destrucción. Algunas de estas medidas incluyen:</p>
                  <li className="textList">Limitar el acceso a los datos personales solo a las personas que necesiten conocerlos para cumplir con sus funciones laborales;</li>
                  <li className="textList">Utilizar tecnologías de cifrado y autenticación para proteger sus datos personales durante la transmisión y el almacenamiento;</li>
                </ul>
              </li>

              <li className="categiria">
                Derechos ARCO
                <p className="text text-iden">
                  De acuerdo con la Ley de Protección de Datos Personales en Posesión de los Particulares, usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales, conocidos como derechos ARCO. Si desea ejercer alguno de estos derechos, puede hacerlo enviando una solicitud por escrito al responsable de sus datos personales a través de los datos de contacto proporcionados en este aviso. Su solicitud debe contener su nombre completo y una descripción clara y precisa de los datos personales a los que desea acceder, rectificar, cancelar u oponerse.
                </p>
              </li>

              <li className="categiria">
                Cambios al Aviso de Privacidad
                <p className="text text-iden">
                  Nos reservamos el derecho de actualizar y modificar este Aviso de Privacidad en cualquier momento. Cualquier cambio será notificado a través de nuestro sitio web o por cualquier otro medio que consideremos apropiado. Le recomendamos revisar periódicamente este aviso para estar al tanto de cualquier cambio o actualización.                
                </p>
              </li>

              <li className="categiria">
                Aceptación del Aviso de Privacidad
                <p className="text text-iden">
                  Al utilizar nuestros servicios o proporcionarnos sus datos personales, usted acepta los términos y condiciones de este Aviso de Privacidad y nos otorga su consentimiento para el tratamiento de sus datos personales de acuerdo con las finalidades y términos establecidos en este aviso.
                </p>
              </li>


            </ol>
            <p className="dudas">
              Si tiene alguna duda o pregunta sobre este Aviso de Privacidad o el tratamiento de sus datos personales, por favor póngase en contacto con nosotros a través de los datos de contacto proporcionados en este aviso.
            </p>
            <p className="despedida">
              CoWork
            </p>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="contained" onClick={() => setShow(false)}>Aceptar</Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}

export default NoticeOfPrivacyModal;
