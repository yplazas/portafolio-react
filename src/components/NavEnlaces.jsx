export default function NavEnlaces({ link, textLink, icon: Icon, sizeIcon }) {
  return (
    <>
      <a className="nav__link dark-theme" href={link}>
        <Icon style={{ width: sizeIcon, height: sizeIcon }} />
        <span className="nav__link-text dark-theme">{textLink}</span>
      </a>
    </>
  );
}
