const SocialLink = (props) => {
  return (
    <li key={props.id}>
      <a
        href={props.href}
        target="_blank"
        className="nav-icon"
        rel="noreferrer"
      >
        <i className={props.icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
