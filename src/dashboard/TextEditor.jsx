import React, { useState } from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/save.min.js';
import './TextEditor.css'

const CustomFroalaEditor = () => {
    const [content, setContent] = useState('');

    const handleModelChange = (model) => {
        setContent(model);
    };

    const editorConfig = {
        placeholderText: 'Your content goes here...',
        charCounterCount: true,
        wordCounter: true,
        charCounterMax: 6000,
        saveInterval: 5000,
        events: {
            "charCounter.exceeded": function () {
                alert('You have reached the maximum number of characters.');
            },
        },
        dragInline: false,
        fileAllowedTypes: ['image/jpeg', 'image/jpg', 'image/png'],
        editorClass: 'custom-editor-class'
    };

    return (
            <FroalaEditor
                tag='textarea'
                config={editorConfig}
                model={content}
                onModelChange={handleModelChange}
            />
    );
};

export default CustomFroalaEditor;
