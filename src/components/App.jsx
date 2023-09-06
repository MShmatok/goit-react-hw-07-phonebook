import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, SubTitle } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllthunk } from 'redux/thunk';
import ContainerTitle from './ContainerTitle/ConteinerTitle';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllthunk());
  }, [dispatch]);

  return (
    <Container>
      <ContainerTitle />
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export { App };
