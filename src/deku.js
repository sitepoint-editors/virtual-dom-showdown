var deku = require('deku');
var Redux = require('redux');
var marked = require('marked');

var _deku = deku;
var element = _deku.element;
var createApp = _deku.createApp;
var _Redux = Redux;
var createStore = _Redux.createStore;
var initState = { text: '' };
var store = createStore(function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initState : arguments[0];
    var action = arguments[1];
    switch (action.type) {
    case 'UPDATE_TEXT':
        return { text: action.payload };
    default:
        return state;
    }
});
var Markdown = {
    render: function render(_ref) {
        var _ref$props$text = _ref.props.text;
        var text = _ref$props$text === undefined ? '' : _ref$props$text;
        return element('div', { innerHTML: marked(text) });
    }
};
var Editor = {
    render: function render(_ref2) {
        var props = _ref2.props;
        var handleEdit = function handleEdit(e) {
            props.onEdit(e.target.value);
        };
        return element('textarea', { onInput: handleEdit });
    }
};
var actions = {
    updateText: function updateText(dispatch) {
        return function (text) {
            dispatch({
                type: 'UPDATE_TEXT',
                payload: text
            });
        };
    }
};
var MarkdownEditor = {
    render: function render(_ref3) {
        var context = _ref3.context;
        var dispatch = _ref3.dispatch;
        return element('main', null, element('section', null, element('label', null, 'Markdown'), element('hr', null), element(Editor, { onEdit: actions.updateText(dispatch) })), element('section', null, element('label', null, 'Preview'), element('hr', null), element(Markdown, { text: context.text })));
    }
};
var render = createApp(document.getElementById('app'), store.dispatch);
render(element(MarkdownEditor, null), store.getState());
store.subscribe(function () {
    render(element(MarkdownEditor, null), store.getState());
});
