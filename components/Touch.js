const Touch = (props) => {
    const { menu, setMenu } = props

    return <button
        type="button"
        onClick={() => setMenu(!menu)}
        className="absolute left-[35%] bottom-[35%] md:bottom-[30%] lg:bottom-[5%]"
    >
        <img
            src="fingerprint.png"
            className="w-[30px] md:w-[50px]"
        />
    </button>
}

export default Touch