import Head from './head';
import Link from 'next/link';

const links = [
  {href: '/release-notes', label: 'Release Notes'},
  {href: '/help', label: 'Help'},
  {href: 'https://github.com/rhiokim/gona', label: 'Github'},
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="nav-link">
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    {links.map(({key, href, label}) => (
      <Link href={href}>
        <a>{label}</a>
      </Link>
    ))}
  </nav>
);

export default Nav;
