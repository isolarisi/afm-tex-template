// TeXworksScript
// Title: Insert List
// Shortcut: Ctrl+Shift+a
// Description: Insert list item
// Author: Rebro Ivan
// Version: 0.3
// Date: 2018-07-24
// Script-Type: standalone
// Context: TeXDocument

function addOrRemove(prefix, suffix) {
  var txt = TW.target.selection;
  var len = txt.length;
  var wrapped = prefix + txt + suffix;
  var pos = TW.target.selectionStart;
  if (pos >= prefix.length) {
    TW.target.selectRange(pos - prefix.length, wrapped.length);
    if (TW.target.selection == wrapped) {
      TW.target.insertText(txt);
      TW.target.selectRange(pos - prefix.length, len);
      return;
    }
    TW.target.selectRange(pos, len);
  }
  TW.target.insertText(wrapped);
  TW.target.selectRange(pos + prefix.length, len);
  return;
};

addOrRemove("\\item", "");