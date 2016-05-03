import React from 'react';

const SignIn = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const email = findDOMNode(this.refs.name).value;
    const pass = findDOMNode(this.refs.pass).value;
    // 此处通过修改 localStorage 模拟了登录效果
    if (pass !== 'password') {
      return;
    }
    localStorage.setItem('login', 'true');
    const location = this.props.location;
    if (location.state && location.state.nextPathname) {
      this.props.history.replaceState(null, location.state.nextPathname);
    } else {
      // 这里使用 replaceState 方法做了跳转，但在浏览器历史中不会多一条记录，因为是替换了当前的记录
      this.props.history.replaceState(null, '/about');
    }
  },

  render() {
    if (hasLogin()) {
      return <p>你已经登录系统！<Link to="/signOut">点此退出</Link></p>;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="name"/></label><br/>
        <label><input ref="pass"/></label> (password)<br/>
        <button type="submit">登录</button>
      </form>
    );
  }
});

const SignOut = React.createClass({
  componentDidMount() {
    localStorage.setItem('login', 'false');
  },

  render() {
    return <p>已经退出！</p>;
  }
})