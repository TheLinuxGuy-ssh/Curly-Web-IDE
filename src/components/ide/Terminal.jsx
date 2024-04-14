import { Resizable } from 're-resizable';

const Terminal = () => {
    return (
        <Resizable 
          defaultSize={{
            width: "100%",
            height: "20%",
          }}
          minHeight="0"
          maxHeight="40%"
          enable={{
            top: true
          }}>
          <div className="terminal">
            Terminal
          </div>
        </Resizable>
    )
}

export default Terminal;