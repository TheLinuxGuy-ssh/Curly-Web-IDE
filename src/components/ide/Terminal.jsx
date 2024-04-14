import { Resizable } from 're-resizable';

const Terminal = () => {
    return (
        <Resizable
  defaultSize={{
    width: "100%",
    height: "20%",
  }}
  minHeight="0"
  maxHeight="20vh"
  enable={{
    top: true
  }} className="terminal"
>
        <div>
            Terminal
        </div>
        </Resizable>
    )
}

export default Terminal;