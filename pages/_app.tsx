import { StateMachineProvider, createStore } from "little-state-machine";

import { AppProps } from "next/app";


// createStore({})
createStore({
  data:{
  firstName: "jet",
  lastName: "lee",
  age: "24",
  yearsOfExp: "2022",
  }
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <StateMachineProvider>
        <Component {...pageProps} />
      </StateMachineProvider>
    </div>
  );
}

export default MyApp;
