import React, { Fragment } from 'react';
import Footer from '../../organisams/Footer';
import Header from '../../organisams/Header';
import { Toaster } from 'react-hot-toast';

const LayoutTemplate = (props) => {
    const { children } = props;

    return (
        <Fragment>
            <div className="d-flex w-100 h-100 p-3 flex-column">
                <Header />
                <div className='container'>
                    {children}
                </div>
                <Footer />
            </div>
            <Toaster
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: 'white',
                    },
                    // setup styles for success messages.
                    success: {
                        iconTheme: {
                            primary: '#009cff',
                            secondary: 'white'
                        }
                    },
                    // setup styles for error messages.
                    error: {
                        iconTheme: {
                            primary: '#ff1414',
                            secondary: 'white',
                        },
                    }
                }}
            />
        </Fragment>
    );
};

export default LayoutTemplate;