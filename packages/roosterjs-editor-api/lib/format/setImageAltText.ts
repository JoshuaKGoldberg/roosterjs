import execFormatWithUndo from './execFormatWithUndo';
import queryNodesWithSelection from '../cursor/queryNodesWithSelection';
import { Editor } from 'roosterjs-editor-core';

/**
 * Set image alt text for all selected images at selection. If no images is contained
 * in selection, do nothing.
 * The alt attribute provides alternative information for an image if a user for some reason
 * cannot view it (because of slow connection, an error in the src attribute, or if the user
 * uses a screen reader). See https://www.w3schools.com/tags/att_img_alt.asp
 * @param editor The editor instance
 * @param altText The image alt text
 */
export default function setImageAltText(editor: Editor, altText: string) {
    editor.focus();
    let imageNodes = queryNodesWithSelection(editor, 'img');

    if (imageNodes.length > 0) {
        execFormatWithUndo(editor, () => {
            for (let node of imageNodes) {
                (node as HTMLElement).setAttribute('alt', altText);
            }
        });
    }
}
