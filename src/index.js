import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { SignUpModal } from './components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';


const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        {/* <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}> DarkTheme</PrimaryButton> */}
        <GlobalStyle />
        <div style={{
          background: useDarkTheme ? defaultTheme.primaryActiveColor : darkTheme.primaryColor,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <SignUpModal />
        </div>
      </ThemeProvider>

    </>

  )
}

ReactDOM.render(<App />, document.querySelector('#root'));