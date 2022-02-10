import Material from "./Material"

const Selector = (props) => {
    const { materials, setMaterial } = props

    return <div className="flex flex-col z-50 w-[100px] h-[225px] md:w-[145px] md:h-[300px] xl:w-[200px] xl:h-[380px]">
        <ul>
            {materials.map((material, index) => {
                return <li key={index + Date.now()}>
                    <Material
                        material={material}
                        setMaterial={setMaterial}
                    />
                </li>
            })}
        </ul>
    </div>
}

export default Selector