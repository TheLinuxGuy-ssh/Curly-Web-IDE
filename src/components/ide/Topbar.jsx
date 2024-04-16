import EditorBtn from "../EditorBtn";
import { moon } from "../../assets"
import Scripts from "../Scripts";

const Topbar = () => {
    return (
        <>
        <Scripts />
        <div className="topbar flex p-2">
            <div class="editorbtn editor-dropdown curly-main-btn">
  <input class="editor-dropdown-value" type="hidden" />
  <div class="editor-dropdown-input">
  <img src={moon} height={50} width={30} alt="" />
    <icon-quix icon="chevron-down"></icon-quix>
  </div>
  <div class="editor-dropdown-panel">
    <ul>
      <li data-value="value1">Like This Work</li>
      <li data-value="value2">Landing Page</li>
    </ul>
  </div>
</div>

<div class="editorbtn editor-dropdown">
  <input class="editor-dropdown-value" type="hidden" />
  <div class="editor-dropdown-input">
  File
    <icon-quix icon="chevron-down"></icon-quix>
  </div>
  <div class="editor-dropdown-panel">
    <ul>
      <li data-value="value1">New File</li>
      <li data-value="value2">New Folder</li>
      <li data-value="value1">Open File</li>
      <li data-value="value2">Open Folder</li>
    </ul>
  </div>
</div>
<div class="editorbtn editor-dropdown">
  <input class="editor-dropdown-value" type="hidden" />
  <div class="editor-dropdown-input">
  Edit
    <icon-quix icon="chevron-down"></icon-quix>
  </div>
  <div class="editor-dropdown-panel">
    <ul>
      <li data-value="value1">Find</li>
      <li data-value="value2">Toggle Sidebar</li>
    </ul>
  </div>
</div>
        </div>
        </>
    )
}

export default Topbar;