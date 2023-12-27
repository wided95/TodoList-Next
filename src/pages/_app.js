import { wrapper } from "../redux/store/store"; // Adjust the path based on your project structure
import MyApp from "../app/page"; // Import your main app component

function MyAppWrapper({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyAppWrapper);
