import { fade, darken } from '../utils/colorManipulator';

export default (function (theme) {
  return '\n  .mu-raised-button {\n    background-color: ' + theme.background.paper + ';\n    color: ' + theme.text.primary + ';\n  }\n  .mu-raised-button.disabled{\n    color: ' + fade(theme.text.primary, 0.3) + ';\n    background-color: ' + darken(theme.text.alternate, 0.1) + ';\n  }\n  .mu-flat-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-flat-button.disabled {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-icon-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-icon-button.disabled {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-fab-button {\n    background-color: ' + theme.primary + ';\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-fab-button.disabled {\n    color: ' + fade(theme.text.primary, 0.3) + ';\n    background-color: ' + darken(theme.text.alternate, 0.1) + ';\n  }\n  ';
});