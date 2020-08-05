import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/54601930?s=460&u=03030f57c066bf4ae807fa959538af3e83896e3e&v=4" alt="Paulo Henrique"/>
        <div>
          <strong>Paulo Henrique</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
      </p>

      <footer>
        <p>
          Preço/hora 
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;