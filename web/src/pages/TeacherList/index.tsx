import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>  
      </PageHeader>

      <main>
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
      </main>
    </div>
  )
}

export default TeacherList;