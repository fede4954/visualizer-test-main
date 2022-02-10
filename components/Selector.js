const Selector = (props) => {
    const { materials, setMaterial } = props

    return <ul className="absolute md:w-[300px] h-[425px] left-[75%] bottom-[2.5%] md:bottom-[25%] 2xl:left-[70%]">
        {materials.map((layer, index) => {
            return <li>
                <button
                    type="button"
                    className="text-transparent hover:bg-white hover:bg-opacity-[75%] hover:text-black rounded p-2"
                    onClick={() => setMaterial(layer.layer)}
                    key={index + Date.now()}
                >
                    <div className="flex justify-between items-center w-full my-2">
                        <div className="w-[150px]">
                            <p>{layer.name}</p>
                        </div>
                        <div className="rounded border-4 border-white">
                            <img
                                src={layer.thumbnail}
                                className="w-[100px]"
                            />
                        </div>
                    </div>
                </button>
            </li>
        })}
    </ul>
}

export default Selector