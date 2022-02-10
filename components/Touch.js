const Touch = (props) => {
    const { menu, setMenu, position, setTouch } = props

    return <button
        type="button"
        onClick={() =>{
            setMenu(!menu)
            setTouch(false)
        }}
        className={position}
    >
        <img
            src="fingerprint.png"
            className="w-[30px] md:w-[50px]"
        />
    </button>
}

export default Touch