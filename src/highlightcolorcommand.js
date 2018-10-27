import Command from '@ckeditor/ckeditor5-core/src/command';
import Range from '@ckeditor/ckeditor5-engine/src/model/range';

export default class HighlightColorCommand extends Command {

    /**
     * @inheritDoc
     */
    refresh() {
        const model = this.editor.model;
        const doc = model.document;

        this.value = doc.selection.getAttribute( 'highlightColor' );
        this.isEnabled = model.schema.checkAttributeInSelection( doc.selection, 'highlightColor' );
    }

    /**
     * Executes the command. Applies the `value` of the {@link #attributeKey} to the selection.
     * If no `value` is passed, it removes the attribute from the selection.
     *
     * @protected
     * @param {Object} [options] Options for the executed command.
     * @param {String} [options.value] The value to apply.
     * @fires execute
     */
    execute( options = {} ) {
        const model = this.editor.model;
        const document = model.document;
        const selection = document.selection;

        const color = (options.value === 'rgba(0,0,0,0)' ? null : options.value);

        model.change( writer => {
            const ranges = model.schema.getValidRanges( selection.getRanges(), 'highlightColor' );

            if ( selection.isCollapsed ) {
                const position = selection.getFirstPosition();

                // When selection is inside text with `highlightColor` attribute.
                if ( selection.hasAttribute( 'highlightColor' ) ) {
                    // Find the full text color range.
                    const isSameHighlight = value => {
                        return value.item.hasAttribute( 'highlightColor' ) && value.item.getAttribute( 'highlightColor' ) === this.value;
                    };

                    const highlightColorStart = position.getLastMatchingPosition( isSameHighlight, { direction: 'backward' } );
                    const highlightColorEnd = position.getLastMatchingPosition( isSameHighlight );

                    const highlightColorRange = new Range( highlightColorStart, highlightColorEnd );

                    // Then depending on current value...
                    if ( !color || this.value === color || color === 'rgb(255,255,255)') {
                        // ...remove attribute when passing text color different than current or executing "eraser".
                        writer.removeAttribute( 'highlightColor', highlightColorRange );
                        writer.removeSelectionAttribute( 'highlightColor' );
                    } else {
                        // ...update `highlightColor` value.
                        writer.setAttribute( 'highlightColor', color, highlightColorRange );
                        writer.setSelectionAttribute( 'highlightColor', color );
                    }
                } else if ( color && color !== 'rgb(255,255,255)') {
                    writer.setSelectionAttribute( 'highlightColor', color );
                }
            } else {
                for ( const range of ranges ) {
                    if ( color && color !== 'rgb(255,255,255)') {
                        writer.setAttribute( 'highlightColor', color, range );
                    } else {
                        writer.removeAttribute( 'highlightColor', range );
                    }
                }
            }
        } );
    }
}
