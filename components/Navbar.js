const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto px-3 py-6">
        <ul className="flex justify-end space-x-10 font-light text-lg text-sky-950">
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
