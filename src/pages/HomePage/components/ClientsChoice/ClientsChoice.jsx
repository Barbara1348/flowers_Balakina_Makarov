import style from './ClientsChoice.module.css'


function ClientsChoice() {

    return (
        <>
            <div className={style.products}>
                <div className={style.group}>
                    <h1 className={style.h1}>Client’s Choice</h1>
                    <div className={style.sort}>
                        <p className={style.category}>All Bouquets</p>
                        <img src="./img/CaretRight.svg" alt="" />
                    </div>
                </div>
                <div className={style.container}>

                    <div className={style.card}>
                        <img src="./img/Image (6).png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>White Whisper</h2>
                            <div className={style.price}>
                                <p className={style.before}>$97</p>
                                <p className={style.after}>$89</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image (7).png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>White Whisper</h2>
                            <div className={style.price}>
                                <p className={style.before}>$97</p>
                                <p className={style.after}>$89</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image (8).png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>White Whisper</h2>
                            <div className={style.price}>
                                <p className={style.before}>$97</p>
                                <p className={style.after}>$89</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <img src="./img/Image (9).png" alt="" />
                        <div className={style.description}>
                            <h2 className={style.h2}>White Whisper</h2>
                            <div className={style.price}>
                                <p className={style.before}>$97</p>
                                <p className={style.after}>$89</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ClientsChoice
