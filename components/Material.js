const Material = (props) => {
    const { material, setMaterial } = props

    return <button
        type="button"
        className="text-transparent hover:bg-white hover:bg-opacity-[75%] hover:text-black rounded p-2"
        onClick={() => setMaterial(material.layer)}
    >
        <div className="flex justify-between items-center w-full my-2">
            <div className="w-1/2">
                <p className="text-xs sm:text-sm md:text-lg">{material.name}</p>
            </div>
            <div className="rounded border-4 border-white w-1/2">
                <img
                    src={material.thumbnail}
                />
            </div>
        </div>
    </button>
}

export default Material