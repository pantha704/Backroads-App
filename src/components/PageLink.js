const PageLink = (props) => {
  return (
    <li key={props.id}>
      <a href={props.href} className={props.classes.itemClass}>
        {" "}
        {props.text}{" "}
      </a>
    </li>
  );
};
export default PageLink;
