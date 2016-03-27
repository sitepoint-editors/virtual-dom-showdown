var preact = require('preact');
var decko = require('decko');
var marked = require('marked');

'use strict';

var _desc, _value, _class, _desc2, _value2, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx h */
var _preact = preact;
var h = _preact.h;
var render = _preact.render;
var Component = _preact.Component;
var _decko = decko;
var bind = _decko.bind;

var Markdown = function (_Component) {
  _inherits(Markdown, _Component);

  function Markdown() {
    _classCallCheck(this, Markdown);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Markdown.prototype.render = function render() {
    var text = this.props.text || '';
    return h('div', { dangerouslySetInnerHTML: {
        __html: marked(text)
      } });
  };

  return Markdown;
}(Component);

var Editor = (_class = function (_Component2) {
  _inherits(Editor, _Component2);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  Editor.prototype.handleEdit = function handleEdit(_ref) {
    var target = _ref.target;

    var val = target.value;
    this.props.onEdit(val);
  };

  Editor.prototype.render = function render() {
    return h('textarea', {
      onInput: this.handleEdit });
  };

  return Editor;
}(Component), (_applyDecoratedDescriptor(_class.prototype, 'handleEdit', [bind], Object.getOwnPropertyDescriptor(_class.prototype, 'handleEdit'), _class.prototype)), _class);
var MarkdownEditor = (_class2 = function (_Component3) {
  _inherits(MarkdownEditor, _Component3);

  function MarkdownEditor() {
    _classCallCheck(this, MarkdownEditor);

    var _this3 = _possibleConstructorReturn(this, _Component3.call(this));

    _this3.state = { text: '' };
    return _this3;
  }

  MarkdownEditor.prototype.onEdit = function onEdit(text) {
    this.setState({ text: text });
  };

  MarkdownEditor.prototype.render = function render() {
    return h(
      'main',
      null,
      h(
        'section',
        null,
        h(
          'label',
          null,
          'Markdown'
        ),
        h('hr', null),
        h(Editor, { onEdit: this.onEdit })
      ),
      h(
        'section',
        null,
        h(
          'label',
          null,
          'Preview'
        ),
        h('hr', null),
        h(Markdown, { text: this.state.text })
      )
    );
  };

  return MarkdownEditor;
}(Component), (_applyDecoratedDescriptor(_class2.prototype, 'onEdit', [bind], Object.getOwnPropertyDescriptor(_class2.prototype, 'onEdit'), _class2.prototype)), _class2);

render(h(MarkdownEditor, null), document.getElementById('app'));

