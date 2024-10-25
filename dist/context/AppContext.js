import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { createContext } from 'use-context-selector';
// Create a global context
export var AppContext = createContext(null);
var defaultPost = {
    title: 'My new post',
    components: [],
    sources: {}
};
/* @ts-ignore */
export var AppProvider = function (_a) {
    var children = _a.children;
    // State slices for global context
    var _b = useState(defaultPost), post = _b[0], setPost = _b[1];
    return (_jsx(AppContext.Provider
    /* @ts-ignore */
    , { 
        /* @ts-ignore */
        value: {
            post: post,
            setPost: setPost
        }, children: children }));
};
