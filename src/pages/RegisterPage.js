import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/forumApp.png';
import RegisterImage from '../assets/register-image.jpg';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  const onRegister = ({ name, email, password }) => {
    // @TODO: dispatch async action to register
    dispatch(asyncRegisterUser({ email, name, password }));
    navigate('/');
  };

  return (
    <section className="register-page">
      <header className="register-page__hero">
        <img
          className="rounded-4"
          src={RegisterImage}
          height="400"
          width="500"
          alt="First slide"
        />
      </header>
      <article className="register-page__main text-white">
        <div className="row">
          <div className="col">
            <img
              className="logo rounded-4"
              src={Logo}
              height="80"
              width="80"
              alt="Logo"
            />
            <h4 className="myApp mt-2">
              <strong className="text-center">Chatime</strong>
            </h4>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <h5 className="intro-register mb-3">
              <strong>Create your account</strong>
            </h5>
            <RegisterInput register={onRegister} />
            <p className="move-register mt-2">
              Already have an account?
              <Link to="/"> Login</Link>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default RegisterPage;
