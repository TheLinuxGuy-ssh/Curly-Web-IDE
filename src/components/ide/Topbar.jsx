import EditorBtn from "../EditorBtn";
import { moon } from "../../assets"
import { profiledrop } from "../../constants";
import Scripts from "../Scripts";

const Topbar = () => {
    return (
        <>
        <Scripts />
        <div className="topbar flex p-2">
            <EditorBtn className="px-[0.5rem] py-2 shadow-glow">
                <img src={moon} height={50} width={30} alt="" />
            </EditorBtn>
            <div class="editorbtn editor-dropdown">
  <input class="editor-dropdown-value" type="hidden" />
  <div class="editor-dropdown-input">
    <input type="text" readonly value="Select" />
    <icon-quix icon="chevron-down"></icon-quix>
  </div>
  <div class="editor-dropdown-panel">
    <ul>
      <li data-value="value1">Lorem Ipsum Dolor</li>
      <li data-value="value2">Vestibulum Consequat</li>
      <li data-value="value3">Curabitur Rutrum</li>
      <li data-value="value4">Maecenas Quis Mi</li>
    </ul>
  </div>
</div>
        </div>
        </>
    )
}

export default Topbar;