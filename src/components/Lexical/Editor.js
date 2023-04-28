import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin"
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import editorConfig from "./editorConfig";
// import AWS from 'aws-sdk'
import "./style.css"
import { API } from "aws-amplify";

export const Editor = ({readOnly, onChange, children}) => {
  const config = {
    ...editorConfig,
    readOnly,
    editorState: (editor) => {
      if (children) {
        const editorState = editor.parseEditorState(JSON.stringify(children));
        editor.setEditorState(editorState);
    }
  }
  }

  async function createPost(){
    const editorInput = document.querySelector("editor-input");
    const myApi = "MyApi";
    const path = '/posts';
    const myPost = {
      body: editorInput, 
      headers: {} // OPTIONAL
    };
    console.log(editorInput)
    return await API.post(myApi, path, myPost);
  }
  return (
<>
      <LexicalComposer initialConfig={config} children={children}>
        <div className="editor-container">
          {!readOnly && <ToolbarPlugin />}
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="editor-input" readOnly={readOnly} />
              }
              placeholder={
                <div className="editor-placeholder">Enter some text...</div>
              }
            />
            <HistoryPlugin />
            {!readOnly && <TreeViewPlugin />}
            <AutoFocusPlugin />
            <LinkPlugin />
            <ListPlugin />
            <AutoLinkPlugin />
            <CodeHighlightPlugin />
            <ListMaxIndentLevelPlugin maxDepth={7} />
            <OnChangePlugin onChange={onChange} />
          </div>
        </div>
      </LexicalComposer>
      <button onClick={createPost}>Create Post</button>
      {/* <script src="https://sdk.amazonaws.com/js/aws-sdk-2.889.0.min.js"></script>
<script>
{function createPost() {
  // Replace 'YOUR_API_GATEWAY_ENDPOINT' with the actual URL of your API Gateway endpoint.
  var endpoint = 'YOUR_API_GATEWAY_ENDPOINT';
  var lambda = new AWS.Lambda();

  var params = {
    FunctionName: 'createPost',
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify({
      // Replace with your post data
      title: 'My First Post',
      content: 'This is the content of my first post.',
      author: 'John Doe'
    })
  };

  // Make a POST request to the API Gateway endpoint
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}}
</script> */}
    </>
  );
};
