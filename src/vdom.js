var virtualDom = require('virtual-dom');
var Redux = require('redux');
var marked = require('marked');

'use strict';
var _virtualDom = virtualDom;
var diff = _virtualDom.diff;
var patch = _virtualDom.patch;
var create = _virtualDom.create;
var _Redux = Redux;
var createStore = _Redux.createStore;
function h(type, props) {
    var hasChildren = arguments.length > 2;
    var isComponent = typeof type == 'function';
    var children = [];
    if (arguments[2] instanceof Array) {
        children = arguments[2];
    } else {
        children = [].slice.call(arguments, 2);
    }
    if (isComponent) {
        return type(props, children);
    } else {
        return virtualDom.h(type, props, children);
    }
}
;
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
var actions = {
    updateText: function updateText(text) {
        store.dispatch({
            type: 'UPDATE_TEXT',
            payload: text
        });
    }
};
function Markdown(_ref) {
    var _ref$text = _ref.text;
    var text = _ref$text === undefined ? '' : _ref$text;
    return h('div', { innerHTML: marked(text) });
}
function Editor(_ref2) {
    var onEdit = _ref2.onEdit;
    var text = _ref2.text;
    var update = function update(e) {
        return onEdit(e.target.value);
    };
    return h('textarea', { oninput: update });
}
function MarkdownEditor(_ref3) {
    var state = _ref3.state;
    return h('main', null, h('section', null, h('label', null, 'Markdown'), h('hr', null), h(Editor, { onEdit: actions.updateText })), h('section', null, h('label', null, 'Preview'), h('hr', null), h(Markdown, { text: state.text })));
}
var tree = h(MarkdownEditor, { state: store.getState() });
var root = create(tree);
store.subscribe(function () {
    var newTree = h(MarkdownEditor, { state: store.getState() });
    var patches = diff(tree, newTree);
    root = patch(root, patches);
    tree = newTree;
});
document.getElementById('app').appendChild(root);
