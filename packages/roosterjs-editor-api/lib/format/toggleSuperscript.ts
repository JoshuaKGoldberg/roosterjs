import execFormatWithUndo from './execFormatWithUndo';
import isSelectionCollapsed from '../cursor/isSelectionCollapsed';
import { Editor } from 'roosterjs-editor-core';

/**
 * Toggle superscript at selection
 * If selection is collapsed, it will only affect the input after caret
 * If selection contains only superscript text, the superscript style will be removed
 * If selection contains only normal text, superscript style will be added to the whole selected text
 * If selection contains both superscript and normal text, the superscript style will be removed from whole selected text
 * If selection contains any subscript text, the behavior is determined by corresponding realization of browser
 * execCommand API
 * @param editor The editor instance
 */
export default function toggleSuperscript(editor: Editor) {
    editor.focus();
    let formatter = () => editor.getDocument().execCommand('superscript', false, null);
    if (isSelectionCollapsed(editor)) {
        formatter();
    } else {
        execFormatWithUndo(editor, formatter);
    }
}
