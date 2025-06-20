import generic from "#/generic.module.css";

export const NotFound = () => {
    return(
        <div className={`${generic.wrapper}`}>
            <h1 className={`${generic.wmin} ${generic}`}>Page not found</h1>
            <div>
                <button>Take me home</button>
            </div>
        </div>
    )
}