import EditorBtn from "../EditorBtn";

const Code = () => {
    return (
        <div className="code">
            <h1 className="editor-greeting">
            Welcome to Curly IDE
            </h1>
            <div className="start">
                <h1 className="editor-title">Start</h1>
                <ul className="editor-start">
                    <li>
                    <EditorBtn>
                            <i className="fa fa-plus mr-2"></i> New File
                        </EditorBtn>
                    </li>
                    <li>
                        <EditorBtn>
                            <i className="fa fa-folder mr-2"></i> New Folder
                        </EditorBtn>
                    </li>
                    <li>
                    <EditorBtn>
                            <i className="fa fa-upload mr-2"></i> Upload
                        </EditorBtn>
                    </li>
                    <li>
                        <EditorBtn>
                            <i className="fa-brands fa-github mr-2"></i> Git Import
                        </EditorBtn>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div id="felix" className="felix" >
      <div className="eyes">
        <div className="eye left"></div>
        <div className="eye right"></div>
      </div>
      <div className="felix-body">
      <div className="felix-hand right"></div>
      <div className="felix-hand left"></div>  
      </div>
    </div>
        </div>
    )
}

export default Code;