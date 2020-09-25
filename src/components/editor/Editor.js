import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa'
const Editor = ({ displayName, language, value, onChange }) => {

    const handleChange = (editor, data, codeMirrorValue) => {
        onChange(codeMirrorValue)
    }
    const [open, setOpen] = useState(true)

    return (
        <div className={`editor__container ${open ? '' : 'collapsed'}`}>
            <div className="editor__title">
                {displayName}
                <button onClick={() => setOpen(!open)} className="expand-collapsed-button">
                    {open ? <FaCompressAlt /> : <FaExpandAlt />}
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className='code-mirror-wrapper'
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        theme: 'material'
                    }
                }

            />
        </div>
    );
};

export default Editor;