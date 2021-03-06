var App = () => (<div>
  <nav className="navbar">
    <div className="col-md-6 offset-md-3">
      <Search/>
    </div>
  </nav>
  <div className="row">
    <div className="col-md-7">
      <div>
        <h5>
          <VideoPlayer/>
          view goes here</h5>
      </div>
    </div>
    <div className="col-md-5">
      <div>
        <h5>
          <VideoList/>
          view goes here</h5>
      </div>
    </div>
  </div>
</div>);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
