import React from "react";

export default class SvelteComponent extends React.PureComponent {
  container = React.createRef();

  instance = null;

  fragment = null;

  componentDidMount() {
    React.createElement("fragment", { ref: this.container });
    const { this: Constructor, ...props } = this.props;

    this.instance = new Constructor({
      target: this.container.current,
      props
    });
  }

  componentDidUpdate() {
    this.instance.$set(this.props);
  }

  componentWillUnmount() {
    this.instance.$destroy();
  }

  render() {
    return this.fragment;
  }
}
