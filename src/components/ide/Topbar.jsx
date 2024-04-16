import EditorBtn from "../EditorBtn";
import { useAuth0 } from "@auth0/auth0-react";
import { moon } from "../../assets"
import Scripts from "../Scripts";

const Topbar = () => {
  const { logout } = useAuth0();
    return (
        <>
        <Scripts />
        <div className="topbar flex pb-2 pt-2 pl-2 pr-2">
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
<div className="right-topbar flex justify-end w-full">
<div class="editorbtn editor-dropdown border-topbar-item">
  <input class="editor-dropdown-value topbar-profile" type="hidden" />
  <div class="editor-dropdown-input">
  <i className="fa fa-user"></i>
    <icon-quix icon="chevron-down"></icon-quix>
  </div>
  <div class="editor-dropdown-panel">
    <ul>
      <li data-value="value1">Profile</li>
      <li data-value="value2" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</li>
    </ul>
  </div>
</div>
</div>
        </div>
        </>
    )
}

export default Topbar;