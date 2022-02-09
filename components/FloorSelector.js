const FloorSelector = (props) => {
    const { materials, setFloor } = props
    const layers = materials[0].materials
    console.log(layers)

    return <>
        {layers.map((layer, index) => {
            return <button
                type="button"
                onClick={() => setFloor(layer.layer)}
                key={index + Date.now()}
            >{layer.name}</button>
        })}
    </>
}

export default FloorSelector