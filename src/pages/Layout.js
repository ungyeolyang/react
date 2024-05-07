import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header
        style={{
          width: "100%",
          display: "flex",
          background: "lightgray",
          padding: 16,
          fontSize: 24,
          position: "fixed",
          top: 0,
          justifyContent: "center",
        }}
      >
        Header
      </header>
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          width: "100%",
          display: "flex",
          background: "darkgray",
          padding: 16,
          fontSize: 24,
          position: "fixed",
          bottom: 0,
          justifyContent: "center",
        }}
      >
        footer
      </footer>
    </>
  );
};

export default Layout;
