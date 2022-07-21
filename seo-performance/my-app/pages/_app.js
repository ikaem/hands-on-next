import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

export const reportWebVitals = (metrics) => {
  console.log({ metrics });

  sendThisToGoogleAnalayitcs(metrics);

  /* 
  
  metrics:
id: "v2-1658405553923-8276316238234"
label: "web-vital"
name: "TTFB"
startTime: 0
value: 580.1999999992549
  
  */
};
