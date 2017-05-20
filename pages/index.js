import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

export default () => (
  <div>
    <Head title="Walk slowly | TODO App" />

    <div className="container">
      <section className="header">
        <img className="logo" src="/static/images/logo.png"/>
        <Nav />
        <h2 className="title">Do you <b>gonna</b> <u>do</u> something?</h2>
        <div className="row story">
          Tasks, Meetings, Alarm and Articles... <br/>
        </div>
      </section>


      <div className="section philosophy center">
        <div className="container">
          <h4 className="section-heading"><b>Gona</b>: CLI<small>(Command Line Interface)</small> and GUI</h4>
          <img src="/static/images/gona-cli.png" />
          <img src="/static/images/gona-tray-app.png" />
        </div>
      </div>

      <div className="section philosophy center">
        <div className="container">
          <h4 className="section-heading">Need help getting started?</h4>
          <p className="section-description">할일을 너무 복잡하게 만들지 마세요.  <br/>
            그것은 오늘 할일을 집중하지 못하게 해요.<br/>
            <br/>
            딱 5개만 등록하고 그일을 마치고 나면 그때 다시 생각하세요.<br/>
            당신이 오늘 5개의 할일을 마치는 것 만으로 충분한 하루를 보낸거에요.<br/>
            <br/>
            조금 느리게 걸어요.<br/>
            <br/>
            세상이 당신에게 발을 맞출 수 있게...</p>
        </div>
      </div>
      <div className="section get-help">
        <div className="container">
          <h4 className="section-heading">Need help getting started?</h4>
          <p className="section-description">Gona is dead simple to start with your laptop. If you want to learn more, just visit the help!</p>
          <a className="button button-primary" href="http://getskeleton.com">View Tutorial Videos</a>
        </div>
      </div>
    </div>
    <p className="copyright center">© 2017 <a href="https://github.com/slothlab">Slothlab</a>. All rights reserved.</p>
  </div>
);
