const Selector = (props) => {
    const { materials, setMaterial } = props

    return <>
        {materials.map((layer, index) => {
            return <button
                type="button"
                onClick={() => setMaterial(layer.layer)}
                key={index + Date.now()}
            >{layer.name}</button>
        })}
    </>
}

export default Selector