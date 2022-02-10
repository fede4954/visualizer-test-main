import Material from "./Material"

const Selector = (props) => {
    const { materials, setMaterial } = props

    return <div className="flex flex-col items-end z-50 w-[100px] h-[270px] md:w-[145px] md:h-[350px] xl:w-[200px] xl:h-[430px]">
        <span className="text-white text-xl md:text-2xl lg:text-3xl mr-[25%]">&uarr;</span>
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
        <span className="text-white text-xl md:text-2xl lg:text-3xl mr-[25%]">&darr;</span>
    </div>
}

export default Selector