import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é preecher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre as aulas</legend>
          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante ! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;