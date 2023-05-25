import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProveder';
import { classNames } from 'helpers/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page ">
          {/* <Sidebar /> */}
          {/* <AppRouter /> */}
          <div style={{
            backgroundColor: 'red', width: '100px', height: '50px', marginBottom: '25px',
          }}
          />
          <div style={{
            backgroundColor: 'black',
            width: '800px',
            height: '200px',
            marginTop: '25px',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}
          >
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
            <div style={{
              width: '400px', height: '40px', display: 'flex', backgroundColor: 'red',
            }}
            >
              kjbdkjwefewf
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
