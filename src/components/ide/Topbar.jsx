import 'font-awesome/css/font-awesome.min.css';
import EditorBtn from "../EditorBtn";

const Topbar = () => {
    return (
    <div className="topbar">
        <EditorBtn px="2">
            <i className="fa-regular fa-user"></i>
        </EditorBtn>
    </div>
    )
}

export default Topbar;