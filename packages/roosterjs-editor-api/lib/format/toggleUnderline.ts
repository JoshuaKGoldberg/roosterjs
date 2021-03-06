import execFormatWithUndo from './execFormatWithUndo';
import isSelectionCollapsed from '../cursor/isSelectionCollapsed';
import { Editor } from 'roosterjs-editor-core';

/**
 * Toggle underline at selection
 * If selection is collapsed, it will only affect the input after caret
 * If selection contains only underlined text, the underline style will be removed
 * If selection contains only normal text, underline style will be added to the whole selected text
 * If selection contains both underlined and normal text, the underline style will be added to the whole selected text
 * @param editor The editor instance
 */
export default function toggleUnderline(editor: Editor) {
    editor.focus();
    let formatter = () => editor.getDocument().execCommand('underline', false, null);
    if (isSelectionCollapsed(editor)) {
        formatter();
    } else {
        execFormatWithUndo(editor, formatter);
    }
}
