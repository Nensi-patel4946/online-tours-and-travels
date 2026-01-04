// app/layout.js  (or pages/_app.js)
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
