import React, { useState } from 'react';
import ShortURLForm from '../organisams/ShortURLForm';
import ViewURLModal from '../molecules/ViewURLModal';
import { generateShortURL } from '../services/api';
import { toast } from 'react-hot-toast';

const Home = () => {

  const [state, setState] = useState(
    {
      loading: false,
      shortUrl: '',
      url: ''
    }
  )

  const submitURL = async (formik) => {
    try {
      let data = formik.values;
      // validate 
      const validationErrorsObject = await formik.validateForm();
      const validationErrors = Object.values(validationErrorsObject);
      if (validationErrors.length === 0) {
        setState({ loading: true });
        data = {
          url: data.url.trim()
        }
        const response = await generateShortURL(data);
        const responseData = response?.data || {}
        setState({ ...state, loading: false,...responseData});
      }else{
        toast.error(validationErrors.join(''));
      }
    } catch (error) {
      setState(false);
      toast.error('Something went wrong!')
    }
  }

  return (
    <div className="px-lg-5 mx-auto" style={{ marginTop: '10rem' }}>
      <h1 style={{ color: "#ff621f" }}>Shorten your <span style={{ color: "#009cff" }}> loooooooong </span> URLs <br /> like never
        before!</h1>
      <p className="lead fs-6">Copy your long boring url. Past it below. Then 🔥 You got it, right?</p>

      <ShortURLForm onFormSubmit={submitURL} isLoading={state.loading} />

      <ViewURLModal
        showModal={state.shortUrl}
        url={state.url}
        shortUrl={state.shortUrl}
        onClickBack={() => setState(state => ({...state, url: '', shortUrl: ''}))}
      />
    </div>
  );
};

export default Home;
