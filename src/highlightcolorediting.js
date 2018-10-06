import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import {upcastElementToAttribute} from '@ckeditor/ckeditor5-engine/src/conversion/upcast-converters';
import HighlightColorCommand from './highlightcolorcommand';
import Colors from './colors.js';

const TEXT_COLOR = 'highlightColor';

Array.prototype.closestRGB = function (str) {
        let min = 0xffffff;
        let best, current, i;
        for (i = 0; i < this.length; i++) {
            let rgb = rgbFromColor(this[i].color);
            current = dist(toHex(rgb[1], rgb[2], rgb[3]).substr(1), str.substr(1));
            if (current < min) {
                min = current;
                best = this[i];
            }
        }
        return best;
};

export default class HighlightColorEditing extends Plugin {
    /**
     * @inheritDoc
     */
    constructor(editor) {
        super(editor);

        // Define default configuration using named presets.
        editor.config.define(TEXT_COLOR, Colors);
    }

    /**
     * @inheritDoc
     */
    init() {
        const editor = this.editor;

        // Allow highlightColor attribute on text nodes.
        editor.model.schema.extend('$text', {allowAttributes: TEXT_COLOR});

        // Define view to model conversion.
        const options = editor.config.get('highlightColor.options');
        const definition = _buildDefinition(options);

        // Set-up the two-way conversion.
        editor.conversion.attributeToElement(definition);

        editor.conversion.for('upcast')
            .add(upcastElementToAttribute({
                view: {
                    name: 'mark',
                    attributes: {
                        title: 'color'
                    }
                },
                model: {
                    key: TEXT_COLOR,
                    value: viewElement => {
                        const color = viewElement.getStyle('background-color');

                        if (!color) {
                            return null
                        }

                        // determine closest color
                        let rgb = rgbFromColor(color);
                        if (!rgb) {
                            return null;
                        }
                        let best = options.closestRGB(toHex(rgb[1], rgb[2], rgb[3]));

                        if (!best) {
                            return null;
                        }

                        return best.color;
                    }
                }
            }));

        // Add highlightColor command.
        editor.commands.add(TEXT_COLOR, new HighlightColorCommand(editor));
    }
}

function _buildDefinition(options) {
    const definition = {
        model: {
            key: TEXT_COLOR,
            values: []
        },
        view: {},
        upcastAlso: {}
    };

    for (const option of options) {
        definition.model.values.push(option.color);
        definition.view[option.color] = {
            name: 'mark',
            styles: {
                'background-color': option.color
            },
            priority: 5
        };
    }

    return definition;
}

function toRGB(color) {
    let hex = color.substring(1);

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function toHex(r, g, b) {
    return '#' + parseInt(r).toString(16) + parseInt(g).toString(16) + parseInt(b).toString(16);
}

function rgbFromColor(color) {
    const regEx = /^rgb\((\d*),\s+(\d*),\s+(\d*)\)$/;
    return regEx.exec(color);
}

function dist(s, t) {
    if (!s.length || !t.length) return 0;
    return dist(s.slice(2), t.slice(2)) +
        Math.abs(parseInt(s.slice(0, 2), 16) - parseInt(t.slice(0, 2), 16));
}