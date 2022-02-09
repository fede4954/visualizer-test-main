const Touch = (props) => {
    const { menu, setMenu } = props

    return <button
        type="button"
        onClick={() => setMenu(!menu)}
    >
        <img
            src="fingerprint.png"
            width="50px"
            height="50px"
        />
    </button>
}

export default Touch