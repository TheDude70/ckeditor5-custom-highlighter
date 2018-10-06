/**
 * @module font/fontsize
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import HighlightColorEditing from './highlightcolorediting';
import HighlightColorUI from './highlightcolorui';

export default class HighlightColor extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires() {
        return [ HighlightColorEditing, HighlightColorUI ];
    }

    /**
     * @inheritDoc
     */
    static get pluginName() {
        return 'HighlightColor';
    }
}
