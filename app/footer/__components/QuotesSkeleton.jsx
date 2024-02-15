import style from "./style.module.scss"

export const QuotesSkeleton = () => {
    return ( <div className={style.bg}>
        <div className={style.quoteLine}/>
        <div className={style.author}/>
    </div> );
}
