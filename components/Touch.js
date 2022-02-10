const Touch = (props) => {
    const { menu, setMenu, position } = props

    return <button
        type="button"
        onClick={() => setMenu(!menu)}
        className={position}
    >
        <img
            src="fingerprint.png"
            className="w-[30px] md:w-[50px]"
        />
    </button>
}

export default Touch