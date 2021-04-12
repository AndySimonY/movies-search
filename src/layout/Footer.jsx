const Footer = () => {
    return(
        <footer className="page-footer amber lighten-2">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" 
          href="https://github.com/AndySimonY/movies-search.git">Repo</a>
          </div>
        </div>
      </footer>
    )
}
export default Footer