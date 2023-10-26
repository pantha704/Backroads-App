import PageLink from "./PageLink";
import { pageLinks } from "./data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {/*  */}
      {pageLinks.map((page) => {
        return <PageLink {...page} classes={{ parentClass, itemClass }} />;
      })}
      {/*  */}
    </ul>
  );
};
export default PageLinks;
