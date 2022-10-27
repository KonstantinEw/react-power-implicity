export const Slider = () => {
    return <div className="container">
        <h1 className="slider__main-title">The Power of Simplicity</h1>
        <h3 className="slider__sub-title">Instead of spending time searching for the right app, our AI will bring the right app to you.</h3>
        <div className="slider__button--wrapper">
            <button className="slider__button"><p className="slider__button-text">Learn</p></button>
        </div>
        <ul className="slider__dots">
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot slider__dot--active"></li>
            <li className="slider__dot"></li>
            <li className="slider__dot"></li>
        </ul>
    </div>
}