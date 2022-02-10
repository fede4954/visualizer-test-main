import Image from 'next/image'

const Layer = (props) => {
    const { src, alt, checkMenus } = props

    return <div
        className="fixed top-0 left-0 w-full h-full"
        onClick={() => checkMenus()}
    >
        <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            priority
        />
    </div>
}

export default Layer