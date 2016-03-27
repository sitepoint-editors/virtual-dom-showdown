var marked = require('marked');
var Markdown = React.createClass({
  displayName: 'Markdown',

  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return { text: '' };
  },
  render: function render() {
    return React.createElement('div', { dangerouslySetInnerHTML: {
        __html: marked(this.props.text)
      } });
  }
});

var Editor = React.createClass({
  displayName: 'Editor',

  propTypes: {
    onEdit: React.PropTypes.func.isRequired
  },
  handleEdit: function handleEdit(_ref) {
    var target = _ref.target;

    var val = target.value;
    this.props.onEdit(val);
  },
  render: function render() {
    return React.createElement('textarea', { onInput: this.handleEdit });
  }
});

var MarkdownEditor = React.createClass({
  displayName: 'MarkdownEditor',
  getInitialState: function getInitialState() {
    return { text: '' };
  },
  onEdit: function onEdit(text) {
    this.setState({ text: text });
  },
  render: function render() {
    return React.createElement(
      'main',
      null,
      React.createElement(
        'section',
        null,
        React.createElement(
          'label',
          null,
          'Markdown'
        ),
        React.createElement('hr', null),
        React.createElement(Editor, { onEdit: this.onEdit })
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'label',
          null,
          'Preview'
        ),
        React.createElement('hr', null),
        React.createElement(Markdown, { text: this.state.text })
      )
    );
  }
});

ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('app'));
