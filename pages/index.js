import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

export default () => (
  <div>
    <Head title="Home" />
    <Nav />

    <div className="container">
      <div className="row">
        <div className="one-half column"style={{marginTop: "25%"}}>
          <h4>Basic Page</h4>
          <p>
            This index.html page is a placeholder with the CSS, font and favicon. It's just waiting for you to add some content! If you need some help hit up the
            {' '}
            <a href="http://www.getskeleton.com">Skeleton documentation</a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
);
