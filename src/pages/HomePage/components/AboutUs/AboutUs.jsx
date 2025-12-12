import style from './AboutUs.module.css'


function AboutUs() {

    return (
        <>
            <div className={style.div}>
                <div className={style.container}>
                    <div className={style.about}>
                        <button className={style.info}>About La Flora</button>
                        <h1 className={style.h1}>Locally Crafted. <br /> Lovingly Delivered</h1>
                        <div className={style.text}>
                            <p className={style.p}>At La Flora Boutique, we believe flowers do more than decorate - they connect, comfort, and celebrate life's most meaningful moments. Based in the heart of Los Angeles, we create elegant, handcrafted bouquets designed to leave a lasting impression.</p>
                            <p className={style.p}>Each bouquet is carefully handcrafted by local florists using the freshest seasonal blooms. Whether you're sending love, thanks, or simply brightening a space - every petal holds purpose.</p>
                        </div>
                        <button className={style.h2}>Learn More</button>
                    </div>
                    <section className={style.section}>
                        <p className={style.p}>Since 2014</p>
                        <h1 className={style.h11}>La Flora <br /> Boutique</h1>
                        <img className={style.img} src="./img/Illustrations.svg" alt="" />
                    </section>
                </div>

            </div>
        </>
    )
}

export default AboutUs

