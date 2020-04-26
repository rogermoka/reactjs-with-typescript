import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17307453?s=460&u=d2be02a7c66664f177e4727d4b3bf2bd28d193fd&v=4"
            alt="Roger Mokarzel"
          />
          <div>
            <strong>rogermoka/nodejs</strong>
            <p>NodeJS course</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17307453?s=460&u=d2be02a7c66664f177e4727d4b3bf2bd28d193fd&v=4"
            alt="Roger Mokarzel"
          />
          <div>
            <strong>rogermoka/nodejs</strong>
            <p>NodeJS course</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17307453?s=460&u=d2be02a7c66664f177e4727d4b3bf2bd28d193fd&v=4"
            alt="Roger Mokarzel"
          />
          <div>
            <strong>rogermoka/nodejs</strong>
            <p>NodeJS course</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17307453?s=460&u=d2be02a7c66664f177e4727d4b3bf2bd28d193fd&v=4"
            alt="Roger Mokarzel"
          />
          <div>
            <strong>rogermoka/nodejs</strong>
            <p>NodeJS course</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
