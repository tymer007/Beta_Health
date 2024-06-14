import React, { useState } from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";

export const Editor = (props) => {
    const [html, setHtml] = useState(props.article.body);
    const [title, setTitle] = useState(props.article.title);

    function handleModelChange(html) {
        setHtml(html);
    }

    return (
        <div>
            <input
                value={title}
                onInput={(e) => setTitle(e.currentTarget.value)}
                className="border border-slate-300 rounded-lg p-2 w-full mb-4"
                placeholder="Enter post title..."
            />

            <FroalaEditorComponent model={html} onModelChange={handleModelChange} />

            <button
                type="button"
                className="mt-4 rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() =>
                    props.handleSubmit({ title, body: html, id: props.article.id })
                }
            >
                Submit
            </button>
        </div>
    );
};

export default Editor;
