import style from './Steps.module.css'


function Steps() {

    return (
        <>
            <div className={style.products}>
                <div className={style.group}>
                    <h1 className={style.h1}>What Customers Say</h1>
                    <div className={style.sort}>
                        <p className={style.category}>See Delivery</p>
                        <img src="./img/CaretRight.svg" alt="" />
                    </div>
                </div>
                <div className={style.container}>
                    <div className={style.class}>
                        <button className={style.button}>01</button>
                        <div>
                            <h2 className={style.h2}>Choose Bouquet</h2>
                            <p className={style.p}>Explore our collection and pick the perfect arrangement for any occasion.</p>
                        </div>
                    </div>
<div className={style.class}>
                        <button className={style.button}>02</button>
                        <div>
                            <h2 className={style.h2}>Contact to Order</h2>
                            <p className={style.p}>Call or message us to place your order and add thoughtful personal touches.</p>
                        </div>
                    </div>
<div className={style.class}>
                        <button className={style.button}>03</button>
                        <div>
                            <h2 className={style.h2}>We Deliver</h2>
                            <p className={style.p}>Handcrafted with care and delivered fresh, right on schedule - every time.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Steps

