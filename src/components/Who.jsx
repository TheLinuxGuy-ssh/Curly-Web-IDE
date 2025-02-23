import GridLayout from "react-grid-layout";

const Who = () => {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];
    return (


        <section className="who-we-are m-9 mt-[11rem] ml-[3rem] mr-[3rem] mb-[30rem]" id="about">
            <div className="w-full flex just justify-center">
                <div className="list-bullet"></div>
                    <h1 className="text-[3vw] mb-[7rem] title-curly">What is CurlyIDE?</h1>
            </div>
            <div className="w-[100%] flex">
            <div className="w-[40%]">
                <h1 className="font-tt text-left text-3xl tracking-normal about-text" data-aos="fade-up" data-aos-anchor-placement="top top">
                An Online IDE which is your ultimate coding companion, designed to empower developers of all levels with a seamless and efficient coding experience.
                At the heart of CurlyIDE lies a Powerful Code Editor accessible from any device, <strong className="color-transparent">anywhere, anytime!</strong>
                </h1>
            </div>
            <div className="w-[60%] ">
            <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key="a">
            <img src="./src/assets/4-small.png" alt="" />
          </div>
          <div key="b">
          <img src="./src/assets/4-small.png" alt="" />
          </div>
          <div key="c">
          <img src="./src/assets/4-small.png" alt="" />
          </div>
        </GridLayout>
            </div>
            </div>
        </section>
        

    );
};

export default Who;