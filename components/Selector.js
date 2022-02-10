const Selector = (props) => {
    const { materials, setMaterial } = props

    return <ul className="z-50 w-[100px] h-[225px] md:w-[145px] md:h-[300px] lg:mr-[4.5%] xl:w-[200px] xl:h-[380px] xl:mr-[2.25%] 2xl:mr-[12.5%]">
        {materials.map((layer, index) => {
            return <li>
                <button
                    type="button"
                    className="text-transparent hover:bg-white hover:bg-opacity-[75%] hover:text-black rounded p-2"
                    onClick={() => setMaterial(layer.layer)}
                    key={index + Date.now()}
                >
                    <div className="flex justify-between items-center w-full my-2">
                        <div className="w-1/2">
                            <p className="text-xs">{layer.name}</p>
                        </div>
                        <div className="rounded border-4 border-white w-1/2">
                            <img
                                src={layer.thumbnail}
                            />
                        </div>
                    </div>
                </button>
            </li>
        })}
    </ul>
}

export default Selector